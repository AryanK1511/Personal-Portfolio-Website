import React from "react";
import Navigationbar from "../Components/Navbar";
import TitleBox from "../Components/TitleBox";
import AboutBox from "../Components/AboutBox";
import Footer from "../Components/Footer";

function App() {
  return (
    <div>
      <header>
        <Navigationbar />
      </header>
      <main>
        <section className="homepage">
          <TitleBox />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;