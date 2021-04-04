import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey :"AIzaSyDxmeWkMKpV6v8S8YR0Cm7ru0CexlNog-w",
    authDomain: "web-tim-tro.firebaseapp.com", 
    projectId: "web-tim-tro",
    storageBucket: "web-tim-tro.appspot.com",
    messagingSenderId: "847345543691",
    appId: "1: 847345543691: web: c270c433feda3c6d7b350e",
    measurementId: "G-VC30FQ09V5"
};

firebase.initializeApp(config);

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;