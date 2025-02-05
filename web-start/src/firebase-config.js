/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  apiKey: "AIzaSyBPYKz9nLDm5WisquaWnn0phymA0hIsYbs",
  authDomain: "friendly-chat-69b70.firebaseapp.com",
  projectId: "friendly-chat-69b70",
  storageBucket: "friendly-chat-69b70.appspot.com",
  messagingSenderId: "180321175969",
  appId: "1:180321175969:web:6dcbfafcb6448221faa3e0",
  measurementId: "G-Z620C3K0FK"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}