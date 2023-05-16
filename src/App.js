import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Section from "./components/Section";

function App() {
  const heading = "Shop the courses!";
  const tagLine = "15% flat offer till June";
  return (
    <div className="App">
      <Navbar />
      <Header heading={heading} tag={tagLine} />
      <Section />
      <Footer />
    </div>
  );
}

export default App;
