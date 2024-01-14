import "../Css/PopularModels.css";
import rolexDateJust from "../images/rolex-datejust.webp";
import rolexSubmariner from "../images/rolex-Submariner.webp";
import rolexDaytona from "../images/rolex-daytona.webp";
import omegaSpeedMaster from "../images/omegaSpeedMaster.webp";
import iwcPilot from "../images/IWC-Pilot.webp";

function PopularModels() {
    return (
        <div className="popular-models">
            <div className="my-container">
                <h2 className="mb-4">Our Most Popular Models</h2>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <a href="#/" className="model">
                            <img src={rolexDateJust} alt="" />
                            <div className="text text-start text-black ps-2">
                                <span>Rolex</span>
                                <p>Datejust</p>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <a href="#/" className="model">
                            <img src={rolexSubmariner} alt="" />
                            <div className="text text-start text-black">
                                <span>Rolex</span>
                                <p>Submariner</p>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <a href="#/" className="model">
                            <img src={rolexDaytona} alt="" />
                            <div className="text text-start text-black">
                                <span>Rolex</span>
                                <p>Daytona</p>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <a href="#/" className="model">
                            <img src={omegaSpeedMaster} alt="" />
                            <div className="text text-start text-black">
                                <span>Omega</span>
                                <p>Speedmaster</p>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <a href="#/" className="model">
                            <img src={rolexDaytona} alt="" />
                            <div className="text text-start text-black">
                                <span>Patek Philippe</span>
                                <p>Nautilus</p>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <a href="#/" className="model">
                            <img src={iwcPilot} alt="" />
                            <div className="text text-start text-black">
                                <span>IWC</span>
                                <p>Pilot</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PopularModels;
