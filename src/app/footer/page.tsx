"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

// Import the logo image
import logoImage from "../../../public/logo-gmu.png";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        
        {/* Logo & Branding */}
        <div className="flex items-center gap-3">
          <Image
            src={logoImage}
            alt="Ghulam Muneer Uddin"
            width={50}
            height={50}
            className="rounded-lg"
          />
          <span className="text-xl font-semibold text-yellow-500">Ghulam Muneer Uddin</span>
        </div>

        {/* Copyright Text */}
        <p className="text-sm text-gray-400 mt-4 md:mt-0">
          © {new Date().getFullYear()} Ghulam Muneer Uddin. All Rights Reserved.
        </p>

        {/* Social Links */}
        <div className="flex gap-6 mt-4 md:mt-0">
          <Link href="https://www.facebook.com/ghulam.muneeruddin/" target="_blank">
            <FaFacebook className="text-2xl text-blue-600 hover:text-blue-400 transition-all" />
          </Link>
          <Link href="https://github.com/00Muneer12/" target="_blank">
            <FaGithub className="text-2xl text-gray-300 hover:text-gray-500 transition-all" />
          </Link>
          <Link href="https://www.linkedin.com/in/ghulam-muneer-uddin-942a8728b/" target="_blank">
            <FaLinkedin className="text-2xl text-blue-500 hover:text-blue-300 transition-all" />
          </Link>
          <Link href="https://x.com/GhulamMuneer111/" target="_blank">
            <FaXTwitter className="text-2xl text-gray-300 hover:text-gray-500 transition-all" />
          </Link>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
