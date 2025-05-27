import React from 'react';
import { PiNotepadFill } from "react-icons/pi";

const Notes = () => {
  return (
    <section className="p-40">
      <div className="container mx-auto">
        <h2 className="section-title"><PiNotepadFill/>Personal Notes</h2>
        <div className="text-left grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card">
            <h3 className="text-3xl font-bold mb-[50px]">something.txt</h3>
            <p className="text-xl">A simple link shortener app submitted to CS50W</p>
            <a
            href="https://github.com/VirakbothSoth/Virakboths-Link-Shortener"
            className="font-bold text-b"
            >
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Notes;
