import {createContext, useEffect, useState} from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import {auth} from '../auth/firebase-config'

export const AuthContext = createContext()

const AuthContextProvider = (props) => {

    const [currentUser, setCurrentUser] = useState()

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {         //halihazırda giriş yapmış kullanıcının tekrar üyelik yapmasını engeller.
            setCurrentUser(currentUser)
        })
    },[])

    return(
        <AuthContext.Provider value={{currentUser}}>                              
            {props.children}                                   
        </AuthContext.Provider>
    )
//props.children, value değerinin parentin altındaki tüm child componentler tarafından ulaşılmasını sağlar.

}

export default AuthContextProvider;