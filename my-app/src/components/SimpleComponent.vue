<template>
  <div>
    <h1>Simple Components Zone {{ name }}</h1>
    <v-btn color="success" @click="callMain()">callMain</v-btn>
  </div>
</template>

<script>
import {EventBus } from '@/EventBus'
export default {
    props:['name'],
    mounted() {
        EventBus.$on('SimComAlert' , this.SimComAlert)
    },
    methods: {
        callMain() {
            // this.$emit('callAlert')
            EventBus.$emit('MainCallAlert')
        },
        SimComAlert() {
            alert('เหมียว')
        }
    }
}
</script>

<style>

</style>