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
                        <v-card width="300">
                            <v-hover v-slot="{ hover }">
                                <v-img v-bind:src="item.urlImg">
                                    <v-expand-transition>
                                        <div v-if="hover"
                                            class="d-flex justify-md-center transition-fast-in-fast-out btn-select-pro"
                                            style="height: 100%; background-color: #e7e7e7; opacity: 70%;">
                                            <div>
                                                <RouterLink :to="{ name: 'InfoProduct', params: { id: item._id } }">
                                                    <v-btn class="btn-goto-info" style="margin-top: 16rem;" color="warning">
                                                        <span>รายละเอียดสินค้า</span>
                                                    </v-btn>
                                                </RouterLink>
                                            </div>
                                        </div>
                                    </v-expand-transition>
                                </v-img>
                            </v-hover>
                            <hr />
                            <v-card-title primary-title>
                                <span class="text-productName">{{ item.productName }}</span>
                            </v-card-title>
                            <v-card-text>
                                <p class="text-detail">{{ item.detail }}</p>
                                <div class="btn-cart">
                                    <p class="text-price">{{ item.price }} ฿</p>
                                    <!-- {{ productId }} -->
                                    <div class="btn-select">
                                        <v-tooltip top>
                                            <template v-slot:activator="{ on, attrs }">
                                                <v-btn color="warning" dark v-bind="attrs" v-on="on">
                                                    <v-icon color="whilte">mdi-cart-plus</v-icon>
                                                </v-btn>
                                            </template>
                                            <span>เพิ่มตะกร้า</span>
                                        </v-tooltip>
                                    </div>
                                </div>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </div>
            </v-row>
        </div>
    </div>
</template>

<script>
import selectProduct from '../components/SelectProduct.vue'
export default {
    components: {
        selectProduct
    },
    data() {
        return {
            apiProducts: [] ,
            id: ""
            // productId: this.apiProducts._id
        }
    },
    created() {
        this.getProductData()
    },
    computed: {

    },
    methods: {
        // API ZONE
        getProductData() {
            this.axios.get("http://localhost:3000/api/v1/products/").then((res) => {
                console.log('data from api', res.data)
                this.apiProducts = res.data.data
            });
        }
    },
    
}
</script>

<style>
.select-product {
    position: fixed;
}

.display-shopview {
    display: flex;
}

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
    padding-left: 15rem;
    margin-top: 5rem;
}

.text-productName {
    font-size: 24px;
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
    font-weight: 500;
    color: black;
}

.btn-cart {
    display: flex;
    justify-content: space-between;
}
</style>