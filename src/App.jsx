import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Clients from "./components/Clients";
import Contact from "./components/Contact";
import Counter from "./components/Counter";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import Registration from "./components/Registration";
import Payment from "./components/Payment";
import PaymentForm from "./components/PaymentForm";
import GenerateAds from "./components/GenerateAds"; // Import the GenerateAds component
import { useRegistration } from "./contexts/RegistrationContext";

const App = () => {
  const { isRegistered } = useRegistration();

  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Services />
              <About />
              <Counter />
              <Clients />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route path="/register" element={<Registration />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/payment-form" element={<PaymentForm />} />
        <Route path="/generate-ads" element={<GenerateAds />} />{" "}
        {/* Add this line */}
        {isRegistered && <Route path="/pricing" element={<Pricing />} />}
      </Routes>
    </Router>
  );
};

export default App;
