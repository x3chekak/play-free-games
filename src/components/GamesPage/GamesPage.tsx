import './style.css'
import GameCard from '../GameCard/GameCard.tsx'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { FetchError } from '../FetchError/FetchError.tsx';
import type { GameType } from '../../types.ts';

let url: string = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=`;
const options: RequestInit = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '86d52b514dmsh56034273078d113p103c37jsnb29047083b2d',
        'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
    }
};

const GamesPage: React.FC = () => {

    const [visibleCount, setVisibleCount] = useState<number>(12);
    const [gamesList, setGamesList] = useState<GameType[] | null>(null);
    const [errorGames, setErrorGames] = useState<boolean>(false);

    const handleScroll = () => {

        const scrollTop = window.scrollY || window.pageYOffset;
        const windowHeight = window.innerHeight;
        const docHeight = document.documentElement.scrollHeight;

        if (scrollTop + windowHeight >= docHeight - 10 && gamesList) {
            console.log('Доскроллили до низа окна');
            setVisibleCount(prev => Math.min(prev + 12, gamesList.length));
        }
    }

    const { genre } = useParams();

    async function getGames(genre: string): Promise<void> {
        try {
            const response = await fetch((url + genre), options);
            const result = await response.json();
            setGamesList(result)
            console.log(result)
        } catch (error) {
            setErrorGames(!errorGames)
            console.error(error);
        }
    }

    useEffect(() => {
        if (genre) {
        window.scrollTo(0, 0);
        setVisibleCount(12);
        getGames(genre)
        }
    }, [genre])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [gamesList])

    if (gamesList) {
        return (
            <div className="main">
                <div className="main__description">
                    <h1>Discover the best free-to-play games</h1>
                </div>
                <h2>Top Free {genre} Games</h2>
                <div className='main_content_gamesPage'>

                    {gamesList.slice(0, visibleCount).map((game, index) => (
                        <GameCard game={game} key={index} />
                    ))}
                </div>
            </div>
        )
    }

    if (errorGames) {
        return (
            <FetchError />
        )
    }
}

export default GamesPage