<template>
    <div class="display-container">
        <div class="menubar-profile">
            <div class="logo-text">
                <p>Profile</p>
            </div>
            <div class="nav-menu">
                <ul>
                    <RouterLink to="/me">
                        <li>
                            <v-icon color="black" style="margin-bottom: 5px;">mdi-home</v-icon> <span>หน้าแรก</span>
                        </li>
                    </RouterLink>
                    <li>
                        <RouterLink to="/aboutme">
                            <v-icon color="black" style="margin-bottom: 5px;">mdi-account-circle</v-icon> <span>เกี่ยวกับ</span>
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/pictureme">
                           <v-icon color="black" style="margin-bottom: 5px;">mdi-panorama-variant</v-icon> <span>รูปภาพ</span>
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/videome">
                           <v-icon color="black" style="margin-bottom: 5px;">mdi-video-vintage</v-icon> <span>วีดิโอ</span>
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/contact">
                            <v-icon color="black" style="margin-bottom: 5px;">mdi-contacts</v-icon> <span>ช่องทางการติดต่อ</span>
                        </RouterLink>
                    </li>
                </ul>
            </div>
            <div class="footer-menu">
                <hr />
                <v-switch :label="`${model == true ? light : dark}`" inset class="switch-light-dark" @click="model = !model"></v-switch>
                <div class="footer-profile">
                    <v-avatar color="surface-variant" size="35">
                        <v-img src="../assets/profile.jpg" />
                    </v-avatar>
                    <span>Sukrit Saeliao</span>
                </div>
            </div>
        </div>
        <v-main class="main" >
            <!-- <p>{{ model }}</p> -->
            <router-view/>
        </v-main>
    </div>
</template>

<script>

export default {
    data () {
      return {
        model: true,
        light : "โหมดกลางวัน",
        dark : "โหมดกลางคืน",
        main : "main",
        maindark : "main-dark"
      }
    }
    // method:{
    //     setTheme() {

    //     }
    // }
}
</script>

<style>

.main {
    background-color: white;
    margin-left: 21rem;
    width: 100vh;
    min-height: 100vh;
}
.maindark {
    background-color: black;
    /* margin-left: 21rem;
    width: 100vh;
    min-height: 100vh; */
}
.display-container{
    display: flex;
}
.menubar-profile {
    position: fixed; /*  Fixed ให้ตำแหน่งอยู่คงที่*/
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 21rem;
    border: 1px solid #e9e9e9;
}

.logo-text {
    margin-top: 2rem;
    margin-left: 2rem;
    margin-bottom: 2.3rem;
    font-size: 25px;
}

.logo-text p {
    font-family: "Dancing Script", cursive;
    font-weight: 700;
}

.nav-menu ul li {
    /* margin-left: 2rem; */
    list-style: none;
    padding: 15px 15px 15px 15px;
    font-size: 16px;
}
.nav-menu {
    margin-bottom: auto;
}
.nav-menu a {
    text-decoration: none ;
    color: black;
    font-weight: 300;   
    /* padding-top: ; */
}
.nav-menu ul :hover {
    margin-right: 1rem;
    transition: 0.3s;
    background-color: #f2f2f2;
    border-radius: 10px;
}
.nav-menu span {
    margin-left: 10px;
    padding-top: 10px;
    margin-top: 10px;
    /* margin-top: 20px; */
    /* padding-bottom: 100rem; */
    text-decoration: none ;
    color: black;
    font-weight: 300;
    font-size: 16px;
}

.footer-menu {
    margin-bottom: 2rem;
    margin-left: 2rem;
}

.footer-menu hr {
    opacity: 20%;
}
.footer-profile {
    margin-top: 10px;
}

.footer-profile span {
    /* padding-top: 1rem; */
    padding-left: 1.5rem;
    font-size: 16px;
    font-weight: 300;
}
.icons {
    font-size: 14px;
    color: black;
}
</style>