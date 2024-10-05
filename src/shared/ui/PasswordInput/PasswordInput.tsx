import React, { memo, useState } from 'react';
import { FieldValues } from 'react-hook-form';
import { TextInputProps } from '../../models/types';
import { calculateStrength } from '../../utils/utils';
import { MemoizedTextInput } from '../TextInput/TextInput';

type PasswordInputProps<T extends FieldValues> = TextInputProps<T>;

export function PasswordInput<T extends FieldValues>(props: PasswordInputProps<T>) {
  const { name, label, type = 'text', register, error, autocomplete } = props;

  const [strength, setStrength] = useState<number>(0);

  const onInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newStrength = calculateStrength(e.target.value);
    setStrength(newStrength);
  };

  return (
    <>
      <MemoizedTextInput
        name={name}
        label={label}
        type={type}
        error={error}
        onInput={onInput}
        register={register}
        autocomplete={autocomplete}
      />
      <div className="flex w-[50%] gap-[5px] my-[20px] mb-[10px]">
        {[0, 1, 2, 3, 4].map(index => (
          <div
            key={index}
            className={`w-[100px] h-[5px] transition-colors duration-300 rounded-[5px] ${index < strength ? 'bg-primary-bright' : 'bg-gray-400'}`}
          />
        ))}
      </div>
    </>
  );
}

export const MemoizedPasswordInput = memo(PasswordInput) as <T extends FieldValues>(
  props: PasswordInputProps<T>
) => JSX.Element;
