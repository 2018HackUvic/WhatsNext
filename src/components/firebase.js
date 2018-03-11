// This code creates an instance of the Firebase SDK and configures it with your config. Now you can import it anywhere in your codebase and it’s always this singleton.
//     When you see firebase from now on, assume that it’s imported from here.

import * as firebase from 'firebase';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAEgMSIVcaLUNFJ8MvL5TFvFwaJxDcIYYE",
    authDomain: "whatsnext-2018.firebaseapp.com",
    databaseURL: "https://whatsnext-2018.firebaseio.com",
    storageBucket: "whatsnext-2018.appspot.com"
};

firebase.initializeApp(config);

export default firebase;