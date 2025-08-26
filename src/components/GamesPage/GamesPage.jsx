import './style.css'
import GameCard from '../GameCard/GameCard'


const GamesPage = ({ gamesList }) => {
    return (
        <div className="main">
            <div className="main__description">
                <h1>Открой для себя мир бесплатных игр</h1>
            </div>
            <div className="trending_games">
                <h1>Популярные сейчас</h1>
                <div className="main__content">
               <GameCard gamesList={gamesList} index={0} />
                <GameCard gamesList={gamesList} index={1} />
                <GameCard gamesList={gamesList} index={2} />
                    <GameCard gamesList={gamesList} index={3} />
                    <GameCard gamesList={gamesList} index={4} />
                    <GameCard gamesList={gamesList} index={5} />
                    <GameCard gamesList={gamesList} index={6} />
                    <GameCard gamesList={gamesList} index={7} />
                    <GameCard gamesList={gamesList} index={8} />
                </div>
            </div>
        </div>
    )
}

export default GamesPage