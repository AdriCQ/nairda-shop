<template>
  <q-header elevated>
    <q-toolbar>
      <q-btn
        flat
        dense
        round
        icon="mdi-menu"
        aria-label="Menu"
        @click="toggleDrawerLeft"
      />

      <q-toolbar-title> Quasar App </q-toolbar-title>

      <div>Quasar v{{ $q.version }}</div>
    </q-toolbar>
  </q-header>
</template>

<script lang="ts" setup>
import { injectStrict, _app } from 'src/injectables';

const $app = injectStrict(_app);

function toggleDrawerLeft() {
  $app.drawerLeft = !$app.drawerLeft;
}
</script>
