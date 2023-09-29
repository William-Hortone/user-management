import "./App.scss";
import { Route, Routes } from "react-router-dom";
import { Home, Contact, Admin, Login, Register, Reset } from "./pages";
import { Header, Footer } from "./components";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset" element={<Reset />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
