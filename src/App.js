import Header from "./components/Header";
import Category from "./components/Category";
import { Routes, Route } from "react-router-dom";
import Yemekler from "./components/categories/Yemekler";
import Tatlılar from "./components/categories/Tatlılar";
import Home from "./components/Home";

function App() {
  return (
    <div className=" h-screen flex flex-col">
      <Header />
      <div className=" flex-auto flex">
        <Category />
        <div className=" w-full">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="yemekler" element={<Yemekler/>}/>
            <Route path="tatlilar" element={<Tatlılar/>}/>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
