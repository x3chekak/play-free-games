import './style.css'
import { NavLink } from 'react-router-dom'
import DropdownButton from '../DropdownButton/DropdownButton.tsx'
import { SearchIcon } from '../../assets/icons/search-icon.tsx'
import { LogoIcon } from '../../assets/icons/logo-icon.tsx'

const Header = () => {
    return (
        <div className="header">
            <div className="header__nav">
                <div className='header__nav_left'>
                    <div className="header__nav_left_logo transform">
                        <NavLink to='/'><LogoIcon /></NavLink>
                    </div>
                    <div className="header__nav_left_categoryes-list">
                        <DropdownButton />
                    </div>
                </div>

                <div className="header__nav_right transform">
                    <NavLink to='/search'><SearchIcon /> Search</NavLink>
                </div>

            </div>
        </div>
    )
}

export default Header