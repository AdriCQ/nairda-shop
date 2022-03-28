<template>
  <q-page padding>
    <section class="q-gutter-y-sm">
      <order-offer-widget
        v-for="(of, oKey) in orderOffers"
        :key="`order-offer-${of.offer_id}-${oKey}`"
        :order-offer="of"
      />
    </section>
    <!-- Float Button -->
    <section class="fixed-bottom" style="margin-bottom: 3rem">
      <q-card class="no-shadow-box">
        <q-card-section class="q-pa-xs">
          <q-btn
            color="primary"
            text-color="dark"
            class="full-width"
            icon="mdi-cart"
            label="Completar Pedido"
          />
        </q-card-section>
      </q-card>
    </section>
    <!-- / Float Button -->
  </q-page>
</template>

<script setup lang="ts">
import { injectStrict, _shopCart } from 'src/injectables';
import { computed } from 'vue';
import OrderOfferWidget from 'src/components/widgets/shop/OrderOfferWidget.vue';
/**
 * -----------------------------------------
 *	Setup
 * -----------------------------------------
 */
const $cart = injectStrict(_shopCart);
/**
 * -----------------------------------------
 *	Data
 * -----------------------------------------
 */
const orderOffers = computed(() => $cart.order_offers);
</script>
