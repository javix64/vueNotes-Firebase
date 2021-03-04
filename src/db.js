import firebase from 'firebase/app'
import 'firebase/firestore'
import "firebase/auth"
import {fConfig} from "./fConfig"

export const db = firebase
  .initializeApp(fConfig)
  .firestore()
const { Timestamp, GeoPoint } = firebase.firestore
export { Timestamp, GeoPoint }

export default {
    auth: firebase.auth(),
    login() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider)
      .then(function(result) {
        console.log(result);
      })
      .catch(function(error){
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = error.credential;
        console.log(errorCode, errorMessage, email, credential);
        })
    },
    logout() {
      firebase.auth().signOut()
      .then(function() {})
      .catch(function(error) {
        console.log(error)});
    }
}