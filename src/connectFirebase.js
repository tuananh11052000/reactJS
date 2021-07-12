import * as firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyCgYalwDWJrkQ9485HYYpEw4MyPZG_x9cg",
    authDomain: "crosstech2020-e8043.firebaseapp.com",
    databaseURL: "https://crosstech2020-e8043.firebaseio.com",
    projectId: "crosstech2020-e8043",
    storageBucket: "crosstech2020-e8043.appspot.com",
    messagingSenderId: "895598133696",
    appId: "1:895598133696:web:1e280368bff413211cc825",
    measurementId: "G-HVGCSNKJW5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;