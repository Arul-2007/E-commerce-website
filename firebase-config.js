// firebase-config.js
// Replace these values with your Firebase console config!
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCzkazRWiKgWo0BGj-hAMkItb6__P-tAT8",
  authDomain: "e-commerce-website-72844.firebaseapp.com",
  projectId: "e-commerce-website-72844",
  storageBucket: "e-commerce-website-72844.firebasestorage.app",
  messagingSenderId: "363248419791",
  appId: "1:363248419791:web: fe8380090897659b6cc8ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

