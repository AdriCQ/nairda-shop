<template>
  <q-page padding>
    <q-stepper v-model="step" vertical color="primary" animated>
      <q-step
        name="details"
        title="Detalles"
        icon="mdi-cube"
        :done="isDone('details')"
      >
        <div class="q-py-sm">
          <div
            v-for="(of, oKey) in orderOffers"
            :key="`cart-order-offer-${of.offer_id}-${oKey}`"
          >
            <order-offer-widget dense :order-offer="of" />
          </div>
        </div>

        <q-stepper-navigation>
          <q-btn
            @click="nextStep"
            color="primary"
            label="Siguiente"
            icon-right="mdi-arrow-right-bold"
            :disable="!canNext()"
          />
        </q-stepper-navigation>
      </q-step>
      <q-step
        name="map"
        title="Dirección de envío"
        icon="mdi-map-marker"
        :done="isDone('map')"
      >
        <q-input
          v-model="form.shipping_address"
          type="text"
          label="Direccion de envío"
        />

        <q-stepper-navigation class="q-gutter-x-sm">
          <q-btn
            @click="prevStep"
            color="primary"
            label="Atras"
            icon="mdi-arrow-left-bold"
          />
          <q-btn
            @click="nextStep"
            color="primary"
            label="Siguiente"
            icon-right="mdi-arrow-right-bold"
            :disable="!canNext()"
          />
        </q-stepper-navigation>
      </q-step>
    </q-stepper>
  </q-page>
</template>

<script setup lang="ts">
import { computed } from '@vue/reactivity';
import { injectStrict, _shopCart } from 'src/injectables';
import { ref } from 'vue';
import OrderOfferWidget from 'components/widgets/shop/OrderOfferWidget.vue';
import { IShopOrderCreateRequest } from 'src/api';
/**
 * -----------------------------------------
 *	Setup
 * -----------------------------------------
 */

type IStepName = 'details' | 'map' | 'time';
const $cart = injectStrict(_shopCart);
/**
 * -----------------------------------------
 *	Data
 * -----------------------------------------
 */

const form = ref<IShopOrderCreateRequest>({
  order_offers: [],
  shipping_address: '',
  shipping_coordinate: {
    lat: 0,
    lng: 0,
  },
  shipping_time: '',
  store_id: 1,
});
const orderOffers = computed(() => $cart.order_offers);
const step = ref<IStepName>('details');
const stepOrder: IStepName[] = ['details', 'map', 'time'];
/**
 * -----------------------------------------
 *	Methods
 * -----------------------------------------
 */
/**
 * canNext
 */
function canNext() {
  switch (step.value) {
    case 'map':
      return false;
    default:
      return true;
  }
}
function isDone(checkStep: IStepName) {
  const currentIndex = stepOrder.findIndex((_s) => _s === step.value);
  const checkIndex = stepOrder.findIndex((_s) => _s === checkStep);
  return currentIndex > checkIndex;
}
/**
 * nextStep
 */
function nextStep() {
  const currentIndex = stepOrder.findIndex((_s) => _s === step.value);
  step.value =
    stepOrder.length > currentIndex ? stepOrder[currentIndex + 1] : step.value;
}
/**
 * prevStep
 */
function prevStep() {
  const currentIndex = stepOrder.findIndex((_s) => _s === step.value);
  step.value = currentIndex > 0 ? stepOrder[currentIndex - 1] : step.value;
}
</script>
