import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { HomePage } from "./features/Home/pages/HomePage";

export const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <div className="page-body">
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
