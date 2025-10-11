import type { GameType } from '../../types.ts';
import './style.css'
import { useNavigate } from 'react-router-dom';


const ReleaseGameCard: React.FC<{game: GameType}> = ({ game }) => {

    const navigate = useNavigate();
    const handleClick = () => {
        console.log(game.id);
        navigate(`/${game.id}`)
    }

    return (
        <div onClick={handleClick} className="main__releasegames_card">
            <div className="main__releasegames_card-img">
                <img src={game.thumbnail}></img>
            </div>
            <div className="main__releasegames_card-info">
                <div className="main__releasegames_card-info_title">
                    <h3>{game.title}</h3>
                </div>
                <div className="main__releasegames_card-info_description">
                    <p>{game.short_description}</p>
                </div>
                <div className="main__releasegames_card-info_category">
                    <span>{game.genre}</span>
                </div>
            </div>
        </div>
    )
}

export default ReleaseGameCard