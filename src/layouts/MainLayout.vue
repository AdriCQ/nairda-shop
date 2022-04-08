<template>
  <q-layout view="lHh Lpr lFF">
    <app-header />

    <drawer-left />

    <q-page-container class="text-grey-9">
      <router-view />
    </q-page-container>

    <app-footer />
  </q-layout>
</template>

<script lang="ts" setup>
import AppFooter from './AppFooter.vue';
import AppHeader from './Header.vue';
import DrawerLeft from './DrawerLeft.vue';
import { provide } from 'vue';
import {
  _shopCategory,
  $shopCategory,
  _shopCart,
  $shopCartInjectable,
  $mapInjectable,
  _map,
  _shopOrder,
  $shopOrderInjectable,
} from 'src/injectables';
/**
 * -----------------------------------------
 *	Setup
 * -----------------------------------------
 */
provide(_map, $mapInjectable);
provide(_shopCategory, $shopCategory);
provide(_shopOrder, $shopOrderInjectable);
provide(_shopCart, $shopCartInjectable);
/**
 * -----------------------------------------
 *	Init
 * -----------------------------------------
 */
void $shopCategory.availableAction();
void $shopCategory.allAction();
</script>
