<script setup lang="ts">
import Header from '@/components/Header/Header.vue';
import { onMounted } from 'vue';
import { useThemeStore } from '@/stores/theme/theme';
import { storeToRefs } from 'pinia';

const store = useThemeStore();
const { isDarkTheme } = storeToRefs(store);

onMounted(() => {
  const localTheme = localStorage.getItem('theme');
  if (localTheme) {
    if (localTheme === 'dark') {
      isDarkTheme.value = true;
    } else if (localTheme === 'light') {
      document.body.classList.remove('dark');
    }
  } else {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      isDarkTheme.value = true;
    } else {
      document.body.classList.remove('dark');
    }
  }
});
</script>

<template>
  <Header />
  <main class="main">
    <router-view></router-view>
  </main>
</template>

<style scoped lang="scss">
.main {
  padding-top: 45px;
}
</style>
