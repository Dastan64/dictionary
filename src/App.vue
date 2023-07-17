<script setup lang="ts">
import Header from '@/components/Header/Header.vue';
import WordInfo from '@/components/WordInfo/WordInfo.vue';
import { useWordStore } from '@/stores/word';

const store = useWordStore();
</script>

<template>
  <Header />
  <main class="main">
    <WordInfo v-if="store.word" />
  </main>
</template>

<style scoped lang="scss">
.main {
  padding-top: 45px;
}
</style>
