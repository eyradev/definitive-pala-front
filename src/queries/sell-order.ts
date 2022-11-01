import gql from "graphql-tag";

export const ALL_SELL_ORDERS = gql`
  query ALL_SELL_ORDERS($userId: ID!) {
    allSellOrders(where: { user: { id: $userId } }) {
      id
      siigoId
      state
      shippingOrder {
        state
        price
        address {
          id
          addressL1
          description
        }
      }
    }
  }
`;

export const CART_BY_USER = gql`
  query CART_BY_USER_QUERY($userId: ID!) {
    allSellOrders(where: { user: { id: $userId }, state: "CART" }) {
      id
      siigoId
      shippingOrder {
        id
        state
        price
        address {
          id
          addressL1
          description
          city {
            name
          }
        }
      }
      coupons {
        id
        name
        shortName
        description
        owner {
          id
        }
        type
        amount
      }
      shippingOrder {
        price
      }
    }
  }
`;

export const SELL_ORDER = gql`
  query SELL_ORDER_QUERY($sellOrderId: ID!) {
    allSellOrders(where: { id: $sellOrderId }) {
      lineItem {
        id
        quantity
        price
        product {
          name
        }
      }
      coupons {
        id
        name
        shortName
      }
    }
  }
`;
