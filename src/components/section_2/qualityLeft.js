import { makeStyles } from '@mui/styles';
import { Container,Box } from '@mui/material';
import { useState } from 'react';
import Wifi from "../images/section-2/wifiCircle.svg";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import SouthIcon from "@mui/icons-material/South";
import Facebook from "../images/section-2/Facebook icon.svg";
import Linkedin from "../images/section-2/linkedin icon.svg";
import Twitter from "../images/section-2/Twitter icon.svg";
import Mountain from "../images/section-2/Rectangle 57.svg";
import rectangleboxs from "../images/section-2/rectangleBox.svg";
import Image from 'react-bootstrap/Image'
import Intersect from '../images/section-2/Intersect.svg'
const useStyles=makeStyles((theme)=>({
    FirstBox: {
        width: 235,
        height: 235,
        background: "#FFFFFF",
        boxShadow: "0px 29px 58px rgba(159, 159, 159, 0.1)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        lineHeight: "20px",
        borderRadius: 26,
        [theme.breakpoints.down('md')]:{
          width: 148,
        height: 138, 
        boxShadow: '0px 17.027px 34.0539px rgba(159, 159, 159, 0.1)',   
          },
          [theme.breakpoints.down('xs')]:{
            width: 128,
        height: 118, 
           },
      },

     
      Arrow: {
        transform: "rotate(-145deg)",
      },
      Arrowline: {
        display: "flex",
       marginTop:10,
        justifyContent: "center",
        flexDirection: "row",
        [theme.breakpoints.down('xs')]:{
          alignItems: "flex-start",
          marginTop:0,
        }
      },
    
      SouthIcon: {
        color: "white",
        height: "47px!important",
        width: "50px!important",
        padding: 5,
        paddingTop: 10,
        [theme.breakpoints.down('md')]:{
          height: "42px!important",
        width: "40px!important",
        padding: 5,
        paddingTop: 5,
       },
       [theme.breakpoints.down('sm')]:{
        height: "45px!important",
        width: "40px!important",
        padding: 5,
        paddingTop: 1,
      },
      [theme.breakpoints.down('xs')]:{
        height: "30px!important",
        width: "30px!important",
        padding: 4,
        paddingTop: 0,
      }
      },
      NorthIcon:{
        color: "#53D955",
        [theme.breakpoints.down('xs')]:{
          height: "23px!important",
          width: "17px!important",
         
        }
      },
      SecondBox: {
        display: "flex",
        alignItems: "center",
        padding: 10,
        width: 179,
        height: 80,
        borderRadius: 24.6753,
        background: "#FFFFFF",
        boxShadow: '-19.9626px -14.6784px 35.2282px -5.87137px rgba(177, 186, 201, 0.1)',
        position: "absolute",
        top: 120,
        right: 125,
        [theme.breakpoints.down('md')]:{
          width: 75,
          height: 0,
          top: 50,
       },
       [theme.breakpoints.down('sm')]:{
        width: 30,
        height: 0,
        top: 50,
      },
      [theme.breakpoints.down('sm')]:{
        width: 30,
        height: 0,
        top: 50,
        right: 115,
      },
      },
      RedBox: {
        width: 60,
        height: 60,
        background: "#FB3F6C",
        borderRadius: "20px",
        marginTop: '15px',
        padding:6,
        [theme.breakpoints.down('md')]:{
          width: 50,
        height: 50,
       },
       [theme.breakpoints.down('xs')]:{
        width: 40,
        height: 40,
        borderRadius: "15px",
      }
      },
      Incomebox: {
        paddingLeft: 20,
        lineHeight: 0.3,
        [theme.breakpoints.down('xs')]:{
          paddingLeft: 10,
        }
      },
      ThirdBox: {
        width: 288,
        height: 342,
        background: "#FFFFFF",
        boxShadow: "0px 29px 58px rgba(159, 159, 159, 0.1)",
        borderRadius: 30,
        position: "absolute",
        top: 230,
        right: 120,
        [theme.breakpoints.down('md')]:{
          width: 180,
          height:280,
          top: 160,
          right: 60,
       },
       [theme.breakpoints.down('sm')]:{
        width: 180,
        height:280,
        top: 160,
        right: 20,
      },
      [theme.breakpoints.down('xs')]:{
        width:150
      }
      
      },
      IconBox: {
        width: 200,
        height: 76,
        borderRadius: "30px",
        background: "#FFFFFF",
        boxShadow: "0px 34px 78px rgba(210, 210, 210, 0.46)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: 40,
        [theme.breakpoints.down('md')]:{
          width:150,
          marginBottom:30,
          margin:'auto' 
                },
                [theme.breakpoints.down('xs')]:{
                  width:120,
                  marginBottom:20,
                  height: 66,
                 }
      },
      SocialImages:{
        paddingTop: 25,
        [theme.breakpoints.down('md')]:{
          width:47,
          paddingTop: 30,
         },
         [theme.breakpoints.down('xs')]:{
          width:37,
         }
      },
      UserCount:{
        fontWeight:'bold',
        marginTop:15,
        marginBottom:15,
        fontSize:38,
        [theme.breakpoints.down('md')]:{
         fontSize:24
       },
       [theme.breakpoints.down('xs')]:{
        fontSize:16,
        marginBottom:0
      }
      },
      Wifi:{
        [theme.breakpoints.down('md')]:{
         width:27
        }
      },
      // Incomebox:{
          
      // },
      Income:{
        marginTop:15,
        marginBottom:5,
        
        [theme.breakpoints.down('md')]:{
          fontSize:13
         },
         [theme.breakpoints.down('xs')]:{
          fontSize:11,
          marginBottom:0
        }
      },
      Dollers:{
        fontWeight:'bold',
        [theme.breakpoints.down('md')]:{
          fontSize:16
         },
         [theme.breakpoints.down('sm')]:{
          marginTop:2
        }
      },
      Mountain:{
        [theme.breakpoints.down('md')]:{
          width:180
         },
         [theme.breakpoints.down('xs')]:{
          width:150
        }
      },
      Intersect_img:{
        position:'relative',
        top:58,
        [theme.breakpoints.down('md')]:{
          width:180,
          top:38,
         },
         [theme.breakpoints.down('xs')]:{
          width:150,
          top:33,
        }
      },
      Rectangleboxs:{
        [theme.breakpoints.down('md')]:{
          width:180
         },
         [theme.breakpoints.down('xs')]:{
          width:150
        }
      },
      reach:{
        [theme.breakpoints.down('xs')]:{
          fontSize:10,
          margin:0
        }
      },
      Rating:{
        [theme.breakpoints.down('xs')]:{
          fontSize:10,
          margin:0
        }
      },

}))

const QualityLeft=()=>{
    const classes=useStyles();
return(

    <>
    <Box className={classes.FirstBox}>
      <Image src={Wifi} width={44} className={classes.Wifi} />
      <h2 className={classes.UserCount}>23.8K</h2>
      <p style={{ margin: 0 }} className={classes.reach}>Reach</p>
      <Box className={classes.Arrowline}>
        <NorthEastIcon  className={classes.NorthIcon}  />
        <p style={{color:'#53D955'}} className={classes.Rating}>11.4%</p>
      </Box>
    </Box>
    <Box className={classes.SecondBox}>
      <Box className={classes.RedBox}>
        <SouthIcon className={classes.SouthIcon} />
      </Box>
      <Box className={classes.Incomebox}>
        <p className={classes.Income}>income</p>
        <h5 className={classes.Dollers}>$10000</h5>
      </Box>
    </Box>
    <Box className={classes.ThirdBox}>
      <Box className={classes.IconBox}>
        <Image src={Facebook} className={classes.SocialImages} />
        <Image src={Linkedin} className={classes.SocialImages} />
        <Image src={Twitter}  className={classes.SocialImages} />
      </Box>
      <Box>
        <Image src={Intersect} width={289} className={classes.Intersect_img}  />
        <Image src={Mountain} width={289}  className={classes.Mountain} />
      </Box>
      <Box>
        <Image src={rectangleboxs} width={289}  className={classes.Rectangleboxs} />
      </Box>
    </Box>
    </>
)    
    }
export default QualityLeft;