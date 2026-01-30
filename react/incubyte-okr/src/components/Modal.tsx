import { type ReactElement, useState } from 'react';

interface ModalProps {
  children: ReactElement;
  isOpen?: boolean;
  openModalLabel?: string;
}

export function Modal({ children, isOpen = false, openModalLabel = 'Open' }: Readonly<ModalProps>) {
  const [isModalVisible, setIsModalVisible] = useState(isOpen);
  if (!isModalVisible) {
    return (
      <button
        className={'bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 cursor-pointer'}
        onClick={() => {
          setIsModalVisible(true);
        }}
      >
        {openModalLabel}
      </button>
    );
  }
  return (
    <div className={'fixed inset-0 bg-gray-500/50 flex items-center justify-center'}>
      <div
        className={
          'w-max relative bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden'
        }
      >
        <button
          className={'absolute right-4 top-4 cursor-pointer'}
          onClick={() => setIsModalVisible(false)}
        >
          ❌
        </button>
        {children}
      </div>
    </div>
  );
}
