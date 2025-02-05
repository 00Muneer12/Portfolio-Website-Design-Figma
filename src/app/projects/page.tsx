import React from "react";
import Link from "next/link";
import Image from "next/image";

// Import images
import figmaResumeImage from "../../../public/FigmaPortfolio1.jpg";
import cvImage from "../../../public/cvmuneer.jpg";

const Project = () => {
  return (
    <div id="Project" className="bg-slate-100 py-24">
      <section className="container mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-blue-800">My Projects</h1>
          <p className="text-gray-600 mt-2 text-lg">
            Here are some of the projects I have worked on.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Project Card Component */}
          {[{
            title: "Static Resume",
            description: "A static resume project created for practice and learning.",
            imgSrc: figmaResumeImage,
            link: "https://milestone-1-abdulrehman-shaikhs-projects.vercel.app/",
          },
          {
            title: "Static Resume 2",
            description: "Another static resume project to demonstrate design skills.",
            imgSrc: cvImage,
            link: "https://milestone-1-abdulrehman-shaikhs-projects.vercel.app/",
          }].map((project, index) => (
            <div key={index} className="relative group overflow-hidden rounded-xl shadow-lg bg-white">
              <Image
                alt={project.title}
                className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
                src={project.imgSrc}
                width={500}
                height={300}
              />
              <div className="p-6 text-center">
                <h2 className="text-lg font-semibold text-blue-700">{project.title}</h2>
                <p className="text-gray-600 text-sm mt-2">{project.description}</p>
                <Link href={project.link} target="_blank">
                  <p className="mt-3 text-blue-500 font-medium hover:underline">View Project →</p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Project;
