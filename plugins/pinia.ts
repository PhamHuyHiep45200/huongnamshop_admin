import { useMainStore } from "~/store"
import { useAuthStore } from "~/store/auth.store"
import { useLoadingStore } from "~/store/loading.store"

export default defineNuxtPlugin(({ $pinia }: any) => {
  return {
    provide: {
      mainStore: useMainStore($pinia),
      authStore: useAuthStore($pinia),
      loadingStore: useLoadingStore($pinia)
    }
  }
})
