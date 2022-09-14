import {
  ApolloCache,
  DefaultContext,
  FetchResult,
  MutationUpdaterFunction,
  useMutation,
  useQuery
} from '@apollo/client';
import { createContext, ReactNode, useState } from 'react';
import { Loading } from '../components/UI';
import useNotification from '../hooks/useNotification';
import useUserPP from '../hooks/useUserPP';
import {
  ADD_LINE_ITEM_MUTATION,
  ALL_LINE_ITEMS_BY_USER,
  REMOVE_LINE_ITEM_MUTATION
} from '../queries/lineItem';
import { CART_BY_USER, CART_TOTALS } from '../queries/sell-order';
import {
  ADD_LINE_ITEM,
  ADD_LINE_ITEMVariables
} from '../queries/__generated__/ADD_LINE_ITEM';
import {
  ALL_LINE_ITEMS,
  ALL_LINE_ITEMSVariables
} from '../queries/__generated__/ALL_LINE_ITEMS';
import {
  CART_BY_USER_QUERY,
  CART_BY_USER_QUERY_allSellOrders,
  CART_BY_USER_QUERYVariables
} from '../queries/__generated__/CART_BY_USER_QUERY';
import {
  CART_DETAILS_QUERY,
  CART_DETAILS_QUERY_cartDetails
} from '../queries/__generated__/CART_DETAILS_QUERY';
import {
  REMOVE_LINE_ITEM,
  REMOVE_LINE_ITEMVariables
} from '../queries/__generated__/REMOVE_LINE_ITEM';

interface Props {
  children?: ReactNode;
}

export interface CartContextProps {
  lineItems: ALL_LINE_ITEMS | undefined;
  cartData: CART_BY_USER_QUERY_allSellOrders | null | undefined;
  addLineItem: (productId: string, quantity: number) => void;
  removeLineItem: (
    lineItemId: string
  ) => Promise<
    | FetchResult<REMOVE_LINE_ITEM, Record<string, any>, Record<string, any>>
    | undefined
  >;
  cartTotals: CART_DETAILS_QUERY_cartDetails | null | undefined;
  isOpen: boolean;
  toggleCart: () => void;
}

export const CartContext = createContext<CartContextProps>({
  lineItems: undefined,
  cartData: undefined,
  addLineItem: () => {},
  removeLineItem: () => new Promise(() => {}),
  cartTotals: undefined,
  isOpen: false,
  toggleCart: () => {}
});

const removeUpdateFunction: MutationUpdaterFunction<
  REMOVE_LINE_ITEM,
  REMOVE_LINE_ITEMVariables,
  DefaultContext,
  ApolloCache<any>
> = (cache, results) => {
  const deletedItem = results.data?.deleteLineItem;
  const normalizedId = cache.identify({ ...deletedItem });
  cache.evict({ id: normalizedId });
  cache.gc();
};

export default function CartProvider({ children }: Props): JSX.Element {
  const { user } = useUserPP();
  const { addNotification } = useNotification();

  const { data: lineItems, loading: itemsLoading } = useQuery<
    ALL_LINE_ITEMS,
    ALL_LINE_ITEMSVariables
  >(ALL_LINE_ITEMS_BY_USER, {
    variables: { userId: user?.id || '' }
  });

  const { data: cartData, loading: cartLoading } = useQuery<
    CART_BY_USER_QUERY,
    CART_BY_USER_QUERYVariables
  >(CART_BY_USER, {
    variables: { userId: user?.id || '' }
  });

  const [addItem, { error: addItemError }] = useMutation<
    ADD_LINE_ITEM,
    ADD_LINE_ITEMVariables
  >(ADD_LINE_ITEM_MUTATION, {
    refetchQueries: [
      {
        query: ALL_LINE_ITEMS_BY_USER,
        variables: { userId: user?.id || '' }
      },
      { query: CART_TOTALS }
    ]
  });

  const [removeItem] = useMutation<REMOVE_LINE_ITEM, REMOVE_LINE_ITEMVariables>(
    REMOVE_LINE_ITEM_MUTATION,
    {
      // Added removeUpdateFunction to evict items instead of refetching
      // refetchQueries: [
      //   { query: ALL_LINE_ITEMS_BY_USER, variables: { userId: user?.id || '' } }
      // ],
      update: removeUpdateFunction,
      refetchQueries: [{ query: CART_TOTALS }]
    }
  );

  const { data: cartTotals, loading: totalsLoading } =
    useQuery<CART_DETAILS_QUERY>(CART_TOTALS);

  const removeLineItem = async (lineItemId: string) => {
    // this method just removes the line item, it can be updated to remove a custom quantiy
    if (lineItemId.length !== 24) return;
    return removeItem({ variables: { lineItemId } });
  };

  const addLineItem = async (productId: string, quantity: number) => {
    if (productId.length !== 24 || quantity < 1) return;
    const pepe = await addItem({ variables: { productId, quantity } }).catch(
      () => {
        addNotification({
          message: addItemError?.message || 'Error agregando producto',
          type: 'danger'
        });
      }
    );

    if (pepe?.data?.addToCart) {
      addNotification({
        message: (
          <div onClick={toggleCart}>
            <div style={{ display: 'inline-block' }}>
              Se agrego producto al carrito
            </div>
            <a style={{ display: 'inline-block', color: 'var(--info)' }}>
              {' '}
              ver carrito
            </a>
          </div>
        ),
        type: 'primary'
      });
    }
  };

  const [isOpen, setOpen] = useState(false);

  const toggleCart = () => {
    setOpen(!isOpen);
  };

  const contextValue: CartContextProps = {
    lineItems: lineItems,
    cartData:
      cartData?.allSellOrders && cartData?.allSellOrders?.length > 0
        ? cartData.allSellOrders[0]
        : undefined,
    addLineItem,
    removeLineItem,
    cartTotals: cartTotals?.cartDetails,
    isOpen,
    toggleCart
  };

  if (cartLoading && itemsLoading && totalsLoading) return <Loading />;

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}
