<template>
    <div class="display-shopview">
        <div class="link-product">
            <RouterLink to="/home">
                <span>Home</span>
            </RouterLink>
            <span> > </span>
            <RouterLink to="/shop">
                All Product
            </RouterLink>
            <div class="select-product">
                <selectProduct />
            </div>
        </div>
        <div class="card-products">
            <v-row>
                <div v-for="(item, index) in apiProducts" :key="index">
                    <v-col cols="12">
                        <v-card width="400">
                                <v-img v-bind:src="item.urlImg"></v-img>
                            <hr />
                            <v-card-title primary-title>
                                <span class="text-productName">{{ item.productName }}</span>
                            </v-card-title>
                            <v-card-text>
                                <p class="text-price">{{ item.price }} ฿</p>
                                <!-- {{ postdata.amount }} -->
                                <!-- {{ cartid.length }} -->
                                <div class="btn-cart">
                                    <v-spacer></v-spacer>
                                    <div class="btn-select">
                                        <RouterLink :to="{ name: 'InfoProduct', params: { id: item._id } }">
                                            <v-btn class="mx-1" fab dark color="info">
                                                <v-icon dark>
                                                    mdi-information
                                                </v-icon>
                                            </v-btn>
                                        </RouterLink>
                                        
                                        <v-btn class="mx-1" fab dark color="warning" @click="editItem(item)">
                                            <v-icon dark>
                                                mdi-square-edit-outline
                                            </v-icon>
                                        </v-btn>
                                        <v-btn class="mx-1" fab dark color="error" @click="saveDelete(item._id)">
                                            <v-icon dark>
                                                mdi-delete
                                            </v-icon>
                                        </v-btn>
                                        <!-- TODO : จะแสดงเมื่อเข้า Role ลูกค้า -->
                                        <v-btn class="mx-1" fab dark color="warning" @click="addchart(item._id)">
                                            <v-icon dark>
                                                mdi-cart-plus
                                            </v-icon>
                                        </v-btn>
                                    </div>
                                </div>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </div>
            </v-row>
        </div>
        <v-dialog
            v-model="dialogedit"
            max-width="500px"
        >
            <v-card>
                <v-card-title primary-title>
                    แก้ไขข้อมูลสินค้า
                </v-card-title>
                <v-card-text>
                    <v-row>
                        <v-col cols="12">
                            <v-text-field 
                                name="" 
                                label="ชื่อสินค้า" 
                                id="" 
                                v-model="postdata.productName">
                            </v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field 
                                name="" 
                                label="รายละเอียดสินค้า" 
                                id="" 
                                v-model="postdata.type">
                            </v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field 
                                name="" 
                                label="ราคา" 
                                id="" 
                                v-model="postdata.price">
                            </v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field 
                                name="" 
                                label="ยอดคงเหลือ" 
                                id="" 
                                v-model="postdata.stock">
                            </v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field 
                                name="" 
                                label="ลิงค์รูปภาพ" 
                                id="" 
                                v-model="postdata.urlImg">
                            </v-text-field>
                        </v-col>
                    </v-row>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn text color="error" @click="closeData()">ยกเลิก</v-btn>
                    <v-btn text color="info" @click="savePutdata()">บันทึก</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import selectProduct from '../components/SelectProduct.vue'
import {EventBus } from '@/EventBus'
import Swal from 'sweetalert2';

export default {
    components: {
        selectProduct
    },
    data() {
        return {
            apiProducts: [],
            cartid : [],
            dialogedit : false,
            id: '',
            postdata: { //ชุดที่เอาไว้ส่งข้อมูล
                productName : '' ,
                type : '' ,
                price : '' ,
                stock : '',
                urlImg : '',
                amount : 0 ,
            },
            postdefault : { //ชุดที่ล้างไว้ส่งข้อมูล
                productName : '' ,
                type : '' ,
                price : '' ,
                stock : '',
                urlImg : '',
                amount : 0 ,
            },
            // productId: this.apiProducts._id
        }
    },
    created() {
        this.getProductData()
    },
    computed: {

    },
    mounted() {
        EventBus.$on('getProductData' , this.getProductData)
    },
    methods: {
        addchart(item){
            this.cartid.push(item);
            item++;
        },
        // API ZONE
        getProductData() {
            this.axios.get("http://localhost:3000/api/v1/products/").then((res) => {
                console.log('data from api', res.data)
                this.apiProducts = res.data.data
            });
        },
        editItem(item) {
            this.id = item._id
            this.postdata = item    
            this.dialogedit = true
        },
        closeData(){
            this.id = ''
            this.postdata = {...this.postdefault}
            this.dialogedit = false 
        },
        async savePutdata() {
            try {
                const {data} = await this.axios.put('http://localhost:3000/api/v1/products/'+ this.id ,this.postdata)
                console.log(data);
                alert('update complete')
                this.getProductData()
                this.closeData()
            } catch (error) {
                console.log(error);
                // alert('error')
            }
        },
        async saveDelete(item) {
            try {
                const result = await Swal.fire({
                    title: "Are you sure?",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, delete it!"
                });

                if (result.isConfirmed) {
                    const { data } = await this.axios.delete('http://localhost:3000/api/v1/products/' + item);
                    console.log(data);
                    
                    await Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                    await this.getProductData();
                    await this.closeData();
                }
            } catch (error) {
                console.log(error);
                // alert('error');
            }
        }
    },
}
</script>

<style>

.display-shopview {
    display: flex;
}
/* .btn-select {
    margin-left: 10px;
} */

.btn-select-pro a {
    text-decoration: none;
    color: black;
}

.link-product a {
    text-decoration: none;
    color: black
}

.link-product {
    margin-left: 10rem;
    margin-top: 2.5rem;
}

.content-shop {
    display: flex;
}

.card-products {
    padding-left: 7rem;
    margin-top: 5rem;
}

.text-productName {
    font-size: 22px;
    font-weight: 700;
    color: black;
}

.text-detail {
    font-size: 14px;
    color: black;
    font-weight: 500;
}

.text-price {
    font-size: 20px;
    font-weight: 300;
    color: black;
}

.btn-cart {
    display: flex;
    justify-content: space-between;
}
</style>