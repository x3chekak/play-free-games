import './style.css'
import GameCard from '../GameCard/GameCard'
import ReleaseGameCard from '../ReleaseGameCard/ReleaseGameCard'

const MainPage = ({gamesList, gamesListRelease}) => {
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
                </div>
            </div>
            <div className='asdasd'>
                <div className="main__newreleases">
                    <h1>Новые релизы</h1>
                    <div className="main__releasegames">
                        <ReleaseGameCard gamesListRelease={gamesListRelease} index={0}/>
                        <ReleaseGameCard gamesListRelease={gamesListRelease} index={1} />
                        <ReleaseGameCard gamesListRelease={gamesListRelease} index={2} />
                        <ReleaseGameCard gamesListRelease={gamesListRelease} index={3} />
                        <ReleaseGameCard gamesListRelease={gamesListRelease} index={4} />
                        <ReleaseGameCard gamesListRelease={gamesListRelease} index={5} />
                    </div>
                </div>
                <div className="main__mostplayed">
                    <h1>Мост плэйд</h1>
                        <GameCard gamesList={gamesList} index={0} />
                        <GameCard gamesList={gamesList} index={1} />
                        <GameCard gamesList={gamesList} index={2} />
                    </div>
            </div>
            </div>
    )
}


export default MainPage