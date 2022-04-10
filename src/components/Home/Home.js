import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import './Home.css'
import { getAuth} from "firebase/auth";
import app from '../../firebase.init';

const auth=getAuth(app)
const Home = () => {
    const  [user]=useAuthState(auth)
    return (
        <div>
            <h1>this is Home</h1>
            <p>Curent user Is{user?user.displayName:'nobody'}</p>
        </div>
    );
};

export default Home;