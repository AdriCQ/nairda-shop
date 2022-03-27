import MainLayoutVue from 'src/layouts/MainLayout.vue';
import { RouteRecordRaw } from 'vue-router';
import { ROUTE_NAME } from '../names';

const route: RouteRecordRaw = {
  path: '/shop',
  component: MainLayoutVue,
  children: [
    {
      path: 'offers/:id',
      name: ROUTE_NAME.SHOP_OFFER,
      component: () => import('pages/shop/OfferPage.vue'),
    },
    {
      path: 'stores',
      name: ROUTE_NAME.SHOP_STORES,
      component: () => import('pages/shop/StoresPage.vue'),
    },
    {
      path: 'stores/:id',
      name: ROUTE_NAME.SHOP_STORE,
      component: () => import('pages/shop/StorePage.vue'),
    },
  ],
};

export default route;
