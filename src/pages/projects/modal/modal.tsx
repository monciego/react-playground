import ReactDOM from 'react-dom';
import React from 'react';

export default function ModalOverlay({
  onCancel,
  children,
  title,
  onSubmit,
  submitButtonText,
  cancelButtonText,
}: ModalProps) {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onCancel={onCancel} />,
        document.getElementById('backdrop-root') as Element | DocumentFragment
      )}
      {ReactDOM.createPortal(
        <Modal
          onCancel={onCancel}
          onSubmit={onSubmit}
          title={title}
          submitButtonText={submitButtonText}
          cancelButtonText={cancelButtonText}
        >
          {children}
        </Modal>,
        document.getElementById('modal-root') as Element | DocumentFragment
      )}
    </>
  );
}

type ModalProps = {
  onCancel: () => void;
  onSubmit: () => void;
  children?: React.ReactNode;
  title: string;
  submitButtonText: string;
  cancelButtonText: string;
};

const Modal = ({
  onCancel,
  children,
  title,
  onSubmit,
  submitButtonText,
  cancelButtonText,
}: ModalProps) => {
  return (
    <div className='fixed transform translate-y-2/4 w-screen overflow-y-auto z-50'>
      <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
        <div className='relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg'>
          <div className='bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4'>
            <div className='sm:flex sm:items-start'>
              <div className='mt-3 text-center 4 sm:mt-0 sm:text-left'>
                <h3
                  className='text-base font-semibold leading-6 text-gray-900'
                  id='modal-title'
                >
                  {title}
                </h3>
                <div className='mt-2'>
                  <div className='text-sm text-gray-600'>{children}</div>
                </div>
              </div>
            </div>
          </div>
          <div className='bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6'>
            <button
              type='button'
              onClick={onSubmit}
              className='inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 sm:ml-3 sm:w-auto'
            >
              {submitButtonText}
            </button>
            <button
              type='button'
              onClick={onCancel}
              className='mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto'
            >
              {cancelButtonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

type BackdropProps = {
  onCancel: () => void;
};

const Backdrop = ({ onCancel }: BackdropProps) => (
  <div
    className='opacity-50 fixed inset-0 z-[40] bg-black'
    onClick={onCancel}
  ></div>
);
