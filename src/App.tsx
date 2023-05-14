import { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';
import { useLocalStorage } from 'usehooks-ts';
import Auth from './layouts/auth/Auth';
import Dashboard from './layouts/dashboard/Dashboard';

const App = () => {
  const [token, setToken] = useLocalStorage('token', '');

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (token) {
      const decodedToken = jwtDecode<{ exp: number }>(token);

      const currentTime = Date.now() / 1000;

      if (decodedToken.exp > currentTime) {
        setIsAuthenticated(true);
      }
    }
  }, [token]);

  if (isAuthenticated) {
    return <Dashboard />;
  } else {
    return <Auth setToken={setToken} />;
  }
};

export default App;
