import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import  {getStorage} from "firebase/storage"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKTbZqfTM5ySO3WSdb--ezoiQiFZmlWQQ",
  authDomain: "projectmanagement-c5dfd.firebaseapp.com",
  projectId: "projectmanagement-c5dfd",
  storageBucket: "projectmanagement-c5dfd.appspot.com",
  messagingSenderId: "35380691177",
  appId: "1:35380691177:web:ffe1af02a9ad0b5b02f078"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app)

export { db, auth,storage };
