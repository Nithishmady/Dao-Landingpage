import React from 'react'
import { makeStyles } from '@mui/styles';
import { Box, Typography } from '@mui/material';
import { Container, Image } from 'react-bootstrap';
import Icon1 from "../images/section-12/Icon (1).svg"
import Icon2 from "../images/section-12/Icon (2).svg"
import Icon3 from "../images/section-12/Icon.svg"


const useStyles=makeStyles((theme)=>({
  
   root:{
       display:"flex",
       flexDirection:"column",
       flex:1,
       [theme.breakpoints.up('sm')]:{
         marginLeft:"80px"
       }
   },
   title:{
       fontSize:"44px",
       fontWeight:"900",
       color:"#19233C",
       lineHeight:'50px!important',
       [theme.breakpoints.down('sm')]:{
         textAlign:"center"
        }
   },
   subTitle:{
       color:"#8B93A7",
       fontSize:"16px",
       fontWeight:"600",
       [theme.breakpoints.down('sm')]:{
        textAlign:"center"
       }
   },
   Content:{
       display:'flex',
       flex:1,
       flexDirection:"row",
       justifyContent:"flex-start",
       position:"relative",
       right:"40px",
       marginTop:"20px",
       [theme.breakpoints.down('sm')]:{
        margin:"15px"
    }
   },
   mobileUsed:{
       [theme.breakpoints.down('sm')]:{
           background:"#FAFBFD",
       }
   },
   subContent:{
    display:'flex',
    flex:1,
    flexDirection:"column",
    
   },
   subContentTitle:{
       color:"#19233C",
       fontSize:"24px",
       fontWeight:"700",
       [theme.breakpoints.down('sm')]:{
        fontSize:"18px"
    }
   },
   subContentSubTitle:{
       fontSize:"16px",
       fontWeight:"500",
       color:"#19233C",
       [theme.breakpoints.down('sm')]:{
         fontSize:"14px",
      }
   },
   Image:{
    width:"100px",
    height:"100px" ,
    [theme.breakpoints.down('sm')]:{
        width:"120px",
        height:"120px" ,
     }
    }
     
}))

function RightBox() {
    const classes=useStyles()
    return (
     
          <Box component="div" className={classes.root}>
               <Box component="div" style={{paddingTop:"15px"}}>
                     <p className={classes.title}>A New site for your <br></br> Crypto? It’s here.</p>
               </Box>
         <Box component="div" className={classes.mobileUsed}>
               <Box component="div" className={classes.Content}>
                     <Box component="image">
                         <Image src={Icon3} className={classes.Image}></Image>
                     </Box>
                     <Box component="div" className={classes.subContent}>
                         <p className={classes.subContentTitle}>Onboard new age super rich</p>
                         <p className={classes.subContentSubTitle}>Most efficent way of branding is onboad <br></br> super rich first, Like Apple and Tesla.</p>
                     </Box>

               </Box>
               <Box component="div" className={classes.Content}>
                     <Box component="image">
                         <Image src={Icon1} className={classes.Image}></Image>
                     </Box>
                     <Box component="div" className={classes.subContent}>
                         <p className={classes.subContentTitle}>Effect less</p>
                         <p className={classes.subContentSubTitle}>Just takes few minutes to launch .</p>
                     </Box>

               </Box>
               <Box component="div" className={classes.Content}>
                     <Box component="image">
                         <Image src={Icon2} className={classes.Image}></Image>
                     </Box>
                     <Box component="div" className={classes.subContent}>
                         <p className={classes.subContentTitle}>Unlimited integration</p>
                         <p className={classes.subContentSubTitle}>Imagination is the limit. Integrate with <br></br>1000s of products and usecases.</p>
                     </Box>

               </Box>
               </Box>
             
         </Box>
    
    )
}

export default RightBox
