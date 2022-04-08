import { InjectionKey } from 'vue';
/**
 * OrderInjectable
 */
class OrderInjectable {}

export const $shopOrderInjectable = new OrderInjectable();
export const _shopOrder: InjectionKey<OrderInjectable> =
  Symbol('OrderInjectable');
