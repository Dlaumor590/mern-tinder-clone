import React from 'react';
import './Header.css';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import IconButton from '@material-ui/core/IconButton';
import ForumRoundedIcon from '@material-ui/icons/ForumRounded';

function Header() {
    return (
        <div className='header'>
            <IconButton>
                <PersonPinIcon fontSize='large' className='header__icon' />
            </IconButton>
            <img className='header__logo' src='https://cdn.designrush.com/uploads/inspirations/2354/crop_683_410__1513706350_604_tin.png' alt='' />
            <IconButton>
                <ForumRoundedIcon fontSize='large' className='header__icon'/>
            </IconButton>
        </div>
    )
}

export default Header;
