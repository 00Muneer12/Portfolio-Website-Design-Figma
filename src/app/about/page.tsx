'useClient'
import React from 'react'
import Image from 'next/image'
import { FaLinkedin } from 'react-icons/fa6'
import { FaGithub } from "react-icons/fa";
import { SiVercel } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import {Button} from '../../components/ui/button';
const About = () => {
  return (
    <div>

      <div className="text-blue-600 body-font bg-slate-100">
  <div className="container mx-auto flex px-5 py-0 items-center justify-center flex-col">
    <Image
      src="/munpic.png" className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
      alt="muneer" width={400} height={400}/>
    <div className="text-center lg:w-2/3 w-full">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium hover:text-white text-blue-800">
        About Me
      </h1>
      <p className="mb-8 leading-relaxed  hover:text-white text-blue-600">
      I am a dedicated web developer with a passion for creating user-centric applications. Leveraging my expertise in front-end development and a background as a pharmacist, I bring a unique perspective to building solutions that prioritize functionality and aesthetics. Skilled in TypeScript, HTML, CSS, Next.js, and Figma, I thrive on tackling challenges at the intersection of healthcare and web technology. My goal is to craft impactful, innovative solutions that enhance user experiences and make a difference.
      </p>
      <div className="flex justify-center">
        <Button className="inline-flex text-{30px} text-blue-700 border-0 py-2 px-6  hover:bg-pink-300 rounded text-lg">
          <FaLinkedin/>
        </Button>
        <Button className="inline-flex text-{30px} text-blue-700 border-0 py-2 px-6  hover:bg-pink-300 rounded text-lg">
          <FaGithub />
        </Button>
        <Button className="inline-flex text-{30px} text-blue-700 border-0 py-2 px-6  hover:bg-pink-300 rounded text-lg">
        <SiVercel />
        </Button>
        <Button className="inline-flex text-{30px} text-blue-700 border-0 py-2 px-6  hover:bg-pink-300 rounded text-lg">
        <FaWhatsapp />
        </Button>
        <Button className="inline-flex text-{30px} text-blue-700 border-0 py-2 px-6  hover:bg-pink-300 rounded text-lg">
        <FaFacebook />
        </Button>
      </div>
    </div>
  </div>
<div/>
<Skills />
    </div>
    </div>
  )
}
export default About

export const Skills =() =>{
  return (
    <div>
      <h2 className="mt-18 mb-24 text-center text-4xl font-bold underline text-blue-800"> My Skills </h2>
      <ul>
      <li className='mb-3 text-2xl text-blue-700 font-semibold ml-16'>HTML</li><div className='w-[80%] bg-pink-300 h-5 mb-4 text-slate-500 rounded-2xl'></div>
      <li className='mb-3 text-2xl text-blue-700 font-semibold ml-16'>CSS</li><div className='w-[70%] bg-pink-300 h-5 mb-4 text-slate-500 rounded-2xl'></div>
      <li className='mb-3 text-2xl text-blue-700 font-semibold ml-16'>JavaScript</li><div className='w-[60%] bg-pink-300 h-5 mb-4 text-slate-500 rounded-2xl'></div>
      <li className='mb-3 text-2xl text-blue-700 font-semibold ml-16'>TypeScript</li><div className='w-[70%] bg-pink-300 h-5 mb-4 text-slate-500 rounded-2xl'></div>
      <li className='mb-3 text-2xl text-blue-700 font-semibold ml-16'>React</li><div className='w-[40%] bg-pink-300 h-5 mb-4 text-slate-500 rounded-2xl'></div>
      <li className='mb-3 text-2xl text-blue-700 font-semibold ml-16'>Next.js</li><div className='w-[40%] bg-pink-300 h-5 mb-4 text-slate-500 rounded-2xl'></div>
      </ul>
    </div>
);
}

