import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../Components/Header";
import "../Watches-Css/watchDetails.css";
import { MdKeyboardArrowRight, MdOutlineHome } from "react-icons/md";
import { IoStar } from "react-icons/io5";

function IWCDetails({ data: { IWC } }) {
    let { id } = useParams();
    let watch = IWC.find((watch) => watch.id === id);

    return (
        <>
            <Header />
            <div className="target-watch mt-4" key={watch.id}>
                <div className="my-container d-flex">
                    <img className="" src={watch.imageLarge} alt="" />
                    <div className="watch-info">
                        <span className="d-flex align-items-center links">
                            <MdOutlineHome className="home fs-5" /> <MdKeyboardArrowRight className="mx-1" /> <Link className="text-black">Rolex Watches</Link>
                        </span>
                        <h2 className="m-0">{watch.title}</h2>
                        <p className="mb-4">{watch.description}</p>
                        <p className="mb-4">
                            Condition: {watch.condition} | {watch.production}
                        </p>
                        <span className="price">${watch.price}</span>
                        <span>
                            <span>+</span> ${watch.shipping} for insured shipping to Egypt
                        </span>
                        <Link className="buy d-block">Buy</Link>
                        <Link className="suggest d-block">Suggest a Price</Link>
                        <div className="shipping-seller">Shipping and Seller Information</div>
                        <span className="d-block mt-2 mb-2">Item ships in 10 days</span>
                        <span className="mb-2">Latest anticipated delivery on 1/12</span>
                        <div className="seller-rating d-flex justify-content-between align-items-center">
                            <span>Professional dealer</span>
                            <span>
                                <IoStar className="star d-inline-block" />
                                <span className="rating">
                                    <span className="mx-1">5.0</span> ( 24 )
                                </span>
                            </span>
                        </div>
                        <Link className="contact-seller">Contact Seller</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default IWCDetails;
