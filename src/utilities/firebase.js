import firebase from 'firebase/app'

import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyA7er5MFU5e4g9mwyI0I9pH-yfk5bLuVSk",
    authDomain: "project-album-c2ed5.firebaseapp.com",
    projectId: "project-album-c2ed5",
    storageBucket: "project-album-c2ed5.appspot.com",
    messagingSenderId: "997976923882",
    appId: "1:997976923882:web:4c60e5d1bb81acef450193",
    measurementId: "G-8H11VMJ67R"
}

firebase.initializeApp(config);

export const firestore = firebase.firestore();

export default firebase;