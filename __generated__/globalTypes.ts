/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum PasswordAuthErrorCode {
  FAILURE = "FAILURE",
  IDENTITY_NOT_FOUND = "IDENTITY_NOT_FOUND",
  MULTIPLE_IDENTITY_MATCHES = "MULTIPLE_IDENTITY_MATCHES",
  SECRET_MISMATCH = "SECRET_MISMATCH",
  SECRET_NOT_SET = "SECRET_NOT_SET",
}

export enum PasswordResetRedemptionErrorCode {
  FAILURE = "FAILURE",
  IDENTITY_NOT_FOUND = "IDENTITY_NOT_FOUND",
  MULTIPLE_IDENTITY_MATCHES = "MULTIPLE_IDENTITY_MATCHES",
  TOKEN_EXPIRED = "TOKEN_EXPIRED",
  TOKEN_MISMATCH = "TOKEN_MISMATCH",
  TOKEN_NOT_SET = "TOKEN_NOT_SET",
  TOKEN_REDEEMED = "TOKEN_REDEEMED",
}

export enum PasswordResetRequestErrorCode {
  IDENTITY_NOT_FOUND = "IDENTITY_NOT_FOUND",
  MULTIPLE_IDENTITY_MATCHES = "MULTIPLE_IDENTITY_MATCHES",
}

export interface AddressCreateInput {
  addressL1?: string | null;
  description?: string | null;
  user?: UserRelateToOneInput | null;
  store?: StoreRelateToOneInput | null;
  city?: CityRelateToOneInput | null;
}

export interface AddressRelateToManyInput {
  create?: (AddressCreateInput | null)[] | null;
  connect?: (AddressWhereUniqueInput | null)[] | null;
  disconnect?: (AddressWhereUniqueInput | null)[] | null;
  disconnectAll?: boolean | null;
}

export interface AddressRelateToOneInput {
  create?: AddressCreateInput | null;
  connect?: AddressWhereUniqueInput | null;
  disconnect?: AddressWhereUniqueInput | null;
  disconnectAll?: boolean | null;
}

export interface AddressWhereInput {
  AND?: (AddressWhereInput | null)[] | null;
  OR?: (AddressWhereInput | null)[] | null;
  id?: string | null;
  id_not?: string | null;
  id_in?: (string | null)[] | null;
  id_not_in?: (string | null)[] | null;
  addressL1?: string | null;
  addressL1_not?: string | null;
  addressL1_contains?: string | null;
  addressL1_not_contains?: string | null;
  addressL1_starts_with?: string | null;
  addressL1_not_starts_with?: string | null;
  addressL1_ends_with?: string | null;
  addressL1_not_ends_with?: string | null;
  addressL1_i?: string | null;
  addressL1_not_i?: string | null;
  addressL1_contains_i?: string | null;
  addressL1_not_contains_i?: string | null;
  addressL1_starts_with_i?: string | null;
  addressL1_not_starts_with_i?: string | null;
  addressL1_ends_with_i?: string | null;
  addressL1_not_ends_with_i?: string | null;
  addressL1_in?: (string | null)[] | null;
  addressL1_not_in?: (string | null)[] | null;
  description?: string | null;
  description_not?: string | null;
  description_contains?: string | null;
  description_not_contains?: string | null;
  description_starts_with?: string | null;
  description_not_starts_with?: string | null;
  description_ends_with?: string | null;
  description_not_ends_with?: string | null;
  description_i?: string | null;
  description_not_i?: string | null;
  description_contains_i?: string | null;
  description_not_contains_i?: string | null;
  description_starts_with_i?: string | null;
  description_not_starts_with_i?: string | null;
  description_ends_with_i?: string | null;
  description_not_ends_with_i?: string | null;
  description_in?: (string | null)[] | null;
  description_not_in?: (string | null)[] | null;
  user?: UserWhereInput | null;
  user_is_null?: boolean | null;
  store?: StoreWhereInput | null;
  store_is_null?: boolean | null;
  city?: CityWhereInput | null;
  city_is_null?: boolean | null;
}

export interface AddressWhereUniqueInput {
  id: string;
}

export interface CategoryCreateInput {
  name?: string | null;
  description?: string | null;
  color?: string | null;
  type?: string | null;
  user?: UserRelateToManyInput | null;
  product?: ProductRelateToManyInput | null;
  icon?: any | null;
}

export interface CategoryRelateToManyInput {
  create?: (CategoryCreateInput | null)[] | null;
  connect?: (CategoryWhereUniqueInput | null)[] | null;
  disconnect?: (CategoryWhereUniqueInput | null)[] | null;
  disconnectAll?: boolean | null;
}

export interface CategoryWhereInput {
  AND?: (CategoryWhereInput | null)[] | null;
  OR?: (CategoryWhereInput | null)[] | null;
  id?: string | null;
  id_not?: string | null;
  id_in?: (string | null)[] | null;
  id_not_in?: (string | null)[] | null;
  name?: string | null;
  name_not?: string | null;
  name_contains?: string | null;
  name_not_contains?: string | null;
  name_starts_with?: string | null;
  name_not_starts_with?: string | null;
  name_ends_with?: string | null;
  name_not_ends_with?: string | null;
  name_i?: string | null;
  name_not_i?: string | null;
  name_contains_i?: string | null;
  name_not_contains_i?: string | null;
  name_starts_with_i?: string | null;
  name_not_starts_with_i?: string | null;
  name_ends_with_i?: string | null;
  name_not_ends_with_i?: string | null;
  name_in?: (string | null)[] | null;
  name_not_in?: (string | null)[] | null;
  description?: string | null;
  description_not?: string | null;
  description_contains?: string | null;
  description_not_contains?: string | null;
  description_starts_with?: string | null;
  description_not_starts_with?: string | null;
  description_ends_with?: string | null;
  description_not_ends_with?: string | null;
  description_i?: string | null;
  description_not_i?: string | null;
  description_contains_i?: string | null;
  description_not_contains_i?: string | null;
  description_starts_with_i?: string | null;
  description_not_starts_with_i?: string | null;
  description_ends_with_i?: string | null;
  description_not_ends_with_i?: string | null;
  description_in?: (string | null)[] | null;
  description_not_in?: (string | null)[] | null;
  color?: string | null;
  color_not?: string | null;
  color_contains?: string | null;
  color_not_contains?: string | null;
  color_starts_with?: string | null;
  color_not_starts_with?: string | null;
  color_ends_with?: string | null;
  color_not_ends_with?: string | null;
  color_i?: string | null;
  color_not_i?: string | null;
  color_contains_i?: string | null;
  color_not_contains_i?: string | null;
  color_starts_with_i?: string | null;
  color_not_starts_with_i?: string | null;
  color_ends_with_i?: string | null;
  color_not_ends_with_i?: string | null;
  color_in?: (string | null)[] | null;
  color_not_in?: (string | null)[] | null;
  type?: string | null;
  type_not?: string | null;
  type_contains?: string | null;
  type_not_contains?: string | null;
  type_starts_with?: string | null;
  type_not_starts_with?: string | null;
  type_ends_with?: string | null;
  type_not_ends_with?: string | null;
  type_i?: string | null;
  type_not_i?: string | null;
  type_contains_i?: string | null;
  type_not_contains_i?: string | null;
  type_starts_with_i?: string | null;
  type_not_starts_with_i?: string | null;
  type_ends_with_i?: string | null;
  type_not_ends_with_i?: string | null;
  type_in?: (string | null)[] | null;
  type_not_in?: (string | null)[] | null;
  user_every?: UserWhereInput | null;
  user_some?: UserWhereInput | null;
  user_none?: UserWhereInput | null;
  product_every?: ProductWhereInput | null;
  product_some?: ProductWhereInput | null;
  product_none?: ProductWhereInput | null;
  icon?: string | null;
  icon_not?: string | null;
  icon_in?: (string | null)[] | null;
  icon_not_in?: (string | null)[] | null;
}

export interface CategoryWhereUniqueInput {
  id: string;
}

export interface CityCreateInput {
  name?: string | null;
  shortName?: string | null;
  region?: RegionRelateToOneInput | null;
  latitude?: string | null;
  longitude?: string | null;
  addresses?: AddressRelateToManyInput | null;
  isoCode?: string | null;
}

export interface CityRelateToManyInput {
  create?: (CityCreateInput | null)[] | null;
  connect?: (CityWhereUniqueInput | null)[] | null;
  disconnect?: (CityWhereUniqueInput | null)[] | null;
  disconnectAll?: boolean | null;
}

export interface CityRelateToOneInput {
  create?: CityCreateInput | null;
  connect?: CityWhereUniqueInput | null;
  disconnect?: CityWhereUniqueInput | null;
  disconnectAll?: boolean | null;
}

export interface CityWhereInput {
  AND?: (CityWhereInput | null)[] | null;
  OR?: (CityWhereInput | null)[] | null;
  id?: string | null;
  id_not?: string | null;
  id_in?: (string | null)[] | null;
  id_not_in?: (string | null)[] | null;
  name?: string | null;
  name_not?: string | null;
  name_contains?: string | null;
  name_not_contains?: string | null;
  name_starts_with?: string | null;
  name_not_starts_with?: string | null;
  name_ends_with?: string | null;
  name_not_ends_with?: string | null;
  name_i?: string | null;
  name_not_i?: string | null;
  name_contains_i?: string | null;
  name_not_contains_i?: string | null;
  name_starts_with_i?: string | null;
  name_not_starts_with_i?: string | null;
  name_ends_with_i?: string | null;
  name_not_ends_with_i?: string | null;
  name_in?: (string | null)[] | null;
  name_not_in?: (string | null)[] | null;
  shortName?: string | null;
  shortName_not?: string | null;
  shortName_contains?: string | null;
  shortName_not_contains?: string | null;
  shortName_starts_with?: string | null;
  shortName_not_starts_with?: string | null;
  shortName_ends_with?: string | null;
  shortName_not_ends_with?: string | null;
  shortName_i?: string | null;
  shortName_not_i?: string | null;
  shortName_contains_i?: string | null;
  shortName_not_contains_i?: string | null;
  shortName_starts_with_i?: string | null;
  shortName_not_starts_with_i?: string | null;
  shortName_ends_with_i?: string | null;
  shortName_not_ends_with_i?: string | null;
  shortName_in?: (string | null)[] | null;
  shortName_not_in?: (string | null)[] | null;
  region?: RegionWhereInput | null;
  region_is_null?: boolean | null;
  latitude?: string | null;
  latitude_not?: string | null;
  latitude_contains?: string | null;
  latitude_not_contains?: string | null;
  latitude_starts_with?: string | null;
  latitude_not_starts_with?: string | null;
  latitude_ends_with?: string | null;
  latitude_not_ends_with?: string | null;
  latitude_i?: string | null;
  latitude_not_i?: string | null;
  latitude_contains_i?: string | null;
  latitude_not_contains_i?: string | null;
  latitude_starts_with_i?: string | null;
  latitude_not_starts_with_i?: string | null;
  latitude_ends_with_i?: string | null;
  latitude_not_ends_with_i?: string | null;
  latitude_in?: (string | null)[] | null;
  latitude_not_in?: (string | null)[] | null;
  longitude?: string | null;
  longitude_not?: string | null;
  longitude_contains?: string | null;
  longitude_not_contains?: string | null;
  longitude_starts_with?: string | null;
  longitude_not_starts_with?: string | null;
  longitude_ends_with?: string | null;
  longitude_not_ends_with?: string | null;
  longitude_i?: string | null;
  longitude_not_i?: string | null;
  longitude_contains_i?: string | null;
  longitude_not_contains_i?: string | null;
  longitude_starts_with_i?: string | null;
  longitude_not_starts_with_i?: string | null;
  longitude_ends_with_i?: string | null;
  longitude_not_ends_with_i?: string | null;
  longitude_in?: (string | null)[] | null;
  longitude_not_in?: (string | null)[] | null;
  addresses_every?: AddressWhereInput | null;
  addresses_some?: AddressWhereInput | null;
  addresses_none?: AddressWhereInput | null;
  isoCode?: string | null;
  isoCode_not?: string | null;
  isoCode_contains?: string | null;
  isoCode_not_contains?: string | null;
  isoCode_starts_with?: string | null;
  isoCode_not_starts_with?: string | null;
  isoCode_ends_with?: string | null;
  isoCode_not_ends_with?: string | null;
  isoCode_i?: string | null;
  isoCode_not_i?: string | null;
  isoCode_contains_i?: string | null;
  isoCode_not_contains_i?: string | null;
  isoCode_starts_with_i?: string | null;
  isoCode_not_starts_with_i?: string | null;
  isoCode_ends_with_i?: string | null;
  isoCode_not_ends_with_i?: string | null;
  isoCode_in?: (string | null)[] | null;
  isoCode_not_in?: (string | null)[] | null;
}

export interface CityWhereUniqueInput {
  id: string;
}

export interface ContactRequestCreateInput {
  type?: string | null;
  name?: string | null;
  email?: string | null;
  phone?: string | null;
  message?: string | null;
}

export interface CountryCreateInput {
  name?: string | null;
  shortName?: string | null;
  iso3166?: string | null;
  regions?: RegionRelateToManyInput | null;
}

export interface CountryRelateToOneInput {
  create?: CountryCreateInput | null;
  connect?: CountryWhereUniqueInput | null;
  disconnect?: CountryWhereUniqueInput | null;
  disconnectAll?: boolean | null;
}

export interface CountryWhereInput {
  AND?: (CountryWhereInput | null)[] | null;
  OR?: (CountryWhereInput | null)[] | null;
  id?: string | null;
  id_not?: string | null;
  id_in?: (string | null)[] | null;
  id_not_in?: (string | null)[] | null;
  name?: string | null;
  name_not?: string | null;
  name_contains?: string | null;
  name_not_contains?: string | null;
  name_starts_with?: string | null;
  name_not_starts_with?: string | null;
  name_ends_with?: string | null;
  name_not_ends_with?: string | null;
  name_i?: string | null;
  name_not_i?: string | null;
  name_contains_i?: string | null;
  name_not_contains_i?: string | null;
  name_starts_with_i?: string | null;
  name_not_starts_with_i?: string | null;
  name_ends_with_i?: string | null;
  name_not_ends_with_i?: string | null;
  name_in?: (string | null)[] | null;
  name_not_in?: (string | null)[] | null;
  shortName?: string | null;
  shortName_not?: string | null;
  shortName_contains?: string | null;
  shortName_not_contains?: string | null;
  shortName_starts_with?: string | null;
  shortName_not_starts_with?: string | null;
  shortName_ends_with?: string | null;
  shortName_not_ends_with?: string | null;
  shortName_i?: string | null;
  shortName_not_i?: string | null;
  shortName_contains_i?: string | null;
  shortName_not_contains_i?: string | null;
  shortName_starts_with_i?: string | null;
  shortName_not_starts_with_i?: string | null;
  shortName_ends_with_i?: string | null;
  shortName_not_ends_with_i?: string | null;
  shortName_in?: (string | null)[] | null;
  shortName_not_in?: (string | null)[] | null;
  iso3166?: string | null;
  iso3166_not?: string | null;
  iso3166_contains?: string | null;
  iso3166_not_contains?: string | null;
  iso3166_starts_with?: string | null;
  iso3166_not_starts_with?: string | null;
  iso3166_ends_with?: string | null;
  iso3166_not_ends_with?: string | null;
  iso3166_i?: string | null;
  iso3166_not_i?: string | null;
  iso3166_contains_i?: string | null;
  iso3166_not_contains_i?: string | null;
  iso3166_starts_with_i?: string | null;
  iso3166_not_starts_with_i?: string | null;
  iso3166_ends_with_i?: string | null;
  iso3166_not_ends_with_i?: string | null;
  iso3166_in?: (string | null)[] | null;
  iso3166_not_in?: (string | null)[] | null;
  regions_every?: RegionWhereInput | null;
  regions_some?: RegionWhereInput | null;
  regions_none?: RegionWhereInput | null;
}

export interface CountryWhereUniqueInput {
  id: string;
}

export interface CouponCreateInput {
  name?: string | null;
  shortName?: string | null;
  description?: string | null;
  owner?: StoreRelateToOneInput | null;
  type?: string | null;
  minCartAmount?: number | null;
  amount?: number | null;
  quantity?: number | null;
  endDate?: string | null;
  sellOrders?: SellOrderRelateToManyInput | null;
}

export interface CouponRelateToManyInput {
  create?: (CouponCreateInput | null)[] | null;
  connect?: (CouponWhereUniqueInput | null)[] | null;
  disconnect?: (CouponWhereUniqueInput | null)[] | null;
  disconnectAll?: boolean | null;
}

export interface CouponWhereInput {
  AND?: (CouponWhereInput | null)[] | null;
  OR?: (CouponWhereInput | null)[] | null;
  id?: string | null;
  id_not?: string | null;
  id_in?: (string | null)[] | null;
  id_not_in?: (string | null)[] | null;
  name?: string | null;
  name_not?: string | null;
  name_contains?: string | null;
  name_not_contains?: string | null;
  name_starts_with?: string | null;
  name_not_starts_with?: string | null;
  name_ends_with?: string | null;
  name_not_ends_with?: string | null;
  name_i?: string | null;
  name_not_i?: string | null;
  name_contains_i?: string | null;
  name_not_contains_i?: string | null;
  name_starts_with_i?: string | null;
  name_not_starts_with_i?: string | null;
  name_ends_with_i?: string | null;
  name_not_ends_with_i?: string | null;
  name_in?: (string | null)[] | null;
  name_not_in?: (string | null)[] | null;
  shortName?: string | null;
  shortName_not?: string | null;
  shortName_contains?: string | null;
  shortName_not_contains?: string | null;
  shortName_starts_with?: string | null;
  shortName_not_starts_with?: string | null;
  shortName_ends_with?: string | null;
  shortName_not_ends_with?: string | null;
  shortName_i?: string | null;
  shortName_not_i?: string | null;
  shortName_contains_i?: string | null;
  shortName_not_contains_i?: string | null;
  shortName_starts_with_i?: string | null;
  shortName_not_starts_with_i?: string | null;
  shortName_ends_with_i?: string | null;
  shortName_not_ends_with_i?: string | null;
  shortName_in?: (string | null)[] | null;
  shortName_not_in?: (string | null)[] | null;
  description?: string | null;
  description_not?: string | null;
  description_contains?: string | null;
  description_not_contains?: string | null;
  description_starts_with?: string | null;
  description_not_starts_with?: string | null;
  description_ends_with?: string | null;
  description_not_ends_with?: string | null;
  description_i?: string | null;
  description_not_i?: string | null;
  description_contains_i?: string | null;
  description_not_contains_i?: string | null;
  description_starts_with_i?: string | null;
  description_not_starts_with_i?: string | null;
  description_ends_with_i?: string | null;
  description_not_ends_with_i?: string | null;
  description_in?: (string | null)[] | null;
  description_not_in?: (string | null)[] | null;
  owner?: StoreWhereInput | null;
  owner_is_null?: boolean | null;
  type?: string | null;
  type_not?: string | null;
  type_contains?: string | null;
  type_not_contains?: string | null;
  type_starts_with?: string | null;
  type_not_starts_with?: string | null;
  type_ends_with?: string | null;
  type_not_ends_with?: string | null;
  type_i?: string | null;
  type_not_i?: string | null;
  type_contains_i?: string | null;
  type_not_contains_i?: string | null;
  type_starts_with_i?: string | null;
  type_not_starts_with_i?: string | null;
  type_ends_with_i?: string | null;
  type_not_ends_with_i?: string | null;
  type_in?: (string | null)[] | null;
  type_not_in?: (string | null)[] | null;
  minCartAmount?: number | null;
  minCartAmount_not?: number | null;
  minCartAmount_lt?: number | null;
  minCartAmount_lte?: number | null;
  minCartAmount_gt?: number | null;
  minCartAmount_gte?: number | null;
  minCartAmount_in?: (number | null)[] | null;
  minCartAmount_not_in?: (number | null)[] | null;
  amount?: number | null;
  amount_not?: number | null;
  amount_lt?: number | null;
  amount_lte?: number | null;
  amount_gt?: number | null;
  amount_gte?: number | null;
  amount_in?: (number | null)[] | null;
  amount_not_in?: (number | null)[] | null;
  quantity?: number | null;
  quantity_not?: number | null;
  quantity_lt?: number | null;
  quantity_lte?: number | null;
  quantity_gt?: number | null;
  quantity_gte?: number | null;
  quantity_in?: (number | null)[] | null;
  quantity_not_in?: (number | null)[] | null;
  endDate?: string | null;
  endDate_not?: string | null;
  endDate_lt?: string | null;
  endDate_lte?: string | null;
  endDate_gt?: string | null;
  endDate_gte?: string | null;
  endDate_in?: (string | null)[] | null;
  endDate_not_in?: (string | null)[] | null;
  sellOrders_every?: SellOrderWhereInput | null;
  sellOrders_some?: SellOrderWhereInput | null;
  sellOrders_none?: SellOrderWhereInput | null;
}

export interface CouponWhereUniqueInput {
  id: string;
}

export interface LineItemCreateInput {
  quantity?: number | null;
  product?: ProductRelateToOneInput | null;
  sellOrder?: SellOrderRelateToOneInput | null;
  price?: number | null;
}

export interface LineItemRelateToManyInput {
  create?: (LineItemCreateInput | null)[] | null;
  connect?: (LineItemWhereUniqueInput | null)[] | null;
  disconnect?: (LineItemWhereUniqueInput | null)[] | null;
  disconnectAll?: boolean | null;
}

export interface LineItemWhereInput {
  AND?: (LineItemWhereInput | null)[] | null;
  OR?: (LineItemWhereInput | null)[] | null;
  id?: string | null;
  id_not?: string | null;
  id_in?: (string | null)[] | null;
  id_not_in?: (string | null)[] | null;
  quantity?: number | null;
  quantity_not?: number | null;
  quantity_lt?: number | null;
  quantity_lte?: number | null;
  quantity_gt?: number | null;
  quantity_gte?: number | null;
  quantity_in?: (number | null)[] | null;
  quantity_not_in?: (number | null)[] | null;
  product?: ProductWhereInput | null;
  product_is_null?: boolean | null;
  sellOrder?: SellOrderWhereInput | null;
  sellOrder_is_null?: boolean | null;
  price?: number | null;
  price_not?: number | null;
  price_lt?: number | null;
  price_lte?: number | null;
  price_gt?: number | null;
  price_gte?: number | null;
  price_in?: (number | null)[] | null;
  price_not_in?: (number | null)[] | null;
}

export interface LineItemWhereUniqueInput {
  id: string;
}

export interface ProductCreateInput {
  brand?: string | null;
  name?: string | null;
  sku?: string | null;
  description?: string | null;
  photo?: ProductImageRelateToManyInput | null;
  video?: string | null;
  status?: string | null;
  price?: number | null;
  salePrice?: number | null;
  hasTax?: boolean | null;
  store?: StoreRelateToOneInput | null;
  productionTime?: number | null;
  category?: CategoryRelateToManyInput | null;
  heightMm?: number | null;
  widthMm?: number | null;
  depthMm?: number | null;
  refrigeration?: string | null;
  packingOnGlass?: boolean | null;
  packageType?: string | null;
  qtyPerPackage?: number | null;
  packageWeight?: number | null;
  lifetime?: number | null;
  minStock?: number | null;
  stock?: number | null;
  maxStockPerOrder?: number | null;
  caloriesPer100gr?: number | null;
  greenInpact?: string | null;
  ecoFriendly?: boolean | null;
  readyForConsumption?: boolean | null;
  easyPreparation?: boolean | null;
  otherRefrigerationType?: string | null;
  seals?: string | null;
  hasInvima?: string | null;
  hasNutritionalTable?: boolean | null;
  review?: ReviewRelateToManyInput | null;
  sodio?: number | null;
  calories100gr?: number | null;
}

export interface ProductImageCreateInput {
  image?: any | null;
  altText?: string | null;
  product?: ProductRelateToOneInput | null;
}

export interface ProductImageRelateToManyInput {
  create?: (ProductImageCreateInput | null)[] | null;
  connect?: (ProductImageWhereUniqueInput | null)[] | null;
  disconnect?: (ProductImageWhereUniqueInput | null)[] | null;
  disconnectAll?: boolean | null;
}

export interface ProductImageWhereInput {
  AND?: (ProductImageWhereInput | null)[] | null;
  OR?: (ProductImageWhereInput | null)[] | null;
  id?: string | null;
  id_not?: string | null;
  id_in?: (string | null)[] | null;
  id_not_in?: (string | null)[] | null;
  image?: string | null;
  image_not?: string | null;
  image_in?: (string | null)[] | null;
  image_not_in?: (string | null)[] | null;
  altText?: string | null;
  altText_not?: string | null;
  altText_contains?: string | null;
  altText_not_contains?: string | null;
  altText_starts_with?: string | null;
  altText_not_starts_with?: string | null;
  altText_ends_with?: string | null;
  altText_not_ends_with?: string | null;
  altText_i?: string | null;
  altText_not_i?: string | null;
  altText_contains_i?: string | null;
  altText_not_contains_i?: string | null;
  altText_starts_with_i?: string | null;
  altText_not_starts_with_i?: string | null;
  altText_ends_with_i?: string | null;
  altText_not_ends_with_i?: string | null;
  altText_in?: (string | null)[] | null;
  altText_not_in?: (string | null)[] | null;
  product?: ProductWhereInput | null;
  product_is_null?: boolean | null;
}

export interface ProductImageWhereUniqueInput {
  id: string;
}

export interface ProductRelateToManyInput {
  create?: (ProductCreateInput | null)[] | null;
  connect?: (ProductWhereUniqueInput | null)[] | null;
  disconnect?: (ProductWhereUniqueInput | null)[] | null;
  disconnectAll?: boolean | null;
}

export interface ProductRelateToOneInput {
  create?: ProductCreateInput | null;
  connect?: ProductWhereUniqueInput | null;
  disconnect?: ProductWhereUniqueInput | null;
  disconnectAll?: boolean | null;
}

export interface ProductWhereInput {
  AND?: (ProductWhereInput | null)[] | null;
  OR?: (ProductWhereInput | null)[] | null;
  id?: string | null;
  id_not?: string | null;
  id_in?: (string | null)[] | null;
  id_not_in?: (string | null)[] | null;
  brand?: string | null;
  brand_not?: string | null;
  brand_contains?: string | null;
  brand_not_contains?: string | null;
  brand_starts_with?: string | null;
  brand_not_starts_with?: string | null;
  brand_ends_with?: string | null;
  brand_not_ends_with?: string | null;
  brand_i?: string | null;
  brand_not_i?: string | null;
  brand_contains_i?: string | null;
  brand_not_contains_i?: string | null;
  brand_starts_with_i?: string | null;
  brand_not_starts_with_i?: string | null;
  brand_ends_with_i?: string | null;
  brand_not_ends_with_i?: string | null;
  brand_in?: (string | null)[] | null;
  brand_not_in?: (string | null)[] | null;
  name?: string | null;
  name_not?: string | null;
  name_contains?: string | null;
  name_not_contains?: string | null;
  name_starts_with?: string | null;
  name_not_starts_with?: string | null;
  name_ends_with?: string | null;
  name_not_ends_with?: string | null;
  name_i?: string | null;
  name_not_i?: string | null;
  name_contains_i?: string | null;
  name_not_contains_i?: string | null;
  name_starts_with_i?: string | null;
  name_not_starts_with_i?: string | null;
  name_ends_with_i?: string | null;
  name_not_ends_with_i?: string | null;
  name_in?: (string | null)[] | null;
  name_not_in?: (string | null)[] | null;
  sku?: string | null;
  sku_not?: string | null;
  sku_contains?: string | null;
  sku_not_contains?: string | null;
  sku_starts_with?: string | null;
  sku_not_starts_with?: string | null;
  sku_ends_with?: string | null;
  sku_not_ends_with?: string | null;
  sku_i?: string | null;
  sku_not_i?: string | null;
  sku_contains_i?: string | null;
  sku_not_contains_i?: string | null;
  sku_starts_with_i?: string | null;
  sku_not_starts_with_i?: string | null;
  sku_ends_with_i?: string | null;
  sku_not_ends_with_i?: string | null;
  sku_in?: (string | null)[] | null;
  sku_not_in?: (string | null)[] | null;
  description?: string | null;
  description_not?: string | null;
  description_contains?: string | null;
  description_not_contains?: string | null;
  description_starts_with?: string | null;
  description_not_starts_with?: string | null;
  description_ends_with?: string | null;
  description_not_ends_with?: string | null;
  description_i?: string | null;
  description_not_i?: string | null;
  description_contains_i?: string | null;
  description_not_contains_i?: string | null;
  description_starts_with_i?: string | null;
  description_not_starts_with_i?: string | null;
  description_ends_with_i?: string | null;
  description_not_ends_with_i?: string | null;
  description_in?: (string | null)[] | null;
  description_not_in?: (string | null)[] | null;
  photo_every?: ProductImageWhereInput | null;
  photo_some?: ProductImageWhereInput | null;
  photo_none?: ProductImageWhereInput | null;
  video?: string | null;
  video_not?: string | null;
  video_contains?: string | null;
  video_not_contains?: string | null;
  video_starts_with?: string | null;
  video_not_starts_with?: string | null;
  video_ends_with?: string | null;
  video_not_ends_with?: string | null;
  video_i?: string | null;
  video_not_i?: string | null;
  video_contains_i?: string | null;
  video_not_contains_i?: string | null;
  video_starts_with_i?: string | null;
  video_not_starts_with_i?: string | null;
  video_ends_with_i?: string | null;
  video_not_ends_with_i?: string | null;
  video_in?: (string | null)[] | null;
  video_not_in?: (string | null)[] | null;
  status?: string | null;
  status_not?: string | null;
  status_contains?: string | null;
  status_not_contains?: string | null;
  status_starts_with?: string | null;
  status_not_starts_with?: string | null;
  status_ends_with?: string | null;
  status_not_ends_with?: string | null;
  status_i?: string | null;
  status_not_i?: string | null;
  status_contains_i?: string | null;
  status_not_contains_i?: string | null;
  status_starts_with_i?: string | null;
  status_not_starts_with_i?: string | null;
  status_ends_with_i?: string | null;
  status_not_ends_with_i?: string | null;
  status_in?: (string | null)[] | null;
  status_not_in?: (string | null)[] | null;
  price?: number | null;
  price_not?: number | null;
  price_lt?: number | null;
  price_lte?: number | null;
  price_gt?: number | null;
  price_gte?: number | null;
  price_in?: (number | null)[] | null;
  price_not_in?: (number | null)[] | null;
  salePrice?: number | null;
  salePrice_not?: number | null;
  salePrice_lt?: number | null;
  salePrice_lte?: number | null;
  salePrice_gt?: number | null;
  salePrice_gte?: number | null;
  salePrice_in?: (number | null)[] | null;
  salePrice_not_in?: (number | null)[] | null;
  hasTax?: boolean | null;
  hasTax_not?: boolean | null;
  store?: StoreWhereInput | null;
  store_is_null?: boolean | null;
  productionTime?: number | null;
  productionTime_not?: number | null;
  productionTime_lt?: number | null;
  productionTime_lte?: number | null;
  productionTime_gt?: number | null;
  productionTime_gte?: number | null;
  productionTime_in?: (number | null)[] | null;
  productionTime_not_in?: (number | null)[] | null;
  category_every?: CategoryWhereInput | null;
  category_some?: CategoryWhereInput | null;
  category_none?: CategoryWhereInput | null;
  heightMm?: number | null;
  heightMm_not?: number | null;
  heightMm_lt?: number | null;
  heightMm_lte?: number | null;
  heightMm_gt?: number | null;
  heightMm_gte?: number | null;
  heightMm_in?: (number | null)[] | null;
  heightMm_not_in?: (number | null)[] | null;
  widthMm?: number | null;
  widthMm_not?: number | null;
  widthMm_lt?: number | null;
  widthMm_lte?: number | null;
  widthMm_gt?: number | null;
  widthMm_gte?: number | null;
  widthMm_in?: (number | null)[] | null;
  widthMm_not_in?: (number | null)[] | null;
  depthMm?: number | null;
  depthMm_not?: number | null;
  depthMm_lt?: number | null;
  depthMm_lte?: number | null;
  depthMm_gt?: number | null;
  depthMm_gte?: number | null;
  depthMm_in?: (number | null)[] | null;
  depthMm_not_in?: (number | null)[] | null;
  refrigeration?: string | null;
  refrigeration_not?: string | null;
  refrigeration_contains?: string | null;
  refrigeration_not_contains?: string | null;
  refrigeration_starts_with?: string | null;
  refrigeration_not_starts_with?: string | null;
  refrigeration_ends_with?: string | null;
  refrigeration_not_ends_with?: string | null;
  refrigeration_i?: string | null;
  refrigeration_not_i?: string | null;
  refrigeration_contains_i?: string | null;
  refrigeration_not_contains_i?: string | null;
  refrigeration_starts_with_i?: string | null;
  refrigeration_not_starts_with_i?: string | null;
  refrigeration_ends_with_i?: string | null;
  refrigeration_not_ends_with_i?: string | null;
  refrigeration_in?: (string | null)[] | null;
  refrigeration_not_in?: (string | null)[] | null;
  packingOnGlass?: boolean | null;
  packingOnGlass_not?: boolean | null;
  packageType?: string | null;
  packageType_not?: string | null;
  packageType_contains?: string | null;
  packageType_not_contains?: string | null;
  packageType_starts_with?: string | null;
  packageType_not_starts_with?: string | null;
  packageType_ends_with?: string | null;
  packageType_not_ends_with?: string | null;
  packageType_i?: string | null;
  packageType_not_i?: string | null;
  packageType_contains_i?: string | null;
  packageType_not_contains_i?: string | null;
  packageType_starts_with_i?: string | null;
  packageType_not_starts_with_i?: string | null;
  packageType_ends_with_i?: string | null;
  packageType_not_ends_with_i?: string | null;
  packageType_in?: (string | null)[] | null;
  packageType_not_in?: (string | null)[] | null;
  qtyPerPackage?: number | null;
  qtyPerPackage_not?: number | null;
  qtyPerPackage_lt?: number | null;
  qtyPerPackage_lte?: number | null;
  qtyPerPackage_gt?: number | null;
  qtyPerPackage_gte?: number | null;
  qtyPerPackage_in?: (number | null)[] | null;
  qtyPerPackage_not_in?: (number | null)[] | null;
  packageWeight?: number | null;
  packageWeight_not?: number | null;
  packageWeight_lt?: number | null;
  packageWeight_lte?: number | null;
  packageWeight_gt?: number | null;
  packageWeight_gte?: number | null;
  packageWeight_in?: (number | null)[] | null;
  packageWeight_not_in?: (number | null)[] | null;
  lifetime?: number | null;
  lifetime_not?: number | null;
  lifetime_lt?: number | null;
  lifetime_lte?: number | null;
  lifetime_gt?: number | null;
  lifetime_gte?: number | null;
  lifetime_in?: (number | null)[] | null;
  lifetime_not_in?: (number | null)[] | null;
  minStock?: number | null;
  minStock_not?: number | null;
  minStock_lt?: number | null;
  minStock_lte?: number | null;
  minStock_gt?: number | null;
  minStock_gte?: number | null;
  minStock_in?: (number | null)[] | null;
  minStock_not_in?: (number | null)[] | null;
  stock?: number | null;
  stock_not?: number | null;
  stock_lt?: number | null;
  stock_lte?: number | null;
  stock_gt?: number | null;
  stock_gte?: number | null;
  stock_in?: (number | null)[] | null;
  stock_not_in?: (number | null)[] | null;
  maxStockPerOrder?: number | null;
  maxStockPerOrder_not?: number | null;
  maxStockPerOrder_lt?: number | null;
  maxStockPerOrder_lte?: number | null;
  maxStockPerOrder_gt?: number | null;
  maxStockPerOrder_gte?: number | null;
  maxStockPerOrder_in?: (number | null)[] | null;
  maxStockPerOrder_not_in?: (number | null)[] | null;
  caloriesPer100gr?: number | null;
  caloriesPer100gr_not?: number | null;
  caloriesPer100gr_lt?: number | null;
  caloriesPer100gr_lte?: number | null;
  caloriesPer100gr_gt?: number | null;
  caloriesPer100gr_gte?: number | null;
  caloriesPer100gr_in?: (number | null)[] | null;
  caloriesPer100gr_not_in?: (number | null)[] | null;
  greenInpact?: string | null;
  greenInpact_not?: string | null;
  greenInpact_contains?: string | null;
  greenInpact_not_contains?: string | null;
  greenInpact_starts_with?: string | null;
  greenInpact_not_starts_with?: string | null;
  greenInpact_ends_with?: string | null;
  greenInpact_not_ends_with?: string | null;
  greenInpact_i?: string | null;
  greenInpact_not_i?: string | null;
  greenInpact_contains_i?: string | null;
  greenInpact_not_contains_i?: string | null;
  greenInpact_starts_with_i?: string | null;
  greenInpact_not_starts_with_i?: string | null;
  greenInpact_ends_with_i?: string | null;
  greenInpact_not_ends_with_i?: string | null;
  greenInpact_in?: (string | null)[] | null;
  greenInpact_not_in?: (string | null)[] | null;
  ecoFriendly?: boolean | null;
  ecoFriendly_not?: boolean | null;
  readyForConsumption?: boolean | null;
  readyForConsumption_not?: boolean | null;
  easyPreparation?: boolean | null;
  easyPreparation_not?: boolean | null;
  otherRefrigerationType?: string | null;
  otherRefrigerationType_not?: string | null;
  otherRefrigerationType_contains?: string | null;
  otherRefrigerationType_not_contains?: string | null;
  otherRefrigerationType_starts_with?: string | null;
  otherRefrigerationType_not_starts_with?: string | null;
  otherRefrigerationType_ends_with?: string | null;
  otherRefrigerationType_not_ends_with?: string | null;
  otherRefrigerationType_i?: string | null;
  otherRefrigerationType_not_i?: string | null;
  otherRefrigerationType_contains_i?: string | null;
  otherRefrigerationType_not_contains_i?: string | null;
  otherRefrigerationType_starts_with_i?: string | null;
  otherRefrigerationType_not_starts_with_i?: string | null;
  otherRefrigerationType_ends_with_i?: string | null;
  otherRefrigerationType_not_ends_with_i?: string | null;
  otherRefrigerationType_in?: (string | null)[] | null;
  otherRefrigerationType_not_in?: (string | null)[] | null;
  seals?: string | null;
  seals_not?: string | null;
  seals_contains?: string | null;
  seals_not_contains?: string | null;
  seals_starts_with?: string | null;
  seals_not_starts_with?: string | null;
  seals_ends_with?: string | null;
  seals_not_ends_with?: string | null;
  seals_i?: string | null;
  seals_not_i?: string | null;
  seals_contains_i?: string | null;
  seals_not_contains_i?: string | null;
  seals_starts_with_i?: string | null;
  seals_not_starts_with_i?: string | null;
  seals_ends_with_i?: string | null;
  seals_not_ends_with_i?: string | null;
  seals_in?: (string | null)[] | null;
  seals_not_in?: (string | null)[] | null;
  hasInvima?: string | null;
  hasInvima_not?: string | null;
  hasInvima_contains?: string | null;
  hasInvima_not_contains?: string | null;
  hasInvima_starts_with?: string | null;
  hasInvima_not_starts_with?: string | null;
  hasInvima_ends_with?: string | null;
  hasInvima_not_ends_with?: string | null;
  hasInvima_i?: string | null;
  hasInvima_not_i?: string | null;
  hasInvima_contains_i?: string | null;
  hasInvima_not_contains_i?: string | null;
  hasInvima_starts_with_i?: string | null;
  hasInvima_not_starts_with_i?: string | null;
  hasInvima_ends_with_i?: string | null;
  hasInvima_not_ends_with_i?: string | null;
  hasInvima_in?: (string | null)[] | null;
  hasInvima_not_in?: (string | null)[] | null;
  hasNutritionalTable?: boolean | null;
  hasNutritionalTable_not?: boolean | null;
  review_every?: ReviewWhereInput | null;
  review_some?: ReviewWhereInput | null;
  review_none?: ReviewWhereInput | null;
  sodio?: number | null;
  sodio_not?: number | null;
  sodio_lt?: number | null;
  sodio_lte?: number | null;
  sodio_gt?: number | null;
  sodio_gte?: number | null;
  sodio_in?: (number | null)[] | null;
  sodio_not_in?: (number | null)[] | null;
  calories100gr?: number | null;
  calories100gr_not?: number | null;
  calories100gr_lt?: number | null;
  calories100gr_lte?: number | null;
  calories100gr_gt?: number | null;
  calories100gr_gte?: number | null;
  calories100gr_in?: (number | null)[] | null;
  calories100gr_not_in?: (number | null)[] | null;
}

export interface ProductWhereUniqueInput {
  id: string;
}

export interface RegionCreateInput {
  name?: string | null;
  shortName?: string | null;
  country?: CountryRelateToOneInput | null;
  cities?: CityRelateToManyInput | null;
}

export interface RegionRelateToManyInput {
  create?: (RegionCreateInput | null)[] | null;
  connect?: (RegionWhereUniqueInput | null)[] | null;
  disconnect?: (RegionWhereUniqueInput | null)[] | null;
  disconnectAll?: boolean | null;
}

export interface RegionRelateToOneInput {
  create?: RegionCreateInput | null;
  connect?: RegionWhereUniqueInput | null;
  disconnect?: RegionWhereUniqueInput | null;
  disconnectAll?: boolean | null;
}

export interface RegionWhereInput {
  AND?: (RegionWhereInput | null)[] | null;
  OR?: (RegionWhereInput | null)[] | null;
  id?: string | null;
  id_not?: string | null;
  id_in?: (string | null)[] | null;
  id_not_in?: (string | null)[] | null;
  name?: string | null;
  name_not?: string | null;
  name_contains?: string | null;
  name_not_contains?: string | null;
  name_starts_with?: string | null;
  name_not_starts_with?: string | null;
  name_ends_with?: string | null;
  name_not_ends_with?: string | null;
  name_i?: string | null;
  name_not_i?: string | null;
  name_contains_i?: string | null;
  name_not_contains_i?: string | null;
  name_starts_with_i?: string | null;
  name_not_starts_with_i?: string | null;
  name_ends_with_i?: string | null;
  name_not_ends_with_i?: string | null;
  name_in?: (string | null)[] | null;
  name_not_in?: (string | null)[] | null;
  shortName?: string | null;
  shortName_not?: string | null;
  shortName_contains?: string | null;
  shortName_not_contains?: string | null;
  shortName_starts_with?: string | null;
  shortName_not_starts_with?: string | null;
  shortName_ends_with?: string | null;
  shortName_not_ends_with?: string | null;
  shortName_i?: string | null;
  shortName_not_i?: string | null;
  shortName_contains_i?: string | null;
  shortName_not_contains_i?: string | null;
  shortName_starts_with_i?: string | null;
  shortName_not_starts_with_i?: string | null;
  shortName_ends_with_i?: string | null;
  shortName_not_ends_with_i?: string | null;
  shortName_in?: (string | null)[] | null;
  shortName_not_in?: (string | null)[] | null;
  country?: CountryWhereInput | null;
  country_is_null?: boolean | null;
  cities_every?: CityWhereInput | null;
  cities_some?: CityWhereInput | null;
  cities_none?: CityWhereInput | null;
}

export interface RegionWhereUniqueInput {
  id: string;
}

export interface ReviewCreateInput {
  points?: string | null;
  comments?: string | null;
  product?: ProductRelateToOneInput | null;
  user?: UserRelateToOneInput | null;
  visible?: boolean | null;
  dateCreated?: string | null;
}

export interface ReviewRelateToManyInput {
  create?: (ReviewCreateInput | null)[] | null;
  connect?: (ReviewWhereUniqueInput | null)[] | null;
  disconnect?: (ReviewWhereUniqueInput | null)[] | null;
  disconnectAll?: boolean | null;
}

export interface ReviewWhereInput {
  AND?: (ReviewWhereInput | null)[] | null;
  OR?: (ReviewWhereInput | null)[] | null;
  id?: string | null;
  id_not?: string | null;
  id_in?: (string | null)[] | null;
  id_not_in?: (string | null)[] | null;
  points?: string | null;
  points_not?: string | null;
  points_contains?: string | null;
  points_not_contains?: string | null;
  points_starts_with?: string | null;
  points_not_starts_with?: string | null;
  points_ends_with?: string | null;
  points_not_ends_with?: string | null;
  points_i?: string | null;
  points_not_i?: string | null;
  points_contains_i?: string | null;
  points_not_contains_i?: string | null;
  points_starts_with_i?: string | null;
  points_not_starts_with_i?: string | null;
  points_ends_with_i?: string | null;
  points_not_ends_with_i?: string | null;
  points_in?: (string | null)[] | null;
  points_not_in?: (string | null)[] | null;
  comments?: string | null;
  comments_not?: string | null;
  comments_contains?: string | null;
  comments_not_contains?: string | null;
  comments_starts_with?: string | null;
  comments_not_starts_with?: string | null;
  comments_ends_with?: string | null;
  comments_not_ends_with?: string | null;
  comments_i?: string | null;
  comments_not_i?: string | null;
  comments_contains_i?: string | null;
  comments_not_contains_i?: string | null;
  comments_starts_with_i?: string | null;
  comments_not_starts_with_i?: string | null;
  comments_ends_with_i?: string | null;
  comments_not_ends_with_i?: string | null;
  comments_in?: (string | null)[] | null;
  comments_not_in?: (string | null)[] | null;
  product?: ProductWhereInput | null;
  product_is_null?: boolean | null;
  user?: UserWhereInput | null;
  user_is_null?: boolean | null;
  visible?: boolean | null;
  visible_not?: boolean | null;
  dateCreated?: string | null;
  dateCreated_not?: string | null;
  dateCreated_lt?: string | null;
  dateCreated_lte?: string | null;
  dateCreated_gt?: string | null;
  dateCreated_gte?: string | null;
  dateCreated_in?: (string | null)[] | null;
  dateCreated_not_in?: (string | null)[] | null;
}

export interface ReviewWhereUniqueInput {
  id: string;
}

export interface RoleCreateInput {
  name?: string | null;
  canManageProducts?: boolean | null;
  canSeeOtherUsers?: boolean | null;
  canManageUsers?: boolean | null;
  canManageRoles?: boolean | null;
  canManageCart?: boolean | null;
  canManageOrders?: boolean | null;
  canManageAddress?: boolean | null;
  isAdmin?: boolean | null;
  assignedTo?: UserRelateToManyInput | null;
}

export interface RoleRelateToOneInput {
  create?: RoleCreateInput | null;
  connect?: RoleWhereUniqueInput | null;
  disconnect?: RoleWhereUniqueInput | null;
  disconnectAll?: boolean | null;
}

export interface RoleWhereInput {
  AND?: (RoleWhereInput | null)[] | null;
  OR?: (RoleWhereInput | null)[] | null;
  id?: string | null;
  id_not?: string | null;
  id_in?: (string | null)[] | null;
  id_not_in?: (string | null)[] | null;
  name?: string | null;
  name_not?: string | null;
  name_contains?: string | null;
  name_not_contains?: string | null;
  name_starts_with?: string | null;
  name_not_starts_with?: string | null;
  name_ends_with?: string | null;
  name_not_ends_with?: string | null;
  name_i?: string | null;
  name_not_i?: string | null;
  name_contains_i?: string | null;
  name_not_contains_i?: string | null;
  name_starts_with_i?: string | null;
  name_not_starts_with_i?: string | null;
  name_ends_with_i?: string | null;
  name_not_ends_with_i?: string | null;
  name_in?: (string | null)[] | null;
  name_not_in?: (string | null)[] | null;
  canManageProducts?: boolean | null;
  canManageProducts_not?: boolean | null;
  canSeeOtherUsers?: boolean | null;
  canSeeOtherUsers_not?: boolean | null;
  canManageUsers?: boolean | null;
  canManageUsers_not?: boolean | null;
  canManageRoles?: boolean | null;
  canManageRoles_not?: boolean | null;
  canManageCart?: boolean | null;
  canManageCart_not?: boolean | null;
  canManageOrders?: boolean | null;
  canManageOrders_not?: boolean | null;
  canManageAddress?: boolean | null;
  canManageAddress_not?: boolean | null;
  isAdmin?: boolean | null;
  isAdmin_not?: boolean | null;
  assignedTo_every?: UserWhereInput | null;
  assignedTo_some?: UserWhereInput | null;
  assignedTo_none?: UserWhereInput | null;
}

export interface RoleWhereUniqueInput {
  id: string;
}

export interface SellOrderCreateInput {
  state?: string | null;
  store?: StoreRelateToOneInput | null;
  user?: UserRelateToOneInput | null;
  address?: AddressRelateToOneInput | null;
  lineItem?: LineItemRelateToManyInput | null;
  coupons?: CouponRelateToManyInput | null;
  shippingOrder?: ShippingOrderRelateToOneInput | null;
  basePrice?: number | null;
  storeDiscount?: number | null;
  palanteDiscount?: number | null;
  total?: number | null;
  palanteTotal?: number | null;
  palanteTax?: number | null;
  dateCreated?: string | null;
  dateCheckedOut?: string | null;
  datePending?: string | null;
  dateFailed?: string | null;
  dateReversed?: string | null;
  dateExpired?: string | null;
  dateAbandoned?: string | null;
  dateCanceled?: string | null;
  dateAccepted?: string | null;
  message?: string | null;
  refPayco?: string | null;
  siigoId?: string | null;
  epaycoState?: string | null;
}

export interface SellOrderRelateToManyInput {
  create?: (SellOrderCreateInput | null)[] | null;
  connect?: (SellOrderWhereUniqueInput | null)[] | null;
  disconnect?: (SellOrderWhereUniqueInput | null)[] | null;
  disconnectAll?: boolean | null;
}

export interface SellOrderRelateToOneInput {
  create?: SellOrderCreateInput | null;
  connect?: SellOrderWhereUniqueInput | null;
  disconnect?: SellOrderWhereUniqueInput | null;
  disconnectAll?: boolean | null;
}

export interface SellOrderWhereInput {
  AND?: (SellOrderWhereInput | null)[] | null;
  OR?: (SellOrderWhereInput | null)[] | null;
  id?: string | null;
  id_not?: string | null;
  id_in?: (string | null)[] | null;
  id_not_in?: (string | null)[] | null;
  state?: string | null;
  state_not?: string | null;
  state_contains?: string | null;
  state_not_contains?: string | null;
  state_starts_with?: string | null;
  state_not_starts_with?: string | null;
  state_ends_with?: string | null;
  state_not_ends_with?: string | null;
  state_i?: string | null;
  state_not_i?: string | null;
  state_contains_i?: string | null;
  state_not_contains_i?: string | null;
  state_starts_with_i?: string | null;
  state_not_starts_with_i?: string | null;
  state_ends_with_i?: string | null;
  state_not_ends_with_i?: string | null;
  state_in?: (string | null)[] | null;
  state_not_in?: (string | null)[] | null;
  store?: StoreWhereInput | null;
  store_is_null?: boolean | null;
  user?: UserWhereInput | null;
  user_is_null?: boolean | null;
  address?: AddressWhereInput | null;
  address_is_null?: boolean | null;
  lineItem_every?: LineItemWhereInput | null;
  lineItem_some?: LineItemWhereInput | null;
  lineItem_none?: LineItemWhereInput | null;
  coupons_every?: CouponWhereInput | null;
  coupons_some?: CouponWhereInput | null;
  coupons_none?: CouponWhereInput | null;
  shippingOrder?: ShippingOrderWhereInput | null;
  shippingOrder_is_null?: boolean | null;
  basePrice?: number | null;
  basePrice_not?: number | null;
  basePrice_lt?: number | null;
  basePrice_lte?: number | null;
  basePrice_gt?: number | null;
  basePrice_gte?: number | null;
  basePrice_in?: (number | null)[] | null;
  basePrice_not_in?: (number | null)[] | null;
  storeDiscount?: number | null;
  storeDiscount_not?: number | null;
  storeDiscount_lt?: number | null;
  storeDiscount_lte?: number | null;
  storeDiscount_gt?: number | null;
  storeDiscount_gte?: number | null;
  storeDiscount_in?: (number | null)[] | null;
  storeDiscount_not_in?: (number | null)[] | null;
  palanteDiscount?: number | null;
  palanteDiscount_not?: number | null;
  palanteDiscount_lt?: number | null;
  palanteDiscount_lte?: number | null;
  palanteDiscount_gt?: number | null;
  palanteDiscount_gte?: number | null;
  palanteDiscount_in?: (number | null)[] | null;
  palanteDiscount_not_in?: (number | null)[] | null;
  total?: number | null;
  total_not?: number | null;
  total_lt?: number | null;
  total_lte?: number | null;
  total_gt?: number | null;
  total_gte?: number | null;
  total_in?: (number | null)[] | null;
  total_not_in?: (number | null)[] | null;
  palanteTotal?: number | null;
  palanteTotal_not?: number | null;
  palanteTotal_lt?: number | null;
  palanteTotal_lte?: number | null;
  palanteTotal_gt?: number | null;
  palanteTotal_gte?: number | null;
  palanteTotal_in?: (number | null)[] | null;
  palanteTotal_not_in?: (number | null)[] | null;
  palanteTax?: number | null;
  palanteTax_not?: number | null;
  palanteTax_lt?: number | null;
  palanteTax_lte?: number | null;
  palanteTax_gt?: number | null;
  palanteTax_gte?: number | null;
  palanteTax_in?: (number | null)[] | null;
  palanteTax_not_in?: (number | null)[] | null;
  dateCreated?: string | null;
  dateCreated_not?: string | null;
  dateCreated_lt?: string | null;
  dateCreated_lte?: string | null;
  dateCreated_gt?: string | null;
  dateCreated_gte?: string | null;
  dateCreated_in?: (string | null)[] | null;
  dateCreated_not_in?: (string | null)[] | null;
  dateCheckedOut?: string | null;
  dateCheckedOut_not?: string | null;
  dateCheckedOut_lt?: string | null;
  dateCheckedOut_lte?: string | null;
  dateCheckedOut_gt?: string | null;
  dateCheckedOut_gte?: string | null;
  dateCheckedOut_in?: (string | null)[] | null;
  dateCheckedOut_not_in?: (string | null)[] | null;
  datePending?: string | null;
  datePending_not?: string | null;
  datePending_lt?: string | null;
  datePending_lte?: string | null;
  datePending_gt?: string | null;
  datePending_gte?: string | null;
  datePending_in?: (string | null)[] | null;
  datePending_not_in?: (string | null)[] | null;
  dateFailed?: string | null;
  dateFailed_not?: string | null;
  dateFailed_lt?: string | null;
  dateFailed_lte?: string | null;
  dateFailed_gt?: string | null;
  dateFailed_gte?: string | null;
  dateFailed_in?: (string | null)[] | null;
  dateFailed_not_in?: (string | null)[] | null;
  dateReversed?: string | null;
  dateReversed_not?: string | null;
  dateReversed_lt?: string | null;
  dateReversed_lte?: string | null;
  dateReversed_gt?: string | null;
  dateReversed_gte?: string | null;
  dateReversed_in?: (string | null)[] | null;
  dateReversed_not_in?: (string | null)[] | null;
  dateExpired?: string | null;
  dateExpired_not?: string | null;
  dateExpired_lt?: string | null;
  dateExpired_lte?: string | null;
  dateExpired_gt?: string | null;
  dateExpired_gte?: string | null;
  dateExpired_in?: (string | null)[] | null;
  dateExpired_not_in?: (string | null)[] | null;
  dateAbandoned?: string | null;
  dateAbandoned_not?: string | null;
  dateAbandoned_lt?: string | null;
  dateAbandoned_lte?: string | null;
  dateAbandoned_gt?: string | null;
  dateAbandoned_gte?: string | null;
  dateAbandoned_in?: (string | null)[] | null;
  dateAbandoned_not_in?: (string | null)[] | null;
  dateCanceled?: string | null;
  dateCanceled_not?: string | null;
  dateCanceled_lt?: string | null;
  dateCanceled_lte?: string | null;
  dateCanceled_gt?: string | null;
  dateCanceled_gte?: string | null;
  dateCanceled_in?: (string | null)[] | null;
  dateCanceled_not_in?: (string | null)[] | null;
  dateAccepted?: string | null;
  dateAccepted_not?: string | null;
  dateAccepted_lt?: string | null;
  dateAccepted_lte?: string | null;
  dateAccepted_gt?: string | null;
  dateAccepted_gte?: string | null;
  dateAccepted_in?: (string | null)[] | null;
  dateAccepted_not_in?: (string | null)[] | null;
  message?: string | null;
  message_not?: string | null;
  message_contains?: string | null;
  message_not_contains?: string | null;
  message_starts_with?: string | null;
  message_not_starts_with?: string | null;
  message_ends_with?: string | null;
  message_not_ends_with?: string | null;
  message_i?: string | null;
  message_not_i?: string | null;
  message_contains_i?: string | null;
  message_not_contains_i?: string | null;
  message_starts_with_i?: string | null;
  message_not_starts_with_i?: string | null;
  message_ends_with_i?: string | null;
  message_not_ends_with_i?: string | null;
  message_in?: (string | null)[] | null;
  message_not_in?: (string | null)[] | null;
  refPayco?: string | null;
  refPayco_not?: string | null;
  refPayco_contains?: string | null;
  refPayco_not_contains?: string | null;
  refPayco_starts_with?: string | null;
  refPayco_not_starts_with?: string | null;
  refPayco_ends_with?: string | null;
  refPayco_not_ends_with?: string | null;
  refPayco_i?: string | null;
  refPayco_not_i?: string | null;
  refPayco_contains_i?: string | null;
  refPayco_not_contains_i?: string | null;
  refPayco_starts_with_i?: string | null;
  refPayco_not_starts_with_i?: string | null;
  refPayco_ends_with_i?: string | null;
  refPayco_not_ends_with_i?: string | null;
  refPayco_in?: (string | null)[] | null;
  refPayco_not_in?: (string | null)[] | null;
  siigoId?: string | null;
  siigoId_not?: string | null;
  siigoId_contains?: string | null;
  siigoId_not_contains?: string | null;
  siigoId_starts_with?: string | null;
  siigoId_not_starts_with?: string | null;
  siigoId_ends_with?: string | null;
  siigoId_not_ends_with?: string | null;
  siigoId_i?: string | null;
  siigoId_not_i?: string | null;
  siigoId_contains_i?: string | null;
  siigoId_not_contains_i?: string | null;
  siigoId_starts_with_i?: string | null;
  siigoId_not_starts_with_i?: string | null;
  siigoId_ends_with_i?: string | null;
  siigoId_not_ends_with_i?: string | null;
  siigoId_in?: (string | null)[] | null;
  siigoId_not_in?: (string | null)[] | null;
  epaycoState?: string | null;
  epaycoState_not?: string | null;
  epaycoState_contains?: string | null;
  epaycoState_not_contains?: string | null;
  epaycoState_starts_with?: string | null;
  epaycoState_not_starts_with?: string | null;
  epaycoState_ends_with?: string | null;
  epaycoState_not_ends_with?: string | null;
  epaycoState_i?: string | null;
  epaycoState_not_i?: string | null;
  epaycoState_contains_i?: string | null;
  epaycoState_not_contains_i?: string | null;
  epaycoState_starts_with_i?: string | null;
  epaycoState_not_starts_with_i?: string | null;
  epaycoState_ends_with_i?: string | null;
  epaycoState_not_ends_with_i?: string | null;
  epaycoState_in?: (string | null)[] | null;
  epaycoState_not_in?: (string | null)[] | null;
}

export interface SellOrderWhereUniqueInput {
  id: string;
}

export interface ShippingAddresses {
  fromAddressId: string;
  toAddressId: string;
}

export interface ShippingOrderCreateInput {
  sellOrder?: SellOrderRelateToManyInput | null;
  state?: string | null;
  price?: number | null;
  distance?: number | null;
  storeAddress?: AddressRelateToOneInput | null;
  address?: AddressRelateToOneInput | null;
  serviceId?: string | null;
  muResponse?: string | null;
  dateUpdated?: string | null;
}

export interface ShippingOrderRelateToOneInput {
  create?: ShippingOrderCreateInput | null;
  connect?: ShippingOrderWhereUniqueInput | null;
  disconnect?: ShippingOrderWhereUniqueInput | null;
  disconnectAll?: boolean | null;
}

export interface ShippingOrderWhereInput {
  AND?: (ShippingOrderWhereInput | null)[] | null;
  OR?: (ShippingOrderWhereInput | null)[] | null;
  id?: string | null;
  id_not?: string | null;
  id_in?: (string | null)[] | null;
  id_not_in?: (string | null)[] | null;
  sellOrder_every?: SellOrderWhereInput | null;
  sellOrder_some?: SellOrderWhereInput | null;
  sellOrder_none?: SellOrderWhereInput | null;
  state?: string | null;
  state_not?: string | null;
  state_contains?: string | null;
  state_not_contains?: string | null;
  state_starts_with?: string | null;
  state_not_starts_with?: string | null;
  state_ends_with?: string | null;
  state_not_ends_with?: string | null;
  state_i?: string | null;
  state_not_i?: string | null;
  state_contains_i?: string | null;
  state_not_contains_i?: string | null;
  state_starts_with_i?: string | null;
  state_not_starts_with_i?: string | null;
  state_ends_with_i?: string | null;
  state_not_ends_with_i?: string | null;
  state_in?: (string | null)[] | null;
  state_not_in?: (string | null)[] | null;
  price?: number | null;
  price_not?: number | null;
  price_lt?: number | null;
  price_lte?: number | null;
  price_gt?: number | null;
  price_gte?: number | null;
  price_in?: (number | null)[] | null;
  price_not_in?: (number | null)[] | null;
  distance?: number | null;
  distance_not?: number | null;
  distance_lt?: number | null;
  distance_lte?: number | null;
  distance_gt?: number | null;
  distance_gte?: number | null;
  distance_in?: (number | null)[] | null;
  distance_not_in?: (number | null)[] | null;
  storeAddress?: AddressWhereInput | null;
  storeAddress_is_null?: boolean | null;
  address?: AddressWhereInput | null;
  address_is_null?: boolean | null;
  serviceId?: string | null;
  serviceId_not?: string | null;
  serviceId_contains?: string | null;
  serviceId_not_contains?: string | null;
  serviceId_starts_with?: string | null;
  serviceId_not_starts_with?: string | null;
  serviceId_ends_with?: string | null;
  serviceId_not_ends_with?: string | null;
  serviceId_i?: string | null;
  serviceId_not_i?: string | null;
  serviceId_contains_i?: string | null;
  serviceId_not_contains_i?: string | null;
  serviceId_starts_with_i?: string | null;
  serviceId_not_starts_with_i?: string | null;
  serviceId_ends_with_i?: string | null;
  serviceId_not_ends_with_i?: string | null;
  serviceId_in?: (string | null)[] | null;
  serviceId_not_in?: (string | null)[] | null;
  muResponse?: string | null;
  muResponse_not?: string | null;
  muResponse_contains?: string | null;
  muResponse_not_contains?: string | null;
  muResponse_starts_with?: string | null;
  muResponse_not_starts_with?: string | null;
  muResponse_ends_with?: string | null;
  muResponse_not_ends_with?: string | null;
  muResponse_i?: string | null;
  muResponse_not_i?: string | null;
  muResponse_contains_i?: string | null;
  muResponse_not_contains_i?: string | null;
  muResponse_starts_with_i?: string | null;
  muResponse_not_starts_with_i?: string | null;
  muResponse_ends_with_i?: string | null;
  muResponse_not_ends_with_i?: string | null;
  muResponse_in?: (string | null)[] | null;
  muResponse_not_in?: (string | null)[] | null;
  dateUpdated?: string | null;
  dateUpdated_not?: string | null;
  dateUpdated_lt?: string | null;
  dateUpdated_lte?: string | null;
  dateUpdated_gt?: string | null;
  dateUpdated_gte?: string | null;
  dateUpdated_in?: (string | null)[] | null;
  dateUpdated_not_in?: (string | null)[] | null;
}

export interface ShippingOrderWhereUniqueInput {
  id: string;
}

export interface StoreCreateInput {
  name?: string | null;
  description?: string | null;
  identificationType?: string | null;
  document?: string | null;
  legallyFormed?: boolean | null;
  commissionFee?: number | null;
  address?: AddressRelateToOneInput | null;
  economicActivity?: string | null;
  maxDeliveryTime?: string | null;
  workingDays?: WeekDayRelateToManyInput | null;
  hasDigitalInvoces?: boolean | null;
  marketMaturity?: string | null;
  clasification?: string | null;
  avgMonthSales?: number | null;
  hasMaquila?: boolean | null;
  video?: string | null;
  banner?: any | null;
  logo?: any | null;
  email?: string | null;
  phone?: string | null;
  contactName?: string | null;
  contactLastName?: string | null;
  socialService?: string | null;
  coupons?: CouponRelateToManyInput | null;
  sales?: boolean | null;
  paysShipmentAfter?: number | null;
  instagramFollowers?: number | null;
  storeSales?: number | null;
  license?: boolean | null;
  extraPublicity?: boolean | null;
  webPage?: boolean | null;
  products?: ProductRelateToManyInput | null;
  epaycoId?: string | null;
  siigoId?: string | null;
}

export interface StoreRelateToOneInput {
  create?: StoreCreateInput | null;
  connect?: StoreWhereUniqueInput | null;
  disconnect?: StoreWhereUniqueInput | null;
  disconnectAll?: boolean | null;
}

export interface StoreWhereInput {
  AND?: (StoreWhereInput | null)[] | null;
  OR?: (StoreWhereInput | null)[] | null;
  id?: string | null;
  id_not?: string | null;
  id_in?: (string | null)[] | null;
  id_not_in?: (string | null)[] | null;
  name?: string | null;
  name_not?: string | null;
  name_contains?: string | null;
  name_not_contains?: string | null;
  name_starts_with?: string | null;
  name_not_starts_with?: string | null;
  name_ends_with?: string | null;
  name_not_ends_with?: string | null;
  name_i?: string | null;
  name_not_i?: string | null;
  name_contains_i?: string | null;
  name_not_contains_i?: string | null;
  name_starts_with_i?: string | null;
  name_not_starts_with_i?: string | null;
  name_ends_with_i?: string | null;
  name_not_ends_with_i?: string | null;
  name_in?: (string | null)[] | null;
  name_not_in?: (string | null)[] | null;
  description?: string | null;
  description_not?: string | null;
  description_contains?: string | null;
  description_not_contains?: string | null;
  description_starts_with?: string | null;
  description_not_starts_with?: string | null;
  description_ends_with?: string | null;
  description_not_ends_with?: string | null;
  description_i?: string | null;
  description_not_i?: string | null;
  description_contains_i?: string | null;
  description_not_contains_i?: string | null;
  description_starts_with_i?: string | null;
  description_not_starts_with_i?: string | null;
  description_ends_with_i?: string | null;
  description_not_ends_with_i?: string | null;
  description_in?: (string | null)[] | null;
  description_not_in?: (string | null)[] | null;
  identificationType?: string | null;
  identificationType_not?: string | null;
  identificationType_contains?: string | null;
  identificationType_not_contains?: string | null;
  identificationType_starts_with?: string | null;
  identificationType_not_starts_with?: string | null;
  identificationType_ends_with?: string | null;
  identificationType_not_ends_with?: string | null;
  identificationType_i?: string | null;
  identificationType_not_i?: string | null;
  identificationType_contains_i?: string | null;
  identificationType_not_contains_i?: string | null;
  identificationType_starts_with_i?: string | null;
  identificationType_not_starts_with_i?: string | null;
  identificationType_ends_with_i?: string | null;
  identificationType_not_ends_with_i?: string | null;
  identificationType_in?: (string | null)[] | null;
  identificationType_not_in?: (string | null)[] | null;
  document?: string | null;
  document_not?: string | null;
  document_contains?: string | null;
  document_not_contains?: string | null;
  document_starts_with?: string | null;
  document_not_starts_with?: string | null;
  document_ends_with?: string | null;
  document_not_ends_with?: string | null;
  document_i?: string | null;
  document_not_i?: string | null;
  document_contains_i?: string | null;
  document_not_contains_i?: string | null;
  document_starts_with_i?: string | null;
  document_not_starts_with_i?: string | null;
  document_ends_with_i?: string | null;
  document_not_ends_with_i?: string | null;
  document_in?: (string | null)[] | null;
  document_not_in?: (string | null)[] | null;
  legallyFormed?: boolean | null;
  legallyFormed_not?: boolean | null;
  commissionFee?: number | null;
  commissionFee_not?: number | null;
  commissionFee_lt?: number | null;
  commissionFee_lte?: number | null;
  commissionFee_gt?: number | null;
  commissionFee_gte?: number | null;
  commissionFee_in?: (number | null)[] | null;
  commissionFee_not_in?: (number | null)[] | null;
  address?: AddressWhereInput | null;
  address_is_null?: boolean | null;
  economicActivity?: string | null;
  economicActivity_not?: string | null;
  economicActivity_contains?: string | null;
  economicActivity_not_contains?: string | null;
  economicActivity_starts_with?: string | null;
  economicActivity_not_starts_with?: string | null;
  economicActivity_ends_with?: string | null;
  economicActivity_not_ends_with?: string | null;
  economicActivity_i?: string | null;
  economicActivity_not_i?: string | null;
  economicActivity_contains_i?: string | null;
  economicActivity_not_contains_i?: string | null;
  economicActivity_starts_with_i?: string | null;
  economicActivity_not_starts_with_i?: string | null;
  economicActivity_ends_with_i?: string | null;
  economicActivity_not_ends_with_i?: string | null;
  economicActivity_in?: (string | null)[] | null;
  economicActivity_not_in?: (string | null)[] | null;
  maxDeliveryTime?: string | null;
  maxDeliveryTime_not?: string | null;
  maxDeliveryTime_contains?: string | null;
  maxDeliveryTime_not_contains?: string | null;
  maxDeliveryTime_starts_with?: string | null;
  maxDeliveryTime_not_starts_with?: string | null;
  maxDeliveryTime_ends_with?: string | null;
  maxDeliveryTime_not_ends_with?: string | null;
  maxDeliveryTime_i?: string | null;
  maxDeliveryTime_not_i?: string | null;
  maxDeliveryTime_contains_i?: string | null;
  maxDeliveryTime_not_contains_i?: string | null;
  maxDeliveryTime_starts_with_i?: string | null;
  maxDeliveryTime_not_starts_with_i?: string | null;
  maxDeliveryTime_ends_with_i?: string | null;
  maxDeliveryTime_not_ends_with_i?: string | null;
  maxDeliveryTime_in?: (string | null)[] | null;
  maxDeliveryTime_not_in?: (string | null)[] | null;
  workingDays_every?: WeekDayWhereInput | null;
  workingDays_some?: WeekDayWhereInput | null;
  workingDays_none?: WeekDayWhereInput | null;
  hasDigitalInvoces?: boolean | null;
  hasDigitalInvoces_not?: boolean | null;
  marketMaturity?: string | null;
  marketMaturity_not?: string | null;
  marketMaturity_contains?: string | null;
  marketMaturity_not_contains?: string | null;
  marketMaturity_starts_with?: string | null;
  marketMaturity_not_starts_with?: string | null;
  marketMaturity_ends_with?: string | null;
  marketMaturity_not_ends_with?: string | null;
  marketMaturity_i?: string | null;
  marketMaturity_not_i?: string | null;
  marketMaturity_contains_i?: string | null;
  marketMaturity_not_contains_i?: string | null;
  marketMaturity_starts_with_i?: string | null;
  marketMaturity_not_starts_with_i?: string | null;
  marketMaturity_ends_with_i?: string | null;
  marketMaturity_not_ends_with_i?: string | null;
  marketMaturity_in?: (string | null)[] | null;
  marketMaturity_not_in?: (string | null)[] | null;
  clasification?: string | null;
  clasification_not?: string | null;
  clasification_contains?: string | null;
  clasification_not_contains?: string | null;
  clasification_starts_with?: string | null;
  clasification_not_starts_with?: string | null;
  clasification_ends_with?: string | null;
  clasification_not_ends_with?: string | null;
  clasification_i?: string | null;
  clasification_not_i?: string | null;
  clasification_contains_i?: string | null;
  clasification_not_contains_i?: string | null;
  clasification_starts_with_i?: string | null;
  clasification_not_starts_with_i?: string | null;
  clasification_ends_with_i?: string | null;
  clasification_not_ends_with_i?: string | null;
  clasification_in?: (string | null)[] | null;
  clasification_not_in?: (string | null)[] | null;
  avgMonthSales?: number | null;
  avgMonthSales_not?: number | null;
  avgMonthSales_lt?: number | null;
  avgMonthSales_lte?: number | null;
  avgMonthSales_gt?: number | null;
  avgMonthSales_gte?: number | null;
  avgMonthSales_in?: (number | null)[] | null;
  avgMonthSales_not_in?: (number | null)[] | null;
  hasMaquila?: boolean | null;
  hasMaquila_not?: boolean | null;
  video?: string | null;
  video_not?: string | null;
  video_contains?: string | null;
  video_not_contains?: string | null;
  video_starts_with?: string | null;
  video_not_starts_with?: string | null;
  video_ends_with?: string | null;
  video_not_ends_with?: string | null;
  video_i?: string | null;
  video_not_i?: string | null;
  video_contains_i?: string | null;
  video_not_contains_i?: string | null;
  video_starts_with_i?: string | null;
  video_not_starts_with_i?: string | null;
  video_ends_with_i?: string | null;
  video_not_ends_with_i?: string | null;
  video_in?: (string | null)[] | null;
  video_not_in?: (string | null)[] | null;
  banner?: string | null;
  banner_not?: string | null;
  banner_in?: (string | null)[] | null;
  banner_not_in?: (string | null)[] | null;
  logo?: string | null;
  logo_not?: string | null;
  logo_in?: (string | null)[] | null;
  logo_not_in?: (string | null)[] | null;
  email?: string | null;
  email_not?: string | null;
  email_contains?: string | null;
  email_not_contains?: string | null;
  email_starts_with?: string | null;
  email_not_starts_with?: string | null;
  email_ends_with?: string | null;
  email_not_ends_with?: string | null;
  email_i?: string | null;
  email_not_i?: string | null;
  email_contains_i?: string | null;
  email_not_contains_i?: string | null;
  email_starts_with_i?: string | null;
  email_not_starts_with_i?: string | null;
  email_ends_with_i?: string | null;
  email_not_ends_with_i?: string | null;
  email_in?: (string | null)[] | null;
  email_not_in?: (string | null)[] | null;
  phone?: string | null;
  phone_not?: string | null;
  phone_contains?: string | null;
  phone_not_contains?: string | null;
  phone_starts_with?: string | null;
  phone_not_starts_with?: string | null;
  phone_ends_with?: string | null;
  phone_not_ends_with?: string | null;
  phone_i?: string | null;
  phone_not_i?: string | null;
  phone_contains_i?: string | null;
  phone_not_contains_i?: string | null;
  phone_starts_with_i?: string | null;
  phone_not_starts_with_i?: string | null;
  phone_ends_with_i?: string | null;
  phone_not_ends_with_i?: string | null;
  phone_in?: (string | null)[] | null;
  phone_not_in?: (string | null)[] | null;
  contactName?: string | null;
  contactName_not?: string | null;
  contactName_contains?: string | null;
  contactName_not_contains?: string | null;
  contactName_starts_with?: string | null;
  contactName_not_starts_with?: string | null;
  contactName_ends_with?: string | null;
  contactName_not_ends_with?: string | null;
  contactName_i?: string | null;
  contactName_not_i?: string | null;
  contactName_contains_i?: string | null;
  contactName_not_contains_i?: string | null;
  contactName_starts_with_i?: string | null;
  contactName_not_starts_with_i?: string | null;
  contactName_ends_with_i?: string | null;
  contactName_not_ends_with_i?: string | null;
  contactName_in?: (string | null)[] | null;
  contactName_not_in?: (string | null)[] | null;
  contactLastName?: string | null;
  contactLastName_not?: string | null;
  contactLastName_contains?: string | null;
  contactLastName_not_contains?: string | null;
  contactLastName_starts_with?: string | null;
  contactLastName_not_starts_with?: string | null;
  contactLastName_ends_with?: string | null;
  contactLastName_not_ends_with?: string | null;
  contactLastName_i?: string | null;
  contactLastName_not_i?: string | null;
  contactLastName_contains_i?: string | null;
  contactLastName_not_contains_i?: string | null;
  contactLastName_starts_with_i?: string | null;
  contactLastName_not_starts_with_i?: string | null;
  contactLastName_ends_with_i?: string | null;
  contactLastName_not_ends_with_i?: string | null;
  contactLastName_in?: (string | null)[] | null;
  contactLastName_not_in?: (string | null)[] | null;
  socialService?: string | null;
  socialService_not?: string | null;
  socialService_contains?: string | null;
  socialService_not_contains?: string | null;
  socialService_starts_with?: string | null;
  socialService_not_starts_with?: string | null;
  socialService_ends_with?: string | null;
  socialService_not_ends_with?: string | null;
  socialService_i?: string | null;
  socialService_not_i?: string | null;
  socialService_contains_i?: string | null;
  socialService_not_contains_i?: string | null;
  socialService_starts_with_i?: string | null;
  socialService_not_starts_with_i?: string | null;
  socialService_ends_with_i?: string | null;
  socialService_not_ends_with_i?: string | null;
  socialService_in?: (string | null)[] | null;
  socialService_not_in?: (string | null)[] | null;
  coupons_every?: CouponWhereInput | null;
  coupons_some?: CouponWhereInput | null;
  coupons_none?: CouponWhereInput | null;
  sales?: boolean | null;
  sales_not?: boolean | null;
  paysShipmentAfter?: number | null;
  paysShipmentAfter_not?: number | null;
  paysShipmentAfter_lt?: number | null;
  paysShipmentAfter_lte?: number | null;
  paysShipmentAfter_gt?: number | null;
  paysShipmentAfter_gte?: number | null;
  paysShipmentAfter_in?: (number | null)[] | null;
  paysShipmentAfter_not_in?: (number | null)[] | null;
  instagramFollowers?: number | null;
  instagramFollowers_not?: number | null;
  instagramFollowers_lt?: number | null;
  instagramFollowers_lte?: number | null;
  instagramFollowers_gt?: number | null;
  instagramFollowers_gte?: number | null;
  instagramFollowers_in?: (number | null)[] | null;
  instagramFollowers_not_in?: (number | null)[] | null;
  storeSales?: number | null;
  storeSales_not?: number | null;
  storeSales_lt?: number | null;
  storeSales_lte?: number | null;
  storeSales_gt?: number | null;
  storeSales_gte?: number | null;
  storeSales_in?: (number | null)[] | null;
  storeSales_not_in?: (number | null)[] | null;
  license?: boolean | null;
  license_not?: boolean | null;
  extraPublicity?: boolean | null;
  extraPublicity_not?: boolean | null;
  webPage?: boolean | null;
  webPage_not?: boolean | null;
  products_every?: ProductWhereInput | null;
  products_some?: ProductWhereInput | null;
  products_none?: ProductWhereInput | null;
  epaycoId?: string | null;
  epaycoId_not?: string | null;
  epaycoId_contains?: string | null;
  epaycoId_not_contains?: string | null;
  epaycoId_starts_with?: string | null;
  epaycoId_not_starts_with?: string | null;
  epaycoId_ends_with?: string | null;
  epaycoId_not_ends_with?: string | null;
  epaycoId_i?: string | null;
  epaycoId_not_i?: string | null;
  epaycoId_contains_i?: string | null;
  epaycoId_not_contains_i?: string | null;
  epaycoId_starts_with_i?: string | null;
  epaycoId_not_starts_with_i?: string | null;
  epaycoId_ends_with_i?: string | null;
  epaycoId_not_ends_with_i?: string | null;
  epaycoId_in?: (string | null)[] | null;
  epaycoId_not_in?: (string | null)[] | null;
  siigoId?: string | null;
  siigoId_not?: string | null;
  siigoId_contains?: string | null;
  siigoId_not_contains?: string | null;
  siigoId_starts_with?: string | null;
  siigoId_not_starts_with?: string | null;
  siigoId_ends_with?: string | null;
  siigoId_not_ends_with?: string | null;
  siigoId_i?: string | null;
  siigoId_not_i?: string | null;
  siigoId_contains_i?: string | null;
  siigoId_not_contains_i?: string | null;
  siigoId_starts_with_i?: string | null;
  siigoId_not_starts_with_i?: string | null;
  siigoId_ends_with_i?: string | null;
  siigoId_not_ends_with_i?: string | null;
  siigoId_in?: (string | null)[] | null;
  siigoId_not_in?: (string | null)[] | null;
}

export interface StoreWhereUniqueInput {
  id: string;
}

export interface UserCreateInput {
  name?: string | null;
  lastName?: string | null;
  identificationType?: string | null;
  identification?: string | null;
  phone?: string | null;
  email?: string | null;
  password?: string | null;
  sellOrder?: SellOrderRelateToManyInput | null;
  address?: AddressRelateToManyInput | null;
  category?: CategoryRelateToManyInput | null;
  role?: RoleRelateToOneInput | null;
  passwordResetToken?: string | null;
  passwordResetIssuedAt?: string | null;
  passwordResetRedeemedAt?: string | null;
  magicAuthToken?: string | null;
  magicAuthIssuedAt?: string | null;
  magicAuthRedeemedAt?: string | null;
}

export interface UserRelateToManyInput {
  create?: (UserCreateInput | null)[] | null;
  connect?: (UserWhereUniqueInput | null)[] | null;
  disconnect?: (UserWhereUniqueInput | null)[] | null;
  disconnectAll?: boolean | null;
}

export interface UserRelateToOneInput {
  create?: UserCreateInput | null;
  connect?: UserWhereUniqueInput | null;
  disconnect?: UserWhereUniqueInput | null;
  disconnectAll?: boolean | null;
}

export interface UserUpdateInput {
  name?: string | null;
  lastName?: string | null;
  identificationType?: string | null;
  identification?: string | null;
  phone?: string | null;
  email?: string | null;
  password?: string | null;
  sellOrder?: SellOrderRelateToManyInput | null;
  address?: AddressRelateToManyInput | null;
  category?: CategoryRelateToManyInput | null;
  role?: RoleRelateToOneInput | null;
  passwordResetToken?: string | null;
  passwordResetIssuedAt?: string | null;
  passwordResetRedeemedAt?: string | null;
  magicAuthToken?: string | null;
  magicAuthIssuedAt?: string | null;
  magicAuthRedeemedAt?: string | null;
}

export interface UserWhereInput {
  AND?: (UserWhereInput | null)[] | null;
  OR?: (UserWhereInput | null)[] | null;
  id?: string | null;
  id_not?: string | null;
  id_in?: (string | null)[] | null;
  id_not_in?: (string | null)[] | null;
  name?: string | null;
  name_not?: string | null;
  name_contains?: string | null;
  name_not_contains?: string | null;
  name_starts_with?: string | null;
  name_not_starts_with?: string | null;
  name_ends_with?: string | null;
  name_not_ends_with?: string | null;
  name_i?: string | null;
  name_not_i?: string | null;
  name_contains_i?: string | null;
  name_not_contains_i?: string | null;
  name_starts_with_i?: string | null;
  name_not_starts_with_i?: string | null;
  name_ends_with_i?: string | null;
  name_not_ends_with_i?: string | null;
  name_in?: (string | null)[] | null;
  name_not_in?: (string | null)[] | null;
  lastName?: string | null;
  lastName_not?: string | null;
  lastName_contains?: string | null;
  lastName_not_contains?: string | null;
  lastName_starts_with?: string | null;
  lastName_not_starts_with?: string | null;
  lastName_ends_with?: string | null;
  lastName_not_ends_with?: string | null;
  lastName_i?: string | null;
  lastName_not_i?: string | null;
  lastName_contains_i?: string | null;
  lastName_not_contains_i?: string | null;
  lastName_starts_with_i?: string | null;
  lastName_not_starts_with_i?: string | null;
  lastName_ends_with_i?: string | null;
  lastName_not_ends_with_i?: string | null;
  lastName_in?: (string | null)[] | null;
  lastName_not_in?: (string | null)[] | null;
  identificationType?: string | null;
  identificationType_not?: string | null;
  identificationType_contains?: string | null;
  identificationType_not_contains?: string | null;
  identificationType_starts_with?: string | null;
  identificationType_not_starts_with?: string | null;
  identificationType_ends_with?: string | null;
  identificationType_not_ends_with?: string | null;
  identificationType_i?: string | null;
  identificationType_not_i?: string | null;
  identificationType_contains_i?: string | null;
  identificationType_not_contains_i?: string | null;
  identificationType_starts_with_i?: string | null;
  identificationType_not_starts_with_i?: string | null;
  identificationType_ends_with_i?: string | null;
  identificationType_not_ends_with_i?: string | null;
  identificationType_in?: (string | null)[] | null;
  identificationType_not_in?: (string | null)[] | null;
  identification?: string | null;
  identification_not?: string | null;
  identification_contains?: string | null;
  identification_not_contains?: string | null;
  identification_starts_with?: string | null;
  identification_not_starts_with?: string | null;
  identification_ends_with?: string | null;
  identification_not_ends_with?: string | null;
  identification_i?: string | null;
  identification_not_i?: string | null;
  identification_contains_i?: string | null;
  identification_not_contains_i?: string | null;
  identification_starts_with_i?: string | null;
  identification_not_starts_with_i?: string | null;
  identification_ends_with_i?: string | null;
  identification_not_ends_with_i?: string | null;
  identification_in?: (string | null)[] | null;
  identification_not_in?: (string | null)[] | null;
  phone?: string | null;
  phone_not?: string | null;
  phone_contains?: string | null;
  phone_not_contains?: string | null;
  phone_starts_with?: string | null;
  phone_not_starts_with?: string | null;
  phone_ends_with?: string | null;
  phone_not_ends_with?: string | null;
  phone_i?: string | null;
  phone_not_i?: string | null;
  phone_contains_i?: string | null;
  phone_not_contains_i?: string | null;
  phone_starts_with_i?: string | null;
  phone_not_starts_with_i?: string | null;
  phone_ends_with_i?: string | null;
  phone_not_ends_with_i?: string | null;
  phone_in?: (string | null)[] | null;
  phone_not_in?: (string | null)[] | null;
  email?: string | null;
  email_not?: string | null;
  email_contains?: string | null;
  email_not_contains?: string | null;
  email_starts_with?: string | null;
  email_not_starts_with?: string | null;
  email_ends_with?: string | null;
  email_not_ends_with?: string | null;
  email_i?: string | null;
  email_not_i?: string | null;
  email_contains_i?: string | null;
  email_not_contains_i?: string | null;
  email_starts_with_i?: string | null;
  email_not_starts_with_i?: string | null;
  email_ends_with_i?: string | null;
  email_not_ends_with_i?: string | null;
  email_in?: (string | null)[] | null;
  email_not_in?: (string | null)[] | null;
  password_is_set?: boolean | null;
  sellOrder_every?: SellOrderWhereInput | null;
  sellOrder_some?: SellOrderWhereInput | null;
  sellOrder_none?: SellOrderWhereInput | null;
  address_every?: AddressWhereInput | null;
  address_some?: AddressWhereInput | null;
  address_none?: AddressWhereInput | null;
  category_every?: CategoryWhereInput | null;
  category_some?: CategoryWhereInput | null;
  category_none?: CategoryWhereInput | null;
  role?: RoleWhereInput | null;
  role_is_null?: boolean | null;
  passwordResetToken_is_set?: boolean | null;
  passwordResetIssuedAt?: string | null;
  passwordResetIssuedAt_not?: string | null;
  passwordResetIssuedAt_lt?: string | null;
  passwordResetIssuedAt_lte?: string | null;
  passwordResetIssuedAt_gt?: string | null;
  passwordResetIssuedAt_gte?: string | null;
  passwordResetIssuedAt_in?: (string | null)[] | null;
  passwordResetIssuedAt_not_in?: (string | null)[] | null;
  passwordResetRedeemedAt?: string | null;
  passwordResetRedeemedAt_not?: string | null;
  passwordResetRedeemedAt_lt?: string | null;
  passwordResetRedeemedAt_lte?: string | null;
  passwordResetRedeemedAt_gt?: string | null;
  passwordResetRedeemedAt_gte?: string | null;
  passwordResetRedeemedAt_in?: (string | null)[] | null;
  passwordResetRedeemedAt_not_in?: (string | null)[] | null;
  magicAuthToken_is_set?: boolean | null;
  magicAuthIssuedAt?: string | null;
  magicAuthIssuedAt_not?: string | null;
  magicAuthIssuedAt_lt?: string | null;
  magicAuthIssuedAt_lte?: string | null;
  magicAuthIssuedAt_gt?: string | null;
  magicAuthIssuedAt_gte?: string | null;
  magicAuthIssuedAt_in?: (string | null)[] | null;
  magicAuthIssuedAt_not_in?: (string | null)[] | null;
  magicAuthRedeemedAt?: string | null;
  magicAuthRedeemedAt_not?: string | null;
  magicAuthRedeemedAt_lt?: string | null;
  magicAuthRedeemedAt_lte?: string | null;
  magicAuthRedeemedAt_gt?: string | null;
  magicAuthRedeemedAt_gte?: string | null;
  magicAuthRedeemedAt_in?: (string | null)[] | null;
  magicAuthRedeemedAt_not_in?: (string | null)[] | null;
}

export interface UserWhereUniqueInput {
  id: string;
}

export interface WeekDayCreateInput {
  open?: string | null;
  startTime?: string | null;
  endTime?: string | null;
}

export interface WeekDayRelateToManyInput {
  create?: (WeekDayCreateInput | null)[] | null;
  connect?: (WeekDayWhereUniqueInput | null)[] | null;
  disconnect?: (WeekDayWhereUniqueInput | null)[] | null;
  disconnectAll?: boolean | null;
}

export interface WeekDayWhereInput {
  AND?: (WeekDayWhereInput | null)[] | null;
  OR?: (WeekDayWhereInput | null)[] | null;
  id?: string | null;
  id_not?: string | null;
  id_in?: (string | null)[] | null;
  id_not_in?: (string | null)[] | null;
  open?: string | null;
  open_not?: string | null;
  open_contains?: string | null;
  open_not_contains?: string | null;
  open_starts_with?: string | null;
  open_not_starts_with?: string | null;
  open_ends_with?: string | null;
  open_not_ends_with?: string | null;
  open_i?: string | null;
  open_not_i?: string | null;
  open_contains_i?: string | null;
  open_not_contains_i?: string | null;
  open_starts_with_i?: string | null;
  open_not_starts_with_i?: string | null;
  open_ends_with_i?: string | null;
  open_not_ends_with_i?: string | null;
  open_in?: (string | null)[] | null;
  open_not_in?: (string | null)[] | null;
  startTime?: string | null;
  startTime_not?: string | null;
  startTime_lt?: string | null;
  startTime_lte?: string | null;
  startTime_gt?: string | null;
  startTime_gte?: string | null;
  startTime_in?: (string | null)[] | null;
  startTime_not_in?: (string | null)[] | null;
  endTime?: string | null;
  endTime_not?: string | null;
  endTime_lt?: string | null;
  endTime_lte?: string | null;
  endTime_gt?: string | null;
  endTime_gte?: string | null;
  endTime_in?: (string | null)[] | null;
  endTime_not_in?: (string | null)[] | null;
}

export interface WeekDayWhereUniqueInput {
  id: string;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
