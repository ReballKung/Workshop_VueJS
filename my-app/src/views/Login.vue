<template>
    <div class="body-login">
        <div class="card-pic"></div>
        <div class="form-card">
            <div class="card-body">
                <div class="input-login" v-show="isShow">
                    <p class="title-welcome">Welcome 👋 </p>
                    <p class="text-welcome">Please login here</p>
                    <v-text-field label="Username" v-model="loginform.username" variant="solo-filled"></v-text-field>
                    <v-text-field label="Password" v-model="loginform.password" variant="solo-filled"></v-text-field>
                </div>
                <div class="input-login" v-show="!isShow">
                    <p class="title-welcome">Create New Account </p>
                    <p class="text-welcome">Please enter detail</p>
                    <v-text-field label="Firstname" v-model="postdata.firstname" variant="solo-filled"></v-text-field>
                    <v-text-field label="Surname" v-model="postdata.surname" variant="solo-filled"></v-text-field>
                    <v-text-field label="Tel" v-model="postdata.tel" variant="solo-filled"></v-text-field>
                    <v-text-field label="Username" v-model="postdata.username" variant="solo-filled"></v-text-field>
                    <v-text-field label="Password" v-model="postdata.password" variant="solo-filled"></v-text-field>
                    <v-text-field label="Confirm Password" v-model="confirmPassword"
                        variant="solo-filled"></v-text-field>
                </div>
                <div class="link-resgister">
                    <button @click="toggleVisible()">{{ isShow ? "Register" : "If you have Account ?" }}</button>
                </div>
                <div class="button-submit">
                    <v-btn variant="tonal" v-show="isShow" color="warning" @click="doLogin()">Login</v-btn>
                    <v-btn variant="tonal" v-show="!isShow" color="warning" @click="resgiterUser()">Register</v-btn>
                </div>
                <CustomerView ref=""/>
            </div>
        </div>
    </div>
</template>

<script>
// import CardLogin from '../components/CardLogin.vue'
import Swal from "sweetalert2"
// import { EventBus } from '@/EventBus'
export default {
    data() {
    return {
      isShow: true,
      confirmPassword : "" ,
      loginform: {
        username: '',
        password: '',
      },
      resetloginform: {
        username: '',
        password: '',
      },
      postdata: { //ชุดที่เอาไว้ส่งข้อมูล
        username: '',
        password: '',
        firstname: '',
        surname: '',
        tel: '',
        role: 0,
        active: 1,
      },
      postdefault: { //ชุดที่ล้างไว้ส่งข้อมูล
        username: '',
        password: '',
        firstname: '',
        surname: ''
      },
    }
  },
  methods: {
    toggleVisible() {
      this.isShow = !this.isShow
    },
    async doLogin() {
      try {
        const { data } = await this.axios.post('http://localhost:3000/api/v1/login/', this.loginform)
        console.log(data);
        if (data){
          Swal.fire({
            title: "เสร็จสิ้น",
            text: "เข้าสู่ระบบเสร็จสิ้น",
            icon: "success",
            showConfirmButton: false
          });
          setTimeout(function () {
              window.location.href = '/home';
          }, 2000);
        }
        
       
      } catch (error) {
        console.log(error);
        Swal.fire({
            title: "เข้าสู่ระบบไม่สำเร็จ",
            text: "โปรดกรุณากรอก Username และ Password อีกครั้ง",
            icon: "error",
            timer: 2000 ,
            showConfirmButton: false
          });
          this.loginform = this.resetloginform
          setTimeout(function () {
              window.location.href = '/';
          }, 2000);
      }
    },
    async resgiterUser() {
      try {
        const { data } = await this.axios.post('http://localhost:3000/api/v1/register/', this.postdata)
        console.log(data);

        if (this.postdata.password == this.confirmPassword){
          Swal.fire({
            title: "เสร็จสิ้น",
            text: "สมัครสมาชิกเสร็จสิ้น",
            icon: "success",
            showConfirmButton: false
          });
          setTimeout(function () {
            window.location.href = '/';
          }, 2000);
        } else if (this.postdata.password != this.confirmPassword){
          Swal.fire({
            title: "รหัสผ่านไม่ตรงกัน",
            text: "คุณกรอกรหัสผ่านไม่ตรงกัน กรุณากรอกใหม่อีกครั้ง",
            icon: "error"
          });
        }
      } catch (error) {
        console.log(error);
        Swal.fire({
          title: "เกิดข้อผิดพลาด",
          text: "เกิดข้อผิดพลาด กรุณาติดต่อเจ้าหน้าที่",
          icon: "error"
        });
      }
    },
  }
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