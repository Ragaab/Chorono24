import "../Css/Collection.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Collection2 from "../images/Collection-2.webp";
import Collection3 from "../images/collection-3.webp";
import startCollection from "../images/start-collection-img.svg";
import startCollection2 from "../images/start-collection-img-2.svg";
import { IoStar } from "react-icons/io5";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import { PiChatTextLight } from "react-icons/pi";

function Collection() {
    return (
        <div className="collection">
            <Header />
            <div className="content mt-2">
                <div className="my-container">
                    <div className="text">
                        <p>Watch Collection</p>
                        <h1>Keep an Eye on the Value of Your Watch Collection</h1>
                        <a href="#/">Add a Watch Now</a>
                    </div>
                </div>
            </div>
            <div className="services mt-5 mb-5">
                <div className="my-container">
                    <div className="service one d-flex justify-content-between">
                        <div className="text">
                            <h2 className="mb-4">Start Your Online Collection</h2>
                            <p>With the Chrono24 Watch Collection, you can take your watches on the go and track their performance anytime, anywhere. As a collector, what more could you want?</p>
                            <ul>
                                <li>Manage your watch collection online</li>
                                <li>Add new watches quickly and easily</li>
                                <li>Enter important information and upload pictures</li>
                                <li>Track the market value of your watches</li>
                                <li>View historical and future performance figures</li>
                            </ul>
                        </div>
                        <div className="video">.</div>
                    </div>
                    <div className="service two d-flex justify-content-between align-items-center mt-5 pt-5">
                        <img src={Collection2} alt="" />
                        <div className="text">
                            <h2 className="mb-4">Take Your Watches Wherever You Go</h2>
                            <p>
                                It's your watch collection as you've never seen it before: online and at your fingertips on your smartphone. Follow interesting watches, research market values, and
                                maintain your Watch Collection wherever and whenever you want.
                            </p>
                        </div>
                    </div>
                    <div className="service three d-flex justify-content-between align-items-center mt-5 pt-5">
                        <div className="text">
                            <h2 className="mb-4">Monitor Financial Performance</h2>
                            <p>
                                Whether it's watches you own or models you're interested in, you can have timepieces appraised and keep an eye on their future performance. Our unparalleled database is
                                always expanding, and we calculate new market values for each watch every day. Your watch isn't in our database? Great! Unique timepieces help us improve the Watch
                                Collection and grow our database.
                            </p>
                        </div>
                        <img src={Collection3} alt="" />
                    </div>
                </div>
            </div>
            <div className="start-collection text-center">
                <h2>Start Your Collection and Reap Additional Benefits</h2>
                <div className="my-container d-flex justify-content-center align-items-center">
                    <div className="box">
                        <img src={startCollection} alt="" />
                        <h4>Personalize your collection</h4>
                        <p>Lend your Watch Collection a unique touch with your own information, pictures, and notes.</p>
                    </div>
                    <div className="box">
                        <img src={startCollection2} alt="" />
                        <h4>Personalize your collection</h4>
                        <p>Lend your Watch Collection a unique touch with your own information, pictures, and notes.</p>
                    </div>
                </div>
                <a href="#/">Add a watch now</a>
            </div>
            <div className="scanner">
                <div className="my-container">
                    <div className="text">
                        <h2>Watch Scanner</h2>
                        <span>Build Your Collection With Photos</span>
                        <p>
                            Download the Chrono24 app now and add models to your Watch Collection using the Watch Scanner. Whether it's on your wrist, in a magazine article, or in a display case, all
                            it takes is a single photo to add a new watch to your online collection.
                            <br></br>
                            <br></br>
                            Install the app to try it now:
                        </p>
                        <div className="images">
                            <a href="#/"></a>
                            <a href="#/"></a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Start Reviews */}
            <div className="reviews-copy">
                <div className="my-container">
                    <h2 className="pt-5">Over 700,000 satisfied watch buyers worldwide</h2>
                    <p className="my-2">
                        Chrono24 dealers receive great ratings: 4.8 out of 5
                        <i>
                            <IoStar />
                        </i>
                    </p>
                    <div id="carouselExampleIndicators" className="carousel slide">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="d-flex justify-content-center">
                                    <div className="review">
                                        <div className="review-head d-flex justify-content-between">
                                            <div>
                                                <div className="rating d-flex align-items-center">
                                                    <i>
                                                        <IoStar />
                                                    </i>
                                                    <i>
                                                        <IoStar />
                                                    </i>
                                                    <i>
                                                        <IoStar />
                                                    </i>
                                                    <i>
                                                        <IoStar />
                                                    </i>
                                                    <i>
                                                        <IoStar />
                                                    </i>
                                                </div>
                                            </div>
                                            <span>September 4, 2023</span>
                                        </div>
                                        <div className="text">
                                            <p>
                                                <span>Rolex</span> Submariner Date
                                            </p>
                                            <span>Received: September 17,2023</span>
                                            <span>Shipped From:Unite Stats Of America</span>
                                            <p>Very good experience.. I order a watch from sugess it was delivered properly</p>
                                        </div>
                                        <div className="user">
                                            <span className="user-img">W</span>
                                            <div className="user-info">
                                                <span>Weldon Nance</span>
                                                <span>United States Of America</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="review remove">
                                        <div className="review-head d-flex justify-content-between">
                                            <div>
                                                <div className="rating d-flex align-items-center">
                                                    <i>
                                                        <IoStar />
                                                    </i>
                                                    <i>
                                                        <IoStar />
                                                    </i>
                                                    <i>
                                                        <IoStar />
                                                    </i>
                                                    <i>
                                                        <IoStar />
                                                    </i>
                                                    <i>
                                                        <IoStar />
                                                    </i>
                                                </div>
                                            </div>
                                            <span>September 4, 2023</span>
                                        </div>
                                        <div className="text">
                                            <p>
                                                Always a good site for research and deals. Ive been using chrono24 for a few years either for research or buying and its great! Without it i'd have most
                                                likely not found the past few watches in my...
                                            </p>
                                        </div>
                                        <div className="user">
                                            <span className="user-img silver">A</span>
                                            <div className="user-info">
                                                <span>Alex</span>
                                                <span>Canada</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="review remove-2">
                                        <div className="review-head d-flex justify-content-between">
                                            <div>
                                                <div className="rating d-flex align-items-center">
                                                    <i>
                                                        <IoStar />
                                                    </i>
                                                    <i>
                                                        <IoStar />
                                                    </i>
                                                    <i>
                                                        <IoStar />
                                                    </i>
                                                    <i>
                                                        <IoStar />
                                                    </i>
                                                    <i>
                                                        <IoStar />
                                                    </i>
                                                </div>
                                            </div>
                                            <span>September 4, 2023</span>
                                        </div>
                                        <div className="text">
                                            <p>Wonderful, I got my watch very quickly and it was better than the pictures.</p>
                                        </div>
                                        <div className="user">
                                            <span className="user-img">J</span>
                                            <div className="user-info">
                                                <span>Javier Martell</span>
                                                <span>United States Of America</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="d-flex justify-content-center">
                                    <div className="review">
                                        <div className="review-head d-flex justify-content-between">
                                            <div>
                                                <div className="rating d-flex align-items-center">
                                                    <i>
                                                        <IoStar />
                                                    </i>
                                                    <i>
                                                        <IoStar />
                                                    </i>
                                                    <i>
                                                        <IoStar />
                                                    </i>
                                                    <i>
                                                        <IoStar />
                                                    </i>
                                                    <i>
                                                        <IoStar />
                                                    </i>
                                                </div>
                                            </div>
                                            <span>September 4, 2023</span>
                                        </div>
                                        <div className="text">
                                            <p>Great seller. Accurate photos, super fast shipping, and the watch is even better than anticipated.</p>
                                        </div>
                                        <div className="user">
                                            <span className="user-img">W</span>
                                            <div className="user-info">
                                                <span>Don</span>
                                                <span>United States Of America</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="review remove">
                                        <div className="review-head d-flex justify-content-between">
                                            <div>
                                                <div className="rating d-flex align-items-center">
                                                    <i>
                                                        <IoStar />
                                                    </i>
                                                    <i>
                                                        <IoStar />
                                                    </i>
                                                    <i>
                                                        <IoStar />
                                                    </i>
                                                    <i>
                                                        <IoStar />
                                                    </i>
                                                    <i>
                                                        <IoStar />
                                                    </i>
                                                </div>
                                            </div>
                                            <span>September 4, 2023</span>
                                        </div>
                                        <div className="text">
                                            <p>Very good experience.. I order a watch from sugess it was delivered properly</p>
                                        </div>
                                        <div className="user">
                                            <span className="user-img silver">A</span>
                                            <div className="user-info">
                                                <span>Sumit Bhattacharyya</span>
                                                <span>India</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="review remove-2">
                                        <div className="review-head d-flex justify-content-between">
                                            <div>
                                                <div className="rating d-flex align-items-center">
                                                    <i>
                                                        <IoStar />
                                                    </i>
                                                    <i>
                                                        <IoStar />
                                                    </i>
                                                    <i>
                                                        <IoStar />
                                                    </i>
                                                    <i>
                                                        <IoStar />
                                                    </i>
                                                    <i>
                                                        <IoStar />
                                                    </i>
                                                </div>
                                            </div>
                                            <span>September 4, 2023</span>
                                        </div>
                                        <div className="text">
                                            <p>Wonderful, I got my watch very quickly and it was better than the pictures.</p>
                                        </div>
                                        <div className="user">
                                            <span className="user-img">J</span>
                                            <div className="user-info">
                                                <span>Javier Martell</span>
                                                <span>United States Of America</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true">
                                <MdOutlineArrowBackIos />
                            </span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true">
                                <MdOutlineArrowForwardIos />
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            {/* End Reviews */}
            <div className="my-container">
                <div className="contact-us">
                    <h2 className="mb-3">Do you have any questions? Contact us!</h2>
                    <div className="spans d-flex ">
                        <span className="d-flex align-items-center me-5">
                            <LuPhone className="me-2" /> +49 721 96693-0
                        </span>
                        <a href="#/" className="text-black">
                            <span className="d-flex align-items-center">
                                <PiChatTextLight className="fs-4 me-2" /> Contact
                            </span>
                        </a>
                    </div>
                    <div className="info">
                        <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseExample">
                            What is the Watch Collection?
                        </button>
                        <div className="collapse" id="collapseOne">
                            <div className="card card-body">
                                The Watch Collection lets you manage and track all of your watches online. Simply enter each watch's details and, if you'd like, add your own photos. You'll then have
                                access to historical price trends, as well as projections of your timepieces' future financial performance. You can also use the Watch Collection to follow other
                                watches you are interested in.
                            </div>
                        </div>
                    </div>
                    <div className="info">
                        <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseExample">
                            Do I have to own a watch to add it to my Watch Collection?
                        </button>
                        <div className="collapse" id="collapseTwo">
                            <div className="card card-body">
                                No, you can also follow watches that you are simply interested in. To track a watch's performance, enter its reference number or brand, model, and condition and select
                                the option "I don't own this watch."
                            </div>
                        </div>
                    </div>
                    <div className="info">
                        <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseExample">
                            How many watches can I add to my Watch Collection?
                        </button>
                        <div className="collapse" id="collapseThree">
                            <div className="card card-body">You may add an unlimited number of watches.</div>
                        </div>
                    </div>
                    <div className="info">
                        <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseExample">
                            Why is there a watch in my Watch Collection that I didn't personally add?
                        </button>
                        <div className="collapse" id="collapseFour">
                            <div className="card card-body">
                                As soon as you purchase a watch on Chrono24, it is automatically added to your Watch Collection, allowing you to track its value over time.
                            </div>
                        </div>
                    </div>
                    <div className="info">
                        <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseExample">
                            Which estimated values are available in the Watch Collection?
                        </button>
                        <div className="collapse" id="collapseFive">
                            <div className="card card-body">You can view the estimated value and change in value of each individual watch, as well as your entire collection.</div>
                        </div>
                    </div>
                    <div className="info">
                        <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseExample">
                            How often is the estimated value updated?
                        </button>
                        <div className="collapse" id="collapseSix">
                            <div className="card card-body">Estimated values are reassessed on a daily basis. However, price fluctuations are only visible across longer periods of time.</div>
                        </div>
                    </div>
                    <div className="info">
                        <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseExample">
                            Can I save personal information in the Watch Collection?
                        </button>
                        <div className="collapse" id="collapseSeven">
                            <div className="card card-body">Yes, you can add your own photos and notes to each watch.</div>
                        </div>
                    </div>
                    <div className="info last">
                        <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseExample">
                            Can I add rare timepieces to the Watch Collection?
                        </button>
                        <div className="collapse" id="collapseEight">
                            <div className="card card-body">
                                Yes, you can add any watch to your Watch Collection so that it is complete. That being said, there may be little to no data available on rare watches. If the same model
                                is added by other users and we have sufficient data, new information will be added to your Watch Collection automatically.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Collection;
