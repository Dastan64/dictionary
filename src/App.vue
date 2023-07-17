<script setup lang="ts">
import Header from '@/components/Header/Header.vue';
import WordInfo from '@/components/WordInfo/WordInfo.vue';
import NotFoundThumb from '@/components/NotFoundThumb/NotFoundThumb.vue';
import { useWordStore } from '@/stores/word/word';

const store = useWordStore();
</script>

<template>
  <Header />
  <main class="main">
    <WordInfo v-if="store.word" />
    <NotFoundThumb
      v-if="store.error?.title"
      title="Hm, could not find anything"
      text="Make sure that the word is spelled correctly and try one more time"
    />
  </main>
</template>

<style scoped lang="scss">
.main {
  padding-top: 45px;
}
</style>
