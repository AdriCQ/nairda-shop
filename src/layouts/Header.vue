<template>
  <q-header elevated>
    <q-toolbar class="bg-primary">
      <q-btn
        flat
        dense
        round
        icon="mdi-menu"
        aria-label="Menu"
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
              class="text-white"
              icon="mdi-magnify"
              flat
              dense
              round
              aria-label="Search"
            />
          </template>
        </q-input>
      </q-toolbar-title>
    </q-toolbar>
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
