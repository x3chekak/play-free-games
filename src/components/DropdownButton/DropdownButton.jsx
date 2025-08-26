import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'

function DropdownButton() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        setIsOpen(false);
    };

    const options = [
                    'MMORPG', 'Shooter', 'MOBA', 'Anime', 
                    'Battle Royale', 'Strategy', 'Fantasy',
                    'Sci-Fi', 'Card Games', 'Racing', 'Fighting',
                    'Social', 'Sports', 'games'
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
                        top: '100%',
                        left: 0,
                        margin: 0,
                        padding: '10px',
                        listStyle: 'none',
                        backgroundColor: '#fff',
                        border: '1px solid #ccc',
                        boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
                        zIndex: 1,
                    }}
                >
                    {options.map((option, index) => (
                        <li key={index} style={{cursor: 'pointer' }} onClick={() => handleOptionClick(option)}>
                            <NavLink to={'/' + option}>{option}</NavLink>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default DropdownButton;