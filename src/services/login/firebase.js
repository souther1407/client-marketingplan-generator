import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBKWNCjbqEnuEDD8h9L8OhUqnJ4306MKPY",
  authDomain: "app-ideas-negocio.firebaseapp.com",
  projectId: "app-ideas-negocio",
  storageBucket: "app-ideas-negocio.appspot.com",
  messagingSenderId: "737589067827",
  appId: "1:737589067827:web:cdf19567210267006ca346",
  measurementId: "G-9PHBB28ZLD",
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
