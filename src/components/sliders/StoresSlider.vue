<template>
  <carousel :items-to-show="3" :wrap-around="true">
    <slide v-for="(d, key) in $props.data" :key="`slider-store-${d.id}-${key}`">
      <store-widget :data="d" />
    </slide>

    <template #addons>
      <navigation />
    </template>
  </carousel>
</template>

<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Navigation, Slide } from 'vue3-carousel';
import StoreWidget from '../widgets/shop/StoreWidget.vue';
import type { IShopStore } from 'src/api';

const $props = defineProps<{ data: IShopStore[] }>();
</script>
