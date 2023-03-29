import {createContext} from "react"



export default createContext(
    {
        pageNumber:0,
        handlePagenumber:()=>{},
        drawerOpne:false,
        setDrawerOpne:()=>{}
    }
)