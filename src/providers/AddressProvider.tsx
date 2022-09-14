import { MutationResult, useMutation, useQuery } from '@apollo/client';
import { createContext, ReactNode } from 'react';
import { Loading } from '../components/UI';
import useCart from '../hooks/useCart';
import useNotification from '../hooks/useNotification';
import useUserPP from '../hooks/useUserPP';
import {
  ADDRESS_BY_USER_QUERY,
  CREATE_USER_ADDRESS_MUTATION,
  DELETE_ADDRESS_MUTATION,
  UPDATE_SHIPPING_ADDRESS
} from '../queries/address';
import { CART_BY_USER, CART_TOTALS } from '../queries/sell-order';
import {
  ADDRESS_BY_USER,
  ADDRESS_BY_USERVariables,
  ADDRESS_BY_USER_allAddresses
} from '../queries/__generated__/ADDRESS_BY_USER';
import {
  ADD_UPDATE_SHIPPING_ADDRESS,
  ADD_UPDATE_SHIPPING_ADDRESSVariables
} from '../queries/__generated__/ADD_UPDATE_SHIPPING_ADDRESS';
import {
  CREATE_USER_ADDRESS,
  CREATE_USER_ADDRESSVariables
} from '../queries/__generated__/CREATE_USER_ADDRESS';
import {
  DELETE_ADDRESS,
  DELETE_ADDRESSVariables
} from '../queries/__generated__/DELETE_ADDRESS';

interface ProviderProps {
  children?: ReactNode;
}

export interface AddressContextProps {
  addresses: (ADDRESS_BY_USER_allAddresses | null)[] | null | undefined;
  addAddress:
    | ((vars: CREATE_USER_ADDRESSVariables) => Promise<void>)
    | undefined;
  addAddressData: MutationResult<CREATE_USER_ADDRESS> | undefined;
  selectedAddress: ADDRESS_BY_USER_allAddresses | null;
  selectAddress: ((addressId: string) => void) | undefined;
  deleteAddress?: (addressId: string) => Promise<void>;
}

export const AddressContext = createContext<AddressContextProps>({
  addresses: undefined,
  addAddress: undefined,
  deleteAddress: undefined,
  addAddressData: undefined,
  selectedAddress: null,
  selectAddress: undefined
});

export default function AddressProvider({
  children
}: ProviderProps): JSX.Element {
  const { user } = useUserPP();
  const { cartData } = useCart();
  const { addNotification } = useNotification();
  const selectedAddress = cartData?.shippingOrder?.address || null;

  console.log({ user });
  // query that fetches all addresses from a user
  const addressesQuery = useQuery<ADDRESS_BY_USER, ADDRESS_BY_USERVariables>(
    ADDRESS_BY_USER_QUERY,
    { variables: { userId: user?.id || '' } }
  );

  const [addOrUpdateShippingAddress] = useMutation<
    ADD_UPDATE_SHIPPING_ADDRESS,
    ADD_UPDATE_SHIPPING_ADDRESSVariables
  >(UPDATE_SHIPPING_ADDRESS, {
    refetchQueries: [
      {
        query: CART_BY_USER,
        variables: { userId: user?.id || '' }
      },
      {
        query: CART_TOTALS
      }
    ]
  });
  // sets the selected address when called
  const handleAddressSelect = async (addressId: string) => {
    const addresses = addressesQuery.data?.allAddresses;

    if (!addresses?.length) {
      return;
    }

    console.log({ addressId });

    await addOrUpdateShippingAddress({
      variables: {
        addressId
      }
    });
  };

  // query to create a user address
  const [createAddress, createAddressMutation] = useMutation<
    CREATE_USER_ADDRESS,
    CREATE_USER_ADDRESSVariables
  >(CREATE_USER_ADDRESS_MUTATION, {
    refetchQueries: [
      { query: ADDRESS_BY_USER_QUERY, variables: { userId: user?.id || '' } }
    ]
  });

  const addAddress = async (vars: CREATE_USER_ADDRESSVariables) => {
    const res = await createAddress({ variables: vars }).catch(() => {
      addNotification({ type: 'danger', message: 'Error agregando dirección' });
    });

    if (res && res.data?.createUserAddress) {
      addNotification({
        type: 'success',
        message: 'Dirección creada exitosamente!'
      });
    }
  };

  const [deleteAddressMutation, { error: deleteAddressMutationError }] =
    useMutation<DELETE_ADDRESS, DELETE_ADDRESSVariables>(
      DELETE_ADDRESS_MUTATION,
      {
        refetchQueries: [
          {
            query: ADDRESS_BY_USER_QUERY,
            variables: { userId: user?.id || '' }
          }
        ]
      }
    );

  const deleteAddress: AddressContextProps['deleteAddress'] = async (
    addressId: string
  ) => {
    if (!user) return;
    const { data, errors } = await deleteAddressMutation({
      variables: { addressId }
    });

    if (errors || deleteAddressMutationError || !data?.deleteAddress?.id) {
      addNotification({
        type: 'danger',
        message: 'Error eliminando dirección'
      });
    } else {
      addNotification({ type: 'info', message: 'dirección eliminada' });
    }
  };

  const contextValue: AddressContextProps = {
    addresses: addressesQuery.data?.allAddresses,
    addAddress,
    deleteAddress,
    addAddressData: createAddressMutation,
    selectedAddress,
    selectAddress: handleAddressSelect
  };

  if (addressesQuery.loading) return <Loading />;

  return (
    <AddressContext.Provider value={contextValue}>
      {children}
    </AddressContext.Provider>
  );
}
