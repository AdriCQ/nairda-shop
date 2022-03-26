<template>
  <q-carousel arrows infinite autoplay animated v-model="slide">
    <q-carousel-slide name="first" img-src="images/default.jpg">
      <div class="absolute-bottom custom-caption">
        <div class="text-h6">First stop</div>
        <div class="text-subtitle1">Mountains</div>
      </div>
    </q-carousel-slide>
    <q-carousel-slide name="second" img-src="images/default.jpg">
      <div class="absolute-bottom custom-caption">
        <div class="text-h6">Second stop</div>
        <div class="text-subtitle1">Famous City</div>
      </div>
    </q-carousel-slide>
    <q-carousel-slide name="third" img-src="images/default.jpg">
      <div class="absolute-bottom custom-caption">
        <div class="text-h6">Third stop</div>
        <div class="text-subtitle1">Famous Bridge</div>
      </div>
    </q-carousel-slide>
  </q-carousel>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const slide = ref('first');
</script>

<style lang="scss" scoped>
.custom-caption {
  text-align: center;
  padding: 12px;
  color: white;
  background-color: rgba(0, 0, 0, 0.3);
}
</style>
