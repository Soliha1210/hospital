<template>
  <div>
    <h1>{{count}}</h1>
    <h1>{{countDoc}}</h1>
  </div>
</template>

<script>
export default {
  computed:{
    count(){
      return this.$store.getters.getCount
    },
    countDoc(){
      return this$store.getters.getCountDoc
    }
  }
}
</script>

<style>

</style>