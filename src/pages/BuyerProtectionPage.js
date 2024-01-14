import BuyerLanding from "../Buyer-Components/BuyerLanding";
import BuyerLinks from "../Buyer-Components/BuyerLinks";
import BuyerQuestions from "../Buyer-Components/BuyerQuestions";
import BuyerServices from "../Buyer-Components/BuyerServices";
import Facts from "../Components/Facts";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Reviews from "../Components/Reviews";

function BuyerProtectionPage() {
    return (
        <>
            <Header />
            <BuyerLanding />
            <BuyerLinks />
            <BuyerServices />
            <Reviews />
            <Facts />
            <BuyerQuestions />
            <Footer />
        </>
    );
}

export default BuyerProtectionPage;
