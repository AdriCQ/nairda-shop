<template>
  <q-page padding class="q-gutter-y-sm">
    <section class="q-gutter-y-sm">
      <div class="row q-col-gutter-sm">
        <div class="col-sm-6 col-md-4 col-xs-12" v-if="!isAuth()">
          <auth-widget />
        </div>
        <div class="col-sm-6 col-md-4 col-xs-12">
          <home-slider />
        </div>
        <div class="col-sm-6 col-md-4 col-xs-12 q-gutter-y-sm">
          <category-slider />
        </div>
        <div class="col-sm-6 col-md-4 col-xs-12 q-gutter-y-sm">
          <template v-if="stores.length">
            <title-widget :data="{ title: 'Tiendas' }" />
            <div>
              <store-group :data="stores" />
            </div>
          </template>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script lang="ts" setup>
import AuthWidget from 'src/components/widgets/AuthWidget.vue';
import CategorySlider from 'src/components/sliders/CategorySlider.vue';
import HomeSlider from 'src/components/sliders/HomeSlider.vue';
import StoreGroup from 'src/components/groups/StoresGroup.vue';
import TitleWidget from 'src/components/widgets/TitleWidget.vue';
import { isAuth } from 'src/helpers';
import { ref } from 'vue';
import { IShopStore } from 'src/api';
import { $api } from 'src/boot/axios';

const stores = ref<IShopStore[]>([]);

async function getConfig() {
  const resp = await $api.get<IShopStore[]>('api/applications/nairda');
  stores.value = resp.data;
}

void getConfig();
</script>
