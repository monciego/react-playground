import Container from '../../../components/container';
import FlexContainer from '../../../components/flex-container';
import Notes from '../../../components/notes';
import BasicModal from './basic-modal';
import CookiesModal from './cookies-modal';

export const ConditionalRendering = (): JSX.Element => {
  return (
    <Container>
      <FlexContainer className='gap-4'>
        <BasicModal />
        <CookiesModal />
      </FlexContainer>
      <Notes projectTitle='Conditional Rendering'>
        <ul className='list-inside list-disc'>
          <li>Conditional Rendering</li>
          <li>React Portal</li>
          <li>React UseState</li>
        </ul>
      </Notes>
    </Container>
  );
};
