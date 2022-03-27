import { baseURL } from 'src/boot/axios';
import { $router } from 'src/boot/router';
import { $user } from 'src/injectables';
import { ROUTE_NAME } from 'src/router';

export * from './notification';
/**
 * goTo
 * @param route
 */
export const goTo = (route: ROUTE_NAME) => {
  void $router.push({ name: route });
};
/**
 * handleImage
 * @param src
 * @returns
 */
export const handleImage = (src: string) => `${baseURL}${src}`;
/**
 * isAuth
 * @returns
 */
export const isAuth = () => Boolean($user.apiToken);
