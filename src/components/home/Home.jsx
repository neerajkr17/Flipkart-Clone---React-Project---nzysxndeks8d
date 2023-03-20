import React from 'react'
import NavBar from './NavBar'
import Banner from './Banner'
import Slide from './Slide';
import { Box, styled } from '@mui/material';
import MidSlides from './MidSlides';
import MidSection from './MidSection';

const Component = styled(Box)({
  padding: '10px',
  background: '#F2F2F2'
})

const Home = () => {

  return (
    <>
      <NavBar />
      <Component>
        <Banner />
        <MidSlides title="Deal of the Day" timer={true} />
        <MidSection />
        <Slide title="Best Discounts for You" timer={false} utoPlay={false} />
        <Slide title="Season's Top Pick" timer={false} utoPlay={false} />
        
      </Component>
    </>
    
  )
}

export default Home