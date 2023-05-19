// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCioWbrR2eo2BNlFAIQzDFLaktxow-NLjA',
  authDomain: 'squishysquish-6bc59.firebaseapp.com',
  projectId: 'squishysquish-6bc59',
  storageBucket: 'squishysquish-6bc59.appspot.com',
  messagingSenderId: '31296582695',
  appId: '1:31296582695:web:d9b76e38cd281b844f8a02',
  measurementId: 'G-N30CKWKBBZ',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app);
