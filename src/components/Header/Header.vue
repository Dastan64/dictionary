<script setup lang="ts">
//Assets
import logo from '@/assets/images/logo.svg';

//Components
import ThemeSwitcher from '@/components/ThemeSwitcher/ThemeSwitcher.vue';
import FontSwitcher from '@/components/FontSwitcher/FontSwitcher.vue';
import Search from '@/components/Header/Search/Search.vue';

//Core
import { useThemeStore } from '@/stores/theme/theme';
import { storeToRefs } from 'pinia';

const store = useThemeStore();
const { isDarkTheme } = storeToRefs(store);
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
    <Search />
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
}
</style>
