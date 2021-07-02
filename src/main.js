import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from "firebase/app"
import "./assets/css/tailwind.css"

Vue.config.productionTip = false

// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBVKgJlR2crXmg0C8ueXSnyXA3dPXghTIM",
    authDomain: "vue-slack-3ed95.firebaseapp.com",
    databaseURL: "https://vue-slack-3ed95-default-rtdb.firebaseio.com",
    projectId: "vue-slack-3ed95",
    storageBucket: "vue-slack-3ed95.appspot.com",
    messagingSenderId: "688059406400",
    appId: "1:688059406400:web:9400383c16703b7e3167a5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
