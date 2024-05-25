import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signin from "./pages/Signin";
import BottomM from "./pages/mens/BottomM";
import FootwearM from "./pages/mens/FootwearM";
import IndianwearM from "./pages/mens/IndianwearM";
import TopwearM from "./pages/mens/TopwearM";
import FootW from "./pages/women/FootW";
import IndianwearW from "./pages/women/IndianwearW";
import SportsW from "./pages/women/SportsW";
import WestW from "./pages/women/WestW";
import Boys from "./pages/kids/Boys";
import Girls from "./pages/kids/Girls";
import FootK from "./pages/kids/FootK";
import Toys from "./pages/kids/Toys";
import Skin from "./pages/beauty/Skin";
import Hair from "./pages/beauty/Hair";
import Frag from "./pages/beauty/Frag";
import Makeup from "./pages/beauty/Makeup";
import Cart from "./pages/Cart";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bwm" element={<BottomM />} />
          <Route path="/fwm" element={<FootwearM />} />
          <Route path="/iwm" element={<IndianwearM />} />
          <Route path="/twm" element={<TopwearM />} />
          <Route path="/iww" element={<IndianwearW />} />
          <Route path="/www" element={<WestW />} />
          <Route path="/sww" element={<SportsW />} />
          <Route path="/fww" element={<FootW />} />
          <Route path="/bk" element={<Boys />} />
          <Route path="/gk" element={<Girls />} />
          <Route path="/fk" element={<FootK />} />
          <Route path="/tk" element={<Toys />} />
          <Route path="/sb" element={<Skin />} />
          <Route path="/hb" element={<Hair />} />
          <Route path="/mb" element={<Makeup />} />
          <Route path="/fb" element={<Frag />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/si" element={<Signin />} />
          <Route path="/li" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
