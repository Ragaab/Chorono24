import BuyerProtection from "../Components/BuyerProtection";
import Explore from "../Components/Explore";
import Facts from "../Components/Facts";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Instagram from "../Components/Instagram";
import Landing from "../Components/Landing";
import Magazine from "../Components/Magazine";
import PopularBrands from "../Components/PopularBrands";
import PopularModels from "../Components/PopularModels";
import Reviews from "../Components/Reviews";

function HomePage() {
    return (
        <>
            <Header />
            <Landing />
            <PopularBrands />
            <Explore />
            <BuyerProtection />
            <PopularModels />
            <Reviews />
            <Magazine />
            <Instagram />
            <Facts />
            <Footer />
        </>
    );
}
export default HomePage;
