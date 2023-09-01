import { defineStore } from "pinia"

export const useAuthStore = defineStore("auth", {
  state: () => ({
    name: "hiep"
  }),
  actions: {
    setName(name: string) {
      this.name = name
    }
  }
})
