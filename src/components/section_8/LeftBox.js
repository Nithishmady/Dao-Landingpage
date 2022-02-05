import React from 'react'
import { makeStyles } from '@mui/styles';
import { Box, Typography } from '@mui/material';
import { Container, Image } from 'react-bootstrap';
import Image1 from "../images/section-12/Image (1).svg"
import Image2 from "../images/section-12/Image.svg"
import Image3 from "../images/section-12/Image (2).svg"
import Symbol from "../images/section-12/symbol.svg"


const useStyles=makeStyles((theme)=>({
     root:{
      display:"flex",
      flexDirection:"column",
      flex:1,
      
     },
     main:{
        width:"75%",
        height:"fit-content",
        background:"#FFFFFF",
        [theme.breakpoints.between('sm','lg')]:{
            width:"100%",
        },
        [theme.breakpoints.down('sm')]:{
            width:"100%",
        }
     },
     contentBox:{
         display:"flex",
         flexDirection:"row",
         justifyContent:"flex-start",
         alignItems:"flex-start",
         margin:"5%",
         marginTop:"15px",
         paddingTop:"30px",
         [theme.breakpoints.down('sm')]:{
           margin:"3%",
           paddingTop:"25px",
        }
     },
     contentBox1:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"flex-start",
        alignItems:"flex-start",
        background:"white",
        margin:"5%",
        position:"relative",
        marginTop:"24px",
        padding:"20px 0px 0px 10px",
        boxShadow:"0px 50px 100px -30px rgba(0, 0, 0, 0.08);",
        borderRadius:"12px",
        left:"60px",
        [theme.breakpoints.between('sm',"md")]:{
           left:"25px"
        },
        [theme.breakpoints.down('sm')]:{
          margin:"3%",
          left:"20px",
          paddingTop:"15px",
       }
    },
     Title:{
        fontSize:"22px",
        color:"#19233C;",
        fontWeight:"700",
        [theme.breakpoints.down('sm')]:{
            fontSize:"12.8px",
            color:"#19233C;",
            fontWeight:"700",
        }
     },
     SpanTitle:{
        color:"#8B93A7",
        fontWeight:"600",
        fontSize:"17px",
        [theme.breakpoints.down('sm')]:{
            fontSize:"12.8px",
            color:"#8B93A7",
            fontWeight:"600",
        }

     },
     subTitle:{
         color:"#6D6D6D",
         fontSize:"16px",
         fontWeight:"500",
         [theme.breakpoints.down('sm')]:{
            fontSize:"12px",
            color:"#6D6D6D",
            fontWeight:"500",
        }

     },
    
     
   }))

function LeftBox() {
    const classes=useStyles()
    return (
          <Box component="div" className={classes.root}>
                 <Box component="div" className={classes.main}>

                     <Box component="div" className={classes.contentBox}>
                         <Box component="image">
                              <Image src={Image2} width={100}/>
                         </Box>
                         <Box component="div" style={{marginLeft:"10px"}}>
                          <Box component="div" style={{display:"flex",flex:1,justifyContent:"space-between",flexDirection:"row"}}>
                               <Box component='div'>
                                     <p className={classes.Title}>Elon Musk .<Box component="span" className={classes.SpanTitle}> Cofounder Tesla</Box></p>
                               </Box>
                               <Box component="image">
                                     <Image src={Symbol}  />
                              </Box>
                          </Box>
                             <p className={classes.subTitle}>NFT Passport helped to bootstrap a strong NFT community in short period of time</p>
                         </Box>
                    </Box>


                    <Box component="div" className={classes.contentBox1}>
                         <Box component="div" style={{marginLeft:"10px"}}>
                          <Box component="div" style={{display:"flex",flex:1,justifyContent:"space-between",flexDirection:"row"}}>
                               <Box component='div'>
                                     <p className={classes.Title}>The Cook . <Box component="span" className={classes.SpanTitle}>Apple CEO</Box></p>
                               </Box>
                          </Box>
                             <p className={classes.subTitle}>We launched super premium NFT for Apple fans. NFT passport saved us $25 Million worth of marketing budget.</p>
                         </Box>
                         <Box component="image">
                              <Image src={Image1} width={100}/>
                         </Box>
                    </Box>

                    <Box component="div" className={classes.contentBox}>
                         <Box component="image">
                              <Image src={Image3} width={100}/>
                         </Box>
                         <Box component="div" style={{marginLeft:"10px"}}>
                          <Box component="div" style={{display:"flex",flex:1,justifyContent:"space-between",flexDirection:"row"}}>
                               <Box component='div'>
                                     <p className={classes.Title}>Abdulla Shahid .<Box component="span" className={classes.SpanTitle}> Premium Fashion</Box></p>
                               </Box>
                               <Box component="image">
                                     <Image src={Symbol}  />
                              </Box>
                          </Box>
                             <p className={classes.subTitle}>We raised $400Mn fund for our upcoming brand, with help of top NFT influencers.</p>
                         </Box>
                    </Box>
                   

                 </Box>
            
         </Box>
  
    )
}

export default LeftBox
