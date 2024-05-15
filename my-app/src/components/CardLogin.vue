<template>
  <div class="card-body">
    <div class="input-login" v-show="isShow">
      <p class="title-welcome">Welcome 👋 </p>
      <p class="text-welcome">Please login here</p>
      <v-text-field label="Username" variant="solo-filled"></v-text-field>
      <v-text-field label="Password" variant="solo-filled"></v-text-field>
    </div>
    <div class="input-login" v-show="!isShow">
      <p class="title-welcome">Create New Account </p>
      <p class="text-welcome">Please enter detail</p>
      <v-text-field label="Firstname" v-model="postdata.firstname" variant="solo-filled"></v-text-field>
      <v-text-field label="Surname" v-model="postdata.surname" variant="solo-filled"></v-text-field>
      <v-text-field label="Username" v-model="postdata.username" variant="solo-filled"></v-text-field>
      <v-text-field label="Password" v-model="postdata.password" variant="solo-filled"></v-text-field>
      <v-text-field label="Confirm Password" v-model="postdata.username" variant="solo-filled"></v-text-field>
    </div>
    <div class="link-resgister">
      <button @click="toggleVisible()">{{ isShow ? "Register" : "If you have Account ?" }}</button>
    </div>
    <div class="button-submit">
      <v-btn variant="tonal" v-show="isShow" color="warning">Login</v-btn>
      <v-btn variant="tonal" v-show="!isShow" color="warning">Register</v-btn>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      isShow: true,
      postdata: { //ชุดที่เอาไว้ส่งข้อมูล
        username: '',
        password: '',
        confirmPassword: '',
        firstname: '',
        surname: '',

      },
      postdefault: { //ชุดที่ล้างไว้ส่งข้อมูล
        username: '',
        password: '',
        confirmPassword: '',
        firstname: '',
        surname: ''
      },
    }
  },
  methods: {
    toggleVisible() {
      this.isShow = !this.isShow
    },
  }
}
</script>

<style>
.card-body {
  margin-left: 70px;
  margin-top: 200px;
}

.title-welcome {
  font-weight: 700;
  font-size: 38px;
}

.text-welcome {
  color: #a7a7a7;
  font-weight: 300;
}

.input-login {
  width: 600px;
  padding-top: 10px;
  padding-bottom: 10px;
}

.button-submit button {
  margin-top: 30px;
  padding: 10px 10px 10px 10px;
  width: 600px;
  color: white;
}

.link-resgister {
  display: flex;
  justify-content: end;
}

.link-resgister button span {
  color: black;
  text-decoration: none;
  font-weight: 400;
  /* margin-bottom: 30px; */
}

.input-login span {
  color: white;
}
</style>