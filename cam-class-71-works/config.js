import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyB5JswUXXJh4JXB8ocSk4-jd0MEsx7Y6u4',
  authDomain: 'wily-dbb4d.firebaseapp.com',
  projectId: 'wily-dbb4d',
  storageBucket: 'wily-dbb4d.appspot.com',
  messagingSenderId: '676340331968',
  appId: '1:676340331968:web:42dd0257517586fe220425',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
