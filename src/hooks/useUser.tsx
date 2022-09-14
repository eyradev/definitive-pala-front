import { useQuery } from '@apollo/client';
import { CURRENT_USER_QUERY } from '../queries/user';
import {
  CURRENT_USER,
  CURRENT_USER_authenticatedItem
} from '../queries/__generated__/CURRENT_USER';

export default function useUser():
  | CURRENT_USER_authenticatedItem
  | null
  | undefined {
  const { data } = useQuery<CURRENT_USER>(CURRENT_USER_QUERY);
  return data?.authenticatedItem;
}
