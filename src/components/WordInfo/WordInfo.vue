<script setup lang="ts">
//Assets
import play from '@/assets/images/play.svg';

import { useWordStore } from '@/stores/word/word';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';

const store = useWordStore();
const { word, audio } = storeToRefs(store);

const audioRef = ref<HTMLAudioElement | null>(null);

const playAudio = () => {
  audioRef.value?.play();
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
  <section class="noun">
    <h2 class="noun__title">noun</h2>
    <div class="meaning">
      <h3 class="meaning__title">Meaning</h3>
      <ul class="meaning__list">
        <li v-for="item in word?.meanings[0].definitions">
          {{ item.definition }}
        </li>
      </ul>
      <div class="synonyms">
        <span class="synonyms__caption">Synonyms:</span>
        <ul class="synonyms__list">
          <li v-for="item in word?.meanings[0].synonyms">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </section>
  <section class="verb">
    <h2 class="verb__title">verb</h2>
    <div class="meaning">
      <h3 class="meaning__title">Meaning</h3>
      <ul class="meaning__list">
        <li v-for="item in word?.meanings[1]?.definitions">
          <span>{{ item.definition }}</span>
          <p class="meaning__example">"{{ item.example }}"</p>
        </li>
      </ul>
      <div class="synonyms" v-if="word && word.meanings[1]?.synonyms.length > 0">
        <span class="synonyms__caption">Synonyms:</span>
        <ul class="synonyms__list"></ul>
      </div>
    </div>
  </section>
  <footer class="footer">
    <p>
      <span>Source:</span>
      <cite
        ><a target="_blank" rel="noopener" :href="word?.sourceUrls[0]">{{
          word?.sourceUrls[0]
        }}</a></cite
      >
    </p>
  </footer>
</template>

<style scoped lang="scss">
.core {
  color: var(--dark2);

  &__container {
    display: flex;
    align-items: center;
  }

  &__title {
    margin-bottom: 8px;
    font-size: clamp(2rem, 12vw - 1.5rem, 4rem);
    font-weight: 900;
    line-height: 1;
  }

  &__phonetics {
    display: block;
    font-size: clamp(1.125rem, 6vw - 1rem, 1.5rem);
    line-height: 1.3;
    color: var(--accent);
  }

  &__play-button {
    margin-left: auto;
    border: none;
    cursor: pointer;
    background-color: transparent;

    img {
      @media screen and (max-width: 576px) {
        width: 48px;
        height: 48px;
      }
    }
  }

  &__audio {
    &__hidden {
      display: none;
    }
  }
}

.noun,
.verb {
  padding: 40px 0;

  @media screen and (max-width: 576px) {
    padding: 28px 0;
  }

  &__title {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 40px;
    font-style: italic;
    font-size: clamp(1.125rem, 6vw - 1rem, 1.5rem);
    line-height: 1.3;

    @media screen and (max-width: 576px) {
      gap: 16px;
      margin-bottom: 30px;
    }

    &::after {
      display: flex;
      width: 100%;
      height: 1px;
      background-color: var(--grey);
      content: '';
    }
  }
}

.meaning {
  &__title {
    margin-bottom: 24px;
    font-size: clamp(1rem, 5vw - 1rem, 1.25rem);
    font-weight: 400;
    color: var(--grey2);

    @media screen and (max-width: 576px) {
      margin-bottom: 16px;
    }
  }

  &__list {
    display: flex;
    gap: 12px;
    padding-left: 22px;
    list-style-position: inside;
    flex-direction: column;

    @media screen and (max-width: 576px) {
      padding-left: 0;
    }

    li {
      font-size: clamp(calc(15rem / 16), 5vw - 1rem, 1.125rem);
      line-height: 1.3;

      &::marker {
        color: var(--purple);
      }
    }
  }

  &__example {
    margin-top: 12px;
    margin-left: 24px;
    color: var(--grey2);
  }
}

.synonyms {
  display: flex;
  align-items: center;
  gap: 24px;
  padding-top: 64px;

  @media screen and (max-width: 576px) {
    padding-top: 24px;
  }

  &__caption {
    font-size: clamp(1rem, 5vw - 1rem, 1.25rem);
    line-height: 1.3;
    color: var(--grey2);
  }

  &__list {
    list-style: none;
  }
}

.footer {
  padding-top: 20px;
  border-top: 1px solid var(--grey);

  p {
    display: flex;
    align-items: baseline;
    gap: 20px;
    font-size: 0.875rem;
    color: var(--grey2);
  }

  a {
    font-style: normal;
    color: var(--dark2);
    text-decoration-color: var(--dark2);
  }
}
</style>
