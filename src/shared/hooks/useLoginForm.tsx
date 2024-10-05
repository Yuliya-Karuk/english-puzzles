import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { LoginForm, loginSchema } from '../utils/validationSchema';

export const useLoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({ resolver: yupResolver(loginSchema), mode: 'onChange' });

  const onGoogleSubmit = async () => {};

  const onSubmit = async (data: LoginForm) => {
    console.log(data);
    reset();
  };

  return { register, handleSubmit, onGoogleSubmit, errors, isValid, onSubmit };
};
