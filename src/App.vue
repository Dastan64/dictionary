<script setup lang="ts">
import Header from '@/components/Header/Header.vue';
import WordInfo from '@/components/WordInfo/WordInfo.vue';
import NotFoundThumb from '@/components/NotFoundThumb/NotFoundThumb.vue';
import Loader from '@/components/UI/Loader.vue';
import { useWordStore } from '@/stores/word/word';
import { storeToRefs } from 'pinia';

const store = useWordStore();
const { error, status, word } = storeToRefs(store);
</script>

<template>
  <Header />
  <main class="main">
    <WordInfo v-if="word" />
    <Loader v-if="status === 'loading'" />
    <NotFoundThumb
      v-if="error?.title"
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
