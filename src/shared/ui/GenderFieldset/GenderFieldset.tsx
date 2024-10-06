import { genders } from '@/shared/utils/validationSchema';
import { FieldValues } from 'react-hook-form';
import { TextInputProps } from '../../models/types';

import { MemoizedTextInput } from '../TextInput/TextInput';

type GenderFieldsetProps<T extends FieldValues> = TextInputProps<T>;

export function GenderFieldset<T extends FieldValues>(props: GenderFieldsetProps<T>) {
  const { name, label, register, type = 'text', error } = props;

  return (
    <div className="w-full flex flex-col">
      <fieldset>
        <legend className="text-left custom-label">
          {label}
          <span className="text-orange">*</span>
        </legend>
        <div className="w-full px-[10px] mt-[5px] flex gap-[30px] border-2 border-border-input rounded-[5px]">
          {genders.map(gender => (
            <MemoizedTextInput key={gender} name={name} label={gender} register={register} type={type} error={error} />
          ))}
        </div>
      </fieldset>
      <p className="form-error">{error && error.message}</p>
    </div>
  );
}
