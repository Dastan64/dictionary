<script setup lang="ts">
//Core
import { useInfoStore } from '@/stores/info/info';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import { useThemeStore } from '@/stores/theme/theme';

const store = useInfoStore();
const themeStore = useThemeStore();
const { isDarkTheme } = storeToRefs(themeStore);
const { info, audio } = storeToRefs(store);

const isPlaying = ref(false);
const audioRef = ref<HTMLAudioElement | null>(null);

const playAudio = () => {
  audioRef.value?.play();
  isPlaying.value = true;
};

const handleAudioEnding = () => {
  isPlaying.value = false;
};
</script>

<template>
  <section class="core">
    <div class="core__container">
      <div class="core__text">
        <template v-if="info">
          <h2 class="core__title">{{ info.word }}</h2>
          <span class="core__phonetics">{{ info.phonetic }}</span>
        </template>
      </div>
      <template v-if="audio">
        <button
          aria-label="Listen to the pronunciation"
          type="button"
          class="core__play-button"
          @click="playAudio"
          title="Listen to the pronunciation"
        >
          <svg
            role="img"
            class="core__play-icon"
            width="75px"
            height="75px"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            :stroke="isDarkTheme ? '#fff' : '#a445ed'"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="miter"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <polygon
                points="2 8 2 16 6 16 13 21 13 3 6 8 2 8"
                :fill="isPlaying ? '#a445ed' : '#fff'"
                stroke-width="0"
              ></polygon>
              <polygon points="2 8 2 16 6 16 13 21 13 3 6 8 2 8"></polygon>
              <path d="M17.72,5.55a7,7,0,0,1,0,12.9"></path>
              <path d="M17.12,9.88a3,3,0,0,1,0,4.24"></path>
            </g>
          </svg>
        </button>
        <audio
          ref="audioRef"
          :src="audio"
          class="core__audio core__audio_hidden"
          @ended="handleAudioEnding"
        ></audio>
      </template>
    </div>
  </section>
  <section class="noun">
    <h2 class="noun__title">noun</h2>
    <div class="meaning">
      <h3 class="meaning__title">Meaning</h3>
      <ul class="meaning__list">
        <li v-for="item in info?.meanings[0].definitions">
          {{ item.definition }}
        </li>
      </ul>
      <div class="synonyms" v-if="info && info.meanings[0].synonyms.length > 0">
        <span class="synonyms__caption">Synonyms:</span>
        <ul class="synonyms__list">
          <li v-for="(item, index) in info.meanings[0].synonyms">
            <router-link :to="`/search/${item}`">{{ item }}</router-link>
            <span v-if="index < info.meanings[0].synonyms.length - 1">&#44;</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
  <section class="verb" v-if="info?.meanings[1]">
    <h2 class="verb__title">verb</h2>
    <div class="meaning">
      <h3 class="meaning__title">Meaning</h3>
      <ul class="meaning__list">
        <li v-for="item in info.meanings[1].definitions">
          <span>{{ item.definition }}</span>
          <p class="meaning__example">"{{ item.example }}"</p>
        </li>
      </ul>
      <div class="synonyms" v-if="info.meanings[1].synonyms.length > 0">
        <span class="synonyms__caption">Synonyms:</span>
        <ul class="synonyms__list"></ul>
      </div>
    </div>
  </section>
  <footer class="footer">
    <p>
      <span>Source:</span>
      <cite
        ><a target="_blank" rel="noopener" :href="info?.sourceUrls[0]">{{
          info?.sourceUrls[0]
        }}</a></cite
      >
    </p>
  </footer>
</template>

<style scoped lang="scss">
.core {
  color: var(--text-color);

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
    -webkit-tap-highlight-color: transparent;

    svg {
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
  color: var(--text-color);

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
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    list-style: none;

    a {
      font-size: clamp(1rem, 5vw - 1rem, 1.25rem);
      color: var(--accent);
    }
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
    color: var(--text-color);
    text-decoration-color: var(--text-color);
  }
}
</style>
