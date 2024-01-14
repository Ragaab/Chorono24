import "../Css/Footer.css";
import { LuPhone } from "react-icons/lu";
import chorno24 from "../images/logo-single-positive.svg";
import dealersApp from "../images/dealer-app-icon.svg";
import { FaCcVisa } from "react-icons/fa";
import { SiMastercard } from "react-icons/si";
import { SiAmericanexpress } from "react-icons/si";
import { LuFacebook } from "react-icons/lu";
import { PiYoutubeLogoThin } from "react-icons/pi";
import { PiTwitterLogoThin } from "react-icons/pi";
import { PiPinterestLogoLight } from "react-icons/pi";
import { CiInstagram } from "react-icons/ci";

function Footer() {
    return (
        <div className="footer">
            <div className="my-container">
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                        <span>Buy on Chrono24</span>
                        <ul>
                            <li>
                                <a href="#/">Chrono24 Buyer Protection</a>
                            </li>
                            <li>
                                <a href="#/">Payment via an escrow account</a>
                            </li>
                            <li>
                                <a href="#/">Authenticity Guarantee</a>
                            </li>
                            <li>
                                <a href="#/">Easy Returns</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                        <span>About Chrono24</span>
                        <ul>
                            <li>
                                <a href="#/">About us</a>
                            </li>
                            <li>
                                <a href="#/">Jobs</a>
                            </li>
                            <li>
                                <a href="#/">Press</a>
                            </li>
                            <li>
                                <a href="#/">Legal Details</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                        <span> Personalized support</span>
                        <ul>
                            <li>
                                <a href="#/">
                                    <LuPhone />
                                    +49 721 96693-900
                                </a>
                            </li>
                            <li>
                                <a href="#/">Frequently Asked Questions</a>
                            </li>
                            <li>
                                <a href="#/">Contact</a>
                            </li>
                            <li>
                                <a href="#/">Accessibility</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row apps-payment">
                    <div className="apps col-lg-6 col-md-6 col-sm-12 col-12">
                        <p>Chrono24 Apps</p>
                        <div className="d-flex align-items-center">
                            <a href="#/" className="me-4">
                                <img src={chorno24} alt="" />
                                <span>Chrono24</span>
                            </a>
                            <a href="#/" className="ms-2">
                                <img src={dealersApp} alt="" />
                                <span>Chrono24 for Dealers</span>
                            </a>
                        </div>
                    </div>
                    <div className="payment col-lg-6 col-md-6 col-sm-12 col-12">
                        <p>Payment Methods</p>
                        <i className="visa">
                            <FaCcVisa />
                        </i>
                        <i className="master-card">
                            <SiMastercard />
                        </i>
                        <i className="american-express">
                            <SiAmericanexpress />
                        </i>
                    </div>
                </div>
                <div className="footer-links d-flex justify-content-between align-items-center">
                    <ul className="d-flex justify-content-between align-items-center">
                        <li className="me-3">
                            <a href="#/">Data Privacy Policy</a>
                        </li>
                        <li className="me-3">
                            <a href="#/">Manage Cookies</a>
                        </li>
                        <li className="me-3">
                            <a href="#/">Terms & Conditions</a>
                        </li>
                        <li>
                            <a href="#/">Sitemap</a>
                        </li>
                    </ul>
                    <div>
                        <i>
                            <a href="#/">
                                <LuFacebook />
                            </a>
                        </i>
                        <i>
                            <a href="#/">
                                <PiYoutubeLogoThin />
                            </a>
                        </i>
                        <i>
                            <a href="#/">
                                <PiTwitterLogoThin />
                            </a>
                        </i>
                        <i>
                            <a href="#/">
                                <PiPinterestLogoLight />
                            </a>
                        </i>
                        <i>
                            <a href="#/">
                                <CiInstagram />
                            </a>
                        </i>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
