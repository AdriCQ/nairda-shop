<template>
  <q-card>
    <q-card-section>
      <div class="text-h6">{{ props.data }}</div>
    </q-card-section>
    <q-card-section>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import { IShopOffer } from 'src/api';

const props = defineProps<{ data: IShopOffer }>();
</script>
