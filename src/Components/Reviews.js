import "../Css/Reviews.css";
import { IoStar } from "react-icons/io5";
import Carousel from "react-bootstrap/Carousel";
import trustPilot from "../images/trustpilot-logo-light.svg";

function Reviews() {
    return (
        <div className="reviews">
            <div className="my-container">
                <h2 className="pt-5 pb-4">What thousands of happy customers are saying about us</h2>
                <p className="fs-4 my-2 d-flex align-items-center justify-content-center">
                    <i className="d-flex">
                        <IoStar />
                    </i>
                    TrustScore: "Excellent" with 4.8/5 stars
                </p>
                <p className="mb-3 small-text">145,357 reviews from around the globe</p>
                <div id="carouselExampleIndicators" className="carousel slide">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="d-flex justify-content-center">
                                <div className="review">
                                    <div className="review-head d-flex justify-content-between">
                                        <div>
                                            <div className="rating d-flex align-items-center">
                                                <i>
                                                    <IoStar />
                                                </i>
                                                <i>
                                                    <IoStar />
                                                </i>
                                                <i>
                                                    <IoStar />
                                                </i>
                                                <i>
                                                    <IoStar />
                                                </i>
                                                <i>
                                                    <IoStar />
                                                </i>
                                            </div>
                                        </div>
                                        today
                                    </div>
                                    <div className="text">
                                        <span>“</span>
                                        <p>Very good experience.. I order a watch from sugess it was delivered properly</p>
                                        <span>“</span>
                                    </div>
                                    <div className="user">
                                        <span className="user-img">W</span>
                                        <div className="user-info">
                                            <span>Weldon Nance</span>
                                            <span>United States Of America</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="review remove">
                                    <div className="review-head d-flex justify-content-between">
                                        <div>
                                            <div className="rating d-flex align-items-center">
                                                <i>
                                                    <IoStar />
                                                </i>
                                                <i>
                                                    <IoStar />
                                                </i>
                                                <i>
                                                    <IoStar />
                                                </i>
                                                <i>
                                                    <IoStar />
                                                </i>
                                                <i>
                                                    <IoStar />
                                                </i>
                                            </div>
                                        </div>
                                        today
                                    </div>
                                    <div className="text">
                                        <span>“</span>
                                        <p>
                                            Always a good site for research and deals. Ive been using chrono24 for a few years either for research or buying and its great! Without it i'd have most
                                            likely not found the past few watches in my...
                                        </p>
                                        <span>“</span>
                                    </div>
                                    <div className="user">
                                        <span className="user-img silver">A</span>
                                        <div className="user-info">
                                            <span>Alex</span>
                                            <span>Canada</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="review remove-2">
                                    <div className="review-head d-flex justify-content-between">
                                        <div>
                                            <div className="rating d-flex align-items-center">
                                                <i>
                                                    <IoStar />
                                                </i>
                                                <i>
                                                    <IoStar />
                                                </i>
                                                <i>
                                                    <IoStar />
                                                </i>
                                                <i>
                                                    <IoStar />
                                                </i>
                                                <i>
                                                    <IoStar />
                                                </i>
                                            </div>
                                        </div>
                                        today
                                    </div>
                                    <div className="text">
                                        <span>“</span>
                                        <p>Wonderful, I got my watch very quickly and it was better than the pictures.</p>
                                        <span>“</span>
                                    </div>
                                    <div className="user">
                                        <span className="user-img">J</span>
                                        <div className="user-info">
                                            <span>Javier Martell</span>
                                            <span>United States Of America</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="d-flex justify-content-center">
                                <div className="review">
                                    <div className="review-head d-flex justify-content-between">
                                        <div>
                                            <div className="rating d-flex align-items-center">
                                                <i>
                                                    <IoStar />
                                                </i>
                                                <i>
                                                    <IoStar />
                                                </i>
                                                <i>
                                                    <IoStar />
                                                </i>
                                                <i>
                                                    <IoStar />
                                                </i>
                                                <i>
                                                    <IoStar />
                                                </i>
                                            </div>
                                        </div>
                                        today
                                    </div>
                                    <div className="text">
                                        <span>“</span>
                                        <p>Great seller. Accurate photos, super fast shipping, and the watch is even better than anticipated.</p>
                                        <span>“</span>
                                    </div>
                                    <div className="user">
                                        <span className="user-img">W</span>
                                        <div className="user-info">
                                            <span>Don</span>
                                            <span>United States Of America</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="review remove">
                                    <div className="review-head d-flex justify-content-between">
                                        <div>
                                            <div className="rating d-flex align-items-center">
                                                <i>
                                                    <IoStar />
                                                </i>
                                                <i>
                                                    <IoStar />
                                                </i>
                                                <i>
                                                    <IoStar />
                                                </i>
                                                <i>
                                                    <IoStar />
                                                </i>
                                                <i>
                                                    <IoStar />
                                                </i>
                                            </div>
                                        </div>
                                        today
                                    </div>
                                    <div className="text">
                                        <span>“</span>
                                        <p>Very good experience.. I order a watch from sugess it was delivered properly</p>
                                        <span>“</span>
                                    </div>
                                    <div className="user">
                                        <span className="user-img silver">A</span>
                                        <div className="user-info">
                                            <span>Sumit Bhattacharyya</span>
                                            <span>India</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="review remove-2">
                                    <div className="review-head d-flex justify-content-between">
                                        <div>
                                            <div className="rating d-flex align-items-center">
                                                <i>
                                                    <IoStar />
                                                </i>
                                                <i>
                                                    <IoStar />
                                                </i>
                                                <i>
                                                    <IoStar />
                                                </i>
                                                <i>
                                                    <IoStar />
                                                </i>
                                                <i>
                                                    <IoStar />
                                                </i>
                                            </div>
                                        </div>
                                        today
                                    </div>
                                    <div className="text">
                                        <span>“</span>
                                        <p>Wonderful, I got my watch very quickly and it was better than the pictures.</p>
                                        <span>“</span>
                                    </div>
                                    <div className="user">
                                        <span className="user-img">J</span>
                                        <div className="user-info">
                                            <span>Javier Martell</span>
                                            <span>United States Of America</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    </button>
                </div>
                <div>
                    Powered by <img src={trustPilot} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Reviews;
