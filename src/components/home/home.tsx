import React, { useState } from "react";
import './styles.scss'
import GamepadSvg from "../../assets/img/gamepad.svg";
import logo from "../../assets/img/Ducklings_Studio_logo.svg";
import { ourGames } from "../../mock/games";
import Footer from "../footer/footer";
import Background from "./background";

function Home() {
    const [selectedGame, setSelectedGame] = useState(ourGames[0]);

    return (
        <>
            <Background/>
            <div className="homepage">
                <div className="banner__content d-flex flex-column">
                    <img src={logo} alt="logo" width={256} />
                    <p className="banner__title w-100 fw-bold">
                        WELCOME TO
                    </p>
                    <button type="button" className="banner__btn fw-bold">
                        OUR GAMES
                    </button>
                </div>
                <div className="games d-flex flex-column align-items-center">
                    <p className="games__title text-center font-weight-bold">OUR GAMES</p>
                    <div className="game d-flex">
                        <img 
                            src={selectedGame.logo}
                            alt={selectedGame.name}
                            className="game__img w-100"
                        />
                        <div className="game__content d-flex flex-column">
                            <p className="game__name"> { selectedGame.name } </p>
                            <div className="game__about d-flex">
                                <div className="game__date d-flex align-items-center">
                                    <img 
                                        src={GamepadSvg} 
                                        alt="gamepad" 
                                        className="game__icon"
                                    />
                                    <p className="game__date-text"> { selectedGame.date } </p>
                                </div>
                                <div className="game__platforms d-flex align-items-center">
                                    <img 
                                        src={GamepadSvg} 
                                        alt="gamepad" 
                                        className="game__icon"
                                    />
                                    <p className="game__platforms-text">
                                        { selectedGame.platforms.join(', ') } </p>
                                </div>
                            </div>
                            <p className="game__description" dangerouslySetInnerHTML={{__html: selectedGame.description}} />
                            <button type="button" className="get__btn fw-bold">
                                GET IT NOW
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home;