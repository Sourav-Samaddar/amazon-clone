import firebase from "firebase";

const firebaseConfig = { 
	apiKey:"AIzaSyCcPSKlYtpdzBoAC8soeSmIARMzVKzrf5I",
	authDomain: "clone-875f2.firebaseapp.com",
	databaseURL: "https://clone-875f2.firebaseio.com",
	projectId: "clone-875f2",
	storageBucket: "clone-875f2.appspot.com",
	messagingSenderId: "1074333287126",
	appId: "1:1074333287126:web:f6cce5eeaf819481f661ae",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth(); 

export { db, auth };