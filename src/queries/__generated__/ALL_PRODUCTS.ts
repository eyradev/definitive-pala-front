/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ALL_PRODUCTS
// ====================================================

export interface ALL_PRODUCTS_allProducts_photo_image {
  __typename: "CloudinaryImage_File";
  publicUrlTransformed: string | null;
}

export interface ALL_PRODUCTS_allProducts_photo {
  __typename: "ProductImage";
  id: string;
  image: ALL_PRODUCTS_allProducts_photo_image | null;
}

export interface ALL_PRODUCTS_allProducts {
  __typename: "Product";
  id: string;
  name: string | null;
  price: number | null;
  salePrice: number | null;
  photo: ALL_PRODUCTS_allProducts_photo[];
}

export interface ALL_PRODUCTS {
  /**
   *  Search for all Product items which match the where clause. 
   */
  allProducts: (ALL_PRODUCTS_allProducts | null)[] | null;
}
