import { createContext, type ReactNode, useState } from 'react';
import type { KeyResultType } from '../types/okr_types.ts';

type KeyResultContextType = {
  keyResultList: KeyResultType[];
  setKeyResultList: (keyResultList: KeyResultType[]) => void;
};

export const KeyResultContext = createContext<KeyResultContextType>({
  keyResultList: [],
  setKeyResultList: () => {},
});

const KeyResultProvider = ({ children }: { children: ReactNode }) => {
  const [keyResultList, setKeyResultList] = useState<KeyResultType[]>([]);

  const outsourcedValues = {
    keyResultList,
    setKeyResultList,
  };

  return <KeyResultContext.Provider value={outsourcedValues}>{children}</KeyResultContext.Provider>;
};
export default KeyResultProvider;
