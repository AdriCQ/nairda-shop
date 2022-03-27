<template>
  <q-page padding>
    <section class="q-gutter-y-sm">
      <title-widget :data="{ title: 'Tiendas' }" />
      <title-widget :data="{ title: 'Ofertas' }" />
    </section>
  </q-page>
</template>

<script setup lang="ts">
import TitleWidget from 'components/widgets/TitleWidget.vue';
// import StoreSlider from 'components/sliders/StoresSlider.vue';
// import OffersSlider from 'components/sliders/OffersSlider.vue';
</script>
