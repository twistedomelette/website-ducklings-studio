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
                <section>
                    <div className="banner__content">
                        <img src={logo} alt="logo" width={256} />
                        <p className="banner__title w-100 fw-bold">
                            WELCOME TO
                        </p>
                        <a  href="steam://openurl/https://store.steampowered.com/publisher/DucklingsStudio">
                            <p className="banner__btn fw-bold">
                                STEAM PAGE
                            </p>
                        </a>
                    </div>
                </section>

                <section>

                    <div className="games">
                        <p className="games__title text-center font-weight-bold">OUR GAMES</p>
                        <div className="game">
                            <img 
                                src={selectedGame.logo}
                                alt={selectedGame.name}
                                className="game__img w-100"
                            />
                            <div className="game__content">
                                <p className="game__name"> { selectedGame.name } </p>
                                <div className="game__about ">
                                    <div className="game__date">
                                        <img 
                                            src={GamepadSvg} 
                                            alt="gamepad" 
                                            className="game__icon"
                                        />
                                        <p className="game__date-text"> { selectedGame.date } </p>
                                    </div>
                                    <div className="game__platforms">
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
                                <a href="steam://openurl/https://store.steampowered.com/app/2372400/Mushroots/">
                                    <p className="get_btn fw-bold">
                                        GET IT NOW
                                    </p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </section>
            </div>
        </>
    )
}

export default Home;