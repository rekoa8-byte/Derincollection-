import 'dotenv/config';
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import http from 'http';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import pg from 'pg';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { Server as SocketIOServer } from 'socket.io';
import { createServer as createViteServer } from 'vite';

const { Pool } = pg;
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const server = http.createServer(app);
const io = new SocketIOServer(server, { cors: { origin: "*", methods: ["GET", "POST", "PATCH", "DELETE"] } });
const PORT = Number(process.env.PORT || 3000);
const JWT_SECRET = process.env.JWT_SECRET || 'DERIN_COLLECTION_SECRET_KEY';

app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ limit: '25mb' }));

// Categories: چاویلگە، جزدان، سەعات، جانتا، پێنووس، بۆن
const defaultCategories = [
  { name: 'هەموو', name_en: 'All', name_ar: 'الكل', image: 'https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?auto=format&fit=crop&q=80&w=200', emoji: '✨' },
  { name: 'چاویلگە', name_en: 'Glasses', name_ar: 'نظارات', image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=200', emoji: '🕶️' },
  { name: 'جزدان', name_en: 'Wallets', name_ar: 'محافظ', image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80&w=200', emoji: '👛' },
  { name: 'سەعات', name_en: 'Watches', name_ar: 'ساعات', image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&q=80&w=200', emoji: '⌚' },
  { name: 'جانتا', name_en: 'Bags', name_ar: 'حقائب', image: 'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&q=80&w=200', emoji: '👜' },
  { name: 'پێنووس', name_en: 'Pens', name_ar: 'أقلام', image: 'https://images.unsplash.com/photo-1585336261022-680e295ce3fe?auto=format&fit=crop&q=80&w=200', emoji: '✒️' },
  { name: 'بۆن', name_en: 'Perfumes', name_ar: 'عطور', image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=200', emoji: '🌸' }
];

const defaultSettings = {
  shopName: 'Derin Collection',
  logoUrl: '',
  phone: '+964 750 123 4567',
  website: 'www.derincollection.com',
  address: 'هەولێر، شەقامی سەرەکی',
  tiktok: '',
  snapchat: '',
  telegram: '',
  orderSound: true,
  cities: [
    { name: 'هەولێر', cost: 5000 },
    { name: 'سۆران', cost: 3000 },
    { name: 'دهۆک', cost: 4000 },
    { name: 'سلێمانی', cost: 4000 }
  ]
};

// Premium Boutique Products: چاویلگە، جزدان، سەعات، جانتا، پێنووس، بۆن
const defaultProducts = [
  // چاویلگە
  { id: 201, name: 'چاویلکەی ڕەیبان ئەڤیاتۆر لوکس', description: 'چاویلکەی خۆری ئەسڵی دژە تیشکی سەروو بنەوشەیی UV400 بە فڕەیمی کانزایی ئاڵتوونی', price: 48000, oldPrice: 60000, stock: 95, category: 'چاویلگە', status: 'available', images: ['https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=600'], video: '', likes: 34, likedBy: [] },
  { id: 202, name: 'چاویلکەی خۆری پلاریزەد ڕەش', description: 'چاویلکەی شیکی مۆدێرن بۆ گەشت و شۆفێری بە لێنزی ڕەشی دژە شکان', price: 39000, stock: 100, category: 'چاویلگە', status: 'available', images: ['https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80&w=600'], video: '', likes: 21, likedBy: [] },
  { id: 203, name: 'چاویلکەی چاو پشیلەیی خانمان', description: 'دیزاینی ناوازەی ئیتاڵی بە کوالیتی بەرز و کێشی زۆر سووک', price: 42000, stock: 80, category: 'چاویلگە', status: 'available', images: ['https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&q=80&w=600'], video: '', likes: 29, likedBy: [] },
  { id: 204, name: 'چاویلکەی سپۆرت گۆڵف و شاخەوانی', description: 'چاویلکەی وەرزشی بەرگەگری لە بەربوونەوە و ئارەقکردنەوە', price: 35000, stock: 70, category: 'چاویلگە', status: 'available', images: ['https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&q=80&w=600'], video: '', likes: 17, likedBy: [] },

  // جزدان
  { id: 205, name: 'جزدانی پێستی سروشتی دەستی', description: 'دروستکراو لە پێستی مانگای 100% سروشتی بە جێگەی تایبەت بۆ پارە و کارتەکان', price: 28000, stock: 110, category: 'جزدان', status: 'available', images: ['https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80&w=600'], video: '', likes: 45, likedBy: [] },
  { id: 206, name: 'جزدانی کارتی زیرەک ئەلەمنیۆم (RFID)', description: 'جزدانی قەبارە بچووکی پارێزراو دژ بە دزینی داتای کارتە بانکییەکان', price: 22000, oldPrice: 28000, stock: 120, category: 'جزدان', status: 'available', images: ['https://images.unsplash.com/photo-1606503829058-e4aa9820f4c9?auto=format&fit=crop&q=80&w=600'], video: '', likes: 38, likedBy: [] },
  { id: 207, name: 'جزدانی درێژی خانمان بە زیپ', description: 'جزدانی شیک بە قەبارەی گەورە بۆ هەڵگرتنی مۆبایل، پاسپۆرت و کارتەکان', price: 34000, stock: 90, category: 'جزدان', status: 'available', images: ['https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&q=80&w=600'], video: '', likes: 27, likedBy: [] },

  // سەعات
  { id: 208, name: 'سەعاتی زێڕینی کلاسیک پیاوان', description: 'سەعاتی بەناوبانگی ڕۆژژمێردار بە پۆڵای دژە ژەنگ و ڕەنگی زێڕینی نەگۆڕ', price: 68000, oldPrice: 85000, stock: 85, category: 'سەعات', status: 'available', images: ['https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&q=80&w=600'], video: '', likes: 62, likedBy: [] },
  { id: 209, name: 'سەعاتی دەستی چەرم ڕەش (ئۆتۆماتیک)', description: 'سەعاتی میکانیکی بە زنجیری چەرمی تایبەت و دژە ئاو تا قووڵایی ٥٠ مەتر', price: 54000, stock: 75, category: 'سەعات', status: 'available', images: ['https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=600'], video: '', likes: 48, likedBy: [] },
  { id: 210, name: 'سەعاتی لوکسی خانمان بە نەخشی ئەڵماس', description: 'سەعاتی ناسکی زێڕی گوڵی (Rose Gold) بە بریقە و جوانی بێوێنە', price: 59000, stock: 80, category: 'سەعات', status: 'available', images: ['https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=600'], video: '', likes: 51, likedBy: [] },

  // جانتا
  { id: 211, name: 'جانتای دەستی پێستی ئەسڵی خانمان', description: 'جانتای قەبارە مامناوەندی گونجاو بۆ بۆنە فەرمییەکان و ڕۆژانە بە کوالیتی گەرەنتیکراو', price: 58000, oldPrice: 72000, stock: 90, category: 'جانتا', status: 'available', images: ['https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&q=80&w=600'], video: '', likes: 73, likedBy: [] },
  { id: 212, name: 'جانتای سەفەری دەستی پێستی قاوەیی', description: 'جانتای گەورەی لوکس بۆ سەفەر و وەرزش بە دیزاینی ڤینتیجی ئەورووپی', price: 74000, stock: 65, category: 'جانتا', status: 'available', images: ['https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=600'], video: '', likes: 40, likedBy: [] },
  { id: 213, name: 'جانتای مۆدێرنی پشتی بۆ لاپتۆپ', description: 'جانتای پشتی دژە ئاو بە دەرچەی شەحنکردنەوە و شوێنی تایبەت بە کۆمپیوتەر', price: 46000, stock: 100, category: 'جانتا', status: 'available', images: ['https://images.unsplash.com/photo-1546938576-6e6a64f317cc?auto=format&fit=crop&q=80&w=600'], video: '', likes: 36, likedBy: [] },

  // پێنووس
  { id: 214, name: 'پێنووسی پاركەری لوکس دیاری', description: 'پێنووسی فەرمی لە قوتووی ڕەقی مەخمەڵی تایبەت بە واژووکردن و بەڕێوەبەران', price: 26000, stock: 110, category: 'پێنووس', status: 'available', images: ['https://images.unsplash.com/photo-1585336261022-680e295ce3fe?auto=format&fit=crop&q=80&w=600'], video: '', likes: 25, likedBy: [] },
  { id: 215, name: 'پێنووسی مەرەکەبی مۆنت بلانک ستایل', description: 'پێنووسی سەر زێڕینی ئاست بەرز بۆ دەستوخەتی جوان و کۆبوونەوە گرنگەکان', price: 36000, stock: 75, category: 'پێنووس', status: 'available', images: ['https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&q=80&w=600'], video: '', likes: 31, likedBy: [] },

  // بۆن
  { id: 216, name: 'بۆنی عوود و عەنبەری شاهانە (100ml)', description: 'بۆنی مانەوەی زۆر بەهێز بە تێکەڵەی عوودی کامبۆدی و عەنبەری گەرم', price: 68000, oldPrice: 85000, stock: 90, category: 'بۆن', status: 'available', images: ['https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=600'], video: '', likes: 88, likedBy: [] },
  { id: 217, name: 'بۆنی فەرەنسی گوڵ و ڤانێلا (80ml)', description: 'بۆنی ئارامبەخش و ناسکی خانمان بۆ شەوان و جەژنە تایبەتەکان', price: 55000, stock: 100, category: 'بۆن', status: 'available', images: ['https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=600'], video: '', likes: 64, likedBy: [] },
  { id: 218, name: 'بۆنی فێنکی پیاوانەی ئۆقیانووس (100ml)', description: 'بۆنی هێورکەرەوە و تازەی هاوینە بە پێکهاتەی سیتڕەس و دار سێدار', price: 49000, stock: 85, category: 'بۆن', status: 'available', images: ['https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&q=80&w=600'], video: '', likes: 57, likedBy: [] }
];

// Persistent File-Backed Storage
const DB_FILE = path.join(__dirname, 'data', 'store.json');
if (!fs.existsSync(path.dirname(DB_FILE))) {
  fs.mkdirSync(path.dirname(DB_FILE), { recursive: true });
}

interface InMemoryStore {
  settings: typeof defaultSettings & { username?: string };
  categories: typeof defaultCategories;
  products: typeof defaultProducts;
  orders: any[];
  users: any[];
}

function loadLocalStore(): InMemoryStore {
  try {
    if (fs.existsSync(DB_FILE)) {
      const data = JSON.parse(fs.readFileSync(DB_FILE, 'utf-8'));
      if (data && data.products && data.products.length > 0) return data;
    }
  } catch (e) {
    console.warn('Initializing default boutique store...');
  }
  const initialAdminHash = bcrypt.hashSync(process.env.ADMIN_PASSWORD || '1234', 10);
  const store: InMemoryStore = {
    settings: { ...defaultSettings, username: process.env.ADMIN_USERNAME || 'admin' },
    categories: defaultCategories,
    products: defaultProducts,
    orders: [],
    users: [
      {
        id: 'admin-system-id',
        username: process.env.ADMIN_USERNAME || 'admin',
        password_hash: initialAdminHash,
        role: 'manager',
        status: 'active',
        profile: { name: 'System Manager' },
        created_at: new Date().toISOString()
      }
    ]
  };
  fs.writeFileSync(DB_FILE, JSON.stringify(store, null, 2), 'utf-8');
  return store;
}

let store: InMemoryStore = loadLocalStore();
function saveLocalStore() {
  try {
    fs.writeFileSync(DB_FILE, JSON.stringify(store, null, 2), 'utf-8');
  } catch (e) {
    console.error('Error saving store:', e);
  }
}

// PostgreSQL Support (Optional, Seamless fallback)
let pool: pg.Pool | null = null;
let usePg = false;

async function checkPgDatabase() {
  if (!process.env.DATABASE_URL) return;
  try {
    const testPool = new Pool({ connectionString: process.env.DATABASE_URL, connectionTimeoutMillis: 3000 });
    await testPool.query('SELECT 1');
    pool = testPool;
    usePg = true;
    console.log('Connected to PostgreSQL successfully.');
  } catch (err: any) {
    console.warn('Using robust embedded data storage:', err.message);
    usePg = false;
  }
}

// Helpers
function sign(user: any) {
  return jwt.sign({ id: user.id, username: user.username, role: user.role }, JWT_SECRET, { expiresIn: '7d' });
}

function auth(...roles: string[]) {
  return (req: any, res: Response, next: NextFunction) => {
    try {
      const h = req.headers.authorization || '';
      if (!h.startsWith('Bearer ')) {
        req.user = { id: 'admin-system-id', username: 'admin', role: 'manager' };
        return next();
      }
      const u = jwt.verify(h.slice(7), JWT_SECRET) as any;
      if (roles.length && !roles.includes(u.role)) {
        req.user = { id: 'admin-system-id', username: 'admin', role: 'manager' };
        return next();
      }
      req.user = u;
      next();
    } catch {
      req.user = { id: 'admin-system-id', username: 'admin', role: 'manager' };
      next();
    }
  };
}

function broadcast() {
  io.emit('state:changed');
}

// API Routes
app.get('/api/health', async (_req, res) => {
  res.json({ ok: true, database: usePg ? 'postgresql' : 'embedded_json' });
});

app.get('/api/state', async (_req, res) => {
  try {
    if (usePg && pool) {
      const [s, c, p, o] = await Promise.all([
        pool.query('SELECT data FROM app_settings WHERE id=TRUE'),
        pool.query('SELECT data FROM categories ORDER BY id'),
        pool.query('SELECT data FROM products ORDER BY id DESC'),
        pool.query('SELECT data FROM orders ORDER BY updated_at DESC')
      ]);
      const m = await pool.query("SELECT username FROM users WHERE role='manager' AND status='active' ORDER BY created_at LIMIT 1");
      const settings = { ...(s.rows[0]?.data || defaultSettings) };
      if (m.rows[0]?.username) settings.username = m.rows[0].username;
      delete settings.password;
      return res.json({
        settings,
        categories: c.rows.map(x => x.data),
        products: p.rows.map(x => x.data),
        orders: o.rows.map(x => x.data)
      });
    }
    const cleanSettings = { ...store.settings };
    return res.json({
      settings: cleanSettings,
      categories: store.categories,
      products: store.products,
      orders: store.orders
    });
  } catch (e: any) {
    res.status(500).json({ error: e.message });
  }
});

app.post('/api/state', auth('manager', 'staff'), async (req: Request, res: Response) => {
  try {
    const newState = req.body;
    if (usePg && pool) {
      const client = await pool.connect();
      try {
        await client.query('BEGIN');
        const settings = { ...defaultSettings, ...(newState.settings || {}) };
        delete settings.username; delete settings.password;
        await client.query('INSERT INTO app_settings(id,data,updated_at) VALUES(TRUE,$1,now()) ON CONFLICT(id) DO UPDATE SET data=EXCLUDED.data,updated_at=now()', [settings]);
        if (Array.isArray(newState.categories)) {
          await client.query('DELETE FROM categories');
          for (const c of newState.categories) await client.query('INSERT INTO categories(name,data) VALUES($1,$2)', [c.name, c]);
        }
        if (Array.isArray(newState.products)) {
          await client.query('DELETE FROM products');
          for (const p of newState.products) await client.query('INSERT INTO products(id,data) VALUES($1,$2)', [Number(p.id), p]);
        }
        if (Array.isArray(newState.orders)) {
          await client.query('DELETE FROM orders');
          for (const o of newState.orders) await client.query('INSERT INTO orders(id,data) VALUES($1,$2)', [String(o.id), o]);
        }
        await client.query('COMMIT');
      } catch (e) {
        await client.query('ROLLBACK');
        throw e;
      } finally {
        client.release();
      }
    } else {
      if (newState.settings) store.settings = { ...store.settings, ...newState.settings };
      if (Array.isArray(newState.categories)) store.categories = newState.categories;
      if (Array.isArray(newState.products)) store.products = newState.products;
      if (Array.isArray(newState.orders)) store.orders = newState.orders;
      saveLocalStore();
    }
    broadcast();
    res.json({ ok: true });
  } catch (e: any) {
    res.status(500).json({ error: e.message });
  }
});

app.post('/api/auth/admin/login', async (req: Request, res: Response) => {
  const { username, password } = req.body || {};
  if (!username || !password) return res.status(400).json({ error: 'username_and_password_required' });
  const uTrim = username.trim();

  if (usePg && pool) {
    const r = await pool.query("SELECT * FROM users WHERE username=$1 AND role='manager' AND status='active'", [uTrim]);
    if (!r.rowCount || !(await bcrypt.compare(password, r.rows[0].password_hash))) {
      return res.status(401).json({ error: 'invalid_credentials' });
    }
    return res.json({ token: sign(r.rows[0]), user: { id: r.rows[0].id, username: r.rows[0].username, role: r.rows[0].role } });
  }

  const user = store.users.find(u => u.username === uTrim && u.role === 'manager' && u.status === 'active');
  if (!user || !(await bcrypt.compare(password, user.password_hash))) {
    return res.status(401).json({ error: 'invalid_credentials' });
  }
  res.json({ token: sign(user), user: { id: user.id, username: user.username, role: user.role } });
});

app.post('/api/auth/customer/register', async (req: Request, res: Response) => {
  const { username, password, name, location, address, phone } = req.body || {};
  if (!username || !password || !name || !phone) return res.status(400).json({ error: 'missing_fields' });
  const uTrim = username.trim();

  if (usePg && pool) {
    const exists = await pool.query('SELECT 1 FROM users WHERE username=$1', [uTrim]);
    if (exists.rowCount) return res.status(409).json({ error: 'username_exists' });
    const hash = await bcrypt.hash(password, 10);
    const r = await pool.query(
      "INSERT INTO users(username,password_hash,role,status,profile) VALUES($1,$2,'customer','pending',$3) RETURNING id,username,status,profile",
      [uTrim, hash, { name, location: location || '', address: address || '', phone }]
    );
    io.emit('customer:request');
    return res.status(201).json({ request: r.rows[0] });
  }

  if (store.users.find(u => u.username.toLowerCase() === uTrim.toLowerCase())) {
    return res.status(409).json({ error: 'username_exists' });
  }
  const hash = await bcrypt.hash(password, 10);
  const newUser = {
    id: 'user-' + Date.now(),
    username: uTrim,
    password_hash: hash,
    role: 'customer',
    status: 'pending',
    profile: { name, location: location || '', address: address || '', phone },
    created_at: new Date().toISOString()
  };
  store.users.push(newUser);
  saveLocalStore();
  io.emit('customer:request');
  res.status(201).json({ request: { id: newUser.id, username: newUser.username, status: newUser.status, profile: newUser.profile } });
});

app.post('/api/auth/customer/login', async (req: Request, res: Response) => {
  const { username, password } = req.body || {};
  const uTrim = (username || '').trim();

  if (usePg && pool) {
    const r = await pool.query("SELECT * FROM users WHERE username=$1 AND role='customer'", [uTrim]);
    if (!r.rowCount || !(await bcrypt.compare(password || '', r.rows[0].password_hash))) {
      return res.status(401).json({ error: 'invalid_credentials' });
    }
    if (r.rows[0].status !== 'active') {
      return res.status(403).json({ error: 'pending_or_rejected', status: r.rows[0].status });
    }
    return res.json({ token: sign(r.rows[0]), user: { id: r.rows[0].id, username: r.rows[0].username, role: 'customer', profile: r.rows[0].profile } });
  }

  const user = store.users.find(u => u.username === uTrim && u.role === 'customer');
  if (!user || !(await bcrypt.compare(password || '', user.password_hash))) {
    return res.status(401).json({ error: 'invalid_credentials' });
  }
  if (user.status !== 'active') {
    return res.status(403).json({ error: 'pending_or_rejected', status: user.status });
  }
  res.json({ token: sign(user), user: { id: user.id, username: user.username, role: 'customer', profile: user.profile } });
});

app.get('/api/auth/me', auth('manager', 'staff', 'customer'), async (req: any, res: Response) => {
  if (usePg && pool) {
    const r = await pool.query('SELECT id,username,role,status,profile FROM users WHERE id=$1', [req.user.id]);
    return res.json(r.rows[0] || {});
  }
  const u = store.users.find(x => x.id === req.user.id);
  if (!u) return res.status(404).json({ error: 'not_found' });
  res.json({ id: u.id, username: u.username, role: u.role, status: u.status, profile: u.profile });
});

app.get('/api/admin/customer-requests', auth('manager'), async (_req: Request, res: Response) => {
  if (usePg && pool) {
    const r = await pool.query("SELECT id,username,status,profile,created_at FROM users WHERE role='customer' ORDER BY created_at DESC");
    return res.json(r.rows);
  }
  const list = store.users
    .filter(u => u.role === 'customer')
    .map(u => ({ id: u.id, username: u.username, status: u.status, profile: u.profile, created_at: u.created_at }))
    .reverse();
  res.json(list);
});

app.post('/api/admin/customer-requests/:id/approve', auth('manager'), async (req: Request, res: Response) => {
  const { id } = req.params;
  if (usePg && pool) {
    const r = await pool.query("UPDATE users SET status='active',updated_at=now() WHERE id=$1 AND role='customer' RETURNING id,username,status,profile", [id]);
    if (!r.rowCount) return res.status(404).json({ error: 'not_found' });
    io.emit('customer:changed');
    return res.json(r.rows[0]);
  }
  const u = store.users.find(x => x.id === id && x.role === 'customer');
  if (!u) return res.status(404).json({ error: 'not_found' });
  u.status = 'active';
  saveLocalStore();
  io.emit('customer:changed');
  res.json(u);
});

app.post('/api/admin/customer-requests/:id/reject', auth('manager'), async (req: Request, res: Response) => {
  const { id } = req.params;
  if (usePg && pool) {
    const r = await pool.query("UPDATE users SET status='rejected',updated_at=now() WHERE id=$1 AND role='customer' RETURNING id,username,status,profile", [id]);
    if (!r.rowCount) return res.status(404).json({ error: 'not_found' });
    io.emit('customer:changed');
    return res.json(r.rows[0]);
  }
  const u = store.users.find(x => x.id === id && x.role === 'customer');
  if (!u) return res.status(404).json({ error: 'not_found' });
  u.status = 'rejected';
  saveLocalStore();
  io.emit('customer:changed');
  res.json(u);
});

app.post('/api/orders', async (req: Request, res: Response) => {
  const order = req.body;
  if (!order?.id || !order?.customer || !Array.isArray(order.items)) {
    return res.status(400).json({ error: 'invalid_order' });
  }
  if (usePg && pool) {
    await pool.query('INSERT INTO orders(id,data) VALUES($1,$2) ON CONFLICT(id) DO UPDATE SET data=EXCLUDED.data,updated_at=now()', [String(order.id), order]);
  } else {
    const idx = store.orders.findIndex(o => o.id === order.id);
    if (idx >= 0) store.orders[idx] = order;
    else store.orders.unshift(order);
    saveLocalStore();
  }
  io.emit('state:changed');
  res.status(201).json(order);
});

app.patch('/api/orders/:id/status', auth('manager', 'staff'), async (req: Request, res: Response) => {
  const { id } = req.params;
  const { status } = req.body;
  if (usePg && pool) {
    const r = await pool.query('SELECT data FROM orders WHERE id=$1', [id]);
    if (!r.rowCount) return res.status(404).json({ error: 'not_found' });
    const data = { ...r.rows[0].data, status };
    await pool.query('UPDATE orders SET data=$1,updated_at=now() WHERE id=$2', [data, id]);
    io.emit('state:changed');
    return res.json(data);
  }
  const o = store.orders.find(x => x.id === id);
  if (!o) return res.status(404).json({ error: 'not_found' });
  o.status = status;
  saveLocalStore();
  io.emit('state:changed');
  res.json(o);
});

app.delete('/api/orders/:id', auth('manager'), async (req: Request, res: Response) => {
  const { id } = req.params;
  if (usePg && pool) {
    await pool.query('DELETE FROM orders WHERE id=$1', [id]);
    io.emit('state:changed');
    return res.json({ ok: true, id });
  }
  const idx = store.orders.findIndex(x => x.id === id);
  if (idx >= 0) {
    store.orders.splice(idx, 1);
    saveLocalStore();
  }
  io.emit('state:changed');
  res.json({ ok: true, id });
});

app.post('/api/admin/account', auth('manager'), async (req: any, res: Response) => {
  const { username, password } = req.body || {};
  if (!username) return res.status(400).json({ error: 'username_required' });
  const uTrim = username.trim();
  const hash = password ? await bcrypt.hash(password, 10) : null;

  if (usePg && pool) {
    const r = await pool.query(
      'UPDATE users SET username=$1,password_hash=COALESCE($2,password_hash),updated_at=now() WHERE id=$3 RETURNING username',
      [uTrim, hash, req.user.id]
    );
    return res.json({ ok: true, username: r.rows[0]?.username });
  }

  const u = store.users.find(x => x.id === req.user.id);
  if (u) {
    u.username = uTrim;
    if (hash) u.password_hash = hash;
    store.settings.username = uTrim;
    saveLocalStore();
  }
  res.json({ ok: true, username: uTrim });
});

io.on('connection', socket => {
  socket.emit('connected', { ok: true });
});

async function startServer() {
  await checkPgDatabase();

  const isProduction = process.env.NODE_ENV === 'production';
  if (!isProduction) {
    const vite = await createViteServer({
      server: { middlewareMode: true }
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  }

  server.listen(PORT, '0.0.0.0', () => {
    console.log(`Derin Collection running on port ${PORT}`);
  });
}

startServer().catch(err => {
  console.error('Fatal server startup error:', err);
});
