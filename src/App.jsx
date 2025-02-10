import Navbar from "./layout/Navbar";
import FlagsHome from "./layout/FlagsHome";
function App() {
  return (
    <div className="text-light-text">
      <header>
        <Navbar />
      </header>
      <main className="mx-auto max-w-[1440px] px-4 pb-[65px] md:px-20 md:pb-[45px]">
        <FlagsHome />
      </main>
    </div>
  );
}

export default App;
