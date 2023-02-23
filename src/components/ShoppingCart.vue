<template>
  <div>
    <h1>Shopping Cart</h1>
    <ul>
      <li v-for="product in listProduct">
        {{ product.title }}--{{ product.price }}--{{ product.quantity }}
      </li>
    </ul>
    <h1>Total : {{ total }}</h1>
    <button @click="handleCheckout">Checkout</button>
    <p>{{ checkout }}</p>
  </div>
</template>
<script>
import { ref, computed } from "vue";
import store from "@/store/index";
export default {
  setup() {
    const listProduct = computed(() => {
      return store.getters.cartProducts;
    });
    const total = computed(() => {
      return store.getters.cartTotal;
    });
    const handleCheckout = () => {
      store.dispatch("checkout");
    };
    const checkout = ref();
    checkout.value = store.state.CheckoutStatus;
    return {
      listProduct,
      total,
      handleCheckout,
      checkout
    };
  }
};
</script>
