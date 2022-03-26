import { $user } from 'src/injectables';

export * from './notification';
/**
 * isAuth
 * @returns
 */
export const isAuth = () => Boolean($user.apiToken);
