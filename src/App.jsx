import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./views/Home";
import MyPlants from "./views/MyPlants";
import CreatePlant from "./views/CreatePlant";
import UpdatePlant from "./views/UpdatePlant";
import About from "./views/About";

function NotFound() {
  return (
    <section>
      <h2>404</h2>
      <p className="muted">This page does not exist.</p>
    </section>
  );
}

export default function App() {
  return (
    <div className="app">
      <Header />

      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/my-plants" element={<MyPlants />} />
          <Route path="/create" element={<CreatePlant />} />
          <Route path="/update/:id" element={<UpdatePlant />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}