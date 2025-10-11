import { useNavigate } from 'react-router-dom';
import './style.css';
import type { GameType } from '../../types.ts';

const GameCard: React.FC<{game: GameType}> = ({ game }) => {

    const navigate = useNavigate();
    const handleClick = () => {
        console.log(game.id);
        navigate(`/${game.id}`)
    }

    return (
        <div onClick={handleClick} className="main__gamecard">
            <div className="main__gamecard_img">
                <img src={game.thumbnail}></img>
            </div>
            <div className="main__gamecard_body">
                <div className="main__gamecard_body_title">
                    <h4>{game.title}</h4>
                </div>
            </div>
        </div>
    )
}

export default GameCard