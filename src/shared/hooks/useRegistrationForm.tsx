import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { RegistrationForm, registrationSchema } from '../utils/validationSchema';

export const useRegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({ resolver: yupResolver(registrationSchema), mode: 'onChange' });

  const onSubmit = async (data: RegistrationForm) => {
    console.log(data);
    reset();
  };

  return { register, handleSubmit, errors, isValid, onSubmit };
};
