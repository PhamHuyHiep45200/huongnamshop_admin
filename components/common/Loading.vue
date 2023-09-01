<template>
  <div class="hns-wrap">
    <div class="hns-wrap-body">
      <span>Loading...</span>
      <v-progress-linear indeterminate color="info" height="25" />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scope>
.hns-wrap {
  z-index: 1100;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;

  &-body {
    width: 70%;

    span {
      color: white;
      font-weight: bold;
      display: block;
      text-align: center;
      font-size: 18px;
      margin-bottom: 10px;
    }
  }
}
</style>
