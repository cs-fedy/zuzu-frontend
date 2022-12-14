/* eslint-disable react/jsx-no-constructed-context-values */
import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type AppContextState = {
  isUserLoggedIn: boolean;
  isFirstTime: boolean;
  isUserProfileComplete: boolean;
  setNotFirstTime: () => void;
  completeAccount: () => void;
  logUser: () => void;
};

const contextInitialState: AppContextState = {
  isFirstTime: true,
  isUserLoggedIn: true,
  isUserProfileComplete: true,
  setNotFirstTime: () => {},
  completeAccount: () => {},
  logUser: () => {},
};

const AppContext = createContext<AppContextState>(contextInitialState);

export const useApp = () => useContext(AppContext);

function checkIsFirstTime() {
  const result = localStorage.getItem("FIRST_TIME");
  return !result;
}

function backupFirstTimeState(state: boolean) {
  localStorage.setItem("FIRST_TIME", `${state}`);
}

type AppProviderProps = {
  children: ReactNode;
};

function AppProvider({ children }: AppProviderProps): ReturnType<FC> {
  const [isFirstTime, setIsFirstTime] = useState(() => checkIsFirstTime());
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(true);
  const [isUserProfileComplete, setIsUserProfileComplete] = useState(true);

  useEffect(() => {
    backupFirstTimeState(isFirstTime);
  }, [isFirstTime]);

  const setNotFirstTime = () => {
    setIsFirstTime(false);
  };

  const logUser = () => {
    setIsUserLoggedIn(true);
  };

  const completeAccount = () => {
    setIsUserProfileComplete(true);
  };

  const value = {
    isFirstTime,
    isUserLoggedIn,
    isUserProfileComplete,
    logUser,
    completeAccount,
    setNotFirstTime,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export default AppProvider;
