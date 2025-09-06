import './style.css'
import GameCard from '../GameCard/GameCard'
import { useEffect, useState } from 'react'


const GamesPage = ({ gamesList }) => {

    const [visibleCount, setVisibleCount] = useState(12);

    const handleScroll = () => {
        const scrollTop = window.scrollY || window.pageYOffset;
        const windowHeight = window.innerHeight;
        const docHeight = document.documentElement.scrollHeight;

        if (scrollTop + windowHeight >= docHeight - 10) {
            console.log('Доскроллили до низа окна');
            setVisibleCount(prev => Math.min(prev + 12, gamesList.length));
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    },[gamesList.length])

    return (
        <div className="main"
            >
            <div className="main__description">
                <h1>Открой для себя мир бесплатных игр</h1>
            </div>
            <div className='main_content_gamesPage'>
                {gamesList.slice(0, visibleCount).map((card, index) => (
                    <GameCard gamesList={gamesList} index={index} key={index}/>
                ))}
            </div>
        </div>
    )
}

export default GamesPage