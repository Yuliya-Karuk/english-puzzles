import { yupResolver } from '@hookform/resolvers/yup';
import { FirebaseError } from 'firebase/app';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { authenticationLoading, successRegisterMessage, unexpectedError } from '../consts/authConsts';
import { registerWithEmailAndPassword } from '../services/auth';
import { RegistrationForm, registrationSchema } from '../utils/validationSchema';

export const useRegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({ resolver: yupResolver(registrationSchema), mode: 'onChange' });

  const onSubmit = async (registerData: RegistrationForm) => {
    toast.promise(registerWithEmailAndPassword(registerData.name, registerData.email, registerData.password), {
      pending: authenticationLoading,
      success: successRegisterMessage,
      error: {
        render({ data }) {
          return data instanceof FirebaseError ? data.message : unexpectedError;
        },
      },
    });
    reset();
  };

  return { register, handleSubmit, errors, isValid, onSubmit };
};
