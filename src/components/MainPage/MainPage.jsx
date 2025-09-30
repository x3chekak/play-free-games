import './style.css'
import GameCard from '../GameCard/GameCard'
import ReleaseGameCard from '../ReleaseGameCard/ReleaseGameCard'

const MainPage = ({gamesList, gamesListRelease}) => {
    return (
        <div className="main">
            <div className="main__description">
                <h1>Discover the best free-to-play games</h1>
            </div>
            <div className="trending_games">
                <h2>Trending Games</h2>
                <div className="main__content">
                { gamesList.slice(0,3).map((game,index) => (
                  <GameCard game={game} key={index}/>  
                ))}
                </div>
            </div>
            <div className='asdasd'>
                <div className="main__newreleases">
                    <h2>New Releases</h2>
                    <div className="main__releasegames">
                        {gamesListRelease.slice(0, 6).map((game, index) => (
                            <ReleaseGameCard game={game} key={index} />
                        ))}
                    </div>
                </div>
                <div className='qweqweqwe'>
                    <h2>Most Played</h2>
                    <div className="main__mostplayed">
                        {gamesList.slice(0, 3).map((game, index) => (
                            <GameCard game={game} key={index} />
                        ))}
                    </div>
                </div>
            </div>
            </div>
    )
}


export default MainPage