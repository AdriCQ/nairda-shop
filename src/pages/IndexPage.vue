<template>
  <q-page padding class="q-gutter-y-sm">
    <section class="q-gutter-y-sm">
      <div class="row q-col-gutter-sm">
        <div class="col-sm-6 col-md-4 col-xs-12" v-if="!isAuth()">
          <auth-widget />
        </div>
        <div class="col-sm-6 col-md-4 col-xs-12">
          <home-slider />
        </div>
      </div>
    </section>
    <section class="q-gutter-y-sm">
      <title-widget :data="{ title: 'Categorías' }" />
      <category-slider />
    </section>
  </q-page>
</template>

<script lang="ts" setup>
import AuthWidget from 'src/components/widgets/AuthWidget.vue';
import CategorySlider from 'src/components/sliders/CategorySlider.vue';
import HomeSlider from 'src/components/sliders/HomeSlider.vue';
import TitleWidget from 'src/components/widgets/TitleWidget.vue';
import { isAuth } from 'src/helpers';
</script>
