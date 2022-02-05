import React from 'react';
import { makeStyles } from '@mui/styles';
import { Button, Card, CardContent, Container} from '@mui/material';
import Typography from '@mui/material/Typography';
import UseSwitchesBasic from '../style-components/switch-component';
import cards from './card-properties';
import { FaCheckCircle } from "react-icons/fa";
import CardContentComponent from './cardContent';
import PricingHeader from './pricingHeader';
import { Box } from '@mui/material';
const useStyles=makeStyles((theme)=>({ 
  header:{
   display:'flex',
   justifyContent:'space-around',
   margin:'auto',
   [theme.breakpoints.down('sm')]:{
    display:'flex',
    flexDirection:'column',
    marginBottom:20,
  }
}
}));

 const PricingContent=()=>{
  const classes=useStyles();
  
  return(
    <section style={{background:'#EFF2F7',paddingTop:'50px',paddingBottom:'50px'}}>
   <Container>
   <PricingHeader/>
   <Box className={classes.header}>
   {cards.map((item,index)=>{
     return(        
      <CardContentComponent item={item} index={index} />
     )
   })}
   </Box>
   </Container>
   </section>
  )
}
export default PricingContent