import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAO-V6bsSnaSMExSpsU9vSfE-aWMb0p9Rk",
  authDomain: "brain-tumour-70504.firebaseapp.com",
  projectId: "brain-tumour-70504",
  storageBucket: "brain-tumour-70504.firebasestorage.app",
  messagingSenderId: "51395896842",
  appId: "1:51395896842:web:917929649f01aa01c4e1f3",
  measurementId: "G-SFFDXB7FY4"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
