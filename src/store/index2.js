import axios from 'axios'

export default({
  state: {
    modalDoc:false,
    doc:[],
    EditModalDoc:false
  },
  actions: {
    
    addDoctor(context,payload){
      axios.post('http://localhost:3000/doc', payload).then(response =>{
        context.commit('addDoctor', response.data)
      })
    },
    
    getDoctor(context){
      axios.get('http://localhost:3000/doc').then(response=> {
        context.commit('toDoc', response.data)
      })
    },
    
    delDoctor(context,payload){
      axios.delete('http://localhost:3000/doc/'+payload.id).then(()=>{
        context.commit('delDoctorId',payload.index)
      })
    },
    editDoctor(context,payload){
      axios.put('http://localhost:3000/doc/'+payload.doc.id).then(response=>{
        payload.doc=response.data
        context.commit('SaveModalDocToggle',payload)
      })
    }
  },
  mutations: {
    delDoctorId(state,payload){
      state.doc.splice(payload,1)
    },

    changeModalDoc(state,payload){
      state.modalDoc=payload     
    },
    changeEditModalDoc(state,payload){
      state.EditModalDoc=payload
    },
    addDoctor(state,payload){
      state.doc.push(payload)
    },
    toDoc(state,payload){
      state.doc=payload
    },
    editModalDocToggle(state,payload){
      state.EditModalToggle=payload
    },
    SaveModalDocToggle(state,payload){
      state.doc[payload.index]=payload.doc
    }
    
  },
  
  getters:{
    
    getModalDoc(state){
      return state.modalDoc
    },
    
    getDocs(state){
      return state.doc
    },
    getEditModalDoc(state){
      return state.EditModalDoc
    },
    getByIdDoctor(state){
      return doctorId => {
        return state.doc.find(doctor => doctor.id == doctorId)
      }
    },
    getCountDoc(state){
      return state.countDoc
    }
  },
  modules: {
  }
})