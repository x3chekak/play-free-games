import './style.css'

const GameCard = ({gamesList, index}) => {
    return (
        <div className="main__gamecard">
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