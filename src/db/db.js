import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAttVPGz_FWZAB2SENxCESvFXNoQ_QymWQ",
  authDomain: "ecomerse-4511e.firebaseapp.com",
  projectId: "ecomerse-4511e",
  storageBucket: "ecomerse-4511e.firebasestorage.app",
  messagingSenderId: "520691557441",
  appId: "1:520691557441:web:34307bae73f6c37ccd12c0"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);