import * as firebase from 'firebase';
//this is the config object for the firebase real time database
const config = {
    apiKey: "AIzaSyAe0IlY5deLy2eBSqsz0vBesfKI2QsF-1I",
    authDomain: "chat-app-305e1.firebaseapp.com",
    databaseURL: "https://chat-app-305e1-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "chat-app-305e1",
    storageBucket: "chat-app-305e1.appspot.com",
    messagingSenderId: "422916100572",
    appId: "1:422916100572:web:5298ec2353467ca6fa3f19",
    measurementId: "G-VYCFH0149X"
};

firebase.initializeApp(config);
export default firebase;