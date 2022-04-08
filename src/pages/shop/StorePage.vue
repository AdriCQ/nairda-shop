<template>
  <q-page padding class="q-gutter-y-sm" v-if="store">
    <q-card class="no-box-shadow text-grey-9">
      <q-img
        :src="handleImage(store.image)"
        :ratio="4 / 3"
        spinner-color="primary"
        spinner-size="82px"
      >
        <div
          class="absolute-bottom-right"
          v-if="store.category"
          style="padding: 0.2rem"
        >
          <q-icon class="q-mr-sm" :name="store.category.icons.mdi" />
          {{ store.category?.title }}
        </div>

        <div
          class="absolute-top-right"
          style="padding: 0.2rem"
          v-if="store.rating > 0"
        >
          <span>{{ store.rating }}</span>
          <q-icon size="sm" class="q-ml-xs" name="mdi-star" color="primary" />
        </div>
      </q-img>
      <q-card-section>
        <div class="text-h6">{{ store.title }}</div>
      </q-card-section>
      <q-card-section v-html="store.description" />
    </q-card>

    <title-widget :data="{ title: 'Ofertas' }" v-if="store.offers?.length" />
    <div>
      <offers-group :data="store.offers" v-if="store.offers?.length" />
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { IShopStore } from 'src/api';
import { $nairdaApi } from 'src/boot/axios';
import { notificationHelper, handleImage, goTo } from 'src/helpers';
import { ROUTE_NAME } from 'src/router';
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
/**
 * init7
 */
async function init() {
  if ($route.params.id && !isNaN(Number($route.params.id))) {
    const storeId = Number($route.params.id);
    notificationHelper.loading();
    try {
      const resp = await $nairdaApi.ShopStore.find(storeId);
      store.value = resp.data;
    } catch (error) {
      notificationHelper.axiosError(error, 'No encontramos la tienda');
      goTo(ROUTE_NAME.HOME);
    }
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
