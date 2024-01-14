import phoneimg from "../images/chronopulse-master.webp";
import "../Css/Landing.css";

function Landing() {
    return (
        <div className="landing pt-5">
            <div className="my-container d-flex justify-content-between align-items-center">
                <div className="row justify-content-between align-items-center">
                    <div className="text col-lg-6 col-md-6 col-sm-12">
                        <h2>NEW: Our Watch Price Index, ChronoPulse</h2>
                        <a href="/#" className="text-white px-5 rounded">
                            Discover more
                        </a>
                    </div>
                    <div className="image col-lg-6 col-md-6 col-sm-12">
                        <img src={phoneimg} alt="" className="w-100" />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Landing;
