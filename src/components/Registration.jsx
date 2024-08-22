import { useNavigate } from "react-router-dom";
import { useRegistration } from "../contexts/RegistrationContext";

const Registration = () => {
  const navigate = useNavigate();
  const { setIsRegistered } = useRegistration();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform registration logic here (e.g., form validation)

    setIsRegistered(true); // Set registration status to true
    navigate("/pricing"); // Redirect to the Pricing page
  };

  return (
    <section
      id="register"
      className="w-[90%] m-auto flex flex-col justify-center items-center py-20"
    >
      <h1 className="text-black font-semibold text-[40px] leading-[60px] font-ubuntu">
        Register Now
      </h1>
      <form className="w-full max-w-md mt-8" onSubmit={handleSubmit}>
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="name"
        >
          Name
        </label>
        <input
          required
          id="name"
          type="text"
          placeholder="Your Name"
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        />
        <label
          className="block text-gray-700 text-sm font-bold mb-2 mt-4"
          htmlFor="email"
        >
          Email
        </label>
        <input
          required
          id="email"
          type="email"
          placeholder="Your Email"
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        />
        <label
          className="block text-gray-700 text-sm font-bold mb-2 mt-4"
          htmlFor="password"
        >
          Password
        </label>
        <input
          required
          id="password"
          type="password"
          placeholder="Enter Password"
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        />
        <label
          className="block text-gray-700 text-sm font-bold mb-2 mt-4"
          htmlFor="confirm-password"
        >
          Confirm Password
        </label>
        <input
          required
          id="confirm-password"
          type="password"
          placeholder="Confirm Password"
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        />
        <button
          type="submit"
          className="bg-limegreen px-6 py-4 mt-4 rounded-full text-white font-semibold font-ubuntu hover:bg-black"
        >
          Register
        </button>
      </form>
    </section>
  );
};

export default Registration;
