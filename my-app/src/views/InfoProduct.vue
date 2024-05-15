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
            <span> > </span>
            <RouterLink to="/shop">
                TODO : ใส่ชื่อสินค้า
            </RouterLink>
        </div>
        <div class="card-products">
            <div class="img-products">
                <v-card width="700" height="600">
                    <v-img src="../assets/laptop-1205256_1280.jpg" height="600">
                    </v-img>
                </v-card>
            </div>
            <div class="info-products">
                <p class="info-products-name">Product Name</p>
                <p class="info-products-subname">Product model</p>
                <p class="info-products-subname">Product price</p>
                <p class="info-products-subname">Product price</p>
            </div>
        </div>
    </div>
</template>

<script>
// import selectProduct from '../components/SelectProduct.vue'
export default {
    components: {
        // selectProduct
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

.img-products {
    margin-top: 30px;
    margin-left: 10rem;
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
    display: flex;
}

.info-products {
    margin-left: 5rem;
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

.info-products-name {
    font-weight: 700;
    font-size: 42px;
}

</style>