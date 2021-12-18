// firebase.js
// contains the Firebase context and provider
import { createContext } from 'react'
import firebaseConfig from './firebaseConfig'
import app from 'firebase/app'
import 'firebase/storage'
import 'firebase/auth'
import { signUpSocialUser } from '../redux/actions'

// we create a React Context, for this to be accessible
// from a component later
const FirebaseContext = createContext(null)
export { FirebaseContext }

/*eslint-disable */
export default ({ children }) => {
  let firebase = {
    app: null,
    auth: null,
    storage: null,
  }

  const dispatch = useDispatch()
  // check if firebase app has been initialized previously
  // if not, initialize with the config we saved earlier
  if (!app.apps.length) {
    app.initializeApp(firebaseConfig)
    firebase = {
      app: app,
      auth: app.auth(),
      storage: app.storage(),
      api: {
        googleSignIn,
        facebookSignIp,
      },
    }
  }

  // Oauth with google SignIn
  function googleSignIn() {
    var provider = new app.auth.GoogleAuthProvider()
    return firebase.auth
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential
        console.log(credential)

        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken
        console.log('CHEKING TOKEN : ', token)

        // The signed-in user info.
        var user = result.user
        console.log(user)

        // get token
        firebase.auth.currentUser
          .getIdToken(/* forceRefresh */ true)
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
        var errorCode = error.code
        var errorMessage = error.message

        // The email of the user's account used.
        // The firebase.auth.AuthCredential type that was used.
        var email = error.email
        var credential = error.credential

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
  function facebookSignUp() {
    var provider = new app.auth.FacebookAuthProvider()
    return firebase.auth
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential
        console.log(credential)

        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken
        console.log(token)

        // The signed-in user info.
        var user = result.user
        console.log(user)

        // get token
        firebase.auth.currentUser
          .getIdToken(/* forceRefresh */ true)
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
        var errorCode = error.code
        var errorMessage = error.message

        // The email of the user's account used.
        // The firebase.auth.AuthCredential type that was used.
        var email = error.email
        var credential = error.credential

        console.log({
          err: errorCode,
          message: errorMessage,
          email: email,
          credential: credential,
        })
        return errorMessage
      })
  }
}
