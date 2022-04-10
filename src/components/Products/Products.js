import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth} from "firebase/auth";
import app from '../../firebase.init';

const auth=getAuth(app)
const Products = () => {
    const [user]=useAuthState(auth)
    return (
        <div>
            <h1>Who is Heare?</h1>
            <h3>{user?user.displayName:'voooot'}</h3>
        </div>
    );
};

export default Products;