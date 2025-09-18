import './style.css'
import GameCard from '../GameCard/GameCard'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

let url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=`;
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '86d52b514dmsh56034273078d113p103c37jsnb29047083b2d',
        'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
    }
};



const GamesPage = () => {

    const [visibleCount, setVisibleCount] = useState(12);
    const [gamesList, setGamesList] = useState(null);

    const handleScroll = () => {
        
        const scrollTop = window.scrollY || window.pageYOffset;
        const windowHeight = window.innerHeight;
        const docHeight = document.documentElement.scrollHeight;

        if (scrollTop + windowHeight >= docHeight - 10) {
            console.log('Доскроллили до низа окна');
            setVisibleCount(prev => Math.min(prev + 12, gamesList.length));
        }
    }

    const { genre } = useParams();

    async function getGames(genre) {
        try {
            const response = await fetch((url + genre), options);
            const result = await response.json();
            setGamesList(result)
            console.log(result)
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        setVisibleCount(12);
        
        getGames(genre)
    }, [genre])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [gamesList])

    if (gamesList) {
        return (
            <div className="main"
            >
                <div className="main__description">
                    <h1>Открой для себя мир бесплатных игр</h1>
                </div>
                <h1>Игры в жанре {genre}</h1>
                <div className='main_content_gamesPage'>
                    
                    {gamesList.slice(0, visibleCount).map((card, index) => (
                        <GameCard gamesList={gamesList} index={index} key={index} />
                    ))}
                </div>
            </div>
        )
    }
}

export default GamesPage