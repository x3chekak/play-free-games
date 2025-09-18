import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import './style.css'


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

    const { id } = useParams();

    async function getGameInfo(id) {
        try {
            const response = await fetch((url + id), options);
            const result = await response.json();
            setGameInfo(result)
            console.log(result)
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getGameInfo(id);
    }, [id]);

    if (gameInfo) {
        return (
            <div className="game-info_main">
                <div className="game-info_main_left-block">
                    <div className="game-info_main_left-block_img">
                        <img src={gameInfo.thumbnail}></img>
                    </div>
                    <div className="game-info_main_left-block_download">
                        <button>play now</button>
                    </div>
                </div>

                <div className="game-info_main_right-block">

                    <div className="game-info_main_right-block_title">
                        <h1>{gameInfo.title}</h1>
                    </div>

                    <div className="game-info_main_right-block_description">
                        <h1>About {gameInfo.title}</h1>
                        {gameInfo.description}
                    </div>

                    <div className="game-info_main_right-block_additional-info">
                        <h1>Additional information</h1>
                        <div className="game-info_main_right-block_additional-info_items">
                            <div className="game-info_main_right-block_additional-info_items_item">
                                Title <br></br>
                                {gameInfo.title}
                            </div>
                            <div className="game-info_main_right-block_additional-info_items_item">
                                Developer <br></br>
                                {gameInfo.developer}
                            </div>
                            <div className="game-info_main_right-block_additional-info_items_item">
                                Publisher <br></br>
                                {gameInfo.publisher}
                            </div>
                            <div className="game-info_main_right-block_additional-info_items_item">
                                Release Date <br></br>
                                {gameInfo.release_date}
                            </div>
                            <div className="game-info_main_right-block_additional-info_items_item">
                                Genre <br></br>
                                {gameInfo.genre}
                            </div>
                            <div className="game-info_main_right-block_additional-info_items_item">
                                Platform <br></br>
                                {gameInfo.platform}
                            </div>
                        </div>
                    </div>

                    <div className="game-info_main_right-block_screenshots">
                        <h1>{gameInfo.title} Screenshots</h1><br></br>
                        {gameInfo.screenshots.map((item,index) => (
                            <img style={{width: '200px', height: '100px', marginRight: '15px'}} src={item.image} key={index}></img>
                        ))}
                    </div>

                    <div className="game-info_main_right-block_minimum-system-requirements">
                        <h1>Minimum System Requirements</h1><br></br>
                        <div className="game-info_main_right-block_additional-info_items">
                            <div className="game-info_main_right-block_additional-info_items_item">
                                OS <br></br>
                                {gameInfo.minimum_system_requirements.os}
                            </div>
                            <div className="game-info_main_right-block_additional-info_items_item">
                                Processor <br></br>
                                {gameInfo.minimum_system_requirements.processor}
                            </div>
                            <div className="game-info_main_right-block_additional-info_items_item">
                                Memory <br></br>
                                {gameInfo.minimum_system_requirements.memory}
                            </div>
                            <div className="game-info_main_right-block_additional-info_items_item">
                                Graphics <br></br>
                                {gameInfo.minimum_system_requirements.graphics}
                            </div>
                            <div className="game-info_main_right-block_additional-info_items_item">
                                Storage <br></br>
                                {gameInfo.minimum_system_requirements.storage}
                            </div>
                            <div className="game-info_main_right-block_additional-info_items_item">
                                Platform <br></br>
                                {gameInfo.platform}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default GameInfo