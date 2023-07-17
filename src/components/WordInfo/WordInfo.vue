<script setup lang="ts">
import play from '@/assets/images/play.svg';
import { useWordStore } from '@/stores/word/word';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';

const store = useWordStore();
const { word, audio } = storeToRefs(store);

const audioRef = ref<HTMLAudioElement | null>(null);

const playAudio = () => {
  audioRef?.value?.play();
};
</script>

<template>
  <section class="core">
    <div class="core__container">
      <div class="core__text">
        <template v-if="word">
          <h2 class="core__title">{{ word.word }}</h2>
          <span class="core__phonetics">{{ word.phonetic }}</span>
        </template>
      </div>
      <button type="button" class="core__play-button" @click="playAudio">
        <img width="75" height="75" :src="play" alt="" />
      </button>
      <audio ref="audioRef" :src="audio" class="core__audio core__audio_hidden"></audio>
    </div>
  </section>
</template>

<style scoped lang="scss">
.core {
  padding-bottom: 40px;

  &__container {
    display: flex;
    align-items: center;
  }

  &__title {
    margin-bottom: 8px;
    font-size: clamp(2rem, 2vw + 2rem, 4rem);
    font-weight: 900;
    line-height: 1;
  }

  &__phonetics {
    display: block;
    font-size: clamp(1rem, 1vw + 1rem, 1.5rem);
    line-height: 1.3;
    color: var(--accent);
  }

  &__play-button {
    margin-left: auto;
    border: none;
    cursor: pointer;
    background-color: transparent;
  }

  &__audio {
    &__hidden {
      display: none;
    }
  }
}
</style>
