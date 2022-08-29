import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCd5eKJxBInHfdIyxu6pPLhO_GfV0wVss8",
  authDomain: "wafflitosvm.firebaseapp.com",
  projectId: "wafflitosvm",
  storageBucket: "wafflitosvm.appspot.com",
  messagingSenderId: "518476715989",
  appId: "1:518476715989:web:1dafa19222f97d563c0f5c"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
