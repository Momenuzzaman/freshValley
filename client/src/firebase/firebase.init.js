
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCCxt72mwkv7L4pEj_x5jVpyxvdkGCLn9g",
    authDomain: "fresh-valley0.firebaseapp.com",
    projectId: "fresh-valley0",
    storageBucket: "fresh-valley0.appspot.com",
    messagingSenderId: "62986973032",
    appId: "1:62986973032:web:3c5f7a01c5720b93b970dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;