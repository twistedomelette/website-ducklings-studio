import React from "react";
import './styles.scss'
import { ILastGame } from "./common/interfaces";
import GamepadSvg from "../../assets/img/gamepad.svg";

function GameCard({logo, name, description, date, platforms}: ILastGame) {
    return (
        <div className="game-card">
            <img src={logo} alt={name} className="game-card__img w-100"/>
            <div className="game-card__content d-flex flex-column">
                <p className="game-card__name"> { name } </p>
                <p className="game-card__description"> { description } </p>
                <div className="game-card__about d-flex">
                    <div className="game-card__date d-flex align-items-center">
                        <img src={GamepadSvg} alt="gamepad" className="game-card__icon"/>
                        <p className="game-card__date-text"> { date } </p>
                    </div>
                    <div className="game-card__platforms d-flex align-items-center">
                        <img src={GamepadSvg} alt="gamepad" className="game-card__icon"/>
                        <p className="game-card__platforms-text"> { platforms.join(', ') } </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default GameCard;