
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/material";
import Arrow from "../images/section-2/Arrow.svg";
import Writtingpad from "../images/section-2/Writtingpad.svg";
import Mic from "../images/section-2/Mic.svg";
const useStyles=makeStyles((theme)=>({
    main:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    [theme.breakpoints.down('md')]:{
        justifyContent:'flex-start', 
     }
    },
    ThreeBoxs:{
    display:'flex',
    marginBottom:40,
    },
    BoxContent:{
        display:'flex',
        flexDirection:'column',
        lineHeight:'5px',
        paddingLeft:45,
        [theme.breakpoints.down('md')]:{
            width:'90%',  
            paddingLeft:35,
         }
         },
         discription:{
             margin:0,
             marginTop:7,
             width:'70%',
             fontSize:18,
             [theme.breakpoints.down('md')]:{
                width:'85%',  
                fontSize:14,
                marginTop:4,
             }
         },
         Title:{
         fontWeight:'bold',
         [theme.breakpoints.down('md')]:{
            fontSize:20,
         }
         },
         ThreeImages:{
          marginLeft:'15px'
         },
}));
const list=[
    {
heading:{
    image:Arrow,
    title:'Strategic',
    discription:'Mintzberg suggests that the top planners spend',
},
},
{
heading:{
    image:Writtingpad,
    title:'Managerial',
    discription:'200 qualitative and quantitative analytical techniques',
}
},
{
heading:{
    image:Mic,
    title:'Marketing',
    discription:'publication suggests that 72 techniques are essential',
}
},
];

 export const QualityRight=()=>{
    const classes=useStyles();
return(
<Box className={classes.main}>
    {list.map((items,index)=>{
        return(
            <Box className={classes.ThreeBoxs} style={{marginTop:items.marginTop}} >
       <img src={items.heading.image} className={classes.ThreeImages}/>
      <Box className={classes.BoxContent}>
            <h3 className={classes.Title}>{items.heading.title}</h3>
            <p  className={classes.discription}> {items.heading.discription}</p>
     </Box>
    </Box>
        )
    })}
    
    </Box>    
    )
}