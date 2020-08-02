import { initializeApp } from 'firebase';

// Your web app's Firebase configuration
const app = initializeApp({
    apiKey: "AIzaSyBrp94Fjwo0XBGq7Nc9EhkAPsWES_0yR7Q",
    authDomain: "not-only-a-number.firebaseapp.com",
    databaseURL: "https://not-only-a-number.firebaseio.com",
    projectId: "not-only-a-number",
    storageBucket: "not-only-a-number.appspot.com",
    messagingSenderId: "124028738185",
    appId: "1:124028738185:web:abb446b7249cab7a084458"
  });

  export const db = app.database();
  export const contextsRef = db.ref('contexts');