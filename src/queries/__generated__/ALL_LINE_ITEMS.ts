/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ALL_LINE_ITEMS
// ====================================================

export interface ALL_LINE_ITEMS_allLineItems_sellOrder {
  __typename: "SellOrder";
  state: string | null;
}

export interface ALL_LINE_ITEMS_allLineItems_product_photo_image {
  __typename: "CloudinaryImage_File";
  publicUrlTransformed: string | null;
}

export interface ALL_LINE_ITEMS_allLineItems_product_photo {
  __typename: "ProductImage";
  altText: string | null;
  image: ALL_LINE_ITEMS_allLineItems_product_photo_image | null;
}

export interface ALL_LINE_ITEMS_allLineItems_product {
  __typename: "Product";
  id: string;
  name: string | null;
  description: string | null;
  hasTax: boolean | null;
  photo: ALL_LINE_ITEMS_allLineItems_product_photo[];
}

export interface ALL_LINE_ITEMS_allLineItems {
  __typename: "LineItem";
  id: string;
  quantity: number | null;
  price: number | null;
  sellOrder: ALL_LINE_ITEMS_allLineItems_sellOrder | null;
  product: ALL_LINE_ITEMS_allLineItems_product | null;
}

export interface ALL_LINE_ITEMS {
  /**
   *  Search for all LineItem items which match the where clause. 
   */
  allLineItems: (ALL_LINE_ITEMS_allLineItems | null)[] | null;
}

export interface ALL_LINE_ITEMSVariables {
  userId: string;
}
