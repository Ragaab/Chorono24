import "../Buyer-css/BuyerServices.css";
import BuyerServices1 from "../images/Buyer-Service-1.webp";
import BuyerServicesMobile1 from "../images/Buyer-service-mobile-1.webp";
import BuyerServices2 from "../images/Buyer-Service-2.webp";
import BuyerServicesMobile2 from "../images/Buyer-Service-Mobile-2.webp";
import BuyerServices3 from "../images/Buyer-Service-3.webp";
import BuyerServicesMobile3 from "../images/Buyer-Service-Mobile-3.webp";
import BuyerServices4 from "../images/Buyer-Service-4.webp";
import BuyerServicesMobile4 from "../images/Buyer-Service-Mobile-4.webp";
import BuyerServices5 from "../images/Buyer-Service-5.webp";
import BuyerServicesMobile5 from "../images/Buyer-Service-Mobile-5.webp";
import BuyerServices6 from "../images/Buyer-Service-6.webp";
import BuyerServicesMobile6 from "../images/Buyer-Service-Mobile-6.webp";
import BuyerReturn1 from "../images/Buyer-Returns-1.svg";
import BuyerReturn2 from "../images/Buyer-Returns-2.svg";
import BuyerReturn3 from "../images/Buyer-Returns-3.svg";
function BuyerServices() {
    return (
        <div className="buyer-services">
            <div className="my-container">
                <div className="service normal d-flex align-items-center">
                    <div className="text">
                        <h2>Payment via the Escrow Service</h2>
                        <p>
                            Thanks to the Chrono24 Escrow Service, your payment is fully covered. We keep your money in our escrow account for 14 days after delivery of your watch. Thus, you have time
                            to carefully inspect your order knowing your money is safe in our account. Only then do we transfer payout to the dealer.
                        </p>
                    </div>
                    <img src={BuyerServices1} alt="" />
                    <img src={BuyerServicesMobile1} alt="" />
                </div>
                <div className="service reverse d-flex align-items-center">
                    <img src={BuyerServices2} alt="" />
                    <img src={BuyerServicesMobile2} alt="" />
                    <div className="text">
                        <h2>Payment via the Escrow Service</h2>
                        <p>
                            Thanks to the Chrono24 Escrow Service, your payment is fully covered. We keep your money in our escrow account for 14 days after delivery of your watch. Thus, you have time
                            to carefully inspect your order knowing your money is safe in our account. Only then do we transfer payout to the dealer.
                        </p>
                    </div>
                </div>
                <div className="service normal d-flex align-items-center">
                    <div className="text">
                        <h2>Payment via the Escrow Service</h2>
                        <p>
                            Thanks to the Chrono24 Escrow Service, your payment is fully covered. We keep your money in our escrow account for 14 days after delivery of your watch. Thus, you have time
                            to carefully inspect your order knowing your money is safe in our account. Only then do we transfer payout to the dealer.
                        </p>
                    </div>
                    <img src={BuyerServices3} alt="" />
                    <img src={BuyerServicesMobile3} alt="" />
                </div>
                <div className="row">
                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="box">
                            <img src={BuyerReturn1} alt="" />
                            <span className="d-block">1. Contact our support team</span>
                            <p>
                                Call +49 721 96693-920 or email our support team within 14 days of receiving the watch. We will document and confirm your wish to return your order and guide you
                                through the next steps.
                            </p>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="box">
                            <img src={BuyerReturn2} alt="" />
                            <span className="d-block">2. Ship the watch back to the dealer</span>
                            <p>Send the watch back fully insured and in its original packaging. You will be responsible for the return shipping costs in most cases.</p>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="box">
                            <img src={BuyerReturn3} alt="" />
                            <span className="d-block">3. Receive a refund of the full purchase price</span>
                            <p>Finally, we will refund you the full purchase price and the initial shipping costs.</p>
                        </div>
                    </div>
                </div>
                <div className="service reverse d-flex align-items-center">
                    <img src={BuyerServices4} alt="" />
                    <img src={BuyerServicesMobile4} alt="" />
                    <div className="text">
                        <h2>Payment via the Escrow Service</h2>
                        <p>
                            Thanks to the Chrono24 Escrow Service, your payment is fully covered. We keep your money in our escrow account for 14 days after delivery of your watch. Thus, you have time
                            to carefully inspect your order knowing your money is safe in our account. Only then do we transfer payout to the dealer.
                        </p>
                    </div>
                </div>
                <div className="service normal d-flex align-items-center">
                    <div className="text">
                        <h2>Payment via the Escrow Service</h2>
                        <p>
                            Thanks to the Chrono24 Escrow Service, your payment is fully covered. We keep your money in our escrow account for 14 days after delivery of your watch. Thus, you have time
                            to carefully inspect your order knowing your money is safe in our account. Only then do we transfer payout to the dealer.
                        </p>
                    </div>
                    <img src={BuyerServices5} alt="" />
                    <img src={BuyerServicesMobile5} alt="" />
                </div>
                <div className="service reverse d-flex align-items-center">
                    <img src={BuyerServices6} alt="" />
                    <img src={BuyerServicesMobile6} alt="" />
                    <div className="text">
                        <h2>Payment via the Escrow Service</h2>
                        <p>
                            Thanks to the Chrono24 Escrow Service, your payment is fully covered. We keep your money in our escrow account for 14 days after delivery of your watch. Thus, you have time
                            to carefully inspect your order knowing your money is safe in our account. Only then do we transfer payout to the dealer.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default BuyerServices;
