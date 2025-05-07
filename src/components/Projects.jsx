import React from 'react';
import { SiScratch, SiHtml5, SiCss3, SiJavascript, SiTailwindcss, SiReact, SiDjango } from "react-icons/si";

const Schools = () => {

  return (
    <section className="p-40">
      <div className="container mx-auto">
        <h2 className="font-bold mb-6">Projects</h2>
        <div className="text-left grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              className="p-5 bg-white shadow-md rounded-md hover:shadow-xl hover:p-10 duration-500"
            >
              <div className="mb-[50px]">
                <h3 className="text-3xl font-bold">Cybersecurity Website</h3>
                <p className="text-xl text-gray-400">
                  <em>at SnoopEdu</em>
                </p>
              </div>
              <p className="text-xl flex items-center">
                Technologies used: <SiHtml5 /><SiCss3 /><SiJavascript />
              </p>
              <p className="text-xl">A School Project I developed with my classmates</p>
              <a
              href="https://virakbothsoth.github.io/cybersecurity"
              className="font-bold text-b"
              >
              Website
              </a>
              <a
              href="https://github.com/VirakbothSoth/virakbothsoth.github.io/tree/main/cybersecurity"
              className="font-bold text-b"
              >
              Github Repo
              </a>
            </div>
            <div
              className="p-5 bg-white shadow-md rounded-md hover:shadow-xl hover:p-10 duration-500"
            >
              <div className="mb-[50px]">
                <h3 className="text-3xl font-bold">Password Generator</h3>
                <p className="text-xl text-gray-400">
                  <em>at home</em>
                </p>
              </div>
              <p className="text-xl flex items-center">
                Technologies used: <SiHtml5 /><SiCss3 /><SiJavascript />
              </p>
              <p className="text-xl">A simple password generator website, nothing else</p>
              <a
              href="https://virakbothsoth.github.io/passgen"
              className="font-bold text-b"
              >
              Website
              </a>
              <a
              href="https://github.com/VirakbothSoth/Virakboths-Passgen/tree/main"
              className="font-bold text-b"
              >
              Github Repo
              </a>
            </div>
            <div
              className="p-5 bg-white shadow-md rounded-md hover:shadow-xl hover:p-10 duration-500"
            >
              <div className="mb-[50px]">
                <h3 className="text-3xl font-bold">This Portfolio</h3>
                <p className="text-xl text-gray-400">
                  <em>at home</em>
                </p>
              </div>
              <p className="text-xl flex items-center">
                Technologies used: <SiHtml5 /><SiCss3 /><SiReact /><SiTailwindcss />
              </p>
              <p className="text-xl">This very website is one of my projects, too!</p>
            </div>
            <div
              className="p-5 bg-white shadow-md rounded-md hover:shadow-xl hover:p-10 duration-500"
            >
              <div className="mb-[50px]">
                <h3 className="text-3xl font-bold">Various Scratch Projects</h3>
                <p className="text-xl text-gray-400">
                  <em>at CS50S, Algorithmics</em>
                </p>
              </div>
              <p className="text-xl flex items-center">
                Technologies used: <SiScratch />
              </p>
              <p className="text-xl">Probably one of my first Coding Projects, some were made for fun & some were just school projects</p>
              <a
              href="https://scratch.mit.edu/projects/787673812/"
              className="font-bold text-b"
              >
              Solar System Clicker
              </a>
            </div>
            <div
              className="p-5 bg-white shadow-md rounded-md hover:shadow-xl hover:p-10 duration-500"
            >
              <div className="mb-[50px]">
                <h3 className="text-3xl font-bold">Link Shortener</h3>
                <p className="text-xl text-gray-400">
                  <em>at CS50W</em>
                </p>
              </div>
              <p className="text-xl flex items-center">
                Technologies used: <SiHtml5 /><SiCss3 /><SiJavascript /><SiDjango />
              </p>
              <p className="text-xl">A simple link shortener app submitted to CS50W</p>
              <a
              href="https://github.com/VirakbothSoth/linkshortener"
              className="font-bold text-b"
              >
              Github Repo
              </a>
            </div>
            <div
              className="p-5 bg-white shadow-md rounded-md hover:shadow-xl hover:p-10 duration-500"
            >
              <div className="mb-[50px]">
                <h3 className="text-3xl font-bold">Link Shortener</h3>
                <p className="text-xl text-gray-400">
                  <em>at CS50W</em>
                </p>
              </div>
              <p className="text-xl flex items-center">
                Technologies used: <SiHtml5 /><SiCss3 /><SiJavascript /><SiDjango />
              </p>
              <p className="text-xl">A simple link shortener app submitted to CS50W</p>
              <a
              href="https://github.com/VirakbothSoth/linkshortener"
              className="font-bold text-b"
              >
              Github Repo
              </a>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Schools;
