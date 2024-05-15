<template>
  <div class="display-cart">
      <div class="item-cart-left">
        <p class="title-item-cart">รายการสั่งซื้อสินค้า</p>
        <div class="table-data-cart">
          <v-data-table
            :headers="headers"
            :items="desserts"
            :items-per-page="5"
            class="elevation-1"
          ></v-data-table>
        </div>
      </div>
      <div class="item-cart-right">
        <v-card width="500" outlined>
          <v-card-title>
            <span class="subtotal">
              <span>ยอดรวม : </span>
            </span>
          </v-card-title>
          <hr/>
          <v-btn class="btn-buy" block color="warning">
            <span class="btn-buy-text">คลิกเพื่อสั่งซื้อ</span>
          </v-btn>
        </v-card>
      </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        headers: [
          {
            text: 'รายการสินค้า',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'ราคา', value: '' },
          { text: 'จำนวน', value: '' },
          { text: 'ราคาทั้งหมด', value: '' },
        ],
      }
    },
  }
</script>

<style>
  .display-cart {
    margin: 85px 85px 85px 0px;
    display: flex;
    justify-content: center;
  }
  .title-item-cart {
    font-weight: 500;
    font-size: 32px;
  }
  .table-data-cart {
    font-size: 24px ;
  }
  .item-cart-right {
    padding: 10px 10px 10px 10px;
    margin-left: 50px;
    margin-top: 50px;
  }
  .subtotal {
    font-weight: 700;
  }
  .btn-buy{
    display: flex;
  }
  .btn-buy-text{
    /* padding-top: 10rem; */
    font-weight: 700;
    font-size: 18px;
  }
</style>