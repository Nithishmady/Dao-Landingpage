import React from "react";
import { makeStyles } from "@mui/styles";
import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import WholeImage from '../images/section-1/Wholeimg.svg'
import Image from 'react-bootstrap/Image'
const useStyles = makeStyles((theme) => ({
  Root:{
  backgroundColor:'#EFF2F7'
  },
    Main:{
    paddingTop:120,
    paddingBottom:150,
    [theme.breakpoints.down('sm')]:{
      paddingBottom:70,
    }
    },
    Wrapper_content:{
    display:'flex',
    flex:1,
    [theme.breakpoints.down('sm')]:{
      display:'flex',
      flexDirection:'column',
      paddingLeft:16,
      paddingRight:16,
    }
    },
    LeftContent:{
   display:'flex',
   flex:0.50,
   flexDirection:'column',
   justifyContent:'center',
   margin:'auto',
   
   [theme.breakpoints.down('sm')]:{
    margin:'auto',
    padding:'10px',
    width:'100%',
    
  }
    },
    RightContent:{
        flex:0.50,
        width:'100%'
    },
  Boldwords: {
    letterSpacing:'1.8px',
    fontFamily:'Lato!important',
    color: theme.palette.primary.main,
    fontSize: 56,
    width:'80%',
    fontStyle:'italic',
    fontWeight:'bold',
    [theme.breakpoints.down('md')]:{
      fontSize: 38,
      width:'100%',
    },
    [theme.breakpoints.down('sm')]:{
      fontSize: 33,
      marginTop:'0px',
      marginBottom:'50px!important'
    }
  },
  Daowords: {
  fontFamily:'-webkit-pictograph',
  fontStyle: "normal!important",
    color: theme.palette.primary.lightblue,
    fontSize: 70,
    [theme.breakpoints.down('md')]:{
      fontSize: 52,
    }
  },
  SocialIcons:{
    width:'100%',
    height:'auto',
    margin:'auto',
    width:'100%',
  },

}));

export const Main_content = () => {
  const classes = useStyles();
  return (
      <section className={classes.Root}> 
             <Container className={classes.Main}>
      <Box  className={classes.Wrapper_content}>
        <Box className={classes.LeftContent}>
          <h1 className={classes.Boldwords}>
            Control anything with your 
            <span className={classes.Daowords} id='DAOWORDS'>&nbsp;DAO.</span>
          </h1>
        </Box>
        <Box className={classes.RightContent}>
          <Image src={WholeImage} className={classes.SocialIcons}/>
        </Box>
      </Box>
    </Container>
    </section>

  );
};
