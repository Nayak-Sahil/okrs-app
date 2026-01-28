import { ChartBar, Goal } from 'lucide-react';
import { useState } from 'react';

type KeyResult = {
  id: number;
  description: string;
  progress: string;
};

export default function App() {
  const [keyResult, setKeyResult] = useState<KeyResult>({ id: 0, description: '', progress: '' });
  return (
    <form className="w-xl mx-auto mt-10 bg-white p-8 rounded-lg shadow-md flex flex-col gap-6 border border-gray-200">
      <div className={'flex flex-col gap-2'}>
        <div className="flex items-center gap-2 ">
          <Goal className={'size-4 text-blue-600'} />
          <span className="font-semibold text-lg">Objective</span>
        </div>
        <label htmlFor={'objective'} className="block text-sm text-gray-600">
          What do you want to achieve?
        </label>
        <input
          type="text"
          id={'objective'}
          name={'objective'}
          className="w-full border border-gray-300 rounded px-3 py-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
          placeholder="Launch the new mobile app by Q3"
          required
        />
      </div>
      <div className={'flex flex-col gap-2'}>
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
            console.log(keyResult);
          }}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Add Key Result
        </button>
        <div className="flex justify-end gap-4">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Submit
          </button>
          <button
            type="reset"
            className="bg-gray-200 text-gray-700 px-6 py-2 rounded hover:bg-gray-300 transition"
          >
            Clear
          </button>
        </div>
      </div>
    </form>
  );
}
