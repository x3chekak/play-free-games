import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom'

function DropdownButton() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        setIsOpen(false);
        navigate(`/games/${option}`)
    };

    const options = [
                    'MMORPG', 'Shooter', 'MOBA', 'Anime', 
                    'Strategy', 'Fantasy','Sci-Fi', 'Battle-Royale',
                    'Card', 'Racing', 'Fighting',
                    'Social', 'Sports'
                    ];

    return (
        <div style={{ position: 'relative', display: 'inline-block' }}>
            <a onClick={toggleDropdown}>
                CATEGORY
            </a>
            {isOpen && (
                <ul
                    style={{
                        position: 'absolute',
                        width: '150px',
                        top: '100%',
                        left: 0,
                        marginTop: '18px',
                        padding: '10px',
                        listStyle: 'none',
                        backgroundColor: '#fa9696',
                        border: '1px solid #ffcccc',
                        borderRadius: '5px',
                        
                        zIndex: 1,
                    }}
                >
                    {options.map((option, index) => (
                        <li key={index} style={{ cursor: 'pointer' }} onClick={() => handleOptionClick(option)}>
                            <NavLink to={'/' + option}>{option}</NavLink>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default DropdownButton;