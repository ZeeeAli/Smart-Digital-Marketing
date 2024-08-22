// src/components/Payment.jsx
import { useLocation, useNavigate } from "react-router-dom";

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;
  const { plan } = state || { plan: { type: "Default Plan", price: "0.00" } };

  const handleProceed = () => {
    navigate("/payment-form", { state: { plan } });
  };

  return (
    <section
      id="payment"
      className="w-[90%] m-auto flex flex-col justify-center items-center py-20"
    >
      <h1 className="text-black font-semibold text-[40px] leading-[60px] font-ubuntu">
        Payment Details
      </h1>
      <div className="w-full max-w-md mt-8 bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">{plan.type}</h2>
        <p className="text-lg mb-4">
          Price:{" "}
          <span className="font-semibold text-limegreen">{plan.price}</span>
        </p>
        <p className="text-lg mb-4">Monthly Subscription</p>
        <button
          onClick={handleProceed}
          className="bg-limegreen px-6 py-3 rounded-full text-white font-semibold font-ubuntu hover:bg-black"
        >
          Proceed to Payment
        </button>
      </div>
    </section>
  );
};

export default Payment;
