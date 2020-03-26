import styled from 'styled-components';

const BannerContainer = styled.div`
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
  font-size: 20px;
  
  h1 {
    text-align: center;
    margin: 20px;
  }

  img {
    height: 350px;
  }

  @media(max-width: 990px) {
    font-size: 14px;
    img {
      height: 300px;
    }
  }

  @media(max-width: 600px) {
    img {
      height: 200px;
    }
  }

  @media(max-width: 400px) {
    font-size: 12px;
    img {
      height: 150px;
    }
  }
`

export default BannerContainer;