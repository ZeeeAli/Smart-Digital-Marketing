// src/components/Hero.jsx
import { useEffect } from "react";
import { Link } from "react-router-dom";
import herobanner from "../assets/herobanner.png";
import clients from "../assets/clients.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 400,
      easing: "ease-in-sine",
    });
  }, []);

  return (
    <section
      id="hero"
      className="w-[90%] m-auto flex lg:flex-row flex-col justify-between items-center gap-10 py-20"
    >
      <div className="flex flex-col justify-center items-start gap-8">
        <h1
          data-aos="zoom-in"
          className="text-black font-semibold lg:text-[90px] text-[65px] lg:leading-[100px] leading-[80px] font-ubuntu"
        >
          Smart Digital Marketing
        </h1>
        <p
          data-aos="zoom-in"
          data-aos-delay="400"
          className="font-ubuntu text-[20px] text-slate-700"
        >
          At Markify, we specialize in providing cutting-edge digital marketing
          solutions
          <br />
          tailored to meet the unique needs of your business.{" "}
        </p>
        <Link
          to="/register"
          className="bg-limegreen px-6 py-4 rounded-full text-[17px] font-semibold font-ubuntu hover:bg-black hover:text-white cursor-pointer"
        >
          Get Started Now
        </Link>
        <div
          data-aos="zoom-in"
          data-aos-delay="600"
          className="flex lg:flex-row flex-col lg:items-center items-start mt-5 gap-10"
        >
          <img src={clients} alt="clients" className="w-auto lg:max-w-full" />
          <p className="font-ubuntu text-[20px] font-bold text-black">
            Trusted by Brands and Customers
          </p>
        </div>
      </div>
      <div>
        <img
          data-aos="zoom-in"
          data-aos-delay="1000"
          className="lg:w-[750px] lg:h-[550px]"
          src={herobanner}
          alt="herobanner"
        />
      </div>
    </section>
  );
};

export default Hero;
