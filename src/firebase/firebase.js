import firebaseConfig from './firebaseConfig'
import app from 'firebase/compat/app'
import 'firebase/compat/auth'
import { signUpSocialUser } from '../redux/actions'

app.initializeApp(firebaseConfig)

// Oauth with google SignIn
export function googleSignIn(dispatch) {
  const provider = new app.auth.GoogleAuthProvider()
  return app
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      const credential = result.credential

      // This gives you a Google Access Token. You can use it to access the Google API.
      const token = credential.accessToken
      console.log('CHEKING TOKEN : ', token)

      // The signed-in user info.
      const user = result.user
      console.log(user)

      // get token
      app
        .auth()
        .currentUser.getIdToken(/* forceRefresh */ true)
        .then(function (idToken) {
          console.log('CHEKING ID TOKEN', idToken)
          // Send token and other details to your backend via HTTPS
          dispatch(signUpSocialUser(idToken))
        })
        .catch(function (error) {
          console.log(error)
        })
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code
      const errorMessage = error.message

      // The email of the user's account used.
      // The firebase.auth.AuthCredential type that was used.
      const email = error.email
      const credential = error.credential

      console.log({
        err: errorCode,
        message: errorMessage,
        email: email,
        credential: credential,
      })
      return errorMessage
    })
}

// Oauth with Facebook Sign up
export function facebookSignIn(dispatch) {
  const provider = new app.auth.FacebookAuthProvider()
  return app
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      const credential = result.credential
      console.log(credential)

      // This gives you a Google Access Token. You can use it to access the Google API.
      const token = credential.accessToken
      console.log(token)

      // The signed-in user info.
      const user = result.user
      console.log(user)

      // get token
      app
        .auth()
        .currentUser.getIdToken(/* forceRefresh */ true)
        .then(function (idToken) {
          // Send token and other details to your backend via HTTPS
          dispatch(signUpSocialUser(idToken))
        })
        .catch(function (error) {
          console.log(error)
        })
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code
      const errorMessage = error.message

      // The email of the user's account used.
      // The firebase.auth.AuthCredential type that was used.
      const email = error.email
      const credential = error.credential

      console.log({
        err: errorCode,
        message: errorMessage,
        email: email,
        credential: credential,
      })
      return errorMessage
    })
}
