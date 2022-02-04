import React from "react"
// import { BrowserRouter, Switch,Redirect} from "react-router-dom";
import LandingPage from "../LandingPage";
import { NavBarProviderComponent } from "../provider/NavBarProvider";

export const AppRouter = () =>{
     return (
        //   <BrowserRouter>
        //       <Switch>
        //           <Redirect to="/" component={LandingPage}></Redirect>
        //       </Switch>
        //   </BrowserRouter>
        <NavBarProviderComponent>
          <LandingPage/>
        </NavBarProviderComponent>
     )
}
