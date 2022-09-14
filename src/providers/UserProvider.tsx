import { ApolloError, useMutation, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { createContext, ReactNode } from 'react';
import {
  CategoryRelateToManyInput,
  UserUpdateInput
} from '../../__generated__/globalTypes';
import useNotification from '../hooks/useNotification';
import {
  UserPasswordResetInput,
  UserSignInInput,
  UserSignUpInput
} from '../models/user';
import { RESET_MUTATION } from '../queries/resetPassword';
import { SIGN_IN_MUTATION } from '../queries/signin';
import { SIGN_OUT_MUTATION } from '../queries/signout';
import { SIGN_UP_MUTATION } from '../queries/signup';
import { CURRENT_USER_QUERY } from '../queries/user';
import { UPDATA_USER_MUTATION_2 } from '../queries/userUpdate';
import {
  CURRENT_USER,
  CURRENT_USER_authenticatedItem
} from '../queries/__generated__/CURRENT_USER';
import { RESET, RESETVariables } from '../queries/__generated__/RESET';
import { SIGN_IN, SIGN_INVariables } from '../queries/__generated__/SIGN_IN';
import { SIGN_OUT } from '../queries/__generated__/SIGN_OUT';
import { SIGN_UP, SIGN_UPVariables } from '../queries/__generated__/SIGN_UP';
import {
  UPDATE_USER_MUTATION,
  UPDATE_USER_MUTATIONVariables
} from '../queries/__generated__/UPDATE_USER_MUTATION';
import {
  LoginSchema,
  PasswordResetSchema,
  SignupSchema
} from '../schemas/user';

interface Props {
  children?: ReactNode;
}

export interface UserContextProps {
  signin?: (signinInput: UserSignInInput) => Promise<void>;
  signinPersonalInfo?: (signinInput: UserSignInInput) => Promise<void>;
  signout?: () => Promise<void>;
  user?: CURRENT_USER_authenticatedItem | null;
  signup?: (userInput: UserSignUpInput) => Promise<void>;
  passwordReset?: (
    userInput: UserPasswordResetInput,
    token: any
  ) => Promise<void>;
  updateUser?: (
    user: Pick<
      UserUpdateInput,
      | 'name'
      | 'lastName'
      | 'identificationType'
      | 'identification'
      | 'phone'
      | 'email'
    > & { categories?: string[] }
  ) => Promise<void>;
}

export const UserContext = createContext<UserContextProps>({});

export default function UserProvider({ children }: Props): JSX.Element {
  const router = useRouter();
  /* const { token } = router.query; */
  const { addNotification } = useNotification();

  const { data: userData } = useQuery<CURRENT_USER>(CURRENT_USER_QUERY);
  const user = userData?.authenticatedItem;

  const [signInUser] = useMutation<SIGN_IN, SIGN_INVariables>(
    SIGN_IN_MUTATION,
    {
      refetchQueries: [{ query: CURRENT_USER_QUERY }]
    }
  );

  const signin = async (signinInput: UserSignInInput): Promise<void> => {
    const values = await LoginSchema.validate(signinInput, { strict: true });
    const res = await signInUser({ variables: values });

    if (
      res.data?.authenticateUserWithPassword.__typename ===
      'UserAuthenticationWithPasswordFailure'
    ) {
      addNotification({
        message: 'Usuario o Contraseña Incorrectos',
        type: 'danger'
      });
    } else {
      setTimeout(() => {
        router.push('/');
      }, 1000);
    }
  };

  const signinPersonalInfo = async (
    signinInput: UserSignInInput
  ): Promise<void> => {
    const values = await LoginSchema.validate(signinInput, { strict: true });
    const res = await signInUser({ variables: values });

    if (
      res.data?.authenticateUserWithPassword.__typename ===
      'UserAuthenticationWithPasswordFailure'
    ) {
      addNotification({
        message: 'Usuario o Contraseña Incorrectos',
        type: 'danger'
      });
    }
  };

  const [signOutUser] = useMutation<SIGN_OUT>(SIGN_OUT_MUTATION, {
    refetchQueries: [{ query: CURRENT_USER_QUERY }]
  });

  const signout = async () => {
    if (!user) return;
    await signOutUser();
  };

  const [signUpUser] = useMutation<SIGN_UP, SIGN_UPVariables>(
    SIGN_UP_MUTATION,
    {
      refetchQueries: [{ query: CURRENT_USER_QUERY }]
    }
  );

  const signup = async (userInput: UserSignUpInput): Promise<void> => {
    const values = await SignupSchema.validate(userInput, { strict: true });
    try {
      await signUpUser({
        variables: {
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          password: values.password,
          phone: values.phone,
          identificationType: values.docType,
          identification: values.docNumber
        }
      });

      signinPersonalInfo({ email: values.email, password: values.password });

      setTimeout(() => {
        router.push('/personal-info');
      }, 1000);
    } catch (e) {
      const msg = (e as ApolloError).message;
      let errorMsg = 'Error al registrarse';

      if (msg.includes('email:')) {
        errorMsg = 'Correo ya inscrito';
      } else if (msg.includes('identification:')) {
        errorMsg = 'Documento de identidad ya inscrito';
      }

      addNotification({
        message: errorMsg,
        type: 'danger'
      });
    }
  };

  const [passwordResetUser, { data: resetData }] = useMutation<
    RESET,
    RESETVariables
  >(RESET_MUTATION, {
    refetchQueries: [{ query: CURRENT_USER_QUERY }]
  });

  const passwordReset = async (
    passwordResetInput: UserPasswordResetInput,
    token: any
  ): Promise<void> => {
    const values = await PasswordResetSchema.validate(passwordResetInput, {
      strict: true
    });

    await passwordResetUser({
      variables: {
        email: values.email,
        password: values.password,
        token: token
      }
    });

    if (resetData?.redeemUserPasswordResetToken?.code == 'FAILURE') {
      addNotification({
        message: `${resetData.redeemUserPasswordResetToken.message}`,
        type: 'danger'
      });
    } else if (resetData?.redeemUserPasswordResetToken == null) {
      addNotification({
        message: 'Contraseña Cambiada Exitosamente',
        type: 'success'
      });
      setTimeout(() => {
        router.push('/login');
      }, 3000);
    }
  };

  const [updateUserMutation, updateUserMutationData] = useMutation<
    UPDATE_USER_MUTATION,
    UPDATE_USER_MUTATIONVariables
  >(UPDATA_USER_MUTATION_2, {
    refetchQueries: [{ query: CURRENT_USER_QUERY }]
  });
  const updateUser: UserContextProps['updateUser'] = async ({
    categories,
    ...userUpdateData
  }) => {
    // can only update if user is logged in
    if (!user) return;

    const categoryIds = categories ? [...categories] : [];

    const categoriesToDisconnect: CategoryRelateToManyInput['disconnect'] = [];

    for (const category of user.category) {
      if (!category) continue;
      const index = categoryIds?.indexOf(category.id);
      if (typeof index === 'number' && index >= 0) {
        categoryIds?.splice(index, 1);
      } else {
        categoriesToDisconnect.push({ id: category.id });
      }
    }

    const categoriesToConnect: CategoryRelateToManyInput['connect'] =
      categoryIds?.map((cId) => ({ id: cId }));

    const { data, errors } = await updateUserMutation({
      variables: {
        userId: user.id,
        data: {
          ...userUpdateData,
          category: {
            connect: categoriesToConnect?.length
              ? categoriesToConnect
              : undefined,
            disconnect: categoriesToDisconnect.length
              ? categoriesToDisconnect
              : undefined
          }
        }
      }
    });

    if (errors || updateUserMutationData.error || !data?.updateUser?.id) {
      addNotification({
        type: 'danger',
        message: 'error actualizando usuario'
      });
    } else {
      addNotification({ type: 'success', message: 'usuario actualizado' });
    }
  };

  const contextValue: UserContextProps = {
    user,
    signin,
    signinPersonalInfo,
    signout,
    signup,
    passwordReset,
    updateUser
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
}
