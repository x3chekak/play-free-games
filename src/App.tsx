import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header/Header.js'
import MainPage from './components/MainPage/MainPage.js'
import GamesPage from './components/GamesPage/GamesPage.js'
import GameInfo from './components/GameInfo/GameInfo.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import GameSearch from './components/GameSearch/GameSearch.js'
import {FetchError} from './components/FetchError/FetchError.tsx'
import type { GameType } from './types.js'

const url: string = 'https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=polularity';
const urlRelease: string = 'https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=release-date';
const options: RequestInit = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': '86d52b514dmsh56034273078d113p103c37jsnb29047083b2d',
    'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
  }
};

const App: React.FC = () => {

  const [gamesList, setGamesList] = useState<GameType[] | null>(null);
  const [gamesListRelease, setGamesListRelease] = useState<GameType[] | null>(null)
  const [errorGames, setErrorGames] = useState<boolean>(false);

  async function getGames(): Promise<void> {
    try {
      const response = await fetch(url, options);
      const result: GameType[] = await response.json();
      setGamesList(result)
      console.log(result)
    } catch (error) {
      setErrorGames(!errorGames);
      console.error(error);
    }
  }

  async function getGamesSortedByRelease(): Promise<void> {
    try {
      const response = await fetch(urlRelease, options);
      const result: GameType[] = await response.json();
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
          <Route path='/games/:genre' element={<GamesPage />} />
          <Route path='/:id?' element={<GameInfo />} />
          <Route path='/search' element={<GameSearch gamesList={gamesList} />} />
        </Routes>
      </BrowserRouter>
    )
  }

  if (errorGames) {
    return (
      <BrowserRouter>
        <Header />
        <FetchError />

      </BrowserRouter>
    )
  }
}

export default App
