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
        <td>Date of visit</td>
        <th class="th">{{patient.date}}</th>
        <td>Date of discharge</td>
        <th class="th">{{patient.exit}}</th>
      </tr>
      <tr class="tr">
        <td>Treatment section</td>
        <th class="th">{{patient.section}}</th>
        <td>The doctor in charge</td>
        <th class="th">{{patient.docname}}</th>
      </tr>
      <tr>
        <td>The reason of addressing</td>
        <th class="th">{{patient.reas}}</th>
      </tr>
    </table>
      </div>
    </div>
    
    
      <h4>Personal information</h4>
    <table>
      <tr>
        <td>Date of birth</td>
        <th class="th">{{patient.born}}</th>
        <td>Family status</td>
        <th class="th">{{patient.family}}</th>
        <td>Telephon number</td>
        <th class="th">{{patient.tel}}</th>
      </tr>
      <tr>
        <td>Place of birth</td>
        <th class="th">{{patient.place}}</th>
        <td>Information</td>
        <th class="th">{{patient.info}}</th>
      </tr>
      <tr>
        <td>Address</td>
        <th class="th">{{patient.address}}</th>
        <td>Employment status</td>
        <th class="th">{{patient.busy}}</th>
        <td>Workplace</td>
        <th class="th">{{patient.work}}</th>
      </tr>
    </table> 
    <h4>Medical information</h4>
      <table>  
        <tr>
          <td>Blood group</td>
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