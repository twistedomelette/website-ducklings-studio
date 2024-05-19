import React, { useState } from "react";
import './styles.scss';
import GamepadSvg from "../../assets/img/gamepad.svg";
import logo from "../../assets/img/Ducklings_Studio_logo.svg";
import { ourGames } from "../../mock/games";
import {Footer, PhoneFooter} from "../footer/footer";
import Background from "./background";

function Home() {
    const [selectedGame, setSelectedGame] = useState(ourGames[0]);

    const openSteamLinks = (url: string) => {
        const steamLink = `steam://openurl/${url}`;
        const webLink = url;

        // Спрашиваем пользователя, хочет ли он открыть ссылку в приложении Steam
        const userConfirmed = window.confirm("Would you like to open this in the Steam application?");

        if (userConfirmed) {
            // Если пользователь соглашается, открываем Steam-клиент
            window.location.href = steamLink;
        } else {
            // Если пользователь отказывается, открываем веб-страницу
            window.open(webLink, '_blank');
        }
    };

    return (
        <>
            <Background />
            <div className="homepage">
                <section>
                    <div className="banner__content">
                        <img src={logo} alt="logo" width={256} />
                        <p className="banner__title w-100 fw-bold">
                            WELCOME TO
                        </p>
                        <button 
                            className="banner__btn fw-bold"
                            onClick={() => openSteamLinks('https://store.steampowered.com/publisher/DucklingsStudio')}
                        >
                            STEAM PAGE
                        </button>
                    </div>
                </section>

                <section className="games-section">
                    <div className="games">
                        <p className="games__title text-center font-weight-bold">OUR GAMES</p>
                        <div className="game">
                            <img 
                                src={selectedGame.logo}
                                alt={selectedGame.name}
                                className="game__img"
                            />
                            <div className="game__content">
                                <div>
                                    <p className="game__name"> {selectedGame.name} </p>
                                    <div className="game__about">
                                        <div className="game__date">
                                            <img 
                                                src={GamepadSvg} 
                                                alt="gamepad" 
                                                className="game__icon"
                                            />
                                            <p className="game__date-text"> {selectedGame.date} </p>
                                        </div>
                                        <div className="game__platforms">
                                            <img 
                                                src={GamepadSvg} 
                                                alt="gamepad" 
                                                className="game__icon"
                                            />
                                            <p className="game__platforms-text">
                                                {selectedGame.platforms.join(', ')}
                                            </p>
                                        </div>
                                    </div>
                                    <p className="game__description game__main-description" dangerouslySetInnerHTML={{ __html: selectedGame.main_description }} />
                                    <p className="game__description" dangerouslySetInnerHTML={{ __html: selectedGame.description }} />
                                </div>
                                <button 
                                    className="link_btn get_btn fw-bold"
                                    onClick={() => openSteamLinks('https://store.steampowered.com/app/2372400/Mushroots/')}
                                >
                                    GET IT NOW
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="pc-footer">
                        <Footer />
                    </div>
                </section>

                <section className="phone-footer">
                    <PhoneFooter />
                </section>
            </div>
        </>
    );
}

export default Home;
