import { Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import Whole from "../images/section-4/Whole1.svg";
import Box from "@mui/material/Box";
import EastTwoToneIcon from "@mui/icons-material/EastTwoTone";

const useStyles = makeStyles((theme) => ({
  whole_box: {
    display: "flex",
    marginTop: 50,
    marginBottom: 50,
    [theme.breakpoints.down("md")]: {
      marginBottom: -100,
    },
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column-reverse",
    },
  },
  Main_side: {
    paddingLeft: 50,
    marginTop: 160,
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 10,
      marginTop: 20,
      textAlign: "center",
    },
  },
  side_content: {
    fontWeight: "bold",
    marginBottom: 30,
    [theme.breakpoints.down("md")]: {
     fontSize:30,
    },
  },
  side_content_1: {
    color: theme.palette.primary.light,
  },
  side_content_2: {
    color: "#7073BE",
    display:'flex',
    alignItems:'center'
  },
  image_content: {
    [theme.breakpoints.down("md")]: {
      width: 400,
      height: 600,
    },
    [theme.breakpoints.down("sm")]: {
      width: 330,
      height: 370,
    },
    [theme.breakpoints.down("xs")]: {
      width: 320,
      height: 300,
      marginLeft:-20
    },
  },
  boxContainer:{
    display:"flex",
    flex:1,
    justifyContent:"flex-start",
    position:"relative",
  },
  box:{
    width:"192px",
    height:"192px",
    background:'#7073BE',
    borderRadius:"50%",
    position:"relative",
    right:"125px",
    top:"200px",
    boxShadow:"23.7667px 28.4167px 58.9px rgba(112, 115, 190, 0.22)",
    [theme.breakpoints.down('sm')]:{
      top:"50px",
      width:"80px",
      height:"80px",
      right:"50px"
    }
  },
  root:{
    position:"relative",
    bottom:"100px",
    [theme.breakpoints.between('sm','lg')]:{
       bottom:"200px"
    }
  }
}));

export const Cirecle_paywall = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    sideHead: " Supports major Blockchains, More blockchains coming soon.",
    sidehead_2:
      "Take automation to the next level by connecting to your existing tools. Keep your books up to date or save receipts in your favorite storage tool.",
    learnmore: "Learn more ",
  });
  return (
    <Box className={classes.root} > 
      <Box component="div" className={classes.boxContainer}>
          <Box conponent="div" className={classes.box}>
            
          </Box>
      </Box>
     <Container>
      <Box className={classes.whole_box}>
        <Box>
          <img src={Whole} className={classes.image_content} />
        </Box>
        <Box className={classes.Main_side}>
          <h1 className={classes.side_content}>{state.sideHead}</h1>
          <p className={classes.side_content_1}>{state.sidehead_2}</p>
          <p className={classes.side_content_2}>
            {state.learnmore}
            <EastTwoToneIcon size="small" style={{paddingLeft:'10px'}} />
          </p>
        </Box>
      </Box>
    </Container>
    </Box>
  );
};
