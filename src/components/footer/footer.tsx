import './styles.scss';
import React from "react";
import { Link } from "react-router-dom";
import { socialNetworks } from "../../mock/social-networks";
import { ISocialNetwork } from "./common/interfaces";
import ArrowSvg from '../../assets/img/arrow.svg'

function Footer() {
    function handleSubmit(event: React.SyntheticEvent) {
        event.preventDefault();
        console.log("Sent")
    }
    return (
        <footer className="footer d-flex">
            <div className="info d-flex">
                <div className="info__ducklings d-flex flex-column">
                    <p className="info__about-us">ABOUT US</p>
                    <p className="info__about-us-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non placerat turpis. Cras tincidunt auctor dolor ut accumsan. Quisque convallis ac orci ac luctus. Fusce bibendum leo ut tellus imperdiet finibus.</p>
                    <form onSubmit={handleSubmit} className="info__email-form input-group">
                        <input type="text" className="info__input-email w-100" placeholder="my_email@gmail.cock" />
                        <button type="submit" className="info__submit-btn">
                            <img
                                src={ArrowSvg}
                                alt="arrow"
                                className="info__email-arrow position-absolute"
                            />
                        </button>
                    </form>
                    <p className="info__inc justify-self-center mt-auto">
                        © 2023 Ducklings Studio Inc. All rights reserved.
                    </p>
                </div>
                <div className="info__explore d-flex flex-column">
                    <p className="info__explore-text">EXPLORE</p>
                    <ul>
                        <li><Link className="info__explore-link" to="/">Home</Link></li>
                        <li><Link className="info__explore-link" to="/blog">Blog</Link></li>
                    </ul>
                </div>
                <div className="info__contacts d-flex flex-column">
                    <p className="info__phone-text">Phone</p>
                    <p className="info__phone">88005553535</p>
                    <p className="info__location-text">Location</p>
                    <p className="info__location">Kharkiv, Ukraine</p>
                    <p className="info__email-text">Email</p>
                    <p className="info__our-email">the.ducklings.studio@gmail.cock</p>
                    <div className="info__social-network d-flex align-items-center">
                        {socialNetworks.map((socialNetwork: ISocialNetwork) => {
                            return (
                                <a
                                    className="social-network__link"
                                    href={socialNetwork.href}
                                    key={socialNetwork.name}
                                >
                                    <img
                                        src={socialNetwork.icon}
                                        alt={socialNetwork.name}
                                        className="social-network"
                                    />
                                </a>
                            )
                        })}
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;