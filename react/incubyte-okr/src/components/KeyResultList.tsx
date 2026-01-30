import { useContext } from 'react';
import { KeyResultContext } from '../providers/KeyResultProvider.tsx';

const KeyResultList = () => {
  const { keyResultList } = useContext(KeyResultContext);
  return (
    <>
      {keyResultList.length > 0 &&
        keyResultList.map((keyResult, index) => <div key={index}>{keyResult.description}</div>)}
    </>
  );
};
export default KeyResultList;
