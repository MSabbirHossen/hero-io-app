import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AllAppsPage from "./pages/AllAppsPage";
import AppDetailsPage from "./pages/AppDetailsPage";
import InstallationsPage from "./pages/InstallationsPage";
import ErrorPage from "./pages/ErrorPage";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/apps" element={<AllAppsPage />} />
        <Route path="/app/:id" element={<AppDetailsPage />} />
        <Route path="/installations" element={<InstallationsPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </Router>
  );
}

export default App;
