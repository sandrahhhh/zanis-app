import * as firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDZ8hosDbUffyNm_7uzacxuljOpK0TOmWQ",
    authDomain: "zanis-app.firebaseapp.com",
    projectId: "zanis-app",
    storageBucket: "zanis-app.appspot.com",
    messagingSenderId: "141780524287",
    appId: "1:141780524287:web:e48d44df46e72f06b1c0ca",
    measurementId: "G-5GJHFZMXV1"
}

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export {firebase};