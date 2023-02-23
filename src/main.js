import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
// Firebase
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { collection, getFirestore, getDocs } from "firebase/firestore";

// Getting Pinia Store
import useProjectsStore from '@/stores/projects'

import './assets/base.css'

const firebaseConfig = {
  apiKey: "AIzaSyC2vcUhMHOI1DbuBbEyHl8QtkvcjwFeo64",
  authDomain: "portfolio-c9cec.firebaseapp.com",
  projectId: "portfolio-c9cec",
  storageBucket: "portfolio-c9cec.appspot.com",
  messagingSenderId: "878103706982",
  appId: "1:878103706982:web:86dc2b98af54e1ccf45ca7",
  measurementId: "G-YEX6C5TQB5"
};

const pinia = createPinia()

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);
const db = getFirestore();

// Collection references
const colRef = collection(db, 'projects');

// get collection data
getDocs(colRef).then((snapshot) => {
  let projects = []
  snapshot.forEach((doc) => {
    projects.push({ ...doc.data(), id: doc.id })
  })
  // Push data to store
  useProjectsStore().setProjects(projects);
  // console.log(projects)
}).catch((err) => {
  console.log('Error getting documents', err);
});

const app = createApp(App)


app.use(router)
app.use(pinia)

app.mount('#app')
