import Login from '@/pages/Login';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

export default function PrivateRoute({children}){
    const {auth} = useSelector((state)=>state.userReducer);
    if(auth) {
        return children;
        console.log("Hello from private route");
    }


    return <Login> </Login>;
}