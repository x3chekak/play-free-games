import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import './style.css'
import FetchError from "../FetchError/FetchError";


let url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=`;
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '86d52b514dmsh56034273078d113p103c37jsnb29047083b2d',
        'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
    }
};

const GameInfo = () => {

    const [gameInfo, setGameInfo] = useState(null);
    const [errorGames, setErrorGames] = useState(false);

    const { id } = useParams();

    async function getGameInfo(id) {
        try {
            const response = await fetch((url + id), options);
            const result = await response.json();
            setGameInfo(result)
            console.log(result)
        } catch (error) {
            setErrorGames(!errorGames)
            console.error(error);
        }
    }

    //--------------------modal-------------------------
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState('');

    const handleImageClick = (src) => {
        setCurrentImage(src);
        setIsModalOpen(true);
    };

    const handleClose = () => {
        setIsModalOpen(false);
    };
    //---------------------------------------------------

    useEffect(() => {
        getGameInfo(id);
    }, [id]);

    if (gameInfo) {
        return (
            <div className="main">
                <div className="main__container">
                    <div className="game-info_main_left-block">
                        <div className="game-info_main_left-block_img">
                            <img src={gameInfo.thumbnail}></img>
                        </div>
                        <div className="game-info_main_left-block_download">
                            <button className="awdawdadw"><a href={gameInfo.game_url} target="_blank">PLAY NOW</a></button>
                        </div>
                    </div>

                    <div className="game-info_main_right-block">

                        <div className="game-info_main_right-block_title">
                            <h1>{gameInfo.title}</h1>
                        </div>

                        <div className="game-info_main_right-block_description">
                            <h2>About {gameInfo.title}</h2>
                            {gameInfo.description}
                        </div>

                        <div className="game-info_main_right-block_additional-info">
                            <h2>Additional information</h2>
                            <div className="game-info_main_right-block_additional-info_items">
                                <div className="game-info_main_right-block_additional-info_items_item">
                                    <span>Title</span> <br></br>
                                    <p>{gameInfo.title}</p>
                                </div>
                                <div className="game-info_main_right-block_additional-info_items_item">
                                    <span>Developer</span> <br></br>
                                    <p>{gameInfo.developer}</p>
                                </div>
                                <div className="game-info_main_right-block_additional-info_items_item">
                                    <span>Publisher</span> <br></br>
                                    <p>{gameInfo.publisher}</p>
                                </div>
                                <div className="game-info_main_right-block_additional-info_items_item">
                                    <span>Release Date</span> <br></br>
                                    <p>{gameInfo.release_date}</p>
                                </div>
                                <div className="game-info_main_right-block_additional-info_items_item">
                                    <span>Genre</span> <br></br>
                                    <p>{gameInfo.genre}</p>
                                </div>
                                <div className="game-info_main_right-block_additional-info_items_item">
                                    <span>Platform</span> <br></br>
                                    <p>{gameInfo.platform}</p>
                                </div>
                            </div>
                        </div>
                        <h2>{gameInfo.title} Screenshots</h2><br></br>
                        <div className="game-info_main_right-block_screenshots">
                            {gameInfo.screenshots.map((item, index) => (
                                <div className="game-info_main_right-block_screenshots_item" key={index} onClick={() => handleImageClick(item.image) }>
                                <img src={item.image} ></img>
                                </div>
                            ))}

                            {/* Модальное окно */}
                            {isModalOpen && (
                                <div className="modal"
                                    onClick={handleClose}
                                >
                                    <div className="modal_image">
                                        <img
                                            src={currentImage}
                                            alt="Enlarged"
                                            onClick={(e) => e.stopPropagation()}
                                        />
                                        <button
                                            onClick={handleClose}
                                        >
                                            &times;
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="game-info_main_right-block_minimum-system-requirements">
                            <h2>Minimum System Requirements</h2><br></br>
                            <div className="game-info_main_right-block_additional-info_items">
                                <div className="game-info_main_right-block_additional-info_items_item">
                                    <span>OS</span> <br></br>
                                    <p>{gameInfo.minimum_system_requirements.os}</p>
                                </div>
                                <div className="game-info_main_right-block_additional-info_items_item">
                                    <span>Processor</span> <br></br>
                                    <p>{gameInfo.minimum_system_requirements.processor}</p>
                                </div>
                                <div className="game-info_main_right-block_additional-info_items_item">
                                    <span>Memory</span> <br></br>
                                    <p>{gameInfo.minimum_system_requirements.memory}</p>
                                </div>
                                <div className="game-info_main_right-block_additional-info_items_item">
                                    <span>Graphics</span> <br></br>
                                    <p>{gameInfo.minimum_system_requirements.graphics}</p>
                                </div>
                                <div className="game-info_main_right-block_additional-info_items_item">
                                    <span>Storage</span> <br></br>
                                    <p>{gameInfo.minimum_system_requirements.storage}</p>
                                </div>
                                <div className="game-info_main_right-block_additional-info_items_item">
                                    <span>Platform</span> <br></br>
                                    <p>{gameInfo.platform}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
    if (errorGames) {
        return (
            <div className="main">
                <FetchError />
            </div>
        )
    }
}

export default GameInfo