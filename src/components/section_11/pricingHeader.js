import React from 'react';
import { makeStyles } from '@mui/styles';
import { Button, Card, CardContent, Container} from '@mui/material';
import Typography from '@mui/material/Typography';
import UseSwitchesBasic from '../style-components/switch-component';
import cards from './card-properties';
import { FaCheckCircle } from "react-icons/fa";
import CardContentComponent from './cardContent';
import Save from '../images/section-11/Save.svg'
import { Box } from '@mui/material';



const useStyles=makeStyles((theme)=>({ 
    choose:{
      textAlign:'center',
      fontSize:40,
      [theme.breakpoints.down('sm')]:{
        fontSize:25
        }
    },
    header:{
     display:'flex',
     justifyContent:'space-around',
     margin:'auto',
     [theme.breakpoints.down('sm')]:{
      display:'flex',
      flexDirection:'column',
      marginBottom:20,
    }
    },
    sub_header:{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      margin:8
     },
     saveimages:{
      width:95,
      height:95,
       [theme.breakpoints.down('sm')]:{
         width:65,
         height:65
       }
     },
    PayMonthly:{
      [theme.breakpoints.down('sm')]:{
      fontSize:11
      }
    },
    PayYearly:{
      [theme.breakpoints.down('sm')]:{
        fontSize:11
        }
    },
  }));

  function PricingHeader({item}){
    const classes=useStyles();
    return(
        <>
        <h1 className={classes.choose}> Choose Your Pricing Plan</h1>
        <Box className={classes.sub_header}>
          <Typography style={{color:' #7073BE'}} className={classes.PayMonthly}>  Pay Monthly &nbsp; </Typography>
          <UseSwitchesBasic/>
          <Typography style={{color:' #7073BE'}} className={classes.PayYearly}> &nbsp;Pay Yearly </Typography>
          <img src={Save} className={classes.saveimages}></img>
          </Box> 
          </>

    )
  }
  export default PricingHeader;