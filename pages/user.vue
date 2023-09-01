<template>
  <div>
    <input type="file" @change="handleChange">
    <img v-if="url" :src="url" alt="">
  </div>
</template>

<script setup lang="ts">
import { ref as storageRef } from "firebase/storage"
import { useFirebaseStorage, useStorageFile } from "vuefire"

const storage = useFirebaseStorage()
const mountainFileRef = storageRef(storage, "images/")
// const image = ref<string>("")

const { url, upload } = useStorageFile(mountainFileRef)

const handleChange = async(e: any) => {
  await upload(e.target.files[0])
}
</script>
