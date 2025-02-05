'use client';
import React, { ReactNode } from 'react';
import Image from 'next/image';
import { FaLinkedin, FaGithub, FaWhatsapp, FaFacebook } from 'react-icons/fa';
import { SiVercel } from 'react-icons/si';

// Button Component
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, className = '', ...props }) => (
  <button
    className={`py-3 px-8 text-lg font-semibold rounded-full transition duration-300 ease-in-out transform hover:scale-105 shadow-md ${className}`}
    {...props}
  >
    {children}
  </button>
);

// About Component
const About: React.FC = () => {
  return (
    <div className="text-blue-900 body-font bg-gradient-to-r from-blue-50 to-pink-100 min-h-screen flex flex-col items-center justify-center py-10 px-5">
      <div className="container mx-auto flex flex-col items-center text-center">
        <Image
          src="/munpic.png"
          alt="Muneer"
          width={200}
          height={200}
          priority
          className="w-48 h-48 mb-6 rounded-full border-4 border-blue-300 shadow-lg"
        />
        <h1 className="text-4xl font-extrabold mb-4 text-blue-800">About Me</h1>
        <p className="mb-6 text-lg text-gray-700 max-w-2xl leading-relaxed">
          I am a dedicated web developer passionate about crafting user-centric applications. My expertise in front-end development, combined with my pharmacy background, helps me build impactful solutions. Skilled in TypeScript, HTML, CSS, Next.js, and Figma, I thrive on challenges that merge healthcare and web technology.
        </p>
        <div className="flex space-x-4">
          <Button className="bg-blue-700 text-white hover:bg-blue-600"><FaLinkedin /></Button>
          <Button className="bg-gray-900 text-white hover:bg-gray-800"><FaGithub /></Button>
          <Button className="bg-black text-white hover:bg-gray-700"><SiVercel /></Button>
          <Button className="bg-green-500 text-white hover:bg-green-400"><FaWhatsapp /></Button>
          <Button className="bg-blue-600 text-white hover:bg-blue-500"><FaFacebook /></Button>
        </div>
      </div>
      <Skills />
    </div>
  );
};

// Skills Component
interface SkillProps {
  skill: string;
  level: number;
}

const SkillBar: React.FC<SkillProps> = ({ skill, level }) => (
  <div className="w-full max-w-lg mx-auto mb-6">
    <p className="text-lg font-semibold text-blue-800">{skill}</p>
    <div className="w-full bg-gray-300 h-6 rounded-full overflow-hidden">
      <div
        className="h-full bg-gradient-to-r from-blue-400 to-pink-400 rounded-full transition-all"
        style={{ width: `${level}%` }}
      ></div>
    </div>
  </div>
);

const Skills: React.FC = () => {
  const skills: SkillProps[] = [
    { skill: 'HTML', level: 90 },
    { skill: 'CSS', level: 85 },
    { skill: 'JavaScript', level: 80 },
    { skill: 'TypeScript', level: 75 },
    { skill: 'React', level: 70 },
    { skill: 'Next.js', level: 65 },
  ];

  return (
    <div className="mt-12 text-center w-full">
      <h2 className="text-3xl font-bold text-blue-800 mb-8 underline">My Skills</h2>
      {skills.map((s) => (
        <SkillBar key={s.skill} skill={s.skill} level={s.level} />
      ))}
    </div>
  );
};

export default About;
