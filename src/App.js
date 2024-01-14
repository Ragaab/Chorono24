import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Collection from "./pages/Collection";
import BuyerProtectionPage from "./pages/BuyerProtectionPage";
import FAQ from "./pages/FAQ";
import Login from "./pages/Login";
import { data } from "./data";
import Rolex from "./Watches-Brands/Rolex";
import RolexDetails from "./Watches-Brands/RolexDetails";
import PatekPhilippe from "./Watches-Brands/PatekPhilippe";
import PatekPhilippeDetails from "./Watches-Brands/PatekPhilippeDetails";
import BreitlingDetails from "./Watches-Brands/BreitlingDetails";
import Breitling from "./Watches-Brands/Breitling";
import Cartier from "./Watches-Brands/Cartier";
import CartierDetails from "./Watches-Brands/CartierDetails";
import IWC from "./Watches-Brands/IWC";
import IWCDeatils from "./Watches-Brands/IWCDeatils";
import Omega from "./Watches-Brands/Omega";
import OmegaDetails from "./Watches-Brands/OmegaDetails";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/watch-collection" element={<Collection />}></Route>
                <Route path="/Buyer-Protection" element={<BuyerProtectionPage />}></Route>
                <Route path="/FAQ" element={<FAQ />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/Rolex" element={<Rolex data={data} />}></Route>
                <Route path="/Rolex/:id" element={<RolexDetails data={data} />}></Route>
                <Route path="/PatekPhilippe" element={<PatekPhilippe data={data} />}></Route>
                <Route path="/patekPhilippe/:id" element={<PatekPhilippeDetails data={data} />}></Route>
                <Route path="/Breitling" element={<Breitling data={data} />}></Route>
                <Route path="/Breitling/:id" element={<BreitlingDetails data={data} />}></Route>
                <Route path="/Cartier" element={<Cartier data={data} />}></Route>
                <Route path="/Cartier/:id" element={<CartierDetails data={data} />}></Route>
                <Route path="/IWC" element={<IWC data={data} />}></Route>
                <Route path="/IWC/:id" element={<IWCDeatils data={data} />}></Route>
                <Route path="/Omega" element={<Omega data={data} />}></Route>
                <Route path="/Omega/:id" element={<OmegaDetails data={data} />}></Route>
            </Routes>
        </div>
    );
}

export default App;
