import "../Buyer-css/BuyerLinks.css";
import buyerShield from "../images/buyer-protection.svg";
import BuyerLink1 from "../images/Buyer-Links-1.svg";
import BuyerLink2 from "../images/Buyer-Links-2.svg";
import BuyerLink3 from "../images/Buyer-Links-3.svg";
import BuyerLink4 from "../images/Buyer-Links-4.svg";
import BuyerLink5 from "../images/Buyer-Links-5.svg";
import BuyerLink6 from "../images/Buyer-Links6.svg";
function BuyerLinks() {
    return (
        <div className="buyer-links">
            <div className="my-container">
                <div className="header">
                    <img src={buyerShield} alt="" />
                    <h2>Chrono24 Buyer Protection: What's Included</h2>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                        <div className="box d-flex align-items-center">
                            <img src={BuyerLink1} alt="" />
                            <span className="d-block">Payment via the Escrow Service</span>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                        <div className="box d-flex align-items-center">
                            <img src={BuyerLink2} alt="" />
                            <span className="d-block">Authenticity Guarantee</span>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                        <div className="box d-flex align-items-center">
                            <img src={BuyerLink3} alt="" />
                            <span className="d-block">14 Days Global money-back guarantee</span>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                        <div className="box d-flex align-items-center">
                            <img src={BuyerLink4} alt="" />
                            <span className="d-block">Strict dealer guidelines</span>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                        <div className="box d-flex align-items-center">
                            <img src={BuyerLink5} alt="" />
                            <span className="d-block">Insured shipments</span>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                        <div className="box d-flex align-items-center">
                            <img src={BuyerLink6} alt="" />
                            <span className="d-block">Chrono24's quality & security team</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default BuyerLinks;
