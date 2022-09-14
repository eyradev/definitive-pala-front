/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: PRODUCT_OFFERS
// ====================================================

export interface PRODUCT_OFFERS_allProducts_photo_image {
  __typename: "CloudinaryImage_File";
  publicUrlTransformed: string | null;
}

export interface PRODUCT_OFFERS_allProducts_photo {
  __typename: "ProductImage";
  altText: string | null;
  image: PRODUCT_OFFERS_allProducts_photo_image | null;
}

export interface PRODUCT_OFFERS_allProducts_category_icon {
  __typename: "CloudinaryImage_File";
  publicUrlTransformed: string | null;
}

export interface PRODUCT_OFFERS_allProducts_category {
  __typename: "Category";
  id: string;
  name: string | null;
  type: string | null;
  color: string | null;
  icon: PRODUCT_OFFERS_allProducts_category_icon | null;
}

export interface PRODUCT_OFFERS_allProducts_store {
  __typename: "Store";
  id: string;
  name: string | null;
}

export interface PRODUCT_OFFERS_allProducts {
  __typename: "Product";
  id: string;
  name: string | null;
  description: string | null;
  price: number | null;
  salePrice: number | null;
  photo: PRODUCT_OFFERS_allProducts_photo[];
  category: PRODUCT_OFFERS_allProducts_category[];
  store: PRODUCT_OFFERS_allProducts_store | null;
}

export interface PRODUCT_OFFERS {
  /**
   *  Search for all Product items which match the where clause. 
   */
  allProducts: (PRODUCT_OFFERS_allProducts | null)[] | null;
}
