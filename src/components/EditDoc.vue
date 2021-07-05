<template>
  <div>
    <div class="modal" v-show="EditModalDoc" v-on:keypress.enter="add">
      <div class="new">
        <div class="title">
          Registration of a new doctor
        </div>
        <div class="input">
          <input type="text" placeholder="Photo" v-model="editDoc.pic">
          <input type="text" placeholder="Name Surname" v-model="editDoc.name">
          <input type="text" placeholder="email" v-model="editDoc.email">
          <input type="text" placeholder="Specialty" v-model="editDoc.spec">
          <input type="date" placeholder="date of entry into force" v-model="editDoc.section">
          <input type="text" placeholder="Reception days" v-model="editDoc.acceptance">
          <select class="sel" v-model="editDoc.specialized">
            <option value="Surgeon">Surgeon</option>
            <option value="Neurologist">Neurologist</option>
            <option value="Lor">Lor</option>
            <option value="Therapeutis">Therapeutis</option>
            <option value="Oculist">Oculist</option>
          </select>
          <input type="date" placeholder="Date of commencement" v-model="editDoc.workdate">
          <select class="sel" v-model="editDoc.worksec">
            <option value="">Working department</option>
            <option value="Neurology">Neurology</option>
            <option value="Traumatology">Traumatology</option>
            
          </select>
          <input type="text" placeholder="Work schedule" v-model="editDoc.worktime">
          <input type="text" placeholder="Work experience" v-model="editDoc.staj">
          <input type="date" placeholder="Date of birth" v-model="editDoc.docborn">
          <input type="text" placeholder="Family status" v-model="editDoc.docfamily">
          <input type="number" placeholder="Telephon number" v-model="editDoc.doctel">
          <input type="text" placeholder="Place of birth" v-model="editDoc.docplace">
          <input type="text" placeholder="Information" v-model="editDoc.docinfo">
          <input type="text" placeholder="Address" v-model="editDoc.docaddress">
        </div>
        <div class="btn">
          <button class="cencel" @click="closeModalDoc">Cencel</button>
          <button class="add" @click="save">Save</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['editDoc'],
    data() {
      return {
        doctor: {},
      }
    },
    methods: {
      closeModalDoc() {
        this.$store.commit('changeEditModalDoc', false)
      },

      save(index) {
        let item = {
          index: index,
          doc: doc[index]
        }
        this.$store.dispatch('editDoctor', item)
      }
    },
    computed: {
      EditModalDoc() {
        return this.$store.getters.getEditModalDoc
      }
    }
  }
</script>

<style>