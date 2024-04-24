import { createContext, useState } from "react";

export const authContext = createContext();

const AuthProvider = ({children}) => {
 const [auth,setAuth] = useState({
    user:{
      name : "faisal sohail",
      role : "author",
      email: "faisalsohail@gmail.com"
    },
    token: "asda",
  })


  return <authContext.Provider value ={[auth,setAuth]}>
    {children}
  </authContext.Provider>
}

export default AuthProvider;