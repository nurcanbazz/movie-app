import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAPUkZaOHM4EddUg2tUZziuvqmCxVNXEEY",
  authDomain: "movie-app-33b74.firebaseapp.com",
  projectId: "movie-app-33b74",
  storageBucket: "movie-app-33b74.appspot.com",
  messagingSenderId: "892869796917",
  appId: "1:892869796917:web:9d07d477934a028c9afd7c"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);                  // app' i initialize ettikten sonra , app ile alakalı verileri auth'a atarak orada tutuyoruz.