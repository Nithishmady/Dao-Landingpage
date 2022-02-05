import React from "react";
import { makeStyles } from "@mui/styles";
import { Container, Card, Typography, Button } from "@mui/material";
import Box from "@mui/material/Box";
import Telegram from "../images/section-7/Telegrams.svg";
import Discord from "../images/section-7/Discord.svg";
import pepsi from "../images/section-7/Pepsi.svg";
import Apple from "../images/section-7/Apple2.png";
import instagram from "../images/section-7/instagram.svg";


const useStyles = makeStyles((theme) => ({
  heading: {
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 40,
    [theme.breakpoints.down("sm")]: {
      fontSize: 33,
    },
  },
  box_properties: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    background: "red",
    width: 100,
    height: 300,
  },
  box_header: {
    fontWeight: "bold",
    lineHeight: 1.6,
    [theme.breakpoints.down("sm")]: {
      fontSize: 18,
    },
  },
  inside_btn: {
    width: 100,
    padding: 4,
    paddingBottom: 7,
    borderRadius: 20,
    border: "0px solid",
    color: "#6D6D6D",
    textTransform: "lowercase",
    background: "#EFF2F7",
    marginRight: 15,
  },
  inside_btn_2: {
    width: 100,
    padding: 3,
    borderRadius: 20,
    border: "0px solid",
    color: "#7073BE",
    textTransform: "lowercase",
    background: "#effff",
  },
  two_btn: {
    display: "flex",
    flexDirection: "row",
    marginTop: 15,
    marginBottom: 15,
  },
  btn_style: {
    borderRadius: "10px",
    backgroundColor: "#7073BE",
    padding: "10px 17px",
    color: "white",
    outline: "none",
    border: "0px solid",
    marginTop: "28px",
    margin: 0,
    display: "flex",
    textAlign: "center",
    margin: "auto",
  },
  cards_lists: {
    width: "333px",
    height: "100",
    marginBottom: 50,
    padding: 10,
    [theme.breakpoints.between("md", "lg")]: {
      width: "310px",
    },
  },
}));

let box = [
  {
    marginBottom: 39,
    heading: {
      title:
        "Access to Telegram channel based on holdings of top NFT projects like BAYC, CryptoPunks",
      image: Telegram,
      name: "Telegram",
      user: "123,000",
    },
  },
  {
    marginBottom: 39,
    heading: {
      title:
        "Access to Telegram channel based on holdings of top NFT projects like BAYC, CryptoPunks",
      image: Discord,
      name: "Discord",
      user: "123,000",
    },
  },
  {
    paddingTop: 100,
    marginBottom: 70,
    heading: {
      title: "Discount on Shopify based on NFTs Owned",
      image: pepsi,
      name: "Shopify",
      user: "123,000",
    },
  },
  {
    marginBottom: 39,
    heading: {
      title:
        "Access to Telegram channel based on holdings of top NFT projects like BAYC, CryptoPunks",
      image: Telegram,
      name: "Telegram",
      user: "123,000",
    },
  },
  {
    marginBottom: 70,
    heading: {
      title: "UI/UX designer with wordpress experience",
      image: Apple,
      name: "Apple",
      user: "5 days go",
    },
  },
  {
    marginBottom: 70,
    heading: {
      title: "Marketing intern for exciting instagram app",
      image: instagram,
      name: "Instagram",
      user: "5 days go",
    },
  },
];

const Access_properties = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    heading: "Browse 1000s of popular templates to",
    SubHeading: "onboard the elites of web3 world.",
  });
  return (
    <>
      <section style={{ background: "#EFF2F7" }}>
        <Container className="pt-5 pb-5">
          <h1 className={classes.heading}>
            {state.heading}
            <br /> {state.SubHeading}
          </h1>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-around",
            }}
            component="div"
          >
            {box.map((item, index) => {
              return (
                <Card style={{}} className={classes.cards_lists}>
                  <Box
                    sx={{
                      margin: "10px",
                      display: "flex",
                      flexDirection: "column",
                    }}
                    component="div"
                  >
                    <h5
                      className={classes.box_header}
                      style={{ marginBottom: item.marginBottom }}
                    >
                      {item.heading.title}
                    </h5>
                    <Box className={classes.two_btn}>
                      <button className={classes.inside_btn}>Customize</button>
                      <button className={classes.inside_btn_2}>install</button>
                    </Box>
                    <Box style={{ display: "flex" }}>
                      <img
                        src={item.heading.image}
                        width="56"
                        height="56"
                        style={{ marginTop: 10 }}
                      />
                      <ul style={{ listStyle: "none", marginTop: 12 }}>
                        <li>{item.heading.name}</li>
                        <li style={{ color: "#8B93A7" }}>
                          {item.heading.user}
                        </li>
                      </ul>
                    </Box>
                  </Box>
                </Card>
              );
            })}
          </Box>
          <button type="button" className={classes.btn_style}>
            See more
          </button>
        </Container>
      </section>
    </>
  );
};
export default Access_properties;
