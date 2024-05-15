<template>
  <div>
    <div class="header-bar">
        <RouterLink to="/home">
            <div class="logo-text">
                <p>E-Soft Shop</p>
            </div>
        </RouterLink>
        <div class="menu-header-bar">
            <ul>
                <RouterLink to="/home">
                    <li><span>Home</span></li>
                </RouterLink>
                <RouterLink to="/shop">
                    <li><span>Shop</span></li>
                </RouterLink>
                <RouterLink to="/blog">
                    <li><span>Blog</span></li>
                </RouterLink>
                <RouterLink to="/blog">
                    <li><span>Contact Us</span></li>
                </RouterLink>
            </ul>
        </div>
        <div class="menu-header-bar-02">
            <RouterLink to="/cart">
                <v-icon color="black" class="icon-cart">mdi-cart {{ chatid }}</v-icon> 
            </RouterLink>
            <!-- <RouterLink to="/"> -->
                <div class="text-center">
                    <v-menu offset-y>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                        color="primary"
                        dark
                        v-bind="attrs"
                        v-on="on"
                        >
                        Profile 
                        </v-btn>
                    </template>
                    <v-list>
                        <v-list-item>
                            <v-list-item-title color="red">
                                <RouterLink to="/">
                                    <span style="color: red;" class="logout-text">Logout</span>         
                                </RouterLink>
                            </v-list-item-title>
                        </v-list-item>
                    </v-list>
                    </v-menu>
                </div>

                
                <!-- <v-btn color="red">
                    <span style="color: white;">Logout</span>
                </v-btn> -->
            <!-- </RouterLink> -->
        </div>
    </div>
        <!-- <p>{{ model }}</p> -->
        <router-view />
  </div>
</template>

<script>
import { EventBus } from '@/EventBus'
export default {
    data(){
        return{
            chatid : ''
        }
    },
    methods:{
        getCart(){
            EventBus.$emit('getCart')
        },
    }
}
</script>

<style>
    .header-bar a {
        text-decoration: none;
        color: black;
    }
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
        padding: 20px 40px 20px 40px;
    }
    .menu-header-bar ul :hover{
        transition: 0.3s;
        background-color: #f2f2f2;
        color: black;
        border-radius: 10px;
    }
    .menu-header-bar a {
        text-decoration: none;
        color: black;
        font-weight: 500;
        /* padding: 20px 40px 7px 40px; */
    }
    .menu-header-bar-02 {
        display: flex;
        padding: 13px 20px 0px 20px;
    }
    .icon-cart {
        padding-right: 50px;
    }
    a{
        text-decoration: none;
    }
</style>