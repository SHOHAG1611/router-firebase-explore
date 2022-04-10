import React from 'react';
import useFirebase from '../../hooks/useFirebase'
const Loging = () => {
    const {SignInWithGoogle}=useFirebase()
    return (
        <div>
            <h1>Please Loging</h1>
            <div style={{ margin: '20px' }}>
                <button onClick={SignInWithGoogle}>Google Loging In</button>
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