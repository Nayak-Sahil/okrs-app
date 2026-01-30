import { Modal } from './components/Modal.tsx';
import OkrForm from './OkrForm.tsx';
import { OkrList } from './components/OkrList.tsx';
import type { OkrType } from './types/okr_types.ts';

export function Home() {
  return (
    <div className={'flex flex-col align-center gap-5 h-screen'}>
      <div className={'w-full flex justify-between p-5 border-b border-b-gray-200 shadow-md'}>
        <h1 className={'text-2xl font-medium'}>Goal</h1>
        <Modal openModalLabel={'Add OKR'}>
          <OkrForm />
        </Modal>
      </div>
      <div className={'w-full flex align-center justify-center'}>
        <OkrList
          okrs={[
            {
              objective: 'Learn React',
              keyResults: [
                { description: 'Typescript', progress: '34%', isCompleted: true },
                { description: 'Vite', progress: '34%', isCompleted: false },
              ],
            } satisfies OkrType,
          ]}
        />
      </div>
    </div>
  );
}
