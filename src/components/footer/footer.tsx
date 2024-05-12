import './styles.scss';
import React from "react";
import { Link } from "react-router-dom";
import { socialNetworks } from "../../mock/social-networks";
import { routes } from "../../routes/routes";
import { ISocialNetwork } from "./common/interfaces";

function Footer() {
    return (
        <footer className="footer">
            <div className="info">

                <div className="info__ducklings">
                    <p className="info__about-us">ABOUT US</p>
                    <p className="info__about-us-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non placerat turpis. Cras tincidunt auctor dolor ut accumsan. Quisque convallis ac orci ac luctus. Fusce bibendum leo ut tellus imperdiet finibus.</p>
                    <p className="info__inc justify-self-center mt-auto">
                        © {(new Date().getFullYear())} Ducklings Studio. All rights reserved.
                    </p>
                </div>

                <div className="info__about-block">
                    <p className="info__about-us">FOLLOW US</p>
                    <div className="info__social-network">
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
                <div className="info__contact-block">
                    <p className="info__contact">CONTACT</p>
                    <p className="info__our-email"><a href="https://mail.google.com/mail/u/0/?view=cm&to=the.ducklings.studio@gmail.com&body=Dear%20Ducklings%20Studio%2C%0A%0A">the.ducklings.studio@gmail.com</a></p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;