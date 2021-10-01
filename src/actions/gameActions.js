import axios from "axios";
import { popularGamesURL, upcomingGamesURL, newGamesURL } from '../api'

// Action Create

export const loadGames = () => async (dispatch) => {
  // FETCH  AXION
  const popularData = await axios.get(popularGamesURL())
  const newGamesData = await axios.get(newGamesURL())
  const upcomingGamesData = await axios.get(upcomingGamesURL())
  dispatch({
      type: "FETCH_GAMES",
      payload: {
          popular: popularData.data.results,
          newGames: newGamesData.data.results,
          upcoming: upcomingGamesData.data.results,
      }
  })
}