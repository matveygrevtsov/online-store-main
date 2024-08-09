import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
var firebaseConfig = {
    apiKey: "AIzaSyBRESQuM8FCyd5UL604-FPoi2QvenQFZfY",
    authDomain: "online-shop-9418c.firebaseapp.com",
    projectId: "online-shop-9418c",
    storageBucket: "online-shop-9418c.appspot.com",
    messagingSenderId: "229832791155",
    appId: "1:229832791155:web:58ae6e5d59a3643e0e8606",
};
var firebaseApp = initializeApp(firebaseConfig);
export var firebaseAuth = getAuth(firebaseApp);
