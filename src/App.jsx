import Navbar from "./layout/Navbar";

function App() {
  return (
    <div className="text-light-text">
      <header>
        <Navbar />
      </header>
      <div className="mx-auto max-w-[1440px] px-4 md:px-20">
        <h1>REST Countries Api with Color Theme Switcher</h1>
      </div>
    </div>
  );
}

export default App;
