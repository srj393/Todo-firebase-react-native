import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyB57SuLQr9HdvLmXo9m3eM4IMNPsVFJ6yk",
    authDomain: "todofirebase-4ec1b.firebaseapp.com",
    projectId: "todofirebase-4ec1b",
    storageBucket: "todofirebase-4ec1b.appspot.com",
    messagingSenderId: "426331745087",
    appId: "1:426331745087:web:0e1e3ddeaa9f981e00018a"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}


export { firebase };

