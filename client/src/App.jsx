import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "../pages/Home";

function App() {
  return (
    <div className="flex-column justify-flex-start min-100-vh">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
