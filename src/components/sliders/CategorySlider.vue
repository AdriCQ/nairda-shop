<template>
  <Carousel :items-to-show="3" :wrap-around="true" v-if="categories.length">
    <Slide v-for="(cat, key) in categories" :key="`cat-${cat.tag}-${key}`">
      <q-avatar
        size="5rem"
        font-size="3rem"
        color="primary"
        text-color="white"
        :icon="cat.icons.mdi"
      />
    </Slide>

    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>

<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Navigation, Slide } from 'vue3-carousel';
import { injectStrict, _shopCategory } from 'src/injectables';
import { computed } from 'vue';
/**
 * -----------------------------------------
 * setup
 * -----------------------------------------
 */
const $categories = injectStrict(_shopCategory);
/**
 * -----------------------------------------
 *	Data
 * -----------------------------------------
 */
const categories = computed(() => $categories.all);
</script>
