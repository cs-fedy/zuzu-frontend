import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export type AppContextState = {
  isLoading: boolean;
  isUserLoggedIn: boolean;
  isUserProfileComplete: boolean;
  completeAccount: () => void;
  logUser: () => void;
};

const contextInitialState: AppContextState = {
  isLoading: true,
  isUserLoggedIn: true,
  isUserProfileComplete: true,
  completeAccount: () => {},
  logUser: () => {},
};

const AppContext = createContext<AppContextState>(contextInitialState);

export const useApp = () => useContext(AppContext);

type AppProviderProps = {
  children: ReactNode;
};

function AppProvider({ children }: AppProviderProps): ReturnType<FC> {
  const [isLoading, setIsLoading] = useState(contextInitialState.isLoading);
  const [isUserProfileComplete, setIsUserProfileComplete] = useState(
    contextInitialState.isUserProfileComplete
  );
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(
    contextInitialState.isUserLoggedIn
  );

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  const logUser = () => {
    setIsUserLoggedIn(true);
  };

  const completeAccount = () => {
    setIsUserProfileComplete(true);
  };

  const value = useMemo(() => {
    return {
      isLoading,
      isUserProfileComplete,
      isUserLoggedIn,
      logUser,
      completeAccount,
    };
  }, [isLoading, isUserProfileComplete, isUserLoggedIn]);
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export default AppProvider;
