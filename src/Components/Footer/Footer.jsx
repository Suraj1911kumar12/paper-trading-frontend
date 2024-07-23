import React from "react";

const Footer = () => {
  return (
    <footer className="px-4 sm:px-6 md:px-12 lg:px-20 mb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="flex flex-col">
          <h1 className="text-[#EF443B] text-2xl mb-5">Krypto</h1>
          <p className="text-sm">
            Massa blandit semper varius faucibus. Suspendisse viverra venenatis
            placerat nam ut. Pellentesque sit id tempor turpis.
          </p>
        </div>
        <div>
          <h1 className="text-[#EF443B] text-2xl mb-5">Links</h1>
          <ul className="flex flex-col gap-3 text-sm">
            <li>How It Works</li>
            <li>Cryptos</li>
            <li>Features</li>
            <li>Testimonials</li>
            <li>Blogs</li>
          </ul>
        </div>
        <div>
          <h1 className="text-[#EF443B] text-2xl mb-5">Legal</h1>
          <ul className="flex flex-col gap-3 text-sm">
            <li>Terms of Use</li>
            <li>Terms of Conditions</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
          </ul>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-[#EF443B] text-2xl mb-5">Newsletter</h1>
          <p className="text-sm text-[#E0E0E0]">
            Over 25,000 people have subscribed
          </p>
          <div className="flex items-center bg-white rounded-full overflow-hidden">
            <input
              type="text"
              placeholder="Enter Your Email"
              className="flex-1 px-3 py-2 border-none text-black focus:outline-none"
            />
            <button className="bg-[#EF443B] rounded-full py-2 px-4 text-white">
              Subscribe
            </button>
          </div>
          <p className="text-sm text-[#E0E0E0]">
            We don’t sell your email and spam
          </p>
        </div>
      </div>
      <hr className="my-10" />
      <div className="flex flex-col sm:flex-row items-center justify-between text-sm">
        <div className="flex gap-5 mb-5 sm:mb-0">
          <p className="cursor-pointer">Privacy & Terms</p>
          <p className="cursor-pointer">Contact Us</p>
        </div>
        <div className="text-center sm:text-left mb-5 sm:mb-0">
          &copy; 2022 OneStox
        </div>
      </div>
    </footer>
  );
};

export default Footer;
