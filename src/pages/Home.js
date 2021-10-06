import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { loadGames } from '../actions/gameActions';
// styling and animation
import styled from 'styled-components';
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import { fadeIn } from '../animations';
// componenets
import Game from '../components/Game';
import GameDetail from '../components/GameDetail';

const Home = () => {
  // get the current location
  const location = useLocation()
  const pathId = location.pathname.split("/")[2]
  const dispatch = useDispatch()
  
    useEffect(() => {
      dispatch(loadGames())
    }, [dispatch])

    // Get that data back
    const { popular, newGames, upcoming, searched } = useSelector((state) => state.games)
    
  
    return (
        <GameList variants={fadeIn} initial="hidden" animate="show" >
          <AnimateSharedLayout type="crossfade" >
            <AnimatePresence>
              {pathId && <GameDetail pathId={pathId} />}
            </AnimatePresence>
            { searched.length ? (
              <div className="searched">
                <h2>Searched Games</h2>
                <Games>
                    {searched.map((game) => (
                      <Game 
                        name={game.name} 
                        released={game.released}
                        id={game.id}
                        image={game.background_image}
                        key={game.id}
                      />
                    ))}
                </Games>
              </div>
            ) : ("") }
              <h2>Upcomings Games</h2>
              <Games>
                  {upcoming.map((game) => (
                    <Game 
                      name={game.name} 
                      released={game.released}
                      id={game.id}
                      image={game.background_image}
                      key={game.id}
                    />
                  ))}
              </Games>
              <h2>Popular Games</h2>
              <Games>
                  {popular.map((game) => (
                    <Game 
                      name={game.name} 
                      released={game.released}
                      id={game.id}
                      image={game.background_image}
                      key={game.id}
                    />
                  ))}
              </Games>
              <h2>New Games</h2>
              <Games>
                  {newGames.map((game) => (
                    <Game 
                      name={game.name} 
                      released={game.released}
                      id={game.id}
                      image={game.background_image}
                      key={game.id}
                    />
                  ))}
              </Games>
            </AnimateSharedLayout>
        </GameList>
    )
}

const GameList = styled(motion.div)`
    padding: 0rem 5rem;
    h2 {
      padding: 5rem 0rem;
      
    }
    @media (max-width: 700px) {
        align-items: center;
    }
    @media (max-width: 450px) {
        padding: 0rem 5%;
        h2 {
          padding: 2rem 0rem;
        }
    }
`
const Games = styled(motion.div)`
    min-height: 80hv;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    grid-column-gap: 3rem;
    grid-row-gap: 5rem;

    @media (max-width: 700px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      grid-row-gap: 2.5rem;
    }
`

export default Home
