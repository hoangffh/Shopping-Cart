<template>
  <div>
    <h1>Product List</h1>
    <img v-if="isLoading" scr="https://i.imgur.com/JfPpwOA.gif" />
    <ul v-else>
      <li v-for="product in listProduct">
        {{ product.title }}--{{ product.price }}
        <button
          :disabled="!productIsInStock(product)"
          @click="handleAddCart(product)"
        >
          Add to Cart
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import store from "@/store/index";
export default {
  setup() {
    const listProduct = computed(() => {
      return store.state.products;
    });
    const isLoading = ref(true);
    store.dispatch("fetchProduct").then(() => {
      isLoading.value = false;
    });
    const handleAddCart = value => {
      store.dispatch("addproductToCart", value);
    };
    const productIsInStock = () => {
      return store.getters.productIsInStock;
    };
    return {
      listProduct,
      isLoading,
      handleAddCart,
      productIsInStock
    };
  }
};
</script>
