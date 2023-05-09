import { defineStore } from "pinia";
import { StoreTypes } from "~/types/stores";

const initialValue: StoreTypes.Product.State = {
  productList: null,
}

export const useProductStore = defineStore('products', {
  state: () => ({
    ...initialValue
  }),
  getters: {},
  actions: {
    async fetchProducts() {
      const { data } : any = await useFetch('https://dummyjson.com/products?limit=100'); 
      if (data.value.products) {
        this.productList = data.value.products
      }
  }
  }
}) 

