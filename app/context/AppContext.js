import React, { createContext, useState, useEffect } from "react";

const AppContext = createContext(null);



const AppProvider = (props) => {
  const [userinfo, setuserinfo] = useState([])
  const [verdeTokenBalance, setVerdeTokenBalance] = useState("")
  const [userAddress, setUserAddress] = useState("")
  const [countrylocation, setcountrylocation] = useState("")
  

  





  return (
    <AppContext.Provider
      value={{
        userinfo, 
        setuserinfo,
        verdeTokenBalance, 
        setVerdeTokenBalance,
        userAddress, setUserAddress,
        countrylocation, setcountrylocation

      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContext;

export { AppProvider };