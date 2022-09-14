/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: TOP_SIMILAR_PRODUCTS
// ====================================================

export interface TOP_SIMILAR_PRODUCTS_allProducts_photo_image {
  __typename: "CloudinaryImage_File";
  publicUrlTransformed: string | null;
}

export interface TOP_SIMILAR_PRODUCTS_allProducts_photo {
  __typename: "ProductImage";
  altText: string | null;
  image: TOP_SIMILAR_PRODUCTS_allProducts_photo_image | null;
}

export interface TOP_SIMILAR_PRODUCTS_allProducts_category_icon {
  __typename: "CloudinaryImage_File";
  publicUrlTransformed: string | null;
}

export interface TOP_SIMILAR_PRODUCTS_allProducts_category {
  __typename: "Category";
  id: string;
  name: string | null;
  color: string | null;
  icon: TOP_SIMILAR_PRODUCTS_allProducts_category_icon | null;
}

export interface TOP_SIMILAR_PRODUCTS_allProducts_store {
  __typename: "Store";
  id: string;
  name: string | null;
}

export interface TOP_SIMILAR_PRODUCTS_allProducts {
  __typename: "Product";
  id: string;
  name: string | null;
  description: string | null;
  price: number | null;
  salePrice: number | null;
  photo: TOP_SIMILAR_PRODUCTS_allProducts_photo[];
  category: TOP_SIMILAR_PRODUCTS_allProducts_category[];
  store: TOP_SIMILAR_PRODUCTS_allProducts_store | null;
}

export interface TOP_SIMILAR_PRODUCTS {
  /**
   *  Search for all Product items which match the where clause. 
   */
  allProducts: (TOP_SIMILAR_PRODUCTS_allProducts | null)[] | null;
}

export interface TOP_SIMILAR_PRODUCTSVariables {
  categories: (string | null)[];
  productId: string;
}
