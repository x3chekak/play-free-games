import './style.css'
import { NavLink } from 'react-router-dom'
import DropdownButton from '../DropdownButton/DropdownButton'

const Header = () => {
return (
    <div className="header">
        <div className="header__nav">
            <div className="header__nav-logo">
                <NavLink to='/'>LOGO</NavLink>
            </div>
            <div className="header__nav_categoryes-list">
                <DropdownButton/>
            </div>
        </div>
    </div>
)
}

export default Header