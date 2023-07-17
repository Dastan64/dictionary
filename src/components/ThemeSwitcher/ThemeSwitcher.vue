<script setup lang="ts">
import moon from '@/assets/images/moon.svg';
</script>

<template>
  <div class="switcher">
    <input class="switcher__input" type="checkbox" id="switcher" />
    <label class="switcher__label" for="switcher"></label>
    <img :src="moon" alt="" class="switcher__moon-icon" />
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
