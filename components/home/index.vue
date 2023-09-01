<template>
  <v-btn class="ma-2" color="primary" @click="counterFunc">
    Accept {{ main.counter }}
    <v-icon end icon="mdi-checkbox-marked-circle" />
  </v-btn>
  <v-btn class="ma-2" color="primary" @click="loadingData">
    loading
    <v-icon end icon="mdi-checkbox-marked-circle" />
  </v-btn>
  <v-btn class="ma-2" color="primary" @click="user">
    redirect
    <v-icon end icon="mdi-checkbox-marked-circle" />
  </v-btn>
</template>

<script setup lang="ts">
import { useMainStore } from "~/store"
import { useLoadingStore } from "~/store/loading.store"

const router = useRouter()
const main = useMainStore()
const loading = useLoadingStore()

const counterFunc = () => {
  main.counterFunc(2)
}

const user = () => {
  router.push("/user")
}

const loadingData = () => {
  loading.enableLoading()
  setTimeout(() => {
    loading.disibleLoading()
  }, 3000)
}
</script>
