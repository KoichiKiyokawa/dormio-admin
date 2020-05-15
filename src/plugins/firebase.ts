import firebase from 'firebase/app'

if (firebase.apps.length === 0) {
  firebase.initializeApp(JSON.parse(process.env.FIREBASE_CONFIG || ''))
}

export const db = firebase.firestore()
