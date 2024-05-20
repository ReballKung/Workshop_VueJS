<template>
    <div class="homepage">
        <div class="homepage-card">
            <div class="text-homepage-left">
                <p>
                    <span class="text-title-home">All New Gaming Laptop</span>
                    <span class="text-title-detail">Acer nitro 16!</span>
                    <span class="text-title-footer">สั่งซื้อได้แล้วตอนนี้</span>
                </p>
                <RouterLink to="/shop">
                    <v-btn color="black">
                        <span class="text-btn">Shop Now!</span>
                    </v-btn>
                </RouterLink>
            </div>
            <div class="text-homepage-right">
                <v-img src="../assets/laptop-VVI.png" width="950"></v-img>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        
    }
}
</script>

<style>
.homepage-card{
    padding: 7.5rem 10rem 10rem 20rem;
    display: flex;
    justify-content: center;
}
.homepage {
    background-color: #f3f3f3;
    width: 100%;
    height: 100vh;
}
.text-homepage-left {
    padding-top: 10rem;
}
.text-homepage-left span{
    display: block;
    /* padding-top: 10rem; */
}
.text-title-home  span {
    font-size: 50px;
}
.text-title-detail{
    font-weight: 700;
    font-size: 72px;
}
.text-btn {
    color: white;
    margin: 20px 20px 20px 20px;
    font-weight: 400;
}
</style>