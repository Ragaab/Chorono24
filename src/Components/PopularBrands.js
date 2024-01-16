import "../Css/PopularBrands.css";
import { Link } from "react-router-dom";

function PopularBrands() {
    return (
        <div className="popular-brands">
            <div className="my-container">
                <h2 className="m-0">Popular brands</h2>
                <div className="row my-4">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="brand">
                            <Link to={"/Rolex"}>Rolex</Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="brand">
                            <Link to={"/PatekPhilippe"}>Patek Philippe</Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="brand">
                            <Link to={"/Breitling"}>Breitling</Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="brand">
                            <Link to={"/Cartier"}>Cartier</Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="brand">
                            <Link to={"/IWC"}>IWC</Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="brand">
                            <Link to={"/Omega"}>Omega</Link>
                        </div>
                    </div>
                </div>
                <a href="/#">Display all</a>
            </div>
        </div>
    );
}
export default PopularBrands;
