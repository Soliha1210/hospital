<template>
  <div id="app">
    <div>
      <Healthcare></Healthcare>
    </div>
    <div>
      <Search></Search>
      
    
    <router-view></router-view>
    </div>
  </div>
</template>
<script>
import Healthcare from './components/Healthcare'
import Search from './components/Search'



export default {
  components:{
    Healthcare,
    Search,
  
  },
  created(){
		this.$store.dispatch('getPatient')
    this.$store.dispatch('getDoctor')
  }
}
  
</script>
<style lang="scss">
@import url(assets/style.scss);


</style>
