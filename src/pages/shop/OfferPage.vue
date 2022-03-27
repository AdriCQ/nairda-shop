<template>
  <q-page padding>
    <section
      class="q-gutter-y-sm text-grey-9"
      style="padding-bottom: 3rem"
      v-if="offer"
    >
      <q-card class="no-box-shadow">
        <q-img
          :src="handleImage(offer.image)"
          :ratio="16 / 9"
          spinner-color="primary"
          spinner-size="82px"
          :alt="offer.title"
        >
          <div
            class="absolute-top-right"
            v-if="offer.category"
            style="padding: 0.2rem"
          >
            <q-icon class="q-mr-sm" :name="offer.category.icons.mdi" />
            {{ offer.category?.title }}
          </div>
        </q-img>
        <q-card-section>
          <div class="text-h6">{{ offer.title }}</div>
          <div class="text-subtitle2">
            ${{ Number(offer.sell_price).toFixed(2) }}
          </div>
        </q-card-section>
        <q-card-section>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </q-card-section>
      </q-card>
    </section>

    <!-- Footer -->
    <section class="fixed-bottom" style="margin-bottom: 3rem" v-if="offer">
      <q-card>
        <q-card-section class="bg-secondary q-pa-none">
          <div class="row" v-if="offer?.type === 'PRODUCT'">
            <div class="col">
              <input-spinner
                v-model="cant"
                :min="0"
                :max="offer?.stock_qty ? offer?.stock_qty : 100"
                button-class="bg-secondary"
              />
            </div>
            <div class="col">
              <q-btn
                color="primary"
                text-color="dark"
                style="height: 2.5rem"
                icon="mdi-cart-plus"
                class="full-width"
                label="Añadir"
              />
            </div>
          </div>
          <div v-else>
            <q-btn
              color="primary"
              text-color="dark"
              style="height: 2.5rem"
              icon="mdi-cart-plus"
              class="full-width"
              label="Solicitar"
            />
          </div>
        </q-card-section>
      </q-card>
    </section>
    <!-- / Footer -->
  </q-page>
</template>

<script setup lang="ts">
import { IShopOffer } from 'src/api';
import { $nairdaApi } from 'src/boot/axios';
import { handleImage, notificationHelper } from 'src/helpers';
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import InputSpinner from 'src/components/forms/InputSpinner.vue';
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
const cant = ref(1);
const offer = ref<IShopOffer | undefined>(undefined);
/**
 * -----------------------------------------
 *	Methods
 * -----------------------------------------
 */
async function loadOffer() {
  if ($route.params.id && !isNaN(Number($route.params.id))) {
    notificationHelper.loading();
    try {
      const resp = await $nairdaApi.ShopOffer.find(Number($route.params.id));
      offer.value = resp.data;
    } catch (error) {
      notificationHelper.axiosError(error);
    }
    notificationHelper.loading(false);
  }
}
void loadOffer();
</script>
