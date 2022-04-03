<template>
  <q-page padding>
    <q-stepper
      v-model="step"
      vertical
      color="primary"
      animated
      class="q-pa-none"
    >
      <!-- Details -->
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
            @click="nextStep(false)"
            color="primary"
            label="Siguiente"
            icon-right="mdi-arrow-right-bold"
            rounded
            outline
            :disable="!canNext()"
          />
        </q-stepper-navigation>
      </q-step>
      <!-- / Details -->

      <!-- shipping_address -->
      <q-step
        name="shipping_address"
        title="Dirección de envío"
        icon="mdi-map-marker"
        :done="isDone('shipping_address')"
      >
        <q-input
          v-model="form.shipping_address"
          type="text"
          label="Direccion de envío"
        />
        <!-- <q-btn
          color="primary"
          icon="mdi-map-marker"
          class="full-width q-mt-sm"
          label="Marcar en Mapa"
          @click="mapPopup = true"
          rounded
        /> -->

        <q-stepper-navigation class="q-gutter-x-sm">
          <q-btn
            @click="prevStep"
            color="primary"
            label="Atras"
            rounded
            outline
            icon="mdi-arrow-left-bold"
          />
          <q-btn
            @click="nextStep(false)"
            color="primary"
            label="Siguiente"
            rounded
            outline
            icon-right="mdi-arrow-right-bold"
            :disable="!canNext()"
          />
        </q-stepper-navigation>
      </q-step>
      <!-- / shipping_address -->

      <!-- shipping_time -->
      <q-step
        name="shipping_time"
        title="Horario"
        icon="mdi-timer"
        :done="isDone('shipping_time')"
        class="dense q-py-sm"
      >
        <q-date v-model="form.shipping_time" mask="YYYY-MM-DD HH:mm" />
        <q-time v-model="form.shipping_time" mask="YYYY-MM-DD HH:mm" />

        <q-stepper-navigation class="q-gutter-x-sm">
          <q-btn
            @click="prevStep"
            color="primary"
            label="Atras"
            icon="mdi-arrow-left-bold"
            rounded
            outline
          />
          <q-btn
            @click="nextStep(false)"
            color="primary"
            label="Siguiente"
            icon-right="mdi-arrow-right-bold"
            :disable="!canNext()"
            rounded
            outline
          />
        </q-stepper-navigation>
      </q-step>
      <!-- / shipping_time -->

      <!-- summary -->
      <q-step
        name="summary"
        title="Resúmen"
        icon="mdi-timer"
        :done="isDone('summary')"
      >
        <q-stepper-navigation class="q-gutter-x-sm">
          <q-btn
            @click="prevStep"
            color="primary"
            label="Atras"
            icon="mdi-arrow-left-bold"
            rounded
            outline
          />
          <q-btn
            @click="nextStep(false)"
            color="primary"
            label="Comprar"
            icon-right="mdi-arrow-right-bold"
            :disable="!canNext()"
            rounded
            outline
          />
        </q-stepper-navigation>
      </q-step>
      <!-- / summary -->
    </q-stepper>
    <!-- Map Dialog -->
    <q-dialog v-model="mapPopup" maximized>
      <q-card>
        <map-widget @add-position="onMapAddPosition" />
      </q-card>
    </q-dialog>
    <!-- / Map Dialog -->
  </q-page>
</template>

<script setup lang="ts">
import OrderOfferWidget from 'components/widgets/shop/OrderOfferWidget.vue';
import MapWidget from 'src/components/widgets/MapWidget.vue';
import { computed } from '@vue/reactivity';
import { injectStrict, _shopCart } from 'src/injectables';
import { ref } from 'vue';
import { IShopOrderCreateRequest } from 'src/api';
import { LatLng } from 'leaflet';
/**
 * -----------------------------------------
 *	Setup
 * -----------------------------------------
 */

type IStepName = 'details' | 'shipping_address' | 'shipping_time' | 'summary';

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
const mapPopup = ref(false);
const orderOffers = computed(() => $cart.order_offers);
const step = ref<IStepName>('details');
const stepOrder: IStepName[] = [
  'details',
  'shipping_address',
  'shipping_time',
  'summary',
];
/**
 * -----------------------------------------
 *	Methods
 * -----------------------------------------
 */
/**
 * canNext
 */
function canNext() {
  return true;
}
function isDone(checkStep: IStepName) {
  const currentIndex = stepOrder.findIndex((_s) => _s === step.value);
  const checkIndex = stepOrder.findIndex((_s) => _s === checkStep);
  return currentIndex > checkIndex;
}
/**
 * nextStep
 */
function nextStep(force = false) {
  const currentIndex = stepOrder.findIndex((_s) => _s === step.value);
  const mapIndex = stepOrder.findIndex((_s) => _s === 'shipping_address');
  if (mapIndex !== currentIndex || force) {
    step.value =
      stepOrder.length > currentIndex
        ? stepOrder[currentIndex + 1]
        : step.value;
  } else {
    mapPopup.value = true;
  }
}
/**
 * onMapAddPosition
 * @param pos
 */
function onMapAddPosition(pos: LatLng) {
  console.log(pos);
  setTimeout(() => {
    mapPopup.value = false;
    nextStep(true);
  }, 500);
}
/**
 * prevStep
 */
function prevStep() {
  const currentIndex = stepOrder.findIndex((_s) => _s === step.value);
  step.value = currentIndex > 0 ? stepOrder[currentIndex - 1] : step.value;
}
</script>

<style>
.q-stepper--vertical .dense .q-stepper__step-inner {
  padding: 0 24px 32px 32px;
}
</style>
