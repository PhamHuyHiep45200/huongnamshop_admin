import { defineStore } from "pinia"

export const useLoadingStore = defineStore("loading", {
  state: () => ({
    loading: false
  }),
  actions: {
    enableLoading() {
      this.loading = true
    },
    disibleLoading() {
      this.loading = false
    }
  }
})
