<template>
    <div>
        
        <app-search></app-search>
        <app-info></app-info>
        <app-patients></app-patients>
        <app-doctors></app-doctors>
    </div>
</template>

<script>

import appSearch from '../components/Search.vue'
import appInfo from '../components/Info.vue'
import appPatients from '../components/Patients.vue'
import appDoctors from '../components/Doctors.vue'
export default {
    components: { 
        
        appSearch,
        appInfo,
        appPatients,
        appDoctors
    },

}
</script>

<style>

</style>