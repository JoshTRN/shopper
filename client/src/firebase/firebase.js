import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyAqZywe-49VSRsLC0Q0uvTI48l0emr5Knw",
    authDomain: "shopper-8774a.firebaseapp.com",
    databaseURL: "https://shopper-8774a.firebaseio.com",
    projectId: "shopper-8774a",
    storageBucket: "shopper-8774a.appspot.com",
    messagingSenderId: "881434605738"
};

firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();

export const auth = firebase.auth();

export default firebase