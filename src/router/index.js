import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Patients from '../views/Patients.vue' 
import Doctors from '../views/Doctors.vue'
import PatientInfo from '../components/PatientInfo'
import DoctorInfo from '../components/DoctorInfo'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/patients',
    component: Patients,
  
    
  },
  {
    path: '/doctors',
    component: Doctors,
  },
  {
    path: '/patientinfo/:id',
    component:PatientInfo,
  },
  {
    path:'/doctorinfo/:id',
    component:DoctorInfo,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
