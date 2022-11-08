export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  JSON: any;
  Upload: any;
};

export type AddToCartResponse = {
  __typename?: 'AddToCartResponse';
  cartCreated: Scalars['Boolean'];
  lineItem: LineItem;
  lineItemCreated: Scalars['Boolean'];
  storeUpdated: Scalars['Boolean'];
};

/**  A keystone list  */
export type Address = {
  __typename?: 'Address';
  addressL1?: Maybe<Scalars['String']>;
  city?: Maybe<City>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  store?: Maybe<Store>;
  user?: Maybe<User>;
};

export type AddressCreateInput = {
  addressL1?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<CityRelateToOneInput>;
  description?: InputMaybe<Scalars['String']>;
  store?: InputMaybe<StoreRelateToOneInput>;
  user?: InputMaybe<UserRelateToOneInput>;
};

export type AddressRelateToManyInput = {
  connect?: InputMaybe<Array<InputMaybe<AddressWhereUniqueInput>>>;
  create?: InputMaybe<Array<InputMaybe<AddressCreateInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<AddressWhereUniqueInput>>>;
  disconnectAll?: InputMaybe<Scalars['Boolean']>;
};

export type AddressRelateToOneInput = {
  connect?: InputMaybe<AddressWhereUniqueInput>;
  create?: InputMaybe<AddressCreateInput>;
  disconnect?: InputMaybe<AddressWhereUniqueInput>;
  disconnectAll?: InputMaybe<Scalars['Boolean']>;
};

export type AddressUpdateInput = {
  addressL1?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<CityRelateToOneInput>;
  description?: InputMaybe<Scalars['String']>;
  store?: InputMaybe<StoreRelateToOneInput>;
  user?: InputMaybe<UserRelateToOneInput>;
};

export type AddressWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<AddressWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<AddressWhereInput>>>;
  addressL1?: InputMaybe<Scalars['String']>;
  addressL1_contains?: InputMaybe<Scalars['String']>;
  addressL1_contains_i?: InputMaybe<Scalars['String']>;
  addressL1_ends_with?: InputMaybe<Scalars['String']>;
  addressL1_ends_with_i?: InputMaybe<Scalars['String']>;
  addressL1_i?: InputMaybe<Scalars['String']>;
  addressL1_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  addressL1_not?: InputMaybe<Scalars['String']>;
  addressL1_not_contains?: InputMaybe<Scalars['String']>;
  addressL1_not_contains_i?: InputMaybe<Scalars['String']>;
  addressL1_not_ends_with?: InputMaybe<Scalars['String']>;
  addressL1_not_ends_with_i?: InputMaybe<Scalars['String']>;
  addressL1_not_i?: InputMaybe<Scalars['String']>;
  addressL1_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  addressL1_not_starts_with?: InputMaybe<Scalars['String']>;
  addressL1_not_starts_with_i?: InputMaybe<Scalars['String']>;
  addressL1_starts_with?: InputMaybe<Scalars['String']>;
  addressL1_starts_with_i?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<CityWhereInput>;
  city_is_null?: InputMaybe<Scalars['Boolean']>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_contains_i?: InputMaybe<Scalars['String']>;
  description_ends_with?: InputMaybe<Scalars['String']>;
  description_ends_with_i?: InputMaybe<Scalars['String']>;
  description_i?: InputMaybe<Scalars['String']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_contains_i?: InputMaybe<Scalars['String']>;
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  description_not_ends_with_i?: InputMaybe<Scalars['String']>;
  description_not_i?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  description_not_starts_with_i?: InputMaybe<Scalars['String']>;
  description_starts_with?: InputMaybe<Scalars['String']>;
  description_starts_with_i?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  store?: InputMaybe<StoreWhereInput>;
  store_is_null?: InputMaybe<Scalars['Boolean']>;
  user?: InputMaybe<UserWhereInput>;
  user_is_null?: InputMaybe<Scalars['Boolean']>;
};

export type AddressWhereUniqueInput = {
  id: Scalars['ID'];
};

export type AddressesCreateInput = {
  data?: InputMaybe<AddressCreateInput>;
};

export type AddressesUpdateInput = {
  data?: InputMaybe<AddressUpdateInput>;
  id: Scalars['ID'];
};

export type AuthenticatedItem = User;

export type CartAdjustment = {
  __typename?: 'CartAdjustment';
  deletedLineItems?: Maybe<Array<Maybe<LineItem>>>;
  updatedLineItems?: Maybe<Array<Maybe<LineItem>>>;
};

export type CartPrice = {
  __typename?: 'CartPrice';
  basePrice: Scalars['Float'];
  canCheckout: Scalars['Boolean'];
  palanteDiscount: Scalars['Float'];
  palanteTax: Scalars['Float'];
  palanteTotal: Scalars['Float'];
  storeDiscount: Scalars['Float'];
  storeTax: Scalars['Float'];
  storeTotal: Scalars['Float'];
  total: Scalars['Float'];
};

export type CartPriceWhereInput = {
  cartId?: InputMaybe<Scalars['ID']>;
  palanteCouponId?: InputMaybe<Scalars['ID']>;
  storeCouponId?: InputMaybe<Scalars['ID']>;
};

export type CategoriesCreateInput = {
  data?: InputMaybe<CategoryCreateInput>;
};

export type CategoriesUpdateInput = {
  data?: InputMaybe<CategoryUpdateInput>;
  id: Scalars['ID'];
};

/**  A keystone list  */
export type Category = {
  __typename?: 'Category';
  _productMeta?: Maybe<_QueryMeta>;
  _userMeta?: Maybe<_QueryMeta>;
  color?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  icon?: Maybe<CloudinaryImage_File>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  product: Array<Product>;
  type?: Maybe<Scalars['String']>;
  user: Array<User>;
};


/**  A keystone list  */
export type Category_ProductMetaArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<SortProductsBy>>;
  where?: InputMaybe<ProductWhereInput>;
};


/**  A keystone list  */
export type Category_UserMetaArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<SortUsersBy>>;
  where?: InputMaybe<UserWhereInput>;
};


/**  A keystone list  */
export type CategoryProductArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<SortProductsBy>>;
  where?: InputMaybe<ProductWhereInput>;
};


/**  A keystone list  */
export type CategoryUserArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<SortUsersBy>>;
  where?: InputMaybe<UserWhereInput>;
};

export type CategoryCreateInput = {
  color?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  icon?: InputMaybe<Scalars['Upload']>;
  name?: InputMaybe<Scalars['String']>;
  product?: InputMaybe<ProductRelateToManyInput>;
  type?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<UserRelateToManyInput>;
};

export type CategoryRelateToManyInput = {
  connect?: InputMaybe<Array<InputMaybe<CategoryWhereUniqueInput>>>;
  create?: InputMaybe<Array<InputMaybe<CategoryCreateInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<CategoryWhereUniqueInput>>>;
  disconnectAll?: InputMaybe<Scalars['Boolean']>;
};

export type CategoryUpdateInput = {
  color?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  icon?: InputMaybe<Scalars['Upload']>;
  name?: InputMaybe<Scalars['String']>;
  product?: InputMaybe<ProductRelateToManyInput>;
  type?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<UserRelateToManyInput>;
};

export type CategoryWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<CategoryWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<CategoryWhereInput>>>;
  color?: InputMaybe<Scalars['String']>;
  color_contains?: InputMaybe<Scalars['String']>;
  color_contains_i?: InputMaybe<Scalars['String']>;
  color_ends_with?: InputMaybe<Scalars['String']>;
  color_ends_with_i?: InputMaybe<Scalars['String']>;
  color_i?: InputMaybe<Scalars['String']>;
  color_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  color_not?: InputMaybe<Scalars['String']>;
  color_not_contains?: InputMaybe<Scalars['String']>;
  color_not_contains_i?: InputMaybe<Scalars['String']>;
  color_not_ends_with?: InputMaybe<Scalars['String']>;
  color_not_ends_with_i?: InputMaybe<Scalars['String']>;
  color_not_i?: InputMaybe<Scalars['String']>;
  color_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  color_not_starts_with?: InputMaybe<Scalars['String']>;
  color_not_starts_with_i?: InputMaybe<Scalars['String']>;
  color_starts_with?: InputMaybe<Scalars['String']>;
  color_starts_with_i?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_contains_i?: InputMaybe<Scalars['String']>;
  description_ends_with?: InputMaybe<Scalars['String']>;
  description_ends_with_i?: InputMaybe<Scalars['String']>;
  description_i?: InputMaybe<Scalars['String']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_contains_i?: InputMaybe<Scalars['String']>;
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  description_not_ends_with_i?: InputMaybe<Scalars['String']>;
  description_not_i?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  description_not_starts_with_i?: InputMaybe<Scalars['String']>;
  description_starts_with?: InputMaybe<Scalars['String']>;
  description_starts_with_i?: InputMaybe<Scalars['String']>;
  icon?: InputMaybe<Scalars['String']>;
  icon_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  icon_not?: InputMaybe<Scalars['String']>;
  icon_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_i?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_i?: InputMaybe<Scalars['String']>;
  name_i?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_i?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_i?: InputMaybe<Scalars['String']>;
  name_not_i?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_i?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_i?: InputMaybe<Scalars['String']>;
  /**  condition must be true for all nodes  */
  product_every?: InputMaybe<ProductWhereInput>;
  /**  condition must be false for all nodes  */
  product_none?: InputMaybe<ProductWhereInput>;
  /**  condition must be true for at least 1 node  */
  product_some?: InputMaybe<ProductWhereInput>;
  type?: InputMaybe<Scalars['String']>;
  type_contains?: InputMaybe<Scalars['String']>;
  type_contains_i?: InputMaybe<Scalars['String']>;
  type_ends_with?: InputMaybe<Scalars['String']>;
  type_ends_with_i?: InputMaybe<Scalars['String']>;
  type_i?: InputMaybe<Scalars['String']>;
  type_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type_not?: InputMaybe<Scalars['String']>;
  type_not_contains?: InputMaybe<Scalars['String']>;
  type_not_contains_i?: InputMaybe<Scalars['String']>;
  type_not_ends_with?: InputMaybe<Scalars['String']>;
  type_not_ends_with_i?: InputMaybe<Scalars['String']>;
  type_not_i?: InputMaybe<Scalars['String']>;
  type_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type_not_starts_with?: InputMaybe<Scalars['String']>;
  type_not_starts_with_i?: InputMaybe<Scalars['String']>;
  type_starts_with?: InputMaybe<Scalars['String']>;
  type_starts_with_i?: InputMaybe<Scalars['String']>;
  /**  condition must be true for all nodes  */
  user_every?: InputMaybe<UserWhereInput>;
  /**  condition must be false for all nodes  */
  user_none?: InputMaybe<UserWhereInput>;
  /**  condition must be true for at least 1 node  */
  user_some?: InputMaybe<UserWhereInput>;
};

export type CategoryWhereUniqueInput = {
  id: Scalars['ID'];
};

export type CheckoutCartOutput = {
  __typename?: 'CheckoutCartOutput';
  epaycoData: Scalars['String'];
};

export type CheckoutCartWhereInput = {
  palanteCouponId?: InputMaybe<Scalars['ID']>;
  storeCouponId?: InputMaybe<Scalars['ID']>;
};

export type CitiesCreateInput = {
  data?: InputMaybe<CityCreateInput>;
};

export type CitiesUpdateInput = {
  data?: InputMaybe<CityUpdateInput>;
  id: Scalars['ID'];
};

/**  A keystone list  */
export type City = {
  __typename?: 'City';
  _addressesMeta?: Maybe<_QueryMeta>;
  addresses: Array<Address>;
  id: Scalars['ID'];
  isoCode?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  region?: Maybe<Region>;
  shortName?: Maybe<Scalars['String']>;
};


/**  A keystone list  */
export type City_AddressesMetaArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<SortAddressesBy>>;
  where?: InputMaybe<AddressWhereInput>;
};


/**  A keystone list  */
export type CityAddressesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<SortAddressesBy>>;
  where?: InputMaybe<AddressWhereInput>;
};

export type CityCreateInput = {
  addresses?: InputMaybe<AddressRelateToManyInput>;
  isoCode?: InputMaybe<Scalars['String']>;
  latitude?: InputMaybe<Scalars['String']>;
  longitude?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  region?: InputMaybe<RegionRelateToOneInput>;
  shortName?: InputMaybe<Scalars['String']>;
};

export type CityRelateToManyInput = {
  connect?: InputMaybe<Array<InputMaybe<CityWhereUniqueInput>>>;
  create?: InputMaybe<Array<InputMaybe<CityCreateInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<CityWhereUniqueInput>>>;
  disconnectAll?: InputMaybe<Scalars['Boolean']>;
};

export type CityRelateToOneInput = {
  connect?: InputMaybe<CityWhereUniqueInput>;
  create?: InputMaybe<CityCreateInput>;
  disconnect?: InputMaybe<CityWhereUniqueInput>;
  disconnectAll?: InputMaybe<Scalars['Boolean']>;
};

export type CityUpdateInput = {
  addresses?: InputMaybe<AddressRelateToManyInput>;
  isoCode?: InputMaybe<Scalars['String']>;
  latitude?: InputMaybe<Scalars['String']>;
  longitude?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  region?: InputMaybe<RegionRelateToOneInput>;
  shortName?: InputMaybe<Scalars['String']>;
};

export type CityWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<CityWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<CityWhereInput>>>;
  /**  condition must be true for all nodes  */
  addresses_every?: InputMaybe<AddressWhereInput>;
  /**  condition must be false for all nodes  */
  addresses_none?: InputMaybe<AddressWhereInput>;
  /**  condition must be true for at least 1 node  */
  addresses_some?: InputMaybe<AddressWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  isoCode?: InputMaybe<Scalars['String']>;
  isoCode_contains?: InputMaybe<Scalars['String']>;
  isoCode_contains_i?: InputMaybe<Scalars['String']>;
  isoCode_ends_with?: InputMaybe<Scalars['String']>;
  isoCode_ends_with_i?: InputMaybe<Scalars['String']>;
  isoCode_i?: InputMaybe<Scalars['String']>;
  isoCode_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  isoCode_not?: InputMaybe<Scalars['String']>;
  isoCode_not_contains?: InputMaybe<Scalars['String']>;
  isoCode_not_contains_i?: InputMaybe<Scalars['String']>;
  isoCode_not_ends_with?: InputMaybe<Scalars['String']>;
  isoCode_not_ends_with_i?: InputMaybe<Scalars['String']>;
  isoCode_not_i?: InputMaybe<Scalars['String']>;
  isoCode_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  isoCode_not_starts_with?: InputMaybe<Scalars['String']>;
  isoCode_not_starts_with_i?: InputMaybe<Scalars['String']>;
  isoCode_starts_with?: InputMaybe<Scalars['String']>;
  isoCode_starts_with_i?: InputMaybe<Scalars['String']>;
  latitude?: InputMaybe<Scalars['String']>;
  latitude_contains?: InputMaybe<Scalars['String']>;
  latitude_contains_i?: InputMaybe<Scalars['String']>;
  latitude_ends_with?: InputMaybe<Scalars['String']>;
  latitude_ends_with_i?: InputMaybe<Scalars['String']>;
  latitude_i?: InputMaybe<Scalars['String']>;
  latitude_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  latitude_not?: InputMaybe<Scalars['String']>;
  latitude_not_contains?: InputMaybe<Scalars['String']>;
  latitude_not_contains_i?: InputMaybe<Scalars['String']>;
  latitude_not_ends_with?: InputMaybe<Scalars['String']>;
  latitude_not_ends_with_i?: InputMaybe<Scalars['String']>;
  latitude_not_i?: InputMaybe<Scalars['String']>;
  latitude_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  latitude_not_starts_with?: InputMaybe<Scalars['String']>;
  latitude_not_starts_with_i?: InputMaybe<Scalars['String']>;
  latitude_starts_with?: InputMaybe<Scalars['String']>;
  latitude_starts_with_i?: InputMaybe<Scalars['String']>;
  longitude?: InputMaybe<Scalars['String']>;
  longitude_contains?: InputMaybe<Scalars['String']>;
  longitude_contains_i?: InputMaybe<Scalars['String']>;
  longitude_ends_with?: InputMaybe<Scalars['String']>;
  longitude_ends_with_i?: InputMaybe<Scalars['String']>;
  longitude_i?: InputMaybe<Scalars['String']>;
  longitude_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  longitude_not?: InputMaybe<Scalars['String']>;
  longitude_not_contains?: InputMaybe<Scalars['String']>;
  longitude_not_contains_i?: InputMaybe<Scalars['String']>;
  longitude_not_ends_with?: InputMaybe<Scalars['String']>;
  longitude_not_ends_with_i?: InputMaybe<Scalars['String']>;
  longitude_not_i?: InputMaybe<Scalars['String']>;
  longitude_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  longitude_not_starts_with?: InputMaybe<Scalars['String']>;
  longitude_not_starts_with_i?: InputMaybe<Scalars['String']>;
  longitude_starts_with?: InputMaybe<Scalars['String']>;
  longitude_starts_with_i?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_i?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_i?: InputMaybe<Scalars['String']>;
  name_i?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_i?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_i?: InputMaybe<Scalars['String']>;
  name_not_i?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_i?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_i?: InputMaybe<Scalars['String']>;
  region?: InputMaybe<RegionWhereInput>;
  region_is_null?: InputMaybe<Scalars['Boolean']>;
  shortName?: InputMaybe<Scalars['String']>;
  shortName_contains?: InputMaybe<Scalars['String']>;
  shortName_contains_i?: InputMaybe<Scalars['String']>;
  shortName_ends_with?: InputMaybe<Scalars['String']>;
  shortName_ends_with_i?: InputMaybe<Scalars['String']>;
  shortName_i?: InputMaybe<Scalars['String']>;
  shortName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  shortName_not?: InputMaybe<Scalars['String']>;
  shortName_not_contains?: InputMaybe<Scalars['String']>;
  shortName_not_contains_i?: InputMaybe<Scalars['String']>;
  shortName_not_ends_with?: InputMaybe<Scalars['String']>;
  shortName_not_ends_with_i?: InputMaybe<Scalars['String']>;
  shortName_not_i?: InputMaybe<Scalars['String']>;
  shortName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  shortName_not_starts_with?: InputMaybe<Scalars['String']>;
  shortName_not_starts_with_i?: InputMaybe<Scalars['String']>;
  shortName_starts_with?: InputMaybe<Scalars['String']>;
  shortName_starts_with_i?: InputMaybe<Scalars['String']>;
};

export type CityWhereUniqueInput = {
  id: Scalars['ID'];
};

/**
 * Mirrors the formatting options [Cloudinary provides](https://cloudinary.com/documentation/image_transformation_reference).
 * All options are strings as they ultimately end up in a URL.
 */
export type CloudinaryImageFormat = {
  angle?: InputMaybe<Scalars['String']>;
  aspect_ratio?: InputMaybe<Scalars['String']>;
  background?: InputMaybe<Scalars['String']>;
  border?: InputMaybe<Scalars['String']>;
  color?: InputMaybe<Scalars['String']>;
  color_space?: InputMaybe<Scalars['String']>;
  crop?: InputMaybe<Scalars['String']>;
  default_image?: InputMaybe<Scalars['String']>;
  delay?: InputMaybe<Scalars['String']>;
  density?: InputMaybe<Scalars['String']>;
  dpr?: InputMaybe<Scalars['String']>;
  effect?: InputMaybe<Scalars['String']>;
  fetch_format?: InputMaybe<Scalars['String']>;
  flags?: InputMaybe<Scalars['String']>;
  format?: InputMaybe<Scalars['String']>;
  gravity?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['String']>;
  opacity?: InputMaybe<Scalars['String']>;
  overlay?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['String']>;
  /**  Rewrites the filename to be this pretty string. Do not include `/` or `.`  */
  prettyName?: InputMaybe<Scalars['String']>;
  quality?: InputMaybe<Scalars['String']>;
  radius?: InputMaybe<Scalars['String']>;
  transformation?: InputMaybe<Scalars['String']>;
  underlay?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['String']>;
  x?: InputMaybe<Scalars['String']>;
  y?: InputMaybe<Scalars['String']>;
  zoom?: InputMaybe<Scalars['String']>;
};

export type CloudinaryImage_File = {
  __typename?: 'CloudinaryImage_File';
  encoding?: Maybe<Scalars['String']>;
  filename?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  mimetype?: Maybe<Scalars['String']>;
  originalFilename?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  publicUrl?: Maybe<Scalars['String']>;
  publicUrlTransformed?: Maybe<Scalars['String']>;
};


export type CloudinaryImage_FilePublicUrlTransformedArgs = {
  transformation?: InputMaybe<CloudinaryImageFormat>;
};

export type Configuration = {
  __typename?: 'Configuration';
  epaycoId: Scalars['String'];
  minCheckoutAmount: Scalars['Float'];
  taxValue: Scalars['Float'];
};

/**  A keystone list  */
export type ContactRequest = {
  __typename?: 'ContactRequest';
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  message?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type ContactRequestCreateInput = {
  email?: InputMaybe<Scalars['String']>;
  message?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export type ContactRequestUpdateInput = {
  email?: InputMaybe<Scalars['String']>;
  message?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export type ContactRequestWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<ContactRequestWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<ContactRequestWhereInput>>>;
  email?: InputMaybe<Scalars['String']>;
  email_contains?: InputMaybe<Scalars['String']>;
  email_contains_i?: InputMaybe<Scalars['String']>;
  email_ends_with?: InputMaybe<Scalars['String']>;
  email_ends_with_i?: InputMaybe<Scalars['String']>;
  email_i?: InputMaybe<Scalars['String']>;
  email_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  email_not?: InputMaybe<Scalars['String']>;
  email_not_contains?: InputMaybe<Scalars['String']>;
  email_not_contains_i?: InputMaybe<Scalars['String']>;
  email_not_ends_with?: InputMaybe<Scalars['String']>;
  email_not_ends_with_i?: InputMaybe<Scalars['String']>;
  email_not_i?: InputMaybe<Scalars['String']>;
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  email_not_starts_with?: InputMaybe<Scalars['String']>;
  email_not_starts_with_i?: InputMaybe<Scalars['String']>;
  email_starts_with?: InputMaybe<Scalars['String']>;
  email_starts_with_i?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  message?: InputMaybe<Scalars['String']>;
  message_contains?: InputMaybe<Scalars['String']>;
  message_contains_i?: InputMaybe<Scalars['String']>;
  message_ends_with?: InputMaybe<Scalars['String']>;
  message_ends_with_i?: InputMaybe<Scalars['String']>;
  message_i?: InputMaybe<Scalars['String']>;
  message_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  message_not?: InputMaybe<Scalars['String']>;
  message_not_contains?: InputMaybe<Scalars['String']>;
  message_not_contains_i?: InputMaybe<Scalars['String']>;
  message_not_ends_with?: InputMaybe<Scalars['String']>;
  message_not_ends_with_i?: InputMaybe<Scalars['String']>;
  message_not_i?: InputMaybe<Scalars['String']>;
  message_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  message_not_starts_with?: InputMaybe<Scalars['String']>;
  message_not_starts_with_i?: InputMaybe<Scalars['String']>;
  message_starts_with?: InputMaybe<Scalars['String']>;
  message_starts_with_i?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_i?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_i?: InputMaybe<Scalars['String']>;
  name_i?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_i?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_i?: InputMaybe<Scalars['String']>;
  name_not_i?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_i?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_i?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  phone_contains?: InputMaybe<Scalars['String']>;
  phone_contains_i?: InputMaybe<Scalars['String']>;
  phone_ends_with?: InputMaybe<Scalars['String']>;
  phone_ends_with_i?: InputMaybe<Scalars['String']>;
  phone_i?: InputMaybe<Scalars['String']>;
  phone_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  phone_not?: InputMaybe<Scalars['String']>;
  phone_not_contains?: InputMaybe<Scalars['String']>;
  phone_not_contains_i?: InputMaybe<Scalars['String']>;
  phone_not_ends_with?: InputMaybe<Scalars['String']>;
  phone_not_ends_with_i?: InputMaybe<Scalars['String']>;
  phone_not_i?: InputMaybe<Scalars['String']>;
  phone_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  phone_not_starts_with?: InputMaybe<Scalars['String']>;
  phone_not_starts_with_i?: InputMaybe<Scalars['String']>;
  phone_starts_with?: InputMaybe<Scalars['String']>;
  phone_starts_with_i?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  type_contains?: InputMaybe<Scalars['String']>;
  type_contains_i?: InputMaybe<Scalars['String']>;
  type_ends_with?: InputMaybe<Scalars['String']>;
  type_ends_with_i?: InputMaybe<Scalars['String']>;
  type_i?: InputMaybe<Scalars['String']>;
  type_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type_not?: InputMaybe<Scalars['String']>;
  type_not_contains?: InputMaybe<Scalars['String']>;
  type_not_contains_i?: InputMaybe<Scalars['String']>;
  type_not_ends_with?: InputMaybe<Scalars['String']>;
  type_not_ends_with_i?: InputMaybe<Scalars['String']>;
  type_not_i?: InputMaybe<Scalars['String']>;
  type_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type_not_starts_with?: InputMaybe<Scalars['String']>;
  type_not_starts_with_i?: InputMaybe<Scalars['String']>;
  type_starts_with?: InputMaybe<Scalars['String']>;
  type_starts_with_i?: InputMaybe<Scalars['String']>;
};

export type ContactRequestWhereUniqueInput = {
  id: Scalars['ID'];
};

export type ContactRequestsCreateInput = {
  data?: InputMaybe<ContactRequestCreateInput>;
};

export type ContactRequestsUpdateInput = {
  data?: InputMaybe<ContactRequestUpdateInput>;
  id: Scalars['ID'];
};

export type CountriesCreateInput = {
  data?: InputMaybe<CountryCreateInput>;
};

export type CountriesUpdateInput = {
  data?: InputMaybe<CountryUpdateInput>;
  id: Scalars['ID'];
};

/**  A keystone list  */
export type Country = {
  __typename?: 'Country';
  _regionsMeta?: Maybe<_QueryMeta>;
  id: Scalars['ID'];
  iso3166?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  regions: Array<Region>;
  shortName?: Maybe<Scalars['String']>;
};


/**  A keystone list  */
export type Country_RegionsMetaArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<SortRegionsBy>>;
  where?: InputMaybe<RegionWhereInput>;
};


/**  A keystone list  */
export type CountryRegionsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<SortRegionsBy>>;
  where?: InputMaybe<RegionWhereInput>;
};

export type CountryCreateInput = {
  iso3166?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  regions?: InputMaybe<RegionRelateToManyInput>;
  shortName?: InputMaybe<Scalars['String']>;
};

export type CountryRelateToOneInput = {
  connect?: InputMaybe<CountryWhereUniqueInput>;
  create?: InputMaybe<CountryCreateInput>;
  disconnect?: InputMaybe<CountryWhereUniqueInput>;
  disconnectAll?: InputMaybe<Scalars['Boolean']>;
};

export type CountryUpdateInput = {
  iso3166?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  regions?: InputMaybe<RegionRelateToManyInput>;
  shortName?: InputMaybe<Scalars['String']>;
};

export type CountryWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<CountryWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<CountryWhereInput>>>;
  id?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  iso3166?: InputMaybe<Scalars['String']>;
  iso3166_contains?: InputMaybe<Scalars['String']>;
  iso3166_contains_i?: InputMaybe<Scalars['String']>;
  iso3166_ends_with?: InputMaybe<Scalars['String']>;
  iso3166_ends_with_i?: InputMaybe<Scalars['String']>;
  iso3166_i?: InputMaybe<Scalars['String']>;
  iso3166_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  iso3166_not?: InputMaybe<Scalars['String']>;
  iso3166_not_contains?: InputMaybe<Scalars['String']>;
  iso3166_not_contains_i?: InputMaybe<Scalars['String']>;
  iso3166_not_ends_with?: InputMaybe<Scalars['String']>;
  iso3166_not_ends_with_i?: InputMaybe<Scalars['String']>;
  iso3166_not_i?: InputMaybe<Scalars['String']>;
  iso3166_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  iso3166_not_starts_with?: InputMaybe<Scalars['String']>;
  iso3166_not_starts_with_i?: InputMaybe<Scalars['String']>;
  iso3166_starts_with?: InputMaybe<Scalars['String']>;
  iso3166_starts_with_i?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_i?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_i?: InputMaybe<Scalars['String']>;
  name_i?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_i?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_i?: InputMaybe<Scalars['String']>;
  name_not_i?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_i?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_i?: InputMaybe<Scalars['String']>;
  /**  condition must be true for all nodes  */
  regions_every?: InputMaybe<RegionWhereInput>;
  /**  condition must be false for all nodes  */
  regions_none?: InputMaybe<RegionWhereInput>;
  /**  condition must be true for at least 1 node  */
  regions_some?: InputMaybe<RegionWhereInput>;
  shortName?: InputMaybe<Scalars['String']>;
  shortName_contains?: InputMaybe<Scalars['String']>;
  shortName_contains_i?: InputMaybe<Scalars['String']>;
  shortName_ends_with?: InputMaybe<Scalars['String']>;
  shortName_ends_with_i?: InputMaybe<Scalars['String']>;
  shortName_i?: InputMaybe<Scalars['String']>;
  shortName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  shortName_not?: InputMaybe<Scalars['String']>;
  shortName_not_contains?: InputMaybe<Scalars['String']>;
  shortName_not_contains_i?: InputMaybe<Scalars['String']>;
  shortName_not_ends_with?: InputMaybe<Scalars['String']>;
  shortName_not_ends_with_i?: InputMaybe<Scalars['String']>;
  shortName_not_i?: InputMaybe<Scalars['String']>;
  shortName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  shortName_not_starts_with?: InputMaybe<Scalars['String']>;
  shortName_not_starts_with_i?: InputMaybe<Scalars['String']>;
  shortName_starts_with?: InputMaybe<Scalars['String']>;
  shortName_starts_with_i?: InputMaybe<Scalars['String']>;
};

export type CountryWhereUniqueInput = {
  id: Scalars['ID'];
};

/**  A keystone list  */
export type Coupon = {
  __typename?: 'Coupon';
  _sellOrdersMeta?: Maybe<_QueryMeta>;
  amount?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  minCartAmount?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  owner?: Maybe<Store>;
  quantity?: Maybe<Scalars['Int']>;
  sellOrders: Array<SellOrder>;
  shortName?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};


/**  A keystone list  */
export type Coupon_SellOrdersMetaArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<SortSellOrdersBy>>;
  where?: InputMaybe<SellOrderWhereInput>;
};


/**  A keystone list  */
export type CouponSellOrdersArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<SortSellOrdersBy>>;
  where?: InputMaybe<SellOrderWhereInput>;
};

export type CouponCreateInput = {
  amount?: InputMaybe<Scalars['Int']>;
  description?: InputMaybe<Scalars['String']>;
  endDate?: InputMaybe<Scalars['String']>;
  minCartAmount?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  owner?: InputMaybe<StoreRelateToOneInput>;
  quantity?: InputMaybe<Scalars['Int']>;
  sellOrders?: InputMaybe<SellOrderRelateToManyInput>;
  shortName?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export type CouponRelateToManyInput = {
  connect?: InputMaybe<Array<InputMaybe<CouponWhereUniqueInput>>>;
  create?: InputMaybe<Array<InputMaybe<CouponCreateInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<CouponWhereUniqueInput>>>;
  disconnectAll?: InputMaybe<Scalars['Boolean']>;
};

export type CouponUpdateInput = {
  amount?: InputMaybe<Scalars['Int']>;
  description?: InputMaybe<Scalars['String']>;
  endDate?: InputMaybe<Scalars['String']>;
  minCartAmount?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  owner?: InputMaybe<StoreRelateToOneInput>;
  quantity?: InputMaybe<Scalars['Int']>;
  sellOrders?: InputMaybe<SellOrderRelateToManyInput>;
  shortName?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export type CouponWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<CouponWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<CouponWhereInput>>>;
  amount?: InputMaybe<Scalars['Int']>;
  amount_gt?: InputMaybe<Scalars['Int']>;
  amount_gte?: InputMaybe<Scalars['Int']>;
  amount_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  amount_lt?: InputMaybe<Scalars['Int']>;
  amount_lte?: InputMaybe<Scalars['Int']>;
  amount_not?: InputMaybe<Scalars['Int']>;
  amount_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_contains_i?: InputMaybe<Scalars['String']>;
  description_ends_with?: InputMaybe<Scalars['String']>;
  description_ends_with_i?: InputMaybe<Scalars['String']>;
  description_i?: InputMaybe<Scalars['String']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_contains_i?: InputMaybe<Scalars['String']>;
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  description_not_ends_with_i?: InputMaybe<Scalars['String']>;
  description_not_i?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  description_not_starts_with_i?: InputMaybe<Scalars['String']>;
  description_starts_with?: InputMaybe<Scalars['String']>;
  description_starts_with_i?: InputMaybe<Scalars['String']>;
  endDate?: InputMaybe<Scalars['String']>;
  endDate_gt?: InputMaybe<Scalars['String']>;
  endDate_gte?: InputMaybe<Scalars['String']>;
  endDate_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  endDate_lt?: InputMaybe<Scalars['String']>;
  endDate_lte?: InputMaybe<Scalars['String']>;
  endDate_not?: InputMaybe<Scalars['String']>;
  endDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  minCartAmount?: InputMaybe<Scalars['Int']>;
  minCartAmount_gt?: InputMaybe<Scalars['Int']>;
  minCartAmount_gte?: InputMaybe<Scalars['Int']>;
  minCartAmount_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  minCartAmount_lt?: InputMaybe<Scalars['Int']>;
  minCartAmount_lte?: InputMaybe<Scalars['Int']>;
  minCartAmount_not?: InputMaybe<Scalars['Int']>;
  minCartAmount_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_i?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_i?: InputMaybe<Scalars['String']>;
  name_i?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_i?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_i?: InputMaybe<Scalars['String']>;
  name_not_i?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_i?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_i?: InputMaybe<Scalars['String']>;
  owner?: InputMaybe<StoreWhereInput>;
  owner_is_null?: InputMaybe<Scalars['Boolean']>;
  quantity?: InputMaybe<Scalars['Int']>;
  quantity_gt?: InputMaybe<Scalars['Int']>;
  quantity_gte?: InputMaybe<Scalars['Int']>;
  quantity_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  quantity_lt?: InputMaybe<Scalars['Int']>;
  quantity_lte?: InputMaybe<Scalars['Int']>;
  quantity_not?: InputMaybe<Scalars['Int']>;
  quantity_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /**  condition must be true for all nodes  */
  sellOrders_every?: InputMaybe<SellOrderWhereInput>;
  /**  condition must be false for all nodes  */
  sellOrders_none?: InputMaybe<SellOrderWhereInput>;
  /**  condition must be true for at least 1 node  */
  sellOrders_some?: InputMaybe<SellOrderWhereInput>;
  shortName?: InputMaybe<Scalars['String']>;
  shortName_contains?: InputMaybe<Scalars['String']>;
  shortName_contains_i?: InputMaybe<Scalars['String']>;
  shortName_ends_with?: InputMaybe<Scalars['String']>;
  shortName_ends_with_i?: InputMaybe<Scalars['String']>;
  shortName_i?: InputMaybe<Scalars['String']>;
  shortName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  shortName_not?: InputMaybe<Scalars['String']>;
  shortName_not_contains?: InputMaybe<Scalars['String']>;
  shortName_not_contains_i?: InputMaybe<Scalars['String']>;
  shortName_not_ends_with?: InputMaybe<Scalars['String']>;
  shortName_not_ends_with_i?: InputMaybe<Scalars['String']>;
  shortName_not_i?: InputMaybe<Scalars['String']>;
  shortName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  shortName_not_starts_with?: InputMaybe<Scalars['String']>;
  shortName_not_starts_with_i?: InputMaybe<Scalars['String']>;
  shortName_starts_with?: InputMaybe<Scalars['String']>;
  shortName_starts_with_i?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  type_contains?: InputMaybe<Scalars['String']>;
  type_contains_i?: InputMaybe<Scalars['String']>;
  type_ends_with?: InputMaybe<Scalars['String']>;
  type_ends_with_i?: InputMaybe<Scalars['String']>;
  type_i?: InputMaybe<Scalars['String']>;
  type_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type_not?: InputMaybe<Scalars['String']>;
  type_not_contains?: InputMaybe<Scalars['String']>;
  type_not_contains_i?: InputMaybe<Scalars['String']>;
  type_not_ends_with?: InputMaybe<Scalars['String']>;
  type_not_ends_with_i?: InputMaybe<Scalars['String']>;
  type_not_i?: InputMaybe<Scalars['String']>;
  type_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type_not_starts_with?: InputMaybe<Scalars['String']>;
  type_not_starts_with_i?: InputMaybe<Scalars['String']>;
  type_starts_with?: InputMaybe<Scalars['String']>;
  type_starts_with_i?: InputMaybe<Scalars['String']>;
};

export type CouponWhereUniqueInput = {
  id: Scalars['ID'];
};

export type CouponsCreateInput = {
  data?: InputMaybe<CouponCreateInput>;
};

export type CouponsUpdateInput = {
  data?: InputMaybe<CouponUpdateInput>;
  id: Scalars['ID'];
};

export type CreateInitialUserInput = {
  email?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

export type CreateUserAddressInput = {
  addressL1: Scalars['String'];
  cityId: Scalars['ID'];
  description: Scalars['String'];
  userId?: InputMaybe<Scalars['ID']>;
};

export type CreateUserAddressOutput = {
  __typename?: 'CreateUserAddressOutput';
  addressId: Scalars['String'];
};

/**  Custom webpage content  */
export type CustomContent = {
  __typename?: 'CustomContent';
  _sectionMeta?: Maybe<_QueryMeta>;
  body?: Maybe<Scalars['String']>;
  heading1?: Maybe<Scalars['String']>;
  heading2?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image1?: Maybe<CloudinaryImage_File>;
  image2?: Maybe<CloudinaryImage_File>;
  path?: Maybe<Scalars['String']>;
  section: Array<Section>;
  visible?: Maybe<Scalars['Boolean']>;
};


/**  Custom webpage content  */
export type CustomContent_SectionMetaArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<SortSectionsBy>>;
  where?: InputMaybe<SectionWhereInput>;
};


/**  Custom webpage content  */
export type CustomContentSectionArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<SortSectionsBy>>;
  where?: InputMaybe<SectionWhereInput>;
};

export type CustomContentCreateInput = {
  body?: InputMaybe<Scalars['String']>;
  heading1?: InputMaybe<Scalars['String']>;
  heading2?: InputMaybe<Scalars['String']>;
  image1?: InputMaybe<Scalars['Upload']>;
  image2?: InputMaybe<Scalars['Upload']>;
  path?: InputMaybe<Scalars['String']>;
  section?: InputMaybe<SectionRelateToManyInput>;
  visible?: InputMaybe<Scalars['Boolean']>;
};

export type CustomContentUpdateInput = {
  body?: InputMaybe<Scalars['String']>;
  heading1?: InputMaybe<Scalars['String']>;
  heading2?: InputMaybe<Scalars['String']>;
  image1?: InputMaybe<Scalars['Upload']>;
  image2?: InputMaybe<Scalars['Upload']>;
  path?: InputMaybe<Scalars['String']>;
  section?: InputMaybe<SectionRelateToManyInput>;
  visible?: InputMaybe<Scalars['Boolean']>;
};

export type CustomContentWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<CustomContentWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<CustomContentWhereInput>>>;
  body?: InputMaybe<Scalars['String']>;
  body_contains?: InputMaybe<Scalars['String']>;
  body_contains_i?: InputMaybe<Scalars['String']>;
  body_ends_with?: InputMaybe<Scalars['String']>;
  body_ends_with_i?: InputMaybe<Scalars['String']>;
  body_i?: InputMaybe<Scalars['String']>;
  body_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  body_not?: InputMaybe<Scalars['String']>;
  body_not_contains?: InputMaybe<Scalars['String']>;
  body_not_contains_i?: InputMaybe<Scalars['String']>;
  body_not_ends_with?: InputMaybe<Scalars['String']>;
  body_not_ends_with_i?: InputMaybe<Scalars['String']>;
  body_not_i?: InputMaybe<Scalars['String']>;
  body_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  body_not_starts_with?: InputMaybe<Scalars['String']>;
  body_not_starts_with_i?: InputMaybe<Scalars['String']>;
  body_starts_with?: InputMaybe<Scalars['String']>;
  body_starts_with_i?: InputMaybe<Scalars['String']>;
  heading1?: InputMaybe<Scalars['String']>;
  heading1_contains?: InputMaybe<Scalars['String']>;
  heading1_contains_i?: InputMaybe<Scalars['String']>;
  heading1_ends_with?: InputMaybe<Scalars['String']>;
  heading1_ends_with_i?: InputMaybe<Scalars['String']>;
  heading1_i?: InputMaybe<Scalars['String']>;
  heading1_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  heading1_not?: InputMaybe<Scalars['String']>;
  heading1_not_contains?: InputMaybe<Scalars['String']>;
  heading1_not_contains_i?: InputMaybe<Scalars['String']>;
  heading1_not_ends_with?: InputMaybe<Scalars['String']>;
  heading1_not_ends_with_i?: InputMaybe<Scalars['String']>;
  heading1_not_i?: InputMaybe<Scalars['String']>;
  heading1_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  heading1_not_starts_with?: InputMaybe<Scalars['String']>;
  heading1_not_starts_with_i?: InputMaybe<Scalars['String']>;
  heading1_starts_with?: InputMaybe<Scalars['String']>;
  heading1_starts_with_i?: InputMaybe<Scalars['String']>;
  heading2?: InputMaybe<Scalars['String']>;
  heading2_contains?: InputMaybe<Scalars['String']>;
  heading2_contains_i?: InputMaybe<Scalars['String']>;
  heading2_ends_with?: InputMaybe<Scalars['String']>;
  heading2_ends_with_i?: InputMaybe<Scalars['String']>;
  heading2_i?: InputMaybe<Scalars['String']>;
  heading2_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  heading2_not?: InputMaybe<Scalars['String']>;
  heading2_not_contains?: InputMaybe<Scalars['String']>;
  heading2_not_contains_i?: InputMaybe<Scalars['String']>;
  heading2_not_ends_with?: InputMaybe<Scalars['String']>;
  heading2_not_ends_with_i?: InputMaybe<Scalars['String']>;
  heading2_not_i?: InputMaybe<Scalars['String']>;
  heading2_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  heading2_not_starts_with?: InputMaybe<Scalars['String']>;
  heading2_not_starts_with_i?: InputMaybe<Scalars['String']>;
  heading2_starts_with?: InputMaybe<Scalars['String']>;
  heading2_starts_with_i?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  image1?: InputMaybe<Scalars['String']>;
  image1_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  image1_not?: InputMaybe<Scalars['String']>;
  image1_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  image2?: InputMaybe<Scalars['String']>;
  image2_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  image2_not?: InputMaybe<Scalars['String']>;
  image2_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  path?: InputMaybe<Scalars['String']>;
  path_contains?: InputMaybe<Scalars['String']>;
  path_contains_i?: InputMaybe<Scalars['String']>;
  path_ends_with?: InputMaybe<Scalars['String']>;
  path_ends_with_i?: InputMaybe<Scalars['String']>;
  path_i?: InputMaybe<Scalars['String']>;
  path_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  path_not?: InputMaybe<Scalars['String']>;
  path_not_contains?: InputMaybe<Scalars['String']>;
  path_not_contains_i?: InputMaybe<Scalars['String']>;
  path_not_ends_with?: InputMaybe<Scalars['String']>;
  path_not_ends_with_i?: InputMaybe<Scalars['String']>;
  path_not_i?: InputMaybe<Scalars['String']>;
  path_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  path_not_starts_with?: InputMaybe<Scalars['String']>;
  path_not_starts_with_i?: InputMaybe<Scalars['String']>;
  path_starts_with?: InputMaybe<Scalars['String']>;
  path_starts_with_i?: InputMaybe<Scalars['String']>;
  /**  condition must be true for all nodes  */
  section_every?: InputMaybe<SectionWhereInput>;
  /**  condition must be false for all nodes  */
  section_none?: InputMaybe<SectionWhereInput>;
  /**  condition must be true for at least 1 node  */
  section_some?: InputMaybe<SectionWhereInput>;
  visible?: InputMaybe<Scalars['Boolean']>;
  visible_not?: InputMaybe<Scalars['Boolean']>;
};

export type CustomContentWhereUniqueInput = {
  id: Scalars['ID'];
};

export type CustomContentsCreateInput = {
  data?: InputMaybe<CustomContentCreateInput>;
};

export type CustomContentsUpdateInput = {
  data?: InputMaybe<CustomContentUpdateInput>;
  id: Scalars['ID'];
};

/**  A keystone list  */
export type FaqContent = {
  __typename?: 'FaqContent';
  id: Scalars['ID'];
  question?: Maybe<Scalars['String']>;
  questionId?: Maybe<Scalars['String']>;
  subAnswer1?: Maybe<Scalars['String']>;
  subAnswer2?: Maybe<Scalars['String']>;
  subAnswer3?: Maybe<Scalars['String']>;
  subQuestion1?: Maybe<Scalars['String']>;
  subQuestion2?: Maybe<Scalars['String']>;
  subQuestion3?: Maybe<Scalars['String']>;
};

export type FaqContentCreateInput = {
  question?: InputMaybe<Scalars['String']>;
  questionId?: InputMaybe<Scalars['String']>;
  subAnswer1?: InputMaybe<Scalars['String']>;
  subAnswer2?: InputMaybe<Scalars['String']>;
  subAnswer3?: InputMaybe<Scalars['String']>;
  subQuestion1?: InputMaybe<Scalars['String']>;
  subQuestion2?: InputMaybe<Scalars['String']>;
  subQuestion3?: InputMaybe<Scalars['String']>;
};

export type FaqContentUpdateInput = {
  question?: InputMaybe<Scalars['String']>;
  questionId?: InputMaybe<Scalars['String']>;
  subAnswer1?: InputMaybe<Scalars['String']>;
  subAnswer2?: InputMaybe<Scalars['String']>;
  subAnswer3?: InputMaybe<Scalars['String']>;
  subQuestion1?: InputMaybe<Scalars['String']>;
  subQuestion2?: InputMaybe<Scalars['String']>;
  subQuestion3?: InputMaybe<Scalars['String']>;
};

export type FaqContentWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<FaqContentWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<FaqContentWhereInput>>>;
  id?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  question?: InputMaybe<Scalars['String']>;
  questionId?: InputMaybe<Scalars['String']>;
  questionId_contains?: InputMaybe<Scalars['String']>;
  questionId_contains_i?: InputMaybe<Scalars['String']>;
  questionId_ends_with?: InputMaybe<Scalars['String']>;
  questionId_ends_with_i?: InputMaybe<Scalars['String']>;
  questionId_i?: InputMaybe<Scalars['String']>;
  questionId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  questionId_not?: InputMaybe<Scalars['String']>;
  questionId_not_contains?: InputMaybe<Scalars['String']>;
  questionId_not_contains_i?: InputMaybe<Scalars['String']>;
  questionId_not_ends_with?: InputMaybe<Scalars['String']>;
  questionId_not_ends_with_i?: InputMaybe<Scalars['String']>;
  questionId_not_i?: InputMaybe<Scalars['String']>;
  questionId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  questionId_not_starts_with?: InputMaybe<Scalars['String']>;
  questionId_not_starts_with_i?: InputMaybe<Scalars['String']>;
  questionId_starts_with?: InputMaybe<Scalars['String']>;
  questionId_starts_with_i?: InputMaybe<Scalars['String']>;
  question_contains?: InputMaybe<Scalars['String']>;
  question_contains_i?: InputMaybe<Scalars['String']>;
  question_ends_with?: InputMaybe<Scalars['String']>;
  question_ends_with_i?: InputMaybe<Scalars['String']>;
  question_i?: InputMaybe<Scalars['String']>;
  question_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  question_not?: InputMaybe<Scalars['String']>;
  question_not_contains?: InputMaybe<Scalars['String']>;
  question_not_contains_i?: InputMaybe<Scalars['String']>;
  question_not_ends_with?: InputMaybe<Scalars['String']>;
  question_not_ends_with_i?: InputMaybe<Scalars['String']>;
  question_not_i?: InputMaybe<Scalars['String']>;
  question_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  question_not_starts_with?: InputMaybe<Scalars['String']>;
  question_not_starts_with_i?: InputMaybe<Scalars['String']>;
  question_starts_with?: InputMaybe<Scalars['String']>;
  question_starts_with_i?: InputMaybe<Scalars['String']>;
  subAnswer1?: InputMaybe<Scalars['String']>;
  subAnswer1_contains?: InputMaybe<Scalars['String']>;
  subAnswer1_contains_i?: InputMaybe<Scalars['String']>;
  subAnswer1_ends_with?: InputMaybe<Scalars['String']>;
  subAnswer1_ends_with_i?: InputMaybe<Scalars['String']>;
  subAnswer1_i?: InputMaybe<Scalars['String']>;
  subAnswer1_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subAnswer1_not?: InputMaybe<Scalars['String']>;
  subAnswer1_not_contains?: InputMaybe<Scalars['String']>;
  subAnswer1_not_contains_i?: InputMaybe<Scalars['String']>;
  subAnswer1_not_ends_with?: InputMaybe<Scalars['String']>;
  subAnswer1_not_ends_with_i?: InputMaybe<Scalars['String']>;
  subAnswer1_not_i?: InputMaybe<Scalars['String']>;
  subAnswer1_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subAnswer1_not_starts_with?: InputMaybe<Scalars['String']>;
  subAnswer1_not_starts_with_i?: InputMaybe<Scalars['String']>;
  subAnswer1_starts_with?: InputMaybe<Scalars['String']>;
  subAnswer1_starts_with_i?: InputMaybe<Scalars['String']>;
  subAnswer2?: InputMaybe<Scalars['String']>;
  subAnswer2_contains?: InputMaybe<Scalars['String']>;
  subAnswer2_contains_i?: InputMaybe<Scalars['String']>;
  subAnswer2_ends_with?: InputMaybe<Scalars['String']>;
  subAnswer2_ends_with_i?: InputMaybe<Scalars['String']>;
  subAnswer2_i?: InputMaybe<Scalars['String']>;
  subAnswer2_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subAnswer2_not?: InputMaybe<Scalars['String']>;
  subAnswer2_not_contains?: InputMaybe<Scalars['String']>;
  subAnswer2_not_contains_i?: InputMaybe<Scalars['String']>;
  subAnswer2_not_ends_with?: InputMaybe<Scalars['String']>;
  subAnswer2_not_ends_with_i?: InputMaybe<Scalars['String']>;
  subAnswer2_not_i?: InputMaybe<Scalars['String']>;
  subAnswer2_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subAnswer2_not_starts_with?: InputMaybe<Scalars['String']>;
  subAnswer2_not_starts_with_i?: InputMaybe<Scalars['String']>;
  subAnswer2_starts_with?: InputMaybe<Scalars['String']>;
  subAnswer2_starts_with_i?: InputMaybe<Scalars['String']>;
  subAnswer3?: InputMaybe<Scalars['String']>;
  subAnswer3_contains?: InputMaybe<Scalars['String']>;
  subAnswer3_contains_i?: InputMaybe<Scalars['String']>;
  subAnswer3_ends_with?: InputMaybe<Scalars['String']>;
  subAnswer3_ends_with_i?: InputMaybe<Scalars['String']>;
  subAnswer3_i?: InputMaybe<Scalars['String']>;
  subAnswer3_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subAnswer3_not?: InputMaybe<Scalars['String']>;
  subAnswer3_not_contains?: InputMaybe<Scalars['String']>;
  subAnswer3_not_contains_i?: InputMaybe<Scalars['String']>;
  subAnswer3_not_ends_with?: InputMaybe<Scalars['String']>;
  subAnswer3_not_ends_with_i?: InputMaybe<Scalars['String']>;
  subAnswer3_not_i?: InputMaybe<Scalars['String']>;
  subAnswer3_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subAnswer3_not_starts_with?: InputMaybe<Scalars['String']>;
  subAnswer3_not_starts_with_i?: InputMaybe<Scalars['String']>;
  subAnswer3_starts_with?: InputMaybe<Scalars['String']>;
  subAnswer3_starts_with_i?: InputMaybe<Scalars['String']>;
  subQuestion1?: InputMaybe<Scalars['String']>;
  subQuestion1_contains?: InputMaybe<Scalars['String']>;
  subQuestion1_contains_i?: InputMaybe<Scalars['String']>;
  subQuestion1_ends_with?: InputMaybe<Scalars['String']>;
  subQuestion1_ends_with_i?: InputMaybe<Scalars['String']>;
  subQuestion1_i?: InputMaybe<Scalars['String']>;
  subQuestion1_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subQuestion1_not?: InputMaybe<Scalars['String']>;
  subQuestion1_not_contains?: InputMaybe<Scalars['String']>;
  subQuestion1_not_contains_i?: InputMaybe<Scalars['String']>;
  subQuestion1_not_ends_with?: InputMaybe<Scalars['String']>;
  subQuestion1_not_ends_with_i?: InputMaybe<Scalars['String']>;
  subQuestion1_not_i?: InputMaybe<Scalars['String']>;
  subQuestion1_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subQuestion1_not_starts_with?: InputMaybe<Scalars['String']>;
  subQuestion1_not_starts_with_i?: InputMaybe<Scalars['String']>;
  subQuestion1_starts_with?: InputMaybe<Scalars['String']>;
  subQuestion1_starts_with_i?: InputMaybe<Scalars['String']>;
  subQuestion2?: InputMaybe<Scalars['String']>;
  subQuestion2_contains?: InputMaybe<Scalars['String']>;
  subQuestion2_contains_i?: InputMaybe<Scalars['String']>;
  subQuestion2_ends_with?: InputMaybe<Scalars['String']>;
  subQuestion2_ends_with_i?: InputMaybe<Scalars['String']>;
  subQuestion2_i?: InputMaybe<Scalars['String']>;
  subQuestion2_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subQuestion2_not?: InputMaybe<Scalars['String']>;
  subQuestion2_not_contains?: InputMaybe<Scalars['String']>;
  subQuestion2_not_contains_i?: InputMaybe<Scalars['String']>;
  subQuestion2_not_ends_with?: InputMaybe<Scalars['String']>;
  subQuestion2_not_ends_with_i?: InputMaybe<Scalars['String']>;
  subQuestion2_not_i?: InputMaybe<Scalars['String']>;
  subQuestion2_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subQuestion2_not_starts_with?: InputMaybe<Scalars['String']>;
  subQuestion2_not_starts_with_i?: InputMaybe<Scalars['String']>;
  subQuestion2_starts_with?: InputMaybe<Scalars['String']>;
  subQuestion2_starts_with_i?: InputMaybe<Scalars['String']>;
  subQuestion3?: InputMaybe<Scalars['String']>;
  subQuestion3_contains?: InputMaybe<Scalars['String']>;
  subQuestion3_contains_i?: InputMaybe<Scalars['String']>;
  subQuestion3_ends_with?: InputMaybe<Scalars['String']>;
  subQuestion3_ends_with_i?: InputMaybe<Scalars['String']>;
  subQuestion3_i?: InputMaybe<Scalars['String']>;
  subQuestion3_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subQuestion3_not?: InputMaybe<Scalars['String']>;
  subQuestion3_not_contains?: InputMaybe<Scalars['String']>;
  subQuestion3_not_contains_i?: InputMaybe<Scalars['String']>;
  subQuestion3_not_ends_with?: InputMaybe<Scalars['String']>;
  subQuestion3_not_ends_with_i?: InputMaybe<Scalars['String']>;
  subQuestion3_not_i?: InputMaybe<Scalars['String']>;
  subQuestion3_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subQuestion3_not_starts_with?: InputMaybe<Scalars['String']>;
  subQuestion3_not_starts_with_i?: InputMaybe<Scalars['String']>;
  subQuestion3_starts_with?: InputMaybe<Scalars['String']>;
  subQuestion3_starts_with_i?: InputMaybe<Scalars['String']>;
};

export type FaqContentWhereUniqueInput = {
  id: Scalars['ID'];
};

export type FaqContentsCreateInput = {
  data?: InputMaybe<FaqContentCreateInput>;
};

export type FaqContentsUpdateInput = {
  data?: InputMaybe<FaqContentUpdateInput>;
  id: Scalars['ID'];
};

export type KeystoneAdminMeta = {
  __typename?: 'KeystoneAdminMeta';
  enableSessionItem: Scalars['Boolean'];
  enableSignout: Scalars['Boolean'];
  list?: Maybe<KeystoneAdminUiListMeta>;
  lists: Array<KeystoneAdminUiListMeta>;
};


export type KeystoneAdminMetaListArgs = {
  key: Scalars['String'];
};

export type KeystoneAdminUiFieldMeta = {
  __typename?: 'KeystoneAdminUIFieldMeta';
  createView: KeystoneAdminUiFieldMetaCreateView;
  customViewsHash?: Maybe<Scalars['String']>;
  fieldMeta?: Maybe<Scalars['JSON']>;
  isOrderable: Scalars['Boolean'];
  itemView?: Maybe<KeystoneAdminUiFieldMetaItemView>;
  label: Scalars['String'];
  listView: KeystoneAdminUiFieldMetaListView;
  path: Scalars['String'];
  viewsHash: Scalars['String'];
};


export type KeystoneAdminUiFieldMetaItemViewArgs = {
  id: Scalars['ID'];
};

export type KeystoneAdminUiFieldMetaCreateView = {
  __typename?: 'KeystoneAdminUIFieldMetaCreateView';
  fieldMode: KeystoneAdminUiFieldMetaCreateViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaCreateViewFieldMode {
  Edit = 'edit',
  Hidden = 'hidden'
}

export type KeystoneAdminUiFieldMetaItemView = {
  __typename?: 'KeystoneAdminUIFieldMetaItemView';
  fieldMode: KeystoneAdminUiFieldMetaItemViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaItemViewFieldMode {
  Edit = 'edit',
  Hidden = 'hidden',
  Read = 'read'
}

export type KeystoneAdminUiFieldMetaListView = {
  __typename?: 'KeystoneAdminUIFieldMetaListView';
  fieldMode: KeystoneAdminUiFieldMetaListViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaListViewFieldMode {
  Hidden = 'hidden',
  Read = 'read'
}

export type KeystoneAdminUiListMeta = {
  __typename?: 'KeystoneAdminUIListMeta';
  description?: Maybe<Scalars['String']>;
  fields: Array<KeystoneAdminUiFieldMeta>;
  hideCreate: Scalars['Boolean'];
  hideDelete: Scalars['Boolean'];
  initialColumns: Array<Scalars['String']>;
  initialSort?: Maybe<KeystoneAdminUiSort>;
  isHidden: Scalars['Boolean'];
  itemQueryName: Scalars['String'];
  key: Scalars['String'];
  label: Scalars['String'];
  labelField: Scalars['String'];
  listQueryName: Scalars['String'];
  pageSize: Scalars['Int'];
  path: Scalars['String'];
  plural: Scalars['String'];
  singular: Scalars['String'];
};

export type KeystoneAdminUiSort = {
  __typename?: 'KeystoneAdminUISort';
  direction: KeystoneAdminUiSortDirection;
  field: Scalars['String'];
};

export enum KeystoneAdminUiSortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type KeystoneMeta = {
  __typename?: 'KeystoneMeta';
  adminMeta: KeystoneAdminMeta;
};

/**  A keystone list  */
export type LineItem = {
  __typename?: 'LineItem';
  id: Scalars['ID'];
  price?: Maybe<Scalars['Int']>;
  product?: Maybe<Product>;
  quantity?: Maybe<Scalars['Int']>;
  sellOrder?: Maybe<SellOrder>;
};

export type LineItemCreateInput = {
  price?: InputMaybe<Scalars['Int']>;
  product?: InputMaybe<ProductRelateToOneInput>;
  quantity?: InputMaybe<Scalars['Int']>;
  sellOrder?: InputMaybe<SellOrderRelateToOneInput>;
};

export type LineItemRelateToManyInput = {
  connect?: InputMaybe<Array<InputMaybe<LineItemWhereUniqueInput>>>;
  create?: InputMaybe<Array<InputMaybe<LineItemCreateInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<LineItemWhereUniqueInput>>>;
  disconnectAll?: InputMaybe<Scalars['Boolean']>;
};

export type LineItemUpdateInput = {
  price?: InputMaybe<Scalars['Int']>;
  product?: InputMaybe<ProductRelateToOneInput>;
  quantity?: InputMaybe<Scalars['Int']>;
  sellOrder?: InputMaybe<SellOrderRelateToOneInput>;
};

export type LineItemWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<LineItemWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<LineItemWhereInput>>>;
  id?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  price?: InputMaybe<Scalars['Int']>;
  price_gt?: InputMaybe<Scalars['Int']>;
  price_gte?: InputMaybe<Scalars['Int']>;
  price_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  price_lt?: InputMaybe<Scalars['Int']>;
  price_lte?: InputMaybe<Scalars['Int']>;
  price_not?: InputMaybe<Scalars['Int']>;
  price_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  product?: InputMaybe<ProductWhereInput>;
  product_is_null?: InputMaybe<Scalars['Boolean']>;
  quantity?: InputMaybe<Scalars['Int']>;
  quantity_gt?: InputMaybe<Scalars['Int']>;
  quantity_gte?: InputMaybe<Scalars['Int']>;
  quantity_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  quantity_lt?: InputMaybe<Scalars['Int']>;
  quantity_lte?: InputMaybe<Scalars['Int']>;
  quantity_not?: InputMaybe<Scalars['Int']>;
  quantity_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sellOrder?: InputMaybe<SellOrderWhereInput>;
  sellOrder_is_null?: InputMaybe<Scalars['Boolean']>;
};

export type LineItemWhereUniqueInput = {
  id: Scalars['ID'];
};

export type LineItemsCreateInput = {
  data?: InputMaybe<LineItemCreateInput>;
};

export type LineItemsUpdateInput = {
  data?: InputMaybe<LineItemUpdateInput>;
  id: Scalars['ID'];
};

/**  A keystone list  */
export type MetaItem = {
  __typename?: 'MetaItem';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  key?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type MetaItemCreateInput = {
  description?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

export type MetaItemUpdateInput = {
  description?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

export type MetaItemWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<MetaItemWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<MetaItemWhereInput>>>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_contains_i?: InputMaybe<Scalars['String']>;
  description_ends_with?: InputMaybe<Scalars['String']>;
  description_ends_with_i?: InputMaybe<Scalars['String']>;
  description_i?: InputMaybe<Scalars['String']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_contains_i?: InputMaybe<Scalars['String']>;
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  description_not_ends_with_i?: InputMaybe<Scalars['String']>;
  description_not_i?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  description_not_starts_with_i?: InputMaybe<Scalars['String']>;
  description_starts_with?: InputMaybe<Scalars['String']>;
  description_starts_with_i?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  key?: InputMaybe<Scalars['String']>;
  key_contains?: InputMaybe<Scalars['String']>;
  key_contains_i?: InputMaybe<Scalars['String']>;
  key_ends_with?: InputMaybe<Scalars['String']>;
  key_ends_with_i?: InputMaybe<Scalars['String']>;
  key_i?: InputMaybe<Scalars['String']>;
  key_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  key_not?: InputMaybe<Scalars['String']>;
  key_not_contains?: InputMaybe<Scalars['String']>;
  key_not_contains_i?: InputMaybe<Scalars['String']>;
  key_not_ends_with?: InputMaybe<Scalars['String']>;
  key_not_ends_with_i?: InputMaybe<Scalars['String']>;
  key_not_i?: InputMaybe<Scalars['String']>;
  key_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  key_not_starts_with?: InputMaybe<Scalars['String']>;
  key_not_starts_with_i?: InputMaybe<Scalars['String']>;
  key_starts_with?: InputMaybe<Scalars['String']>;
  key_starts_with_i?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  type_contains?: InputMaybe<Scalars['String']>;
  type_contains_i?: InputMaybe<Scalars['String']>;
  type_ends_with?: InputMaybe<Scalars['String']>;
  type_ends_with_i?: InputMaybe<Scalars['String']>;
  type_i?: InputMaybe<Scalars['String']>;
  type_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type_not?: InputMaybe<Scalars['String']>;
  type_not_contains?: InputMaybe<Scalars['String']>;
  type_not_contains_i?: InputMaybe<Scalars['String']>;
  type_not_ends_with?: InputMaybe<Scalars['String']>;
  type_not_ends_with_i?: InputMaybe<Scalars['String']>;
  type_not_i?: InputMaybe<Scalars['String']>;
  type_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type_not_starts_with?: InputMaybe<Scalars['String']>;
  type_not_starts_with_i?: InputMaybe<Scalars['String']>;
  type_starts_with?: InputMaybe<Scalars['String']>;
  type_starts_with_i?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
  value_contains?: InputMaybe<Scalars['String']>;
  value_contains_i?: InputMaybe<Scalars['String']>;
  value_ends_with?: InputMaybe<Scalars['String']>;
  value_ends_with_i?: InputMaybe<Scalars['String']>;
  value_i?: InputMaybe<Scalars['String']>;
  value_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  value_not?: InputMaybe<Scalars['String']>;
  value_not_contains?: InputMaybe<Scalars['String']>;
  value_not_contains_i?: InputMaybe<Scalars['String']>;
  value_not_ends_with?: InputMaybe<Scalars['String']>;
  value_not_ends_with_i?: InputMaybe<Scalars['String']>;
  value_not_i?: InputMaybe<Scalars['String']>;
  value_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  value_not_starts_with?: InputMaybe<Scalars['String']>;
  value_not_starts_with_i?: InputMaybe<Scalars['String']>;
  value_starts_with?: InputMaybe<Scalars['String']>;
  value_starts_with_i?: InputMaybe<Scalars['String']>;
};

export type MetaItemWhereUniqueInput = {
  id: Scalars['ID'];
};

export type MetaItemsCreateInput = {
  data?: InputMaybe<MetaItemCreateInput>;
};

export type MetaItemsUpdateInput = {
  data?: InputMaybe<MetaItemUpdateInput>;
  id: Scalars['ID'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addReview?: Maybe<Review>;
  addToCart2?: Maybe<AddToCartResponse>;
  adjustCart?: Maybe<CartAdjustment>;
  authenticateUserWithPassword: UserAuthenticationWithPasswordResult;
  checkoutCart?: Maybe<CheckoutCartOutput>;
  /**  Create a single Address item.  */
  createAddress?: Maybe<Address>;
  /**  Create multiple Address items.  */
  createAddresses?: Maybe<Array<Maybe<Address>>>;
  /**  Create multiple Category items.  */
  createCategories?: Maybe<Array<Maybe<Category>>>;
  /**  Create a single Category item.  */
  createCategory?: Maybe<Category>;
  /**  Create multiple City items.  */
  createCities?: Maybe<Array<Maybe<City>>>;
  /**  Create a single City item.  */
  createCity?: Maybe<City>;
  /**  Create a single ContactRequest item.  */
  createContactRequest?: Maybe<ContactRequest>;
  /**  Create multiple ContactRequest items.  */
  createContactRequests?: Maybe<Array<Maybe<ContactRequest>>>;
  /**  Create multiple Country items.  */
  createCountries?: Maybe<Array<Maybe<Country>>>;
  /**  Create a single Country item.  */
  createCountry?: Maybe<Country>;
  /**  Create a single Coupon item.  */
  createCoupon?: Maybe<Coupon>;
  /**  Create multiple Coupon items.  */
  createCoupons?: Maybe<Array<Maybe<Coupon>>>;
  /**  Create a single CustomContent item.  */
  createCustomContent?: Maybe<CustomContent>;
  /**  Create multiple CustomContent items.  */
  createCustomContents?: Maybe<Array<Maybe<CustomContent>>>;
  /**  Create a single FaqContent item.  */
  createFaqContent?: Maybe<FaqContent>;
  /**  Create multiple FaqContent items.  */
  createFaqContents?: Maybe<Array<Maybe<FaqContent>>>;
  createInitialUser: UserAuthenticationWithPasswordSuccess;
  /**  Create a single LineItem item.  */
  createLineItem?: Maybe<LineItem>;
  /**  Create multiple LineItem items.  */
  createLineItems?: Maybe<Array<Maybe<LineItem>>>;
  /**  Create a single MetaItem item.  */
  createMetaItem?: Maybe<MetaItem>;
  /**  Create multiple MetaItem items.  */
  createMetaItems?: Maybe<Array<Maybe<MetaItem>>>;
  /**  Create a single Product item.  */
  createProduct?: Maybe<Product>;
  /**  Create a single ProductImage item.  */
  createProductImage?: Maybe<ProductImage>;
  /**  Create multiple ProductImage items.  */
  createProductImages?: Maybe<Array<Maybe<ProductImage>>>;
  /**  Create multiple Product items.  */
  createProducts?: Maybe<Array<Maybe<Product>>>;
  /**  Create a single Region item.  */
  createRegion?: Maybe<Region>;
  /**  Create multiple Region items.  */
  createRegions?: Maybe<Array<Maybe<Region>>>;
  /**  Create a single Review item.  */
  createReview?: Maybe<Review>;
  /**  Create multiple Review items.  */
  createReviews?: Maybe<Array<Maybe<Review>>>;
  /**  Create a single Role item.  */
  createRole?: Maybe<Role>;
  /**  Create multiple Role items.  */
  createRoles?: Maybe<Array<Maybe<Role>>>;
  /**  Create a single Section item.  */
  createSection?: Maybe<Section>;
  /**  Create multiple Section items.  */
  createSections?: Maybe<Array<Maybe<Section>>>;
  /**  Create a single SellOrder item.  */
  createSellOrder?: Maybe<SellOrder>;
  /**  Create multiple SellOrder items.  */
  createSellOrders?: Maybe<Array<Maybe<SellOrder>>>;
  /**  Create a single ShippingOrder item.  */
  createShippingOrder?: Maybe<ShippingOrder>;
  /**  Create multiple ShippingOrder items.  */
  createShippingOrders?: Maybe<Array<Maybe<ShippingOrder>>>;
  /**  Create a single signUpContent item.  */
  createSignUpContent?: Maybe<SignUpContent>;
  /**  Create multiple signUpContent items.  */
  createSignUpContents?: Maybe<Array<Maybe<SignUpContent>>>;
  /**  Create a single Store item.  */
  createStore?: Maybe<Store>;
  /**  Create multiple Store items.  */
  createStores?: Maybe<Array<Maybe<Store>>>;
  /**  Create a single Tax item.  */
  createTax?: Maybe<Tax>;
  /**  Create multiple Tax items.  */
  createTaxes?: Maybe<Array<Maybe<Tax>>>;
  /**  Create a single User item.  */
  createUser?: Maybe<User>;
  createUserAddress?: Maybe<CreateUserAddressOutput>;
  /**  Create multiple User items.  */
  createUsers?: Maybe<Array<Maybe<User>>>;
  /**  Create a single WeekDay item.  */
  createWeekDay?: Maybe<WeekDay>;
  /**  Create multiple WeekDay items.  */
  createWeekDays?: Maybe<Array<Maybe<WeekDay>>>;
  /**  Create a single WorkWithUsRequest item.  */
  createWorkWithUsRequest?: Maybe<WorkWithUsRequest>;
  /**  Create multiple WorkWithUsRequest items.  */
  createWorkWithUsRequests?: Maybe<Array<Maybe<WorkWithUsRequest>>>;
  /**  Delete a single Address item by ID.  */
  deleteAddress?: Maybe<Address>;
  /**  Delete multiple Address items by ID.  */
  deleteAddresses?: Maybe<Array<Maybe<Address>>>;
  /**  Delete multiple Category items by ID.  */
  deleteCategories?: Maybe<Array<Maybe<Category>>>;
  /**  Delete a single Category item by ID.  */
  deleteCategory?: Maybe<Category>;
  /**  Delete multiple City items by ID.  */
  deleteCities?: Maybe<Array<Maybe<City>>>;
  /**  Delete a single City item by ID.  */
  deleteCity?: Maybe<City>;
  /**  Delete a single ContactRequest item by ID.  */
  deleteContactRequest?: Maybe<ContactRequest>;
  /**  Delete multiple ContactRequest items by ID.  */
  deleteContactRequests?: Maybe<Array<Maybe<ContactRequest>>>;
  /**  Delete multiple Country items by ID.  */
  deleteCountries?: Maybe<Array<Maybe<Country>>>;
  /**  Delete a single Country item by ID.  */
  deleteCountry?: Maybe<Country>;
  /**  Delete a single Coupon item by ID.  */
  deleteCoupon?: Maybe<Coupon>;
  /**  Delete multiple Coupon items by ID.  */
  deleteCoupons?: Maybe<Array<Maybe<Coupon>>>;
  /**  Delete a single CustomContent item by ID.  */
  deleteCustomContent?: Maybe<CustomContent>;
  /**  Delete multiple CustomContent items by ID.  */
  deleteCustomContents?: Maybe<Array<Maybe<CustomContent>>>;
  /**  Delete a single FaqContent item by ID.  */
  deleteFaqContent?: Maybe<FaqContent>;
  /**  Delete multiple FaqContent items by ID.  */
  deleteFaqContents?: Maybe<Array<Maybe<FaqContent>>>;
  /**  Delete a single LineItem item by ID.  */
  deleteLineItem?: Maybe<LineItem>;
  /**  Delete multiple LineItem items by ID.  */
  deleteLineItems?: Maybe<Array<Maybe<LineItem>>>;
  /**  Delete a single MetaItem item by ID.  */
  deleteMetaItem?: Maybe<MetaItem>;
  /**  Delete multiple MetaItem items by ID.  */
  deleteMetaItems?: Maybe<Array<Maybe<MetaItem>>>;
  /**  Delete a single Product item by ID.  */
  deleteProduct?: Maybe<Product>;
  /**  Delete a single ProductImage item by ID.  */
  deleteProductImage?: Maybe<ProductImage>;
  /**  Delete multiple ProductImage items by ID.  */
  deleteProductImages?: Maybe<Array<Maybe<ProductImage>>>;
  /**  Delete multiple Product items by ID.  */
  deleteProducts?: Maybe<Array<Maybe<Product>>>;
  /**  Delete a single Region item by ID.  */
  deleteRegion?: Maybe<Region>;
  /**  Delete multiple Region items by ID.  */
  deleteRegions?: Maybe<Array<Maybe<Region>>>;
  /**  Delete a single Review item by ID.  */
  deleteReview?: Maybe<Review>;
  /**  Delete multiple Review items by ID.  */
  deleteReviews?: Maybe<Array<Maybe<Review>>>;
  /**  Delete a single Role item by ID.  */
  deleteRole?: Maybe<Role>;
  /**  Delete multiple Role items by ID.  */
  deleteRoles?: Maybe<Array<Maybe<Role>>>;
  /**  Delete a single Section item by ID.  */
  deleteSection?: Maybe<Section>;
  /**  Delete multiple Section items by ID.  */
  deleteSections?: Maybe<Array<Maybe<Section>>>;
  /**  Delete a single SellOrder item by ID.  */
  deleteSellOrder?: Maybe<SellOrder>;
  /**  Delete multiple SellOrder items by ID.  */
  deleteSellOrders?: Maybe<Array<Maybe<SellOrder>>>;
  /**  Delete a single ShippingOrder item by ID.  */
  deleteShippingOrder?: Maybe<ShippingOrder>;
  /**  Delete multiple ShippingOrder items by ID.  */
  deleteShippingOrders?: Maybe<Array<Maybe<ShippingOrder>>>;
  /**  Delete a single signUpContent item by ID.  */
  deleteSignUpContent?: Maybe<SignUpContent>;
  /**  Delete multiple signUpContent items by ID.  */
  deleteSignUpContents?: Maybe<Array<Maybe<SignUpContent>>>;
  /**  Delete a single Store item by ID.  */
  deleteStore?: Maybe<Store>;
  /**  Delete multiple Store items by ID.  */
  deleteStores?: Maybe<Array<Maybe<Store>>>;
  /**  Delete a single Tax item by ID.  */
  deleteTax?: Maybe<Tax>;
  /**  Delete multiple Tax items by ID.  */
  deleteTaxes?: Maybe<Array<Maybe<Tax>>>;
  /**  Delete a single User item by ID.  */
  deleteUser?: Maybe<User>;
  /**  Delete multiple User items by ID.  */
  deleteUsers?: Maybe<Array<Maybe<User>>>;
  /**  Delete a single WeekDay item by ID.  */
  deleteWeekDay?: Maybe<WeekDay>;
  /**  Delete multiple WeekDay items by ID.  */
  deleteWeekDays?: Maybe<Array<Maybe<WeekDay>>>;
  /**  Delete a single WorkWithUsRequest item by ID.  */
  deleteWorkWithUsRequest?: Maybe<WorkWithUsRequest>;
  /**  Delete multiple WorkWithUsRequest items by ID.  */
  deleteWorkWithUsRequests?: Maybe<Array<Maybe<WorkWithUsRequest>>>;
  endSession: Scalars['Boolean'];
  redeemUserPasswordResetToken?: Maybe<RedeemUserPasswordResetTokenResult>;
  removeFromCart?: Maybe<RemoveFromCartResponse>;
  sendUserPasswordResetLink?: Maybe<SendUserPasswordResetLinkResult>;
  /**  Update a single Address item by ID.  */
  updateAddress?: Maybe<Address>;
  /**  Update multiple Address items by ID.  */
  updateAddresses?: Maybe<Array<Maybe<Address>>>;
  updateCartAddress?: Maybe<UpdateCartAddressResponse>;
  /**  Update multiple Category items by ID.  */
  updateCategories?: Maybe<Array<Maybe<Category>>>;
  /**  Update a single Category item by ID.  */
  updateCategory?: Maybe<Category>;
  /**  Update multiple City items by ID.  */
  updateCities?: Maybe<Array<Maybe<City>>>;
  /**  Update a single City item by ID.  */
  updateCity?: Maybe<City>;
  /**  Update a single ContactRequest item by ID.  */
  updateContactRequest?: Maybe<ContactRequest>;
  /**  Update multiple ContactRequest items by ID.  */
  updateContactRequests?: Maybe<Array<Maybe<ContactRequest>>>;
  /**  Update multiple Country items by ID.  */
  updateCountries?: Maybe<Array<Maybe<Country>>>;
  /**  Update a single Country item by ID.  */
  updateCountry?: Maybe<Country>;
  /**  Update a single Coupon item by ID.  */
  updateCoupon?: Maybe<Coupon>;
  /**  Update multiple Coupon items by ID.  */
  updateCoupons?: Maybe<Array<Maybe<Coupon>>>;
  /**  Update a single CustomContent item by ID.  */
  updateCustomContent?: Maybe<CustomContent>;
  /**  Update multiple CustomContent items by ID.  */
  updateCustomContents?: Maybe<Array<Maybe<CustomContent>>>;
  /**  Update a single FaqContent item by ID.  */
  updateFaqContent?: Maybe<FaqContent>;
  /**  Update multiple FaqContent items by ID.  */
  updateFaqContents?: Maybe<Array<Maybe<FaqContent>>>;
  /**  Update a single LineItem item by ID.  */
  updateLineItem?: Maybe<LineItem>;
  /**  Update multiple LineItem items by ID.  */
  updateLineItems?: Maybe<Array<Maybe<LineItem>>>;
  /**  Update a single MetaItem item by ID.  */
  updateMetaItem?: Maybe<MetaItem>;
  /**  Update multiple MetaItem items by ID.  */
  updateMetaItems?: Maybe<Array<Maybe<MetaItem>>>;
  /**  Update a single Product item by ID.  */
  updateProduct?: Maybe<Product>;
  /**  Update a single ProductImage item by ID.  */
  updateProductImage?: Maybe<ProductImage>;
  /**  Update multiple ProductImage items by ID.  */
  updateProductImages?: Maybe<Array<Maybe<ProductImage>>>;
  /**  Update multiple Product items by ID.  */
  updateProducts?: Maybe<Array<Maybe<Product>>>;
  /**  Update a single Region item by ID.  */
  updateRegion?: Maybe<Region>;
  /**  Update multiple Region items by ID.  */
  updateRegions?: Maybe<Array<Maybe<Region>>>;
  /**  Update a single Review item by ID.  */
  updateReview?: Maybe<Review>;
  /**  Update multiple Review items by ID.  */
  updateReviews?: Maybe<Array<Maybe<Review>>>;
  /**  Update a single Role item by ID.  */
  updateRole?: Maybe<Role>;
  /**  Update multiple Role items by ID.  */
  updateRoles?: Maybe<Array<Maybe<Role>>>;
  /**  Update a single Section item by ID.  */
  updateSection?: Maybe<Section>;
  /**  Update multiple Section items by ID.  */
  updateSections?: Maybe<Array<Maybe<Section>>>;
  /**  Update a single SellOrder item by ID.  */
  updateSellOrder?: Maybe<SellOrder>;
  /**  Update multiple SellOrder items by ID.  */
  updateSellOrders?: Maybe<Array<Maybe<SellOrder>>>;
  /**  Update a single ShippingOrder item by ID.  */
  updateShippingOrder?: Maybe<ShippingOrder>;
  /**  Update multiple ShippingOrder items by ID.  */
  updateShippingOrders?: Maybe<Array<Maybe<ShippingOrder>>>;
  /**  Update a single signUpContent item by ID.  */
  updateSignUpContent?: Maybe<SignUpContent>;
  /**  Update multiple signUpContent items by ID.  */
  updateSignUpContents?: Maybe<Array<Maybe<SignUpContent>>>;
  /**  Update a single Store item by ID.  */
  updateStore?: Maybe<Store>;
  /**  Update multiple Store items by ID.  */
  updateStores?: Maybe<Array<Maybe<Store>>>;
  /**  Update a single Tax item by ID.  */
  updateTax?: Maybe<Tax>;
  /**  Update multiple Tax items by ID.  */
  updateTaxes?: Maybe<Array<Maybe<Tax>>>;
  /**  Update a single User item by ID.  */
  updateUser?: Maybe<User>;
  /**  Update multiple User items by ID.  */
  updateUsers?: Maybe<Array<Maybe<User>>>;
  /**  Update a single WeekDay item by ID.  */
  updateWeekDay?: Maybe<WeekDay>;
  /**  Update multiple WeekDay items by ID.  */
  updateWeekDays?: Maybe<Array<Maybe<WeekDay>>>;
  /**  Update a single WorkWithUsRequest item by ID.  */
  updateWorkWithUsRequest?: Maybe<WorkWithUsRequest>;
  /**  Update multiple WorkWithUsRequest items by ID.  */
  updateWorkWithUsRequests?: Maybe<Array<Maybe<WorkWithUsRequest>>>;
};


export type MutationAddReviewArgs = {
  comment?: InputMaybe<Scalars['String']>;
  productId: Scalars['ID'];
  score: Scalars['Int'];
};


export type MutationAddToCart2Args = {
  productId: Scalars['ID'];
  quantity: Scalars['Int'];
};


export type MutationAuthenticateUserWithPasswordArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationCheckoutCartArgs = {
  where?: InputMaybe<CheckoutCartWhereInput>;
};


export type MutationCreateAddressArgs = {
  data?: InputMaybe<AddressCreateInput>;
};


export type MutationCreateAddressesArgs = {
  data?: InputMaybe<Array<InputMaybe<AddressesCreateInput>>>;
};


export type MutationCreateCategoriesArgs = {
  data?: InputMaybe<Array<InputMaybe<CategoriesCreateInput>>>;
};


export type MutationCreateCategoryArgs = {
  data?: InputMaybe<CategoryCreateInput>;
};


export type MutationCreateCitiesArgs = {
  data?: InputMaybe<Array<InputMaybe<CitiesCreateInput>>>;
};


export type MutationCreateCityArgs = {
  data?: InputMaybe<CityCreateInput>;
};


export type MutationCreateContactRequestArgs = {
  data?: InputMaybe<ContactRequestCreateInput>;
};


export type MutationCreateContactRequestsArgs = {
  data?: InputMaybe<Array<InputMaybe<ContactRequestsCreateInput>>>;
};


export type MutationCreateCountriesArgs = {
  data?: InputMaybe<Array<InputMaybe<CountriesCreateInput>>>;
};


export type MutationCreateCountryArgs = {
  data?: InputMaybe<CountryCreateInput>;
};


export type MutationCreateCouponArgs = {
  data?: InputMaybe<CouponCreateInput>;
};


export type MutationCreateCouponsArgs = {
  data?: InputMaybe<Array<InputMaybe<CouponsCreateInput>>>;
};


export type MutationCreateCustomContentArgs = {
  data?: InputMaybe<CustomContentCreateInput>;
};


export type MutationCreateCustomContentsArgs = {
  data?: InputMaybe<Array<InputMaybe<CustomContentsCreateInput>>>;
};


export type MutationCreateFaqContentArgs = {
  data?: InputMaybe<FaqContentCreateInput>;
};


export type MutationCreateFaqContentsArgs = {
  data?: InputMaybe<Array<InputMaybe<FaqContentsCreateInput>>>;
};


export type MutationCreateInitialUserArgs = {
  data: CreateInitialUserInput;
};


export type MutationCreateLineItemArgs = {
  data?: InputMaybe<LineItemCreateInput>;
};


export type MutationCreateLineItemsArgs = {
  data?: InputMaybe<Array<InputMaybe<LineItemsCreateInput>>>;
};


export type MutationCreateMetaItemArgs = {
  data?: InputMaybe<MetaItemCreateInput>;
};


export type MutationCreateMetaItemsArgs = {
  data?: InputMaybe<Array<InputMaybe<MetaItemsCreateInput>>>;
};


export type MutationCreateProductArgs = {
  data?: InputMaybe<ProductCreateInput>;
};


export type MutationCreateProductImageArgs = {
  data?: InputMaybe<ProductImageCreateInput>;
};


export type MutationCreateProductImagesArgs = {
  data?: InputMaybe<Array<InputMaybe<ProductImagesCreateInput>>>;
};


export type MutationCreateProductsArgs = {
  data?: InputMaybe<Array<InputMaybe<ProductsCreateInput>>>;
};


export type MutationCreateRegionArgs = {
  data?: InputMaybe<RegionCreateInput>;
};


export type MutationCreateRegionsArgs = {
  data?: InputMaybe<Array<InputMaybe<RegionsCreateInput>>>;
};


export type MutationCreateReviewArgs = {
  data?: InputMaybe<ReviewCreateInput>;
};


export type MutationCreateReviewsArgs = {
  data?: InputMaybe<Array<InputMaybe<ReviewsCreateInput>>>;
};


export type MutationCreateRoleArgs = {
  data?: InputMaybe<RoleCreateInput>;
};


export type MutationCreateRolesArgs = {
  data?: InputMaybe<Array<InputMaybe<RolesCreateInput>>>;
};


export type MutationCreateSectionArgs = {
  data?: InputMaybe<SectionCreateInput>;
};


export type MutationCreateSectionsArgs = {
  data?: InputMaybe<Array<InputMaybe<SectionsCreateInput>>>;
};


export type MutationCreateSellOrderArgs = {
  data?: InputMaybe<SellOrderCreateInput>;
};


export type MutationCreateSellOrdersArgs = {
  data?: InputMaybe<Array<InputMaybe<SellOrdersCreateInput>>>;
};


export type MutationCreateShippingOrderArgs = {
  data?: InputMaybe<ShippingOrderCreateInput>;
};


export type MutationCreateShippingOrdersArgs = {
  data?: InputMaybe<Array<InputMaybe<ShippingOrdersCreateInput>>>;
};


export type MutationCreateSignUpContentArgs = {
  data?: InputMaybe<SignUpContentCreateInput>;
};


export type MutationCreateSignUpContentsArgs = {
  data?: InputMaybe<Array<InputMaybe<SignUpContentsCreateInput>>>;
};


export type MutationCreateStoreArgs = {
  data?: InputMaybe<StoreCreateInput>;
};


export type MutationCreateStoresArgs = {
  data?: InputMaybe<Array<InputMaybe<StoresCreateInput>>>;
};


export type MutationCreateTaxArgs = {
  data?: InputMaybe<TaxCreateInput>;
};


export type MutationCreateTaxesArgs = {
  data?: InputMaybe<Array<InputMaybe<TaxesCreateInput>>>;
};


export type MutationCreateUserArgs = {
  data?: InputMaybe<UserCreateInput>;
};


export type MutationCreateUserAddressArgs = {
  data: CreateUserAddressInput;
};


export type MutationCreateUsersArgs = {
  data?: InputMaybe<Array<InputMaybe<UsersCreateInput>>>;
};


export type MutationCreateWeekDayArgs = {
  data?: InputMaybe<WeekDayCreateInput>;
};


export type MutationCreateWeekDaysArgs = {
  data?: InputMaybe<Array<InputMaybe<WeekDaysCreateInput>>>;
};


export type MutationCreateWorkWithUsRequestArgs = {
  data?: InputMaybe<WorkWithUsRequestCreateInput>;
};


export type MutationCreateWorkWithUsRequestsArgs = {
  data?: InputMaybe<Array<InputMaybe<WorkWithUsRequestsCreateInput>>>;
};


export type MutationDeleteAddressArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteAddressesArgs = {
  ids?: InputMaybe<Array<Scalars['ID']>>;
};


export type MutationDeleteCategoriesArgs = {
  ids?: InputMaybe<Array<Scalars['ID']>>;
};


export type MutationDeleteCategoryArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteCitiesArgs = {
  ids?: InputMaybe<Array<Scalars['ID']>>;
};


export type MutationDeleteCityArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteContactRequestArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteContactRequestsArgs = {
  ids?: InputMaybe<Array<Scalars['ID']>>;
};


export type MutationDeleteCountriesArgs = {
  ids?: InputMaybe<Array<Scalars['ID']>>;
};


export type MutationDeleteCountryArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteCouponArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteCouponsArgs = {
  ids?: InputMaybe<Array<Scalars['ID']>>;
};


export type MutationDeleteCustomContentArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteCustomContentsArgs = {
  ids?: InputMaybe<Array<Scalars['ID']>>;
};


export type MutationDeleteFaqContentArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteFaqContentsArgs = {
  ids?: InputMaybe<Array<Scalars['ID']>>;
};


export type MutationDeleteLineItemArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteLineItemsArgs = {
  ids?: InputMaybe<Array<Scalars['ID']>>;
};


export type MutationDeleteMetaItemArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteMetaItemsArgs = {
  ids?: InputMaybe<Array<Scalars['ID']>>;
};


export type MutationDeleteProductArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteProductImageArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteProductImagesArgs = {
  ids?: InputMaybe<Array<Scalars['ID']>>;
};


export type MutationDeleteProductsArgs = {
  ids?: InputMaybe<Array<Scalars['ID']>>;
};


export type MutationDeleteRegionArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteRegionsArgs = {
  ids?: InputMaybe<Array<Scalars['ID']>>;
};


export type MutationDeleteReviewArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteReviewsArgs = {
  ids?: InputMaybe<Array<Scalars['ID']>>;
};


export type MutationDeleteRoleArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteRolesArgs = {
  ids?: InputMaybe<Array<Scalars['ID']>>;
};


export type MutationDeleteSectionArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteSectionsArgs = {
  ids?: InputMaybe<Array<Scalars['ID']>>;
};


export type MutationDeleteSellOrderArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteSellOrdersArgs = {
  ids?: InputMaybe<Array<Scalars['ID']>>;
};


export type MutationDeleteShippingOrderArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteShippingOrdersArgs = {
  ids?: InputMaybe<Array<Scalars['ID']>>;
};


export type MutationDeleteSignUpContentArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteSignUpContentsArgs = {
  ids?: InputMaybe<Array<Scalars['ID']>>;
};


export type MutationDeleteStoreArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteStoresArgs = {
  ids?: InputMaybe<Array<Scalars['ID']>>;
};


export type MutationDeleteTaxArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteTaxesArgs = {
  ids?: InputMaybe<Array<Scalars['ID']>>;
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersArgs = {
  ids?: InputMaybe<Array<Scalars['ID']>>;
};


export type MutationDeleteWeekDayArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteWeekDaysArgs = {
  ids?: InputMaybe<Array<Scalars['ID']>>;
};


export type MutationDeleteWorkWithUsRequestArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteWorkWithUsRequestsArgs = {
  ids?: InputMaybe<Array<Scalars['ID']>>;
};


export type MutationRedeemUserPasswordResetTokenArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
  token: Scalars['String'];
};


export type MutationRemoveFromCartArgs = {
  lineItemId: Scalars['ID'];
  quantity?: InputMaybe<Scalars['Int']>;
};


export type MutationSendUserPasswordResetLinkArgs = {
  email: Scalars['String'];
};


export type MutationUpdateAddressArgs = {
  data?: InputMaybe<AddressUpdateInput>;
  id: Scalars['ID'];
};


export type MutationUpdateAddressesArgs = {
  data?: InputMaybe<Array<InputMaybe<AddressesUpdateInput>>>;
};


export type MutationUpdateCartAddressArgs = {
  addressId?: InputMaybe<Scalars['ID']>;
  cartId?: InputMaybe<Scalars['ID']>;
};


export type MutationUpdateCategoriesArgs = {
  data?: InputMaybe<Array<InputMaybe<CategoriesUpdateInput>>>;
};


export type MutationUpdateCategoryArgs = {
  data?: InputMaybe<CategoryUpdateInput>;
  id: Scalars['ID'];
};


export type MutationUpdateCitiesArgs = {
  data?: InputMaybe<Array<InputMaybe<CitiesUpdateInput>>>;
};


export type MutationUpdateCityArgs = {
  data?: InputMaybe<CityUpdateInput>;
  id: Scalars['ID'];
};


export type MutationUpdateContactRequestArgs = {
  data?: InputMaybe<ContactRequestUpdateInput>;
  id: Scalars['ID'];
};


export type MutationUpdateContactRequestsArgs = {
  data?: InputMaybe<Array<InputMaybe<ContactRequestsUpdateInput>>>;
};


export type MutationUpdateCountriesArgs = {
  data?: InputMaybe<Array<InputMaybe<CountriesUpdateInput>>>;
};


export type MutationUpdateCountryArgs = {
  data?: InputMaybe<CountryUpdateInput>;
  id: Scalars['ID'];
};


export type MutationUpdateCouponArgs = {
  data?: InputMaybe<CouponUpdateInput>;
  id: Scalars['ID'];
};


export type MutationUpdateCouponsArgs = {
  data?: InputMaybe<Array<InputMaybe<CouponsUpdateInput>>>;
};


export type MutationUpdateCustomContentArgs = {
  data?: InputMaybe<CustomContentUpdateInput>;
  id: Scalars['ID'];
};


export type MutationUpdateCustomContentsArgs = {
  data?: InputMaybe<Array<InputMaybe<CustomContentsUpdateInput>>>;
};


export type MutationUpdateFaqContentArgs = {
  data?: InputMaybe<FaqContentUpdateInput>;
  id: Scalars['ID'];
};


export type MutationUpdateFaqContentsArgs = {
  data?: InputMaybe<Array<InputMaybe<FaqContentsUpdateInput>>>;
};


export type MutationUpdateLineItemArgs = {
  data?: InputMaybe<LineItemUpdateInput>;
  id: Scalars['ID'];
};


export type MutationUpdateLineItemsArgs = {
  data?: InputMaybe<Array<InputMaybe<LineItemsUpdateInput>>>;
};


export type MutationUpdateMetaItemArgs = {
  data?: InputMaybe<MetaItemUpdateInput>;
  id: Scalars['ID'];
};


export type MutationUpdateMetaItemsArgs = {
  data?: InputMaybe<Array<InputMaybe<MetaItemsUpdateInput>>>;
};


export type MutationUpdateProductArgs = {
  data?: InputMaybe<ProductUpdateInput>;
  id: Scalars['ID'];
};


export type MutationUpdateProductImageArgs = {
  data?: InputMaybe<ProductImageUpdateInput>;
  id: Scalars['ID'];
};


export type MutationUpdateProductImagesArgs = {
  data?: InputMaybe<Array<InputMaybe<ProductImagesUpdateInput>>>;
};


export type MutationUpdateProductsArgs = {
  data?: InputMaybe<Array<InputMaybe<ProductsUpdateInput>>>;
};


export type MutationUpdateRegionArgs = {
  data?: InputMaybe<RegionUpdateInput>;
  id: Scalars['ID'];
};


export type MutationUpdateRegionsArgs = {
  data?: InputMaybe<Array<InputMaybe<RegionsUpdateInput>>>;
};


export type MutationUpdateReviewArgs = {
  data?: InputMaybe<ReviewUpdateInput>;
  id: Scalars['ID'];
};


export type MutationUpdateReviewsArgs = {
  data?: InputMaybe<Array<InputMaybe<ReviewsUpdateInput>>>;
};


export type MutationUpdateRoleArgs = {
  data?: InputMaybe<RoleUpdateInput>;
  id: Scalars['ID'];
};


export type MutationUpdateRolesArgs = {
  data?: InputMaybe<Array<InputMaybe<RolesUpdateInput>>>;
};


export type MutationUpdateSectionArgs = {
  data?: InputMaybe<SectionUpdateInput>;
  id: Scalars['ID'];
};


export type MutationUpdateSectionsArgs = {
  data?: InputMaybe<Array<InputMaybe<SectionsUpdateInput>>>;
};


export type MutationUpdateSellOrderArgs = {
  data?: InputMaybe<SellOrderUpdateInput>;
  id: Scalars['ID'];
};


export type MutationUpdateSellOrdersArgs = {
  data?: InputMaybe<Array<InputMaybe<SellOrdersUpdateInput>>>;
};


export type MutationUpdateShippingOrderArgs = {
  data?: InputMaybe<ShippingOrderUpdateInput>;
  id: Scalars['ID'];
};


export type MutationUpdateShippingOrdersArgs = {
  data?: InputMaybe<Array<InputMaybe<ShippingOrdersUpdateInput>>>;
};


export type MutationUpdateSignUpContentArgs = {
  data?: InputMaybe<SignUpContentUpdateInput>;
  id: Scalars['ID'];
};


export type MutationUpdateSignUpContentsArgs = {
  data?: InputMaybe<Array<InputMaybe<SignUpContentsUpdateInput>>>;
};


export type MutationUpdateStoreArgs = {
  data?: InputMaybe<StoreUpdateInput>;
  id: Scalars['ID'];
};


export type MutationUpdateStoresArgs = {
  data?: InputMaybe<Array<InputMaybe<StoresUpdateInput>>>;
};


export type MutationUpdateTaxArgs = {
  data?: InputMaybe<TaxUpdateInput>;
  id: Scalars['ID'];
};


export type MutationUpdateTaxesArgs = {
  data?: InputMaybe<Array<InputMaybe<TaxesUpdateInput>>>;
};


export type MutationUpdateUserArgs = {
  data?: InputMaybe<UserUpdateInput>;
  id: Scalars['ID'];
};


export type MutationUpdateUsersArgs = {
  data?: InputMaybe<Array<InputMaybe<UsersUpdateInput>>>;
};


export type MutationUpdateWeekDayArgs = {
  data?: InputMaybe<WeekDayUpdateInput>;
  id: Scalars['ID'];
};


export type MutationUpdateWeekDaysArgs = {
  data?: InputMaybe<Array<InputMaybe<WeekDaysUpdateInput>>>;
};


export type MutationUpdateWorkWithUsRequestArgs = {
  data?: InputMaybe<WorkWithUsRequestUpdateInput>;
  id: Scalars['ID'];
};


export type MutationUpdateWorkWithUsRequestsArgs = {
  data?: InputMaybe<Array<InputMaybe<WorkWithUsRequestsUpdateInput>>>;
};

export enum PasswordAuthErrorCode {
  Failure = 'FAILURE',
  IdentityNotFound = 'IDENTITY_NOT_FOUND',
  MultipleIdentityMatches = 'MULTIPLE_IDENTITY_MATCHES',
  SecretMismatch = 'SECRET_MISMATCH',
  SecretNotSet = 'SECRET_NOT_SET'
}

export enum PasswordResetRedemptionErrorCode {
  Failure = 'FAILURE',
  IdentityNotFound = 'IDENTITY_NOT_FOUND',
  MultipleIdentityMatches = 'MULTIPLE_IDENTITY_MATCHES',
  TokenExpired = 'TOKEN_EXPIRED',
  TokenMismatch = 'TOKEN_MISMATCH',
  TokenNotSet = 'TOKEN_NOT_SET',
  TokenRedeemed = 'TOKEN_REDEEMED'
}

export enum PasswordResetRequestErrorCode {
  IdentityNotFound = 'IDENTITY_NOT_FOUND',
  MultipleIdentityMatches = 'MULTIPLE_IDENTITY_MATCHES'
}

/**  A keystone list  */
export type Product = {
  __typename?: 'Product';
  _categoryMeta?: Maybe<_QueryMeta>;
  _photoMeta?: Maybe<_QueryMeta>;
  _reviewMeta?: Maybe<_QueryMeta>;
  brand?: Maybe<Scalars['String']>;
  calories100gr?: Maybe<Scalars['Int']>;
  caloriesPer100gr?: Maybe<Scalars['Int']>;
  category: Array<Category>;
  description?: Maybe<Scalars['String']>;
  easyPreparation?: Maybe<Scalars['Boolean']>;
  ecoFriendly?: Maybe<Scalars['Boolean']>;
  greenInpact?: Maybe<Scalars['String']>;
  hasInvima?: Maybe<Scalars['String']>;
  hasNutritionalTable?: Maybe<Scalars['Boolean']>;
  hasTax?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  lifetime?: Maybe<Scalars['Int']>;
  maxStockPerOrder?: Maybe<Scalars['Int']>;
  minStock?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  otherRefrigerationType?: Maybe<Scalars['String']>;
  packageType?: Maybe<Scalars['String']>;
  packageWeight?: Maybe<Scalars['Int']>;
  packingOnGlass?: Maybe<Scalars['Boolean']>;
  photo: Array<ProductImage>;
  price?: Maybe<Scalars['Int']>;
  productionTime?: Maybe<Scalars['Int']>;
  qtyPerPackage?: Maybe<Scalars['Int']>;
  readyForConsumption?: Maybe<Scalars['Boolean']>;
  refrigeration?: Maybe<Scalars['String']>;
  review: Array<Review>;
  salePrice?: Maybe<Scalars['Int']>;
  seals?: Maybe<Scalars['String']>;
  sku?: Maybe<Scalars['String']>;
  sodio?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  stock?: Maybe<Scalars['Int']>;
  store?: Maybe<Store>;
  video?: Maybe<Scalars['String']>;
};


/**  A keystone list  */
export type Product_CategoryMetaArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<SortCategoriesBy>>;
  where?: InputMaybe<CategoryWhereInput>;
};


/**  A keystone list  */
export type Product_PhotoMetaArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<SortProductImagesBy>>;
  where?: InputMaybe<ProductImageWhereInput>;
};


/**  A keystone list  */
export type Product_ReviewMetaArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<SortReviewsBy>>;
  where?: InputMaybe<ReviewWhereInput>;
};


/**  A keystone list  */
export type ProductCategoryArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<SortCategoriesBy>>;
  where?: InputMaybe<CategoryWhereInput>;
};


/**  A keystone list  */
export type ProductPhotoArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<SortProductImagesBy>>;
  where?: InputMaybe<ProductImageWhereInput>;
};


/**  A keystone list  */
export type ProductReviewArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<SortReviewsBy>>;
  where?: InputMaybe<ReviewWhereInput>;
};

export type ProductCreateInput = {
  brand?: InputMaybe<Scalars['String']>;
  calories100gr?: InputMaybe<Scalars['Int']>;
  caloriesPer100gr?: InputMaybe<Scalars['Int']>;
  category?: InputMaybe<CategoryRelateToManyInput>;
  description?: InputMaybe<Scalars['String']>;
  easyPreparation?: InputMaybe<Scalars['Boolean']>;
  ecoFriendly?: InputMaybe<Scalars['Boolean']>;
  greenInpact?: InputMaybe<Scalars['String']>;
  hasInvima?: InputMaybe<Scalars['String']>;
  hasNutritionalTable?: InputMaybe<Scalars['Boolean']>;
  hasTax?: InputMaybe<Scalars['Boolean']>;
  lifetime?: InputMaybe<Scalars['Int']>;
  maxStockPerOrder?: InputMaybe<Scalars['Int']>;
  minStock?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  otherRefrigerationType?: InputMaybe<Scalars['String']>;
  packageType?: InputMaybe<Scalars['String']>;
  packageWeight?: InputMaybe<Scalars['Int']>;
  packingOnGlass?: InputMaybe<Scalars['Boolean']>;
  photo?: InputMaybe<ProductImageRelateToManyInput>;
  price?: InputMaybe<Scalars['Int']>;
  productionTime?: InputMaybe<Scalars['Int']>;
  qtyPerPackage?: InputMaybe<Scalars['Int']>;
  readyForConsumption?: InputMaybe<Scalars['Boolean']>;
  refrigeration?: InputMaybe<Scalars['String']>;
  review?: InputMaybe<ReviewRelateToManyInput>;
  salePrice?: InputMaybe<Scalars['Int']>;
  seals?: InputMaybe<Scalars['String']>;
  sku?: InputMaybe<Scalars['String']>;
  sodio?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['String']>;
  stock?: InputMaybe<Scalars['Int']>;
  store?: InputMaybe<StoreRelateToOneInput>;
  video?: InputMaybe<Scalars['String']>;
};

/**  A keystone list  */
export type ProductImage = {
  __typename?: 'ProductImage';
  altText?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: Maybe<CloudinaryImage_File>;
  product?: Maybe<Product>;
};

export type ProductImageCreateInput = {
  altText?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['Upload']>;
  product?: InputMaybe<ProductRelateToOneInput>;
};

export type ProductImageRelateToManyInput = {
  connect?: InputMaybe<Array<InputMaybe<ProductImageWhereUniqueInput>>>;
  create?: InputMaybe<Array<InputMaybe<ProductImageCreateInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<ProductImageWhereUniqueInput>>>;
  disconnectAll?: InputMaybe<Scalars['Boolean']>;
};

export type ProductImageUpdateInput = {
  altText?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['Upload']>;
  product?: InputMaybe<ProductRelateToOneInput>;
};

export type ProductImageWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<ProductImageWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<ProductImageWhereInput>>>;
  altText?: InputMaybe<Scalars['String']>;
  altText_contains?: InputMaybe<Scalars['String']>;
  altText_contains_i?: InputMaybe<Scalars['String']>;
  altText_ends_with?: InputMaybe<Scalars['String']>;
  altText_ends_with_i?: InputMaybe<Scalars['String']>;
  altText_i?: InputMaybe<Scalars['String']>;
  altText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  altText_not?: InputMaybe<Scalars['String']>;
  altText_not_contains?: InputMaybe<Scalars['String']>;
  altText_not_contains_i?: InputMaybe<Scalars['String']>;
  altText_not_ends_with?: InputMaybe<Scalars['String']>;
  altText_not_ends_with_i?: InputMaybe<Scalars['String']>;
  altText_not_i?: InputMaybe<Scalars['String']>;
  altText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  altText_not_starts_with?: InputMaybe<Scalars['String']>;
  altText_not_starts_with_i?: InputMaybe<Scalars['String']>;
  altText_starts_with?: InputMaybe<Scalars['String']>;
  altText_starts_with_i?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  image?: InputMaybe<Scalars['String']>;
  image_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  image_not?: InputMaybe<Scalars['String']>;
  image_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  product?: InputMaybe<ProductWhereInput>;
  product_is_null?: InputMaybe<Scalars['Boolean']>;
};

export type ProductImageWhereUniqueInput = {
  id: Scalars['ID'];
};

export type ProductImagesCreateInput = {
  data?: InputMaybe<ProductImageCreateInput>;
};

export type ProductImagesUpdateInput = {
  data?: InputMaybe<ProductImageUpdateInput>;
  id: Scalars['ID'];
};

export type ProductRelateToManyInput = {
  connect?: InputMaybe<Array<InputMaybe<ProductWhereUniqueInput>>>;
  create?: InputMaybe<Array<InputMaybe<ProductCreateInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<ProductWhereUniqueInput>>>;
  disconnectAll?: InputMaybe<Scalars['Boolean']>;
};

export type ProductRelateToOneInput = {
  connect?: InputMaybe<ProductWhereUniqueInput>;
  create?: InputMaybe<ProductCreateInput>;
  disconnect?: InputMaybe<ProductWhereUniqueInput>;
  disconnectAll?: InputMaybe<Scalars['Boolean']>;
};

export type ProductUpdateInput = {
  brand?: InputMaybe<Scalars['String']>;
  calories100gr?: InputMaybe<Scalars['Int']>;
  caloriesPer100gr?: InputMaybe<Scalars['Int']>;
  category?: InputMaybe<CategoryRelateToManyInput>;
  description?: InputMaybe<Scalars['String']>;
  easyPreparation?: InputMaybe<Scalars['Boolean']>;
  ecoFriendly?: InputMaybe<Scalars['Boolean']>;
  greenInpact?: InputMaybe<Scalars['String']>;
  hasInvima?: InputMaybe<Scalars['String']>;
  hasNutritionalTable?: InputMaybe<Scalars['Boolean']>;
  hasTax?: InputMaybe<Scalars['Boolean']>;
  lifetime?: InputMaybe<Scalars['Int']>;
  maxStockPerOrder?: InputMaybe<Scalars['Int']>;
  minStock?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  otherRefrigerationType?: InputMaybe<Scalars['String']>;
  packageType?: InputMaybe<Scalars['String']>;
  packageWeight?: InputMaybe<Scalars['Int']>;
  packingOnGlass?: InputMaybe<Scalars['Boolean']>;
  photo?: InputMaybe<ProductImageRelateToManyInput>;
  price?: InputMaybe<Scalars['Int']>;
  productionTime?: InputMaybe<Scalars['Int']>;
  qtyPerPackage?: InputMaybe<Scalars['Int']>;
  readyForConsumption?: InputMaybe<Scalars['Boolean']>;
  refrigeration?: InputMaybe<Scalars['String']>;
  review?: InputMaybe<ReviewRelateToManyInput>;
  salePrice?: InputMaybe<Scalars['Int']>;
  seals?: InputMaybe<Scalars['String']>;
  sku?: InputMaybe<Scalars['String']>;
  sodio?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['String']>;
  stock?: InputMaybe<Scalars['Int']>;
  store?: InputMaybe<StoreRelateToOneInput>;
  video?: InputMaybe<Scalars['String']>;
};

export type ProductWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<ProductWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<ProductWhereInput>>>;
  brand?: InputMaybe<Scalars['String']>;
  brand_contains?: InputMaybe<Scalars['String']>;
  brand_contains_i?: InputMaybe<Scalars['String']>;
  brand_ends_with?: InputMaybe<Scalars['String']>;
  brand_ends_with_i?: InputMaybe<Scalars['String']>;
  brand_i?: InputMaybe<Scalars['String']>;
  brand_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  brand_not?: InputMaybe<Scalars['String']>;
  brand_not_contains?: InputMaybe<Scalars['String']>;
  brand_not_contains_i?: InputMaybe<Scalars['String']>;
  brand_not_ends_with?: InputMaybe<Scalars['String']>;
  brand_not_ends_with_i?: InputMaybe<Scalars['String']>;
  brand_not_i?: InputMaybe<Scalars['String']>;
  brand_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  brand_not_starts_with?: InputMaybe<Scalars['String']>;
  brand_not_starts_with_i?: InputMaybe<Scalars['String']>;
  brand_starts_with?: InputMaybe<Scalars['String']>;
  brand_starts_with_i?: InputMaybe<Scalars['String']>;
  calories100gr?: InputMaybe<Scalars['Int']>;
  calories100gr_gt?: InputMaybe<Scalars['Int']>;
  calories100gr_gte?: InputMaybe<Scalars['Int']>;
  calories100gr_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  calories100gr_lt?: InputMaybe<Scalars['Int']>;
  calories100gr_lte?: InputMaybe<Scalars['Int']>;
  calories100gr_not?: InputMaybe<Scalars['Int']>;
  calories100gr_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  caloriesPer100gr?: InputMaybe<Scalars['Int']>;
  caloriesPer100gr_gt?: InputMaybe<Scalars['Int']>;
  caloriesPer100gr_gte?: InputMaybe<Scalars['Int']>;
  caloriesPer100gr_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  caloriesPer100gr_lt?: InputMaybe<Scalars['Int']>;
  caloriesPer100gr_lte?: InputMaybe<Scalars['Int']>;
  caloriesPer100gr_not?: InputMaybe<Scalars['Int']>;
  caloriesPer100gr_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /**  condition must be true for all nodes  */
  category_every?: InputMaybe<CategoryWhereInput>;
  /**  condition must be false for all nodes  */
  category_none?: InputMaybe<CategoryWhereInput>;
  /**  condition must be true for at least 1 node  */
  category_some?: InputMaybe<CategoryWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_contains_i?: InputMaybe<Scalars['String']>;
  description_ends_with?: InputMaybe<Scalars['String']>;
  description_ends_with_i?: InputMaybe<Scalars['String']>;
  description_i?: InputMaybe<Scalars['String']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_contains_i?: InputMaybe<Scalars['String']>;
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  description_not_ends_with_i?: InputMaybe<Scalars['String']>;
  description_not_i?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  description_not_starts_with_i?: InputMaybe<Scalars['String']>;
  description_starts_with?: InputMaybe<Scalars['String']>;
  description_starts_with_i?: InputMaybe<Scalars['String']>;
  easyPreparation?: InputMaybe<Scalars['Boolean']>;
  easyPreparation_not?: InputMaybe<Scalars['Boolean']>;
  ecoFriendly?: InputMaybe<Scalars['Boolean']>;
  ecoFriendly_not?: InputMaybe<Scalars['Boolean']>;
  greenInpact?: InputMaybe<Scalars['String']>;
  greenInpact_contains?: InputMaybe<Scalars['String']>;
  greenInpact_contains_i?: InputMaybe<Scalars['String']>;
  greenInpact_ends_with?: InputMaybe<Scalars['String']>;
  greenInpact_ends_with_i?: InputMaybe<Scalars['String']>;
  greenInpact_i?: InputMaybe<Scalars['String']>;
  greenInpact_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  greenInpact_not?: InputMaybe<Scalars['String']>;
  greenInpact_not_contains?: InputMaybe<Scalars['String']>;
  greenInpact_not_contains_i?: InputMaybe<Scalars['String']>;
  greenInpact_not_ends_with?: InputMaybe<Scalars['String']>;
  greenInpact_not_ends_with_i?: InputMaybe<Scalars['String']>;
  greenInpact_not_i?: InputMaybe<Scalars['String']>;
  greenInpact_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  greenInpact_not_starts_with?: InputMaybe<Scalars['String']>;
  greenInpact_not_starts_with_i?: InputMaybe<Scalars['String']>;
  greenInpact_starts_with?: InputMaybe<Scalars['String']>;
  greenInpact_starts_with_i?: InputMaybe<Scalars['String']>;
  hasInvima?: InputMaybe<Scalars['String']>;
  hasInvima_contains?: InputMaybe<Scalars['String']>;
  hasInvima_contains_i?: InputMaybe<Scalars['String']>;
  hasInvima_ends_with?: InputMaybe<Scalars['String']>;
  hasInvima_ends_with_i?: InputMaybe<Scalars['String']>;
  hasInvima_i?: InputMaybe<Scalars['String']>;
  hasInvima_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  hasInvima_not?: InputMaybe<Scalars['String']>;
  hasInvima_not_contains?: InputMaybe<Scalars['String']>;
  hasInvima_not_contains_i?: InputMaybe<Scalars['String']>;
  hasInvima_not_ends_with?: InputMaybe<Scalars['String']>;
  hasInvima_not_ends_with_i?: InputMaybe<Scalars['String']>;
  hasInvima_not_i?: InputMaybe<Scalars['String']>;
  hasInvima_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  hasInvima_not_starts_with?: InputMaybe<Scalars['String']>;
  hasInvima_not_starts_with_i?: InputMaybe<Scalars['String']>;
  hasInvima_starts_with?: InputMaybe<Scalars['String']>;
  hasInvima_starts_with_i?: InputMaybe<Scalars['String']>;
  hasNutritionalTable?: InputMaybe<Scalars['Boolean']>;
  hasNutritionalTable_not?: InputMaybe<Scalars['Boolean']>;
  hasTax?: InputMaybe<Scalars['Boolean']>;
  hasTax_not?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  lifetime?: InputMaybe<Scalars['Int']>;
  lifetime_gt?: InputMaybe<Scalars['Int']>;
  lifetime_gte?: InputMaybe<Scalars['Int']>;
  lifetime_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lifetime_lt?: InputMaybe<Scalars['Int']>;
  lifetime_lte?: InputMaybe<Scalars['Int']>;
  lifetime_not?: InputMaybe<Scalars['Int']>;
  lifetime_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  maxStockPerOrder?: InputMaybe<Scalars['Int']>;
  maxStockPerOrder_gt?: InputMaybe<Scalars['Int']>;
  maxStockPerOrder_gte?: InputMaybe<Scalars['Int']>;
  maxStockPerOrder_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  maxStockPerOrder_lt?: InputMaybe<Scalars['Int']>;
  maxStockPerOrder_lte?: InputMaybe<Scalars['Int']>;
  maxStockPerOrder_not?: InputMaybe<Scalars['Int']>;
  maxStockPerOrder_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  minStock?: InputMaybe<Scalars['Int']>;
  minStock_gt?: InputMaybe<Scalars['Int']>;
  minStock_gte?: InputMaybe<Scalars['Int']>;
  minStock_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  minStock_lt?: InputMaybe<Scalars['Int']>;
  minStock_lte?: InputMaybe<Scalars['Int']>;
  minStock_not?: InputMaybe<Scalars['Int']>;
  minStock_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_i?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_i?: InputMaybe<Scalars['String']>;
  name_i?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_i?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_i?: InputMaybe<Scalars['String']>;
  name_not_i?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_i?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_i?: InputMaybe<Scalars['String']>;
  otherRefrigerationType?: InputMaybe<Scalars['String']>;
  otherRefrigerationType_contains?: InputMaybe<Scalars['String']>;
  otherRefrigerationType_contains_i?: InputMaybe<Scalars['String']>;
  otherRefrigerationType_ends_with?: InputMaybe<Scalars['String']>;
  otherRefrigerationType_ends_with_i?: InputMaybe<Scalars['String']>;
  otherRefrigerationType_i?: InputMaybe<Scalars['String']>;
  otherRefrigerationType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  otherRefrigerationType_not?: InputMaybe<Scalars['String']>;
  otherRefrigerationType_not_contains?: InputMaybe<Scalars['String']>;
  otherRefrigerationType_not_contains_i?: InputMaybe<Scalars['String']>;
  otherRefrigerationType_not_ends_with?: InputMaybe<Scalars['String']>;
  otherRefrigerationType_not_ends_with_i?: InputMaybe<Scalars['String']>;
  otherRefrigerationType_not_i?: InputMaybe<Scalars['String']>;
  otherRefrigerationType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  otherRefrigerationType_not_starts_with?: InputMaybe<Scalars['String']>;
  otherRefrigerationType_not_starts_with_i?: InputMaybe<Scalars['String']>;
  otherRefrigerationType_starts_with?: InputMaybe<Scalars['String']>;
  otherRefrigerationType_starts_with_i?: InputMaybe<Scalars['String']>;
  packageType?: InputMaybe<Scalars['String']>;
  packageType_contains?: InputMaybe<Scalars['String']>;
  packageType_contains_i?: InputMaybe<Scalars['String']>;
  packageType_ends_with?: InputMaybe<Scalars['String']>;
  packageType_ends_with_i?: InputMaybe<Scalars['String']>;
  packageType_i?: InputMaybe<Scalars['String']>;
  packageType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  packageType_not?: InputMaybe<Scalars['String']>;
  packageType_not_contains?: InputMaybe<Scalars['String']>;
  packageType_not_contains_i?: InputMaybe<Scalars['String']>;
  packageType_not_ends_with?: InputMaybe<Scalars['String']>;
  packageType_not_ends_with_i?: InputMaybe<Scalars['String']>;
  packageType_not_i?: InputMaybe<Scalars['String']>;
  packageType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  packageType_not_starts_with?: InputMaybe<Scalars['String']>;
  packageType_not_starts_with_i?: InputMaybe<Scalars['String']>;
  packageType_starts_with?: InputMaybe<Scalars['String']>;
  packageType_starts_with_i?: InputMaybe<Scalars['String']>;
  packageWeight?: InputMaybe<Scalars['Int']>;
  packageWeight_gt?: InputMaybe<Scalars['Int']>;
  packageWeight_gte?: InputMaybe<Scalars['Int']>;
  packageWeight_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  packageWeight_lt?: InputMaybe<Scalars['Int']>;
  packageWeight_lte?: InputMaybe<Scalars['Int']>;
  packageWeight_not?: InputMaybe<Scalars['Int']>;
  packageWeight_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  packingOnGlass?: InputMaybe<Scalars['Boolean']>;
  packingOnGlass_not?: InputMaybe<Scalars['Boolean']>;
  /**  condition must be true for all nodes  */
  photo_every?: InputMaybe<ProductImageWhereInput>;
  /**  condition must be false for all nodes  */
  photo_none?: InputMaybe<ProductImageWhereInput>;
  /**  condition must be true for at least 1 node  */
  photo_some?: InputMaybe<ProductImageWhereInput>;
  price?: InputMaybe<Scalars['Int']>;
  price_gt?: InputMaybe<Scalars['Int']>;
  price_gte?: InputMaybe<Scalars['Int']>;
  price_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  price_lt?: InputMaybe<Scalars['Int']>;
  price_lte?: InputMaybe<Scalars['Int']>;
  price_not?: InputMaybe<Scalars['Int']>;
  price_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  productionTime?: InputMaybe<Scalars['Int']>;
  productionTime_gt?: InputMaybe<Scalars['Int']>;
  productionTime_gte?: InputMaybe<Scalars['Int']>;
  productionTime_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  productionTime_lt?: InputMaybe<Scalars['Int']>;
  productionTime_lte?: InputMaybe<Scalars['Int']>;
  productionTime_not?: InputMaybe<Scalars['Int']>;
  productionTime_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  qtyPerPackage?: InputMaybe<Scalars['Int']>;
  qtyPerPackage_gt?: InputMaybe<Scalars['Int']>;
  qtyPerPackage_gte?: InputMaybe<Scalars['Int']>;
  qtyPerPackage_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  qtyPerPackage_lt?: InputMaybe<Scalars['Int']>;
  qtyPerPackage_lte?: InputMaybe<Scalars['Int']>;
  qtyPerPackage_not?: InputMaybe<Scalars['Int']>;
  qtyPerPackage_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  readyForConsumption?: InputMaybe<Scalars['Boolean']>;
  readyForConsumption_not?: InputMaybe<Scalars['Boolean']>;
  refrigeration?: InputMaybe<Scalars['String']>;
  refrigeration_contains?: InputMaybe<Scalars['String']>;
  refrigeration_contains_i?: InputMaybe<Scalars['String']>;
  refrigeration_ends_with?: InputMaybe<Scalars['String']>;
  refrigeration_ends_with_i?: InputMaybe<Scalars['String']>;
  refrigeration_i?: InputMaybe<Scalars['String']>;
  refrigeration_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  refrigeration_not?: InputMaybe<Scalars['String']>;
  refrigeration_not_contains?: InputMaybe<Scalars['String']>;
  refrigeration_not_contains_i?: InputMaybe<Scalars['String']>;
  refrigeration_not_ends_with?: InputMaybe<Scalars['String']>;
  refrigeration_not_ends_with_i?: InputMaybe<Scalars['String']>;
  refrigeration_not_i?: InputMaybe<Scalars['String']>;
  refrigeration_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  refrigeration_not_starts_with?: InputMaybe<Scalars['String']>;
  refrigeration_not_starts_with_i?: InputMaybe<Scalars['String']>;
  refrigeration_starts_with?: InputMaybe<Scalars['String']>;
  refrigeration_starts_with_i?: InputMaybe<Scalars['String']>;
  /**  condition must be true for all nodes  */
  review_every?: InputMaybe<ReviewWhereInput>;
  /**  condition must be false for all nodes  */
  review_none?: InputMaybe<ReviewWhereInput>;
  /**  condition must be true for at least 1 node  */
  review_some?: InputMaybe<ReviewWhereInput>;
  salePrice?: InputMaybe<Scalars['Int']>;
  salePrice_gt?: InputMaybe<Scalars['Int']>;
  salePrice_gte?: InputMaybe<Scalars['Int']>;
  salePrice_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  salePrice_lt?: InputMaybe<Scalars['Int']>;
  salePrice_lte?: InputMaybe<Scalars['Int']>;
  salePrice_not?: InputMaybe<Scalars['Int']>;
  salePrice_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  seals?: InputMaybe<Scalars['String']>;
  seals_contains?: InputMaybe<Scalars['String']>;
  seals_contains_i?: InputMaybe<Scalars['String']>;
  seals_ends_with?: InputMaybe<Scalars['String']>;
  seals_ends_with_i?: InputMaybe<Scalars['String']>;
  seals_i?: InputMaybe<Scalars['String']>;
  seals_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  seals_not?: InputMaybe<Scalars['String']>;
  seals_not_contains?: InputMaybe<Scalars['String']>;
  seals_not_contains_i?: InputMaybe<Scalars['String']>;
  seals_not_ends_with?: InputMaybe<Scalars['String']>;
  seals_not_ends_with_i?: InputMaybe<Scalars['String']>;
  seals_not_i?: InputMaybe<Scalars['String']>;
  seals_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  seals_not_starts_with?: InputMaybe<Scalars['String']>;
  seals_not_starts_with_i?: InputMaybe<Scalars['String']>;
  seals_starts_with?: InputMaybe<Scalars['String']>;
  seals_starts_with_i?: InputMaybe<Scalars['String']>;
  sku?: InputMaybe<Scalars['String']>;
  sku_contains?: InputMaybe<Scalars['String']>;
  sku_contains_i?: InputMaybe<Scalars['String']>;
  sku_ends_with?: InputMaybe<Scalars['String']>;
  sku_ends_with_i?: InputMaybe<Scalars['String']>;
  sku_i?: InputMaybe<Scalars['String']>;
  sku_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sku_not?: InputMaybe<Scalars['String']>;
  sku_not_contains?: InputMaybe<Scalars['String']>;
  sku_not_contains_i?: InputMaybe<Scalars['String']>;
  sku_not_ends_with?: InputMaybe<Scalars['String']>;
  sku_not_ends_with_i?: InputMaybe<Scalars['String']>;
  sku_not_i?: InputMaybe<Scalars['String']>;
  sku_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sku_not_starts_with?: InputMaybe<Scalars['String']>;
  sku_not_starts_with_i?: InputMaybe<Scalars['String']>;
  sku_starts_with?: InputMaybe<Scalars['String']>;
  sku_starts_with_i?: InputMaybe<Scalars['String']>;
  sodio?: InputMaybe<Scalars['Int']>;
  sodio_gt?: InputMaybe<Scalars['Int']>;
  sodio_gte?: InputMaybe<Scalars['Int']>;
  sodio_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sodio_lt?: InputMaybe<Scalars['Int']>;
  sodio_lte?: InputMaybe<Scalars['Int']>;
  sodio_not?: InputMaybe<Scalars['Int']>;
  sodio_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  status?: InputMaybe<Scalars['String']>;
  status_contains?: InputMaybe<Scalars['String']>;
  status_contains_i?: InputMaybe<Scalars['String']>;
  status_ends_with?: InputMaybe<Scalars['String']>;
  status_ends_with_i?: InputMaybe<Scalars['String']>;
  status_i?: InputMaybe<Scalars['String']>;
  status_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status_not?: InputMaybe<Scalars['String']>;
  status_not_contains?: InputMaybe<Scalars['String']>;
  status_not_contains_i?: InputMaybe<Scalars['String']>;
  status_not_ends_with?: InputMaybe<Scalars['String']>;
  status_not_ends_with_i?: InputMaybe<Scalars['String']>;
  status_not_i?: InputMaybe<Scalars['String']>;
  status_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  status_not_starts_with?: InputMaybe<Scalars['String']>;
  status_not_starts_with_i?: InputMaybe<Scalars['String']>;
  status_starts_with?: InputMaybe<Scalars['String']>;
  status_starts_with_i?: InputMaybe<Scalars['String']>;
  stock?: InputMaybe<Scalars['Int']>;
  stock_gt?: InputMaybe<Scalars['Int']>;
  stock_gte?: InputMaybe<Scalars['Int']>;
  stock_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  stock_lt?: InputMaybe<Scalars['Int']>;
  stock_lte?: InputMaybe<Scalars['Int']>;
  stock_not?: InputMaybe<Scalars['Int']>;
  stock_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  store?: InputMaybe<StoreWhereInput>;
  store_is_null?: InputMaybe<Scalars['Boolean']>;
  video?: InputMaybe<Scalars['String']>;
  video_contains?: InputMaybe<Scalars['String']>;
  video_contains_i?: InputMaybe<Scalars['String']>;
  video_ends_with?: InputMaybe<Scalars['String']>;
  video_ends_with_i?: InputMaybe<Scalars['String']>;
  video_i?: InputMaybe<Scalars['String']>;
  video_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  video_not?: InputMaybe<Scalars['String']>;
  video_not_contains?: InputMaybe<Scalars['String']>;
  video_not_contains_i?: InputMaybe<Scalars['String']>;
  video_not_ends_with?: InputMaybe<Scalars['String']>;
  video_not_ends_with_i?: InputMaybe<Scalars['String']>;
  video_not_i?: InputMaybe<Scalars['String']>;
  video_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  video_not_starts_with?: InputMaybe<Scalars['String']>;
  video_not_starts_with_i?: InputMaybe<Scalars['String']>;
  video_starts_with?: InputMaybe<Scalars['String']>;
  video_starts_with_i?: InputMaybe<Scalars['String']>;
};

export type ProductWhereUniqueInput = {
  id: Scalars['ID'];
};

export type ProductsCreateInput = {
  data?: InputMaybe<ProductCreateInput>;
};

export type ProductsUpdateInput = {
  data?: InputMaybe<ProductUpdateInput>;
  id: Scalars['ID'];
};

export type Query = {
  __typename?: 'Query';
  /**  Search for the Address item with the matching ID.  */
  Address?: Maybe<Address>;
  CartPrice?: Maybe<CartPrice>;
  /**  Search for the Category item with the matching ID.  */
  Category?: Maybe<Category>;
  /**  Search for the City item with the matching ID.  */
  City?: Maybe<City>;
  Configuration?: Maybe<Configuration>;
  /**  Search for the ContactRequest item with the matching ID.  */
  ContactRequest?: Maybe<ContactRequest>;
  /**  Search for the Country item with the matching ID.  */
  Country?: Maybe<Country>;
  /**  Search for the Coupon item with the matching ID.  */
  Coupon?: Maybe<Coupon>;
  /**  Search for the CustomContent item with the matching ID.  */
  CustomContent?: Maybe<CustomContent>;
  /**  Search for the FaqContent item with the matching ID.  */
  FaqContent?: Maybe<FaqContent>;
  /**  Search for the LineItem item with the matching ID.  */
  LineItem?: Maybe<LineItem>;
  /**  Search for the MetaItem item with the matching ID.  */
  MetaItem?: Maybe<MetaItem>;
  /**  Search for the Product item with the matching ID.  */
  Product?: Maybe<Product>;
  /**  Search for the ProductImage item with the matching ID.  */
  ProductImage?: Maybe<ProductImage>;
  /**  Search for the Region item with the matching ID.  */
  Region?: Maybe<Region>;
  /**  Search for the Review item with the matching ID.  */
  Review?: Maybe<Review>;
  /**  Search for the Role item with the matching ID.  */
  Role?: Maybe<Role>;
  /**  Search for the Section item with the matching ID.  */
  Section?: Maybe<Section>;
  /**  Search for the SellOrder item with the matching ID.  */
  SellOrder?: Maybe<SellOrder>;
  Shipping?: Maybe<Shipping>;
  /**  Search for the ShippingOrder item with the matching ID.  */
  ShippingOrder?: Maybe<ShippingOrder>;
  /**  Search for the signUpContent item with the matching ID.  */
  SignUpContent?: Maybe<SignUpContent>;
  /**  Search for the Store item with the matching ID.  */
  Store?: Maybe<Store>;
  /**  Search for the Tax item with the matching ID.  */
  Tax?: Maybe<Tax>;
  /**  Search for the User item with the matching ID.  */
  User?: Maybe<User>;
  /**  Search for the WeekDay item with the matching ID.  */
  WeekDay?: Maybe<WeekDay>;
  /**  Search for the WorkWithUsRequest item with the matching ID.  */
  WorkWithUsRequest?: Maybe<WorkWithUsRequest>;
  /**  Retrieve the meta-data for the Address list.  */
  _AddressesMeta?: Maybe<_ListMeta>;
  /**  Retrieve the meta-data for the Category list.  */
  _CategoriesMeta?: Maybe<_ListMeta>;
  /**  Retrieve the meta-data for the City list.  */
  _CitiesMeta?: Maybe<_ListMeta>;
  /**  Retrieve the meta-data for the ContactRequest list.  */
  _ContactRequestsMeta?: Maybe<_ListMeta>;
  /**  Retrieve the meta-data for the Country list.  */
  _CountriesMeta?: Maybe<_ListMeta>;
  /**  Retrieve the meta-data for the Coupon list.  */
  _CouponsMeta?: Maybe<_ListMeta>;
  /**  Retrieve the meta-data for the CustomContent list.  */
  _CustomContentsMeta?: Maybe<_ListMeta>;
  /**  Retrieve the meta-data for the FaqContent list.  */
  _FaqContentsMeta?: Maybe<_ListMeta>;
  /**  Retrieve the meta-data for the LineItem list.  */
  _LineItemsMeta?: Maybe<_ListMeta>;
  /**  Retrieve the meta-data for the MetaItem list.  */
  _MetaItemsMeta?: Maybe<_ListMeta>;
  /**  Retrieve the meta-data for the ProductImage list.  */
  _ProductImagesMeta?: Maybe<_ListMeta>;
  /**  Retrieve the meta-data for the Product list.  */
  _ProductsMeta?: Maybe<_ListMeta>;
  /**  Retrieve the meta-data for the Region list.  */
  _RegionsMeta?: Maybe<_ListMeta>;
  /**  Retrieve the meta-data for the Review list.  */
  _ReviewsMeta?: Maybe<_ListMeta>;
  /**  Retrieve the meta-data for the Role list.  */
  _RolesMeta?: Maybe<_ListMeta>;
  /**  Retrieve the meta-data for the Section list.  */
  _SectionsMeta?: Maybe<_ListMeta>;
  /**  Retrieve the meta-data for the SellOrder list.  */
  _SellOrdersMeta?: Maybe<_ListMeta>;
  /**  Retrieve the meta-data for the ShippingOrder list.  */
  _ShippingOrdersMeta?: Maybe<_ListMeta>;
  /**  Retrieve the meta-data for the SignUpContent list.  */
  _SignUpContentsMeta?: Maybe<_ListMeta>;
  /**  Retrieve the meta-data for the Store list.  */
  _StoresMeta?: Maybe<_ListMeta>;
  /**  Retrieve the meta-data for the Tax list.  */
  _TaxesMeta?: Maybe<_ListMeta>;
  /**  Retrieve the meta-data for the User list.  */
  _UsersMeta?: Maybe<_ListMeta>;
  /**  Retrieve the meta-data for the WeekDay list.  */
  _WeekDaysMeta?: Maybe<_ListMeta>;
  /**  Retrieve the meta-data for the WorkWithUsRequest list.  */
  _WorkWithUsRequestsMeta?: Maybe<_ListMeta>;
  /**  Perform a meta-query on all Address items which match the where clause.  */
  _allAddressesMeta?: Maybe<_QueryMeta>;
  /**  Perform a meta-query on all Category items which match the where clause.  */
  _allCategoriesMeta?: Maybe<_QueryMeta>;
  /**  Perform a meta-query on all City items which match the where clause.  */
  _allCitiesMeta?: Maybe<_QueryMeta>;
  /**  Perform a meta-query on all ContactRequest items which match the where clause.  */
  _allContactRequestsMeta?: Maybe<_QueryMeta>;
  /**  Perform a meta-query on all Country items which match the where clause.  */
  _allCountriesMeta?: Maybe<_QueryMeta>;
  /**  Perform a meta-query on all Coupon items which match the where clause.  */
  _allCouponsMeta?: Maybe<_QueryMeta>;
  /**  Perform a meta-query on all CustomContent items which match the where clause.  */
  _allCustomContentsMeta?: Maybe<_QueryMeta>;
  /**  Perform a meta-query on all FaqContent items which match the where clause.  */
  _allFaqContentsMeta?: Maybe<_QueryMeta>;
  /**  Perform a meta-query on all LineItem items which match the where clause.  */
  _allLineItemsMeta?: Maybe<_QueryMeta>;
  /**  Perform a meta-query on all MetaItem items which match the where clause.  */
  _allMetaItemsMeta?: Maybe<_QueryMeta>;
  /**  Perform a meta-query on all ProductImage items which match the where clause.  */
  _allProductImagesMeta?: Maybe<_QueryMeta>;
  /**  Perform a meta-query on all Product items which match the where clause.  */
  _allProductsMeta?: Maybe<_QueryMeta>;
  /**  Perform a meta-query on all Region items which match the where clause.  */
  _allRegionsMeta?: Maybe<_QueryMeta>;
  /**  Perform a meta-query on all Review items which match the where clause.  */
  _allReviewsMeta?: Maybe<_QueryMeta>;
  /**  Perform a meta-query on all Role items which match the where clause.  */
  _allRolesMeta?: Maybe<_QueryMeta>;
  /**  Perform a meta-query on all Section items which match the where clause.  */
  _allSectionsMeta?: Maybe<_QueryMeta>;
  /**  Perform a meta-query on all SellOrder items which match the where clause.  */
  _allSellOrdersMeta?: Maybe<_QueryMeta>;
  /**  Perform a meta-query on all ShippingOrder items which match the where clause.  */
  _allShippingOrdersMeta?: Maybe<_QueryMeta>;
  /**  Perform a meta-query on all signUpContent items which match the where clause.  */
  _allSignUpContentsMeta?: Maybe<_QueryMeta>;
  /**  Perform a meta-query on all Store items which match the where clause.  */
  _allStoresMeta?: Maybe<_QueryMeta>;
  /**  Perform a meta-query on all Tax items which match the where clause.  */
  _allTaxesMeta?: Maybe<_QueryMeta>;
  /**  Perform a meta-query on all User items which match the where clause.  */
  _allUsersMeta?: Maybe<_QueryMeta>;
  /**  Perform a meta-query on all WeekDay items which match the where clause.  */
  _allWeekDaysMeta?: Maybe<_QueryMeta>;
  /**  Perform a meta-query on all WorkWithUsRequest items which match the where clause.  */
  _allWorkWithUsRequestsMeta?: Maybe<_QueryMeta>;
  /**  Retrieve the meta-data for all lists.  */
  _ksListsMeta?: Maybe<Array<Maybe<_ListMeta>>>;
  /**  Search for all Address items which match the where clause.  */
  allAddresses?: Maybe<Array<Maybe<Address>>>;
  /**  Search for all Category items which match the where clause.  */
  allCategories?: Maybe<Array<Maybe<Category>>>;
  /**  Search for all City items which match the where clause.  */
  allCities?: Maybe<Array<Maybe<City>>>;
  /**  Search for all ContactRequest items which match the where clause.  */
  allContactRequests?: Maybe<Array<Maybe<ContactRequest>>>;
  /**  Search for all Country items which match the where clause.  */
  allCountries?: Maybe<Array<Maybe<Country>>>;
  /**  Search for all Coupon items which match the where clause.  */
  allCoupons?: Maybe<Array<Maybe<Coupon>>>;
  /**  Search for all CustomContent items which match the where clause.  */
  allCustomContents?: Maybe<Array<Maybe<CustomContent>>>;
  /**  Search for all FaqContent items which match the where clause.  */
  allFaqContents?: Maybe<Array<Maybe<FaqContent>>>;
  /**  Search for all LineItem items which match the where clause.  */
  allLineItems?: Maybe<Array<Maybe<LineItem>>>;
  /**  Search for all MetaItem items which match the where clause.  */
  allMetaItems?: Maybe<Array<Maybe<MetaItem>>>;
  /**  Search for all ProductImage items which match the where clause.  */
  allProductImages?: Maybe<Array<Maybe<ProductImage>>>;
  /**  Search for all Product items which match the where clause.  */
  allProducts?: Maybe<Array<Maybe<Product>>>;
  /**  Search for all Region items which match the where clause.  */
  allRegions?: Maybe<Array<Maybe<Region>>>;
  /**  Search for all Review items which match the where clause.  */
  allReviews?: Maybe<Array<Maybe<Review>>>;
  /**  Search for all Role items which match the where clause.  */
  allRoles?: Maybe<Array<Maybe<Role>>>;
  /**  Search for all Section items which match the where clause.  */
  allSections?: Maybe<Array<Maybe<Section>>>;
  /**  Search for all SellOrder items which match the where clause.  */
  allSellOrders?: Maybe<Array<Maybe<SellOrder>>>;
  /**  Search for all ShippingOrder items which match the where clause.  */
  allShippingOrders?: Maybe<Array<Maybe<ShippingOrder>>>;
  /**  Search for all signUpContent items which match the where clause.  */
  allSignUpContents?: Maybe<Array<Maybe<SignUpContent>>>;
  /**  Search for all Store items which match the where clause.  */
  allStores?: Maybe<Array<Maybe<Store>>>;
  /**  Search for all Tax items which match the where clause.  */
  allTaxes?: Maybe<Array<Maybe<Tax>>>;
  /**  Search for all User items which match the where clause.  */
  allUsers?: Maybe<Array<Maybe<User>>>;
  /**  Search for all WeekDay items which match the where clause.  */
  allWeekDays?: Maybe<Array<Maybe<WeekDay>>>;
  /**  Search for all WorkWithUsRequest items which match the where clause.  */
  allWorkWithUsRequests?: Maybe<Array<Maybe<WorkWithUsRequest>>>;
  /** The version of the Keystone application serving this API. */
  appVersion?: Maybe<Scalars['String']>;
  authenticatedItem?: Maybe<AuthenticatedItem>;
  keystone: KeystoneMeta;
  validateUserPasswordResetToken?: Maybe<ValidateUserPasswordResetTokenResult>;
};


export type QueryAddressArgs = {
  where: AddressWhereUniqueInput;
};


export type QueryCartPriceArgs = {
  where?: InputMaybe<CartPriceWhereInput>;
};


export type QueryCategoryArgs = {
  where: CategoryWhereUniqueInput;
};


export type QueryCityArgs = {
  where: CityWhereUniqueInput;
};


export type QueryContactRequestArgs = {
  where: ContactRequestWhereUniqueInput;
};


export type QueryCountryArgs = {
  where: CountryWhereUniqueInput;
};


export type QueryCouponArgs = {
  where: CouponWhereUniqueInput;
};


export type QueryCustomContentArgs = {
  where: CustomContentWhereUniqueInput;
};


export type QueryFaqContentArgs = {
  where: FaqContentWhereUniqueInput;
};


export type QueryLineItemArgs = {
  where: LineItemWhereUniqueInput;
};


export type QueryMetaItemArgs = {
  where: MetaItemWhereUniqueInput;
};


export type QueryProductArgs = {
  where: ProductWhereUniqueInput;
};


export type QueryProductImageArgs = {
  where: ProductImageWhereUniqueInput;
};


export type QueryRegionArgs = {
  where: RegionWhereUniqueInput;
};


export type QueryReviewArgs = {
  where: ReviewWhereUniqueInput;
};


export type QueryRoleArgs = {
  where: RoleWhereUniqueInput;
};


export type QuerySectionArgs = {
  where: SectionWhereUniqueInput;
};


export type QuerySellOrderArgs = {
  where: SellOrderWhereUniqueInput;
};


export type QueryShippingArgs = {
  where: ShippingWhereInput;
};


export type QueryShippingOrderArgs = {
  where: ShippingOrderWhereUniqueInput;
};


export type QuerySignUpContentArgs = {
  where: SignUpContentWhereUniqueInput;
};


export type QueryStoreArgs = {
  where: StoreWhereUniqueInput;
};


export type QueryTaxArgs = {
  where: TaxWhereUniqueInput;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryWeekDayArgs = {
  where: WeekDayWhereUniqueInput;
};


export type QueryWorkWithUsRequestArgs = {
  where: WorkWithUsRequestWhereUniqueInput;
};


export type Query_AllAddressesMetaArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<SortAddressesBy>>;
  where?: InputMaybe<AddressWhereInput>;
};


export type Query_AllCategoriesMetaArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<SortCategoriesBy>>;
  where?: InputMaybe<CategoryWhereInput>;
};


export type Query_AllCitiesMetaArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<SortCitiesBy>>;
  where?: InputMaybe<CityWhereInput>;
};


export type Query_AllContactRequestsMetaArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<SortContactRequestsBy>>;
  where?: InputMaybe<ContactRequestWhereInput>;
};


export type Query_AllCountriesMetaArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<SortCountriesBy>>;
  where?: InputMaybe<CountryWhereInput>;
};


export type Query_AllCouponsMetaArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<SortCouponsBy>>;
  where?: InputMaybe<CouponWhereInput>;
};


export type Query_AllCustomContentsMetaArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<SortCustomContentsBy>>;
  where?: InputMaybe<CustomContentWhereInput>;
};


export type Query_AllFaqContentsMetaArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<SortFaqContentsBy>>;
  where?: InputMaybe<FaqContentWhereInput>;
};


export type Query_AllLineItemsMetaArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<SortLineItemsBy>>;
  where?: InputMaybe<LineItemWhereInput>;
};


export type Query_AllMetaItemsMetaArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<SortMetaItemsBy>>;
  where?: InputMaybe<MetaItemWhereInput>;
};


export type Query_AllProductImagesMetaArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<SortProductImagesBy>>;
  where?: InputMaybe<ProductImageWhereInput>;
};


export type Query_AllProductsMetaArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<SortProductsBy>>;
  where?: InputMaybe<ProductWhereInput>;
};


export type Query_AllRegionsMetaArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<SortRegionsBy>>;
  where?: InputMaybe<RegionWhereInput>;
};


export type Query_AllReviewsMetaArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<SortReviewsBy>>;
  where?: InputMaybe<ReviewWhereInput>;
};


export type Query_AllRolesMetaArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<SortRolesBy>>;
  where?: InputMaybe<RoleWhereInput>;
};


export type Query_AllSectionsMetaArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<SortSectionsBy>>;
  where?: InputMaybe<SectionWhereInput>;
};


export type Query_AllSellOrdersMetaArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<SortSellOrdersBy>>;
  where?: InputMaybe<SellOrderWhereInput>;
};


export type Query_AllShippingOrdersMetaArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<SortShippingOrdersBy>>;
  where?: InputMaybe<ShippingOrderWhereInput>;
};


export type Query_AllSignUpContentsMetaArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<SortSignUpContentsBy>>;
  where?: InputMaybe<SignUpContentWhereInput>;
};


export type Query_AllStoresMetaArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<SortStoresBy>>;
  where?: InputMaybe<StoreWhereInput>;
};


export type Query_AllTaxesMetaArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<SortTaxesBy>>;
  where?: InputMaybe<TaxWhereInput>;
};


export type Query_AllUsersMetaArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<SortUsersBy>>;
  where?: InputMaybe<UserWhereInput>;
};


export type Query_AllWeekDaysMetaArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<SortWeekDaysBy>>;
  where?: InputMaybe<WeekDayWhereInput>;
};


export type Query_AllWorkWithUsRequestsMetaArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<SortWorkWithUsRequestsBy>>;
  where?: InputMaybe<WorkWithUsRequestWhereInput>;
};


export type Query_KsListsMetaArgs = {
  where?: InputMaybe<_KsListsMetaInput>;
};


export type QueryAllAddressesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<SortAddressesBy>>;
  where?: InputMaybe<AddressWhereInput>;
};


export type QueryAllCategoriesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<SortCategoriesBy>>;
  where?: InputMaybe<CategoryWhereInput>;
};


export type QueryAllCitiesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<SortCitiesBy>>;
  where?: InputMaybe<CityWhereInput>;
};


export type QueryAllContactRequestsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<SortContactRequestsBy>>;
  where?: InputMaybe<ContactRequestWhereInput>;
};


export type QueryAllCountriesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<SortCountriesBy>>;
  where?: InputMaybe<CountryWhereInput>;
};


export type QueryAllCouponsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<SortCouponsBy>>;
  where?: InputMaybe<CouponWhereInput>;
};


export type QueryAllCustomContentsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<SortCustomContentsBy>>;
  where?: InputMaybe<CustomContentWhereInput>;
};


export type QueryAllFaqContentsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<SortFaqContentsBy>>;
  where?: InputMaybe<FaqContentWhereInput>;
};


export type QueryAllLineItemsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<SortLineItemsBy>>;
  where?: InputMaybe<LineItemWhereInput>;
};


export type QueryAllMetaItemsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<SortMetaItemsBy>>;
  where?: InputMaybe<MetaItemWhereInput>;
};


export type QueryAllProductImagesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<SortProductImagesBy>>;
  where?: InputMaybe<ProductImageWhereInput>;
};


export type QueryAllProductsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<SortProductsBy>>;
  where?: InputMaybe<ProductWhereInput>;
};


export type QueryAllRegionsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<SortRegionsBy>>;
  where?: InputMaybe<RegionWhereInput>;
};


export type QueryAllReviewsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<SortReviewsBy>>;
  where?: InputMaybe<ReviewWhereInput>;
};


export type QueryAllRolesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<SortRolesBy>>;
  where?: InputMaybe<RoleWhereInput>;
};


export type QueryAllSectionsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<SortSectionsBy>>;
  where?: InputMaybe<SectionWhereInput>;
};


export type QueryAllSellOrdersArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<SortSellOrdersBy>>;
  where?: InputMaybe<SellOrderWhereInput>;
};


export type QueryAllShippingOrdersArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<SortShippingOrdersBy>>;
  where?: InputMaybe<ShippingOrderWhereInput>;
};


export type QueryAllSignUpContentsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<SortSignUpContentsBy>>;
  where?: InputMaybe<SignUpContentWhereInput>;
};


export type QueryAllStoresArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<SortStoresBy>>;
  where?: InputMaybe<StoreWhereInput>;
};


export type QueryAllTaxesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<SortTaxesBy>>;
  where?: InputMaybe<TaxWhereInput>;
};


export type QueryAllUsersArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<SortUsersBy>>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryAllWeekDaysArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<SortWeekDaysBy>>;
  where?: InputMaybe<WeekDayWhereInput>;
};


export type QueryAllWorkWithUsRequestsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<SortWorkWithUsRequestsBy>>;
  where?: InputMaybe<WorkWithUsRequestWhereInput>;
};


export type QueryValidateUserPasswordResetTokenArgs = {
  email: Scalars['String'];
  token: Scalars['String'];
};

export type RedeemUserPasswordResetTokenResult = {
  __typename?: 'RedeemUserPasswordResetTokenResult';
  code: PasswordResetRedemptionErrorCode;
  message: Scalars['String'];
};

/**  A keystone list  */
export type Region = {
  __typename?: 'Region';
  _citiesMeta?: Maybe<_QueryMeta>;
  cities: Array<City>;
  country?: Maybe<Country>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  shortName?: Maybe<Scalars['String']>;
};


/**  A keystone list  */
export type Region_CitiesMetaArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<SortCitiesBy>>;
  where?: InputMaybe<CityWhereInput>;
};


/**  A keystone list  */
export type RegionCitiesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<SortCitiesBy>>;
  where?: InputMaybe<CityWhereInput>;
};

export type RegionCreateInput = {
  cities?: InputMaybe<CityRelateToManyInput>;
  country?: InputMaybe<CountryRelateToOneInput>;
  name?: InputMaybe<Scalars['String']>;
  shortName?: InputMaybe<Scalars['String']>;
};

export type RegionRelateToManyInput = {
  connect?: InputMaybe<Array<InputMaybe<RegionWhereUniqueInput>>>;
  create?: InputMaybe<Array<InputMaybe<RegionCreateInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<RegionWhereUniqueInput>>>;
  disconnectAll?: InputMaybe<Scalars['Boolean']>;
};

export type RegionRelateToOneInput = {
  connect?: InputMaybe<RegionWhereUniqueInput>;
  create?: InputMaybe<RegionCreateInput>;
  disconnect?: InputMaybe<RegionWhereUniqueInput>;
  disconnectAll?: InputMaybe<Scalars['Boolean']>;
};

export type RegionUpdateInput = {
  cities?: InputMaybe<CityRelateToManyInput>;
  country?: InputMaybe<CountryRelateToOneInput>;
  name?: InputMaybe<Scalars['String']>;
  shortName?: InputMaybe<Scalars['String']>;
};

export type RegionWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<RegionWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<RegionWhereInput>>>;
  /**  condition must be true for all nodes  */
  cities_every?: InputMaybe<CityWhereInput>;
  /**  condition must be false for all nodes  */
  cities_none?: InputMaybe<CityWhereInput>;
  /**  condition must be true for at least 1 node  */
  cities_some?: InputMaybe<CityWhereInput>;
  country?: InputMaybe<CountryWhereInput>;
  country_is_null?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_i?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_i?: InputMaybe<Scalars['String']>;
  name_i?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_i?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_i?: InputMaybe<Scalars['String']>;
  name_not_i?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_i?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_i?: InputMaybe<Scalars['String']>;
  shortName?: InputMaybe<Scalars['String']>;
  shortName_contains?: InputMaybe<Scalars['String']>;
  shortName_contains_i?: InputMaybe<Scalars['String']>;
  shortName_ends_with?: InputMaybe<Scalars['String']>;
  shortName_ends_with_i?: InputMaybe<Scalars['String']>;
  shortName_i?: InputMaybe<Scalars['String']>;
  shortName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  shortName_not?: InputMaybe<Scalars['String']>;
  shortName_not_contains?: InputMaybe<Scalars['String']>;
  shortName_not_contains_i?: InputMaybe<Scalars['String']>;
  shortName_not_ends_with?: InputMaybe<Scalars['String']>;
  shortName_not_ends_with_i?: InputMaybe<Scalars['String']>;
  shortName_not_i?: InputMaybe<Scalars['String']>;
  shortName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  shortName_not_starts_with?: InputMaybe<Scalars['String']>;
  shortName_not_starts_with_i?: InputMaybe<Scalars['String']>;
  shortName_starts_with?: InputMaybe<Scalars['String']>;
  shortName_starts_with_i?: InputMaybe<Scalars['String']>;
};

export type RegionWhereUniqueInput = {
  id: Scalars['ID'];
};

export type RegionsCreateInput = {
  data?: InputMaybe<RegionCreateInput>;
};

export type RegionsUpdateInput = {
  data?: InputMaybe<RegionUpdateInput>;
  id: Scalars['ID'];
};

export type RemoveFromCartResponse = {
  __typename?: 'RemoveFromCartResponse';
  lineItem: LineItem;
  lineItemDeleted: Scalars['Boolean'];
  storeUpdated: Scalars['Boolean'];
};

/**  A keystone list  */
export type Review = {
  __typename?: 'Review';
  comments?: Maybe<Scalars['String']>;
  dateCreated?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  points?: Maybe<Scalars['String']>;
  product?: Maybe<Product>;
  user?: Maybe<User>;
  visible?: Maybe<Scalars['Boolean']>;
};

export type ReviewCreateInput = {
  comments?: InputMaybe<Scalars['String']>;
  dateCreated?: InputMaybe<Scalars['String']>;
  points?: InputMaybe<Scalars['String']>;
  product?: InputMaybe<ProductRelateToOneInput>;
  user?: InputMaybe<UserRelateToOneInput>;
  visible?: InputMaybe<Scalars['Boolean']>;
};

export type ReviewRelateToManyInput = {
  connect?: InputMaybe<Array<InputMaybe<ReviewWhereUniqueInput>>>;
  create?: InputMaybe<Array<InputMaybe<ReviewCreateInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<ReviewWhereUniqueInput>>>;
  disconnectAll?: InputMaybe<Scalars['Boolean']>;
};

export type ReviewUpdateInput = {
  comments?: InputMaybe<Scalars['String']>;
  dateCreated?: InputMaybe<Scalars['String']>;
  points?: InputMaybe<Scalars['String']>;
  product?: InputMaybe<ProductRelateToOneInput>;
  user?: InputMaybe<UserRelateToOneInput>;
  visible?: InputMaybe<Scalars['Boolean']>;
};

export type ReviewWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<ReviewWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<ReviewWhereInput>>>;
  comments?: InputMaybe<Scalars['String']>;
  comments_contains?: InputMaybe<Scalars['String']>;
  comments_contains_i?: InputMaybe<Scalars['String']>;
  comments_ends_with?: InputMaybe<Scalars['String']>;
  comments_ends_with_i?: InputMaybe<Scalars['String']>;
  comments_i?: InputMaybe<Scalars['String']>;
  comments_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  comments_not?: InputMaybe<Scalars['String']>;
  comments_not_contains?: InputMaybe<Scalars['String']>;
  comments_not_contains_i?: InputMaybe<Scalars['String']>;
  comments_not_ends_with?: InputMaybe<Scalars['String']>;
  comments_not_ends_with_i?: InputMaybe<Scalars['String']>;
  comments_not_i?: InputMaybe<Scalars['String']>;
  comments_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  comments_not_starts_with?: InputMaybe<Scalars['String']>;
  comments_not_starts_with_i?: InputMaybe<Scalars['String']>;
  comments_starts_with?: InputMaybe<Scalars['String']>;
  comments_starts_with_i?: InputMaybe<Scalars['String']>;
  dateCreated?: InputMaybe<Scalars['String']>;
  dateCreated_gt?: InputMaybe<Scalars['String']>;
  dateCreated_gte?: InputMaybe<Scalars['String']>;
  dateCreated_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateCreated_lt?: InputMaybe<Scalars['String']>;
  dateCreated_lte?: InputMaybe<Scalars['String']>;
  dateCreated_not?: InputMaybe<Scalars['String']>;
  dateCreated_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  points?: InputMaybe<Scalars['String']>;
  points_contains?: InputMaybe<Scalars['String']>;
  points_contains_i?: InputMaybe<Scalars['String']>;
  points_ends_with?: InputMaybe<Scalars['String']>;
  points_ends_with_i?: InputMaybe<Scalars['String']>;
  points_i?: InputMaybe<Scalars['String']>;
  points_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  points_not?: InputMaybe<Scalars['String']>;
  points_not_contains?: InputMaybe<Scalars['String']>;
  points_not_contains_i?: InputMaybe<Scalars['String']>;
  points_not_ends_with?: InputMaybe<Scalars['String']>;
  points_not_ends_with_i?: InputMaybe<Scalars['String']>;
  points_not_i?: InputMaybe<Scalars['String']>;
  points_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  points_not_starts_with?: InputMaybe<Scalars['String']>;
  points_not_starts_with_i?: InputMaybe<Scalars['String']>;
  points_starts_with?: InputMaybe<Scalars['String']>;
  points_starts_with_i?: InputMaybe<Scalars['String']>;
  product?: InputMaybe<ProductWhereInput>;
  product_is_null?: InputMaybe<Scalars['Boolean']>;
  user?: InputMaybe<UserWhereInput>;
  user_is_null?: InputMaybe<Scalars['Boolean']>;
  visible?: InputMaybe<Scalars['Boolean']>;
  visible_not?: InputMaybe<Scalars['Boolean']>;
};

export type ReviewWhereUniqueInput = {
  id: Scalars['ID'];
};

export type ReviewsCreateInput = {
  data?: InputMaybe<ReviewCreateInput>;
};

export type ReviewsUpdateInput = {
  data?: InputMaybe<ReviewUpdateInput>;
  id: Scalars['ID'];
};

/**  A keystone list  */
export type Role = {
  __typename?: 'Role';
  _assignedToMeta?: Maybe<_QueryMeta>;
  assignedTo: Array<User>;
  canManageAddress?: Maybe<Scalars['Boolean']>;
  canManageCart?: Maybe<Scalars['Boolean']>;
  canManageOrders?: Maybe<Scalars['Boolean']>;
  canManageProducts?: Maybe<Scalars['Boolean']>;
  canManageRoles?: Maybe<Scalars['Boolean']>;
  canManageUsers?: Maybe<Scalars['Boolean']>;
  canSeeOtherUsers?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  isAdmin?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
};


/**  A keystone list  */
export type Role_AssignedToMetaArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<SortUsersBy>>;
  where?: InputMaybe<UserWhereInput>;
};


/**  A keystone list  */
export type RoleAssignedToArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<SortUsersBy>>;
  where?: InputMaybe<UserWhereInput>;
};

export type RoleCreateInput = {
  assignedTo?: InputMaybe<UserRelateToManyInput>;
  canManageAddress?: InputMaybe<Scalars['Boolean']>;
  canManageCart?: InputMaybe<Scalars['Boolean']>;
  canManageOrders?: InputMaybe<Scalars['Boolean']>;
  canManageProducts?: InputMaybe<Scalars['Boolean']>;
  canManageRoles?: InputMaybe<Scalars['Boolean']>;
  canManageUsers?: InputMaybe<Scalars['Boolean']>;
  canSeeOtherUsers?: InputMaybe<Scalars['Boolean']>;
  isAdmin?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
};

export type RoleRelateToOneInput = {
  connect?: InputMaybe<RoleWhereUniqueInput>;
  create?: InputMaybe<RoleCreateInput>;
  disconnect?: InputMaybe<RoleWhereUniqueInput>;
  disconnectAll?: InputMaybe<Scalars['Boolean']>;
};

export type RoleUpdateInput = {
  assignedTo?: InputMaybe<UserRelateToManyInput>;
  canManageAddress?: InputMaybe<Scalars['Boolean']>;
  canManageCart?: InputMaybe<Scalars['Boolean']>;
  canManageOrders?: InputMaybe<Scalars['Boolean']>;
  canManageProducts?: InputMaybe<Scalars['Boolean']>;
  canManageRoles?: InputMaybe<Scalars['Boolean']>;
  canManageUsers?: InputMaybe<Scalars['Boolean']>;
  canSeeOtherUsers?: InputMaybe<Scalars['Boolean']>;
  isAdmin?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
};

export type RoleWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<RoleWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<RoleWhereInput>>>;
  /**  condition must be true for all nodes  */
  assignedTo_every?: InputMaybe<UserWhereInput>;
  /**  condition must be false for all nodes  */
  assignedTo_none?: InputMaybe<UserWhereInput>;
  /**  condition must be true for at least 1 node  */
  assignedTo_some?: InputMaybe<UserWhereInput>;
  canManageAddress?: InputMaybe<Scalars['Boolean']>;
  canManageAddress_not?: InputMaybe<Scalars['Boolean']>;
  canManageCart?: InputMaybe<Scalars['Boolean']>;
  canManageCart_not?: InputMaybe<Scalars['Boolean']>;
  canManageOrders?: InputMaybe<Scalars['Boolean']>;
  canManageOrders_not?: InputMaybe<Scalars['Boolean']>;
  canManageProducts?: InputMaybe<Scalars['Boolean']>;
  canManageProducts_not?: InputMaybe<Scalars['Boolean']>;
  canManageRoles?: InputMaybe<Scalars['Boolean']>;
  canManageRoles_not?: InputMaybe<Scalars['Boolean']>;
  canManageUsers?: InputMaybe<Scalars['Boolean']>;
  canManageUsers_not?: InputMaybe<Scalars['Boolean']>;
  canSeeOtherUsers?: InputMaybe<Scalars['Boolean']>;
  canSeeOtherUsers_not?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  isAdmin?: InputMaybe<Scalars['Boolean']>;
  isAdmin_not?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_i?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_i?: InputMaybe<Scalars['String']>;
  name_i?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_i?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_i?: InputMaybe<Scalars['String']>;
  name_not_i?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_i?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_i?: InputMaybe<Scalars['String']>;
};

export type RoleWhereUniqueInput = {
  id: Scalars['ID'];
};

export type RolesCreateInput = {
  data?: InputMaybe<RoleCreateInput>;
};

export type RolesUpdateInput = {
  data?: InputMaybe<RoleUpdateInput>;
  id: Scalars['ID'];
};

/**  A keystone list  */
export type Section = {
  __typename?: 'Section';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};

export type SectionCreateInput = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type SectionRelateToManyInput = {
  connect?: InputMaybe<Array<InputMaybe<SectionWhereUniqueInput>>>;
  create?: InputMaybe<Array<InputMaybe<SectionCreateInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<SectionWhereUniqueInput>>>;
  disconnectAll?: InputMaybe<Scalars['Boolean']>;
};

export type SectionUpdateInput = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type SectionWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<SectionWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<SectionWhereInput>>>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_contains_i?: InputMaybe<Scalars['String']>;
  description_ends_with?: InputMaybe<Scalars['String']>;
  description_ends_with_i?: InputMaybe<Scalars['String']>;
  description_i?: InputMaybe<Scalars['String']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_contains_i?: InputMaybe<Scalars['String']>;
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  description_not_ends_with_i?: InputMaybe<Scalars['String']>;
  description_not_i?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  description_not_starts_with_i?: InputMaybe<Scalars['String']>;
  description_starts_with?: InputMaybe<Scalars['String']>;
  description_starts_with_i?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_i?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_i?: InputMaybe<Scalars['String']>;
  name_i?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_i?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_i?: InputMaybe<Scalars['String']>;
  name_not_i?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_i?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_i?: InputMaybe<Scalars['String']>;
};

export type SectionWhereUniqueInput = {
  id: Scalars['ID'];
};

export type SectionsCreateInput = {
  data?: InputMaybe<SectionCreateInput>;
};

export type SectionsUpdateInput = {
  data?: InputMaybe<SectionUpdateInput>;
  id: Scalars['ID'];
};

/**  A keystone list  */
export type SellOrder = {
  __typename?: 'SellOrder';
  _couponsMeta?: Maybe<_QueryMeta>;
  _lineItemMeta?: Maybe<_QueryMeta>;
  address?: Maybe<Address>;
  checkedPrice?: Maybe<Scalars['Int']>;
  coupons: Array<Coupon>;
  id: Scalars['ID'];
  lineItem: Array<LineItem>;
  message?: Maybe<Scalars['String']>;
  shippingOrder?: Maybe<ShippingOrder>;
  siigoId?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  store?: Maybe<Store>;
  user?: Maybe<User>;
};


/**  A keystone list  */
export type SellOrder_CouponsMetaArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<SortCouponsBy>>;
  where?: InputMaybe<CouponWhereInput>;
};


/**  A keystone list  */
export type SellOrder_LineItemMetaArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<SortLineItemsBy>>;
  where?: InputMaybe<LineItemWhereInput>;
};


/**  A keystone list  */
export type SellOrderCouponsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<SortCouponsBy>>;
  where?: InputMaybe<CouponWhereInput>;
};


/**  A keystone list  */
export type SellOrderLineItemArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<SortLineItemsBy>>;
  where?: InputMaybe<LineItemWhereInput>;
};

export type SellOrderCreateInput = {
  address?: InputMaybe<AddressRelateToOneInput>;
  checkedPrice?: InputMaybe<Scalars['Int']>;
  coupons?: InputMaybe<CouponRelateToManyInput>;
  lineItem?: InputMaybe<LineItemRelateToManyInput>;
  message?: InputMaybe<Scalars['String']>;
  shippingOrder?: InputMaybe<ShippingOrderRelateToOneInput>;
  siigoId?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  store?: InputMaybe<StoreRelateToOneInput>;
  user?: InputMaybe<UserRelateToOneInput>;
};

export type SellOrderRelateToManyInput = {
  connect?: InputMaybe<Array<InputMaybe<SellOrderWhereUniqueInput>>>;
  create?: InputMaybe<Array<InputMaybe<SellOrderCreateInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<SellOrderWhereUniqueInput>>>;
  disconnectAll?: InputMaybe<Scalars['Boolean']>;
};

export type SellOrderRelateToOneInput = {
  connect?: InputMaybe<SellOrderWhereUniqueInput>;
  create?: InputMaybe<SellOrderCreateInput>;
  disconnect?: InputMaybe<SellOrderWhereUniqueInput>;
  disconnectAll?: InputMaybe<Scalars['Boolean']>;
};

export type SellOrderUpdateInput = {
  address?: InputMaybe<AddressRelateToOneInput>;
  checkedPrice?: InputMaybe<Scalars['Int']>;
  coupons?: InputMaybe<CouponRelateToManyInput>;
  lineItem?: InputMaybe<LineItemRelateToManyInput>;
  message?: InputMaybe<Scalars['String']>;
  shippingOrder?: InputMaybe<ShippingOrderRelateToOneInput>;
  siigoId?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  store?: InputMaybe<StoreRelateToOneInput>;
  user?: InputMaybe<UserRelateToOneInput>;
};

export type SellOrderWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<SellOrderWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<SellOrderWhereInput>>>;
  address?: InputMaybe<AddressWhereInput>;
  address_is_null?: InputMaybe<Scalars['Boolean']>;
  checkedPrice?: InputMaybe<Scalars['Int']>;
  checkedPrice_gt?: InputMaybe<Scalars['Int']>;
  checkedPrice_gte?: InputMaybe<Scalars['Int']>;
  checkedPrice_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  checkedPrice_lt?: InputMaybe<Scalars['Int']>;
  checkedPrice_lte?: InputMaybe<Scalars['Int']>;
  checkedPrice_not?: InputMaybe<Scalars['Int']>;
  checkedPrice_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /**  condition must be true for all nodes  */
  coupons_every?: InputMaybe<CouponWhereInput>;
  /**  condition must be false for all nodes  */
  coupons_none?: InputMaybe<CouponWhereInput>;
  /**  condition must be true for at least 1 node  */
  coupons_some?: InputMaybe<CouponWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /**  condition must be true for all nodes  */
  lineItem_every?: InputMaybe<LineItemWhereInput>;
  /**  condition must be false for all nodes  */
  lineItem_none?: InputMaybe<LineItemWhereInput>;
  /**  condition must be true for at least 1 node  */
  lineItem_some?: InputMaybe<LineItemWhereInput>;
  message?: InputMaybe<Scalars['String']>;
  message_contains?: InputMaybe<Scalars['String']>;
  message_contains_i?: InputMaybe<Scalars['String']>;
  message_ends_with?: InputMaybe<Scalars['String']>;
  message_ends_with_i?: InputMaybe<Scalars['String']>;
  message_i?: InputMaybe<Scalars['String']>;
  message_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  message_not?: InputMaybe<Scalars['String']>;
  message_not_contains?: InputMaybe<Scalars['String']>;
  message_not_contains_i?: InputMaybe<Scalars['String']>;
  message_not_ends_with?: InputMaybe<Scalars['String']>;
  message_not_ends_with_i?: InputMaybe<Scalars['String']>;
  message_not_i?: InputMaybe<Scalars['String']>;
  message_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  message_not_starts_with?: InputMaybe<Scalars['String']>;
  message_not_starts_with_i?: InputMaybe<Scalars['String']>;
  message_starts_with?: InputMaybe<Scalars['String']>;
  message_starts_with_i?: InputMaybe<Scalars['String']>;
  shippingOrder?: InputMaybe<ShippingOrderWhereInput>;
  shippingOrder_is_null?: InputMaybe<Scalars['Boolean']>;
  siigoId?: InputMaybe<Scalars['String']>;
  siigoId_contains?: InputMaybe<Scalars['String']>;
  siigoId_contains_i?: InputMaybe<Scalars['String']>;
  siigoId_ends_with?: InputMaybe<Scalars['String']>;
  siigoId_ends_with_i?: InputMaybe<Scalars['String']>;
  siigoId_i?: InputMaybe<Scalars['String']>;
  siigoId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siigoId_not?: InputMaybe<Scalars['String']>;
  siigoId_not_contains?: InputMaybe<Scalars['String']>;
  siigoId_not_contains_i?: InputMaybe<Scalars['String']>;
  siigoId_not_ends_with?: InputMaybe<Scalars['String']>;
  siigoId_not_ends_with_i?: InputMaybe<Scalars['String']>;
  siigoId_not_i?: InputMaybe<Scalars['String']>;
  siigoId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siigoId_not_starts_with?: InputMaybe<Scalars['String']>;
  siigoId_not_starts_with_i?: InputMaybe<Scalars['String']>;
  siigoId_starts_with?: InputMaybe<Scalars['String']>;
  siigoId_starts_with_i?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  state_contains?: InputMaybe<Scalars['String']>;
  state_contains_i?: InputMaybe<Scalars['String']>;
  state_ends_with?: InputMaybe<Scalars['String']>;
  state_ends_with_i?: InputMaybe<Scalars['String']>;
  state_i?: InputMaybe<Scalars['String']>;
  state_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  state_not?: InputMaybe<Scalars['String']>;
  state_not_contains?: InputMaybe<Scalars['String']>;
  state_not_contains_i?: InputMaybe<Scalars['String']>;
  state_not_ends_with?: InputMaybe<Scalars['String']>;
  state_not_ends_with_i?: InputMaybe<Scalars['String']>;
  state_not_i?: InputMaybe<Scalars['String']>;
  state_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  state_not_starts_with?: InputMaybe<Scalars['String']>;
  state_not_starts_with_i?: InputMaybe<Scalars['String']>;
  state_starts_with?: InputMaybe<Scalars['String']>;
  state_starts_with_i?: InputMaybe<Scalars['String']>;
  store?: InputMaybe<StoreWhereInput>;
  store_is_null?: InputMaybe<Scalars['Boolean']>;
  user?: InputMaybe<UserWhereInput>;
  user_is_null?: InputMaybe<Scalars['Boolean']>;
};

export type SellOrderWhereUniqueInput = {
  id: Scalars['ID'];
};

export type SellOrdersCreateInput = {
  data?: InputMaybe<SellOrderCreateInput>;
};

export type SellOrdersUpdateInput = {
  data?: InputMaybe<SellOrderUpdateInput>;
  id: Scalars['ID'];
};

export type SendUserPasswordResetLinkResult = {
  __typename?: 'SendUserPasswordResetLinkResult';
  code: PasswordResetRequestErrorCode;
  message: Scalars['String'];
};

export type Shipping = {
  __typename?: 'Shipping';
  distance?: Maybe<Scalars['Float']>;
  shippingPrice?: Maybe<Scalars['Float']>;
  tax?: Maybe<Scalars['Float']>;
};

export type ShippingAddresses = {
  fromAddressId: Scalars['ID'];
  toAddressId: Scalars['ID'];
};

/**  A keystone list  */
export type ShippingOrder = {
  __typename?: 'ShippingOrder';
  _sellOrderMeta?: Maybe<_QueryMeta>;
  address?: Maybe<Address>;
  dateUpdated?: Maybe<Scalars['String']>;
  distance?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  muResponse?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  sellOrder: Array<SellOrder>;
  serviceId?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  storeAddress?: Maybe<Address>;
};


/**  A keystone list  */
export type ShippingOrder_SellOrderMetaArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<SortSellOrdersBy>>;
  where?: InputMaybe<SellOrderWhereInput>;
};


/**  A keystone list  */
export type ShippingOrderSellOrderArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<SortSellOrdersBy>>;
  where?: InputMaybe<SellOrderWhereInput>;
};

export type ShippingOrderCreateInput = {
  address?: InputMaybe<AddressRelateToOneInput>;
  dateUpdated?: InputMaybe<Scalars['String']>;
  distance?: InputMaybe<Scalars['Int']>;
  muResponse?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
  sellOrder?: InputMaybe<SellOrderRelateToManyInput>;
  serviceId?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  storeAddress?: InputMaybe<AddressRelateToOneInput>;
};

export type ShippingOrderRelateToOneInput = {
  connect?: InputMaybe<ShippingOrderWhereUniqueInput>;
  create?: InputMaybe<ShippingOrderCreateInput>;
  disconnect?: InputMaybe<ShippingOrderWhereUniqueInput>;
  disconnectAll?: InputMaybe<Scalars['Boolean']>;
};

export type ShippingOrderUpdateInput = {
  address?: InputMaybe<AddressRelateToOneInput>;
  dateUpdated?: InputMaybe<Scalars['String']>;
  distance?: InputMaybe<Scalars['Int']>;
  muResponse?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
  sellOrder?: InputMaybe<SellOrderRelateToManyInput>;
  serviceId?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  storeAddress?: InputMaybe<AddressRelateToOneInput>;
};

export type ShippingOrderWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<ShippingOrderWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<ShippingOrderWhereInput>>>;
  address?: InputMaybe<AddressWhereInput>;
  address_is_null?: InputMaybe<Scalars['Boolean']>;
  dateUpdated?: InputMaybe<Scalars['String']>;
  dateUpdated_gt?: InputMaybe<Scalars['String']>;
  dateUpdated_gte?: InputMaybe<Scalars['String']>;
  dateUpdated_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateUpdated_lt?: InputMaybe<Scalars['String']>;
  dateUpdated_lte?: InputMaybe<Scalars['String']>;
  dateUpdated_not?: InputMaybe<Scalars['String']>;
  dateUpdated_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  distance?: InputMaybe<Scalars['Int']>;
  distance_gt?: InputMaybe<Scalars['Int']>;
  distance_gte?: InputMaybe<Scalars['Int']>;
  distance_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  distance_lt?: InputMaybe<Scalars['Int']>;
  distance_lte?: InputMaybe<Scalars['Int']>;
  distance_not?: InputMaybe<Scalars['Int']>;
  distance_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  id?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  muResponse?: InputMaybe<Scalars['String']>;
  muResponse_contains?: InputMaybe<Scalars['String']>;
  muResponse_contains_i?: InputMaybe<Scalars['String']>;
  muResponse_ends_with?: InputMaybe<Scalars['String']>;
  muResponse_ends_with_i?: InputMaybe<Scalars['String']>;
  muResponse_i?: InputMaybe<Scalars['String']>;
  muResponse_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  muResponse_not?: InputMaybe<Scalars['String']>;
  muResponse_not_contains?: InputMaybe<Scalars['String']>;
  muResponse_not_contains_i?: InputMaybe<Scalars['String']>;
  muResponse_not_ends_with?: InputMaybe<Scalars['String']>;
  muResponse_not_ends_with_i?: InputMaybe<Scalars['String']>;
  muResponse_not_i?: InputMaybe<Scalars['String']>;
  muResponse_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  muResponse_not_starts_with?: InputMaybe<Scalars['String']>;
  muResponse_not_starts_with_i?: InputMaybe<Scalars['String']>;
  muResponse_starts_with?: InputMaybe<Scalars['String']>;
  muResponse_starts_with_i?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
  price_gt?: InputMaybe<Scalars['Int']>;
  price_gte?: InputMaybe<Scalars['Int']>;
  price_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  price_lt?: InputMaybe<Scalars['Int']>;
  price_lte?: InputMaybe<Scalars['Int']>;
  price_not?: InputMaybe<Scalars['Int']>;
  price_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /**  condition must be true for all nodes  */
  sellOrder_every?: InputMaybe<SellOrderWhereInput>;
  /**  condition must be false for all nodes  */
  sellOrder_none?: InputMaybe<SellOrderWhereInput>;
  /**  condition must be true for at least 1 node  */
  sellOrder_some?: InputMaybe<SellOrderWhereInput>;
  serviceId?: InputMaybe<Scalars['String']>;
  serviceId_contains?: InputMaybe<Scalars['String']>;
  serviceId_contains_i?: InputMaybe<Scalars['String']>;
  serviceId_ends_with?: InputMaybe<Scalars['String']>;
  serviceId_ends_with_i?: InputMaybe<Scalars['String']>;
  serviceId_i?: InputMaybe<Scalars['String']>;
  serviceId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  serviceId_not?: InputMaybe<Scalars['String']>;
  serviceId_not_contains?: InputMaybe<Scalars['String']>;
  serviceId_not_contains_i?: InputMaybe<Scalars['String']>;
  serviceId_not_ends_with?: InputMaybe<Scalars['String']>;
  serviceId_not_ends_with_i?: InputMaybe<Scalars['String']>;
  serviceId_not_i?: InputMaybe<Scalars['String']>;
  serviceId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  serviceId_not_starts_with?: InputMaybe<Scalars['String']>;
  serviceId_not_starts_with_i?: InputMaybe<Scalars['String']>;
  serviceId_starts_with?: InputMaybe<Scalars['String']>;
  serviceId_starts_with_i?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  state_contains?: InputMaybe<Scalars['String']>;
  state_contains_i?: InputMaybe<Scalars['String']>;
  state_ends_with?: InputMaybe<Scalars['String']>;
  state_ends_with_i?: InputMaybe<Scalars['String']>;
  state_i?: InputMaybe<Scalars['String']>;
  state_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  state_not?: InputMaybe<Scalars['String']>;
  state_not_contains?: InputMaybe<Scalars['String']>;
  state_not_contains_i?: InputMaybe<Scalars['String']>;
  state_not_ends_with?: InputMaybe<Scalars['String']>;
  state_not_ends_with_i?: InputMaybe<Scalars['String']>;
  state_not_i?: InputMaybe<Scalars['String']>;
  state_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  state_not_starts_with?: InputMaybe<Scalars['String']>;
  state_not_starts_with_i?: InputMaybe<Scalars['String']>;
  state_starts_with?: InputMaybe<Scalars['String']>;
  state_starts_with_i?: InputMaybe<Scalars['String']>;
  storeAddress?: InputMaybe<AddressWhereInput>;
  storeAddress_is_null?: InputMaybe<Scalars['Boolean']>;
};

export type ShippingOrderWhereUniqueInput = {
  id: Scalars['ID'];
};

export type ShippingOrdersCreateInput = {
  data?: InputMaybe<ShippingOrderCreateInput>;
};

export type ShippingOrdersUpdateInput = {
  data?: InputMaybe<ShippingOrderUpdateInput>;
  id: Scalars['ID'];
};

export type ShippingWhereInput = {
  addresses?: InputMaybe<ShippingAddresses>;
  cartId?: InputMaybe<Scalars['ID']>;
};

export type SignUpContentCreateInput = {
  description1?: InputMaybe<Scalars['String']>;
  description2?: InputMaybe<Scalars['String']>;
  description3?: InputMaybe<Scalars['String']>;
  paragraph1?: InputMaybe<Scalars['String']>;
  paragraph2?: InputMaybe<Scalars['String']>;
  paragraph3?: InputMaybe<Scalars['String']>;
};

export type SignUpContentUpdateInput = {
  description1?: InputMaybe<Scalars['String']>;
  description2?: InputMaybe<Scalars['String']>;
  description3?: InputMaybe<Scalars['String']>;
  paragraph1?: InputMaybe<Scalars['String']>;
  paragraph2?: InputMaybe<Scalars['String']>;
  paragraph3?: InputMaybe<Scalars['String']>;
};

export type SignUpContentWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<SignUpContentWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<SignUpContentWhereInput>>>;
  description1?: InputMaybe<Scalars['String']>;
  description1_contains?: InputMaybe<Scalars['String']>;
  description1_contains_i?: InputMaybe<Scalars['String']>;
  description1_ends_with?: InputMaybe<Scalars['String']>;
  description1_ends_with_i?: InputMaybe<Scalars['String']>;
  description1_i?: InputMaybe<Scalars['String']>;
  description1_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description1_not?: InputMaybe<Scalars['String']>;
  description1_not_contains?: InputMaybe<Scalars['String']>;
  description1_not_contains_i?: InputMaybe<Scalars['String']>;
  description1_not_ends_with?: InputMaybe<Scalars['String']>;
  description1_not_ends_with_i?: InputMaybe<Scalars['String']>;
  description1_not_i?: InputMaybe<Scalars['String']>;
  description1_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description1_not_starts_with?: InputMaybe<Scalars['String']>;
  description1_not_starts_with_i?: InputMaybe<Scalars['String']>;
  description1_starts_with?: InputMaybe<Scalars['String']>;
  description1_starts_with_i?: InputMaybe<Scalars['String']>;
  description2?: InputMaybe<Scalars['String']>;
  description2_contains?: InputMaybe<Scalars['String']>;
  description2_contains_i?: InputMaybe<Scalars['String']>;
  description2_ends_with?: InputMaybe<Scalars['String']>;
  description2_ends_with_i?: InputMaybe<Scalars['String']>;
  description2_i?: InputMaybe<Scalars['String']>;
  description2_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description2_not?: InputMaybe<Scalars['String']>;
  description2_not_contains?: InputMaybe<Scalars['String']>;
  description2_not_contains_i?: InputMaybe<Scalars['String']>;
  description2_not_ends_with?: InputMaybe<Scalars['String']>;
  description2_not_ends_with_i?: InputMaybe<Scalars['String']>;
  description2_not_i?: InputMaybe<Scalars['String']>;
  description2_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description2_not_starts_with?: InputMaybe<Scalars['String']>;
  description2_not_starts_with_i?: InputMaybe<Scalars['String']>;
  description2_starts_with?: InputMaybe<Scalars['String']>;
  description2_starts_with_i?: InputMaybe<Scalars['String']>;
  description3?: InputMaybe<Scalars['String']>;
  description3_contains?: InputMaybe<Scalars['String']>;
  description3_contains_i?: InputMaybe<Scalars['String']>;
  description3_ends_with?: InputMaybe<Scalars['String']>;
  description3_ends_with_i?: InputMaybe<Scalars['String']>;
  description3_i?: InputMaybe<Scalars['String']>;
  description3_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description3_not?: InputMaybe<Scalars['String']>;
  description3_not_contains?: InputMaybe<Scalars['String']>;
  description3_not_contains_i?: InputMaybe<Scalars['String']>;
  description3_not_ends_with?: InputMaybe<Scalars['String']>;
  description3_not_ends_with_i?: InputMaybe<Scalars['String']>;
  description3_not_i?: InputMaybe<Scalars['String']>;
  description3_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description3_not_starts_with?: InputMaybe<Scalars['String']>;
  description3_not_starts_with_i?: InputMaybe<Scalars['String']>;
  description3_starts_with?: InputMaybe<Scalars['String']>;
  description3_starts_with_i?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  paragraph1?: InputMaybe<Scalars['String']>;
  paragraph1_contains?: InputMaybe<Scalars['String']>;
  paragraph1_contains_i?: InputMaybe<Scalars['String']>;
  paragraph1_ends_with?: InputMaybe<Scalars['String']>;
  paragraph1_ends_with_i?: InputMaybe<Scalars['String']>;
  paragraph1_i?: InputMaybe<Scalars['String']>;
  paragraph1_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  paragraph1_not?: InputMaybe<Scalars['String']>;
  paragraph1_not_contains?: InputMaybe<Scalars['String']>;
  paragraph1_not_contains_i?: InputMaybe<Scalars['String']>;
  paragraph1_not_ends_with?: InputMaybe<Scalars['String']>;
  paragraph1_not_ends_with_i?: InputMaybe<Scalars['String']>;
  paragraph1_not_i?: InputMaybe<Scalars['String']>;
  paragraph1_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  paragraph1_not_starts_with?: InputMaybe<Scalars['String']>;
  paragraph1_not_starts_with_i?: InputMaybe<Scalars['String']>;
  paragraph1_starts_with?: InputMaybe<Scalars['String']>;
  paragraph1_starts_with_i?: InputMaybe<Scalars['String']>;
  paragraph2?: InputMaybe<Scalars['String']>;
  paragraph2_contains?: InputMaybe<Scalars['String']>;
  paragraph2_contains_i?: InputMaybe<Scalars['String']>;
  paragraph2_ends_with?: InputMaybe<Scalars['String']>;
  paragraph2_ends_with_i?: InputMaybe<Scalars['String']>;
  paragraph2_i?: InputMaybe<Scalars['String']>;
  paragraph2_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  paragraph2_not?: InputMaybe<Scalars['String']>;
  paragraph2_not_contains?: InputMaybe<Scalars['String']>;
  paragraph2_not_contains_i?: InputMaybe<Scalars['String']>;
  paragraph2_not_ends_with?: InputMaybe<Scalars['String']>;
  paragraph2_not_ends_with_i?: InputMaybe<Scalars['String']>;
  paragraph2_not_i?: InputMaybe<Scalars['String']>;
  paragraph2_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  paragraph2_not_starts_with?: InputMaybe<Scalars['String']>;
  paragraph2_not_starts_with_i?: InputMaybe<Scalars['String']>;
  paragraph2_starts_with?: InputMaybe<Scalars['String']>;
  paragraph2_starts_with_i?: InputMaybe<Scalars['String']>;
  paragraph3?: InputMaybe<Scalars['String']>;
  paragraph3_contains?: InputMaybe<Scalars['String']>;
  paragraph3_contains_i?: InputMaybe<Scalars['String']>;
  paragraph3_ends_with?: InputMaybe<Scalars['String']>;
  paragraph3_ends_with_i?: InputMaybe<Scalars['String']>;
  paragraph3_i?: InputMaybe<Scalars['String']>;
  paragraph3_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  paragraph3_not?: InputMaybe<Scalars['String']>;
  paragraph3_not_contains?: InputMaybe<Scalars['String']>;
  paragraph3_not_contains_i?: InputMaybe<Scalars['String']>;
  paragraph3_not_ends_with?: InputMaybe<Scalars['String']>;
  paragraph3_not_ends_with_i?: InputMaybe<Scalars['String']>;
  paragraph3_not_i?: InputMaybe<Scalars['String']>;
  paragraph3_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  paragraph3_not_starts_with?: InputMaybe<Scalars['String']>;
  paragraph3_not_starts_with_i?: InputMaybe<Scalars['String']>;
  paragraph3_starts_with?: InputMaybe<Scalars['String']>;
  paragraph3_starts_with_i?: InputMaybe<Scalars['String']>;
};

export type SignUpContentWhereUniqueInput = {
  id: Scalars['ID'];
};

export type SignUpContentsCreateInput = {
  data?: InputMaybe<SignUpContentCreateInput>;
};

export type SignUpContentsUpdateInput = {
  data?: InputMaybe<SignUpContentUpdateInput>;
  id: Scalars['ID'];
};

export enum SortAddressesBy {
  AddressL1Asc = 'addressL1_ASC',
  AddressL1Desc = 'addressL1_DESC',
  CityAsc = 'city_ASC',
  CityDesc = 'city_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  StoreAsc = 'store_ASC',
  StoreDesc = 'store_DESC',
  UserAsc = 'user_ASC',
  UserDesc = 'user_DESC'
}

export enum SortCategoriesBy {
  ColorAsc = 'color_ASC',
  ColorDesc = 'color_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  ProductAsc = 'product_ASC',
  ProductDesc = 'product_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  UserAsc = 'user_ASC',
  UserDesc = 'user_DESC'
}

export enum SortCitiesBy {
  AddressesAsc = 'addresses_ASC',
  AddressesDesc = 'addresses_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsoCodeAsc = 'isoCode_ASC',
  IsoCodeDesc = 'isoCode_DESC',
  LatitudeAsc = 'latitude_ASC',
  LatitudeDesc = 'latitude_DESC',
  LongitudeAsc = 'longitude_ASC',
  LongitudeDesc = 'longitude_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  RegionAsc = 'region_ASC',
  RegionDesc = 'region_DESC',
  ShortNameAsc = 'shortName_ASC',
  ShortNameDesc = 'shortName_DESC'
}

export enum SortContactRequestsBy {
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MessageAsc = 'message_ASC',
  MessageDesc = 'message_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PhoneAsc = 'phone_ASC',
  PhoneDesc = 'phone_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC'
}

export enum SortCountriesBy {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  Iso3166Asc = 'iso3166_ASC',
  Iso3166Desc = 'iso3166_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  RegionsAsc = 'regions_ASC',
  RegionsDesc = 'regions_DESC',
  ShortNameAsc = 'shortName_ASC',
  ShortNameDesc = 'shortName_DESC'
}

export enum SortCouponsBy {
  AmountAsc = 'amount_ASC',
  AmountDesc = 'amount_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  EndDateAsc = 'endDate_ASC',
  EndDateDesc = 'endDate_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MinCartAmountAsc = 'minCartAmount_ASC',
  MinCartAmountDesc = 'minCartAmount_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  OwnerAsc = 'owner_ASC',
  OwnerDesc = 'owner_DESC',
  QuantityAsc = 'quantity_ASC',
  QuantityDesc = 'quantity_DESC',
  SellOrdersAsc = 'sellOrders_ASC',
  SellOrdersDesc = 'sellOrders_DESC',
  ShortNameAsc = 'shortName_ASC',
  ShortNameDesc = 'shortName_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC'
}

export enum SortCustomContentsBy {
  BodyAsc = 'body_ASC',
  BodyDesc = 'body_DESC',
  Heading1Asc = 'heading1_ASC',
  Heading1Desc = 'heading1_DESC',
  Heading2Asc = 'heading2_ASC',
  Heading2Desc = 'heading2_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PathAsc = 'path_ASC',
  PathDesc = 'path_DESC',
  SectionAsc = 'section_ASC',
  SectionDesc = 'section_DESC',
  VisibleAsc = 'visible_ASC',
  VisibleDesc = 'visible_DESC'
}

export enum SortFaqContentsBy {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  QuestionIdAsc = 'questionId_ASC',
  QuestionIdDesc = 'questionId_DESC',
  QuestionAsc = 'question_ASC',
  QuestionDesc = 'question_DESC',
  SubAnswer1Asc = 'subAnswer1_ASC',
  SubAnswer1Desc = 'subAnswer1_DESC',
  SubAnswer2Asc = 'subAnswer2_ASC',
  SubAnswer2Desc = 'subAnswer2_DESC',
  SubAnswer3Asc = 'subAnswer3_ASC',
  SubAnswer3Desc = 'subAnswer3_DESC',
  SubQuestion1Asc = 'subQuestion1_ASC',
  SubQuestion1Desc = 'subQuestion1_DESC',
  SubQuestion2Asc = 'subQuestion2_ASC',
  SubQuestion2Desc = 'subQuestion2_DESC',
  SubQuestion3Asc = 'subQuestion3_ASC',
  SubQuestion3Desc = 'subQuestion3_DESC'
}

export enum SortLineItemsBy {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PriceAsc = 'price_ASC',
  PriceDesc = 'price_DESC',
  ProductAsc = 'product_ASC',
  ProductDesc = 'product_DESC',
  QuantityAsc = 'quantity_ASC',
  QuantityDesc = 'quantity_DESC',
  SellOrderAsc = 'sellOrder_ASC',
  SellOrderDesc = 'sellOrder_DESC'
}

export enum SortMetaItemsBy {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  KeyAsc = 'key_ASC',
  KeyDesc = 'key_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  ValueAsc = 'value_ASC',
  ValueDesc = 'value_DESC'
}

export enum SortProductImagesBy {
  AltTextAsc = 'altText_ASC',
  AltTextDesc = 'altText_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  ProductAsc = 'product_ASC',
  ProductDesc = 'product_DESC'
}

export enum SortProductsBy {
  BrandAsc = 'brand_ASC',
  BrandDesc = 'brand_DESC',
  Calories100grAsc = 'calories100gr_ASC',
  Calories100grDesc = 'calories100gr_DESC',
  CaloriesPer100grAsc = 'caloriesPer100gr_ASC',
  CaloriesPer100grDesc = 'caloriesPer100gr_DESC',
  CategoryAsc = 'category_ASC',
  CategoryDesc = 'category_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  EasyPreparationAsc = 'easyPreparation_ASC',
  EasyPreparationDesc = 'easyPreparation_DESC',
  EcoFriendlyAsc = 'ecoFriendly_ASC',
  EcoFriendlyDesc = 'ecoFriendly_DESC',
  GreenInpactAsc = 'greenInpact_ASC',
  GreenInpactDesc = 'greenInpact_DESC',
  HasInvimaAsc = 'hasInvima_ASC',
  HasInvimaDesc = 'hasInvima_DESC',
  HasNutritionalTableAsc = 'hasNutritionalTable_ASC',
  HasNutritionalTableDesc = 'hasNutritionalTable_DESC',
  HasTaxAsc = 'hasTax_ASC',
  HasTaxDesc = 'hasTax_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LifetimeAsc = 'lifetime_ASC',
  LifetimeDesc = 'lifetime_DESC',
  MaxStockPerOrderAsc = 'maxStockPerOrder_ASC',
  MaxStockPerOrderDesc = 'maxStockPerOrder_DESC',
  MinStockAsc = 'minStock_ASC',
  MinStockDesc = 'minStock_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  OtherRefrigerationTypeAsc = 'otherRefrigerationType_ASC',
  OtherRefrigerationTypeDesc = 'otherRefrigerationType_DESC',
  PackageTypeAsc = 'packageType_ASC',
  PackageTypeDesc = 'packageType_DESC',
  PackageWeightAsc = 'packageWeight_ASC',
  PackageWeightDesc = 'packageWeight_DESC',
  PackingOnGlassAsc = 'packingOnGlass_ASC',
  PackingOnGlassDesc = 'packingOnGlass_DESC',
  PhotoAsc = 'photo_ASC',
  PhotoDesc = 'photo_DESC',
  PriceAsc = 'price_ASC',
  PriceDesc = 'price_DESC',
  ProductionTimeAsc = 'productionTime_ASC',
  ProductionTimeDesc = 'productionTime_DESC',
  QtyPerPackageAsc = 'qtyPerPackage_ASC',
  QtyPerPackageDesc = 'qtyPerPackage_DESC',
  ReadyForConsumptionAsc = 'readyForConsumption_ASC',
  ReadyForConsumptionDesc = 'readyForConsumption_DESC',
  RefrigerationAsc = 'refrigeration_ASC',
  RefrigerationDesc = 'refrigeration_DESC',
  ReviewAsc = 'review_ASC',
  ReviewDesc = 'review_DESC',
  SalePriceAsc = 'salePrice_ASC',
  SalePriceDesc = 'salePrice_DESC',
  SealsAsc = 'seals_ASC',
  SealsDesc = 'seals_DESC',
  SkuAsc = 'sku_ASC',
  SkuDesc = 'sku_DESC',
  SodioAsc = 'sodio_ASC',
  SodioDesc = 'sodio_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  StockAsc = 'stock_ASC',
  StockDesc = 'stock_DESC',
  StoreAsc = 'store_ASC',
  StoreDesc = 'store_DESC',
  VideoAsc = 'video_ASC',
  VideoDesc = 'video_DESC'
}

export enum SortRegionsBy {
  CitiesAsc = 'cities_ASC',
  CitiesDesc = 'cities_DESC',
  CountryAsc = 'country_ASC',
  CountryDesc = 'country_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  ShortNameAsc = 'shortName_ASC',
  ShortNameDesc = 'shortName_DESC'
}

export enum SortReviewsBy {
  CommentsAsc = 'comments_ASC',
  CommentsDesc = 'comments_DESC',
  DateCreatedAsc = 'dateCreated_ASC',
  DateCreatedDesc = 'dateCreated_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PointsAsc = 'points_ASC',
  PointsDesc = 'points_DESC',
  ProductAsc = 'product_ASC',
  ProductDesc = 'product_DESC',
  UserAsc = 'user_ASC',
  UserDesc = 'user_DESC',
  VisibleAsc = 'visible_ASC',
  VisibleDesc = 'visible_DESC'
}

export enum SortRolesBy {
  AssignedToAsc = 'assignedTo_ASC',
  AssignedToDesc = 'assignedTo_DESC',
  CanManageAddressAsc = 'canManageAddress_ASC',
  CanManageAddressDesc = 'canManageAddress_DESC',
  CanManageCartAsc = 'canManageCart_ASC',
  CanManageCartDesc = 'canManageCart_DESC',
  CanManageOrdersAsc = 'canManageOrders_ASC',
  CanManageOrdersDesc = 'canManageOrders_DESC',
  CanManageProductsAsc = 'canManageProducts_ASC',
  CanManageProductsDesc = 'canManageProducts_DESC',
  CanManageRolesAsc = 'canManageRoles_ASC',
  CanManageRolesDesc = 'canManageRoles_DESC',
  CanManageUsersAsc = 'canManageUsers_ASC',
  CanManageUsersDesc = 'canManageUsers_DESC',
  CanSeeOtherUsersAsc = 'canSeeOtherUsers_ASC',
  CanSeeOtherUsersDesc = 'canSeeOtherUsers_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsAdminAsc = 'isAdmin_ASC',
  IsAdminDesc = 'isAdmin_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC'
}

export enum SortSectionsBy {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC'
}

export enum SortSellOrdersBy {
  AddressAsc = 'address_ASC',
  AddressDesc = 'address_DESC',
  CheckedPriceAsc = 'checkedPrice_ASC',
  CheckedPriceDesc = 'checkedPrice_DESC',
  CouponsAsc = 'coupons_ASC',
  CouponsDesc = 'coupons_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LineItemAsc = 'lineItem_ASC',
  LineItemDesc = 'lineItem_DESC',
  MessageAsc = 'message_ASC',
  MessageDesc = 'message_DESC',
  ShippingOrderAsc = 'shippingOrder_ASC',
  ShippingOrderDesc = 'shippingOrder_DESC',
  SiigoIdAsc = 'siigoId_ASC',
  SiigoIdDesc = 'siigoId_DESC',
  StateAsc = 'state_ASC',
  StateDesc = 'state_DESC',
  StoreAsc = 'store_ASC',
  StoreDesc = 'store_DESC',
  UserAsc = 'user_ASC',
  UserDesc = 'user_DESC'
}

export enum SortShippingOrdersBy {
  AddressAsc = 'address_ASC',
  AddressDesc = 'address_DESC',
  DateUpdatedAsc = 'dateUpdated_ASC',
  DateUpdatedDesc = 'dateUpdated_DESC',
  DistanceAsc = 'distance_ASC',
  DistanceDesc = 'distance_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MuResponseAsc = 'muResponse_ASC',
  MuResponseDesc = 'muResponse_DESC',
  PriceAsc = 'price_ASC',
  PriceDesc = 'price_DESC',
  SellOrderAsc = 'sellOrder_ASC',
  SellOrderDesc = 'sellOrder_DESC',
  ServiceIdAsc = 'serviceId_ASC',
  ServiceIdDesc = 'serviceId_DESC',
  StateAsc = 'state_ASC',
  StateDesc = 'state_DESC',
  StoreAddressAsc = 'storeAddress_ASC',
  StoreAddressDesc = 'storeAddress_DESC'
}

export enum SortSignUpContentsBy {
  Description1Asc = 'description1_ASC',
  Description1Desc = 'description1_DESC',
  Description2Asc = 'description2_ASC',
  Description2Desc = 'description2_DESC',
  Description3Asc = 'description3_ASC',
  Description3Desc = 'description3_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  Paragraph1Asc = 'paragraph1_ASC',
  Paragraph1Desc = 'paragraph1_DESC',
  Paragraph2Asc = 'paragraph2_ASC',
  Paragraph2Desc = 'paragraph2_DESC',
  Paragraph3Asc = 'paragraph3_ASC',
  Paragraph3Desc = 'paragraph3_DESC'
}

export enum SortStoresBy {
  AddressAsc = 'address_ASC',
  AddressDesc = 'address_DESC',
  AvgMonthSalesAsc = 'avgMonthSales_ASC',
  AvgMonthSalesDesc = 'avgMonthSales_DESC',
  ClasificationAsc = 'clasification_ASC',
  ClasificationDesc = 'clasification_DESC',
  CommissionFeeAsc = 'commissionFee_ASC',
  CommissionFeeDesc = 'commissionFee_DESC',
  ContactLastNameAsc = 'contactLastName_ASC',
  ContactLastNameDesc = 'contactLastName_DESC',
  ContactNameAsc = 'contactName_ASC',
  ContactNameDesc = 'contactName_DESC',
  CouponsAsc = 'coupons_ASC',
  CouponsDesc = 'coupons_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  DocumentAsc = 'document_ASC',
  DocumentDesc = 'document_DESC',
  EconomicActivityAsc = 'economicActivity_ASC',
  EconomicActivityDesc = 'economicActivity_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  EpaycoIdAsc = 'epaycoId_ASC',
  EpaycoIdDesc = 'epaycoId_DESC',
  ExtraPublicityAsc = 'extraPublicity_ASC',
  ExtraPublicityDesc = 'extraPublicity_DESC',
  HasDigitalInvocesAsc = 'hasDigitalInvoces_ASC',
  HasDigitalInvocesDesc = 'hasDigitalInvoces_DESC',
  HasMaquilaAsc = 'hasMaquila_ASC',
  HasMaquilaDesc = 'hasMaquila_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IdentificationTypeAsc = 'identificationType_ASC',
  IdentificationTypeDesc = 'identificationType_DESC',
  InstagramFollowersAsc = 'instagramFollowers_ASC',
  InstagramFollowersDesc = 'instagramFollowers_DESC',
  LegallyFormedAsc = 'legallyFormed_ASC',
  LegallyFormedDesc = 'legallyFormed_DESC',
  LicenseAsc = 'license_ASC',
  LicenseDesc = 'license_DESC',
  MarketMaturityAsc = 'marketMaturity_ASC',
  MarketMaturityDesc = 'marketMaturity_DESC',
  MaxDeliveryTimeAsc = 'maxDeliveryTime_ASC',
  MaxDeliveryTimeDesc = 'maxDeliveryTime_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PaysShipmentAfterAsc = 'paysShipmentAfter_ASC',
  PaysShipmentAfterDesc = 'paysShipmentAfter_DESC',
  PhoneAsc = 'phone_ASC',
  PhoneDesc = 'phone_DESC',
  ProductsAsc = 'products_ASC',
  ProductsDesc = 'products_DESC',
  SalesAsc = 'sales_ASC',
  SalesDesc = 'sales_DESC',
  SiigoIdAsc = 'siigoId_ASC',
  SiigoIdDesc = 'siigoId_DESC',
  SocialServiceAsc = 'socialService_ASC',
  SocialServiceDesc = 'socialService_DESC',
  StoreSalesAsc = 'storeSales_ASC',
  StoreSalesDesc = 'storeSales_DESC',
  VideoAsc = 'video_ASC',
  VideoDesc = 'video_DESC',
  WebPageAsc = 'webPage_ASC',
  WebPageDesc = 'webPage_DESC',
  WorkingDaysAsc = 'workingDays_ASC',
  WorkingDaysDesc = 'workingDays_DESC'
}

export enum SortTaxesBy {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SiigoIdAsc = 'siigoId_ASC',
  SiigoIdDesc = 'siigoId_DESC'
}

export enum SortUsersBy {
  AddressAsc = 'address_ASC',
  AddressDesc = 'address_DESC',
  CategoryAsc = 'category_ASC',
  CategoryDesc = 'category_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IdentificationTypeAsc = 'identificationType_ASC',
  IdentificationTypeDesc = 'identificationType_DESC',
  IdentificationAsc = 'identification_ASC',
  IdentificationDesc = 'identification_DESC',
  LastNameAsc = 'lastName_ASC',
  LastNameDesc = 'lastName_DESC',
  MagicAuthIssuedAtAsc = 'magicAuthIssuedAt_ASC',
  MagicAuthIssuedAtDesc = 'magicAuthIssuedAt_DESC',
  MagicAuthRedeemedAtAsc = 'magicAuthRedeemedAt_ASC',
  MagicAuthRedeemedAtDesc = 'magicAuthRedeemedAt_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PasswordResetIssuedAtAsc = 'passwordResetIssuedAt_ASC',
  PasswordResetIssuedAtDesc = 'passwordResetIssuedAt_DESC',
  PasswordResetRedeemedAtAsc = 'passwordResetRedeemedAt_ASC',
  PasswordResetRedeemedAtDesc = 'passwordResetRedeemedAt_DESC',
  PhoneAsc = 'phone_ASC',
  PhoneDesc = 'phone_DESC',
  RoleAsc = 'role_ASC',
  RoleDesc = 'role_DESC',
  SellOrderAsc = 'sellOrder_ASC',
  SellOrderDesc = 'sellOrder_DESC'
}

export enum SortWeekDaysBy {
  EndTimeAsc = 'endTime_ASC',
  EndTimeDesc = 'endTime_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  OpenAsc = 'open_ASC',
  OpenDesc = 'open_DESC',
  StartTimeAsc = 'startTime_ASC',
  StartTimeDesc = 'startTime_DESC'
}

export enum SortWorkWithUsRequestsBy {
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PhoneAsc = 'phone_ASC',
  PhoneDesc = 'phone_DESC',
  VerifiedAsc = 'verified_ASC',
  VerifiedDesc = 'verified_DESC'
}

/**  A keystone list  */
export type Store = {
  __typename?: 'Store';
  _couponsMeta?: Maybe<_QueryMeta>;
  _productsMeta?: Maybe<_QueryMeta>;
  _workingDaysMeta?: Maybe<_QueryMeta>;
  address?: Maybe<Address>;
  avgMonthSales?: Maybe<Scalars['Int']>;
  banner?: Maybe<CloudinaryImage_File>;
  clasification?: Maybe<Scalars['String']>;
  commissionFee?: Maybe<Scalars['Int']>;
  contactLastName?: Maybe<Scalars['String']>;
  contactName?: Maybe<Scalars['String']>;
  coupons: Array<Coupon>;
  description?: Maybe<Scalars['String']>;
  document?: Maybe<Scalars['String']>;
  economicActivity?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  epaycoId?: Maybe<Scalars['String']>;
  extraPublicity?: Maybe<Scalars['Boolean']>;
  hasDigitalInvoces?: Maybe<Scalars['Boolean']>;
  hasMaquila?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  identificationType?: Maybe<Scalars['String']>;
  instagramFollowers?: Maybe<Scalars['Int']>;
  legallyFormed?: Maybe<Scalars['Boolean']>;
  license?: Maybe<Scalars['Boolean']>;
  logo?: Maybe<CloudinaryImage_File>;
  marketMaturity?: Maybe<Scalars['String']>;
  maxDeliveryTime?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  paysShipmentAfter?: Maybe<Scalars['Int']>;
  phone?: Maybe<Scalars['String']>;
  products: Array<Product>;
  sales?: Maybe<Scalars['Boolean']>;
  siigoId?: Maybe<Scalars['String']>;
  socialService?: Maybe<Scalars['String']>;
  storeSales?: Maybe<Scalars['Int']>;
  video?: Maybe<Scalars['String']>;
  webPage?: Maybe<Scalars['Boolean']>;
  workingDays: Array<WeekDay>;
};


/**  A keystone list  */
export type Store_CouponsMetaArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<SortCouponsBy>>;
  where?: InputMaybe<CouponWhereInput>;
};


/**  A keystone list  */
export type Store_ProductsMetaArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<SortProductsBy>>;
  where?: InputMaybe<ProductWhereInput>;
};


/**  A keystone list  */
export type Store_WorkingDaysMetaArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<SortWeekDaysBy>>;
  where?: InputMaybe<WeekDayWhereInput>;
};


/**  A keystone list  */
export type StoreCouponsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<SortCouponsBy>>;
  where?: InputMaybe<CouponWhereInput>;
};


/**  A keystone list  */
export type StoreProductsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<SortProductsBy>>;
  where?: InputMaybe<ProductWhereInput>;
};


/**  A keystone list  */
export type StoreWorkingDaysArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<SortWeekDaysBy>>;
  where?: InputMaybe<WeekDayWhereInput>;
};

export type StoreCreateInput = {
  address?: InputMaybe<AddressRelateToOneInput>;
  avgMonthSales?: InputMaybe<Scalars['Int']>;
  banner?: InputMaybe<Scalars['Upload']>;
  clasification?: InputMaybe<Scalars['String']>;
  commissionFee?: InputMaybe<Scalars['Int']>;
  contactLastName?: InputMaybe<Scalars['String']>;
  contactName?: InputMaybe<Scalars['String']>;
  coupons?: InputMaybe<CouponRelateToManyInput>;
  description?: InputMaybe<Scalars['String']>;
  document?: InputMaybe<Scalars['String']>;
  economicActivity?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  epaycoId?: InputMaybe<Scalars['String']>;
  extraPublicity?: InputMaybe<Scalars['Boolean']>;
  hasDigitalInvoces?: InputMaybe<Scalars['Boolean']>;
  hasMaquila?: InputMaybe<Scalars['Boolean']>;
  identificationType?: InputMaybe<Scalars['String']>;
  instagramFollowers?: InputMaybe<Scalars['Int']>;
  legallyFormed?: InputMaybe<Scalars['Boolean']>;
  license?: InputMaybe<Scalars['Boolean']>;
  logo?: InputMaybe<Scalars['Upload']>;
  marketMaturity?: InputMaybe<Scalars['String']>;
  maxDeliveryTime?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  paysShipmentAfter?: InputMaybe<Scalars['Int']>;
  phone?: InputMaybe<Scalars['String']>;
  products?: InputMaybe<ProductRelateToManyInput>;
  sales?: InputMaybe<Scalars['Boolean']>;
  siigoId?: InputMaybe<Scalars['String']>;
  socialService?: InputMaybe<Scalars['String']>;
  storeSales?: InputMaybe<Scalars['Int']>;
  video?: InputMaybe<Scalars['String']>;
  webPage?: InputMaybe<Scalars['Boolean']>;
  workingDays?: InputMaybe<WeekDayRelateToManyInput>;
};

export type StoreRelateToOneInput = {
  connect?: InputMaybe<StoreWhereUniqueInput>;
  create?: InputMaybe<StoreCreateInput>;
  disconnect?: InputMaybe<StoreWhereUniqueInput>;
  disconnectAll?: InputMaybe<Scalars['Boolean']>;
};

export type StoreUpdateInput = {
  address?: InputMaybe<AddressRelateToOneInput>;
  avgMonthSales?: InputMaybe<Scalars['Int']>;
  banner?: InputMaybe<Scalars['Upload']>;
  clasification?: InputMaybe<Scalars['String']>;
  commissionFee?: InputMaybe<Scalars['Int']>;
  contactLastName?: InputMaybe<Scalars['String']>;
  contactName?: InputMaybe<Scalars['String']>;
  coupons?: InputMaybe<CouponRelateToManyInput>;
  description?: InputMaybe<Scalars['String']>;
  document?: InputMaybe<Scalars['String']>;
  economicActivity?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  epaycoId?: InputMaybe<Scalars['String']>;
  extraPublicity?: InputMaybe<Scalars['Boolean']>;
  hasDigitalInvoces?: InputMaybe<Scalars['Boolean']>;
  hasMaquila?: InputMaybe<Scalars['Boolean']>;
  identificationType?: InputMaybe<Scalars['String']>;
  instagramFollowers?: InputMaybe<Scalars['Int']>;
  legallyFormed?: InputMaybe<Scalars['Boolean']>;
  license?: InputMaybe<Scalars['Boolean']>;
  logo?: InputMaybe<Scalars['Upload']>;
  marketMaturity?: InputMaybe<Scalars['String']>;
  maxDeliveryTime?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  paysShipmentAfter?: InputMaybe<Scalars['Int']>;
  phone?: InputMaybe<Scalars['String']>;
  products?: InputMaybe<ProductRelateToManyInput>;
  sales?: InputMaybe<Scalars['Boolean']>;
  siigoId?: InputMaybe<Scalars['String']>;
  socialService?: InputMaybe<Scalars['String']>;
  storeSales?: InputMaybe<Scalars['Int']>;
  video?: InputMaybe<Scalars['String']>;
  webPage?: InputMaybe<Scalars['Boolean']>;
  workingDays?: InputMaybe<WeekDayRelateToManyInput>;
};

export type StoreWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<StoreWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<StoreWhereInput>>>;
  address?: InputMaybe<AddressWhereInput>;
  address_is_null?: InputMaybe<Scalars['Boolean']>;
  avgMonthSales?: InputMaybe<Scalars['Int']>;
  avgMonthSales_gt?: InputMaybe<Scalars['Int']>;
  avgMonthSales_gte?: InputMaybe<Scalars['Int']>;
  avgMonthSales_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  avgMonthSales_lt?: InputMaybe<Scalars['Int']>;
  avgMonthSales_lte?: InputMaybe<Scalars['Int']>;
  avgMonthSales_not?: InputMaybe<Scalars['Int']>;
  avgMonthSales_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  banner?: InputMaybe<Scalars['String']>;
  banner_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  banner_not?: InputMaybe<Scalars['String']>;
  banner_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  clasification?: InputMaybe<Scalars['String']>;
  clasification_contains?: InputMaybe<Scalars['String']>;
  clasification_contains_i?: InputMaybe<Scalars['String']>;
  clasification_ends_with?: InputMaybe<Scalars['String']>;
  clasification_ends_with_i?: InputMaybe<Scalars['String']>;
  clasification_i?: InputMaybe<Scalars['String']>;
  clasification_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  clasification_not?: InputMaybe<Scalars['String']>;
  clasification_not_contains?: InputMaybe<Scalars['String']>;
  clasification_not_contains_i?: InputMaybe<Scalars['String']>;
  clasification_not_ends_with?: InputMaybe<Scalars['String']>;
  clasification_not_ends_with_i?: InputMaybe<Scalars['String']>;
  clasification_not_i?: InputMaybe<Scalars['String']>;
  clasification_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  clasification_not_starts_with?: InputMaybe<Scalars['String']>;
  clasification_not_starts_with_i?: InputMaybe<Scalars['String']>;
  clasification_starts_with?: InputMaybe<Scalars['String']>;
  clasification_starts_with_i?: InputMaybe<Scalars['String']>;
  commissionFee?: InputMaybe<Scalars['Int']>;
  commissionFee_gt?: InputMaybe<Scalars['Int']>;
  commissionFee_gte?: InputMaybe<Scalars['Int']>;
  commissionFee_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  commissionFee_lt?: InputMaybe<Scalars['Int']>;
  commissionFee_lte?: InputMaybe<Scalars['Int']>;
  commissionFee_not?: InputMaybe<Scalars['Int']>;
  commissionFee_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  contactLastName?: InputMaybe<Scalars['String']>;
  contactLastName_contains?: InputMaybe<Scalars['String']>;
  contactLastName_contains_i?: InputMaybe<Scalars['String']>;
  contactLastName_ends_with?: InputMaybe<Scalars['String']>;
  contactLastName_ends_with_i?: InputMaybe<Scalars['String']>;
  contactLastName_i?: InputMaybe<Scalars['String']>;
  contactLastName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contactLastName_not?: InputMaybe<Scalars['String']>;
  contactLastName_not_contains?: InputMaybe<Scalars['String']>;
  contactLastName_not_contains_i?: InputMaybe<Scalars['String']>;
  contactLastName_not_ends_with?: InputMaybe<Scalars['String']>;
  contactLastName_not_ends_with_i?: InputMaybe<Scalars['String']>;
  contactLastName_not_i?: InputMaybe<Scalars['String']>;
  contactLastName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contactLastName_not_starts_with?: InputMaybe<Scalars['String']>;
  contactLastName_not_starts_with_i?: InputMaybe<Scalars['String']>;
  contactLastName_starts_with?: InputMaybe<Scalars['String']>;
  contactLastName_starts_with_i?: InputMaybe<Scalars['String']>;
  contactName?: InputMaybe<Scalars['String']>;
  contactName_contains?: InputMaybe<Scalars['String']>;
  contactName_contains_i?: InputMaybe<Scalars['String']>;
  contactName_ends_with?: InputMaybe<Scalars['String']>;
  contactName_ends_with_i?: InputMaybe<Scalars['String']>;
  contactName_i?: InputMaybe<Scalars['String']>;
  contactName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contactName_not?: InputMaybe<Scalars['String']>;
  contactName_not_contains?: InputMaybe<Scalars['String']>;
  contactName_not_contains_i?: InputMaybe<Scalars['String']>;
  contactName_not_ends_with?: InputMaybe<Scalars['String']>;
  contactName_not_ends_with_i?: InputMaybe<Scalars['String']>;
  contactName_not_i?: InputMaybe<Scalars['String']>;
  contactName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contactName_not_starts_with?: InputMaybe<Scalars['String']>;
  contactName_not_starts_with_i?: InputMaybe<Scalars['String']>;
  contactName_starts_with?: InputMaybe<Scalars['String']>;
  contactName_starts_with_i?: InputMaybe<Scalars['String']>;
  /**  condition must be true for all nodes  */
  coupons_every?: InputMaybe<CouponWhereInput>;
  /**  condition must be false for all nodes  */
  coupons_none?: InputMaybe<CouponWhereInput>;
  /**  condition must be true for at least 1 node  */
  coupons_some?: InputMaybe<CouponWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_contains_i?: InputMaybe<Scalars['String']>;
  description_ends_with?: InputMaybe<Scalars['String']>;
  description_ends_with_i?: InputMaybe<Scalars['String']>;
  description_i?: InputMaybe<Scalars['String']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_contains_i?: InputMaybe<Scalars['String']>;
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  description_not_ends_with_i?: InputMaybe<Scalars['String']>;
  description_not_i?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  description_not_starts_with_i?: InputMaybe<Scalars['String']>;
  description_starts_with?: InputMaybe<Scalars['String']>;
  description_starts_with_i?: InputMaybe<Scalars['String']>;
  document?: InputMaybe<Scalars['String']>;
  document_contains?: InputMaybe<Scalars['String']>;
  document_contains_i?: InputMaybe<Scalars['String']>;
  document_ends_with?: InputMaybe<Scalars['String']>;
  document_ends_with_i?: InputMaybe<Scalars['String']>;
  document_i?: InputMaybe<Scalars['String']>;
  document_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  document_not?: InputMaybe<Scalars['String']>;
  document_not_contains?: InputMaybe<Scalars['String']>;
  document_not_contains_i?: InputMaybe<Scalars['String']>;
  document_not_ends_with?: InputMaybe<Scalars['String']>;
  document_not_ends_with_i?: InputMaybe<Scalars['String']>;
  document_not_i?: InputMaybe<Scalars['String']>;
  document_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  document_not_starts_with?: InputMaybe<Scalars['String']>;
  document_not_starts_with_i?: InputMaybe<Scalars['String']>;
  document_starts_with?: InputMaybe<Scalars['String']>;
  document_starts_with_i?: InputMaybe<Scalars['String']>;
  economicActivity?: InputMaybe<Scalars['String']>;
  economicActivity_contains?: InputMaybe<Scalars['String']>;
  economicActivity_contains_i?: InputMaybe<Scalars['String']>;
  economicActivity_ends_with?: InputMaybe<Scalars['String']>;
  economicActivity_ends_with_i?: InputMaybe<Scalars['String']>;
  economicActivity_i?: InputMaybe<Scalars['String']>;
  economicActivity_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  economicActivity_not?: InputMaybe<Scalars['String']>;
  economicActivity_not_contains?: InputMaybe<Scalars['String']>;
  economicActivity_not_contains_i?: InputMaybe<Scalars['String']>;
  economicActivity_not_ends_with?: InputMaybe<Scalars['String']>;
  economicActivity_not_ends_with_i?: InputMaybe<Scalars['String']>;
  economicActivity_not_i?: InputMaybe<Scalars['String']>;
  economicActivity_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  economicActivity_not_starts_with?: InputMaybe<Scalars['String']>;
  economicActivity_not_starts_with_i?: InputMaybe<Scalars['String']>;
  economicActivity_starts_with?: InputMaybe<Scalars['String']>;
  economicActivity_starts_with_i?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  email_contains?: InputMaybe<Scalars['String']>;
  email_contains_i?: InputMaybe<Scalars['String']>;
  email_ends_with?: InputMaybe<Scalars['String']>;
  email_ends_with_i?: InputMaybe<Scalars['String']>;
  email_i?: InputMaybe<Scalars['String']>;
  email_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  email_not?: InputMaybe<Scalars['String']>;
  email_not_contains?: InputMaybe<Scalars['String']>;
  email_not_contains_i?: InputMaybe<Scalars['String']>;
  email_not_ends_with?: InputMaybe<Scalars['String']>;
  email_not_ends_with_i?: InputMaybe<Scalars['String']>;
  email_not_i?: InputMaybe<Scalars['String']>;
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  email_not_starts_with?: InputMaybe<Scalars['String']>;
  email_not_starts_with_i?: InputMaybe<Scalars['String']>;
  email_starts_with?: InputMaybe<Scalars['String']>;
  email_starts_with_i?: InputMaybe<Scalars['String']>;
  epaycoId?: InputMaybe<Scalars['String']>;
  epaycoId_contains?: InputMaybe<Scalars['String']>;
  epaycoId_contains_i?: InputMaybe<Scalars['String']>;
  epaycoId_ends_with?: InputMaybe<Scalars['String']>;
  epaycoId_ends_with_i?: InputMaybe<Scalars['String']>;
  epaycoId_i?: InputMaybe<Scalars['String']>;
  epaycoId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  epaycoId_not?: InputMaybe<Scalars['String']>;
  epaycoId_not_contains?: InputMaybe<Scalars['String']>;
  epaycoId_not_contains_i?: InputMaybe<Scalars['String']>;
  epaycoId_not_ends_with?: InputMaybe<Scalars['String']>;
  epaycoId_not_ends_with_i?: InputMaybe<Scalars['String']>;
  epaycoId_not_i?: InputMaybe<Scalars['String']>;
  epaycoId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  epaycoId_not_starts_with?: InputMaybe<Scalars['String']>;
  epaycoId_not_starts_with_i?: InputMaybe<Scalars['String']>;
  epaycoId_starts_with?: InputMaybe<Scalars['String']>;
  epaycoId_starts_with_i?: InputMaybe<Scalars['String']>;
  extraPublicity?: InputMaybe<Scalars['Boolean']>;
  extraPublicity_not?: InputMaybe<Scalars['Boolean']>;
  hasDigitalInvoces?: InputMaybe<Scalars['Boolean']>;
  hasDigitalInvoces_not?: InputMaybe<Scalars['Boolean']>;
  hasMaquila?: InputMaybe<Scalars['Boolean']>;
  hasMaquila_not?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  identificationType?: InputMaybe<Scalars['String']>;
  identificationType_contains?: InputMaybe<Scalars['String']>;
  identificationType_contains_i?: InputMaybe<Scalars['String']>;
  identificationType_ends_with?: InputMaybe<Scalars['String']>;
  identificationType_ends_with_i?: InputMaybe<Scalars['String']>;
  identificationType_i?: InputMaybe<Scalars['String']>;
  identificationType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  identificationType_not?: InputMaybe<Scalars['String']>;
  identificationType_not_contains?: InputMaybe<Scalars['String']>;
  identificationType_not_contains_i?: InputMaybe<Scalars['String']>;
  identificationType_not_ends_with?: InputMaybe<Scalars['String']>;
  identificationType_not_ends_with_i?: InputMaybe<Scalars['String']>;
  identificationType_not_i?: InputMaybe<Scalars['String']>;
  identificationType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  identificationType_not_starts_with?: InputMaybe<Scalars['String']>;
  identificationType_not_starts_with_i?: InputMaybe<Scalars['String']>;
  identificationType_starts_with?: InputMaybe<Scalars['String']>;
  identificationType_starts_with_i?: InputMaybe<Scalars['String']>;
  instagramFollowers?: InputMaybe<Scalars['Int']>;
  instagramFollowers_gt?: InputMaybe<Scalars['Int']>;
  instagramFollowers_gte?: InputMaybe<Scalars['Int']>;
  instagramFollowers_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  instagramFollowers_lt?: InputMaybe<Scalars['Int']>;
  instagramFollowers_lte?: InputMaybe<Scalars['Int']>;
  instagramFollowers_not?: InputMaybe<Scalars['Int']>;
  instagramFollowers_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  legallyFormed?: InputMaybe<Scalars['Boolean']>;
  legallyFormed_not?: InputMaybe<Scalars['Boolean']>;
  license?: InputMaybe<Scalars['Boolean']>;
  license_not?: InputMaybe<Scalars['Boolean']>;
  logo?: InputMaybe<Scalars['String']>;
  logo_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  logo_not?: InputMaybe<Scalars['String']>;
  logo_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  marketMaturity?: InputMaybe<Scalars['String']>;
  marketMaturity_contains?: InputMaybe<Scalars['String']>;
  marketMaturity_contains_i?: InputMaybe<Scalars['String']>;
  marketMaturity_ends_with?: InputMaybe<Scalars['String']>;
  marketMaturity_ends_with_i?: InputMaybe<Scalars['String']>;
  marketMaturity_i?: InputMaybe<Scalars['String']>;
  marketMaturity_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  marketMaturity_not?: InputMaybe<Scalars['String']>;
  marketMaturity_not_contains?: InputMaybe<Scalars['String']>;
  marketMaturity_not_contains_i?: InputMaybe<Scalars['String']>;
  marketMaturity_not_ends_with?: InputMaybe<Scalars['String']>;
  marketMaturity_not_ends_with_i?: InputMaybe<Scalars['String']>;
  marketMaturity_not_i?: InputMaybe<Scalars['String']>;
  marketMaturity_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  marketMaturity_not_starts_with?: InputMaybe<Scalars['String']>;
  marketMaturity_not_starts_with_i?: InputMaybe<Scalars['String']>;
  marketMaturity_starts_with?: InputMaybe<Scalars['String']>;
  marketMaturity_starts_with_i?: InputMaybe<Scalars['String']>;
  maxDeliveryTime?: InputMaybe<Scalars['String']>;
  maxDeliveryTime_contains?: InputMaybe<Scalars['String']>;
  maxDeliveryTime_contains_i?: InputMaybe<Scalars['String']>;
  maxDeliveryTime_ends_with?: InputMaybe<Scalars['String']>;
  maxDeliveryTime_ends_with_i?: InputMaybe<Scalars['String']>;
  maxDeliveryTime_i?: InputMaybe<Scalars['String']>;
  maxDeliveryTime_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  maxDeliveryTime_not?: InputMaybe<Scalars['String']>;
  maxDeliveryTime_not_contains?: InputMaybe<Scalars['String']>;
  maxDeliveryTime_not_contains_i?: InputMaybe<Scalars['String']>;
  maxDeliveryTime_not_ends_with?: InputMaybe<Scalars['String']>;
  maxDeliveryTime_not_ends_with_i?: InputMaybe<Scalars['String']>;
  maxDeliveryTime_not_i?: InputMaybe<Scalars['String']>;
  maxDeliveryTime_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  maxDeliveryTime_not_starts_with?: InputMaybe<Scalars['String']>;
  maxDeliveryTime_not_starts_with_i?: InputMaybe<Scalars['String']>;
  maxDeliveryTime_starts_with?: InputMaybe<Scalars['String']>;
  maxDeliveryTime_starts_with_i?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_i?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_i?: InputMaybe<Scalars['String']>;
  name_i?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_i?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_i?: InputMaybe<Scalars['String']>;
  name_not_i?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_i?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_i?: InputMaybe<Scalars['String']>;
  paysShipmentAfter?: InputMaybe<Scalars['Int']>;
  paysShipmentAfter_gt?: InputMaybe<Scalars['Int']>;
  paysShipmentAfter_gte?: InputMaybe<Scalars['Int']>;
  paysShipmentAfter_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  paysShipmentAfter_lt?: InputMaybe<Scalars['Int']>;
  paysShipmentAfter_lte?: InputMaybe<Scalars['Int']>;
  paysShipmentAfter_not?: InputMaybe<Scalars['Int']>;
  paysShipmentAfter_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  phone?: InputMaybe<Scalars['String']>;
  phone_contains?: InputMaybe<Scalars['String']>;
  phone_contains_i?: InputMaybe<Scalars['String']>;
  phone_ends_with?: InputMaybe<Scalars['String']>;
  phone_ends_with_i?: InputMaybe<Scalars['String']>;
  phone_i?: InputMaybe<Scalars['String']>;
  phone_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  phone_not?: InputMaybe<Scalars['String']>;
  phone_not_contains?: InputMaybe<Scalars['String']>;
  phone_not_contains_i?: InputMaybe<Scalars['String']>;
  phone_not_ends_with?: InputMaybe<Scalars['String']>;
  phone_not_ends_with_i?: InputMaybe<Scalars['String']>;
  phone_not_i?: InputMaybe<Scalars['String']>;
  phone_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  phone_not_starts_with?: InputMaybe<Scalars['String']>;
  phone_not_starts_with_i?: InputMaybe<Scalars['String']>;
  phone_starts_with?: InputMaybe<Scalars['String']>;
  phone_starts_with_i?: InputMaybe<Scalars['String']>;
  /**  condition must be true for all nodes  */
  products_every?: InputMaybe<ProductWhereInput>;
  /**  condition must be false for all nodes  */
  products_none?: InputMaybe<ProductWhereInput>;
  /**  condition must be true for at least 1 node  */
  products_some?: InputMaybe<ProductWhereInput>;
  sales?: InputMaybe<Scalars['Boolean']>;
  sales_not?: InputMaybe<Scalars['Boolean']>;
  siigoId?: InputMaybe<Scalars['String']>;
  siigoId_contains?: InputMaybe<Scalars['String']>;
  siigoId_contains_i?: InputMaybe<Scalars['String']>;
  siigoId_ends_with?: InputMaybe<Scalars['String']>;
  siigoId_ends_with_i?: InputMaybe<Scalars['String']>;
  siigoId_i?: InputMaybe<Scalars['String']>;
  siigoId_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siigoId_not?: InputMaybe<Scalars['String']>;
  siigoId_not_contains?: InputMaybe<Scalars['String']>;
  siigoId_not_contains_i?: InputMaybe<Scalars['String']>;
  siigoId_not_ends_with?: InputMaybe<Scalars['String']>;
  siigoId_not_ends_with_i?: InputMaybe<Scalars['String']>;
  siigoId_not_i?: InputMaybe<Scalars['String']>;
  siigoId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  siigoId_not_starts_with?: InputMaybe<Scalars['String']>;
  siigoId_not_starts_with_i?: InputMaybe<Scalars['String']>;
  siigoId_starts_with?: InputMaybe<Scalars['String']>;
  siigoId_starts_with_i?: InputMaybe<Scalars['String']>;
  socialService?: InputMaybe<Scalars['String']>;
  socialService_contains?: InputMaybe<Scalars['String']>;
  socialService_contains_i?: InputMaybe<Scalars['String']>;
  socialService_ends_with?: InputMaybe<Scalars['String']>;
  socialService_ends_with_i?: InputMaybe<Scalars['String']>;
  socialService_i?: InputMaybe<Scalars['String']>;
  socialService_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  socialService_not?: InputMaybe<Scalars['String']>;
  socialService_not_contains?: InputMaybe<Scalars['String']>;
  socialService_not_contains_i?: InputMaybe<Scalars['String']>;
  socialService_not_ends_with?: InputMaybe<Scalars['String']>;
  socialService_not_ends_with_i?: InputMaybe<Scalars['String']>;
  socialService_not_i?: InputMaybe<Scalars['String']>;
  socialService_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  socialService_not_starts_with?: InputMaybe<Scalars['String']>;
  socialService_not_starts_with_i?: InputMaybe<Scalars['String']>;
  socialService_starts_with?: InputMaybe<Scalars['String']>;
  socialService_starts_with_i?: InputMaybe<Scalars['String']>;
  storeSales?: InputMaybe<Scalars['Int']>;
  storeSales_gt?: InputMaybe<Scalars['Int']>;
  storeSales_gte?: InputMaybe<Scalars['Int']>;
  storeSales_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  storeSales_lt?: InputMaybe<Scalars['Int']>;
  storeSales_lte?: InputMaybe<Scalars['Int']>;
  storeSales_not?: InputMaybe<Scalars['Int']>;
  storeSales_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  video?: InputMaybe<Scalars['String']>;
  video_contains?: InputMaybe<Scalars['String']>;
  video_contains_i?: InputMaybe<Scalars['String']>;
  video_ends_with?: InputMaybe<Scalars['String']>;
  video_ends_with_i?: InputMaybe<Scalars['String']>;
  video_i?: InputMaybe<Scalars['String']>;
  video_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  video_not?: InputMaybe<Scalars['String']>;
  video_not_contains?: InputMaybe<Scalars['String']>;
  video_not_contains_i?: InputMaybe<Scalars['String']>;
  video_not_ends_with?: InputMaybe<Scalars['String']>;
  video_not_ends_with_i?: InputMaybe<Scalars['String']>;
  video_not_i?: InputMaybe<Scalars['String']>;
  video_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  video_not_starts_with?: InputMaybe<Scalars['String']>;
  video_not_starts_with_i?: InputMaybe<Scalars['String']>;
  video_starts_with?: InputMaybe<Scalars['String']>;
  video_starts_with_i?: InputMaybe<Scalars['String']>;
  webPage?: InputMaybe<Scalars['Boolean']>;
  webPage_not?: InputMaybe<Scalars['Boolean']>;
  /**  condition must be true for all nodes  */
  workingDays_every?: InputMaybe<WeekDayWhereInput>;
  /**  condition must be false for all nodes  */
  workingDays_none?: InputMaybe<WeekDayWhereInput>;
  /**  condition must be true for at least 1 node  */
  workingDays_some?: InputMaybe<WeekDayWhereInput>;
};

export type StoreWhereUniqueInput = {
  id: Scalars['ID'];
};

export type StoresCreateInput = {
  data?: InputMaybe<StoreCreateInput>;
};

export type StoresUpdateInput = {
  data?: InputMaybe<StoreUpdateInput>;
  id: Scalars['ID'];
};

/**  A keystone list  */
export type Tax = {
  __typename?: 'Tax';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  siigoId?: Maybe<Scalars['Int']>;
};

export type TaxCreateInput = {
  name?: InputMaybe<Scalars['String']>;
  siigoId?: InputMaybe<Scalars['Int']>;
};

export type TaxUpdateInput = {
  name?: InputMaybe<Scalars['String']>;
  siigoId?: InputMaybe<Scalars['Int']>;
};

export type TaxWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<TaxWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<TaxWhereInput>>>;
  id?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_i?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_i?: InputMaybe<Scalars['String']>;
  name_i?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_i?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_i?: InputMaybe<Scalars['String']>;
  name_not_i?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_i?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_i?: InputMaybe<Scalars['String']>;
  siigoId?: InputMaybe<Scalars['Int']>;
  siigoId_gt?: InputMaybe<Scalars['Int']>;
  siigoId_gte?: InputMaybe<Scalars['Int']>;
  siigoId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  siigoId_lt?: InputMaybe<Scalars['Int']>;
  siigoId_lte?: InputMaybe<Scalars['Int']>;
  siigoId_not?: InputMaybe<Scalars['Int']>;
  siigoId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type TaxWhereUniqueInput = {
  id: Scalars['ID'];
};

export type TaxesCreateInput = {
  data?: InputMaybe<TaxCreateInput>;
};

export type TaxesUpdateInput = {
  data?: InputMaybe<TaxUpdateInput>;
  id: Scalars['ID'];
};

export type UpdateCartAddressResponse = {
  __typename?: 'UpdateCartAddressResponse';
  address: Address;
  addressUpdated: Scalars['Boolean'];
  cartCreated: Scalars['Boolean'];
};

/**  A keystone list  */
export type User = {
  __typename?: 'User';
  _addressMeta?: Maybe<_QueryMeta>;
  _categoryMeta?: Maybe<_QueryMeta>;
  _sellOrderMeta?: Maybe<_QueryMeta>;
  address: Array<Address>;
  category: Array<Category>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  identification?: Maybe<Scalars['String']>;
  identificationType?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  magicAuthIssuedAt?: Maybe<Scalars['String']>;
  magicAuthRedeemedAt?: Maybe<Scalars['String']>;
  magicAuthToken_is_set?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  passwordResetIssuedAt?: Maybe<Scalars['String']>;
  passwordResetRedeemedAt?: Maybe<Scalars['String']>;
  passwordResetToken_is_set?: Maybe<Scalars['Boolean']>;
  password_is_set?: Maybe<Scalars['Boolean']>;
  phone?: Maybe<Scalars['String']>;
  role?: Maybe<Role>;
  sellOrder: Array<SellOrder>;
};


/**  A keystone list  */
export type User_AddressMetaArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<SortAddressesBy>>;
  where?: InputMaybe<AddressWhereInput>;
};


/**  A keystone list  */
export type User_CategoryMetaArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<SortCategoriesBy>>;
  where?: InputMaybe<CategoryWhereInput>;
};


/**  A keystone list  */
export type User_SellOrderMetaArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<SortSellOrdersBy>>;
  where?: InputMaybe<SellOrderWhereInput>;
};


/**  A keystone list  */
export type UserAddressArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<SortAddressesBy>>;
  where?: InputMaybe<AddressWhereInput>;
};


/**  A keystone list  */
export type UserCategoryArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<SortCategoriesBy>>;
  where?: InputMaybe<CategoryWhereInput>;
};


/**  A keystone list  */
export type UserSellOrderArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Array<SortSellOrdersBy>>;
  where?: InputMaybe<SellOrderWhereInput>;
};

export type UserAuthenticationWithPasswordFailure = {
  __typename?: 'UserAuthenticationWithPasswordFailure';
  code: PasswordAuthErrorCode;
  message: Scalars['String'];
};

export type UserAuthenticationWithPasswordResult = UserAuthenticationWithPasswordFailure | UserAuthenticationWithPasswordSuccess;

export type UserAuthenticationWithPasswordSuccess = {
  __typename?: 'UserAuthenticationWithPasswordSuccess';
  item: User;
  sessionToken: Scalars['String'];
};

export type UserCreateInput = {
  address?: InputMaybe<AddressRelateToManyInput>;
  category?: InputMaybe<CategoryRelateToManyInput>;
  email?: InputMaybe<Scalars['String']>;
  identification?: InputMaybe<Scalars['String']>;
  identificationType?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  magicAuthIssuedAt?: InputMaybe<Scalars['String']>;
  magicAuthRedeemedAt?: InputMaybe<Scalars['String']>;
  magicAuthToken?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  passwordResetIssuedAt?: InputMaybe<Scalars['String']>;
  passwordResetRedeemedAt?: InputMaybe<Scalars['String']>;
  passwordResetToken?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<RoleRelateToOneInput>;
  sellOrder?: InputMaybe<SellOrderRelateToManyInput>;
};

export type UserRelateToManyInput = {
  connect?: InputMaybe<Array<InputMaybe<UserWhereUniqueInput>>>;
  create?: InputMaybe<Array<InputMaybe<UserCreateInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<UserWhereUniqueInput>>>;
  disconnectAll?: InputMaybe<Scalars['Boolean']>;
};

export type UserRelateToOneInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  create?: InputMaybe<UserCreateInput>;
  disconnect?: InputMaybe<UserWhereUniqueInput>;
  disconnectAll?: InputMaybe<Scalars['Boolean']>;
};

export type UserUpdateInput = {
  address?: InputMaybe<AddressRelateToManyInput>;
  category?: InputMaybe<CategoryRelateToManyInput>;
  email?: InputMaybe<Scalars['String']>;
  identification?: InputMaybe<Scalars['String']>;
  identificationType?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  magicAuthIssuedAt?: InputMaybe<Scalars['String']>;
  magicAuthRedeemedAt?: InputMaybe<Scalars['String']>;
  magicAuthToken?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  passwordResetIssuedAt?: InputMaybe<Scalars['String']>;
  passwordResetRedeemedAt?: InputMaybe<Scalars['String']>;
  passwordResetToken?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<RoleRelateToOneInput>;
  sellOrder?: InputMaybe<SellOrderRelateToManyInput>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<UserWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<UserWhereInput>>>;
  /**  condition must be true for all nodes  */
  address_every?: InputMaybe<AddressWhereInput>;
  /**  condition must be false for all nodes  */
  address_none?: InputMaybe<AddressWhereInput>;
  /**  condition must be true for at least 1 node  */
  address_some?: InputMaybe<AddressWhereInput>;
  /**  condition must be true for all nodes  */
  category_every?: InputMaybe<CategoryWhereInput>;
  /**  condition must be false for all nodes  */
  category_none?: InputMaybe<CategoryWhereInput>;
  /**  condition must be true for at least 1 node  */
  category_some?: InputMaybe<CategoryWhereInput>;
  email?: InputMaybe<Scalars['String']>;
  email_contains?: InputMaybe<Scalars['String']>;
  email_contains_i?: InputMaybe<Scalars['String']>;
  email_ends_with?: InputMaybe<Scalars['String']>;
  email_ends_with_i?: InputMaybe<Scalars['String']>;
  email_i?: InputMaybe<Scalars['String']>;
  email_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  email_not?: InputMaybe<Scalars['String']>;
  email_not_contains?: InputMaybe<Scalars['String']>;
  email_not_contains_i?: InputMaybe<Scalars['String']>;
  email_not_ends_with?: InputMaybe<Scalars['String']>;
  email_not_ends_with_i?: InputMaybe<Scalars['String']>;
  email_not_i?: InputMaybe<Scalars['String']>;
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  email_not_starts_with?: InputMaybe<Scalars['String']>;
  email_not_starts_with_i?: InputMaybe<Scalars['String']>;
  email_starts_with?: InputMaybe<Scalars['String']>;
  email_starts_with_i?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  identification?: InputMaybe<Scalars['String']>;
  identificationType?: InputMaybe<Scalars['String']>;
  identificationType_contains?: InputMaybe<Scalars['String']>;
  identificationType_contains_i?: InputMaybe<Scalars['String']>;
  identificationType_ends_with?: InputMaybe<Scalars['String']>;
  identificationType_ends_with_i?: InputMaybe<Scalars['String']>;
  identificationType_i?: InputMaybe<Scalars['String']>;
  identificationType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  identificationType_not?: InputMaybe<Scalars['String']>;
  identificationType_not_contains?: InputMaybe<Scalars['String']>;
  identificationType_not_contains_i?: InputMaybe<Scalars['String']>;
  identificationType_not_ends_with?: InputMaybe<Scalars['String']>;
  identificationType_not_ends_with_i?: InputMaybe<Scalars['String']>;
  identificationType_not_i?: InputMaybe<Scalars['String']>;
  identificationType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  identificationType_not_starts_with?: InputMaybe<Scalars['String']>;
  identificationType_not_starts_with_i?: InputMaybe<Scalars['String']>;
  identificationType_starts_with?: InputMaybe<Scalars['String']>;
  identificationType_starts_with_i?: InputMaybe<Scalars['String']>;
  identification_contains?: InputMaybe<Scalars['String']>;
  identification_contains_i?: InputMaybe<Scalars['String']>;
  identification_ends_with?: InputMaybe<Scalars['String']>;
  identification_ends_with_i?: InputMaybe<Scalars['String']>;
  identification_i?: InputMaybe<Scalars['String']>;
  identification_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  identification_not?: InputMaybe<Scalars['String']>;
  identification_not_contains?: InputMaybe<Scalars['String']>;
  identification_not_contains_i?: InputMaybe<Scalars['String']>;
  identification_not_ends_with?: InputMaybe<Scalars['String']>;
  identification_not_ends_with_i?: InputMaybe<Scalars['String']>;
  identification_not_i?: InputMaybe<Scalars['String']>;
  identification_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  identification_not_starts_with?: InputMaybe<Scalars['String']>;
  identification_not_starts_with_i?: InputMaybe<Scalars['String']>;
  identification_starts_with?: InputMaybe<Scalars['String']>;
  identification_starts_with_i?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  lastName_contains?: InputMaybe<Scalars['String']>;
  lastName_contains_i?: InputMaybe<Scalars['String']>;
  lastName_ends_with?: InputMaybe<Scalars['String']>;
  lastName_ends_with_i?: InputMaybe<Scalars['String']>;
  lastName_i?: InputMaybe<Scalars['String']>;
  lastName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lastName_not?: InputMaybe<Scalars['String']>;
  lastName_not_contains?: InputMaybe<Scalars['String']>;
  lastName_not_contains_i?: InputMaybe<Scalars['String']>;
  lastName_not_ends_with?: InputMaybe<Scalars['String']>;
  lastName_not_ends_with_i?: InputMaybe<Scalars['String']>;
  lastName_not_i?: InputMaybe<Scalars['String']>;
  lastName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lastName_not_starts_with?: InputMaybe<Scalars['String']>;
  lastName_not_starts_with_i?: InputMaybe<Scalars['String']>;
  lastName_starts_with?: InputMaybe<Scalars['String']>;
  lastName_starts_with_i?: InputMaybe<Scalars['String']>;
  magicAuthIssuedAt?: InputMaybe<Scalars['String']>;
  magicAuthIssuedAt_gt?: InputMaybe<Scalars['String']>;
  magicAuthIssuedAt_gte?: InputMaybe<Scalars['String']>;
  magicAuthIssuedAt_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  magicAuthIssuedAt_lt?: InputMaybe<Scalars['String']>;
  magicAuthIssuedAt_lte?: InputMaybe<Scalars['String']>;
  magicAuthIssuedAt_not?: InputMaybe<Scalars['String']>;
  magicAuthIssuedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  magicAuthRedeemedAt?: InputMaybe<Scalars['String']>;
  magicAuthRedeemedAt_gt?: InputMaybe<Scalars['String']>;
  magicAuthRedeemedAt_gte?: InputMaybe<Scalars['String']>;
  magicAuthRedeemedAt_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  magicAuthRedeemedAt_lt?: InputMaybe<Scalars['String']>;
  magicAuthRedeemedAt_lte?: InputMaybe<Scalars['String']>;
  magicAuthRedeemedAt_not?: InputMaybe<Scalars['String']>;
  magicAuthRedeemedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  magicAuthToken_is_set?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_i?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_i?: InputMaybe<Scalars['String']>;
  name_i?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_i?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_i?: InputMaybe<Scalars['String']>;
  name_not_i?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_i?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_i?: InputMaybe<Scalars['String']>;
  passwordResetIssuedAt?: InputMaybe<Scalars['String']>;
  passwordResetIssuedAt_gt?: InputMaybe<Scalars['String']>;
  passwordResetIssuedAt_gte?: InputMaybe<Scalars['String']>;
  passwordResetIssuedAt_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  passwordResetIssuedAt_lt?: InputMaybe<Scalars['String']>;
  passwordResetIssuedAt_lte?: InputMaybe<Scalars['String']>;
  passwordResetIssuedAt_not?: InputMaybe<Scalars['String']>;
  passwordResetIssuedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  passwordResetRedeemedAt?: InputMaybe<Scalars['String']>;
  passwordResetRedeemedAt_gt?: InputMaybe<Scalars['String']>;
  passwordResetRedeemedAt_gte?: InputMaybe<Scalars['String']>;
  passwordResetRedeemedAt_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  passwordResetRedeemedAt_lt?: InputMaybe<Scalars['String']>;
  passwordResetRedeemedAt_lte?: InputMaybe<Scalars['String']>;
  passwordResetRedeemedAt_not?: InputMaybe<Scalars['String']>;
  passwordResetRedeemedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  passwordResetToken_is_set?: InputMaybe<Scalars['Boolean']>;
  password_is_set?: InputMaybe<Scalars['Boolean']>;
  phone?: InputMaybe<Scalars['String']>;
  phone_contains?: InputMaybe<Scalars['String']>;
  phone_contains_i?: InputMaybe<Scalars['String']>;
  phone_ends_with?: InputMaybe<Scalars['String']>;
  phone_ends_with_i?: InputMaybe<Scalars['String']>;
  phone_i?: InputMaybe<Scalars['String']>;
  phone_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  phone_not?: InputMaybe<Scalars['String']>;
  phone_not_contains?: InputMaybe<Scalars['String']>;
  phone_not_contains_i?: InputMaybe<Scalars['String']>;
  phone_not_ends_with?: InputMaybe<Scalars['String']>;
  phone_not_ends_with_i?: InputMaybe<Scalars['String']>;
  phone_not_i?: InputMaybe<Scalars['String']>;
  phone_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  phone_not_starts_with?: InputMaybe<Scalars['String']>;
  phone_not_starts_with_i?: InputMaybe<Scalars['String']>;
  phone_starts_with?: InputMaybe<Scalars['String']>;
  phone_starts_with_i?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<RoleWhereInput>;
  role_is_null?: InputMaybe<Scalars['Boolean']>;
  /**  condition must be true for all nodes  */
  sellOrder_every?: InputMaybe<SellOrderWhereInput>;
  /**  condition must be false for all nodes  */
  sellOrder_none?: InputMaybe<SellOrderWhereInput>;
  /**  condition must be true for at least 1 node  */
  sellOrder_some?: InputMaybe<SellOrderWhereInput>;
};

export type UserWhereUniqueInput = {
  id: Scalars['ID'];
};

export type UsersCreateInput = {
  data?: InputMaybe<UserCreateInput>;
};

export type UsersUpdateInput = {
  data?: InputMaybe<UserUpdateInput>;
  id: Scalars['ID'];
};

export type ValidateUserPasswordResetTokenResult = {
  __typename?: 'ValidateUserPasswordResetTokenResult';
  code: PasswordResetRedemptionErrorCode;
  message: Scalars['String'];
};

/**  A keystone list  */
export type WeekDay = {
  __typename?: 'WeekDay';
  endTime?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  open?: Maybe<Scalars['String']>;
  startTime?: Maybe<Scalars['String']>;
};

export type WeekDayCreateInput = {
  endTime?: InputMaybe<Scalars['String']>;
  open?: InputMaybe<Scalars['String']>;
  startTime?: InputMaybe<Scalars['String']>;
};

export type WeekDayRelateToManyInput = {
  connect?: InputMaybe<Array<InputMaybe<WeekDayWhereUniqueInput>>>;
  create?: InputMaybe<Array<InputMaybe<WeekDayCreateInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<WeekDayWhereUniqueInput>>>;
  disconnectAll?: InputMaybe<Scalars['Boolean']>;
};

export type WeekDayUpdateInput = {
  endTime?: InputMaybe<Scalars['String']>;
  open?: InputMaybe<Scalars['String']>;
  startTime?: InputMaybe<Scalars['String']>;
};

export type WeekDayWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<WeekDayWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<WeekDayWhereInput>>>;
  endTime?: InputMaybe<Scalars['String']>;
  endTime_gt?: InputMaybe<Scalars['String']>;
  endTime_gte?: InputMaybe<Scalars['String']>;
  endTime_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  endTime_lt?: InputMaybe<Scalars['String']>;
  endTime_lte?: InputMaybe<Scalars['String']>;
  endTime_not?: InputMaybe<Scalars['String']>;
  endTime_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  open?: InputMaybe<Scalars['String']>;
  open_contains?: InputMaybe<Scalars['String']>;
  open_contains_i?: InputMaybe<Scalars['String']>;
  open_ends_with?: InputMaybe<Scalars['String']>;
  open_ends_with_i?: InputMaybe<Scalars['String']>;
  open_i?: InputMaybe<Scalars['String']>;
  open_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  open_not?: InputMaybe<Scalars['String']>;
  open_not_contains?: InputMaybe<Scalars['String']>;
  open_not_contains_i?: InputMaybe<Scalars['String']>;
  open_not_ends_with?: InputMaybe<Scalars['String']>;
  open_not_ends_with_i?: InputMaybe<Scalars['String']>;
  open_not_i?: InputMaybe<Scalars['String']>;
  open_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  open_not_starts_with?: InputMaybe<Scalars['String']>;
  open_not_starts_with_i?: InputMaybe<Scalars['String']>;
  open_starts_with?: InputMaybe<Scalars['String']>;
  open_starts_with_i?: InputMaybe<Scalars['String']>;
  startTime?: InputMaybe<Scalars['String']>;
  startTime_gt?: InputMaybe<Scalars['String']>;
  startTime_gte?: InputMaybe<Scalars['String']>;
  startTime_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startTime_lt?: InputMaybe<Scalars['String']>;
  startTime_lte?: InputMaybe<Scalars['String']>;
  startTime_not?: InputMaybe<Scalars['String']>;
  startTime_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type WeekDayWhereUniqueInput = {
  id: Scalars['ID'];
};

export type WeekDaysCreateInput = {
  data?: InputMaybe<WeekDayCreateInput>;
};

export type WeekDaysUpdateInput = {
  data?: InputMaybe<WeekDayUpdateInput>;
  id: Scalars['ID'];
};

/**  A keystone list  */
export type WorkWithUsRequest = {
  __typename?: 'WorkWithUsRequest';
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  verified?: Maybe<Scalars['String']>;
};

export type WorkWithUsRequestCreateInput = {
  email?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  verified?: InputMaybe<Scalars['String']>;
};

export type WorkWithUsRequestUpdateInput = {
  email?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  verified?: InputMaybe<Scalars['String']>;
};

export type WorkWithUsRequestWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<WorkWithUsRequestWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<WorkWithUsRequestWhereInput>>>;
  email?: InputMaybe<Scalars['String']>;
  email_contains?: InputMaybe<Scalars['String']>;
  email_contains_i?: InputMaybe<Scalars['String']>;
  email_ends_with?: InputMaybe<Scalars['String']>;
  email_ends_with_i?: InputMaybe<Scalars['String']>;
  email_i?: InputMaybe<Scalars['String']>;
  email_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  email_not?: InputMaybe<Scalars['String']>;
  email_not_contains?: InputMaybe<Scalars['String']>;
  email_not_contains_i?: InputMaybe<Scalars['String']>;
  email_not_ends_with?: InputMaybe<Scalars['String']>;
  email_not_ends_with_i?: InputMaybe<Scalars['String']>;
  email_not_i?: InputMaybe<Scalars['String']>;
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  email_not_starts_with?: InputMaybe<Scalars['String']>;
  email_not_starts_with_i?: InputMaybe<Scalars['String']>;
  email_starts_with?: InputMaybe<Scalars['String']>;
  email_starts_with_i?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_i?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_i?: InputMaybe<Scalars['String']>;
  name_i?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_i?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_i?: InputMaybe<Scalars['String']>;
  name_not_i?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_i?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_i?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  phone_contains?: InputMaybe<Scalars['String']>;
  phone_contains_i?: InputMaybe<Scalars['String']>;
  phone_ends_with?: InputMaybe<Scalars['String']>;
  phone_ends_with_i?: InputMaybe<Scalars['String']>;
  phone_i?: InputMaybe<Scalars['String']>;
  phone_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  phone_not?: InputMaybe<Scalars['String']>;
  phone_not_contains?: InputMaybe<Scalars['String']>;
  phone_not_contains_i?: InputMaybe<Scalars['String']>;
  phone_not_ends_with?: InputMaybe<Scalars['String']>;
  phone_not_ends_with_i?: InputMaybe<Scalars['String']>;
  phone_not_i?: InputMaybe<Scalars['String']>;
  phone_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  phone_not_starts_with?: InputMaybe<Scalars['String']>;
  phone_not_starts_with_i?: InputMaybe<Scalars['String']>;
  phone_starts_with?: InputMaybe<Scalars['String']>;
  phone_starts_with_i?: InputMaybe<Scalars['String']>;
  verified?: InputMaybe<Scalars['String']>;
  verified_contains?: InputMaybe<Scalars['String']>;
  verified_contains_i?: InputMaybe<Scalars['String']>;
  verified_ends_with?: InputMaybe<Scalars['String']>;
  verified_ends_with_i?: InputMaybe<Scalars['String']>;
  verified_i?: InputMaybe<Scalars['String']>;
  verified_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  verified_not?: InputMaybe<Scalars['String']>;
  verified_not_contains?: InputMaybe<Scalars['String']>;
  verified_not_contains_i?: InputMaybe<Scalars['String']>;
  verified_not_ends_with?: InputMaybe<Scalars['String']>;
  verified_not_ends_with_i?: InputMaybe<Scalars['String']>;
  verified_not_i?: InputMaybe<Scalars['String']>;
  verified_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  verified_not_starts_with?: InputMaybe<Scalars['String']>;
  verified_not_starts_with_i?: InputMaybe<Scalars['String']>;
  verified_starts_with?: InputMaybe<Scalars['String']>;
  verified_starts_with_i?: InputMaybe<Scalars['String']>;
};

export type WorkWithUsRequestWhereUniqueInput = {
  id: Scalars['ID'];
};

export type WorkWithUsRequestsCreateInput = {
  data?: InputMaybe<WorkWithUsRequestCreateInput>;
};

export type WorkWithUsRequestsUpdateInput = {
  data?: InputMaybe<WorkWithUsRequestUpdateInput>;
  id: Scalars['ID'];
};

export type _ListAccess = {
  __typename?: '_ListAccess';
  /**
   * Access Control settings for the currently logged in (or anonymous)
   * user when performing 'auth' operations.
   */
  auth?: Maybe<Scalars['JSON']>;
  /**
   * Access Control settings for the currently logged in (or anonymous)
   * user when performing 'create' operations.
   * NOTE: 'create' can only return a Boolean.
   * It is not possible to specify a declarative Where clause for this
   * operation
   */
  create?: Maybe<Scalars['Boolean']>;
  /**
   * Access Control settings for the currently logged in (or anonymous)
   * user when performing 'delete' operations.
   */
  delete?: Maybe<Scalars['JSON']>;
  /**
   * Access Control settings for the currently logged in (or anonymous)
   * user when performing 'read' operations.
   */
  read?: Maybe<Scalars['JSON']>;
  /**
   * Access Control settings for the currently logged in (or anonymous)
   * user when performing 'update' operations.
   */
  update?: Maybe<Scalars['JSON']>;
};

export type _ListInputTypes = {
  __typename?: '_ListInputTypes';
  /** Create mutation input type name */
  createInput?: Maybe<Scalars['String']>;
  /** Create many mutation input type name */
  createManyInput?: Maybe<Scalars['String']>;
  /** Update mutation name input */
  updateInput?: Maybe<Scalars['String']>;
  /** Update many mutation name input */
  updateManyInput?: Maybe<Scalars['String']>;
  /** Input type for matching multiple items */
  whereInput?: Maybe<Scalars['String']>;
  /** Input type for matching a unique item */
  whereUniqueInput?: Maybe<Scalars['String']>;
};

export type _ListMeta = {
  __typename?: '_ListMeta';
  /** Access control configuration for the currently authenticated request */
  access?: Maybe<_ListAccess>;
  /** The list's user-facing description */
  description?: Maybe<Scalars['String']>;
  /** The Keystone list key */
  key?: Maybe<Scalars['String']>;
  /** The list's display name in the Admin UI */
  label?: Maybe<Scalars['String']>;
  /**
   * The Keystone List name
   * @deprecated Use `key` instead
   */
  name?: Maybe<Scalars['String']>;
  /** The list's data path */
  path?: Maybe<Scalars['String']>;
  /** The list's plural display name */
  plural?: Maybe<Scalars['String']>;
  /** Information on the generated GraphQL schema */
  schema?: Maybe<_ListSchema>;
  /** The list's singular display name */
  singular?: Maybe<Scalars['String']>;
};

export type _ListMutations = {
  __typename?: '_ListMutations';
  /** Create mutation name */
  create?: Maybe<Scalars['String']>;
  /** Create many mutation name */
  createMany?: Maybe<Scalars['String']>;
  /** Delete mutation name */
  delete?: Maybe<Scalars['String']>;
  /** Delete many mutation name */
  deleteMany?: Maybe<Scalars['String']>;
  /** Update mutation name */
  update?: Maybe<Scalars['String']>;
  /** Update many mutation name */
  updateMany?: Maybe<Scalars['String']>;
};

export type _ListQueries = {
  __typename?: '_ListQueries';
  /** Single-item query name */
  item?: Maybe<Scalars['String']>;
  /** All-items query name */
  list?: Maybe<Scalars['String']>;
  /** List metadata query name */
  meta?: Maybe<Scalars['String']>;
};

export type _ListSchema = {
  __typename?: '_ListSchema';
  /** Information about fields defined on this list */
  fields?: Maybe<Array<Maybe<_ListSchemaFields>>>;
  /** Top-level GraphQL input types */
  inputTypes?: Maybe<_ListInputTypes>;
  /** Top-level GraphQL mutation names */
  mutations?: Maybe<_ListMutations>;
  /**
   * Top level GraphQL query names which either return this type, or
   * provide aggregate information about this type
   */
  queries?: Maybe<_ListQueries>;
  /**
   * Information about fields on other types which return this type, or
   * provide aggregate information about this type
   */
  relatedFields?: Maybe<Array<Maybe<_ListSchemaRelatedFields>>>;
  /** The typename as used in GraphQL queries */
  type?: Maybe<Scalars['String']>;
};


export type _ListSchemaFieldsArgs = {
  where?: InputMaybe<_ListSchemaFieldsInput>;
};

export type _ListSchemaFields = {
  __typename?: '_ListSchemaFields';
  /**
   * The name of the field in its list
   * @deprecated Use `path` instead
   */
  name?: Maybe<Scalars['String']>;
  /** The path of the field in its list */
  path?: Maybe<Scalars['String']>;
  /** The field type (ie, Checkbox, Text, etc) */
  type?: Maybe<Scalars['String']>;
};

export type _ListSchemaFieldsInput = {
  type?: InputMaybe<Scalars['String']>;
};

export type _ListSchemaRelatedFields = {
  __typename?: '_ListSchemaRelatedFields';
  /** A list of GraphQL field names */
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The typename as used in GraphQL queries */
  type?: Maybe<Scalars['String']>;
};

export type _QueryMeta = {
  __typename?: '_QueryMeta';
  count?: Maybe<Scalars['Int']>;
};

export type _KsListsMetaInput = {
  /** Whether this is an auxiliary helper list */
  auxiliary?: InputMaybe<Scalars['Boolean']>;
  key?: InputMaybe<Scalars['String']>;
};

/**  A keystone list  */
export type SignUpContent = {
  __typename?: 'signUpContent';
  description1?: Maybe<Scalars['String']>;
  description2?: Maybe<Scalars['String']>;
  description3?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  paragraph1?: Maybe<Scalars['String']>;
  paragraph2?: Maybe<Scalars['String']>;
  paragraph3?: Maybe<Scalars['String']>;
};
