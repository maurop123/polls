import template from './voting.page.html'
// const template = '<h1>voting</h1>'
import router from './routes'
import db from './database'

const pollsRef = db.ref('/polls')

export default {
  template: template,
  data: function() {
    return {
      active: {}
    }
  },
  computed: {
    choices: getChoices,
    uid: getUid
  },
  created: getPolls,
  beforeCreate: checkLogin,
  methods: {
    vote
  }
}

function vote(evt) {
  const choice = $(evt.target).data('choice')
  const title = this.active.title
  const uid = this.uid
  db.ref('votes').push({
    choice, title, uid
  })
}

function getUid() {
  return firebase.auth().currentUser.uid
}

function getChoices() {
  return Object.keys(this.active.choices).map(key => this.active.choices[key])
}

function getPolls() {
  pollsRef.orderByChild('state').equalTo('active')
  .on('value', (snapshot) => {
    this.active = snapshot.val()[0]
  })
}

function checkLogin() {
    var user = firebase.auth().currentUser;

    if (user) {
      // User is signed in.
      console.log('welcome', user.displayName)
    } else {
      // No user is signed in.
      console.log('login first')
      router.push('/')
    }
  }

