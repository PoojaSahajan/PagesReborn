import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCSGGy1FIdDCq91OZYKbRXDkOJAGjmX0u4",
    authDomain: "pagesreborn-4b62e.firebaseapp.com",
    projectId: "pagesreborn-4b62e",
    storageBucket: "pagesreborn-4b62e.appspot.com",
    messagingSenderId: "261029821837",
    appId: "1:261029821837:web:cb27d1b9424fb3732311c4",
    measurementId: "G-5W6N6V3S2C"
  };

  export default firebase.initializeApp(firebaseConfig);