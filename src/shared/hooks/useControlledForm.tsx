import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { CustomForm, schema } from '../utils/validationSchema';

export const useControlledForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({ resolver: yupResolver(schema), mode: 'onChange' });

  const onSubmit = async (data: CustomForm) => {
    console.log(data);
    reset();
  };

  return { register, handleSubmit, errors, isValid, onSubmit };
};
