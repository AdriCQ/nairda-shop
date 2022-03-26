<template>
  <q-drawer
    :model-value="drawerLeft"
    @update:model-value="updateDrawerleft"
    show-if-above
    bordered
  >
    <q-list class="rounded-borders text-grey-9">
      <!-- HOME -->
      <q-item clickable v-ripple>
        <q-item-section avatar top>
          <q-avatar size="md" icon="mdi-home" text-color="primary" />
        </q-item-section>

        <q-item-section>
          <q-item-label lines="1">Inicio</q-item-label>
        </q-item-section>
      </q-item>
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
