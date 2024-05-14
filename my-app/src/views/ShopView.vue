<template>
    <div class="display-shopview">
        <div class="link-product">
            <RouterLink to="/home">
                Home
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
                            <v-img v-bind:src="item.urlImg">
                            </v-img>
                            <hr/>
                            <v-card-title primary-title>
                                <span class="text-productName">{{ item.productName }}</span>
                            </v-card-title>
                            <v-card-text>
                                <p class="text-detail">{{ item.detail }}</p>
                                <div class="btn-cart">
                                    <p class="text-price">{{ item.price }} ฿</p>
                                    <v-btn class="btn-select" color="warning">
                                        <v-icon color="whilte">mdi-cart-plus</v-icon>
                                    </v-btn>
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
            apiProducts: []
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
    }
}
</script>

<style>
.select-product {
    position: fixed;
}

.display-shopview {
    display: flex;
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
    margin-left: 15rem;
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