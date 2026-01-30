import { useContext } from 'react';
import { KeyResultContext } from '../providers/KeyResultProvider.tsx';

const KeyResultList = () => {
  const { keyResultList } = useContext(KeyResultContext);
  return (
    <>
      {keyResultList.length > 0 &&
        keyResultList.map((keyResult, index) => (
          <div
            key={index}
            className={'w-full flex justify-between border-b border-b-gray-200 py-3'}
          >
            <span>{keyResult.description}</span>
            <span>{keyResult.progress}</span>
          </div>
        ))}
    </>
  );
};
export default KeyResultList;
