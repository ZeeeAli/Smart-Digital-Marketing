import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PaymentForm = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your payment processing logic here
    alert("Payment processed!");
    navigate("/confirmation"); // Redirect to a confirmation page or similar
  };

  return (
    <section
      id="payment-form"
      className="w-[90%] m-auto flex flex-col justify-center items-center py-20"
    >
      <h1 className="text-black font-semibold text-[40px] leading-[60px] font-ubuntu">
        Payment Form
      </h1>
      <div className="w-full max-w-md mt-8 bg-white shadow-md rounded-lg p-6">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name on Card
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="card-number"
            >
              Card Number
            </label>
            <input
              type="number"
              id="card-number"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="flex mb-4">
            <div className="w-1/2 pr-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="expiry-date"
              >
                Expiry Date
              </label>
              <input
                type="date"
                id="expiry-date"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="MM/YY"
                required
              />
            </div>
            <div className="w-1/2 pl-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="cvv"
              >
                CVV
              </label>
              <input
                type="text"
                id="cvv"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-limegreen px-6 py-3 rounded-full text-white font-semibold font-ubuntu hover:bg-black"
          >
            Complete Payment
          </button>
        </form>
      </div>
    </section>
  );
};

export default PaymentForm;
