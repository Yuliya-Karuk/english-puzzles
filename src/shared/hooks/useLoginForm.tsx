import { yupResolver } from '@hookform/resolvers/yup';
import { FirebaseError } from 'firebase/app';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { authenticationLoading, successLoginMessage, unexpectedError } from '../consts/authConsts';
import { logInWithEmailAndPassword, logInWithGoogle } from '../services/auth';
import { LoginForm, loginSchema } from '../utils/validationSchema';

export const useLoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({ resolver: yupResolver(loginSchema), mode: 'onChange' });

  const onGoogleSubmit = async () => {
    toast.promise(logInWithGoogle, {
      pending: authenticationLoading,
      success: successLoginMessage,
      error: {
        render({ data }) {
          return data instanceof FirebaseError ? data.message : unexpectedError;
        },
      },
    });
  };

  const onSubmit = async (loginData: LoginForm) => {
    toast.promise(logInWithEmailAndPassword(loginData.email, loginData.password), {
      pending: authenticationLoading,
      success: successLoginMessage,
      error: {
        render({ data }) {
          return data instanceof FirebaseError ? data.message : unexpectedError;
        },
      },
    });
    reset();
  };

  return { register, handleSubmit, onGoogleSubmit, errors, isValid, onSubmit };
};
