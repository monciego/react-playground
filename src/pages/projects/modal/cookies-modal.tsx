import { useState } from 'react';
import Button from '../../../components/button';
import ModalOverlay from './modal';

const CookiesModal = (): JSX.Element => {
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal((prev) => !prev);
  };

  const submitHandler = () => {
    console.log('Coockies Accepted');
    showModalHandler();
  };

  return (
    <>
      <Button onClick={showModalHandler}>Cookies Modal</Button>
      {showModal && (
        <ModalOverlay
          onCancel={showModalHandler}
          onSubmit={submitHandler}
          title='We use cookies 🍪'
          submitButtonText='I Accept'
          cancelButtonText='Decline'
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

export default CookiesModal;
