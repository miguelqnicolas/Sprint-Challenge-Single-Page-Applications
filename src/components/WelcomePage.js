import React from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'reactstrap';

const WelcomePage = () => {
    return (
        <>
            <h2>Welcome to the ultimate fan site!</h2>
            <Link to='/characters'><Button color='info'>Characters</Button>{' '}</Link>
        </>
    )
};

export default WelcomePage;