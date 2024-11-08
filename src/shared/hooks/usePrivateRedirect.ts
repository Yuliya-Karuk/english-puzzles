import { useRouter } from 'next/navigation';

import { useEffect } from 'react';

import { useAuth } from '../contexts';

export const usePrivateRedirect = () => {
  const { isLoggedIn, loading } = useAuth();

  const router = useRouter();

  useEffect(() => {
    if (!loading && isLoggedIn) {
      router.push(`/`);
    }
  }, [isLoggedIn, router, loading]);

  return { isLoggedIn, loading };
};
