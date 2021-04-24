import firebase from "firebase";



const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCovmmaQxkWtGUFebEDi2ikAQmfD1fk-E0",
    authDomain: "todo-app-2b6da.firebaseapp.com",
    projectId: "todo-app-2b6da",
    storageBucket: "todo-app-2b6da.appspot.com",
    messagingSenderId: "522167362107",
    appId: "1:522167362107:web:96b115dd8b4a7f255ff21e",
    measurementId: "G-WKGVQLP1E8"
});

const db = firebaseApp.firestore();
// const auth = firebase.auth();
export default db;