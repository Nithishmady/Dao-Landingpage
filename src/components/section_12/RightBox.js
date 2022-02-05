import React from 'react'
import { makeStyles } from '@mui/styles';
import { Box, Typography } from '@mui/material';
import { Container, Image } from 'react-bootstrap';

const useStyles=makeStyles((theme)=>({
  
   root:{
       display:"flex",
       flexDirection:"column",
       margin:"15px",
       justifyContent:"flex-start",
       alignItems:"flex-start",
       [theme.breakpoints.up('sm')]:{
         marginLeft:"40px"
       }
   },
   title:{
       fontSize:"44px",
       fontWeight:"900",
       color:"#19233C",
       lineHeight:'60px!important',
       marginBottom:17,
       [theme.breakpoints.down('sm')]:{
         textAlign:"center",
         lineHeight:'42px!important',
         fontSize:'28px'
        }
   },
   subTitle:{
       color:"#8B93A7",
       fontSize:"16px",
       fontWeight:"600",
       marginBottom:37,
       [theme.breakpoints.down('sm')]:{
        textAlign:"center"
       }
   },
   btn:{
      width:"120px",
      height:"40px",
      color:"white",
      borderRadius:"5px" ,
      background:"#7073BE",
      border:"1px solid #7073BE",
      [theme.breakpoints.down('sm')]:{
          display:"none"
      }
   },
   Daocontrol:{
   color:theme.palette.primary.lightblue,
   },
     
}))

function RightBox() {
    const classes=useStyles()
    return (
      <Container>
          <Box component="div" className={classes.root}>
                <Box component="div">
                    <p className={classes.title}>What people says about <span className={classes.Daocontrol}>DAO Controls</span> </p>
                </Box>
                <Box component="div">
                    <p className={classes.subTitle}>Capital created quality local jobs, and brought more reliable local clean energy to our energy system.</p>
                </Box>
                <Box component="button" className={classes.btn}> Read more </Box>
            </Box>
      </Container>
    )
}

export default RightBox
