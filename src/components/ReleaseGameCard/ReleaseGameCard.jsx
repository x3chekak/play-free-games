import './style.css'

const ReleaseGameCard = ({ gamesListRelease, index }) => {
    return (
        <div className="main__releasegames_card">
            <div className="main__releasegames_card-img">
                <img src={gamesListRelease[index].thumbnail}></img>
            </div>
            <div className="main__releasegames_card-info">
                <div className="main__releasegames_card-info_title">
                    {gamesListRelease[index].title}
                </div>
                <div className="main__releasegames_card-info_description">
                    {gamesListRelease[index].short_description}
                </div>
                <div className="main__releasegames_card-info_category">
                    {gamesListRelease[index].genre}
                </div>
            </div>
        </div>
    )
}

export default ReleaseGameCard