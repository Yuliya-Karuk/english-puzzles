'use client';

import { usePrivateRedirect } from '@/shared/hooks/usePrivateRedirect';
import { useRegistrationForm } from '@/shared/hooks/useRegistrationForm';
import { GenderFieldset } from '@/shared/ui/GenderFieldset/GenderFieldset';
import { MemoizedPasswordInput } from '@/shared/ui/PasswordInput/PasswordInput';
import { MemoizedTextInput } from '@/shared/ui/TextInput/TextInput';
import Link from 'next/link';

export default function Registration() {
  const { isLoggedIn, loading } = usePrivateRedirect();

  const { register, handleSubmit, errors, isValid, onSubmit } = useRegistrationForm();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    isLoggedIn === false && (
      <main className="flex flex-1 gap-[30px] justify-center p-20">
        <div className="flex justify-center gap-[20px] lg:gap-[50px] clamp-width">
          <div className="flex flex-col justify-start gap-[10px] p-20 blur-bg rounded-[16px] w-full h-fit">
            <h1 className="w-full text-center text-5xl font-bold text-font-dark">Registration</h1>
            <p className="text-[1.4rem] flex gap-[10px] text-center self-center text-font-dark">
              Already have an account?
              <Link className="text-[1.4rem] text-primary-bright underline hover:no-underline" href="/login">
                Sign In
              </Link>
            </p>
            <form className="relative flex flex-col justify-start gap-[5px]" onSubmit={handleSubmit(onSubmit)}>
              <MemoizedTextInput
                name="name"
                label="Name"
                register={register}
                type="text"
                error={errors.name}
                autocomplete="user-name"
              />

              <MemoizedTextInput
                name="email"
                label="Email"
                register={register}
                type="email"
                error={errors.email}
                autocomplete="user-email"
              />

              <MemoizedPasswordInput
                withStrength
                name="password"
                label="Password"
                register={register}
                type="password"
                error={errors.password}
                autocomplete="new-password"
              />

              <MemoizedTextInput
                name="confirmPassword"
                label="Confirm Password"
                register={register}
                type="password"
                error={errors.confirmPassword}
                autocomplete="new-password"
              />

              <MemoizedTextInput name="age" label="Age" register={register} type="number" error={errors.age} />

              <GenderFieldset name="gender" label="Gender" register={register} type="radio" error={errors.gender} />

              <MemoizedTextInput
                name="acceptTerms"
                label="Accept Terms and Conditions agreement"
                register={register}
                type="checkbox"
                error={errors.acceptTerms}
              />

              <button
                type="submit"
                disabled={!isValid}
                className="btn-custom self-end w-[240px] mt-[20px] hover:bg-primary-bright disabled:opacity-70"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </main>
    )
  );
}
