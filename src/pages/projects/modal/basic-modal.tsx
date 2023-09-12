import { useState } from 'react';
import Button from '../../../components/button';
import ModalOverlay from './modal';

const BasicModal = (): JSX.Element => {
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal((prev) => !prev);
  };

  const submitHandler = () => {
    console.log('Basic modal submitted');
    showModalHandler();
  };

  return (
    <>
      <Button onClick={showModalHandler}>BasicModal</Button>
      {showModal && (
        <ModalOverlay
          onCancel={showModalHandler}
          onSubmit={submitHandler}
          title='Basic Modal'
          submitButtonText='I understand'
          cancelButtonText='Close'
        >
          <p className='mb-2'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </ModalOverlay>
      )}
    </>
  );
};

export default BasicModal;
