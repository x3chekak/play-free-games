import { useRef, useState } from 'react';
import './style.css'
import GameCard from '../GameCard/GameCard';


function GameSearch({gamesList}) {

    const [query, setQuery] = useState('');
    const [filteredGames, setFilteredGames] = useState(gamesList);
    const debounceTimeout = useRef(null);

    const handleInputChange = (e) => {
        const value = e.target.value;
        setQuery(value);

        if (debounceTimeout.current) {
            clearTimeout(debounceTimeout.current);
        }

        debounceTimeout.current = setTimeout(() => {
            // Поиск игр, которые содержат введённый текст без учёта регистра
            const filtered = gamesList.filter(game =>
                game.title.toLowerCase().includes(value.toLowerCase())
            );
            setFilteredGames(filtered);
        }, 300); // задержка 300мс
    };

    return (
        <div className='main'>
            <div >
                <h1>Найти игру</h1>
            </div>
            <input
                className='search_input'
                type="text"
                placeholder="Введите название игры"
                value={query}
                onChange={handleInputChange}
            />
            <div className='main_content_gamesPage'>
                {query && filteredGames.map((game,index) => (
                    <GameCard gamesList={filteredGames} index={index} key={index} />
                ))}
            </div>
        </div>
    );
}


export default GameSearch