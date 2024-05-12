<template>
    <div class="display-container">
        <div class="menubar-profile">
            <div class="logo-text">
                <p>Profile</p>
            </div>
            <div class="nav-menu">
                <ul>
                    <li>
                         หน้าแรก
                    </li>
                    <li>
                        เกี่ยวกับ
                    </li>
                    <li>
                        รูปภาพ
                    </li>
                    <li>
                        วีดิโอ
                    </li>
                    <li>
                        โปรไฟล์
                    </li>
                </ul>
            </div>
            <div class="footer-menu">
                <hr />
                <v-switch :label="`โหมดกลางวัน`" inset class="switch-light-dark"></v-switch>
                <div class="footer-profile">
                    <v-avatar color="surface-variant" size="35">
                        <v-img src="../assets/profile.jpg" />
                    </v-avatar>
                    <span>Sukrit Saeliao</span>
                </div>
            </div>
        </div>
        <v-main class="main">
            <router-view/>
        </v-main>
    </div>
</template>

<script>

export default {

}
</script>

<style>

.main {
    margin-left: 21rem;
    width: 100vh;
    min-height: 100vh;
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
    margin-left: 3.5rem;
    list-style: none;
    padding: 25px 25px 25px 0px;
    font-size: 16px;
    font-weight: 300;
}
.nav-menu {
    margin-bottom: auto;
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
</style>