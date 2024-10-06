'use client';

import googleIcon from '@/assets/icons/google.svg';
import loginImg from '@/assets/img/login_image.png';
import { useLoginForm } from '@/shared/hooks/useLoginForm';
import { usePrivateRedirect } from '@/shared/hooks/usePrivateRedirect';
import { MemoizedPasswordInput } from '@/shared/ui/PasswordInput/PasswordInput';
import { MemoizedTextInput } from '@/shared/ui/TextInput/TextInput';
import Image from 'next/image';
import Link from 'next/link';

export default function Login() {
  const { isLoggedIn, loading } = usePrivateRedirect();

  const { register, handleSubmit, onGoogleSubmit, errors, isValid, onSubmit } = useLoginForm();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    isLoggedIn === false && (
      <main className="flex flex-1 flex-col gap-[30px] items-center p-20">
        <div className="flex justify-center gap-[20px] lg:gap-[50px]">
          <div className="flex flex-col justify-start gap-[10px] p-20 blur-bg rounded-[16px] clamp-width">
            <h1 className="w-full text-center text-5xl font-bold text-font-dark">Login</h1>
            <p className="text-[1.4rem] flex gap-[10px] text-center self-center text-font-dark">
              Don't have an account?
              <Link className="text-[1.4rem] text-primary-bright underline hover:no-underline" href="/registration">
                Sign Up
              </Link>
            </p>
            <button
              type="button"
              onClick={onGoogleSubmit}
              className="w-full p-[10px] flex items-center justify-center rounded-lg my-[10px] bg-[#e5b7b3] hover:bg-primary-bright"
            >
              <div className="flex items-center">
                <Image src={googleIcon} alt="Google" width={20} height={20} />
              </div>
              <span className="ml-2 text-[1.6rem] font-semibold text-font-dark">Continue with Google</span>
            </button>
            <form className="relative flex flex-col justify-start gap-[5px]" onSubmit={handleSubmit(onSubmit)}>
              <MemoizedTextInput
                name="email"
                label="Email"
                register={register}
                type="email"
                error={errors.email}
                autocomplete="user-email"
              />

              <MemoizedPasswordInput
                withStrength={false}
                name="password"
                label="Password"
                register={register}
                type="password"
                error={errors.password}
                autocomplete="new-password"
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
          <div className="flex items-center justify-center w-[50%] lg:w-[40%] max-w-[800px] h-full max-h-[700px] hidden md:flex self-center">
            <Image src={loginImg} alt="register img" />
          </div>
        </div>
      </main>
    )
  );
}
