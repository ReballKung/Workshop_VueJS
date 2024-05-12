<template>
  <div class="story-bar">
        <div class="pic-detail">
            <v-avatar color="surface-variant" size="85" class="pic-story">
                <v-img src="https://mediaim.expedia.com/localexpert/522372/bea22eec-b70c-4430-85fd-9bea8008f638.jpg?impolicy=resizecrop&rw=1005&rh=565" />
            </v-avatar> 
            <p>Favorite Team Football</p>
        </div>
        <div class="pic-detail">
            <v-avatar color="surface-variant" size="85" class="pic-story">
                <v-img src="https://i0.wp.com/www.korseries.com/wp-content/uploads/2023/06/NewJeans-2.jpeg?resize=750%2C750&ssl=1" />
            </v-avatar> 
            <p>Favorite Music Band</p>
        </div>
        <div class="pic-detail">
            <v-avatar color="surface-variant" size="85" class="pic-story">
                <v-img src="https://i0.wp.com/www.korseries.com/wp-content/uploads/2023/06/NewJeans-2.jpeg?resize=750%2C750&ssl=1" />
            </v-avatar> 
            <p>Favorite Music Band</p>
        </div>
        <div class="pic-detail">
            <v-avatar color="surface-variant" size="85" class="pic-story">
                <v-img src="https://i0.wp.com/www.korseries.com/wp-content/uploads/2023/06/NewJeans-2.jpeg?resize=750%2C750&ssl=1" />
            </v-avatar> 
            <p>Favorite Music Band</p>
        </div>
        <div class="pic-detail">
            <v-avatar color="surface-variant" size="85" class="pic-story">
                <v-img src="https://i0.wp.com/www.korseries.com/wp-content/uploads/2023/06/NewJeans-2.jpeg?resize=750%2C750&ssl=1" />
            </v-avatar> 
            <p>Favorite Music Band</p>
        </div>
        <div class="pic-detail">
            <v-avatar color="surface-variant" size="85" class="pic-story">
                <v-img src="https://i0.wp.com/www.korseries.com/wp-content/uploads/2023/06/NewJeans-2.jpeg?resize=750%2C750&ssl=1" />
            </v-avatar> 
            <p>Favorite Music Band</p>
        </div>
  </div>
</template>

<script>
export default {
    data() {
        return{
            teamFAV : "Liverpool"
        }
    }
}
</script>

<style>
    .pic-detail p{
        display: flex;
        padding-left: 18px;
        padding-top: 8px;
        /* justify-content: center; */
        text-align: center;
        width: 20px;
        font-size: 12px;
        /* text-align: start; */
    }
    .pic-story{
        display: flex;
        justify-content: center;
        border: 5px solid #FEB941;
        grid-column: 4;
        margin-right: 3.5rem;
    }
</style>