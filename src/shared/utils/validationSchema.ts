import * as yup from 'yup';
import { Gender } from '../models/types';

export interface RegistrationForm {
  name: string;
  age: number;
  email: string;
  password: string;
  confirmPassword: string;
  acceptTerms: boolean;
  gender: string;
}

export type LoginForm = Pick<RegistrationForm, 'email' | 'password'>;

export const genders: Gender[] = ['Male', 'Female'];

export const validEmailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const passwordStrengthRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;

const englishLettersRegExp = /^[A-Za-z]+$/;

export const passwordMinLength = 8;

export const registrationSchema = yup.object().shape({
  name: yup
    .string()
    .matches(englishLettersRegExp, 'Only English letters are allowed')
    .required('Name is a required field')
    .matches(/^[A-Z][a-z]*$/, 'Name must start with a capital letter and be followed by lowercase letters'),

  age: yup
    .number()
    .transform((value, originalValue) => (originalValue.trim() === '' ? undefined : value))
    .required('Age is a required field')
    .min(0, 'Age cannot be negative'),

  email: yup.string().required('Email is a required field').matches(validEmailRegExp, 'Must be a valid email format'),

  password: yup
    .string()
    .required('Password is a required field')
    .min(passwordMinLength, `Password must be at least ${passwordMinLength} characters long`)
    .matches(
      passwordStrengthRegex,
      'Password must contain 1 number, 1 uppercase letter, 1 lowercase letter, and 1 special character'
    ),

  confirmPassword: yup
    .string()
    .required('Confirm Password is a required field')
    .oneOf([yup.ref('password')], 'Passwords must match')
    .matches(
      passwordStrengthRegex,
      'Password must contain 1 number, 1 uppercase letter, 1 lowercase letter, and 1 special character'
    ),

  gender: yup.string().required('Gender is a required field'),

  acceptTerms: yup
    .boolean()
    .oneOf([true], 'You must accept the terms and conditions')
    .required('You must accept the terms and conditions'),
});

export const loginSchema = yup.object().shape({
  email: yup.string().required('Email is a required field').matches(validEmailRegExp, 'Must be a valid email format'),

  password: yup
    .string()
    .required('Password is a required field')
    .min(passwordMinLength, `Password must be at least ${passwordMinLength} characters long`)
    .matches(
      passwordStrengthRegex,
      'Password must contain 1 number, 1 uppercase letter, 1 lowercase letter, and 1 special character'
    ),
});
