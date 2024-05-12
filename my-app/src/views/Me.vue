<template>
  <div>
    <div class="container">
      <HeadProfile class="profile-title" />
    </div>
    <div class="container">
      <StoryBar class="story-components"/>
    </div>
    <!-- <StoryBar ="story-components" /> -->
  </div>

</template>

<script>
import HeadProfile from '../components/HeadProfile.vue'
import StoryBar from '../components/StoryBar.vue'
// import menuBar from '../components/MenuBar.vue'

export default {
  components: {
    // cover , 
    HeadProfile,
    StoryBar
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
  width: 100vh;
}

.story-components {
  margin-top: 20px;
  display: flex;
  width: 100vh;
}

</style>