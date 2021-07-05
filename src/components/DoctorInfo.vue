<template>
  <div class="doctorInfo">
    <div class="doc">
      <div class="pic">
        <img :src="doctor.pic">
      </div>
      <div class="info">
        <h3>{{doctor.name}}</h3>
        <table>
          <tr>
            <td>Specialty</td>
            <th class="th">{{doctor.spec}}</th>
            <td>Date of commencement of work</td>
            <th class="th">{{doctor.workdate}}</th>
          </tr>
          <tr class="tr">
            <td>Working department</td>
            <th class="th">{{doctor.worksec}}</th>
            <td>Work schedule</td>
            <th class="th">{{doctor.worktime}}</th>
          </tr>
          <tr>
            <td>Work experience</td>
            <th class="th">{{doctor.staj}}</th>
          </tr>
        </table>
      </div>
    </div>


    <h4>Personal information</h4>
    <table>
      <tr>
        <td>Date of birth</td>
        <th class="th">{{doctor.docborn}}</th>
        <td>Family status</td>
        <th class="th">{{doctor.docfamily}}</th>
        <td>Telephon number</td>
        <th class="th">{{doctor.doctel}}</th>
      </tr>
      <tr>
        <td>Place of birth</td>
        <th class="th">{{doctor.docplace}}</th>
        <td>Education</td>
        <th class="th">{{doctor.docinfo}}</th>
      </tr>
      <tr>
        <td>Oila a'zolaridan telfon raqami</td>
        <th class="th">{{doctor.telfam}}</th>
        <td>Address</td>
        <th class="th">{{doctor.docaddress}}</th>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        id: this.$route.params.id,
        doc: {}
      }
    },
    computed: {
      doctor() {
        return this.$store.getters.getByIdDoctor(this.id)
      }
    }
  }
</script>

<style>
  .doctorInfo {
    margin-left: 30px;
    border-radius: 8px;
    background-color: white;
    box-shadow: 0px 12px 26px rgba(16, 30, 115, 0.06);
    padding-left: 30px;
    margin-top: 30px;

  }
  .info{
    margin-top: 20px;
  }
  .doc {
    display: flex;
  }

  h4 {
    margin-top: 20px;
    width: 100%;
    padding-top: 20px;
    border-top: 1px solid#BDBDBD;
  }

  h3 {
    margin-left: 25px;
  }

  .th {
    background-color: unset;

  }

  .pic img {
    width: 200px;
    height: 200px;
  }
</style>