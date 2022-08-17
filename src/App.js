import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Category from "./components/Category";
import Corbalar from "./components/categories/Corbalar";
import Fırın from "./components/categories/Firin_urunleri";
import Izgaralar from "./components/categories/Izgaralar_kebaplar";
import Durumlar from "./components/categories/Durumlar";
import Pilavlar from "./components/categories/Pilavlar";
import Donerler from "./components/categories/Et_donerler";
import Etli from "./components/categories/Etli_yemekler";
import Tatlilar from "./components/categories/Tatlilar";
import Salatalar from "./components/categories/Salatalar";
import Yanurunler from "./components/categories/Yan_urunler";
import Icecekler from "./components/categories/Icecekler";

function App() {
  return (
    <div className=" h-screen flex flex-col overflow-hidden">
      <Header />
      <div className=" h-full flex-auto flex ">
        <Category />
        <div className=" w-full pb-16">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="corbalar" element={<Corbalar/>}/>
            <Route path="firin" element={<Fırın/>}/>
            <Route path="izgaralar" element={<Izgaralar/>}/>
            <Route path="durumlar" element={<Durumlar/>}/>
            <Route path="pilavlar" element={<Pilavlar/>}/>
            <Route path="donerler" element={<Donerler/>}/>
            <Route path="etli_yemekler" element={<Etli/>}/>
            <Route path="tatlilar" element={<Tatlilar/>}/>
            <Route path="salatalar" element={<Salatalar/>}/>
            <Route path="yan_urunler" element={<Yanurunler/>}/>
            <Route path="icecekler" element={<Icecekler/>}/>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
