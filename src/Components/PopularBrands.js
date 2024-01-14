import "../Css/PopularBrands.css";

function PopularBrands() {
    return (
        <div className="popular-brands">
            <div className="my-container">
                <h2 className="m-0">Popular brands</h2>
                <div className="row my-4">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="brand">Rolex</div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="brand">Patek Philippe</div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="brand">Breitling</div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="brand">Cartier</div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="brand">IWC</div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="brand">Omega</div>
                    </div>
                </div>
                <a href="/#">Display all</a>
            </div>
        </div>
    );
}
export default PopularBrands;
