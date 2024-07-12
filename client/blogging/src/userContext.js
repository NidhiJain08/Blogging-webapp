import { createContext } from "react";
import { useState } from "react";
const userContext=createContext({});
export function UserContextProvider({children}) {
    const [userInfo,setUserInfo] = useState({});
    return (
      <userContext.Provider value={{userInfo,setUserInfo}}>
        {children}
      </userContext.Provider>
    );
  }

export default userContext;