import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useFontStore = defineStore('font', () => {
  const currentFont = ref('sans-serif');
  const fontFamilies = ref([
    {
      family: 'serif',
      text: 'Serif',
    },
    {
      family: 'sans-serif',
      text: 'Sans Serif',
    },
    {
      family: 'mono',
      text: 'Mono',
    },
  ]);
  return { currentFont, fontFamilies };
});
