import React from 'react';

const Registar = () => {
    return (
        <div>
            <p>Please Register!</p>
            <form>
                <input type="text" placeholder='Enter Your Name' />
                <br />
                <input type="email" placeholder='Enter Your Email'/>
                <br />
                <input type="password" name="" id="" placeholder='Enter Your Password' />
                <br />
                <input type="submit" value="Register Now" />
            </form>
        </div>
    );
};

export default Registar;