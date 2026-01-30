import { createContext, useState } from 'react';
import type { KeyResult } from '../types/okr_types.ts';

type KeyResultContextType = {
  keyResultList: KeyResult[];
  setKeyResultList: (keyResultList: KeyResult[]) => void;
};

export const KeyResultContext = createContext<KeyResultContextType>({
  keyResultList: [],
  setKeyResultList: () => {},
});

const KeyResultProvider = ({ children }) => {
  const [keyResultList, setKeyResultList] = useState<KeyResult[]>([]);

  const outsourcedValues = {
    keyResultList,
    setKeyResultList,
  };

  return <KeyResultContext.Provider value={outsourcedValues}>{children}</KeyResultContext.Provider>;
};
export default KeyResultProvider;
