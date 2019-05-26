import {types} from './types';

export function signIn(firebase, history) {
  return {
    type: types.USER.SIGN_IN,
    promise: new Promise((resove, reject) => {
      const provider = new firebase.auth.GoogleAuthProvider();

      //TODO: uncomment if you need contact list as well
      // provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

      // we are using native firebase SDK to sign in by Google...
      return  firebase.auth().signInWithPopup(provider).then(response => {
        const user = response.user;
        resove({
          uid: user.uid,
          displayName: user.displayName,
          email: user.email,
          emailVerified: user.emailVerified,
          photoUrl: user.photoURL,
          isAnonymous: user.isAnonymous,
          refreshToken: user.refreshToken
        });
      }).catch(error => {
        reject(error);
      });
    })
  };
}

export function signOut() {
  return {
    types: types.USER.SIGN_OUT,
    promise: null
  }
}
