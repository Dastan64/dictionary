<script setup lang="ts">
//Assets
import logo from '@/assets/images/logo.svg';
import loupe from '@/assets/images/loupe.svg';

//Components
import ThemeSwitcher from '@/components/ThemeSwitcher/ThemeSwitcher.vue';
import FontSwitcher from '@/components/FontSwitcher/FontSwitcher.vue';

//Core
import { ref } from 'vue';
import router from '@/router/router';

const query = ref('');

const handleSubmit = () => {
  if (query.value) {
    router.push(`/search/${query.value}`);
    query.value = '';
  }
};
</script>

<template>
  <header class="header">
    <div class="header__top">
      <figure class="header__logo-container">
        <img width="32" height="32" :src="logo" alt="Dictionary" class="header__logo" />
      </figure>
      <div class="header__settings">
        <FontSwitcher />
        <span class="split-line"></span>
        <ThemeSwitcher />
      </div>
    </div>
    <div class="header__search search">
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

  &__search {
    position: relative;
    display: flex;
  }

  .search {
    &__form {
      width: 100%;
    }

    &__input {
      display: block;
      width: 100%;
      padding: 20px 64px 20px 24px;
      border: none;
      border-radius: 8px;
      font-size: clamp(1rem, 1vw + 0.5rem, calc(20rem / 16));
      background-color: var(--input-background);
      caret-color: var(--accent);

      &:focus-visible {
        outline: 1px solid var(--accent);
      }
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
