import { InjectionKey, ref } from 'vue';
/**
 * @class AppInjectable
 */
class AppInjectable {
  private _drawerLeft = ref(false);

  /**
   * -----------------------------------------
   *	Getters & Setters
   * -----------------------------------------
   */
  /**
   * Gets & Sets Drawer Left
   */
  get drawerLeft() {
    return this._drawerLeft.value;
  }
  set drawerLeft(drawer: boolean) {
    this._drawerLeft.value = drawer;
  }

  /**
   * -----------------------------------------
   *	Mutators
   * -----------------------------------------
   */
}

export const $app = new AppInjectable();
export const _app: InjectionKey<AppInjectable> = Symbol('AppInjectable');
