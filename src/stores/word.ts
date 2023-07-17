import { defineStore } from 'pinia';
import { ref, watch } from 'vue';

export const useWordStore = defineStore('word', () => {
  const word = ref(null);
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
