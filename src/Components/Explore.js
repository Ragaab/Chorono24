import menWatches from "../images/62-op9uc8z9zh50cc303zlhyl5l-Original.jpg";
import recentlyAdded from "../images/270-dy4arhwyt5zelhsxihd60nyw-Original.jpg";
import expensiveWatches from "../images/205-e7bw311m4v172aon38ff8upo-Original.webp";
import affordableWatches from "../images/48-yb0g8342f6kntl52oa6zstwx-Original.jpg";
import divingWatches from "../images/34-b7366zz14cra1en8sfkgbujs-Original.jpg";
import Bestsellers from "../images/49-98ra7nct24vil6l654192w56-Original.jpg";
import "../Css/Explore.css";

function Explore() {
    return (
        <div className="explore">
            <div className="my-container">
                <h2 className="mb-4">Explore Chrono24</h2>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <a href="/#" className="box text-black">
                            <img src={menWatches} alt="" />
                            <h3>Men Watches</h3>
                        </a>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <a href="/#" className="box text-black">
                            <img src={recentlyAdded} alt="" />
                            <h3>Recently Added</h3>
                        </a>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <a href="/#" className="box text-black">
                            <img src={divingWatches} alt="" />
                            <h3>divingWatches</h3>
                        </a>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <a href="/#" className="box text-black">
                            <img src={affordableWatches} alt="" />
                            <h3>Affordable Rolex, Omega, Breitling & Co.</h3>
                        </a>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <a href="/#" className="box text-black">
                            <img src={expensiveWatches} alt="" />
                            <h3>Expensive Watches</h3>
                        </a>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <a href="/#" className="box text-black">
                            <img src={Bestsellers} alt="" />
                            <h3>Bestsellers and iconic watches</h3>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Explore;
