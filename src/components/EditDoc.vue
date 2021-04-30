<template>
  <div>
    <div class="modal" v-show="EditModalDoc" v-on:keypress.enter="add">
      <div class="new">
        <div class="title">
          Yangi shifokorni ro'yhatdan o'tkazish
        </div>
        <div class="input">
          <input type="text" placeholder="Rasm joylashtiring" v-model="editDoc.pic">
          <input type="text" placeholder="Ism sharifi" v-model="editDoc.name">
          <input type="text" placeholder="email" v-model="editDoc.email">
          <input type="text" placeholder="Mutaxassisligi" v-model="editDoc.spec">
          <input type="date" placeholder="Bo'lim" v-model="editDoc.section">
          <input type="text" placeholder="Qabul kunlari" v-model="editDoc.acceptance">
          <select class="sel" v-model="editDoc.specialized">
            <option value="Xirurg">Xirurg</option>
            <option value="Nevropotolog">Nevropotolog</option>
            <option value="Lor">Lor</option>
            <option value="Terapevt">Terapevt</option>
            <option value="Okulist">Okulist</option>
          </select>
          <input type="date" placeholder="Ishga kirgan sanasi" v-model="editDoc.workdate">
          <select class="sel" v-model="editDoc.worksec">
            <option value="">Ishlayotgan bo'lim</option>
            <option value="Nevrologiya">Nevrologiya</option>
            <option value="Travmatologiya">Travmatalogiya</option>
            <option value="Xirurgiya">Xirurgiya</option>
          </select>
          <input type="text" placeholder="Ish grafigi" v-model="editDoc.worktime">
          <input type="text" placeholder="Ish staji" v-model="editDoc.staj">
          <input type="date" placeholder="Tug'ilgan sanasi" v-model="editDoc.docborn">
          <input type="text" placeholder="Oilaviy holat" v-model="editDoc.docfamily">
          <input type="number" placeholder="Telefon raqam" v-model="editDoc.doctel">
          <input type="text" placeholder="Tug'ilgan joyi" v-model="editDoc.docplace">
          <input type="text" placeholder="Ma'lumoti" v-model="editDoc.docinfo">
          <input type="text" placeholder="Manzil" v-model="editDoc.docaddress">
        </div>
        <div class="btn">
          <button class="cencel" @click="closeModalDoc">Bekor qilish</button>
          <button class="add" @click="save">Saqlash</button>
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