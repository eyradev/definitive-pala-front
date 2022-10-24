/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CART_ITEMS
// ====================================================

export interface CART_ITEMS_items_product_photo_image {
  __typename: "CloudinaryImage_File";
  publicUrlTransformed: string | null;
}

export interface CART_ITEMS_items_product_photo {
  __typename: "ProductImage";
  altText: string | null;
  image: CART_ITEMS_items_product_photo_image | null;
}

export interface CART_ITEMS_items_product {
  __typename: "Product";
  id: string;
  name: string | null;
  photo: CART_ITEMS_items_product_photo[];
}

export interface CART_ITEMS_items {
  __typename: "LineItem";
  id: string;
  price: number | null;
  quantity: number | null;
  product: CART_ITEMS_items_product | null;
}

export interface CART_ITEMS {
  /**
   *  Search for all LineItem items which match the where clause. 
   */
  items: (CART_ITEMS_items | null)[] | null;
}

export interface CART_ITEMSVariables {
  cartId: string;
}
