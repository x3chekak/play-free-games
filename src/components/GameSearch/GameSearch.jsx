import { useRef, useState, useEffect } from 'react';
import './style.css'
import GameCard from '../GameCard/GameCard';


function GameSearch({gamesList}) {

    const [query, setQuery] = useState('');
    const [filteredGames, setFilteredGames] = useState([]);

    useEffect(() => {
        // Создаём таймер дебаунса
        const handler = setTimeout(() => {
            if (query.trim() === '') {
                setFilteredGames(gamesList);
            } else {
                const filtered = gamesList.filter(game =>
                    game.title.toLowerCase().includes(query.toLowerCase())
                );
                setFilteredGames(filtered);
            }
        }, 500);

        // Очистка таймера при изменении query или unmount
        return () => {
            clearTimeout(handler);
        };
    }, [query, gamesList]);

    return (
        <div className='main'>
            <div className='weqweqeqwe'>
                <h1>Find game</h1>
            
            <input
                className='search_input'
                type="text"
                placeholder="Search for games"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            </div>
            <div className='main__content'>
                {filteredGames.map((game,index) => (
                    <GameCard game={game} key={index} />
                ))}
            </div>
        </div>
    );
}


export default GameSearch