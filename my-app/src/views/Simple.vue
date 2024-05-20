<template>
  <div>
    <h1>Simple Page</h1>
    <h1 v-if="show">{{ name }}</h1>
    <!--?   props -->
    <simcom :name="name" @callAlert="callAlert"/>
    <v-btn color="success" @click="callSim()">callSim</v-btn>
  </div>
</template>

<script>
import simcom from '../components/SimpleComponent.vue'
import {EventBus } from '@/EventBus'
export default {
    
    components : {
        simcom
    },
    data() {
        return{
            name : "สมจิตร" ,
            show : false
        }
    },
    mounted() {
        EventBus.$on('MainCallAlert' , this.callAlert)
    },
    methods: {
        callAlert() {
            alert('โฮ่ง')
        },
        callSim() {
            EventBus.$emit('SimComAlert')
        }
    },
   
}
</script>

<style>

</style>