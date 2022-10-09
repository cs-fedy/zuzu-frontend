import {
  createContext,
  ReactElement,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

type StackContextState = {
  stack: Array<ReactElement>;
  push: (element: ReactElement) => void;
  pop: () => void;
};

const contextInitialState: StackContextState = {
  stack: [],
  push: (element: ReactElement) => {},
  pop: () => {},
};

const StackContext = createContext<StackContextState>(contextInitialState);

export const useStack = () => useContext(StackContext);

type TStackProviderProps = {
  children: ReactNode;
};

export default function StackProvider({ children }: TStackProviderProps) {
  const [stack, setStack] = useState<Array<ReactElement>>([]);

  const push = useCallback((element: ReactElement) => {
    setStack((prev) => [...prev, element]);
  }, []);

  const pop = useCallback(() => {
    setStack((prev) => {
      if (prev.length <= 1) return prev;
      return prev.slice(0, prev.length - 1);
    });
  }, []);

  const value = useMemo(() => {
    return { stack, push, pop };
  }, [stack, push, pop]);

  return (
    <StackContext.Provider value={value}>{children}</StackContext.Provider>
  );
}
