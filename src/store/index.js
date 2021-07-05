import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'
import doctors from './index2'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    modal: false,
    obj:[],
    EditModal:false
  },
  actions: {
    addPatient(context,payload){
    axios.post('http://localhost:3000/obj',payload).then(response =>{
        context.commit('addToPatient', response.data)
    })
    },
    getPatient(context){
      axios.get('http://localhost:3000/obj').then(response=> {
        context.commit('toObj', response.data)
      })
    },
    
    delPatient(context,payload){
      axios.delete('http://localhost:3000/obj/'+payload.id) 
    },
    
    editPatient(context,payload){
      axios.put('http://localhost:3000/obj/'+payload.obj.id).then(response=>{
        payload.obj = response.data
        context.commit('SaveModalToggle',payload)
      })
    }
  
  },
  mutations: {
    delPatientId(state,payload){
      state.obj.splice(payload,1)
    },
    
    changeModal(state,payload){
      state.modal=payload
    },
    
    changeEditModal(state,payload){
      state.EditModal=payload
    },
    addToPatient(state,payload){
      state.obj.push(payload)
    },
    toObj(state,payload){
      state.obj=payload
    },
    
    editModalToggle(state,payload){
      state.EditModal = payload
    },
    SaveModalToggle(state,payload){
      state.obj[payload.index]=payload.obj
    } 
  },
  
  getters:{
    getModal(state){
      return state.modal
    },
    
    getObjs(state){
      return state.obj
    },

    getEditModal(state){
      return state.EditModal
    },
    getByIdPatient(state){
      return patientId => {
        return state.obj.find(patient => patient.id == patientId)
      }
    },
    getCount(state){
      return state.Count
    },
    getRePatient(state){
      return byId=>{
        return state.patient.filter(item=>{return item.reid==byId})
      }
    }
  },
  modules: {
    doctors
  }
})
