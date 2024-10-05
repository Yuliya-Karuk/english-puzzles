'use client';

import loginImg from '@/assets/img/login_image.png';
import Image from 'next/image';
import Link from 'next/link';

export default function Login() {
  return (
    <main className="flex flex-1 flex-col gap-[30px] items-center p-20">
      <div className="flex justify-center gap-[20px] lg:gap-[50px] max-w-[600px] min-w-[420px]">
        <div className="flex flex-col justify-start gap-[10px] p-20 blur-bg rounded-[16px]  max-w-[600px] min-w-[420px]">
          <h1 className="w-full text-center text-5xl font-bold">Login</h1>
          <p className="text-[1.4rem] flex gap-[10px] text-center self-center">
            Don't have an account?
            <Link className="text-[1.4rem] text-primary-bright underline hover:no-underline" href="/registration">
              Sign Up
            </Link>
          </p>
        </div>
        <div className="flex items-center justify-center w-[50%] lg:w-[40%] max-w-[800px] h-full max-h-[700px] hidden md:flex">
          <Image src={loginImg} alt="register img" />
        </div>
      </div>
    </main>
  );
}
