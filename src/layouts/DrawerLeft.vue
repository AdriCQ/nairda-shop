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
      <!-- / HOME -->

      <!-- Categories -->
      <q-expansion-item :content-inset-level="0.25">
        <template v-slot:header>
          <q-item-section avatar top>
            <q-avatar size="md" icon="mdi-apps" text-color="primary" />
          </q-item-section>

          <q-item-section>
            <q-item-label lines="1">Categorías</q-item-label>
          </q-item-section>
        </template>

        <q-expansion-item
          expand-icon-class="text-transparent"
          :expand-separator="false"
          v-for="(cat, cKey) in categories"
          :key="`cat-${cat.tag}-${cKey}`"
          @click="goToctegory(cat.tag)"
        >
          <template v-slot:header>
            <q-item-section avatar top>
              <q-avatar size="md" :icon="cat.icons.mdi" text-color="primary" />
            </q-item-section>

            <q-item-section>
              <q-item-label lines="1">{{ cat.title }}</q-item-label>
            </q-item-section>
          </template>
        </q-expansion-item>
      </q-expansion-item>
      <!-- / Categories -->
    </q-list>
  </q-drawer>
</template>

<script lang="ts" setup>
import { injectStrict, _app, _shopCategory } from 'src/injectables';
import { ROUTE_NAME } from 'src/router';
import { computed } from 'vue';
import { useRouter } from 'vue-router';

const $app = injectStrict(_app);
const $categories = injectStrict(_shopCategory);
const $router = useRouter();

const categories = computed(() => $categories.available);
const drawerLeft = computed(() => $app.drawerLeft);
/**
 * goToctegory
 * @param cat
 */
function goToctegory(cat: string) {
  void $router.push({ name: ROUTE_NAME.SHOP_CATEGORY, query: { tag: cat } });
  updateDrawerleft(false);
}
/**
 * updateDrawerleft
 * @param open
 */
function updateDrawerleft(open: boolean) {
  $app.drawerLeft = open;
}
</script>
