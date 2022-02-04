import React from "react";
import { makeStyles } from "@mui/styles";
import { Container, Box } from "@mui/material";
import QualityDetails from "./qualityDetails";
import { Image } from "react-bootstrap";
import QualityLeft from "./qualityLeft";
import { QualityRight } from "./qualityRightContent";
const useStyles = makeStyles((theme) => ({
  Root: {
    marginTop: 100,
    marginBottom: 100,
    height:'fit-content',
    [theme.breakpoints.down('sm')]:{
      marginTop: 80,
    }
  },
  Main: {
    display: "flex",
    flex: 1,
    height:'fit-content',
    [theme.breakpoints.down('sm')]:{
      display:'flex',
      flexDirection:'column-reverse'
    }
  },
  header: {
    fontSize: 44,
    fontWeight: "bold",
    color: theme.palette.primary.main,
    [theme.breakpoints.down('md')]:{
      fontSize: 38,
    }
  },
  LeftSide: {
    flex: 0.5,
    position: "relative",
    padding: 100,
    paddingLeft:80,
    
    [theme.breakpoints.down('md')]:{
      padding: 70,
      paddingLeft:20,
      paddingRight:20,
     
    }
  },
  RightSide: {
    flex: 0.5,
        display:'flex',
        flexDirection:'column',
        justifyContent:'center'  ,
        paddingTop:120,
        [theme.breakpoints.down('md')]:{
          width: "100%",
          margin:'auto',
          paddingTop:40,
        },
        [theme.breakpoints.down('sm')]:{
          paddingTop:60,
          paddingLeft:'10%'
        }
  },
  Topinformation: {
    textAlign: "center",
  },
  ParagraphStyle: {
    width: "55%",
    margin: "auto",
    lineHeight: 1.3,
    color: theme.palette.primary.paragraphColor,
    [theme.breakpoints.down('md')]:{
      width: "81%",
    },
    [theme.breakpoints.down('sm')]:{
      width: "90%",
    }
  },
}));

export const QualityContent = () => {
  const classes = useStyles();
  return (
    <Container className={classes.Root}>
      <Box component="div" className={classes.Topinformation}>
        <h1 className={classes.header}>Quality in everything we do.</h1>
        <p className={classes.ParagraphStyle}>
          Use our platform to discover and connect with the perfect influencers,
          create and manage easilly your brand campaigns for an improved
          performance.
        </p>
      </Box>
      <Box component="div" className={classes.Main}>
      <Box component="div" className={classes.LeftSide}>
          <QualityLeft/>
        </Box>
        <Box component="div" className={classes.RightSide}>
        <QualityRight/>
        </Box>
      </Box>
    </Container>
  );
};
