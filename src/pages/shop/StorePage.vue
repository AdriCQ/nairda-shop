<template>
  <q-page padding class="q-gutter-y-sm" v-if="store">
    <q-card class="no-shadow-box text-grey-9">
      <q-img
        :src="handleImage(store.image)"
        :ratio="16 / 9"
        spinner-color="primary"
        spinner-size="82px"
      />
      <q-card-section>
        <div class="text-h6">Our Changing Planet</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>
      <q-card-section>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </q-card-section>
    </q-card>

    <title-widget :data="{ title: 'Productos' }" />
    <div>
      <offers-group :data="store.offers" v-if="store.offers?.length" />
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { IShopStore } from 'src/api';
import { $nairdaApi } from 'src/boot/axios';
import { notificationHelper, handleImage } from 'src/helpers';
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import TitleWidget from 'src/components/widgets/TitleWidget.vue';
import OffersGroup from 'src/components/groups/OffersGroup.vue';

/**
 * -----------------------------------------
 *	Setup
 * -----------------------------------------
 */
const $route = useRoute();
/**
 * -----------------------------------------
 *	Data
 * -----------------------------------------
 */
const store = ref<IShopStore | undefined>(undefined);
/**
 * -----------------------------------------
 *	Methods
 * -----------------------------------------
 */
async function init() {
  if ($route.params.id && !isNaN(Number($route.params.id))) {
    const storeId = Number($route.params.id);
    notificationHelper.loading();
    try {
      const resp = await $nairdaApi.ShopStore.find(storeId);
      store.value = resp.data;
    } catch (error) {}
    notificationHelper.loading(false);
  }
}
/**
 * -----------------------------------------
 *	Init
 * -----------------------------------------
 */
void init();
</script>
