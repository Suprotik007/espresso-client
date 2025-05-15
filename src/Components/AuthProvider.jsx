import React from 'react';
import { AuthContext } from './AuthContext';
import {auth} from '../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth';

const AuthProvider = ({children}) => {

    
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const userInfo={
createUser
    }
    return (
        <div>
            <AuthContext value={userInfo}>
                {children}
            </AuthContext>
        </div>
    );
};

export default AuthProvider;