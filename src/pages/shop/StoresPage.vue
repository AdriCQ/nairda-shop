<template>
  <q-page padding>
    <section class="q-gutter-y-sm">
      <title-widget :data="{ title: 'Tiendas' }" />
      <div>
        <stores-group :data="stores" />
      </div>
    </section>
  </q-page>
</template>

<script setup lang="ts">
import { IShopStore } from 'src/api';
import { $nairdaApi } from 'src/boot/axios';
import { notificationHelper } from 'src/helpers';
import { ref } from 'vue';
import StoresGroup from 'src/components/groups/StoresGroup.vue';
import TitleWidget from 'src/components/widgets/TitleWidget.vue';

/**
 * -----------------------------------------
 *	Data
 * -----------------------------------------
 */
const stores = ref<IShopStore[]>([]);
/**
 * -----------------------------------------
 *	Methods
 * -----------------------------------------
 */
/**
 * loadStores
 */
async function loadStores() {
  notificationHelper.loading();
  try {
    const resp = await $nairdaApi.ShopStore.list();
    stores.value = resp.data.data;
  } catch (error) {
    notificationHelper.axiosError(error, 'No hay conexión');
  }
  notificationHelper.loading(false);
}
void loadStores();
</script>
