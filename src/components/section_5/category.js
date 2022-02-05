import React from "react";
import { makeStyles } from "@mui/styles";
import { Container, Card, Typography, Button } from "@mui/material";
import Box from "@mui/material/Box";
import GlassMen1 from "../images/section-5/Ellipse 1.svg";
import GlassMen2 from "../images/section-5/Ellipse 2.svg";
import GlassMen3 from "../images/section-5/Ellipse 3.svg";
import GlassMen4 from "../images/section-5/Ellipse 4.svg";
import GlassMen5 from "../images/section-5/Ellipse 5.svg";
import GlassMen6 from "../images/section-5/Ellipse 6.svg";
import GlassMen7 from "../images/section-5/Ellipse 7.svg";
import GlassMen8 from "../images/section-5/Ellipse 8.svg";
import GlassMen9 from "../images/section-5/Ellipse 9.svg";
import GlassMen10 from "../images/section-5/Ellipse 10.svg";
import GlassMen11 from "../images/section-5/Ellipse 11.svg";
import GlassMen12 from "../images/section-5/Ellipse 12.svg";
// import Icon1 from "material-ui/icons"
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

// import { SvgIcon } from "@material-ui/core";

const useStyels = makeStyles((theme) => ({
  Main: {
    marginTop: 200,
    marginBottom: 150,
    [theme.breakpoints.down("md")]: {
      marginTop: 0,
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: 50,
      marginBottom: -50,
    },
  },
  head_content: {
    fontWeight: "bold",
    textAlign: "center",
    lineHeight: "1.5",
    marginBottom: 30,
    [theme.breakpoints.down("md")]: {
     fontSize:32
    }
  },
  head_subcontent: {
    textAlign: "center",
    lineHeight: "1.4",
    color: theme.palette.primary.light,
    marginBottom: 70,
  },
  list_boxes: {
    width: 300,
    height: 50,
    background: "#F4F4F4",
    marginBottom: 70,
    borderRadius: 5,
    display: "flex",
    padding: 10,
    paddingTop: 10,
    alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      width: 156,
      padding:2
    },
    [theme.breakpoints.down("xs")]: {
      width: 130,
      padding:2,
      paddingRight:0
    }
  },
  taghead: {
    fontWeight: "bold",
    paddingTop: 0,
    fontSize:15,
    [theme.breakpoints.down("sm")]: {
      fontSize: 9,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 9,
    }
  },
  icon:{
    width:18,
    paddingTop:5
  },
  images: {
    width: 35,
    height: 35,
    [theme.breakpoints.down("sm")]: {
      width: 22,
      height: 22,
      marginRight:5
    },
  },
  breaks: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const list = [
  {
    headinginfo: {
      image: GlassMen1,
      content: "Cryptopunks",
    },
  },
  {
    headinginfo: {
      image: GlassMen2,
      content: "Bored Ape Yacht Club",
    },
  },
  {
    headinginfo: {
      image: GlassMen3,
      content: "Decentraland",
    },
  },
  {
    headinginfo: {
      image: GlassMen4,
      content: "Cool Cats NFT",
    },
  },
  {
    headinginfo: {
      image: GlassMen5,
      content: "Mutant Ape Yacht Club",
    },
  },
  {
    headinginfo: {
      image: GlassMen6,
      content: "Rarible",
    },
  },
  {
    headinginfo: {
      image: GlassMen7,
      content: "Parallel alpha",
    },
  },
  {
    headinginfo: {
      image: GlassMen8,
      content: "The Sandbox",
    },
  },
  {
    headinginfo: {
      image: GlassMen9,
      content: "Clone X",
    },
  },
  {
    headinginfo: {
      image: GlassMen10,
      content: "Ape Kids Club",
    },
  },
  {
    headinginfo: {
      image: GlassMen11,
      content: "PUNKS Comics",
    },
  },
  {
    headinginfo: {
      image: GlassMen12,
      content: "Crypto Bull Society",
    },
  },
];

const Categories_list = () => {
  const classes = useStyels();
  const [state, setState] = React.useState({
    Heading: " Support Both ERC721, ERC1155 NFTs from top ",
    subheading: "EVM blockchains and from non EVM blockchains",
    head: "Millions of people around the globe successfully used Flowa",
    subhead: "and they have had a lot of nice things to say about us",
  });

  return (
    <>
      <Container className={classes.Main}>
        <h1 className={classes.head_content}>
          {state.Heading} <br /> {state.subheading}
        </h1>
        <p className={classes.head_subcontent}>
          {state.head} <br className={classes.breaks} />
          {state.subhead}
        </p>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}
          component="Box"
        >
          {list.map((item) => {
            return (
              <Box className={classes.list_boxes}>
                <img
                  className={classes.images}
                  src={item.headinginfo.image}
                ></img>
                <h6 className={classes.taghead}>{item.headinginfo.content}</h6>

                <Box>
                  {" "}
                  <ChevronRightIcon className={classes.icon}/>{" "}
                </Box>
                {/* <SvgIcon component={item.icon} className="whateverclassyouwant"/>  */}
              </Box>
            );
          })}
        </Box>
      </Container>
    </>
  );
};
export default Categories_list;
