import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext=createContext(null)

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const logInUser=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password);
    }
    const logOutUser=()=>{
        setLoading(true)
        return signOut (auth);
    }
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentUser=>{
            const userEmail=currentUser?.email || user?.email;
            const loggedUser={email:userEmail?.email}
            setUser(currentUser)
            setLoading(false)
            if (currentUser) {
              
                axios.post(`http://localhost:8000/jwt`,loggedUser,{
                    withCredentials:true
                })
                .then(res=>{
                    console.log('response data',res.data)
                })
            }
            else{
            axios.post(`http://localhost:8000/signOut`,loggedUser,{
                
            })
            }
            console.log('current user',currentUser)
        });
        return ()=>{
            return unsubscribe();
        };
    },[])
    const authInfo={user,loading,createUser,logInUser,logOutUser}
    return (
        <AuthContext.Provider  value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;