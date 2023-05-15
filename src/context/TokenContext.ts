import { createContext } from 'react';

type TokenContextTypes = {
  token: string | undefined;
  setToken: React.Dispatch<React.SetStateAction<string | undefined>>;
};

const TokenContext = createContext<TokenContextTypes | undefined>(undefined);

export default TokenContext;
