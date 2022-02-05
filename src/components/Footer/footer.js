import React from 'react'
import './footer.css'
import 'bootstrap/dist/css/bootstrap.css'; 
import NFT from '../images/section-13/footerlogo.svg'
import Telegrame_1 from '../images/section-13/Telegram (1).svg'
import Discord from '../images/section-13/Discord.svg'
import Vector  from '../images/section-13/Vector.svg'
import Github  from '../images/section-13/Github.svg'
import Twitter  from '../images/section-13/Twitter.svg'
import Telegram  from '../images/section-13/Telegram.svg'
import { Container } from '@mui/material';


const Footer=()=> {
  return (
    <section className="footer " style={{backgroundColor:"rgba(25, 35, 60, 1)",height:"fit-content"}}>
    <Container className='container_footer'>
        <div className="footer-collection ">
            {/* <!-- style="display: flex;justify-content: space-between; " --> */}
            <div className="row">
                <div className="col-xl col-lg col-md-4 col-sm-12">
                    <div className="footer-links col-xl col-xl ">
                        <div className="row">
                            <div className="col-xl-7 col-lg-8 col-md-3 col-sm-3 col-5 ml-2 mx-md-0" style={{paddingLeft:0}}>
                                <ul>
                                    <li>
                                        <a className="navbar-brand " href="# "/>
                                        <img  src={NFT} />
                                        {/* <Image src="/assets/images/logo.svg" className="Change_logo" alt="logo" /> */}
                                    </li>
                                    <li>
                                        <a href="#" style={{color:"rgb(148, 143, 143)"}}>Yourproject@paywall.oi</a>
                                    </li>
                                    
                                    <div className="logo d-flex mt-4 mb-5 ">
                                        <img src={Telegrame_1}/>
                                        <img src={Discord}  style={{paddingLeft:"20px"}}/>
                                        <img src={Vector}   style={{paddingLeft:"20px"}}/>
                                        <img src={Github}   style={{paddingLeft:"20px"}}/>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl col-lg col-md-3 col-6 mx-auto">
                    <div className="footer-links Whysellwall col-xl col-xl ">

                        <h4>WHY SELLWALL?</h4>
                        <ul style={{paddingLeft:"0px"}}>
                            <li><a href="# ">Sellwall Finance</a></li>
                            <li><a href="# ">Channels</a></li>
                            <li><a href="# ">Engagement</a></li>
                            <li><a href="# ">Scale</a></li>
                            <li><a href="# " className="mb- ">Watch The Demo</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-xl col-lg col-md-3 col-sm-12 col-6">
                    <div className="footer-links Products ">
                        <h4>PRODUCTS</h4>
                        <ul style={{paddingLeft:"0px"}}>
                            <li><a href="# ">Features</a></li>
                            <li><a href="# ">Integrations</a></li>
                            <li><a href="# ">Enterprice</a></li>
                            <li><a href="# " className="mb-3 ">Solutions</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-xl col-lg col-md-2 col-sm-12 col-6">
                    <div className="footer-links Pricing ">
                        <h4>PRICING</h4>
                        <ul style={{paddingLeft:"0px"}}>
                            <li><a href="# ">Plans</a></li>
                            <li><a href="# " className="mb-3 ">Paid Vs Free</a> </li>
                        </ul>
                    </div>
                </div>
                <div className="col-xl col-lg col-md-6 col-sm-12 col-6 mx-auto" >
                    <div className="footer-links Resources ">

                        <ul style={{paddingLeft:"0px"}} >
                            <h4>RESOURCES</h4>
                            <li><a href="# ">Partners</a></li>
                            <li>
                                <a href="# ">Developers</a>
                            </li>
                            <li><a href="# ">Apps</a></li>
                            <li>
                                <a href="# ">Blog</a>
                            </li>
                            <li><a href="# ">Help center</a></li>
                           
                            
                </ul>
            </div>
                </div>
                <div className="col-xl col-lg col-md-6 col-sm-12">
            <div className="footer-links Company ">
                
                <ul style={{paddingLeft:"0px"}}>
                    <h4 className="mb-4 ">COMPANY</h4>
                    <li><a href="# ">About Us</a></li>
                            <li>
                                <a href="# ">Leadership</a>
                            </li>
                            <li><a href="# ">Apps</a></li>
                            <li>
                                <a href="# ">News</a>
                            </li>
                            <li>
                                <a href="# ">Media Kit</a>
                            </li>
                           
                            <li style={{color:"white"}}>
                                <a href="# "/>Careers</li>
                </ul>
            </div> 
                </div>
            </div>
       
        </div>
       <hr className='new'/>
            <div className="footers row " style={{ marginTop:"20px", paddingLeft: '40px'}}>
                <div className="TermsandCondition " style={{display:"flex"}}>
                    <h6 className="b1">Status</h6>
                    <h6 className="b2">Privacy</h6>
                    <h6 className="b3">Terms</h6>
                    <h6 className="b4">Cookie</h6>
                    <h6 className="b5">Preference</h6>
                    <h6 className="b6">Contact Us </h6>
                    <h6 className="b7"> Change Region</h6>
                </div>
                <div className="findus "> 
                    <h6 className="d-inline ">Find Us On</h6>
                    <img src={Telegram} alt=" " className="pl-3" style={{paddingLeft:"15px"}}/>
                    <img src={Discord} alt=" " className="pl-3 " style={{paddingLeft:"15px"}}/>
                    <img src={Twitter} alt=" " className="pl-3 " style={{paddingLeft:"15px"}}/>
                    <img src={Github} alt=" " className="pl-3 "  style={{paddingLeft:"15px"}}/>
                
                </div>
                </div>
                
                </Container>
</section>

  );
}

export default Footer;
