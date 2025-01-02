'use client';
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

// Import the logo image at the top
import logoImage from "../../../public/logo-gmu.png";

const Footer = () => {
  return (
    <div className="bg-blue-200">
      <footer className="text-SLATE-900 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <Image
              src={logoImage}  // Use the imported image here
              alt="GHULAM MUNEER UDDIN"
              width={100}
              height={100}
              className="w-[58px]"
            />
            <span className="ml-3 text-xl">Ghulam Muneer Uddin </span>
          </a>
          <p className="text-sm text-red-950 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2024 Ghulam Muneer Uddin
          </p>
          <span className="inline-flex sm:ml- sm:mt-0 mt-4 justify-center sm:justify-start">
            <Link target="_blank" href={"https://www.facebook.com/ghulam.muneeruddin/"}>
              <FaFacebook className="text-3xl hover:text-[#0000FF]" />
            </Link>
            <Link target="_blank" href={"https://github.com/00Muneer12/"}>
              <FaGithub className="text-3xl hover:text-[#2b3137]" />
            </Link>
            <Link target="_blank" href={"https://www.linkedin.com/in/ghulam-muneer-uddin-942a8728b/"}>
              <FaLinkedin className="text-3xl hover:text-[#00008B]" />
            </Link>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
