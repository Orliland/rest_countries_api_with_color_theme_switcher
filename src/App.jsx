import Navbar from "./layout/Navbar";
import FlagsHome from "./layout/FlagsHome";
import FlagPage from "./layout/FlagPage";
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <div className="text-light-text">
        <header>
          <Navbar />
        </header>
        <main className="mx-auto max-w-[1440px] px-4 pb-[65px] md:px-20 md:pb-[45px]">
          <Routes>
            <Route path="/" element={<FlagsHome />} />
            <Route path="/country/:name" element={<FlagPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
