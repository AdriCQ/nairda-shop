import { baseURL } from 'src/boot/axios';
import { $user } from 'src/injectables';

export * from './notification';
/**
 * isAuth
 * @returns
 */
export const isAuth = () => Boolean($user.apiToken);

export const handleImage = (src: string) => `${baseURL}${src}`;
