import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Products = () => {
    const {user}=useFirebase();
    return (
        <div>
            <h1>Who is Heare?</h1>
            <h3>{user?user.displayName:'voooot'}</h3>
        </div>
    );
};

export default Products;