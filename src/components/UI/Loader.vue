<script setup lang="ts"></script>

<template>
  <div class="custom-loader"></div>
</template>

<style scoped lang="scss">
.custom-loader {
  width: 100px;
  height: 100px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 50%;
  background: radial-gradient(farthest-side, #a445ed 94%, #0000) top/16px 16px no-repeat,
    conic-gradient(#0000 30%, #a445ed);
  mask: radial-gradient(farthest-side, #0000 calc(100% - 16px), #000 0);
  -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 16px), #000 0);
  animation: s3 1s infinite linear;
}

@keyframes s3 {
  100% {
    transform: rotate(1turn);
  }
}
</style>
