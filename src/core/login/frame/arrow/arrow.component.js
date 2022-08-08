import { BsArrowLeftShort } from 'react-icons/bs';
import styled from 'styled-components';

export function ArrowBackComponent(props) {
  return (
    <Container>
      <BsArrowLeftShort style={{ width: '30px', height: '30px' }} {...props} />
    </Container>
  );
}

const Container = styled.button`
  position: absolute;
  top: 50px;
  padding-left: 0px
`;
