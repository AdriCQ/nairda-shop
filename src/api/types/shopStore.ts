import { IMapCoordinate } from './mapPosition';
import { IShopCategory } from './shopCategory';

/**
 * @type IShopStore
 */
export interface IShopStore {
  id: number;
  title: string;
  description?: string;
  image: string;
  map_address?: string;
  map_coordinate?: IMapCoordinate;
  rating: number;
  category?: IShopCategory;
}

/**
 * -----------------------------------------
 *	HTTP
 * -----------------------------------------
 */

/**
 * @type IShopStoreCreateRequest
 */
export type IShopStoreCreateRequest = {
  readonly title: string;
  readonly description: string;
  readonly map_position: IMapCoordinate;
  readonly open?: boolean;
};
/**
 * @type IShopStoreUpdateRequest
 */
export type IShopStoreUpdateRequest = Partial<IShopStoreCreateRequest>;
