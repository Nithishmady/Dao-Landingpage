import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { Container, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import BlackBox from "../images/section-10/abstract.svg";

const useStyles = makeStyles((theme) => ({
  head: {
    [theme.breakpoints.down("md")]: {
      fontSize: 15,
    },
  },
  para: {
    color: theme.palette.primary.light,
    [theme.breakpoints.down("md")]: {
      fontSize: 12,
    },
  },
  main: {
    paddingTop: 50,
    paddingBottom: 50,
    position: "relative",
    overflow: "hidden",
  },
  header: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    textAlign: "center",
    paddingBottom: 30,
  },
  frquent_style: {
    fontWeight: "bold",
    [theme.breakpoints.down("sm")]: {
      fontSize: "32",
    },
  },
  images: {
    [theme.breakpoints.down("sm")]: {
      position: "absolute",
      left: 100,
    },
  },
  break: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "left",
  color: theme.palette.primary.dark,
  boxShadow: "0px 2px 5px rgba(83, 54, 142, 0.2)",
  marginBottom: 20,
}));

export default function RowAndColumnSpacing() {
  const classes = useStyles();
  return (
    <Container className={classes.main}>
      <Box sx={{ width: "100%", paddingBottom: 5 }}>
        <div className={classes.header}>
          <h1 className={classes.frquent_style}>Frequently Asked Questions</h1>
          <p className={classes.para}>
            The best way to start a virtual business is to build an audience of
            people who love
            <br className={classes.break} /> your live content. We'll help you
            turn viewers into customers.
          </p>
        </div>
        <Box
          className={classes.images}
          component="img"
          sx={{
            zIndex: -1,
            position: "absolute",
            top: 30,
            right: 40,
            maxHeight: { xs: 500, sm: 500, md: 667, lg: 540, xl: 540 },
            maxWidth: { xs: 410, sm: 500, md: 650, lg: 540, xl: 540 },
          }}
          alt="The house from the offer."
          src={BlackBox}
        />
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Item>
              <Typography>
                <h4 className={classes.head}>
                  Will Stream lets me perform virtually?
                </h4>
                <p className={classes.para}>
                  The best way to start a virtual business is to build an
                  audience of people who love your live content. We’ll help you
                  turn viewers into customers.
                </p>
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Item>
              <Typography>
                <h4 className={classes.head}>
                  Will Stream lets me perform virtually?
                </h4>
                <p className={classes.para}>
                  The best way to start a virtual business is to build an
                  audience of people who love your live content. We’ll help you
                  turn viewers into customers.
                </p>
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Item>
              <Typography>
                <h4 className={classes.head}>
                  Will Stream lets me perform virtually?
                </h4>
                <p className={classes.para}>
                  The best way to start a virtual business is to build an
                  audience of people who love your live content. We’ll help you
                  turn viewers into customers.
                </p>
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Item>
              <Typography>
                <h4 className={classes.head}>
                  Will Stream lets me perform virtually?
                </h4>
                <p className={classes.para}>
                  {" "}
                  The best way to start a virtual business is to build an
                  audience of people who love your live content. We’ll help you
                  turn viewers into customers.
                </p>
              </Typography>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
