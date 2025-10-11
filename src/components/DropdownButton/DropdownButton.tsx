import { useEffect, useRef, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom'
import { ArrowDownIcon } from '../../assets/icons/arrow-down-icon.tsx';
import './style.css'

const DropdownButton: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const navigate = useNavigate();
    const containerRef = useRef<HTMLDivElement>(null)

    const toggleDropdown = (): void => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option: string): void => {
        setIsOpen(false);
        navigate(`/games/${option}`)
    };

    const options: string[] = [
        'MMORPG', 'Shooter', 'MOBA', 'Anime',
        'Strategy', 'Fantasy', 'Sci-Fi', 'Battle-Royale',
        'Card', 'Racing', 'Fighting',
        'Social', 'Sports'
    ];

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current &&
                event.target instanceof Node &&
                !containerRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };

    }, []);

    return (
        <div className='header_category' ref={containerRef}>
            <div className='transform' onClick={toggleDropdown}>
                Games List <ArrowDownIcon />
            </div>
            {isOpen && (
                <ul className='header_dropdown'>
                    {options.map((option, index) => (
                        <li key={index} className='header_dropdown_item' onClick={() => handleOptionClick(option)}>
                            <NavLink to={'/' + option}>{option}</NavLink>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default DropdownButton;