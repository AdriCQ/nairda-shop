import MainLayoutVue from 'src/layouts/MainLayout.vue';
import { RouteRecordRaw } from 'vue-router';
import { ROUTE_NAME } from '../names';

const route: RouteRecordRaw = {
  path: '/shop',
  component: MainLayoutVue,
  children: [
    {
      path: 'cart',
      name: ROUTE_NAME.SHOP_CART,
      component: () => import('pages/shop/CartPage.vue'),
    },
    {
      path: 'category',
      name: ROUTE_NAME.SHOP_CATEGORY,
      component: () => import('pages/shop/CategoryPage.vue'),
    },
    {
      path: 'checkout',
      name: ROUTE_NAME.SHOP_CHECKOUT,
      component: () => import('pages/shop/CheckoutPage.vue'),
    },
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
