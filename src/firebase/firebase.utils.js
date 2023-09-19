import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const config = {
    apiKey: "AIzaSyBw249xeXEjEkz775M9rcsuIMyWXccfFRg",
    authDomain: "ug-voting-app.firebaseapp.com",
    projectId: "ug-voting-app",
    storageBucket: "ug-voting-app.appspot.com",
    messagingSenderId: "198831286068",
    appId: "1:198831286068:web:04f894e498b61877a3e761",
    measurementId: "G-NCVTPCVNRV"
};



const firebaseApp = initializeApp(config);

const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

const signInWithGoogle = () => {
    return signInWithPopup(auth, provider);
};

export { auth, firestore, signInWithGoogle };
export default firebaseApp;


