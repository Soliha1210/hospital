<template>
  <div class="patInfo">
    <div class="pat">
      <div class="pic">
      <img :src="patient.pic" >
    </div>
      <div class="info">
      <h3>{{patient.name}}</h3>
    <table>
      <tr>
        <td>Tashrif sanasi</td>
        <th class="th">{{patient.date}}</th>
        <td>Chiqish sanasi</td>
        <th class="th">{{patient.exit}}</th>
      </tr>
      <tr class="tr">
        <td>Davolangan bo'lim</td>
        <th class="th">{{patient.section}}</th>
        <td>Mas'ul shifokor</td>
        <th class="th">{{patient.docname}}</th>
      </tr>
      <tr>
        <td>Murojaat sababi</td>
        <th class="th">{{patient.reas}}</th>
      </tr>
    </table>
      </div>
    </div>
    
    
      <h4>Shaxsiy ma'lumotlar</h4>
    <table>
      <tr>
        <td>Tug'igan sanasi</td>
        <th class="th">{{patient.born}}</th>
        <td>Oilaviy holat</td>
        <th class="th">{{patient.family}}</th>
        <td>Telefon raqam</td>
        <th class="th">{{patient.tel}}</th>
      </tr>
      <tr>
        <td>Tug'ilgan joyi</td>
        <th class="th">{{patient.place}}</th>
        <td>Ma'lumoti</td>
        <th class="th">{{patient.info}}</th>
      </tr>
      <tr>
        <td>Manzil</td>
        <th class="th">{{patient.address}}</th>
        <td>Bandlik holati</td>
        <th class="th">{{patient.busy}}</th>
        <td>Ish joyi</td>
        <th class="th">{{patient.work}}</th>
      </tr>
    </table> 
    <h4>Tibbiy ma'lumotlar</h4>
      <table>  
        <tr>
          <td>Qon guruhi</td>
          <th class="th">{{patient.blood}}</th>
        </tr>
      </table>
  </div>
</template>

<script>
export default {
  data(){
    return{
      id:this.$route.params.id,
      obj:{}
    }
  },
  computed:{
    patient(){
      return this.$store.getters.getByIdPatient(this.id)
    }
  }
}
</script>

<style >
  .patInfo{
    margin-left: 30px;
    border-radius: 8px;
    background-color: white;
		box-shadow: 0px 12px 26px rgba(16, 30, 115, 0.06);
    padding-left: 30px;
    margin-top: 30px;
    
  }
  .pat{
    display: flex;
  }
  h4{
    margin-top: 20px;
    width:100%;
    padding-top: 20px;
  }
  h4{
      border-top: 1px solid#BDBDBD;
  }
  .th{
    background-color: unset;

  }
  .pic img{
    width:200px;
    height:200px;
  }
</style>