import React from "react";
import { Container, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import star from "../images/section-9/star.svg";
import analyse from "../images/section-9/analyse.svg";
import Compound from "../images/section-9/Compound Path.svg";
import Vector from "../images/section-9/Vector (6).svg";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    marginTop: "70",
    marginBottom: "70px",
  },
  head: {
    [theme.breakpoints.down("md")]: {
      fontSize: 15,
    },
  },
  header: {
    // display:'flex',
    flex: 1,
    background: "red",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  mainpara: {
    color: theme.palette.primary.light,
    fontSize: 18,
    fontWeight: "400",
    [theme.breakpoints.down("md")]: {
      fontSize: 12,
    },
  },
  para: {
    color: theme.palette.primary.light,
    fontSize: 14,
    [theme.breakpoints.down("md")]: {
      fontSize: 12,
    },
  },
  Mainheader: {
    display: "flex",
    flexDirection: "row",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      textAlign: "center",
    },
  },
  frquent_style: {
    fontWeight: "bold",
    marginBottom: 20,
  },
  Feature: {
    display: "flex",
    flex: 0.35,
    flexDirection: "column",
    marginTop: 120,
    [theme.breakpoints.between("sm", "md")]: {
      flex: 0.3,
    },
  },
  break: {
    display: "none",
  },
  Wrapper_class: {
    display: "flex",
    flex: 0.65,
    flexWrap: "wrap",
    marginTop: 80,
    justifyContent: "space-around",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      margin: "auto",
      flex: 1,
    },
    [theme.breakpoints.between("sm", "md")]: {
      flex: 0.7,
    },
  },
  box_1: {
    width: 300,
    height: 140,
    marginBottom: 25,
    background: "#FFFFFF",
    border: "1px solid rgba(239, 239, 239, 0.6)",
    boxSizing: "border-box",
    boxShadow: "0px 4px 16px rgba(112, 115, 190, 0.1)",
    borderRadius: "4.26667px",
    display: "flex",
    textAlign: "left",
    padding: 10,
    paddingTop: 30,
    [theme.breakpoints.between("sm", "md")]: {
      width: 240,
      padding: 5,
      paddingTop: 15,
      height: 110,
    },
  },
  box_2: {
    width: 300,
    height: 140,
    background: "red",
    marginBottom: 25,
    background: "#FFFFFF",
    border: "1px solid rgba(239, 239, 239, 0.6)",
    boxSizing: "border-box",
    boxShadow: "0px 4px 16px rgba(112, 115, 190, 0.1)",
    borderRadius: "4.26667px",
    display: "flex",
    textAlign: "left",
    padding: 10,
    paddingTop: 30,
    [theme.breakpoints.between("sm", "md")]: {
      width: 240,
      padding: 5,
      paddingTop: 15,
      height: 110,
    },
  },
  box_3: {
    width: 300,
    height: 140,
    background: "red",
    marginBottom: 25,
    background: "#FFFFFF",
    border: "1px solid rgba(239, 239, 239, 0.6)",
    boxSizing: "border-box",
    boxShadow: "0px 4px 16px rgba(112, 115, 190, 0.1)",
    borderRadius: "4.26667px",
    display: "flex",
    textAlign: "left",
    padding: 10,
    paddingTop: 30,
    [theme.breakpoints.between("sm", "md")]: {
      width: 240,
      padding: 5,
      paddingTop: 15,
      height: 110,
    },
  },
  box_4: {
    width: 300,
    height: 140,
    background: "red",
    background: "#FFFFFF",
    border: "1px solid rgba(239, 239, 239, 0.6)",
    boxSizing: "border-box",
    boxShadow: "0px 4px 16px rgba(112, 115, 190, 0.1)",
    borderRadius: "4.26667px",
    display: "flex",
    textAlign: "left",
    padding: 10,
    paddingTop: 30,
    [theme.breakpoints.between("sm", "md")]: {
      width: 240,
      padding: 5,
      paddingTop: 15,
      height: 110,
    },
  },
  images: {
    height: "fit-content",
    width: 60,

    paddingRight: 15,
  },
}));

export const Features = () => {
  const classes = useStyles();
  return (
    <Container className={classes.mainContainer}>
      <div className={classes.Mainheader}>
        <div className={classes.Feature}>
          <h1 className={classes.frquent_style}>Features</h1>
          <p className={classes.mainpara}>
            Our support team will get assistance from AI-powered suggestions,
            making it quicker than ever to handle support requests.
          </p>
        </div>
        <div class className={classes.Wrapper_class}>
          <div className={classes.box_1}>
            {/* <div> {images}</div> */}
            <div>
              {" "}
              <img src={star} className={classes.images} />
            </div>
            <div>
              {" "}
              <h6>BRANDING IDENDITY</h6>
              <p className={classes.para}>
                Our support team will get assistance from AI-powered.
              </p>
            </div>
          </div>
          <div className={classes.box_2}>
            <div>
              <img src={Vector} className={classes.images} />
            </div>
            <div>
              <h6>BRANDING CONSULT</h6>
              <p className={classes.para}>
                Our support team will get assistance from AI-powered.
              </p>
            </div>
          </div>

          <div className={classes.box_3}>
            <div>
              {" "}
              <img src={Compound} className={classes.images} />
            </div>
            <div>
              {" "}
              <h6>WEB DEVELOPMENT</h6>
              <p className={classes.para}>
                Our support team will get assistance from AI-powered.
              </p>
            </div>
          </div>
          <div className={classes.box_4}>
            <div>
              {" "}
              <img src={analyse} className={classes.images} />
            </div>
            <div>
              {" "}
              <h6>MARKET ANLYSIS</h6>
              <p className={classes.para}>
                Our support team will get assistance from AI-powered.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
