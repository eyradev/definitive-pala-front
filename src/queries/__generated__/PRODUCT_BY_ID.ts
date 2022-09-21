/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: PRODUCT_BY_ID
// ====================================================

export interface PRODUCT_BY_ID_allProducts_store_banner {
  __typename: "CloudinaryImage_File";
  publicUrlTransformed: string | null;
}

export interface PRODUCT_BY_ID_allProducts_store {
  __typename: "Store";
  id: string;
  name: string | null;
  banner: PRODUCT_BY_ID_allProducts_store_banner | null;
  video: string | null;
}

export interface PRODUCT_BY_ID_allProducts_photo_image {
  __typename: "CloudinaryImage_File";
  publicUrlTransformed: string | null;
}

export interface PRODUCT_BY_ID_allProducts_photo {
  __typename: "ProductImage";
  id: string;
  image: PRODUCT_BY_ID_allProducts_photo_image | null;
  altText: string | null;
}

export interface PRODUCT_BY_ID_allProducts_review_user {
  __typename: "User";
  id: string;
  name: string | null;
}

export interface PRODUCT_BY_ID_allProducts_review {
  __typename: "Review";
  id: string;
  user: PRODUCT_BY_ID_allProducts_review_user | null;
  points: string | null;
  comments: string | null;
  visible: boolean | null;
  dateCreated: string | null;
}

export interface PRODUCT_BY_ID_allProducts_category_icon {
  __typename: "CloudinaryImage_File";
  publicUrlTransformed: string | null;
}

export interface PRODUCT_BY_ID_allProducts_category {
  __typename: "Category";
  id: string;
  color: string | null;
  name: string | null;
  type: string | null;
  icon: PRODUCT_BY_ID_allProducts_category_icon | null;
}

export interface PRODUCT_BY_ID_allProducts {
  __typename: "Product";
  id: string;
  name: string | null;
  sku: string | null;
  description: string | null;
  productionTime: number | null;
  video: string | null;
  store: PRODUCT_BY_ID_allProducts_store | null;
  photo: PRODUCT_BY_ID_allProducts_photo[];
  review: PRODUCT_BY_ID_allProducts_review[];
  category: PRODUCT_BY_ID_allProducts_category[];
  price: number | null;
  salePrice: number | null;
  calories100gr: number | null;
  sodio: number | null;
}

export interface PRODUCT_BY_ID {
  /**
   *  Search for all Product items which match the where clause. 
   */
  allProducts: (PRODUCT_BY_ID_allProducts | null)[] | null;
}

export interface PRODUCT_BY_IDVariables {
  productId: string;
}
