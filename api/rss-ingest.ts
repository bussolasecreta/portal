
import { initializeApp, getApps, getApp } from "firebase/app";
import { 
  getFirestore, 
  collection, 
  addDoc, 
  query, 
  where, 
  getDocs, 
  Timestamp,
  limit 
} from "firebase/firestore";
import Parser from 'rss-parser';

// Configuração do Firebase extraída do ambiente com suporte a múltiplos prefixos
const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY || process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN || process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VITE_FIREBASE_PROJECT_ID || process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET || process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID || process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VITE_FIREBASE_APP_ID || process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};

// Inicialização do Firebase (Singleton)
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

// Lista de Feeds Estratégicos
const FEEDS = [
  { name: 'HBR - Innovation', url: 'https://hbr.org/rss/business-innovation' },
  { name: 'MIT Sloan Review', url: 'https://sloanreview.mit.edu/feed/' },
  { name: 'McKinsey Insights', url: 'https://www.mckinsey.com/insights/rss' },
  { name: 'Strategy+Business', url: 'https://www.strategy-business.com/rss/all_articles' }
];

const parser = new Parser();

export default async function handler(req: any, res: any) {
  if (req.method !== 'GET' && req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const stats = {
    totalProcessed: 0,
    newlyInserted: 0,
    skipped: 0,
    errors: [] as string[]
  };

  try {
    for (const feedSource of FEEDS) {
      try {
        const feed = await parser.parseURL(feedSource.url);
        
        for (const item of feed.items) {
          stats.totalProcessed++;
          
          if (!item.link || !item.title) continue;

          // 1. Verificar se a notícia já existe (Deduplicação por Link)
          const newsRef = collection(db, "news");
          const q = query(newsRef, where("link", "==", item.link), limit(1));
          const existingDocs = await getDocs(q);

          if (existingDocs.empty) {
            // 2. Normalizar dados
            const newInsight = {
              source: feedSource.name,
              title: item.title,
              link: item.link,
              summary: item.contentSnippet || item.summary || item.description || "Sem resumo disponível.",
              publishedAt: item.isoDate ? Timestamp.fromDate(new Date(item.isoDate)) : Timestamp.now(),
              createdAt: Timestamp.now()
            };

            // 3. Inserir no Firestore
            await addDoc(newsRef, newInsight);
            stats.newlyInserted++;
          } else {
            stats.skipped++;
          }

          // Limite de segurança por execução
          if (stats.newlyInserted > 50) break;
        }
      } catch (feedError: any) {
        stats.errors.push(`Erro no feed ${feedSource.name}: ${feedError.message}`);
      }
    }

    return res.status(200).json({
      success: true,
      message: 'Processamento de RSS concluído.',
      stats
    });

  } catch (error: any) {
    console.error('Erro crítico na ingestão:', error);
    return res.status(500).json({
      success: false,
      error: error.message
    });
  }
}
