import styled from 'styled-components';

const Wrapper = styled.div`
background: black;
min-width: 100vw;
min-height: 100vh;

#circle {
  margin-right: -20px;
  margin-bottom: -60px;
}
#logo {
  transform: rotate(17.74deg); 
  margin-bottom: -120px;
}
#un {
  transform: rotate(18.74deg); 
}
#official {
  transform: rotate(-6.95deg);
}
#arrow {
  transform: rotate(-22.48deg)
}

.shape-hover {
  transition: transform 1.5s ease-in;
  transform: rotate(0deg) !important;
}
.shape-hover#circle {
  transition: 1.5s ease-in;
  margin-bottom: -15px;
  margin-right: 100px;
}
.shape-hover#un {
  transition: 1.5s ease-in;
  margin: 0px 25px 0px;
}
.shape-hover#official {
    margin-right: -50px;
    transform: rotate(-2deg) !important;
    transition: 1.5s ease-in;
}
`

const Home = ():JSX.Element => {
  const changeClassName = () => {
    const lst = document.getElementsByTagName('img');
    const len = lst.length
    for (let i = 0; i < len; i++) {
      lst[i].classList.add('shape-hover')
      lst[i].classList.remove('shapes')
    }
  }
  return (
    <Wrapper>
      <div>
        <div style={{paddingTop: '15vh', paddingLeft: '40vw'}}>
          <img className='shapes' id='circle' src='/images/circle.png' alt='circle'/>
          <img className='shapes' id='logo' src='/images/logo-back.png' alt='logo'/>
        </div>
        <div style={{paddingLeft: '10vw'}}>
          <img className='shapes' id='un' src='/images/un.png' alt='unofficial'/>
          <img className='shapes' id='official' src='/images/official.png' alt='unofficial'/>
          <img className='shapes' id='arrow' src='/images/arrow.png' alt='unofficial' onMouseOver={() => changeClassName()}/>
        </div>
      </div>
    </Wrapper>
  );
}

export default Home;
