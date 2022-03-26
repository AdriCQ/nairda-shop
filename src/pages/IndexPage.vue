<template>
  <q-page padding class="q-gutter-y-sm">
    <section>
      <div class="row q-col-gutter-sm" v-if="$q.platform.is.desktop">
        <div class="col-sm-6 col-md-4 col-xs-12">
          <home-slider />
        </div>
        <div class="col-sm-6 col-md-4 col-xs-12">
          <home-slider />
        </div>
        <div class="col-sm-6 col-md-4 col-xs-12">
          <login-form :centered="false" />
        </div>
      </div>
    </section>
    <section>
      <category-slider />
    </section>
  </q-page>
</template>

<script lang="ts" setup>
import CategorySlider from 'src/components/sliders/CategorySlider.vue';
import HomeSlider from 'src/components/sliders/HomeSlider.vue';
import LoginForm from 'src/components/forms/LoginForm.vue';
</script>
