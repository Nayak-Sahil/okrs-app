import { Goal } from 'lucide-react';
import KeyResultList from './components/KeyResultList.tsx';
import KeyResultForm from './components/KeyResultForm.tsx';
import KeyResultProvider from './providers/KeyResultProvider.tsx';

export default function OkrForm() {
  return (
    <form className="w-xl mx-auto bg-white p-8 flex flex-col gap-6">
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
        <KeyResultProvider>
          <KeyResultForm />
          <KeyResultList />
        </KeyResultProvider>
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
