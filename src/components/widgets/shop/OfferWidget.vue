<template>
  <q-card class="text-grey-9">
    <q-img :src="data.image" :ratio="16 / 9" spinner-color="primary">
      <div class="absolute-top-right cursor-pointer" style="padding: 0.2rem">
        Hell
      </div>
    </q-img>
    <q-card-section class="text-center">
      <div class="text-body1">{{ data.title }}</div>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import { IShopOffer } from 'src/api';
import { toRefs } from 'vue';

const $props = defineProps<{ data: IShopOffer }>();
const { data } = toRefs($props);
</script>
