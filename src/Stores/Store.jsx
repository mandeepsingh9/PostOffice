import { createContext } from "react";

const store=createContext({
    handlepincode:()=>{},
    handlhandleSubmit:()=>{},
    data:[],
    pincode:""
})

export default store;