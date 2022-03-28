<template>
  <q-layout view="lHh Lpr lFF">
    <app-header />

    <drawer-left />

    <q-page-container>
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
} from 'src/injectables';
/**
 * -----------------------------------------
 *	Setup
 * -----------------------------------------
 */
provide(_shopCategory, $shopCategory);
provide(_shopCart, $shopCartInjectable);
/**
 * -----------------------------------------
 *	Init
 * -----------------------------------------
 */
void $shopCategory.availableAction();
void $shopCategory.allAction();
</script>
