import firebase from "firebase/app";
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDHywkKceVMDGI0NVZhDAW7FyYHvVBgn30",
    authDomain: "cooking-ninja-site-7cd32.firebaseapp.com",
    projectId: "cooking-ninja-site-7cd32",
    storageBucket: "cooking-ninja-site-7cd32.appspot.com",
    messagingSenderId: "632383996156",
    appId: "1:632383996156:web:7e235ddc3af7240779d779"
};

// Initialize Firebase, connect into backend
firebase.initializeApp(firebaseConfig)

// init servicees
const projectFirestore = firebase.firestore()

export { projectFirestore }