import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/ui/Navigation";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { CertificatesContainer } from "./components/containers/CertificatesContainer";
import "./styles/App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/certificates" element={<CertificatesContainer />} />

          <Route path="*" element={<div> Page Not Found </div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
