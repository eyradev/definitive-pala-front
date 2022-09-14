/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ProductWhereInput } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: PRODUCT_SEARCH
// ====================================================

export interface PRODUCT_SEARCH_allProducts_photo_image {
  __typename: "CloudinaryImage_File";
  publicUrlTransformed: string | null;
}

export interface PRODUCT_SEARCH_allProducts_photo {
  __typename: "ProductImage";
  altText: string | null;
  image: PRODUCT_SEARCH_allProducts_photo_image | null;
}

export interface PRODUCT_SEARCH_allProducts_category_icon {
  __typename: "CloudinaryImage_File";
  publicUrlTransformed: string | null;
}

export interface PRODUCT_SEARCH_allProducts_category {
  __typename: "Category";
  id: string;
  name: string | null;
  type: string | null;
  color: string | null;
  icon: PRODUCT_SEARCH_allProducts_category_icon | null;
}

export interface PRODUCT_SEARCH_allProducts_store {
  __typename: "Store";
  name: string | null;
  id: string;
}

export interface PRODUCT_SEARCH_allProducts {
  __typename: "Product";
  id: string;
  name: string | null;
  description: string | null;
  price: number | null;
  salePrice: number | null;
  photo: PRODUCT_SEARCH_allProducts_photo[];
  category: PRODUCT_SEARCH_allProducts_category[];
  store: PRODUCT_SEARCH_allProducts_store | null;
}

export interface PRODUCT_SEARCH {
  /**
   *  Search for all Product items which match the where clause. 
   */
  allProducts: (PRODUCT_SEARCH_allProducts | null)[] | null;
}

export interface PRODUCT_SEARCHVariables {
  input?: ProductWhereInput | null;
  search?: string | null;
  first?: number | null;
  skip?: number | null;
}
