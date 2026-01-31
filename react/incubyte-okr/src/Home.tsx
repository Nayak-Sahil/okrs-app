import { useState, useEffect } from 'react';
import { Modal } from './components/Modal.tsx';
import OkrForm from './OkrForm.tsx';
import { OkrList } from './components/OkrList.tsx';
import type { OkrType } from './types/okr_types.ts';

export function Home() {
  const [okrs, setOkrs] = useState<OkrType[]>([]);

  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL)
      .then((response) => response.json())
      .then((data) => setOkrs(data))
      .catch((e) => {
        console.error('Error fetching OKRs:', e);
      });
  }, []);

  return (
    <div className={'flex flex-col align-center gap-5 h-screen'}>
      <div className={'w-full flex justify-between p-5 border-b border-b-gray-200 shadow-md'}>
        <h1 className={'text-2xl font-medium'}>Goal</h1>
        <Modal openModalLabel={'Add OKR'}>
          <OkrForm />
        </Modal>
      </div>
      <div className={'w-full flex align-center justify-center'}>
        <OkrList okrs={okrs} />
      </div>
    </div>
  );
}
