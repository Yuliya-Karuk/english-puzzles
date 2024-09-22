'use client';

import { Logo } from '@/shared/ui/Logo/Logo';
import Link from 'next/link';

export default function Header() {
  const isLogin = false;

  return (
    <div className="relative z-10 w-full h-[60px] text-font-dark blur-bg">
      <div className="flex flex-row items-center justify-between gap-[20px] h-full px-[20px] container">
        <Logo />
        <div>
          {!isLogin ? (
            <Link href="/login" className="btn-custom">
              Sign In
            </Link>
          ) : (
            <button type="button" className="btn-custom">
              Sign Out
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
