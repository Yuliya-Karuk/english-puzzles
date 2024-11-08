'use client';

import { authenticationLoading, successLogoutMessage, unexpectedError } from '@/shared/consts/authConsts';
import { useAuth } from '@/shared/contexts';
import { logout } from '@/shared/services/auth';
import { Logo } from '@/shared/ui/Logo/Logo';
import { FirebaseError } from 'firebase/app';
import Link from 'next/link';
import { toast } from 'react-toastify';

export default function Header() {
  const { isLoggedIn, loading } = useAuth();

  const handleLogout = async () => {
    toast.promise(logout, {
      pending: authenticationLoading,
      success: successLogoutMessage,
      error: {
        render({ data }) {
          return data instanceof FirebaseError ? data.message : unexpectedError;
        },
      },
    });
  };

  return (
    !loading && (
      <div className="relative z-10 w-full h-[60px] text-font-dark blur-bg">
        <div className="flex flex-row items-center justify-between gap-[20px] h-full px-[20px] container">
          <Logo />
          <div>
            {!isLoggedIn ? (
              <Link href="/login" className="btn-custom">
                Sign In
              </Link>
            ) : (
              <button type="button" className="btn-custom" onClick={handleLogout}>
                Sign Out
              </button>
            )}
          </div>
        </div>
      </div>
    )
  );
}
