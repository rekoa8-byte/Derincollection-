import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  doc,
  setDoc,
  deleteDoc,
  collection,
  onSnapshot,
  getDocs,
  getDocFromServer
} from 'firebase/firestore';
import firebaseConfig from '../firebase-applet-config.json';

// Initialize Firebase App
export const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firestore with designated database ID
export const db = getFirestore(
  firebaseApp,
  firebaseConfig.firestoreDatabaseId || undefined
);

// Connection test as required by Firebase Skill
export async function testFirebaseConnection() {
  try {
    await getDocFromServer(doc(db, 'test', 'connection'));
    console.log('Firebase Firestore connection verified.');
    return true;
  } catch (error) {
    if (error instanceof Error && error.message.includes('the client is offline')) {
      console.warn('Firebase client is offline, check connection.');
      return false;
    }
    return true;
  }
}

// Global active unsubscribers
let unsubProducts = null;
let unsubCategories = null;
let unsubSettings = null;
let unsubOrders = null;
let isInitialized = false;

export function initFirestoreSync(handlers = {}) {
  if (isInitialized) return;
  isInitialized = true;

  testFirebaseConnection().catch(() => {});

  // 1. Products Real-time Listener
  try {
    unsubProducts = onSnapshot(collection(db, 'products'), (snapshot) => {
      const list = [];
      snapshot.forEach((d) => {
        const data = d.data();
        if (data && data.name) list.push(data);
      });
      list.sort((a, b) => (Number(b.id) || 0) - (Number(a.id) || 0));
      if (handlers.onProductsChanged) {
        handlers.onProductsChanged(list, snapshot.empty);
      }
    }, (err) => {
      console.warn('Firestore products listener error:', err.message);
    });
  } catch (e) {
    console.warn('Failed to listen to products:', e);
  }

  // 2. Categories Real-time Listener
  try {
    unsubCategories = onSnapshot(collection(db, 'categories'), (snapshot) => {
      const list = [];
      snapshot.forEach((d) => {
        const data = d.data();
        if (data && data.name) list.push(data);
      });
      if (handlers.onCategoriesChanged) {
        handlers.onCategoriesChanged(list, snapshot.empty);
      }
    }, (err) => {
      console.warn('Firestore categories listener error:', err.message);
    });
  } catch (e) {
    console.warn('Failed to listen to categories:', e);
  }

  // 3. Settings Real-time Listener
  try {
    unsubSettings = onSnapshot(doc(db, 'settings', 'store'), (docSnap) => {
      if (docSnap.exists()) {
        const s = docSnap.data();
        if (handlers.onSettingsChanged) handlers.onSettingsChanged(s);
      } else {
        if (handlers.onSettingsEmpty) handlers.onSettingsEmpty();
      }
    }, (err) => {
      console.warn('Firestore settings listener error:', err.message);
    });
  } catch (e) {
    console.warn('Failed to listen to settings:', e);
  }

  // 4. Orders Real-time Listener
  try {
    unsubOrders = onSnapshot(collection(db, 'orders'), (snapshot) => {
      const list = [];
      snapshot.forEach((d) => {
        const data = d.data();
        if (data && data.id) list.push(data);
      });
      list.sort((a, b) => {
        const tA = a.timestamp || (a.id ? a.id.replace(/\D/g, '') : 0);
        const tB = b.timestamp || (b.id ? b.id.replace(/\D/g, '') : 0);
        return Number(tB) - Number(tA);
      });
      if (handlers.onOrdersChanged) {
        handlers.onOrdersChanged(list);
      }
    }, (err) => {
      console.warn('Firestore orders listener error:', err.message);
    });
  } catch (e) {
    console.warn('Failed to listen to orders:', e);
  }
}

// Cloud persistence helpers
export async function fsSaveProduct(product) {
  try {
    await setDoc(doc(db, 'products', String(product.id)), product, { merge: true });
    return true;
  } catch (e) {
    console.error('Firestore save product error:', e);
    return false;
  }
}

export async function fsDeleteProduct(productId) {
  try {
    await deleteDoc(doc(db, 'products', String(productId)));
    return true;
  } catch (e) {
    console.error('Firestore delete product error:', e);
    return false;
  }
}

export async function fsSaveCategory(category) {
  try {
    const key = encodeURIComponent(category.name);
    await setDoc(doc(db, 'categories', key), category, { merge: true });
    return true;
  } catch (e) {
    console.error('Firestore save category error:', e);
    return false;
  }
}

export async function fsDeleteCategory(categoryName) {
  try {
    const key = encodeURIComponent(categoryName);
    await deleteDoc(doc(db, 'categories', key));
    return true;
  } catch (e) {
    console.error('Firestore delete category error:', e);
    return false;
  }
}

export async function fsSaveSettings(settings) {
  try {
    const clean = { ...settings };
    delete clean.username;
    delete clean.password;
    await setDoc(doc(db, 'settings', 'store'), clean, { merge: true });
    return true;
  } catch (e) {
    console.error('Firestore save settings error:', e);
    return false;
  }
}

export async function fsSaveOrder(order) {
  try {
    const payload = {
      ...order,
      timestamp: Date.now()
    };
    await setDoc(doc(db, 'orders', String(order.id)), payload);
    return true;
  } catch (e) {
    console.error('Firestore save order error:', e);
    return false;
  }
}

export async function fsUpdateOrderStatus(orderId, status) {
  try {
    await setDoc(doc(db, 'orders', String(orderId)), { status }, { merge: true });
    return true;
  } catch (e) {
    console.error('Firestore update order status error:', e);
    return false;
  }
}

export async function fsDeleteOrder(orderId) {
  try {
    await deleteDoc(doc(db, 'orders', String(orderId)));
    return true;
  } catch (e) {
    console.error('Firestore delete order error:', e);
    return false;
  }
}

// Seed initial default boutique data if cloud collection is fresh
export async function fsSeedDefaultsIfEmpty(defaultProducts, defaultCategories, defaultSettings) {
  try {
    const prodSnap = await getDocs(collection(db, 'products'));
    if (prodSnap.empty && Array.isArray(defaultProducts)) {
      console.log('Seeding initial products into Firestore...');
      for (const p of defaultProducts) {
        await setDoc(doc(db, 'products', String(p.id)), p);
      }
    }

    const catSnap = await getDocs(collection(db, 'categories'));
    if (catSnap.empty && Array.isArray(defaultCategories)) {
      console.log('Seeding initial categories into Firestore...');
      for (const c of defaultCategories) {
        await setDoc(doc(db, 'categories', encodeURIComponent(c.name)), c);
      }
    }

    const setDocRef = doc(db, 'settings', 'store');
    const setSnap = await getDocFromServer(setDocRef).catch(() => null);
    if (!setSnap || !setSnap.exists()) {
      console.log('Seeding initial settings into Firestore...');
      const clean = { ...defaultSettings };
      delete clean.username;
      delete clean.password;
      await setDoc(setDocRef, clean);
    }
  } catch (e) {
    console.warn('Firestore seeding check skipped/error:', e.message);
  }
}
