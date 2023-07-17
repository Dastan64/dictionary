import { defineStore } from 'pinia';
import { ref, watch } from 'vue';
import type { IErrorData, IWord } from '@/stores/word/types';

export const useWordStore = defineStore('word', () => {
  const word = ref<IWord | null>(null);
  const status = ref<'loading' | 'success' | 'failed' | 'idle'>('idle');
  const error = ref<IErrorData | null>(null);
  const audio = ref('');

  const searchWord = (query: string) => {
    if (query) {
      status.value = 'loading';
      fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${query}`)
        .then((response) => response.json())
        .then((data: IWord[] | IErrorData) => {
          if (Array.isArray(data)) {
            word.value = data[0];
            status.value = 'success';
            error.value = null;
          } else {
            error.value = data;
            status.value = 'failed';
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
  return { word, status, audio, error, searchWord };
});
