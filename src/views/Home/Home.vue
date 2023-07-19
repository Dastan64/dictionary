<script setup lang="ts">
import image from '@/assets/images/home-image.svg';
</script>

<template>
  <h1 class="main-title title">Embark on a Lexical Journey: Welcome to the Dictionary Odyssey!</h1>
  <figure class="image-container">
    <img class="image" width="440" height="440" :src="image" alt="" />
  </figure>
  <p>
    Need to quickly find the definition of a word? Our user-friendly interface allows for instant
    lookups, making it easy to access information in a matter of seconds.
  </p>
  <p>
    Simply type in the word you want to know more about, and our dictionary will deliver accurate
    definitions at your fingertips.
  </p>
  <h2 class="title">Worried about mispronouncing a word?</h2>
  <p>
    Our dictionary not only provides written definitions but also offers audio pronunciation for
    many entries. Listen to the correct pronunciation to build your spoken language skills and gain
    confidence in your communication.
  </p>
  <h2 class="title">One word is not enough for you?</h2>
  <p>
    Expand your vocabulary and improve your writing by exploring synonyms and antonyms in our
    dictionary. Enhance your language versatility by discovering alternative ways to express
    yourself effectively.
  </p>
</template>

<style scoped lang="scss">
.title {
  margin-top: 32px;
  margin-bottom: 16px;
  line-height: 1.3;
  color: var(--accent);
}

.image-container {
  margin: 32px 0;
  text-align: center;
}

.image {
  @media screen and (max-width: 576px) {
    width: 320px;
    height: 320px;
  }
}

.main-title {
  margin-top: 0;
  font-size: clamp(2rem, 2vw + 1rem, 2.5rem);
}

p {
  margin: 10px 0;
  font-size: clamp(1rem, 5vw - 1rem, 1.25rem);
  line-height: 1.5;
  color: var(--text-color);
}
</style>
