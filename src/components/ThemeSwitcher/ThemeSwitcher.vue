<script setup lang="ts">
import { watch } from 'vue';
import { useThemeStore } from '@/stores/theme/theme';
import { storeToRefs } from 'pinia';

const store = useThemeStore();
const { isDarkTheme } = storeToRefs(store);

watch(isDarkTheme, (newValue) => {
  console.log(newValue);
  if (newValue) {
    document.body.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.body.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
});
</script>

<template>
  <div class="switcher">
    <input
      class="switcher__input"
      type="checkbox"
      id="switcher"
      v-model="isDarkTheme"
      aria-label="Enable dark theme"
    />
    <label class="switcher__label" for="switcher"></label>
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M1 10.449C0.998458 12.8283 1.80169 15.1383 3.27914 17.0033C4.75659 18.8683 6.82139 20.1788 9.13799 20.7218C11.4545 21.2647 13.8866 21.0082 16.039 19.994C18.1912 18.9797 19.9373 17.2673 20.9931 15.1352C11.5442 15.1352 6.85799 10.4479 6.85799 1C5.09842 1.87311 3.61767 3.22033 2.58266 4.88981C1.54765 6.5593 0.999502 8.48469 1 10.449Z"
        :stroke="isDarkTheme ? '#a445ed' : '#757575'"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </div>
</template>

<style scoped lang="scss">
.switcher {
  display: flex;
  align-items: center;
  gap: 20px;

  @media screen and (max-width: 576px) {
    gap: 12px;
  }

  &__label {
    position: relative;
    display: block;
    width: 40px;
    height: 20px;
    border-radius: 100px;
    cursor: pointer;
    background-color: var(--dark);
    -webkit-tap-highlight-color: transparent;
    outline-offset: 4px;

    &::after {
      position: absolute;
      top: 3px;
      left: 3px;
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background-color: var(--white);
      content: '';
      transition: 0.3s;
    }
  }

  &__input {
    position: absolute;
    appearance: none;

    &:checked {
      + .switcher__label {
        background-color: var(--accent);

        &::after {
          left: calc(100% - 3px);
          transform: translate(-100%);
        }
      }
    }

    &:focus-visible {
      + .switcher__label {
        outline: 1px solid var(--accent);
      }
    }
  }
}
</style>
