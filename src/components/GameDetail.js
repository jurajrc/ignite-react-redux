import React from 'react'
// Styling and Animations
import styled from 'styled-components'
import { motion } from 'framer-motion'
// Redux
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
// resize Image
import { smallImage } from '../util'
// image svg
import playstation from '../img/playstation.svg'
import steam from '../img/steam.svg'
import xbox from '../img/xbox.svg'
import nintendo from '../img/nintendo.svg'
import apple from '../img/apple.svg'
import gamepad from '../img/gamepad.svg'
// Stars Image
import starEmpty from '../img/star-empty.png'
import starFull from '../img/star-full.png'
import { fadeIn } from '../animations'


const GameDetail = ({pathId}) => {
    const history = useHistory()
    // Exit Detail
    const exitDetailHandler = (e) => {
      const element = e.target
      console.log(element);
      if(element.classList.contains("shadow")) {
          document.body.style.overflow = "auto"
          history.push("/")
      }
    }
    // Get Stars
    const getStars = () => {
      const stars = []
      const rating = Math.floor(game.rating)
      for(let i = 1; i <= 5; i++) {
          if(i <= rating) {
              stars.push(<img alt="star" key={i} src={starFull}></img>)
          } else {
            stars.push(<img alt="star" key={i} src={starEmpty}></img>)
          }
      }
      return stars
    }

    // Get Platform Images
    const getPlatform = (platform) => {
        switch(platform) {
            case "Playstation 4":
                return playstation;
            case "Xbox One":
                return xbox;
            case "PC":
                return steam;
            case "Nintendo Swich":
                return nintendo;
            case "iOS":
                return apple;
            default:
                return gamepad
        }
    }


    // Data
    const { screen, game, isLoading } = useSelector((state) => state.detail)

    return (
        <>
        {!isLoading && (
        <CardShadow className="shadow" onClick={exitDetailHandler} >
            <Detail layoutId={pathId} >
                <Stats>
                    <div className="rating">
                        <motion.h3 layoutId={`title ${pathId}`} >{game.name}</motion.h3>
                        <p>Raiting: {game.rating}</p>
                        {getStars()}
                    </div>
                    <Info>
                        <h3>Platforms</h3>
                        <Platforms>
                            {game.platforms.map(data => (
                                <img
                                    key={data.platform.id}
                                    src={getPlatform(data.platform.name)}
                                    alt={data.platform.name}
                                ></img>
                            ))}
                        </Platforms>
                    </Info>
                </Stats>
                <Media>
                    <motion.img layoutId={`image ${pathId}`} src={smallImage(game.background_image, 1280) } alt={game.background_image} />
                </Media>
                <Description>
                    <p>{game.description_raw}</p>
                </Description>
                <div className="gallery">
                    {screen.results.map(screen => (
                        <img src={smallImage(screen.image, 1280)} key={screen.id} alt={screen.image} />
                    ))}
                </div>
                <Back variants={fadeIn} initial="hidden" animate="show" >
                    <p className="shadow">Back</p>
                </Back>
            </Detail>
        </CardShadow>
        )}
        </ >
    );
};

const CardShadow = styled(motion.div)`
    width: 100%;
    min-height: 100vh;
    overflow-y: scroll;
    background: rgba(0,0,0,0.5);
    position: fixed;
    left: 0;
    top: 0;
    z-index: 10;
    cursor: alias;
    
    &::-webkit-scrollbar{
        width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #ff7676;
    }
    &::-webkit-scrollbar-track {
        background-color: white;
    }
    @media (max-width: 480px) {
        overflow-x: hidden;
    }
`
const Detail = styled(motion.div)`
    width: 80%;
    border-radius: 1rem;
    padding: 2rem 5%;
    background: white;
    position: absolute;
    left: 10%;
    color: black;
    cursor: default;
    
    img {
        width: 100%;
    }
    @media (max-width: 480px) {
        width: 100%;
        border-radius: 0rem;
        padding: 1rem 0rem;
        left: 0%;
    }

`
const Stats = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    .rating {
        align-items: center;
    }
    img {
        width: 2rem;
        height: 2rem;
        display: inline;

        @media (max-width: 700px) {
        width: 1.5rem;
        height: 1.5rem;
      }
    }
    
    @media (max-width: 480px) {
        flex-direction: column;
        align-items: center;
        p{
            font-size: 0.8rem;
            padding: 0rem 1rem;
        }
        img {
            width: 1.5rem;
            height: 1.5rem;
        }
    }
`
const Info = styled(motion.div)`
    text-align: center;
`
const Platforms = styled(motion.div)`
    display: flex;
    justify-content: space-evenly;
    h3 {
        margin-left: 1.5rem;
    }
    img {
        margin-left: 2rem;
        @media (max-width: 700px) {
        margin-left: 1rem;
        width: 1.5rem;
        height: 1.5rem;
      }
    }
`
const Media = styled(motion.div)`
    margin-top: 5rem;
    img {
        width: 100%;
    }
    @media (max-width: 480px) {
        margin-top: 2rem;
      }
`
const Description = styled(motion.div)`
    margin: 5rem 0rem;
    p {
        font-size: 1rem;
    }
    @media (max-width: 480px) {
        margin: 2rem 0rem;
        p {
            padding: 0 1rem;
        }
    }
`
const Back = styled(motion.div)`
    position: fixed;
    right: 1rem;
    bottom: 1rem;
    width: 3rem;
    height: 3rem;
    background: #000000b3;
    border-radius: 50%;
    display: none;
    border: 1px solid #ffffff8b;

    p {
        color: white;
        width: 100%;
        height: 100%;
        line-height: 2.8rem;
        font-weight: bold;
        padding-left: .12rem;
    }
    @media (max-width: 480px) {
        display: block;
    }

`

export default GameDetail
