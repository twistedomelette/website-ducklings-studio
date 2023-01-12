import React from "react";
import './styles.scss'
import { Link } from "react-router-dom";
import LoopSvg from "../../assets/img/loop.svg";
import BannerSvg from "../../assets/img/blog-banner.svg";
import { blogs } from "../../mock/blogs";
import { routes } from "../../routes/routes";
import Footer from "../footer/footer";
import Header from "../header/header";
import { INews } from "./common/interfaces";
function Blog() {
    function handleSubmit(event: React.SyntheticEvent) {
        event.preventDefault();
        console.log("Found")
    }

    return (
        <>
            <Header />
            <div className="blog">
                <p className="banner__title position-absolute w-100 fw-bold text-center">BLOG</p>
                <img src={BannerSvg} alt="Banner" className="banner__img w-100"/>
                <div className="blog__content d-flex justify-content-between">
                    <div className="news-cards">
                        {blogs.map((news: INews) => {
                            return (
                                <div
                                    className="news-card position-relative"
                                    key={news.id}
                                >
                                    <Link
                                        className="news-card__img-btn w-100"
                                        to={`${routes.blog.path}/${news.id}`}
                                    >
                                        <div className="news-card__date position-absolute d-flex align-items-center">
                                            <p className="news-card__date-text text-center w-100">{news.date}</p>
                                        </div>
                                        <img src={news.logo} alt="news" className="news-card__img w-100"/>
                                    </Link>
                                    <Link
                                        className="news-card__title"
                                        to={`${routes.blog.path}/${news.id}`}
                                    >
                                        {news.title}
                                    </Link>
                                    <p className="news-card__description">{news.description}</p>
                                </div>
                            )
                        })}
                    </div>
                    <div className="blog__states d-flex flex-column">
                        <form
                            onSubmit={handleSubmit}
                            className="blog__filter-form input-group position-relative d-flex align-items-center"
                        >
                            <input type="text" className="blog__input-filter w-100" placeholder="Search"/>
                            <button type="submit" className="blog__submit-btn position-absolute">
                                <img
                                    src={LoopSvg}
                                    alt="loop"
                                    className="blog__filter-loop"
                                />
                            </button>
                        </form>
                        <div className="blog__categories-block">
                            <p className="blog__categories-title">CATEGORIES</p>
                            <ul className="blog__categories-list">
                                <li className="blog__categories">Gopa</li>
                                <li className="blog__categories">NeGopa</li>
                                <li className="blog__categories">PC</li>
                                <li className="blog__categories">Android</li>
                                <li className="blog__categories">NePC</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Blog;