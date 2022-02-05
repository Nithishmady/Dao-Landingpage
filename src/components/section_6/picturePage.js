import { Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import Box from "@mui/material/Box";
import Cryptopunk from "../images/section-6/Cryptopunks.svg";
import Mutantclub from "../images/section-6/Mutantclub.svg";
import BlackBored from "../images/section-6/BlackBored.svg";
import cool from "../images/section-6/cool cats 1.svg";
import loot from "../images/section-6/loot 1.svg";
import Orange from "../images/section-6/Orangeball.svg";
import path from "../images/section-6/path4 1.svg";
import Red from "../images/section-6/R.svg";
import sand from "../images/section-6/sandbox.svg";
import Twodots from "../images/section-6/Twodots.svg";
import EastTwoToneIcon from "@mui/icons-material/EastTwoTone";

const useStyles = makeStyles((theme) => ({
  main: {
    height: "fit-content",
    paddingTop: 70,
    paddingBottom: 140,
    marginBottom: 100,
    marginTop: 100,
    [theme.breakpoints.down("sm")]: {
      marginBottom: "200px!important",
      paddingTop: 30,
      marginTop: 30,
      paddingLeft: "15px",
    },
  },
  Picture_lists: {
    position: "relative",
    flex: 0.6,
  },
  Content: {
    display: "flex",
    justifyContent: "space-between",
    flex: 1,
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column-reverse",
    },
  },
  headcontent: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  Trust: {
    marginTop: 10,
    flex: 0.4,
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  side_content: {
    fontWeight: "bold",
    marginBottom: 30,
  },
  side_content_1: {
    color: theme.palette.primary.light,
  },
  side_content_2: {
    color: "#7073BE",
    display:'flex',
    alignItems:'center',
    [theme.breakpoints.down("sm")]: {
      justifyContent:'center',
    },
  },

  crypto: {
    position: "absolute",
    top: 42,
    left: 185,
    [theme.breakpoints.down("md")]: {
      width: 110,
      top: 42,
      left: 125,
    },
    [theme.breakpoints.down("sm")]: {
      width: 90,
      top: 72,
      left: 115,
    },
  },
  mutant: {
    position: "absolute",
    top: -18,
    left: 18,
    [theme.breakpoints.down("md")]: {
      width: 70,
    },
    [theme.breakpoints.down("sm")]: {
      width: 50,
      top: 17,
      left:25,
    },
  },
  Bored: {
    position: "absolute",
    top: 250,
    left: 195,
    [theme.breakpoints.down("md")]: {
      width: 70,
      left: 145,
      top: 210,
    },
    [theme.breakpoints.down("sm")]: {
      width: 70,
      left: 120,
      top: 210,
    },
  },
  loot: {
    position: "absolute",
    top: 50,
    left: 490,
    [theme.breakpoints.down("md")]: {
      width: 30,
      left: 340,
    },
    [theme.breakpoints.down("sm")]: {
      width: 30,
      left: 310,
      top: 75,
    },
    [theme.breakpoints.down("xs")]: {
      left: 261,
    }
  },
  cool: {
    position: "absolute",
    top: 333,
    left: 375,
    [theme.breakpoints.down("md")]: {
      width: 35,
      left: 245,
      top: 253,
    },
    [theme.breakpoints.down("sm")]: {
      width: 35,
      left: 265,
      top: 263,
    },
    [theme.breakpoints.down("xs")]: {
      left: 201,
    }
  },
  Red: {
    position: "absolute",
    top: 355,
    left: 42,
    [theme.breakpoints.down("md")]: {
      width: 35,
      top: 285,
      left: 42,
    },
    [theme.breakpoints.down("sm")]: {
      width: 30,
      left: 20,
      top: 280,
    },
  },
  sand: {
    position: "absolute",
    top: 217,
    left: 80,
    [theme.breakpoints.down("md")]: {
      width: 40,
      top: 187,
    },
    [theme.breakpoints.down("sm")]: {
      width: 30,
      left: 50,
      top: 200,
    },
   
  },
  Twodots: {
    position: "absolute",
    top: -56,
    left: 391,
    [theme.breakpoints.down("md")]: {
      width: 50,
      top: -36,
      left: 281,
    },
    [theme.breakpoints.down("sm")]: {
      width: 50,
      top: 6,
      left: 261,
    },
    [theme.breakpoints.down("xs")]: {
      left: 221,
    }
  },
  Orange: {
    position: "absolute",
    top: 107,
    left: 385,
    [theme.breakpoints.down("md")]: {
      width: 40,
      top: 67,
      left: 255,
    },
    [theme.breakpoints.down("sm")]: {
      width: 30,
      top: 97,
      left: 225,
    },
    [theme.breakpoints.down("xs")]: {
      left: 211,
    }
  },
  path: {
    position: "absolute",
    top: 213,
    left: 386,
    [theme.breakpoints.down("md")]: {
      width: 100,
      height: 100,
      top: 133,
      left: 266,
    },
    [theme.breakpoints.down("sm")]: {
      width: 85,
      height: 100,
      top: 153,
      left: 240,
    },
    [theme.breakpoints.down("xs")]: {
      left: 211,
    }
  },
}));

export const PictureContent = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    sideHead: "Trusted by 1k+ Renowned.",
    sidehead_2:
      "At Besnik, we put our product, clients and culture first. Our goal is to win your business through.",
    learnmore: "Learn more ",
  });

  return (
    <Container className={classes.main}>
      <Box className={classes.Content}>
        <Box className={classes.Picture_lists}>
          <img src={Cryptopunk} className={classes.crypto} />
          <img src={Mutantclub} className={classes.mutant} />
          <img src={BlackBored} className={classes.Bored} />
          <img src={loot} className={classes.loot} />
          <img src={cool} className={classes.cool} />
          <img src={Red} className={classes.Red} />
          <img src={sand} className={classes.sand} />
          <img src={Twodots} className={classes.Twodots} />
          <img src={Orange} className={classes.Orange} />
          <img src={path} className={classes.path} />
        </Box>
        <Box className={classes.Trust}>
          <h1 className={classes.side_content}>{state.sideHead}</h1>
          <p className={classes.side_content_1}>{state.sidehead_2}</p>
          <p className={classes.side_content_2}>
            {state.learnmore}
            <EastTwoToneIcon size="small" style={{paddingLeft:'10px'}} />
          </p>
        </Box>
      </Box>
    </Container>
  );
};
