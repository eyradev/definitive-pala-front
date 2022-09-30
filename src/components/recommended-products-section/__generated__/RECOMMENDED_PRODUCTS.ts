/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: RECOMMENDED_PRODUCTS
// ====================================================

export interface RECOMMENDED_PRODUCTS_allProducts_photo_image {
  __typename: "CloudinaryImage_File";
  publicUrlTransformed: string | null;
}

export interface RECOMMENDED_PRODUCTS_allProducts_photo {
  __typename: "ProductImage";
  altText: string | null;
  image: RECOMMENDED_PRODUCTS_allProducts_photo_image | null;
}

export interface RECOMMENDED_PRODUCTS_allProducts_category_icon {
  __typename: "CloudinaryImage_File";
  publicUrlTransformed: string | null;
}

export interface RECOMMENDED_PRODUCTS_allProducts_category {
  __typename: "Category";
  id: string;
  type: string | null;
  name: string | null;
  color: string | null;
  icon: RECOMMENDED_PRODUCTS_allProducts_category_icon | null;
}

export interface RECOMMENDED_PRODUCTS_allProducts_store {
  __typename: "Store";
  id: string;
  name: string | null;
}

export interface RECOMMENDED_PRODUCTS_allProducts {
  __typename: "Product";
  id: string;
  name: string | null;
  description: string | null;
  price: number | null;
  salePrice: number | null;
  photo: RECOMMENDED_PRODUCTS_allProducts_photo[];
  category: RECOMMENDED_PRODUCTS_allProducts_category[];
  store: RECOMMENDED_PRODUCTS_allProducts_store | null;
}

export interface RECOMMENDED_PRODUCTS {
  /**
   *  Search for all Product items which match the where clause. 
   */
  allProducts: (RECOMMENDED_PRODUCTS_allProducts | null)[] | null;
}

export interface RECOMMENDED_PRODUCTSVariables {
  userId: string;
}
