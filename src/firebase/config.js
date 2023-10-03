import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/store";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD6yTSWg6zrDNM5_g6cT2925B36dMDQWs0",
  authDomain: "willshop-46508.firebaseapp.com",
  projectId: "willshop-46508",
  storageBucket: "willshop-46508.appspot.com",
  messagingSenderId: "128863993897",
  appId: "1:128863993897:web:eb78ffc57f8fdb4a939c38",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
