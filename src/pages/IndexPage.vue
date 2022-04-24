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
        <div
          class="col-sm-6 col-md-4 col-xs-12 q-gutter-y-sm"
          v-if="hasCategories"
        >
          {{ hasCategories }}
          <category-slider />
        </div>
        <!-- Top Offers -->
        <div class="col-sm-6 col-md-4 col-xs-12 q-gutter-y-sm">
          <template v-if="stores.length">
            <title-widget :data="{ title: 'Ofertas Destacadas' }" />
            <div>
              <offer-group :data="offers" />
            </div>
          </template>
        </div>
        <!-- / Top Offers -->

        <!-- Top Stores -->
        <div class="col-sm-6 col-md-4 col-xs-12 q-gutter-y-sm">
          <template v-if="stores.length">
            <title-widget :data="{ title: 'Afiliados' }" />
            <div>
              <store-group :data="stores" />
            </div>
          </template>
        </div>
        <!-- / Top Stores -->
      </div>
    </section>
  </q-page>
</template>

<script lang="ts" setup>
import AuthWidget from 'src/components/widgets/AuthWidget.vue';
import CategorySlider from 'src/components/sliders/CategorySlider.vue';
import HomeSlider from 'src/components/sliders/HomeSlider.vue';
import StoreGroup from 'src/components/groups/StoresGroup.vue';
import OfferGroup from 'src/components/groups/OffersGroup.vue';
import TitleWidget from 'src/components/widgets/TitleWidget.vue';
import { isAuth, notificationHelper } from 'src/helpers';
import { computed, ref } from 'vue';
import { IShopOffer, IShopStore } from 'src/api';
import { $nairdaApi } from 'src/boot/axios';
import { injectStrict, _shopCategory } from 'src/injectables';

const $categories = injectStrict(_shopCategory);
/**
 * -----------------------------------------
 *	Data
 * -----------------------------------------
 */
const hasCategories = computed(() => $categories.available.length > 3);
const offers = ref<IShopOffer[]>([]);
const stores = ref<IShopStore[]>([]);
/**
 * loadOffers
 */
async function loadOffers() {
  try {
    const resp = await $nairdaApi.ShopOffer.filter({ limit: 8 });
    offers.value = resp.data;
  } catch (error) {
    notificationHelper.axiosError(error, 'No se pudo obtener las ofertas');
  }
}
/**
 * loadStores
 */
async function loadStores() {
  try {
    const resp = await $nairdaApi.ShopStore.filter({ limit: 8 });
    stores.value = resp.data;
  } catch (error) {
    notificationHelper.axiosError(error, 'No se pudo obtener los Datos');
  }
}

loadOffers();
loadStores();
</script>
