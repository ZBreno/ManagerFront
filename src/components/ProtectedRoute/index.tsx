import { useEffect } from 'react';
import { useRouter } from 'next/router';

interface IProtectedRoute {
    children: React.ReactNode
}

export default function ProtectedRoute ({ children }: IProtectedRoute) {
  const router = useRouter();

  useEffect(() => {
    // Verifique se o token existe, caso contrário, redirecione para a página de login
    const token = localStorage.getItem('auth-token'); // Ou outra forma de obter o token

    if (!token) {
      router.push('/login');
    }

    if(token){
        router.push('/');
    }
  }, []);

  return <>{children}</>;
};
