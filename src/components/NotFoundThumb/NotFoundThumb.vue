<script setup lang="ts">
import emoji from '@/assets/images/emoji-not-found.png';
import type { NotFoundThumbProps } from '@/components/NotFoundThumb/types';
import { useInfoStore } from '@/stores/info/info';
import { storeToRefs } from 'pinia';

defineProps<NotFoundThumbProps>();
const store = useInfoStore();
const { error } = storeToRefs(store);
</script>

<template>
  <div class="thumb">
    <img :src="emoji" alt="" class="thumb__emoji" />
    <h2 class="thumb__title">{{ error?.title || title }}</h2>
    <p class="thumb__text">{{ error?.message || text }}</p>
    <p class="thumb__text" v-if="error?.resolution">{{ error?.resolution }}</p>
  </div>
</template>

<style scoped lang="scss">
.thumb {
  text-align: center;

  &__title {
    margin-top: 44px;
    margin-bottom: 24px;
    font-size: 1.25rem;
  }

  &__text {
    font-size: clamp(1rem, 5vw - 1rem, 1.125rem);
    line-height: 1.5;
    color: var(--grey2);
  }
}
</style>
