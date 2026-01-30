import { ChartBar } from 'lucide-react';
import { useContext, useState } from 'react';
import type { KeyResultType } from '../types/okr_types.ts';
import { KeyResultContext } from '../providers/KeyResultProvider.tsx';

const KeyResultForm = () => {
  const [keyResult, setKeyResult] = useState<KeyResultType>({
    description: '',
    progress: '',
    isCompleted: false,
  });
  const { keyResultList, setKeyResultList } = useContext(KeyResultContext);

  return (
    <>
      <div className="flex items-center gap-2 ">
        <ChartBar className={'size-4 text-blue-600'} />
        <span className="font-semibold text-lg">Key Results</span>
      </div>
      <label htmlFor={'keyResult'} className="block text-sm text-gray-600 ">
        Add 3-5 measurable key results that will indicate objective success.
      </label>
      <input
        type="text"
        id={'keyResult'}
        name={'keyResult'}
        value={keyResult.description}
        onChange={(e) => {
          setKeyResult({
            ...keyResult,
            description: e.target.value,
          });
        }}
        className="w-full border border-gray-300 rounded px-3 py-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
        placeholder="Key Result (e.g. Achieve 10,000 active users)"
        required
      />
      <input
        type="text"
        id={'keyResultProgress'}
        name={'keyResultProgress'}
        value={keyResult.progress}
        onChange={(e) => {
          setKeyResult({
            ...keyResult,
            progress: e.target.value,
          });
        }}
        className="w-full border border-gray-300 rounded px-3 py-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
        placeholder="30 %"
        required
      />
      <button
        onClick={() => {
          setKeyResultList([...keyResultList, keyResult]);
        }}
        type="button"
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
      >
        Add Key Result
      </button>
    </>
  );
};
export default KeyResultForm;
