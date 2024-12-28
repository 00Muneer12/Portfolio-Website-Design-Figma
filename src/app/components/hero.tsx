import React from 'react'
import Image from 'next/image'
import Link from 'next/link' 
const Hero = () => {
  return (
    <div className="grid lg:grid-cols-2 md:grid-cols-1 bg-slate-100 ">
    <div className="ml-[10%] mt-0">
        <Image src="/MuneerPic-removebg-preview.png" alt="Hero Image" width={400} height={350} className=" ml-[35%]"/> 
        </div>
      <div>
        <h2 className="text-5xl text-left gap-y-2 ml-[30%] font-bold text-blue-700 mt-24" >Hi <br />I am <br />Ghulam Muneer Uddin <br />
        Frontend Developer <br /> UI / UX Designer</h2>
    
    
   <div className="ml-[30%] flex gap-14 mt-20 text-blue-700">
        <button className="text-xl p-1 border-2 border-cyan-600 gap-4 rounded-xl"><Link href="/about">About Me</Link></button> 
        <button className="text-xl p-1 border-2 border-cyan-600 gap-4 rounded-xl"><Link href="/contact me">Contact Me</Link></button>
    </div>
    </div>
    </div>
  );
}
export default Hero