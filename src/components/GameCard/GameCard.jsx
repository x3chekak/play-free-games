import { useNavigate } from 'react-router-dom';
import './style.css'

const GameCard = ({gamesList, index}) => {

    const navigate = useNavigate();
    const handleClick = () => {
        console.log(gamesList[index].id);
        navigate(`/${gamesList[index].id}`)
    }

    return (
        <div onClick={handleClick} className="main__gamecard">
            <div className="main__gamecard_img">
                <img src={gamesList[index].thumbnail}></img>
            </div>
            <div className="main__gamecard_title">
                {gamesList[index].title}
            </div>
        </div>
    )
}

export default GameCard