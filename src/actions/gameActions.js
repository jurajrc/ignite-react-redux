import axios from "axios";
import { popularGamesURL } from '../api'

// Action Create

export const loadGames = () => async (dispatch) => {
  // FETCH  AXION
  const popularData = await axios.get(popularGamesURL())
  dispatch({
      type: "FETCH_GAMES",
      payload: {
          popular: popularData.data.results,
      }
  })
}