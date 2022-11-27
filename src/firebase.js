import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const config = {
    apiKey: "AIzaSyDQRhooi_Foy069S89ClthzWzjPtVNWBsE",
    authDomain: "sandesha-7e622.firebaseapp.com",
    databaseURL: "https://sandesha-7e622-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "sandesha-7e622",
    storageBucket: "sandesha-7e622.appspot.com",
    messagingSenderId: "479156773295",
    appId: "1:479156773295:web:4f15bace708f26a22c0f5a",
    measurementId: "G-7YJ934L2BY"
}

const firebaseApp = firebase.initializeApp(config);
export const db = firebaseApp.firestore();