import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { initializeApp } from "firebase/app";

Vue.config.productionTip = false


// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBddMg5eXOX7nci7MVG0u9kx1alAHMSu6M",
  authDomain: "vue-firebase-tutorial-190ed.firebaseapp.com",
  projectId: "vue-firebase-tutorial-190ed",
  storageBucket: "vue-firebase-tutorial-190ed.firebasestorage.app",
  messagingSenderId: "376805815167",
  appId: "1:376805815167:web:27fe2f3f6cbbffc6cb604a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

  new Vue({
    router,
    render: h => h(App),
  }).$mount('#app')


