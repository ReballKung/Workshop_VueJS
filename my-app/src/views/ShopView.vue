<template>
  <div>
    <div class="link-product">
        <RouterLink to="/home">
            Home
        </RouterLink>
        <span> > </span>
        <RouterLink to="/shop">
            All Product
        </RouterLink>
        <div class="select-product">
            <selectProduct/>
        </div>
    </div>
  </div>
</template>

<script>
import selectProduct from '../components/SelectProduct.vue'
export default {
    components: {
        selectProduct
    }
}
</script>

<style>
    .link-product a {
        text-decoration: none;
        color: black
    }
    .link-product {
        margin-left: 10rem;
        margin-top: 2.5rem;
    }
</style>