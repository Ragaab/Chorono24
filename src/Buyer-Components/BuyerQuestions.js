import { LuPhone } from "react-icons/lu";
import { PiChatTextLight } from "react-icons/pi";
import "../Css/Collection.css";

function BuyerQuestions() {
    return (
        <div className="my-container">
            <div className="contact-us">
                <h2 className="mb-3">Do you have any questions?</h2>
                <div className="info">
                    <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseExample">
                        What is the Watch Collection?
                    </button>
                    <div className="collapse" id="collapseOne">
                        <div className="card card-body">
                            The Watch Collection lets you manage and track all of your watches online. Simply enter each watch's details and, if you'd like, add your own photos. You'll then have
                            access to historical price trends, as well as projections of your timepieces' future financial performance. You can also use the Watch Collection to follow other watches
                            you are interested in.
                        </div>
                    </div>
                </div>
                <div className="info">
                    <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseExample">
                        Do I have to own a watch to add it to my Watch Collection?
                    </button>
                    <div className="collapse" id="collapseTwo">
                        <div className="card card-body">
                            No, you can also follow watches that you are simply interested in. To track a watch's performance, enter its reference number or brand, model, and condition and select the
                            option "I don't own this watch."
                        </div>
                    </div>
                </div>
                <div className="info">
                    <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseExample">
                        Do I have to own a watch to add it to my Watch Collection?
                    </button>
                    <div className="collapse" id="collapseThree">
                        <div className="card card-body">
                            No, you can also follow watches that you are simply interested in. To track a watch's performance, enter its reference number or brand, model, and condition and select the
                            option "I don't own this watch."
                        </div>
                    </div>
                </div>
                <div className="info last">
                    <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseExample">
                        Can I add rare timepieces to the Watch Collection?
                    </button>
                    <div className="collapse" id="collapseEight">
                        <div className="card card-body">
                            Yes, you can add any watch to your Watch Collection so that it is complete. That being said, there may be little to no data available on rare watches. If the same model is
                            added by other users and we have sufficient data, new information will be added to your Watch Collection automatically.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default BuyerQuestions;
