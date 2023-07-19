<script setup lang="ts">
//Assets
import logo from '@/assets/images/logo.svg';
import loupe from '@/assets/images/loupe.svg';

//Components
import ThemeSwitcher from '@/components/ThemeSwitcher/ThemeSwitcher.vue';
import FontSwitcher from '@/components/FontSwitcher/FontSwitcher.vue';

//Core
import { ref, watch } from 'vue';
import router from '@/router/router';
import { useThemeStore } from '@/stores/theme/theme';
import { storeToRefs } from 'pinia';

const store = useThemeStore();
const { isDarkTheme } = storeToRefs(store);

const query = ref('');
const error = ref('');

const handleSubmit = () => {
  if (query.value) {
    router.push(`/search/${query.value}`);
    query.value = '';
  } else {
    error.value = 'Whoops, can’t be empty...';
  }
};

watch(query, (newValue) => {
  if (newValue) {
    error.value = '';
  }
});
</script>

<template>
  <header class="header">
    <div class="header__top">
      <router-link to="/">
        <figure class="header__logo-container">
          <img width="32" height="32" :src="logo" alt="Dictionary" class="header__logo" />
        </figure>
      </router-link>
      <div class="header__settings">
        <FontSwitcher :isDarkTheme="isDarkTheme" />
        <span class="split-line"></span>
        <ThemeSwitcher isDarkTheme="isDarkTheme" />
      </div>
    </div>
    <div class="header__search search">
      <div class="search__container">
        <form class="search__form" @submit.prevent="handleSubmit">
          <input
            v-model="query"
            type="text"
            class="search__input"
            aria-label="Search the word..."
            placeholder="Search the word..."
          />
          <button class="search__button">
            <img :src="loupe" alt="" class="search__icon" />
          </button>
        </form>
      </div>
      <p v-if="error" class="search__error">{{ error }}</p>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  padding: 58px 0 0;

  @media screen and (max-width: 576px) {
    padding-top: 24px;
  }

  &__top {
    display: flex;
    align-items: center;
    margin-bottom: 50px;

    @media screen and (max-width: 576px) {
      margin-bottom: 24px;
    }
  }

  &__settings {
    display: flex;
    align-items: center;
    gap: 26px;
    margin-left: auto;

    @media screen and (max-width: 576px) {
      gap: 16px;
    }
  }

  .split-line {
    display: block;
    width: 1px;
    min-height: 32px;
    background-color: var(--grey);
  }

  .search {
    &__form {
      width: 100%;
    }

    &__container {
      position: relative;
    }

    &__input {
      display: block;
      width: 100%;
      padding: 20px 64px 20px 24px;
      border: none;
      border-radius: 8px;
      font-size: clamp(1rem, 1vw + 0.5rem, calc(20rem / 16));
      color: var(--text-color);
      background-color: var(--input-background);
      caret-color: var(--accent);

      &:focus-visible {
        outline: 1px solid var(--accent);
      }
    }

    &__error {
      margin-top: 8px;
      font-size: clamp(1rem, 1vw + 0.5rem, calc(20rem / 16));
      color: var(--error);
    }

    &__button {
      position: absolute;
      top: 50%;
      right: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 48px;
      height: 48px;
      border: none;
      cursor: pointer;
      background-color: transparent;
      transform: translateY(-50%);
    }
  }
}
</style>
