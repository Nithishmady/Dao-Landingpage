import React from 'react'
import { makeStyles } from '@mui/styles';
import { Box, Typography } from '@mui/material';
import { Container, Image } from 'react-bootstrap';
import Image1 from "../images/section-12/image3.svg"
import Image2 from "../images/section-12/image1.svg"
import Image3 from "../images/section-12/image2.svg"
import Symbol from "../images/section-12/symbol.svg"


const useStyles=makeStyles((theme)=>({
     root:{
      display:"flex",
      flexDirection:"column",
      flex:1,
      
     },
     main:{
        width:"85%",
        height:"fit-content",
        borderRadius:"5px",
        background:"#F6F9FF",
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
         justifyContent:"space-between",
         alignItems:"flex-start",
         margin:"5%",
         marginTop:"15px",
         [theme.breakpoints.down('sm')]:{
           margin:"3%",
           paddingTop:"15px",
        }
     },
     contentBox1:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"flex-start",
        background:"white",
        margin:"5%",
        position:"relative",
        marginTop:"15px",
        padding:"20px 20px 0px 10px",
        boxShadow:" -20px 40px 80px -16px rgba(0, 0, 0, 0.05);",
        borderRadius:"10px",
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
        fontSize:"16px",
        color:"#8B93A7",
        fontWeight:"600"
     },
     subTitle:{
         color:"#19233C",
         fontSize:"16px",
         fontWeight:"700"
     },
     Image:{
        position:"relative",
        top:"25px"
     },
     btnContainer:{
        display:"flex",
        flex:1,
        justifyContent:"center",
        marginTop:"20px"
     },
     btn:{
        width:"120px",
        height:"40px",
        color:"white",
        borderRadius:"5px" ,
        background:"#7073BE",
        border:"1px solid #7073BE",
        [theme.breakpoints.up('sm')]:{
            display:"none"
        }
     }
     
   }))

function LeftBox() {
    const classes=useStyles()
    return (
          <Box component="div" className={classes.root}>
                 <Box component="div" className={classes.main}>
                     <Box component="div" className={classes.contentBox}>
                         <Box component="div">
                             <p className={classes.Title}>I did a significant amount of research on the top 10 solar companies.</p>
                             <p className={classes.subTitle}>Mike Hardson, Director</p>
                         </Box>
                         <Box component="image" className={classes.Image}>
                              <Image src={Image1} width={65}/>
                         </Box>
                    </Box> 
                    <Box component="div" className={classes.contentBox1}>
                         <Box component="div">
                            <Box component="image">
                                <Image src={Symbol} style={{paddingBottom:"0px"}} />
                            </Box>
                             <p className={classes.Title}>I did a significant amount of research on the top 10 solar companies.</p>
                             <p className={classes.subTitle}>Mike Hardson, Director</p>
                         </Box>
                         <Box component="image" className={classes.Image}>
                              <Image src={Image2} width={65}/>
                         </Box>
                    </Box>
                    <Box component="div" className={classes.contentBox}>
                         <Box component="div">
                             <p className={classes.Title}>I did a significant amount of research on the top 10 solar companies.</p>
                             <p className={classes.subTitle}>Mike Hardson, Director</p>
                         </Box>
                         <Box component="image" className={classes.Image}>
                              <Image src={Image3} width={65}/>
                         </Box>
                    </Box> 

                 </Box>
                <Box component="div" className={classes.btnContainer}>
                     <Box component="button" className={classes.btn} >Read more</Box>
                </Box>
         </Box>
  
    )
}

export default LeftBox
