import { useContext } from 'react';
import { UserContext, UserContextProps } from '../providers/UserProvider';

export default function useUserPP(): UserContextProps {
  return useContext(UserContext);
}
