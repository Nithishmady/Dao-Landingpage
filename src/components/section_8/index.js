import React from 'react'
// import 'bootstrap/dist/css/bootstrap.css'; 
// import {Container,Card,ListGroup} from 'react-bootstrap';
// import { useMediaQuery } from 'beautiful-react-hooks';
import { makeStyles } from '@mui/styles';
import { Box, Typography } from '@mui/material';
import { Container, Image } from 'react-bootstrap';
import useMediaQuery from '@mui/material/useMediaQuery';
import LeftBox from './LeftBox';
import RightBox from './RightBox';


const useStyles=makeStyles((theme)=>({
   root:{
       display:"flex",
       flex:1,
       justifyContent:"center",
       alignItems:"center",
       height:"fit-content",
       marginTop:"100px",
         marginBottom:"90px",
       [theme.breakpoints.down('sm')]:{
         marginTop:"100px",
         marginBottom:"20px"
      }
   },
   main:{
       display:"flex",
       flexDirection:"row",
       flex:1,
       justifyContent:"space-around",
       alignItems:"flex-start",
       [theme.breakpoints.down('sm')]:{
         flex:1,
         flexDirection:"column-reverse"
       }
   },
   LeftBox:{
    display:"flex",
    flex:0.5,
    [theme.breakpoints.down('sm')]:{
        width:"100%"
      }
   },
   RightBox:{
    display:"flex",
    flex:0.5,
    [theme.breakpoints.down('sm')]:{
        display:"flex",
        flex:1,
      }
   }
    
  }))
 const Section4=()=>{
     const classes=useStyles()
     const matches = useMediaQuery('(max-width:414px)');
     console.log(matches,"m")
     return(
 <Container>
   <Box className={classes.root}>
       <Box component="div" className={classes.main}>
           <Box component="div" className={classes.LeftBox}>
              <LeftBox/>
           </Box>
           <Box component='div' className={classes.RightBox}>
                <RightBox/>
           </Box>
      </Box>
      
   </Box>
 </Container>
)
}
export default Section4;



