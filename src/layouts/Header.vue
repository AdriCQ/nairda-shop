<template>
  <q-header elevated>
    <q-toolbar>
      <q-btn
        flat
        dense
        round
        icon="mdi-menu"
        aria-label="Menu"
        text-color="dark"
        @click="toggleDrawerLeft"
      />

      <q-toolbar-title>
        <q-input
          v-model="search"
          type="search"
          placeholder="Buscar"
          bg-color="white"
          outlined
          dense
        >
          <template v-slot:after>
            <q-btn
              icon="mdi-magnify"
              text-color="dark"
              flat
              dense
              round
              aria-label="Search"
            />
          </template>
        </q-input>
      </q-toolbar-title>
    </q-toolbar>
    <q-tabs
      align="left"
      inline-label
      class="text-dark"
      v-if="!$q.platform.is.mobile"
    >
      <q-route-tab exact label="Teléfonos" />
      <q-route-tab exact label="Entidades" />
      <q-route-tab exact label="Planes" />
    </q-tabs>
  </q-header>
</template>

<script lang="ts" setup>
import { injectStrict, _app } from 'src/injectables';
import { ref } from 'vue';
/**
 * -----------------------------------------
 *	Init
 * -----------------------------------------
 */

const $app = injectStrict(_app);
/**
 * -----------------------------------------
 *	data
 * -----------------------------------------
 */
const search = ref('');
/**
 * -----------------------------------------
 *	Methods
 * -----------------------------------------
 */

function toggleDrawerLeft() {
  $app.drawerLeft = !$app.drawerLeft;
}
</script>
