import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signin from "./pages/Signin";
// import BottomM from "./pages/mens/BottomM";
// import FootwearM from "./pages/mens/FootwearM";
// import IndianwearM from "./pages/mens/IndianwearM";
// import TopwearM from "./pages/mens/TopwearM";
// import FootW from "./pages/women/FootW";
// import IndianwearW from "./pages/women/IndianwearW";
// import SportsW from "./pages/women/SportsW";
// import WestW from "./pages/women/WestW";
// import Boys from "./pages/kids/Boys";
// import Girls from "./pages/kids/Girls";
// import FootK from "./pages/kids/FootK";
// import Toys from "./pages/kids/Toys";
// import Skin from "./pages/beauty/Skin";
// import Hair from "./pages/beauty/Hair";
// import Frag from "./pages/beauty/Frag";
// import Makeup from "./pages/beauty/Makeup";
import Cart from "./pages/Cart";
import Admin from "./pages/Admin";
import Upload from "./pages/upload/Upload";
import Update from "./pages/update/Update";
import Edit from "./pages/edit/Edit";
import User from "./pages/User";
import Mens from "./pages/Mens";
import Women from "./pages/Women";
import Kid from "./pages/Kid";

import Wupload from "./pages/upload/Wupload";
import Kupload from "./pages/upload/Kupload";
import Bupload from "./pages/upload/Bupload";
import Wupdate from "./pages/update/Wupdate";
import Kupdate from "./pages/update/Kupdate";
import Bupdate from "./pages/update/Bupdate";
import BBeauty from "./pages/BBeauty";
import Wedit from "./pages/edit/Wedit";
import Kedit from "./pages/edit/Kedit";
import Bedit from "./pages/edit/Bedit";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/men" element={<Mens />} />
          <Route path="/women" element={<Women />} />
          <Route path="/kid" element={<Kid />} />
          <Route path="/beauty" element={<BBeauty />} />
          {/* <Route path="/bwm" element={<BottomM />} />
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
          <Route path="/fb" element={<Frag />} /> */}
          <Route path="/cart" element={<Cart />} />
          <Route path="/si" element={<Signin />} />
          <Route path="/li" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/wupload" element={<Wupload />} />
          <Route path="/kupload" element={<Kupload />} />
          <Route path="/bupload" element={<Bupload />} />
          <Route path="/update" element={<Update />} />
          <Route path="/wupdate" element={<Wupdate />} />
          <Route path="/kupdate" element={<Kupdate />} />
          <Route path="/bupdate" element={<Bupdate />} />
          <Route path="/user" element={<User />} />
          <Route
            path="/edit/:id"
            element={<Edit />}
            loader={({ params }) =>
              fetch(`http://localhost:3400/product/${params.id}`)
            }
          />
          <Route
            path="/wedit/:id"
            element={<Wedit />}
            loader={({ params }) =>
              fetch(`http://localhost:3400/productw/${params.id}`)
            }
          />
          <Route
            path="/kedit/:id"
            element={<Kedit />}
            loader={({ params }) =>
              fetch(`http://localhost:3400/productk/${params.id}`)
            }
          />
          <Route
            path="/bedit/:id"
            element={<Bedit />}
            loader={({ params }) =>
              fetch(`http://localhost:3400/productb/${params.id}`)
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
