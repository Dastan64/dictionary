<script setup lang="ts">
import loupe from '@/assets/images/loupe.svg';
import { ref, watch } from 'vue';
import router from '@/router/router';

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
        <button class="search__button" aria-label="Search the word">
          <img width="16" height="16" :src="loupe" alt="" class="search__icon" />
        </button>
      </form>
    </div>
    <p v-if="error" class="search__error">{{ error }}</p>
  </div>
</template>

<style scoped lang="scss">
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
</style>
