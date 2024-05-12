<template>
  <div class="profile-content">
    <div class="profile-pic">
      <v-avatar color="surface-variant" size="150">
        <v-img src="../assets/profile.jpg" />
      </v-avatar>
    </div>
    <div class="profile-text">
      <div class="profile-name">
        <p>{{ nickName }}</p>
        <v-btn variant="tonal" href="https://www.facebook.com/ReballKung" class="btn-social">
            Facebook
        </v-btn>
        <v-btn variant="tonal" href="https://www.instagram.com/reballkung/" >
            Instagram
        </v-btn>
      </div>
      <div class="profile-name-detail">
        <p>{{ post + " " }} โพสต์</p>
        <p>ผู้ติดตาม{{ " " + follow + " " }} คน</p>
        <p>กำลังติดตาม{{ " " + following + " " }} คน</p>
      </div>
      <div class="profile-detail">
        <p style="font-weight: 600">{{ firstName + " " + lastName }}</p>
        <p>เกี่ยวกับฉัน : {{titleText}}</p>
        <!-- <p>วันเกิด : {{birthdate}}</p> -->
      </div>
    </div>
    <!-- <v-card width="100">
      <v-card-title>
        Hello
      </v-card-title>
    </v-card> -->
  </div>
</template>

<script>
export default {
  data(){
    return{
      firstName : "Sukrit" , 
      lastName : "Saeliao" , 
      nickName : "Jamesbond",
      post : 408 , 
      follow : 582 , 
      following : 1082 ,
      age : 22 ,
      titleText : "Hello World. I'm Jamesbond. Nice to meet you." , 
      birthdate : "30/05/2002"
    }
  }
}
</script>

<style>
  .profile-pic{
    margin-top: 1rem;
  }
  .profile-text {
    display: block;
    margin-left: 5rem ;
  }
  .profile-name{
    display: flex;
    font-size: 24px;
    font-weight: 600;
  }
  .profile-name p{
    margin-right: 4rem;
  }
  .profile-name .btn-social {
    margin-right: 2rem;
  }
  .profile-name-detail {
    display: flex;
    margin-top: 10px;
  }
  .profile-name-detail p {
    font-size: 18px;
    padding-right: 5rem;
  }
  .profile-detail {
    margin-top: 7px;
  }
</style>