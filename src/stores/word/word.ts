import { defineStore } from 'pinia';
import { ref, watch } from 'vue';
import type { IWord } from '@/stores/word/types';

export const useWordStore = defineStore('word', () => {
  const word = ref<IWord | null>(null);
  const audio = ref('');

  watch(word, (newValue) => {
    if (newValue) {
      const target = newValue?.phonetics.find((obj) => obj.audio);

      if (target) {
        audio.value = target.audio;
      }
    }
  });
  return { word, audio };
});
