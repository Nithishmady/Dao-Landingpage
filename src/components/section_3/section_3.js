import React from 'react';
import { makeStyles } from '@mui/styles';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Image } from 'react-bootstrap';
import Button from '@mui/material/Button';
import Class from '../../assets/images/section-3/class.svg'
import Discuss from "../../assets/images/section-3/discuss.svg"
import Subject from "../../assets/images/section-3/subjects.svg"
import Task from "../../assets/images/section-3/task.svg"

const usestyles = makeStyles((theme)=>({
    root:{
        height:"fit-content",
        marginTop:"5rem",
        display:"flex",
        flexDirection:"row",
        margin:"7rem",
        paddingTop:190,

        [theme.breakpoints.down("md")]: {
            margin:"2rem",
            paddingTop:30,
          },
          [theme.breakpoints.down("sm")]: {
            flexDirection:"column-reverse",
            margin:"0",
            alignItems:"center",
            marginBottom:"5rem",
            paddingTop:140,
          },

    },
    Bigbox:{
        height:"560px",
        width:"720px",
        backgroundColor:"#F8F8FF",
        display:"flex",
        position:"relative",
        marginRight:"7rem",
        [theme.breakpoints.down("lg")]: {
          height:"255px",
          width:"400px"
        },
          [theme.breakpoints.down("md")]: {
            marginRight:"3rem"
          },
          [theme.breakpoints.down("sm")]: {
            height:"350px",
            width:"315px",
            marginTop:"2rem",
            marginRight:"0rem"
          },
          [theme.breakpoints.down("xs")]: {
            height:"350px",
            width:"280px",
          },
    },
    smallBox:{
        height:"140px",
        width:"325px",
        backgroundColor:"white",
        justifyContent:"space-evenly",
        display:"flex",
        flexDirection:"row",
        marginLeft:"2rem",
        alignItems:"center",
        borderRadius:"8px",
        boxShadow:"0px 12px 24px rgba(69, 61, 128, 0.05)",

        [theme.breakpoints.down("lg")]: {
            width: "190px",
            height:"75px",
            marginLeft:"1rem"
          },
          [theme.breakpoints.down("sm")]: {
            marginTop:"1rem"
          },
          
    },
    image:{
        height:"70px",

        [theme.breakpoints.down("lg")]: {
            height:"35px"
          },
    },
    heading1:{
        fontSize:"20px",
        fontWeight:"900",
        color:"#19233C",
        margin:"0",
        [theme.breakpoints.down("lg")]: {
            fontSize:"12px",
          },
    },
    heading2:{
        fontSize:"15px",
        color:"#6D6D6D",
        margin:"0",
        marginTop:"10px",
        fontWeight:"400",

        [theme.breakpoints.down("lg")]: {
            fontSize:"12px",
            marginTop:"5px"
          },
    },
    row1:{
        display:"flex",
        flexDirection:"row",
        position:"absolute",
        top:"20%",
        left:"10%",

        [theme.breakpoints.down("lg")]: {
            top:"15%",
            left:"2%",
          },
          [theme.breakpoints.down("sm")]: {
            flexDirection:"column",
            top:"3%",
            left:"14%"
          },
          [theme.breakpoints.down("xs")]: {
            left:"10%"
          },
    },
    row2:{
        display:"flex",
        flexDirection:"row",
        position:"absolute",
        top:"50%",
        left:"10%",

        [theme.breakpoints.down("lg")]: {
            left:"2%",
          },
          [theme.breakpoints.down("sm")]: {
            flexDirection:"column",
            left:"14%",
            marginTop:"1rem"
          },
          [theme.breakpoints.down("xs")]: {
            left:"10%"
          },
    },
    text_1:{
        color:"#7073BE",
        fontSize:"16px",
        margin:"0",
        marginTop:"1rem",

        [theme.breakpoints.down("lg")]: {
            fontSize:"10px",
          },
    },
    text_2:{
        color:"#2E2E46",
        fontSize:"44px",
        margin:"0",
        fontWeight:"700",
        marginTop:"1rem",
        marginBottom:"1.5rem",
        lineHeight:'50px!important',

        [theme.breakpoints.down("lg")]: {
            fontSize:"28px",
            marginTop:"0.5rem",
            marginBottom:"0.5rem",
            lineHeight:'39px!important',
          },
          [theme.breakpoints.down("sm")]: {
            lineHeight:'35px!important',
          }
    },
    text_3:{
        color:"#69697B",
        font:"20px",
        margin:"0",
        marginTop:"1.3rem",
        marginBottom:"1.7rem",

        [theme.breakpoints.down("lg")]: {
            fontSize:"10px",
            marginTop:"1rem",
            marginBottom:"1.5rem",
            lineHeight:'17px!important',
          },
          [theme.breakpoints.down("sm")]: {
            marginBottom:"1.5rem",
            lineHeight:'17px!important',
          },
    },
    btn:{
        backgroundColor:"#7073BE !important",
        color:"white !important",
        textTransform: 'capitalize!important',
        height:"45px",
        width:"110px",
        [theme.breakpoints.down("lg")]: {
            height:"30px",
            width:"80px",
            fontSize:"10px !important"
          },
    },
    right:{
        marginTop:"6.5rem",

        [theme.breakpoints.down("lg")]: {
            marginTop:"1rem"
          },
          [theme.breakpoints.down("sm")]: {
            textAlign:"center"
          },
    }
}));


const LearningPage = () => {

    const classes = usestyles()

   
  return (
      <Box className={classes.root}>
          <Box className={classes.Bigbox}>
              <Box className={classes.row1}>
              <Box className={classes.smallBox}>
                  <Image src={Class} className={classes.image}/>
                  <Box style={{display:"flex",flexDirection:"column",}}>
                     <p className={classes.heading1}>Live Class</p>
                     <p className={classes.heading2}>Online live class regularly</p>
                  </Box>
              </Box>
              <Box className={classes.smallBox}>
                  <Image src={Discuss} className={classes.image}/>
                  <Box style={{display:"flex",flexDirection:"column",}}>
                     <p className={classes.heading1}>Live Discuss</p>
                     <p className={classes.heading2}>Online live discussion</p>
                  </Box>
              </Box>
              </Box>
              <Box className={classes.row2}>
              <Box className={classes.smallBox}>
                  <Image src={Task} className={classes.image}/>
                  <Box style={{display:"flex",flexDirection:"column",}}>
                     <p className={classes.heading1}>Daily Task</p>
                     <p className={classes.heading2}>Online daily homework</p>
                  </Box>
              </Box>
              <Box className={classes.smallBox}>
                  <Image src={Subject} className={classes.image}/>
                  <Box style={{display:"flex",flexDirection:"column",}}>
                     <p className={classes.heading1}>Subjects</p>
                     <p className={classes.heading2}>Various kind of subjects</p>
                  </Box>
              </Box>
              </Box>
          </Box>
          <Box className={classes.right}>
              <p className={classes.text_1}>Membership</p>
              <p className={classes.text_2}>Start your learning<br/>journey today!</p>
              <p className={classes.text_3}>A best and cheapest way of getting know<br/>learning to make a better tomorrow.</p>
              <Button variant="contained" className={classes.btn}>Sign Up</Button>
          </Box>
      </Box>
  )
};

export default LearningPage;
