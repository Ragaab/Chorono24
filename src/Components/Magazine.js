import "../Css/Magazine.css";
import magazine1 from "../images/magazine-1.webp";
import magazine2 from "../images/magazine-2.webp";
import boxInfo from "../images/box-info.webp";
import { CiClock2 } from "react-icons/ci";

function Magazine() {
    return (
        <div className="magazine">
            <div className="my-container">
                <h2 className="mb-4">Chrono24 Magazine: News and Perspectives From the Watch Industry</h2>
                <div>
                    <div className="box">
                        <img src={magazine1} alt="" />
                        <h3>Best Discontinued Watches of the Last 20 Years</h3>
                        <p>Chrono24 has been around for two decades now. In that time, we’ve seen a lot of new watches come, and many go. In this article, we’ve...</p>
                        <div className="box-info d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center">
                                <img src={boxInfo} alt="" />
                                <span>Jorg Weppelink</span>
                            </div>
                            <div>
                                <i>
                                    <CiClock2 />
                                </i>
                                8 minutes
                            </div>
                        </div>
                    </div>
                    <div className="box">
                        <img src={magazine2} alt="" />
                        <h3>Top 10: The Best Dive Watches</h3>
                        <p>Did you know that dive watches are the most popular watches out there? In a world of myriad timepieces, they’re the go-to style of wat...</p>
                        <div className="box-info d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center">
                                <img src={boxInfo} alt="" />
                                <span>Jorg Weppelink</span>
                            </div>
                            <div>
                                <i>
                                    <CiClock2 />
                                </i>
                                8 minutes
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Magazine;
