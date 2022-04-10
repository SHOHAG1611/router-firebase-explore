import React from 'react';
import {useSignInWithGoogle} from 'react-firebase-hooks/auth'
import { getAuth} from "firebase/auth";
import app from '../../firebase.init';

const auth=getAuth(app);
const Loging = () => {
    const [signInWithGoogle,user]=useSignInWithGoogle(auth)
    return (
        <div>
            <h1>Please Loging</h1>
            <div style={{ margin: '20px' }}>
                <button onClick={()=>signInWithGoogle()}>Google Loging In</button>
            </div>
            <form>
                <input type="email" placeholder='Enter Your Email' />
                <br />
                <input type="password" name="" id="" placeholder='Enter Your Password' />
                <br />
                <input type="submit" value="Register Now" />
            </form>
        </div>
    );
};

export default Loging;