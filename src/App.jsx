import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header/Header'
import MainPage from './components/MainPage/MainPage'
import GamesPage from './components/GamesPage/GamesPage'
import GameInfo from './components/GameInfo/GameInfo'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import GameSearch from './components/GameSearch/GameSearch'
import FetchError from './components/FetchError/FetchError'

const url = 'https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=polularity';
const urlRelease = 'https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=release-date';
const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': '86d52b514dmsh56034273078d113p103c37jsnb29047083b2d',
    'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
  }
};

const App = () => {

  const [gamesList, setGamesList] = useState(null);
  const [gamesListRelease, setGamesListRelease] = useState(null)
  const [errorGames, setErrorGames] = useState(false);

  async function getGames() {
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setGamesList(result)
      console.log(result)
    } catch (error) {
      setErrorGames(!errorGames);
      console.error(error);
    }
  }

  async function getGamesSortedByRelease() {
    try {
      const response = await fetch(urlRelease, options);
      const result = await response.json();
      setGamesListRelease(result)
      console.log(result)
    } catch (error) {
      setErrorGames(!errorGames);
      console.error(error);
    }
  }

  useEffect(() => {
    getGames()
    getGamesSortedByRelease()
  }, [])


  if (gamesList && gamesListRelease) {
    return (
      <BrowserRouter basename='/play-free-games'>
        <Header />
        <Routes>
          <Route path='/' element={<MainPage gamesList={gamesList} gamesListRelease={gamesListRelease} />} />
          <Route path='/games/:genre' element={<GamesPage gamesList={gamesList} />} />
          <Route path='/:id?' element={<GameInfo />} />
          <Route path='/search' element={<GameSearch gamesList={gamesList} />} />
        </Routes>
      </BrowserRouter>
    )
  }
  
  if (errorGames){
    return (
      <BrowserRouter>
        <Header />
        <FetchError />
  
      </BrowserRouter>
    )
  }
}

export default App
