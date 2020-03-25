import React from 'react';
import BannerContainer from './styles';

const Banner = () => {
  return (
    <BannerContainer>
      <h1>Verifique seus investimentos ao longo do tempo</h1>
      <img id="banner_img" src={require('../../assets/svgs/undraw_finance.svg')} alt="finance svg"/>
    </BannerContainer>
  )
}

export default Banner;