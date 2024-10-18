import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#302863] p-6 w-full font-inter rounded-lg">
      {/* Full width footer */}
      <div className="flex flex-col md:flex-row justify-between items-center max-w-screen-xl mx-auto px-5 md:px-20">
        {/* Logo on the left */}
        <div className="flex items-center mb-4 md:mb-0">
          <img
            src="https://s3-alpha-sig.figma.com/img/2f7f/50c6/183b51f38eb8b91d7e85154965bf57aa?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iViBw5Fx4yFpj0GyyJrnlmWT1nPuo8OTt4vMHNdAFM-rlqEEAnn0U55Yeq5Zovi9d-l3v0oQ-zLXFl56pEqFbb~graJ~417fEn2328ak1a9O-m4a8d7YsDOQM6y-IKgy70J8ARpfwqWroJSwJRphSyMfE8qnFLNw6OB0FkjsyUNa-T~aGXNnKS7unxAy90f7KrP8ulzaHH~V3TrgwgIN5-b6EM6klEIknpFv31MsIrnScrRZFY4v~GMReOJUZU3IMdPSeyW7kKIydztS8thGrlEbbfwhI5DKBONN0QavlyVWmlvTik0vBk5ZHN2oc~KQmPDxwANa~6zKvfM0uZkqsw__" // Replace with your logo src
            alt="Logo"
            className="w-32 h-auto rounded-lg bg-white" // Added rounded corners
          />
        </div>

        {/* Right Section with Query Text, Email, and Social Icons */}
        <div className="flex flex-col items-center md:items-end w-full md:w-auto">
          {/* Query Text */}
          <h2 className="text-white text-lg md:text-xl font-semibold mb-2 text-center">
            Got queries? Mail Us
          </h2>
          {/* Email Box */}
          <div className="flex items-center bg-white border border-white rounded-lg p-2 mb-2 w-full max-w-xs md:max-w-full bg-blue-500">
            <img
              src="https://res.cloudinary.com/dnltrumxv/image/upload/v1729157174/jkxna77ylnnjhbuhuprg.png" // Mail icon
              alt="Mail Icon"
              className="w-6 h-6 mr-2"
            />
            <span className="text-black text-sm break-words">
              info.shoppealuxworkshop@gmail.com
            </span>
          </div>
          {/* Social Icons */}
          <div className="flex space-x-4 mt-5">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.icons8.com/ios-filled/50/ffffff/twitter-squared.png" // Twitter Icon
                alt="Twitter"
                className="w-6 h-6"
              />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.icons8.com/ios-filled/50/ffffff/facebook-new.png" // Facebook Icon
                alt="Facebook"
                className="w-6 h-6"
              />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.icons8.com/ios-filled/50/ffffff/instagram-new.png" // Instagram Icon
                alt="Instagram"
                className="w-6 h-6"
              />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.icons8.com/ios-filled/50/ffffff/github.png" // GitHub Icon
                alt="GitHub"
                className="w-6 h-6"
              />
            </a>
          </div>
        </div>
      </div>
      {/* Footer Note */}
      <p className="text-white text-xs text-center mt-4">
        © 2024 Shoppeal Tech. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
