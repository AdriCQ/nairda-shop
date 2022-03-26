export interface IShopCategory {
  tag: string;
  title: string;
  description: string;
  parent_tag: string;
  icons: {
    mdi?: string;
  };
}
/**
 * IShopCategoryWithChild
 */
export interface IShopCategoryWithChild extends IShopCategory {
  child: IShopCategory[];
}
