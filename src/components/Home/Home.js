import React from 'react';
import useFirebase from '../../hooks/useFirebase';
import './Home.css'

const Home = () => {
    const  {user}=useFirebase();
    return (
        <div>
            <h1>this is Home</h1>
            <p>Curent user Is{user?user.displayName:'nobody'}</p>
        </div>
    );
};

export default Home;