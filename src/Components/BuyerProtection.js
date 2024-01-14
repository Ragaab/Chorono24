import "../Css/BuyerProtection.css";
import { PiCheckThin } from "react-icons/pi";

function BuyerProtection() {
    return (
        <div className="buyer-protection">
            <div className="my-container d-flex justify-content-center align-items-center">
                <div className="content">
                    <h2>Chrono24 Buyer Protection</h2>
                    <ul>
                        <li className="mb-3">
                            <PiCheckThin />
                            Payment via the Escrow Service
                        </li>
                        <li className="mb-3">
                            <PiCheckThin />
                            Authenticity Guarantee
                        </li>
                        <li className="mb-3">
                            <PiCheckThin />
                            Global money-back guarantee
                        </li>
                        <li className="mb-3">
                            <PiCheckThin />
                            Strict dealer guidelines
                        </li>
                        <li className="mb-3">
                            <PiCheckThin />
                            Insured shipments
                        </li>
                        <li className="mb-3">
                            <PiCheckThin />
                            Chrono24's quality & security team
                        </li>
                    </ul>
                    <a href="#/">Learn more about security on chrono24</a>
                </div>
                <div className="image"></div>
            </div>
        </div>
    );
}

export default BuyerProtection;
