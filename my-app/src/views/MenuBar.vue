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

    </div>

</template>

<script>
export default {

}
</script>

<style>
.display-container{
    display: flex;
}
.menubar-profile {
    height: 100vh;
    width: 21rem;
    max-width: 21rem;
    border: 1px solid #e9e9e9;
    /* opacity: 100%; */
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
    /* /* margin-left : 0 ; */
    list-style: none;
    padding: 20px 20px 20px 0px;
    font-size: 16px;
}

.nav-menu {
    margin-bottom: 10rem;
}

.footer-menu {
    margin-left: 2rem;
}

.footer-menu hr {
    opacity: 20%;
    /* margin-top: 25rem; */
}

.footer-profile span {
    /* padding-top: 1rem; */
    padding-left: 1.5rem;
    font-size: 16px;
    font-weight: 300;
}
</style>