<template>
  <div>
    <div class="header-bar">
        <div class="logo-text">
            <p>E-Soft Shop</p>
        </div>
        <div class="menu-header-bar">
            <ul>
                <li>Home</li>
                <li>Shop</li>
                <li>Blog</li>
                <li>Contact Us</li>
            </ul>
        </div>
        <div class="menu-header-bar-02">
            <RouterLink to="/">
                <v-btn color="red">
                    <span style="color: white;">Logout</span>
                </v-btn>
            </RouterLink>
        </div>
    </div>
    <v-main class="main">
        <!-- <p>{{ model }}</p> -->
        <router-view />
    </v-main>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    .header-bar {
        padding: 15px 15px 7px 15px;
        display: flex;
        justify-content: space-between;
        /* background-color: #e7e7e7; */
    }
    .logo-text p {
        margin-left: 20px;
        font-family: "Dancing Script", cursive;
        font-weight: 700;
        font-size: 32px;
    }
    .menu-header-bar ul {
        display: flex;
        list-style: none;
        /* padding-right: 10rem; */
    }
    .menu-header-bar ul li {
        padding: 20px 40px 7px 40px;
    }
    .menu-header-bar-02 {
        padding: 13px 20px 0px 20px;
    }
</style>