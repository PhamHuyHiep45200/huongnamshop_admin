<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar
      image="https://img.freepik.com/free-vector/gradient-blue-background_23-2149333533.jpg?w=360"
    >
      <div class="flex justify-between w-full px-5">
        <span class="text-white">LOGO</span>
        <div>
          <div class="flex items-center cursor-pointer">
            <v-avatar color="info">
              <v-img
                alt="Avatar"
                src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
              />
            </v-avatar>
            <span class="font-bold ml-2 text-[white]">Hiep Huy</span>
          </div>
        </div>
      </div>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      image="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
      permanent
      theme="dark"
      :rail="rail"
      @click="rail = !rail"
    >
      <v-list nav>
        <v-list-item prepend-icon="mdi-email" title="Tin Nhắn" value="inbox" />
        <v-list-item
          prepend-icon="mdi-account-supervisor-circle"
          title="Người Dùng"
          value="supervisors"
        />
        <v-list-item
          prepend-icon="mdi-clock-start"
          title="Clock-in"
          value="clockin"
        />
      </v-list>
    </v-navigation-drawer>

    <v-main
      class="d-flex align-center justify-center"
      style="min-height: 300px"
    >
      <slot />
      <CommonLoading v-if="loading.loading" />
    </v-main>
  </v-layout>
</template>

<script setup lang="ts">
import { useLoadingStore } from "~/store/loading.store"

const drawer = ref<boolean>(true)
const rail = ref<boolean>(true)
const loading = useLoadingStore()
</script>
