import {
  IUserAuthLoginRequest,
  IUserAuthRegisterRequest,
  IUserProfile,
} from 'src/api';
import { $nairdaApi } from 'src/boot/axios';
import { InjectionKey, ref } from 'vue';

/**
 * @class UserInjectable
 */
class UserInjectable {
  private _api_token = ref<string | null>(null);
  private _profile = ref<IUserProfile | null>(null);
  /**
   * -----------------------------------------
   *	Setters & getters
   * -----------------------------------------
   */
  /**
   * Api Token Getter
   */
  get apiToken() {
    return this._api_token.value;
  }
  /**
   * Api Token Setter
   */
  set apiToken(token: string | null) {
    this._api_token.value = token;
  }
  /**
   * Gets User Profile
   * @returns
   */
  get profile() {
    return this._profile.value;
  }
  /**
   * Set user profile
   * @param profile
   */
  set profile(profile: IUserProfile | null) {
    this._profile.value = profile;
  }
  /**
   * -----------------------------------------
   *	Actions
   * -----------------------------------------
   */
  /**
   * Login Action
   * @param loginParams
   */
  async loginAction(loginParams: IUserAuthLoginRequest) {
    const resp = await $nairdaApi.User.login(loginParams);
    this.profile = resp.data.data;
    this.apiToken = resp.data.api_token;
    this.save();
  }
  /**
   * Register Action
   * @param registerParams
   */
  async registerAction(registerParams: IUserAuthRegisterRequest) {
    const resp = await $nairdaApi.User.register(registerParams);
    this.profile = resp.data.data;
    this.apiToken = resp.data.api_token;
    this.save();
  }
  /**
   * -----------------------------------------
   *	Mutators
   * -----------------------------------------
   */
  /**
   * save data from localstorage
   */
  load() {
    const store = localStorage.getItem('UserInjectable');
    if (store) {
      const { profile, apiToken } = JSON.parse(store) as {
        profile: IUserProfile | null;
        apiToken: string | null;
      };
      this.profile = profile;
      this.apiToken = apiToken;
    }
  }
  /**
   * save data on localstorage
   */
  save() {
    localStorage.setItem(
      'UserInjectable',
      JSON.stringify({
        profile: this.profile,
        apiToken: this.apiToken,
      })
    );
  }
}

/**
 * User Injectable Instance
 */
export const $user = new UserInjectable();
/**
 * User Injectable Key
 */
export const _user: InjectionKey<UserInjectable> = Symbol('UserInjectable');
