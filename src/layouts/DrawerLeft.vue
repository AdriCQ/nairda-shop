<template>
  <q-drawer
    :model-value="drawerLeft"
    @update:model-value="updateDrawerleft"
    show-if-above
    bordered
  >
    <q-list>
      <q-item-label header> Essential Links </q-item-label>
    </q-list>
  </q-drawer>
</template>

<script lang="ts" setup>
import { injectStrict, _app } from 'src/injectables';
import { computed } from 'vue';

const $app = injectStrict(_app);
const drawerLeft = computed(() => $app.drawerLeft);

function updateDrawerleft(open: boolean) {
  $app.drawerLeft = open;
}
</script>
