<script setup lang="ts">
import chevron from '@/assets/images/chevron.svg';

import { ref, watch } from 'vue';
import { useFontStore } from '@/stores/fonts/font';
import { storeToRefs } from 'pinia';

const store = useFontStore();
const { currentFont, fontFamilies } = storeToRefs(store);
const isDropdownOpen = ref(false);

defineProps<{ isDarkTheme: boolean }>();

const changeFont = (fontFamily: string) => {
  isDropdownOpen.value = !isDropdownOpen.value;
  currentFont.value = fontFamily.toLowerCase();
};

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

watch(currentFont, (newValue, oldValue) => {
  document.getElementById('app')!.classList.remove(oldValue);
  document.getElementById('app')!.classList.add(newValue);
});
</script>

<template>
  <div class="switcher">
    <button class="switcher__button" @click="toggleDropdown">
      <span>{{ currentFont }}</span>
      <img width="13" height="9" :src="chevron" alt="" />
    </button>
    <div
      class="switcher__fonts fonts"
      :class="{ 'fonts--open': isDropdownOpen, 'fonts_with-shadow': isDarkTheme }"
    >
      <ul class="fonts__list">
        <li v-for="font in fontFamilies">
          <button :value="font.family" :class="font.family" @click="changeFont(font.family)">
            {{ font.text }}
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
.switcher {
  position: relative;

  &__button {
    display: flex;
    align-items: center;
    gap: 18px;
    border: none;
    font-size: clamp(0.875rem, 5vw - 1rem, 1.125rem);
    font-weight: 700;
    color: var(--text-color);
    cursor: pointer;
    background-color: transparent;
    -webkit-tap-highlight-color: transparent;

    @media screen and (max-width: 576px) {
      gap: 16px;
    }

    span {
      text-transform: capitalize;
    }
  }

  &__fonts {
    position: absolute;
    top: 32px;
    left: 0;
    z-index: 2;
    width: max-content;
  }
}

.fonts {
  display: none;
  padding: 24px;
  border-radius: 16px;
  background-color: var(--bg-color-2);

  &_with-shadow {
    box-shadow: 0 5px 30px 0 var(--accent);
  }

  &--open {
    display: block;
  }

  &__list {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    list-style: none;

    li {
      width: 100%;
    }

    button {
      width: 100%;
      border: none;
      font-size: 1.125rem;
      line-height: 1.3;
      color: var(--text-color);
      text-align: left;
      cursor: pointer;
      background-color: transparent;
      transition: color 0.2s;

      &.serif {
        font-family: 'Lora', serif;
      }

      &.sans-serif {
        font-family: 'Inter', 'Segoe UI', sans-serif;
      }

      &.mono {
        font-family: 'Inconsolata', monospace;
      }

      &:hover {
        color: var(--accent);
      }
    }
  }
}
</style>
