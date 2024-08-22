// src/components/Pricing.jsx
import { FaChevronCircleRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { pricingplan } from "../export";


const Pricing = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 400,
      easing: "ease-in-sine",
    });
  }, []);

  const handleClick = (plan) => {
    navigate("/payment", { state: { plan } });
  };

  return (
    <section
      id="plans"
      className="w-[90%] m-auto flex flex-col justify-between items-center gap-2 py-20"
    >
      <h1
        data-aos="zoom-in"
        data-aos-delay="200"
        className="text-lime-500 font-ubuntu text-[19px] font-semibold"
      >
        PRICING PLANS
      </h1>
      <h1
        data-aos="zoom-in"
        data-aos-delay="400"
        className="text-black font-semibold lg:text-[60px] text-[50px] lg:leading-[70px] leading-[50px] text-center font-ubuntu"
      >
        Choose your perfect plan
      </h1>

      <div
        data-aos="zoom-in"
        data-aos-delay="600"
        className="w-full flex lg:flex-row flex-col justify-between items-center gap-10 mt-10"
      >
        {pricingplan.map((item, index) => (
          <div
            key={index}
            className="bg-black p-10 rounded-3xl flex flex-col justify-center items-center gap-3 lg:w-[35%] w-full"
          >
            <h1 className="text-white text-2xl font-semibold font-ubuntu ">
              {item.type}
            </h1>
            <p className="text-white text-lg font-ubuntu ">{item.about}</p>
            <h1 className="text-limegreen font-bold text-[55px] font-ubuntu">
              {item.price}
              <span className="text-limegreen text-lg pl-2 font-ubuntu">
                Monthly
              </span>
            </h1>
            <button
              onClick={() => handleClick(item)}
              className="w-full bg-limegreen font-semibold rounded-xl px-6 py-3 text-lg hover:bg-white hover:text-black font-ubuntu"
            >
              {item.label}
            </button>
            <p className="text-white text-lg font-semibold font-ubuntu ">
              {item.specs}
            </p>
            <div className="flex flex-col justify-center items-start gap-4 ">
              {item.plan1a && (
                <p className="text-white flex justify-center items-center gap-4 font-ubuntu">
                  <FaChevronCircleRight className="text-limegreen size-6" />
                  {item.plan1a}
                </p>
              )}
              {item.plan1b && (
                <p className="text-white flex justify-center items-center gap-4 font-ubuntu">
                  <FaChevronCircleRight className="text-limegreen size-6" />
                  {item.plan1b}
                </p>
              )}
              {item.plan1c && (
                <p className="text-white flex justify-center items-center gap-4 font-ubuntu">
                  <FaChevronCircleRight className="text-limegreen size-6" />
                  {item.plan1c}
                </p>
              )}
              {item.plan2a && (
                <p className="text-white flex justify-center items-center gap-4 font-ubuntu">
                  <FaChevronCircleRight className="text-limegreen size-6" />
                  {item.plan2a}
                </p>
              )}
              {item.plan2b && (
                <p className="text-white flex justify-center items-center gap-4 font-ubuntu">
                  <FaChevronCircleRight className="text-limegreen size-6" />
                  {item.plan2b}
                </p>
              )}
              {item.plan2c && (
                <p className="text-white flex justify-center items-center gap-4 font-ubuntu">
                  <FaChevronCircleRight className="text-limegreen size-6" />
                  {item.plan2c}
                </p>
              )}
              {item.plan3a && (
                <p className="text-white flex justify-center items-center gap-4 font-ubuntu">
                  <FaChevronCircleRight className="text-limegreen size-6" />
                  {item.plan3a}
                </p>
              )}
              {item.plan3b && (
                <p className="text-white flex justify-center items-center gap-4 font-ubuntu">
                  <FaChevronCircleRight className="text-limegreen size-6" />
                  {item.plan3b}
                </p>
              )}
              {item.plan3c && (
                <p className="text-white flex justify-center items-center gap-4 font-ubuntu">
                  <FaChevronCircleRight className="text-limegreen size-6" />
                  {item.plan3c}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
