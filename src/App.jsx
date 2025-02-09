import Navbar from "./layout/Navbar";
import FlagsHome from "./layout/FlagsHome";
function App() {
  return (
    <div className="text-light-text">
      <header>
        <Navbar />
      </header>
      <main className="mx-auto max-w-[1440px] px-4 md:px-20">
        <FlagsHome />
      </main>
    </div>
  );
}

export default App;
