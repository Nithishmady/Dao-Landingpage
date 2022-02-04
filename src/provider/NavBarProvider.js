import React, { createContext, useContext } from "react"


 export const NavBar = createContext()


export const NavBarProviderComponent = ({children})=>{
   const [open,setOpen] = React.useState(false)

    return (
        <NavBar.Provider value={{open,setOpen}}>
            {children}
            </NavBar.Provider>
    )
}