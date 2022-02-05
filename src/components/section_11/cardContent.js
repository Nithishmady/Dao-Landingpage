import React from "react";
import { Button, Card, Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import { Checkbox } from "@mui/material";
import CheckCircleOutlineTwoToneIcon from "@mui/icons-material/CheckCircleOutlineTwoTone";
import CircleChecked from "@material-ui/icons/CheckCircleOutline";

import CircleUnchecked from "@material-ui/icons/RadioButtonUnchecked";

const useStyles = makeStyles((theme) => ({
  card_spacing: {
    padding: 20,
    width: "20rem",
    paddingTop:30,
    boxShadow: "none",
    background: theme.palette.secondary.light,
    [theme.breakpoints.down("md")]: {
      width: "14rem",
    },
    [theme.breakpoints.down('sm')]:{
      width: "18rem",
      margin: "auto",
      marginBottom: 40,
    },
    [theme.breakpoints.down('xs')]:{
      width: "17rem",
    }
  },
  title_2: {
    color: theme.palette.primary.light,
    [theme.breakpoints.between("sm", "md")]: {
      fontSize: "12px!important",
    },
  },
  title: {
    marginBottom:5,
    marginTop:0,
    fontSize: 23,
    [theme.breakpoints.between("sm", "md")]: {
      fontSize: 17,
    },
  },
  Headerlist: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  price_box: {
    border: "0px solid",
    borderRadius: 7,
    padding: 0,
    paddingLeft: 28,
    paddingRight: 28,
    backgroundColor:'#EFF2F7',
    background: theme.palette.primary.lightgray,
    [theme.breakpoints.between("sm", "md")]: {
      padding: 2,
      paddingLeft: 10,
      paddingRight: 10,
    },
  },
  listing_order: {
    display: "flex!important",
    flexDirection: "column!important",
    background: theme.palette.primary.lightgray,
    display: "block!important",
  },
  btn_styles: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  inside_btn: {
    width: "100%",
    padding: 12,
    paddingTop: "14px!important",
    paddingBottom: "14px!important",
    textTransform: "capitalize",
    background: "#7073BE!important",
    textTransform: "none!important",
  },
  lables: {
    lineHeight: 2.1,
    color: theme.palette.primary.dark,
    [theme.breakpoints.between("sm", "md")]: {
      fontSize: 10,
    },
    [theme.breakpoints.down('xs')]:{
      fontSize: 14,
    }
  },
  listitems: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  Line:{
  marginTop:23,
  border:'1px solid #8B93A7'
  },
}));
function CardContentComponent({ item,index }) {
  const classes = useStyles();
  return (
    <Card
      className={classes.card_spacing}
      style={{
        backgroundColor: item.backgroundColor,
        height: item.height,
        color: item.color,
      }}
    >
      <Box className={classes.changecard}>
        <Box className={classes.Headerlist}>
          <Box>
            <h3 className={classes.title}>{item.HeaderContent.title}</h3>
            <label className={classes.title_2}>
              {item.HeaderContent.subtitle}
            </label>
          </Box>
          <Box className={classes.price_box}>
            <h3 style={{ color: "black",marginTop:6,marginBottom:1,fontWeight:'bold'}}>{item.HeaderContent.price}</h3>
            <label style={{ color: "#8B93A7" ,fontSize:13,paddingBottom:1,paddingLeft:6}}>
              {item.HeaderContent.month}
            </label>
          </Box>
        </Box>
        <hr className={classes.Line}/>
        {item.information.map((item) => {
          return (
            <Box className={classes.listitems} >
              <lable className={classes.lables} style={{ color: index==0 ? '#8B93A7': '#19233C'  }}>
                <Checkbox
                  icon={<CircleChecked style={{ color: index==0 ? '#8B93A7': '#19233C'  }} />}
                  checkedIcon={<CircleUnchecked style={{ color: index==0 ? '#8B93A7': '#19233C'  }} />}
                />
                {item.key}{" "}
              </lable>
            </Box>
          );
        })}
        <Box className={classes.btn_styles}>
          <Button variant="contained" className={classes.inside_btn}>
            Get started
          </Button>
        </Box>
      </Box>
    </Card>
  );
}
export default CardContentComponent;
