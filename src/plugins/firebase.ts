import firebase from 'firebase/app'
import 'firebase/firestore'

if (firebase.apps.length === 0) {
  firebase.initializeApp(JSON.parse(process.env.NEXT_PUBLIC_FIREBASE_CONFIG || ''))
}

export const db = firebase.firestore()
