import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const email = "support@gnfinvestors.vercel.app";
  const phone = "+1 (123) 456-7890";

  return (
    <div>
      <div className="py-8 px-4 bg-gray-800 text-white text-center">
        <p>&copy; {currentYear} Global Network For Investors. All rights reserved.</p>
        <p className="mt-2">
          Contact us:{" "}
          <a href={`mailto:${email}`} className="text-blue-400 hover:underline">
            {email}
          </a>{" "}
          |{" "}
          <a href={`tel:${phone}`} className="text-blue-400 hover:underline">
            {phone}
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
