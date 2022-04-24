import { IShopOrder, IShopOrderCreateRequest } from 'src/api';
import { $nairdaApi } from 'src/boot/axios';
import { notificationHelper } from 'src/helpers';
import { InjectionKey, ref } from 'vue';
/**
 * OrderInjectable
 */
class OrderInjectable {
  private _myOrders = ref<IShopOrder[]>([]);

  /**
   * -----------------------------------------
   *	Getters & Setters
   * -----------------------------------------
   */
  get myOrders() {
    return this._myOrders.value;
  }
  set myOrders(orders: IShopOrder[]) {
    this._myOrders.value = orders;
  }
  /**
   * -----------------------------------------
   *	Actions
   * -----------------------------------------
   */
  /**
   * createMassAction
   * @param order
   */
  async createMassAction(order: Omit<IShopOrderCreateRequest, 'store_id'>) {
    try {
      const resp = await $nairdaApi.ShopOrder.createMass(order);
      this.myOrders.push(...resp.data);
      console.log(this.myOrders);
    } catch (error) {
      notificationHelper.axiosError(error, 'No se pudo crear la orden');
    }
  }
}

export const $shopOrderInjectable = new OrderInjectable();
export const _shopOrder: InjectionKey<OrderInjectable> =
  Symbol('OrderInjectable');
