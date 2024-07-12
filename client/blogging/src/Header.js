import { useContext, useEffect, useState } from "react";
import {Link} from "react-router-dom";
import userContext from "./userContext";

const Header=()=>{

    const {setUserInfo,userInfo}=useContext(userContext);//context
    
    useEffect(()=>{
        fetch('http://localhost:4000/profile',{
        credentials:'include',
        }).then(response=>{
         response.json().then(userInfo=>{
         setUserInfo(userInfo)
         })
        });
    },[]);

    function logout(){
        fetch('http://localhost:4000/logout',{
        credentials:'include',
        method:'POST'    
        });
        setUserInfo(null);
    }
    const username=userInfo?.username;//if userinfo not null then
return (
    <header>
    <Link to="/" className="logo">StreamWrite</Link>
    <nav>
        { username && (
            <>
            <Link to="/create">create new post </Link>
            <a onClick={logout}>logout</a>
            </>
        )}
        {!username && (
            <>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
            </>
        )}
        
    </nav>
</header>
);
}
export default Header;