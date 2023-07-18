<script setup lang="ts">
import WordInfo from '@/components/WordInfo/WordInfo.vue';
import NotFoundThumb from '@/components/NotFoundThumb/NotFoundThumb.vue';
import Loader from '@/components/UI/Loader.vue';

import { useInfoStore } from '@/stores/info/info';
import { storeToRefs } from 'pinia';
import { useRoute } from 'vue-router';
import { watch } from 'vue';

const store = useInfoStore();
const { error, status, info } = storeToRefs(store);

const route = useRoute();
const word = route.params.word;

if (word && typeof word === 'string') {
  store.searchWord(word);
}

watch(route, (toParams) => {
  const word = toParams.params.word;
  if (word && typeof word === 'string') {
    store.searchWord(word);
  }
});
</script>

<template>
  <WordInfo v-if="info" />
  <Loader v-if="status === 'loading'" />
  <NotFoundThumb
    v-if="error?.title"
    title="Hm, could not find anything"
    text="Make sure that the word is spelled correctly and try one more time"
  />
</template>

<style scoped lang="scss"></style>
