import { defineStore } from 'pinia';
import { ref, watch } from 'vue';
import type { IErrorData, IWord } from '@/stores/word/types';

export const useWordStore = defineStore('word', () => {
  const word = ref<IWord | null>(null);
  const error = ref<IErrorData | null>(null);
  const audio = ref('');

  const searchWord = (query: string) => {
    if (query) {
      fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${query}`)
        .then((response) => response.json())
        .then((data: IWord[] | IErrorData) => {
          if (Array.isArray(data)) {
            word.value = data[0];
            error.value = null;
          } else {
            error.value = data;
          }
        });
    }
  };

  watch(word, (newValue) => {
    if (newValue) {
      const target = newValue?.phonetics.find((obj) => obj.audio);

      if (target) {
        audio.value = target.audio;
      }
    }
  });
  return { word, audio, error, searchWord };
});
