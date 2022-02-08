import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: black;
`;
const Intro = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Wrapper>
      <img src="images/main.JPEG" style={{ height: '100vh' }} />
    </Wrapper>
  );
};

export default Intro;
