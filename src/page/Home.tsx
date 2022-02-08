import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: black;
`;
const InnerWrapper = styled.div`
  max-width: 90%;
  margin: 0 auto;
`;

const EmptyBlock = styled.div`
  width: 100%;
  height: 10vh;
`;
const Block = styled.div`
  width: 100%;
  height: 40vh;
  text-align: center;

  #circle {
    height: 50%;
    margin-bottom: -1%;
    margin-right: -5%;
  }
  #logo {
    height: 100%;
    transform: rotate(21.74deg);
    margin-top: 4%;
  }
  #un {
    height: 60%;
    transform: rotate(18.74deg);
    margin-right: 10px;
  }
  #official {
    height: 55%;
    transform: rotate(-6.95deg);
    margin-right: -10%;
  }
  #arrow {
    height: 55%;
    transform: rotate(-22.48deg);
    cursor: pointer;
  }

  .shape-hover {
    transition: transform 1.5s ease-in;
    transform: rotate(0deg) !important;
  }
  .shape-hover#circle {
    transition: 1.5s ease-in;
    margin-bottom: 6%;
    margin-right: 10px;
  }
  .shape-hover#un {
    transition: 1.5s ease-in;
    margin-right: 20px;
    transform: rotate(23deg) !important;
  }
  .shape-hover#official {
    transition: 1.5s ease-in;
    margin-right: -8%;
  }
`;

const Home = (): JSX.Element => {
  const changeClassName = (addClass: string, removeClass?: string) => {
    const doms = document.getElementsByTagName('img');
    const len = doms.length;
    for (let i = 0; i < len; i++) {
      doms[i].classList.add(addClass);
      removeClass && doms[i].classList.remove(removeClass);
    }
  };

  return (
    <Wrapper>
      <InnerWrapper>
        <EmptyBlock />
        <Block>
          <img
            className="shapes"
            id="circle"
            src="/images/circle.png"
            alt="circle"
          />
          <img
            className="shapes"
            id="logo"
            src="/images/logo-back.png"
            alt="logo"
          />
        </Block>
        <Block>
          <img
            className="shapes"
            id="un"
            src="/images/un.png"
            alt="unofficial"
          />
          <img
            className="shapes"
            id="official"
            src="/images/official.png"
            alt="unofficial"
          />
          <Link to="/intro">
            <img
              className="shapes"
              id="arrow"
              src="/images/arrow.png"
              alt="arrow"
              onMouseOver={() => changeClassName('shape-hover')}
            />
          </Link>
        </Block>
        <EmptyBlock />
      </InnerWrapper>
    </Wrapper>
  );
};

export default Home;
