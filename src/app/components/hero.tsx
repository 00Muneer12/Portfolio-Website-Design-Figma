import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="grid lg:grid-cols-2 md:grid-cols-1 bg-slate-100 min-h-screen items-center px-10">
      {/* Left Side - Image */}
      <div className="flex justify-center lg:justify-end">
        <Image
          src="/munpic.png"
          alt="Hero Image"
          width={400}
          height={400}
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* Right Side - Text */}
      <div className="text-left space-y-6 lg:ml-10">
        <h2 className="text-5xl font-extrabold text-blue-700 leading-tight">
          Hi, <br /> I am <br />
          <span className="text-cyan-600">Ghulam Muneer Uddin</span> <br />
          Frontend Developer <br /> UI / UX Designer
        </h2>

        {/* Buttons */}
        <div className="flex gap-6 mt-6">
          <Link href="/about">
            <button className="text-lg font-semibold px-6 py-3 border-2 border-cyan-600 rounded-xl text-cyan-600 transition-all hover:bg-cyan-600 hover:text-white">
              About Me
            </button>
          </Link>

          <Link href="/contact">
            <button className="text-lg font-semibold px-6 py-3 border-2 border-cyan-600 rounded-xl text-cyan-600 transition-all hover:bg-cyan-600 hover:text-white">
              Contact Me
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
