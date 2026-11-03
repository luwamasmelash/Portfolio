import { useState } from "react";
import "./App.css";
import "./index.css";

import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-gray-100">
      <Navbar
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      <MobileMenu
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      <Home />
      <About />
    </div>
  );
}

export default App;
