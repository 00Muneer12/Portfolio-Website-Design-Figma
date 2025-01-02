'use client';
import React from 'react';
import Image from 'next/image';
import { FaLinkedin, FaGithub, FaWhatsapp, FaFacebook } from 'react-icons/fa';
import { SiVercel } from 'react-icons/si';

// Define prop types for the Button component
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

// Button Component
const Button: React.FC<ButtonProps> = ({ children, className = '', ...props }) => (
  <button className={`py-2 px-6 text-lg rounded ${className}`} {...props}>
    {children}
  </button>
);

// About Component
const About = () => {
  return (
    <div className="text-blue-600 body-font bg-slate-100">
      <div className="container mx-auto flex px-5 py-10 items-center justify-center flex-col">
        <Image
          src="/munpic.png"
          alt="Muneer"
          width={400}
          height={400}
          priority
          className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
        />
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium hover:text-white text-blue-800">
            About Me
          </h1>
          <p className="mb-8 leading-relaxed hover:text-white text-blue-600">
            I am a dedicated web developer with a passion for creating user-centric applications. Leveraging my expertise in front-end development and a background as a pharmacist, I bring a unique perspective to building solutions that prioritize functionality and aesthetics. Skilled in TypeScript, HTML, CSS, Next.js, and Figma, I thrive on tackling challenges at the intersection of healthcare and web technology. My goal is to craft impactful, innovative solutions that enhance user experiences and make a difference.
          </p>
          <div className="flex justify-center space-x-4">
            <Button
              aria-label="LinkedIn"
              className="inline-flex text-xl text-blue-700 hover:bg-pink-300"
            >
              <FaLinkedin />
            </Button>
            <Button
              aria-label="GitHub"
              className="inline-flex text-xl text-blue-700 hover:bg-pink-300"
            >
              <FaGithub />
            </Button>
            <Button
              aria-label="Vercel"
              className="inline-flex text-xl text-blue-700 hover:bg-pink-300"
            >
              <SiVercel />
            </Button>
            <Button
              aria-label="WhatsApp"
              className="inline-flex text-xl text-blue-700 hover:bg-pink-300"
            >
              <FaWhatsapp />
            </Button>
            <Button
              aria-label="Facebook"
              className="inline-flex text-xl text-blue-700 hover:bg-pink-300"
            >
              <FaFacebook />
            </Button>
          </div>
        </div>
      </div>
      <Skills />
    </div>
  );
};

// Skills Component with Progress Bars
interface Skill {
  skill: string;
  level: number;
}

const SkillBar: React.FC<Skill> = ({ skill, level }) => (
  <div>
    <p className="mb-3 text-2xl text-blue-700 font-semibold ml-16">{skill}</p>
    <div className="w-[80%] bg-gray-300 h-5 mb-4 rounded-2xl">
      <div
        className="bg-pink-300 h-full rounded-2xl"
        style={{ width: `${level}%` }}
      ></div>
    </div>
  </div>
);

export const Skills: React.FC = () => {
  const skills: Skill[] = [
    { skill: 'HTML', level: 80 },
    { skill: 'CSS', level: 70 },
    { skill: 'JavaScript', level: 60 },
    { skill: 'TypeScript', level: 70 },
    { skill: 'React', level: 40 },
    { skill: 'Next.js', level: 40 },
  ];

  return (
    <div>
      <h2 className="mt-18 mb-24 text-center text-4xl font-bold underline text-blue-800">
        My Skills
      </h2>
      {skills.map((s) => (
        <SkillBar key={s.skill} skill={s.skill} level={s.level} />
      ))}
    </div>
  );
};

// Default export is required for Next.js pages
export default About;
