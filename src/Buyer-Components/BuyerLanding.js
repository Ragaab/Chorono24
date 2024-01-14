import "../Buyer-css/Buyer-Landing.css";
import landingimgLg from "../images/hero-dealer-lg-2x.webp";
import landingimgMd from "../images/hero-dealer-md-2x.webp";
import landingimgSm from "../images/hero-dealer-sm-2x.webp";
import landingimgXs from "../images/hero-dealer-xs-2x.webp";
import BuyerShield from "../images/vector-shield.svg";
import Arrows from "../images/arrows.svg";

function Landing() {
    return (
        <div className="buyer-landing position-relative mt-2">
            <img className="shield" src={BuyerShield} alt="" />
            <img className="arrows" src={Arrows} alt="" />
            <div className="my-container">
                <div className="text">
                    <span>Secure.</span>
                    <span>Reliable.</span>
                    <span>Free.</span>
                    <div>#chrono24buyerprotection</div>
                </div>
            </div>
            <div className="image">
                <img className="landing-img one" src={landingimgLg} alt="" />
                <img className="landing-img two" src={landingimgMd} alt="" />
                <img className="landing-img three" src={landingimgSm} alt="" />
                <img className="landing-img four" src={landingimgXs} alt="" />
            </div>
        </div>
    );
}
export default Landing;
