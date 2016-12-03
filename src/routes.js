import loginPage from './login.page'
import votingPage from './voting.page'

export default new VueRouter({
  routes: [
    { path: '/', component: loginPage },
    { path: '/vote', component: votingPage }
  ]
})
