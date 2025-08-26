import { useState,useEffect } from 'react'
import './App.css'
import Header from './components/Header/Header'
import MainPage from './components/MainPage/MainPage'
import GamesPage from './components/GamesPage/GamesPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

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

  async function getGames() {
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setGamesList(result)
      console.log(result)
    } catch (error) {
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
      console.error(error);
    }
  }
  
  useEffect(() => {
    getGames()
    getGamesSortedByRelease()
  },[])

if (gamesList && gamesListRelease) {
    return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<MainPage gamesList={gamesList} gamesListRelease={gamesListRelease}/>} />
          <Route path='/games' element={<GamesPage gamesList={gamesList} />} />
        </Routes>
      </BrowserRouter>
    )
  }

}

export default App
