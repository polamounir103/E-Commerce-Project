import "./App.css";
import Header from "./components/shared/Header";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signin from "./pages/Signin";
import NoPage from "./pages/NoPage";
import AdimnDashboard from "./pages/AdimnDashboard";
import Product from "./pages/AllProducts";
import Footer from "./components/shared/Footer";
import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="px-5 md:px-8 lg:px-12 py-16">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/login" exact element={<Signin />} />
            <Route path="/register" exact element={<Register />} />
            <Route path="/admin" exact element={<AdimnDashboard />} />
            <Route path="/product/:id" exact element={<Product />} />
            <Route path="/*" element={<NoPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
