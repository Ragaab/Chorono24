import Logo from "../images/logo-positive-reduced.svg";
import { FaRegUser } from "react-icons/fa";
import { RiArrowDownSLine } from "react-icons/ri";
import { LuPhone } from "react-icons/lu";
import { useState } from "react";
import { SlArrowRight } from "react-icons/sl";
import { SlArrowLeft } from "react-icons/sl";
import "../Css/Header.css";
import "../Css/Global.css";
import { Link } from "react-router-dom";

function Header() {
    let [links, setLinks] = useState(false);
    return (
        <>
            <Link to={"/"} className="link w-100 text-center">
                <i className="me-2">{<FaRegUser />}</i>
                <span>Over 500 employees working to give you the perfect buying experience</span>
            </Link>
            <a href="/#" className="phone-link w-100 text-center">
                <i className="me-2">
                    <LuPhone />
                </i>
                <span>Personalized support: +49 721 96693-900</span>
            </a>
            <div className="header">
                <div className="my-container">
                    <div className="top-header d-flex justify-content-between align-items-center">
                        <Link to={"/"}>
                            <img src={Logo} alt="" className="logo" />
                        </Link>
                        <input className="flex-grow-1" type="text" placeholder="Search through 566,990 watches from 127 countries" />
                        <div className="login-link">
                            <Link to={"/login"} className="text-black text-decoration-none">
                                <i>{<FaRegUser />}</i>
                                <span className="ms-2">Log in or register</span>
                            </Link>
                        </div>
                    </div>
                    <input className="w-100" type="text" placeholder="Search through 566,990 watches from 127 countries" />
                    <div id="carouselExample" className="carousel slide seconde-links">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="text-center position-relative">
                                    <Link
                                        className="text-black me-4"
                                        to=""
                                        onClick={() => {
                                            setLinks(!links);
                                        }}
                                    >
                                        Buy a Watch<i>{<RiArrowDownSLine />}</i>
                                    </Link>
                                    <Link to="/watch-collection" className="text-black">
                                        Watch Collection
                                    </Link>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="text-center">
                                    <Link className="text-black me-4" to="/FAQ">
                                        FAQ
                                    </Link>
                                    <Link className="text-black" to="/Buyer-Protection">
                                        Buy Protction
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                            <i>
                                <SlArrowLeft />
                            </i>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                            <i>
                                <SlArrowRight />
                            </i>
                        </button>
                    </div>
                    <ul className="nav-bar d-flex align-items-center position-relative d-none">
                        <li>
                            <Link
                                className="text-black"
                                to=""
                                onClick={() => {
                                    setLinks(!links);
                                }}
                            >
                                Buy a Watch<i>{<RiArrowDownSLine />}</i>
                            </Link>
                        </li>
                        <li>
                            <Link className="text-black" to={"/watch-collection"}>
                                Watch Collection
                            </Link>
                        </li>
                        <li>
                            <Link className="text-black" to={"/FAQ"}>
                                FAQ
                            </Link>
                        </li>
                        <li>
                            <Link className="text-black" to={"/Buyer-Protection"}>
                                Buyer Protction
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={`${links === false ? "d-none" : "d-block"} links position-absolute`}>
                    <div className="my-container d-flex">
                        <div className="brands">
                            <span>Brands</span>
                            <ul>
                                <li>
                                    <Link to={"/Rolex"} className="text-black">
                                        Rolex
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"/PatekPhilippe"} className="text-black">
                                        Patek Philippe
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"/Breitling"} className="text-black">
                                        Breitling
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"/Cartier"} href="/#" className="text-black">
                                        Cartier
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"/IWC"} href="/#" className="text-black">
                                        IWC
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"/Omega"} href="/#" className="text-black">
                                        Omega
                                    </Link>
                                </li>
                                <li className="last text-decoration-underline">
                                    <Link to={"DisplayAll"} href="/#" className="text-black">
                                        Display all
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="categories">
                            <span>Categories</span>
                            <ul>
                                <li>
                                    <a href="/#" className="text-black">
                                        Men's Watches
                                    </a>
                                </li>
                                <li>
                                    <a href="/#" className="text-black">
                                        Women's Watches
                                    </a>
                                </li>
                                <li>
                                    <a href="/#" className="text-black text-decoration-underline">
                                        Display all
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="services">
                            <span>Services</span>
                            <ul>
                                <li>
                                    <a href="/#" className="text-black">
                                        Watch Collection
                                    </a>
                                </li>
                                <li>
                                    <a href="/#" className="text-black">
                                        Watch Explorer
                                    </a>
                                </li>
                                <li>
                                    <a href="/#" className="text-black">
                                        Dealer Search
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Header;
