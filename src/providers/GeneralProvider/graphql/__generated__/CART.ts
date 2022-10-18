/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CART
// ====================================================

export interface CART_Cart_sellOrder_lineItem_product_photo_image {
  __typename: "CloudinaryImage_File";
  publicUrlTransformed: string | null;
}

export interface CART_Cart_sellOrder_lineItem_product_photo {
  __typename: "ProductImage";
  altText: string | null;
  image: CART_Cart_sellOrder_lineItem_product_photo_image | null;
}

export interface CART_Cart_sellOrder_lineItem_product {
  __typename: "Product";
  id: string;
  name: string | null;
  description: string | null;
  hasTax: boolean | null;
  photo: CART_Cart_sellOrder_lineItem_product_photo[];
}

export interface CART_Cart_sellOrder_lineItem {
  __typename: "LineItem";
  id: string;
  price: number | null;
  product: CART_Cart_sellOrder_lineItem_product | null;
}

export interface CART_Cart_sellOrder {
  __typename: "SellOrder";
  lineItem: CART_Cart_sellOrder_lineItem[];
}

export interface CART_Cart_deletedItems {
  __typename: "LineItem";
  id: string;
}

export interface CART_Cart_updatedItems {
  __typename: "LineItem";
  id: string;
}

export interface CART_Cart_priceBreakdown {
  __typename: "CartPriceBreakdown";
  basePrice: number;
  totalPrice: number;
}

export interface CART_Cart {
  __typename: "CartQuery";
  sellOrder: CART_Cart_sellOrder | null;
  deletedItems: (CART_Cart_deletedItems | null)[] | null;
  updatedItems: (CART_Cart_updatedItems | null)[] | null;
  priceBreakdown: CART_Cart_priceBreakdown | null;
}

export interface CART {
  Cart: CART_Cart | null;
}
