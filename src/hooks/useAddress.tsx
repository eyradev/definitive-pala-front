import { useContext } from 'react';
import {
  AddressContext,
  AddressContextProps
} from '../providers/AddressProvider';

export default function useAddress(): AddressContextProps {
  return useContext(AddressContext);
}
