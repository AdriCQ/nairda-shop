import { RouteRecordRaw } from 'vue-router';
import { ROUTE_NAME } from './names';
import authRoutes from './routes/auth';
/**
 * routes
 */
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: ROUTE_NAME.HOME,
        component: () => import('pages/IndexPage.vue'),
      },
    ],
  },
  authRoutes,
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
