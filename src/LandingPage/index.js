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

function LandingPage() {

  const {open,setOpen} = useContext(NavBar)
  return (
    <ThemeProvider theme={ThemeComponent}>
      <HeaderComponent/>
      <Box component = 'div' style={{opacity: open ? 0.7 : 1,background: open ? "rgba(25, 35, 60, 0.1)": null}}>
        <Main_content/>
        < QualityContent/>
        <LearningPage/>
      </Box>
    </ThemeProvider>
  );
}

export default LandingPage;
