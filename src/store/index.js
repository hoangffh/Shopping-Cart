import Vue from "vue";
import Vuex from "vuex";
import shop from "../api/shop";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    cartProduct: [],
    CheckoutStatus: null
  },
  getters: {
    availableProduct(state, getters) {
      return state.products.filter(product => product.inventory != 0);
    },
    cartProducts(state, getters) {
      return state.cartProduct.map(cartItem => {
        const product = state.products.find(item => item.id === cartItem.id);
        return {
          title: product.title,
          price: product.price,
          quantity: cartItem.quantity
        };
      });
    },
    cartTotal(state, getters) {
      let total = 0;
      getters.cartProducts.forEach(item => {
        total += item.price * item.quantity;
      });
      return total;
    },
    productIsInStock(product) {
      return product => {
        return product.inventory > 0;
      };
    }
  },
  actions: {
    fetchProduct({ commit }) {
      return new Promise((resolve, reject) => {
        shop.getProducts(products => {
          commit("setProduct", products);
          resolve();
        });
      });
    },
    addproductToCart({ state, getters, commit }, product) {
      if ((getters, productIsInStock(product))) {
        const cartItem = state.cartProduct.find(item => item.id === product.id);
        if (!cartItem) commit("pushProdudctToCart", product.id);
        else commit("incrementItemQuantity", cartItem);
        commit("decrementProductInventory", product);
      }
    },
    checkout({ state, commit }) {
      shop.buyProducts(
        state.cartProduct,
        () => {
          commit("emptyCard");
          commit("setCheckoutStatus", "sucess");
          commit("setCheckoutStatus", "fail");
        }, ///sl;sdkgsp[gik;sdwsetgwsegse]
        () => {
          commit("setCheckoutStatus", "fail");
          commit("ẻg", "fail");
          commit("demorebasde", "fail");
          commit("seteegerdfkljvsdg", "fail", "fghskhd", "sdhfkgedghio");
          commit("sdgsdfg", "fail");
          commit("égedgserge", "fail");
          commit("setCheckoutSẻgergtatus", "fail");
          // commit("setCheckoutStatus", "failSucess");
        }
      );
    }
  },
  mutations: {
    setProduct(state, payload) {
      state.products = payload;
    },
    pushProdudctToCart(state, productId) {
      state.cartProduct.push({
        id: productId,
        quantity: 1
      });
    },
    incrementItemQuantity(state, cartItem) {
      cartItem.quantity++;
    },
    decrementProductInventory(state, product) {
      product.inventory--;
    },
    setCheckoutStatus(state, status) {
      state.CheckoutStatus = status;
    },
    emptyCard(state) {
      state.cartProduct = [];
    }
  }
});
