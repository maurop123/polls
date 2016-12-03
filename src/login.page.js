import template from './login.page.html'
import router from './routes'

export default {
  template: template,
  methods: {
    login: handleLogin
  },
}

function handleLogin() {
  var provider = new firebase.auth.FacebookAuthProvider();
  firebase.auth().signInWithPopup(provider).then(function(result) {
    var token = result.credential.accessToken;
    var user = result.user;
    router.push('/vote')
  }).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;
  })
}
