import React, { useState } from "react";
import './styles.scss'
import GamepadSvg from "../../assets/img/gamepad.svg";
import { futureGames, lastGames } from "../../mock/games";
import Footer from "../footer/footer";
import Header from "../header/header";
import BannerSvg from "../../assets/img/banner.svg"
import { ILastGame } from "./common/interfaces";
import GameCard from "./game-card";
import Gamepad from "../../assets/img/gamepad.svg"
function Home() {
    const [selectedGame, setSelectedGame] = useState(futureGames[0]);

    return (
        <>
            <Header />
            <div className="homepage">
                <div className="banner__content d-flex flex-column">
                    <p className="banner__title w-100 fw-bold">
                        WELCOME TO DUCKLINGS GAMES STUDIO
                    </p>
                    <button 
                        type="button" 
                        className="banner__btn fw-bold"
                    >
                        OUR GAMES
                    </button>
                </div>
                <img src={BannerSvg} alt="Banner" className="banner__img w-100"/>
                <div className="last-games d-flex flex-column">
                    <p className="last-games__title text-center font-weight-bold">LATEST GAMES</p>
                    <div className="last-games__cards d-flex justify-content-between">
                        <GameCard {...lastGames[0]} />
                        <GameCard {...lastGames[1]} />
                        <GameCard {...lastGames[2]} />
                    </div>
                </div>
                <div className="achievements d-flex flex-column">
                    <p className="achievements__title text-center font-weight-bold">OUR ACHIEVEMENTS</p>
                    <div className="achievements__content d-flex justify-content-between">
                        <div 
                            className="achievements__games-developed d-flex flex-column text-center align-items-center"
                        >
                            <p className="achievements__number">100500</p>
                            <p className="achievements__topic">GAMES DEVELOPED</p>
                            <img 
                                src={Gamepad} 
                                alt="gamepad" 
                                className="achievements__icon"
                            />
                        </div>
                        <div className="achievements__team-members d-flex flex-column text-center align-items-center">
                            <img 
                                src={Gamepad} 
                                alt="gamepad" 
                                className="achievements__icon"
                            />
                            <p className="achievements__number">4.5</p>
                            <p className="achievements__topic">TEAM MEMBERS</p>
                        </div>
                        <div className="achievements__experience d-flex flex-column text-center align-items-center">
                            <p className="achievements__number">777</p>
                            <p className="achievements__topic">YEARS OF EXPERIENCE</p>
                            <img 
                                src={Gamepad} 
                                alt="gamepad" 
                                className="achievements__icon"
                            />
                        </div>
                        <div className="achievements__downloads d-flex flex-column text-center align-items-center">
                            <img 
                                src={Gamepad} 
                                alt="gamepad" 
                                className="achievements__icon"
                            />
                            <p className="achievements__number">9999M</p>
                            <p className="achievements__topic">GAMES DOWNLOADS</p>
                        </div>
                    </div>
                </div>
                <div className="future-games d-flex flex-column align-items-center">
                    <p className="future-games__title text-center font-weight-bold">FUTURE GAMES</p>
                    <div className="future-game d-flex">
                        <img 
                            src={selectedGame.logo}
                            alt={selectedGame.name}
                            className="future-game__img w-100"
                        />
                        <div className="future-game__content d-flex flex-column">
                            <p className="future-game__name"> { selectedGame.name } </p>
                            <div className="future-game__about d-flex">
                                <div className="future-game__date d-flex align-items-center">
                                    <img 
                                        src={GamepadSvg} 
                                        alt="gamepad" 
                                        className="future-game__icon"
                                    />
                                    <p className="future-game__date-text"> { selectedGame.date } </p>
                                </div>
                                <div className="future-game__platforms d-flex align-items-center">
                                    <img 
                                        src={GamepadSvg} 
                                        alt="gamepad" 
                                        className="future-game__icon"
                                    />
                                    <p className="future-game__platforms-text">
                                        { selectedGame.platforms.join(', ') } </p>
                                </div>
                            </div>
                            <p className="future-game__description"> { selectedGame.description } </p>
                            <div className="future-game__games mt-auto">
                                {futureGames.map((game: ILastGame) => {
                                    return (
                                        <button
                                            className={"future-game__btn " + (selectedGame.name === game.name ?
                                                'future-game__btn-active' : 'future-game__btn-inactive')}
                                            onClick={():void => setSelectedGame(game)}
                                            key={game.name}
                                        >
                                            {game.name.toUpperCase()}
                                        </button>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home;