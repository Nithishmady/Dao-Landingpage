import { Box, IconButton } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useContext } from 'react';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import clsx from "clsx"
import { NavBar, UseNav, useNav } from '../../../provider/NavBarProvider';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Logo from '../MobileNav/Logo.svg'
import { Image } from 'react-bootstrap';

const useStyles = makeStyles(theme => ({
    Logo:{
        [theme.breakpoints.down("sm")]: {
            width:200
        }
    },
    navBox:{
        display:"flex",
        flex:1,
        width:"100%",
        height:50,
        flexDirection:"column",
        position:"fixed",
        background:"white",
        zIndex:1, 
    },
    navbar:{
      display:"flex",
      flex:1,
      height:53,
      background:"white",
      justifyContent:"space-between",
      padding:"10px",
      backgroundColor:"#EFF2F7",
      flexDirection:'row',
      alignItems:'center',
      paddingTop:10,
      paddingRight:0
    },
    contentBox:{
        display:"flex",
        position:"relative",
        height:"50vh !important",
        background:"linear-gradient(180deg, #7073BE 0%, #2F2E41 100%)",
        [theme.breakpoints.down("xs")]: {
            height:"59vh !important",
        }
    },
    activeNav:{
        height:400
    },
    heading:{
        marginTop:25
    },
    icon:{
        marginRight:"1rem",
        color:"#7073BE",
        width:30,
        height:30
    },
    center_content:{
        display:"flex",
        flexDirection:"column",
        textAlign:"center",
        width:"100%",
        marginTop:"1rem",
       
    },
    center_text:{
        textDecoration:"none !important",
        color:"white !important",
        marginTop:"1.6rem",
        fontSize:"18px",
        fontWeight:"600"
    },
    btn_sec:{
        marginTop:"3rem",
    },
    button_1:{
        marginLeft:"0rem",
        color:"#7073BE !important",
        marginRight:"1rem !important",
        marginLeft:"1rem !important",
        backgroundColor:"white",
        textTransform: 'capitalize!important',
        width:'130px',
        height:'45px',
        borderRadius:"2px!important",
        fontSize:17
    },
    button:{
        color:"white !important",
        backgroundColor:"#7073BE !important",
        textTransform: 'capitalize!important',
        width:'130px',
        height:'45px',
        borderRadius:"2px!important",
        fontSize:17
    }

}))


export default function MobileNav({children}) {
    const classes = useStyles()
    const {open,setOpen} = useContext(NavBar)
    console.log(open)
   
    const handleClick = () =>{
        setOpen(!open)
    }
  return (
       <>
         <Box componen="div" className={clsx(classes.navBox,{[classes.activeNav]:open})}>
              {/* <Box component="div">
                  <Box component="p">LAWCO</Box>
              </Box>
              <Box component="div">
                   <IconButton onClick={handleClick}>
                        <DensityMediumIcon/>
                   </IconButton>
              </Box>
              <Box className={classes.contentBox}>

              </Box>
             */}
             <Box component="div" className={classes.navbar}>
             <Box component="div">
                  <Box component="p" className={classes.heading}>
                  <Image src={Logo} width={230} style={{marginLeft:15}} className={classes.Logo}/>
                      </Box>
              </Box>
              <Box component="div">
                   <IconButton onClick={handleClick}>
                        <DensityMediumIcon className={classes.icon}/>
                   </IconButton>
              </Box>
             </Box>
             {open ? <Box component="div" className={classes.contentBox}>
               <Box className={classes.center_content}>
                   <Link className={classes.center_text} href="#">Home</Link>
                   <Link className={classes.center_text} href="#">Cases</Link>
                   <Link className={classes.center_text} href="#">Pratice Areas</Link>
                   <Link className={classes.center_text} href="#">Contact us</Link>
                   <Box className={classes.btn_sec}>
                     <Button className={classes.button_1} variant="contained">Log In</Button>
                     <Button className={classes.button} variant="contained">Register</Button>
                   </Box>
                </Box>
             </Box> : null}
             
              
         </Box>
        
       </>
     
  );
}
