<template>
  <div>
    <div class="container">
      <HeadProfile class="profile-title" />
    </div>
    <div class="aboutme-page">
      <hr/>
    </div>
  </div>
</template>

<script>
import HeadProfile from '../components/HeadProfile.vue'
// import StoryBar from '../components/StoryBar.vue'
// import Contents from '../components/Content.vue'

export default {
  components: {
    // cover , 
    HeadProfile,
    // StoryBar,
    // Contents
  }
  // return 
}
</script>

<style>
.container {
  display: flex;
  justify-content: center;
}

.profile-title {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  width: 100vh;
}

.aboutme-page{
  margin-top: 20px;
  display:block;
  justify-content: center;
  /* text-align: center; */
  width: 100vh;
}

</style>