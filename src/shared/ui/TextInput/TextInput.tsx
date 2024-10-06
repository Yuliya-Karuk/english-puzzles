import eyeOff from '@/assets/icons/eye-off.svg';
import eyeOn from '@/assets/icons/eye-show.svg';
import { TextInputProps } from '@/shared/models/types';
import cn from 'classnames';
import Image from 'next/image';
import { memo, useState } from 'react';
import { FieldValues } from 'react-hook-form';

export function TextInput<T extends FieldValues>(props: TextInputProps<T>) {
  const {
    name,
    label,
    register,
    type = 'text',
    autocomplete = undefined,
    error,
    onFocus,
    onBlur,
    onInput,
    value,
  } = props;
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const registerProps = register ? register(name) : { name };

  return (
    <div
      className={cn('relative', {
        'flex gap-[30px] items-center min-h-[70px]': type === 'radio',
      })}
    >
      <label
        htmlFor={type === 'radio' ? `${name}-${label}` : name}
        className={cn('relative z-10 block w-full mt-[10px] custom-label', {
          'pl-[40px]': type === 'checkbox',
          'cursor-pointer w-auto !mt-0': type === 'radio',
        })}
      >
        {label}
        <span className={cn('text-orange', { hidden: type === 'radio' })}>*</span>
      </label>
      <input
        className={cn('w-full mt-[5px] p-[10px] rounded-[5px] custom-label border-2', {
          'border-border-input': !error,
          'border-invalid': error,
          'pr-[35px]': type === 'password',
          'absolute opacity-0 cursor-pointer left-0 z-10 h-[30px] top-[25%] w-auto': type === 'radio',
        })}
        id={type === 'radio' ? `${name}-${label}` : name}
        {...(value !== undefined && { value })}
        type={type === 'password' && isPasswordVisible ? 'text' : type}
        {...registerProps}
        {...(autocomplete && { autoComplete: autocomplete })}
        {...(onFocus && { onFocus })}
        {...(onBlur && { onBlur })}
        {...(onInput && { onInput })}
      />
      {type === 'password' && (
        <button
          type="button"
          onClick={() => setIsPasswordVisible(!isPasswordVisible)}
          className="absolute top-[50px] right-[10px]"
        >
          <Image src={isPasswordVisible ? eyeOn : eyeOff} alt="eye" />
        </button>
      )}
      {type === 'checkbox' && <span className="custom-checkbox" />}
      {type === 'radio' && <span className="custom-radio" />}
      <p
        className={cn('form-error', {
          hidden: type === 'radio',
        })}
      >
        {error && error.message}
      </p>
    </div>
  );
}

export const MemoizedTextInput = memo(TextInput) as <T extends FieldValues>(props: TextInputProps<T>) => JSX.Element;
