import '../App.css';
import { ThemeProvider } from '@mui/styles';
import {QualityContent} from '../components/section_2/quality-page'
import ThemeComponent from '../components/Theme/index';
import {Main_content} from '../components/section_1/Main_Content'
import HeaderComponent from '../components/header_nav/nav';
import { useContext } from 'react';
import { NavBar } from '../provider/NavBarProvider';
import Box from '@mui/material/Box';
import LearningPage from '../components/section_3/section_3'
import Cloneabout from '../components/section_12/cloneAbout';
import Categories_list from '../components/section_5/category';
import { Cirecle_paywall } from '../components/section_4/Circle';
import PricingContent from '../components/section_11/pricing';
import { PictureContent } from '../components/section_6/picturePage';
import Footer from '../components/Footer/footer';
import { Features } from '../components/section_9/features';
import Access_properties from '../components/section_7/accessDesign';
import RowAndColumnSpacing from '../components/section_10/question';
import Section4 from '../components/section_8';


function LandingPage() {

  const {open,setOpen} = useContext(NavBar)
  return (
    <ThemeProvider theme={ThemeComponent}>
      <HeaderComponent/>
      <Box component = 'div' style={{opacity: open ? 0.7 : 1,background: open ? "rgba(25, 35, 60, 0.1)": null}}>
        <Main_content/>
        < QualityContent/>
        <LearningPage/>
        <Cirecle_paywall/>
        <Categories_list/>
        <PictureContent/>
        <Access_properties/>
        <Section4/>
        <Features/>
        <RowAndColumnSpacing/>
        <PricingContent/>
        <Cloneabout/>
        <Footer/>   
           </Box>
    </ThemeProvider>
  );
}

export default LandingPage;
