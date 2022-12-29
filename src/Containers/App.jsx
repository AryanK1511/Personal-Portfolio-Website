import React from "react";
import Navigationbar from "../Components/Navbar";
import TitleBox from "../Components/TitleBox";

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
    </div>
  );
}

export default App;