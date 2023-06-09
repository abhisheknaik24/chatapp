import { useEffect, useState, lazy, Suspense } from 'react';
import jwtDecode from 'jwt-decode';
import { useLocalStorage } from 'usehooks-ts';

const Auth = lazy(() => import('./layouts/auth/Auth'));
const Dashboard = lazy(() => import('./layouts/dashboard/Dashboard'));

const Loader = () => {
  return (
    <div className='h-screen flex items-center justify-center'>
      <img src='/svg/loader.svg' alt='loader' />
    </div>
  );
};

const App = () => {
  const [token, setToken] = useLocalStorage<string | undefined>(
    'token',
    undefined
  );

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (token) {
      const decodedToken = jwtDecode<{ exp: number }>(token);

      const currentTime = Date.now() / 1000;

      if (decodedToken.exp > currentTime) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    } else {
      setIsAuthenticated(false);
    }
  }, [token]);

  if (isAuthenticated) {
    return (
      <Suspense fallback={Loader()}>
        <Dashboard />
      </Suspense>
    );
  }

  return (
    <Suspense fallback={Loader()}>
      <Auth />
    </Suspense>
  );
};

export default App;
