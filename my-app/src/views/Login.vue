<template>
  <div class="body-login">
    <div class="card-pic"></div>
    <div class="form-card">
        <CardLogin />    
    </div>
  </div>
</template>

<script>
import CardLogin from '../components/CardLogin.vue'
export default {
    components : {
        CardLogin
    },
}
</script>

<style>
    .body-login {
        display: flex;
    }
    .card-pic {
        /* position: fixed; */
        width: 1000px;
        height: 100vh;
        background-image: url('../assets/home-820389_1920.jpg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
</style>