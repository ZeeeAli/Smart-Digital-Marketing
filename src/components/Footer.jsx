import {
  FaMapMarkedAlt,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaArrowUp,
} from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoIosMailOpen } from "react-icons/io";
import { IoTime } from "react-icons/io5";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <>
      <section className="w-full bg-black m-auto grid lg:grid-cols-3 grid-cols-1 justify-between items-start lg:gap-28 gap-16 lg:p-20 p-10">
        <div className="flex flex-col justify-center items-start gap-10">
          <h1 className="text-white font-semibold font-ubuntu text-[40px] leading-[50px]">
            Lets Start Working together, get in touch
          </h1>
          <button className="bg-limegreen px-6 py-4 rounded-full text-[17px] font-semibold font-ubuntu hover:bg-white hover:text-black">
            Get Started Now
          </button>
        </div>

        <div className="flex flex-col justify-center items-start gap-10">
          <h1 className="text-white text-2xl font-ubuntu font-semibold">
            Contact Information
          </h1>
          <div className="flex flex-col justify-center items-start gap-4 ">
            <p className="flex justify-center items-center gap-3">
              <FaMapMarkedAlt className="text-limegreen size-8" />
              <span className="text-[16px] font-ubuntu text-slate-100">
                F-10 Markaz Islamabad
              </span>
            </p>
            <p className="flex justify-center items-center gap-3">
              <FaPhoneVolume className="text-limegreen size-8" />
              <span className="text-[16px] font-ubuntu text-slate-100">
                +92-123456789
              </span>
            </p>
            <p className="flex justify-center items-center gap-3">
              <IoIosMailOpen className="text-limegreen size-8" />
              <span className="text-[16px] font-ubuntu text-slate-100">
                support@Markify.com
              </span>
            </p>
            <p className="flex justify-center items-center gap-3">
              <IoTime className="text-limegreen size-8" />
              <span className="text-[16px] font-ubuntu text-slate-100">
                10:00 - 17:00
              </span>
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-start gap-6 ">
          <h1 className="text-white text-2xl font-ubuntu font-semibold">
            Subscribe Newsletter
          </h1>
          <p className="text-[16px] font-ubuntu text-slate-100">
            “Stay updated with our latest news, tips, and exclusive offers.
            Subscribe to our newsletter and never miss out on valuable insights
            and updates!”
          </p>
          <div className="flex flex-col justify-center items-start gap-6 w-full ">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-slate-900 px-6 py-4 rounded-lg border-none font-ubuntu text-white"
            />
            <button className="bg-limegreen px-6 py-4 rounded-xl text-[17px] font-semibold font-ubuntu hover:bg-white hover:text-black">
              Subscribe Now
            </button>
          </div>
        </div>
      </section>

      <section className="w-full bg-black m-auto border-y-2 border-slate-600 grid lg:grid-cols-3 grid-cols-1 justify-between items-center lg:gap-28 gap-8 px-20 py-6">
        <div>
          <h1 className="text-white text-[17px] font-ubuntu text-center">
            Copyright 2024, Markify, All Rights Reserved
          </h1>
        </div>
        <div>
          <p className="text-white text-3xl text-center font-ubuntu font-bold ">
            Mar<span className="text-limegreen italic">Kify</span>
          </p>
        </div>

        <div className="flex lg:justify-end justify-center items-center gap-4">
          <FaFacebook className="text-limegreen size-6" />
          <FaInstagram className="text-limegreen size-6" />
          <FaTwitter className="text-limegreen size-6" />
          <FaYoutube className="text-limegreen size-6" />
        </div>
      </section>

      <div
        id="icon-box"
        className="bg-limegreen text-black p-3 rounded-full hover:bg-black hover:text-white cursor-pointer fixed lg:bottom-6 right-6 bottom-6"
      >
        <Link to="hero" spy={true} offset={-100} smooth={true}>
          <FaArrowUp className="w-[35px] h-[35px]" />
        </Link>
      </div>
    </>
  );
};

export default Footer;
