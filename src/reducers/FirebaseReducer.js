import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/functions';
import 'firebase/messaging';
import 'firebase/storage';
import 'firebase/performance';
import 'firebase/database';
import config from './../config/firebase.config';

firebase.initializeApp(config);
// Initialize other services on firebase instance
firebase.auth();
firebase.firestore();
firebase.functions();
firebase.messaging();
firebase.storage();
firebase.performance();
firebase.database();

const initialState = firebase;

export default function firebase_app(state = initialState) {
      return state;
}
