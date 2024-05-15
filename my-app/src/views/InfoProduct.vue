<template>
    <div class="display-shopview-info">
        <div class="link-product">
            <RouterLink to="/home">
                <span>Home</span>
            </RouterLink>
            <span> > </span>
            <RouterLink to="/shop">
                All Product
            </RouterLink>
            <span> > </span>
            <span> {{ apiProducts.productName }} </span>
        </div>
        <div class="card-products-info">
            <div class="img-products">
                <v-card width="700" height="600">
                    <v-img v-bind:src="apiProducts.urlImg" height="600">
                    </v-img>
                </v-card>
            </div>
            <div class="info-products">
                <p class="info-products-name">{{ apiProducts.productName }}</p>
                <p class="info-products-subname">{{ apiProducts.type }}</p>
                <p class="info-products-price">{{ apiProducts.price }} ฿</p>
                <p class="info-products-stock"> คงเหลือ {{ apiProducts.stock }}</p>
                <div class="click-for-addcart">
                    <div>
                        <v-card outlined class="card-addremove">
                            <v-btn @click="removechart(1)" outlined style="border: 1px solid white;">
                                <v-icon>mdi-minus-circle</v-icon>
                            </v-btn>
                                <span class="info-amount">{{ postdata.amount }}</span>
                            <v-btn @click="addchart(1)" outlined style="border: 1px solid white;">
                                <v-icon>mdi-plus-box</v-icon>
                            </v-btn>
                            <v-btn class="btn-addcart" color="warning">
                                <span>เพิ่มลงตะกร้า</span>
                            </v-btn>
                        </v-card>
                    </div>
                </div>
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
            id: this.$route.params.id,
            apiProducts: [] ,
            postdata: { //ชุดที่เอาไว้ส่งข้อมูล
                amount : 0 ,
            },
            postdefault : { //ชุดที่ล้างไว้ส่งข้อมูล
                amount : 0 ,
            },
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
            this.axios.get(`http://localhost:3000/api/v1/product/${this.id}`).then((res) => {
                console.log('data from api', res.data)
                this.apiProducts = res.data.data
            });
        },
        addchart(value) {
            try {
                const newAmount = this.postdata.amount + value;
                if (newAmount <= this.apiProducts.stock) {
                    this.postdata.amount = newAmount;
                } else {
                    alert('จำนวนสินค้ามากกว่าสินค้าในคลัง');
                }
            } catch (error) {
                console.log(error);
            }
        },
        removechart(value) {
            try {
                const newAmount = this.postdata.amount - value;
                if (newAmount < 0) {
                    alert('0')
                } else {
                    this.postdata.amount = newAmount;
                }
            } catch (error) {
                console.log(error);
            }
        }
    }
}
</script>

<style>
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

.card-products-info {
    display: flex;
}

.info-products-name {
    font-weight: 700;
    font-size: 42px;
}
.info-products-subname{
    font-weight: 300;
    font-size: 18px;
    width: 700px;
}
.info-products-price{
    font-weight: 400;
    font-size: 24px;
}
.info-products-stock {
    font-weight: 300;
    font-size: 18px;
}
.info-products {
    margin-left: 5rem;
    margin-top: 2rem;
}
.click-for-addcart{
    display: flex;
    font-size: 28px;
}
.info-amount {
    margin-right: 3rem;
    margin-left: 3rem;
}
.card-addremove {
    /* padding-top: 10px; */
    padding: 10px 10px 10px 10px;
    position: fixed;
}
.btn-addcart{
    margin-left: 4rem;
    width: 300px;
    /* background-color: black; */
}
</style>