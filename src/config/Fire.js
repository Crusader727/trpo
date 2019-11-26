import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAGlFJDyNvBXcBSJfoPFu1hfMGBO5FA5Gs",
    authDomain: "diproject-9e7f0.firebaseapp.com",
    databaseURL: "https://diproject-9e7f0.firebaseio.com",
    projectId: "diproject-9e7f0",
    storageBucket: "diproject-9e7f0.appspot.com",
    messagingSenderId: "760708669557"
};

const fire = firebase.initializeApp(config);
const database = firebase.database();
export default fire;
export {database};
