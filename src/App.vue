<script setup lang="ts">
import Header from '@/components/Header/Header.vue';
</script>

<template>
  <Header />
  <main class="main">
    <router-view></router-view>
  </main>
</template>

<style scoped lang="scss">
.main {
  padding-top: 45px;
}
</style>
