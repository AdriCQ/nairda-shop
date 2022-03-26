<template>
  <q-footer elevated class="bg-secondary">
    <q-tabs
      align="justify"
      indicator-color="transparent"
      active-color="primary"
      id="tab-buttons"
      no-caps
    >
      <q-route-tab exact>
        <q-icon name="mdi-home" size="1.6rem" />
      </q-route-tab>
      <q-route-tab exact>
        <q-icon name="mdi-store" size="1.6rem" />
      </q-route-tab>
      <q-route-tab exact>
        <q-icon name="mdi-cart-outline" size="1.6rem" />
      </q-route-tab>

      <!-- <q-route-tab exact icon="mdi-magnify" :to="{name: 'main.home'}">
        <span class="text-body2 text-weight-bolder">Buscar</span>
      </q-route-tab>-->
      <q-tab>
        <q-icon
          size="1.6rem"
          name="mdi-apps"
          @click="$app.toggleDrawerLeft()"
        />
      </q-tab>
    </q-tabs>
  </q-footer>
</template>
<script lang="ts" setup>
import { injectStrict, _app } from 'src/injectables';

const $app = injectStrict(_app);
</script>

<style>
.footer-tabs .q-tab__icon {
  font-size: 5rem;
}
</style>
