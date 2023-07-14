<script setup lang="ts">
import chevron from '@/assets/images/chevron.svg';
</script>

<template>
  <div class="switcher">
    <button class="switcher__button">
      <span>Sans Serif</span>
      <img :src="chevron" alt="" />
    </button>
    <div class="switcher__fonts fonts">
      <ul class="fonts__list">
        <li>
          <button>Sans Serif</button>
        </li>
        <li>
          <button>Serif</button>
        </li>
        <li>
          <button>Mono</button>
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
    font-size: 1.125rem;
    cursor: pointer;
    background-color: transparent;
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
  padding: 24px;
  border-radius: 16px;
  background-color: var(--white);

  &__list {
    display: flex;
    flex-direction: column;
    gap: 16px;
    list-style: none;

    button {
      border: none;
      font-size: 1.125rem;
      line-height: 1.3;
      cursor: pointer;
      background-color: transparent;
      transition: color 0.2s;

      &:hover {
        color: var(--accent);
      }
    }
  }
}
</style>
