import React from 'react';
import { SiScratch, SiHtml5, SiCss3, SiJavascript, SiTailwindcss, SiReact, SiDjango } from "react-icons/si";
import { cy, pg, fc, sc, ls, pf, su } from "../assets/images/preview";
import { FaCode } from "react-icons/fa";

const Schools = () => {
  return (
    <section className="p-40">
      <div className="container mx-auto">
        <h2 className="section-title"><FaCode />Projects</h2>
        <div className="text-left grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card">
            <div>
              <h3 className="text-3xl font-bold">Link Shortener</h3>
              <p className="text-xl text-gray-400">
                <em>at CS50W</em>
              </p>
            </div>
            <img src={ls} alt="Link Shortener" className="web-preview" />
            <p className="text-xl flex items-center">
              Technologies used: <SiHtml5 /><SiCss3 /><SiJavascript /><SiDjango />
            </p>
            <p className="text-xl">A simple link shortener app submitted to CS50W</p>
            <a
            href="https://github.com/VirakbothSoth/Virakboths-Link-Shortener"
            className="font-bold text-b"
            >
            Github Repo
            </a>
          </div>
          <div className="card">
            <div>
              <h3 className="text-3xl font-bold">Cybersecurity Website</h3>
              <p className="text-xl text-gray-400">
                <em>at SnoopEdu</em>
              </p>
            </div>
            <img src={cy} alt="Cybersecurity Website" className="web-preview" />
            <p className="text-xl flex items-center">
              Technologies used: <SiHtml5 /><SiCss3 /><SiJavascript />
            </p>
            <p className="text-xl">A School Project I developed with my classmates</p>
            <div className='flex gap-4'>
              <a
              href="/projects/cybersecurity"
              className="font-bold text-b"
              >
              Website
              </a>
              <a
              href="https://github.com/virakbothportfolio/virakbothportfolio.github.io"
              className="font-bold text-b"
              >
              Github Repo
              </a>
            </div>
          </div>
          <div className="card">
            <div>
              <h3 className="text-3xl font-bold">Password Generator</h3>
              <p className="text-xl text-gray-400">
                <em>at home</em>
              </p>
            </div>
            <img src={pg} alt="Passgen" className="web-preview" />
            <p className="text-xl flex items-center">
              Technologies used: <SiHtml5 /><SiCss3 /><SiJavascript />
            </p>
            <p className="text-xl">A simple password generator website, nothing else</p>
            <div className='flex gap-4'>
              <a
              href="/projects/passgen"
              className="font-bold text-b"
              >
              Website
              </a>
              <a
              href="https://github.com/VirakbothSoth/Virakboths-Passgen"
              className="font-bold text-b"
              >
              Github Repo
              </a>
            </div>
          </div>
          <div className="card">
            <div>
              <h3 className="text-3xl font-bold">This Portfolio</h3>
              <p className="text-xl text-gray-400">
                <em>at home</em>
              </p>
            </div>
            <img src={pf} alt="Portfolio" className="web-preview" />
            <p className="text-xl flex items-center">
              Technologies used: <SiHtml5 /><SiCss3 /><SiReact /><SiTailwindcss />
            </p>
            <p className="text-xl">This very website is one of my projects, too!</p>
          </div>
          <div className="card">
            <div>
              <h3 className="text-3xl font-bold">FreeCodeCamp Static Webpages</h3>
              <p className="text-xl text-gray-400">
                <em>at FreeCodeCamp</em>
              </p>
            </div>
            <img src={fc} alt="Static Projects" className="web-preview" />
            <p className="text-xl flex items-center">
              Technologies used: <SiHtml5 /><SiCss3 />
            </p>
            <p className="text-xl">This includes various projects built for freecodecamp.</p>
            <div className='flex gap-4'>
              <a
              href="/projects/recipe"
              className="font-bold text-b"
              >
              Recipe
              </a>
              <a
              href="/projects/tribute"
              className="font-bold text-b"
              >
              Tribute Page
              </a>
              <a
              href="/projects/techdoc"
              className="font-bold text-b"
              >
              Tech Docs
              </a>
              <a
              href="/projects/survey"
              className="font-bold text-b"
              >
              Survey
              </a>
              <a
              href="/projects/mockportfolio"
              className="font-bold text-b"
              >
              Mock Portfolio
              </a>
            </div>
          </div>
          <div className="card">
            <div>
              <h3 className="text-3xl font-bold">Odin Project Static Webpages</h3>
              <p className="text-xl text-gray-400">
                <em>at The Odin Project</em>
              </p>
            </div>
            <img src={su} alt="Sign-Up" className="web-preview" />
            <p className="text-xl flex items-center">
              Technologies used: <SiHtml5 /><SiCss3 />
            </p>
            <p className="text-xl">This includes various projects built for the odin project.</p>
            <div className='flex gap-4'>
              <a
              href="/projects/signup"
              className="font-bold text-b"
              >
              Sign-Up Form
              </a>
            </div>
          </div>
          <div className="card">
            <div>
              <h3 className="text-3xl font-bold">Various Scratch Projects</h3>
              <p className="text-xl text-gray-400">
                <em>at CS50S, Algorithmics</em>
              </p>
            </div>
            <img src={sc} alt="Scratch Project" className="web-preview" />
            <p className="text-xl flex items-center">
              Technologies used: <SiScratch />
            </p>
            <p className="text-xl">One of my 1st Coding Projects, some are school projects</p>
            <div className='flex gap-4'>
              <a
              href="https://scratch.mit.edu/projects/787673812"
              className="font-bold text-b"
              >
              Solar System Clicker
              </a>
              <a
              href="https://scratch.mit.edu/projects/782982623"
              className="font-bold text-b"
              >
              Untitled Clicker
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schools;
