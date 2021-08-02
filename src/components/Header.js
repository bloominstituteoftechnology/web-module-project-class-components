import React from 'react';
import { Link } from 'react-router-dom';
import { StyledHeader, StyledMenu } from './styles/MenuStyles';

const Header = () => {
    return(
        <StyledHeader>
            <div>Blogger Pro</div>
            <StyledMenu>
                <li><Link to="/">Login</Link></li>
                <li><Link to="view">View</Link></li>
                <li><Link to="create">Create</Link></li>
                <li><Link to="edit">Edit</Link></li>
                <li><Link to="logout">Logout</Link></li>
            </StyledMenu>
        </StyledHeader>
    );
}

export default Header;