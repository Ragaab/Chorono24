import { Link } from "react-router-dom";
import Header from "../Components/Header";
import "../Watches-Css/allWatches.css";
import { MdOutlineHome } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

function PatekPhilippe({ data: { patekPhilippe } }) {
    return (
        <>
            <Header />
            <div className="watches">
                <div className="my-container">
                    <h1 className="mt-4 mb-2">We've found {patekPhilippe.length} results for "patek Philippe"</h1>
                    <span className="d-flex align-items-center mb-5">
                        <MdOutlineHome className="home fs-5" /> <MdKeyboardArrowRight className="mx-1" /> Rolex Watches
                    </span>
                    <div className="row">
                        {patekPhilippe.map((watch) => {
                            return (
                                <div className="col-xl-3 col-lg-4 col-md-4 col-sm-12" key={watch.id}>
                                    <Link to={`/patekPhilippe/${watch.id}`} className="watch d-block text-black">
                                        <img src={watch.image} alt="" />
                                        <p>{watch.title}</p>
                                        <p>{watch.description}</p>
                                        <span className="d-block">${watch.price}</span>
                                        <span>
                                            <span>+</span> ${watch.shipping} for shipping
                                        </span>
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}

export default PatekPhilippe;
