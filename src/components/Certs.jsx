import React, { useState } from 'react';
import { csx, csp, css, csw, jhu, fes, bes, fss, rs, wds, f1, f2, f3, f4, f5, f6, f7, b1, b2, b3, b4, b5, b6, b7, s1, s2, s3, s4, s5, vpe, iv, ve, ib_be, ib_js, ud, dc, lu, cc, p1, p2, p3, hks, hkse, rwd, scp, awd } from '../assets/images/certs';
import { PiCertificate } from "react-icons/pi";
import Certificate from './Certificate';

const Certs = () => {
  const [activeCategory, setActiveCategory] = useState('cs50');

  // Certificate arrays
  const specCerts = [
    { image: fss, url: 'https://coursera.org/verify/specialization/4LCWZD00SIPH', altText: 'Meta Full-Stack Specialization' },
    { image: fes, url: 'https://coursera.org/verify/specialization/N1KVLB2O64O2', altText: 'Meta Front-End Specialization' },
    { image: bes, url: 'https://coursera.org/verify/specialization/W74F1I8L92RQ', altText: 'Meta Back-End Specialization' },
    { image: rs, url: 'https://coursera.org/verify/specialization/6UACQ0DBG02V', altText: 'Meta React Specialization' },
    { image: wds, url: 'https://coursera.org/verify/specialization/WQ4IAJ7I2PVJ', altText: 'Meta Web Dev Fundamentals Specialization' },
    { image: s5, url: 'https://coursera.org/verify/specialization/78PBQYZS06B9', altText: 'Scrimba AI for Web Development Specialization' }
  ];

  const cs50Certs = [
    { image: csx, url: 'https://cs50.harvard.edu/certificates/9d966695-a4b6-4154-9952-52e4d2efa692', altText: 'CS50x Certificate' },
    { image: css, url: 'https://cs50.harvard.edu/certificates/a06a26e2-64e9-438a-8666-977af8d062ed', altText: 'CS50S Certificate' },
    { image: csp, url: 'https://cs50.harvard.edu/certificates/7226859c-c657-4563-b9c8-99f4873114f6', altText: 'CS50P Certificate' },
    { image: csw, url: 'https://cs50.harvard.edu/certificates/bad7e1c0-84e5-40f5-a565-77ed246e9490', altText: 'CS50W Certificate' },
  ];

  const webCerts = [
    { image: f1, url: 'https://coursera.org/verify/MMU2WMZEKWOA', altText: 'Meta Front-End Intro Certificate' },
    { image: f2, url: 'https://coursera.org/verify/LO2FMY48V1BX', altText: 'Meta JavaScript Certificate' },
    { image: f3, url: 'https://coursera.org/verify/0RAM91AXMKNF', altText: 'Meta HTML CSS Depth Certificate' },
    { image: f4, url: 'https://coursera.org/verify/SFY4SH8WP7J0', altText: 'Meta React Basics Certificate' },
    { image: f5, url: 'https://coursera.org/verify/Z5OHBQ707WJW', altText: 'Meta React Advanced Certificate' },
    { image: f6, url: 'https://coursera.org/verify/QNQLDDB6CYAT', altText: 'Meta UX UI Certificate' },
    { image: f7, url: 'https://coursera.org/verify/MGPD0EVNC2FY', altText: 'Meta Front-End Capstone Certificate' },

    { image: b1, url: 'https://coursera.org/verify/ACCBKW4XQTWK', altText: 'Meta Back-End Intro Certificate' },
    { image: b2, url: 'https://coursera.org/verify/76NFVZC1XF3E', altText: 'Meta Python Certificate' },
    { image: b3, url: 'https://coursera.org/verify/QVJ03ZPZPJWJ', altText: 'Meta Intro to Databases Certificate' },
    { image: b4, url: 'https://coursera.org/verify/K638QW9RHVZT', altText: 'Meta Django Certificate' },
    { image: b5, url: 'https://coursera.org/verify/KEFAZVT628EP', altText: 'Meta API Certificate' },
    { image: b6, url: 'https://coursera.org/verify/T5QTGTRCRD35', altText: 'Meta Full Stack Certificate' },
    { image: b7, url: 'https://coursera.org/verify/QDB61GFOAD5W', altText: 'Meta Back-End Capstone Certificate' },

    { image: iv, url: 'https://coursera.org/verify/74FG463109SB', altText: 'Meta Coding Interview Certificate' },
    { image: ve, url: 'https://coursera.org/verify/4NSF48QD3FIS', altText: 'Meta Version Control Certificate' },

    { image: ib_js, url: 'https://coursera.org/verify/YFSJZECZWFAG', altText: 'IBM Javascript Essentials Certificate' },
    { image: ib_be, url: 'https://coursera.org/verify/S7O0PT89GJNY', altText: 'IBM Back-End Apps with Node & Express Certificate' },

    { image: jhu, url: 'https://coursera.org/verify/8DILH4N0ABM6', altText: 'JHU Web Dev Certificate' },

    { image: rwd, url: 'https://freecodecamp.org/certification/virakboth_soth/responsive-web-design', altText: 'FreeCodeCamp Web Design Certificate' },

    { image: awd, url: 'https://coursera.org/verify/XD9F6TQH85E4', altText: 'Accessible Web Development Certificate' },
  ];

  const otherCerts = [
    { image: cc, url: 'https://codecombat.com/certificates/6533825122ab2d0031d4ba79', altText: 'CodeCombat Certificate' },
    { image: p1, url: 'https://coursera.org/verify/NTMXA8WACBNQ', altText: 'UOM Python Intro Certificate' },
    { image: p2, url: 'https://coursera.org/verify/Z47RD2HY9PYR', altText: 'UOM Python Data Certificate' },
    { image: p3, url: 'https://coursera.org/verify/MTNK7QQL6XA3', altText: 'UOM Python Web Data Certificate' },
    { image: hks, url: 'https://coursera.org/verify/YHEPBKM5P9UU', altText: 'HKU Scratch Certificate' },
    { image: hkse, url: 'https://coursera.org/verify/GTPPJ35GF7JI', altText: 'HKU Software Engineer Certificate' },
    { image: scp, url: 'https://www.freecodecamp.org/certification/virakboth_soth/scientific-computing-with-python-v7', altText: 'FreeCodeCamp Scientific Python Certificate' },
  ];

  const aiCerts = [
    { image: s1, url: 'https://coursera.org/verify/RCW3SNB46E1N', altText: 'Scrimba Learn to Code with AI Certificate' },
    { image: s2, url: 'https://coursera.org/verify/F304YJ6YFM2X', altText: 'Scrimba Web Dev with AI Certificate' },
    { image: s3, url: 'https://coursera.org/verify/ZDSBCX0EHPNG', altText: 'Scrimba AI Engineering Intro Certificate' },
    { image: s4, url: 'https://coursera.org/verify/6YOVVKETFY5F', altText: 'Scrimba Deploy AI Apps with Cloudflare Certificate' },
    { image: vpe, url: 'https://coursera.org/verify/5UQ6HQRO04K2', altText: 'Vanderbilt Prompt Engineering Certificate' },
  ];

  const ciscoCerts = [
    { image: dc, url: 'https://netacad.com/certificates?issuanceId=f32fb5f1-cd7f-4210-9e14-1b4a841edbdd', altText: 'Cisco Digital Content Creation Certificate' },
    { image: ud, url: 'https://netacad.com/certificates?issuanceId=b91dac97-f5d9-4ea6-acab-9397fb44401b', altText: 'Cisco Using Devices Certificate' },
    { image: lu, url: 'https://netacad.com/certificates?issuanceId=9a324cf8-27a8-488e-8cd3-c0af2158ac38', altText: 'Cisco Linux Unhatched Certificate' },
  ];

  // Render certificates based on active category
  const renderCertificates = () => {
    let certificates = [];
    if (activeCategory === 'special') {
      certificates = specCerts;
    } else if (activeCategory === 'cs50') {
      certificates = cs50Certs;
    } else if (activeCategory === 'web') {
      certificates = webCerts;
    } else if (activeCategory === 'ai') {
      certificates = aiCerts;
    } else if (activeCategory === 'cisco') {
      certificates = ciscoCerts;
    } else if (activeCategory === 'other') {
      certificates = otherCerts;
    }

    return certificates.map((cert, index) => (
      <Certificate
        key={index}
        image={cert.image}
        url={cert.url}
        altText={cert.altText}
      />
    ));
  };

  return (
    <section className="p-80">
      <div className="container mx-auto cert-section">
        <h2 className="section-title"><PiCertificate />Certificates (46)</h2>
        {/* Buttons to switch categories */}
        <div className="border-[0.5px] border-[#272b3b]">
          <div className="flex space-x-4 mb-6 justify-center">
            <button
              className={`${activeCategory === 'special' ? 'cert-category-active' : 'cert-category'}`}
              onClick={() => setActiveCategory('special')}
            >
              Specializations
            </button>
            <button
              className={`${activeCategory === 'cs50' ? 'cert-category-active' : 'cert-category'}`}
              onClick={() => setActiveCategory('cs50')}
            >
              Harvard's CS50
            </button>
            <button
              className={`${activeCategory === 'web' ? 'cert-category-active' : 'cert-category'}`}
              onClick={() => setActiveCategory('web')}
            >
              Website Development
            </button>
            <button
              className={`${activeCategory === 'ai' ? 'cert-category-active' : 'cert-category'}`}
              onClick={() => setActiveCategory('ai')}
            >
              AI
            </button>
            <button
              className={`${activeCategory === 'cisco' ? 'cert-category-active' : 'cert-category'}`}
              onClick={() => setActiveCategory('cisco')}
            >
              Cisco
            </button>
            <button
              className={`${activeCategory === 'other' ? 'cert-category-active' : 'cert-category'}`}
              onClick={() => setActiveCategory('other')}
            >
              Others
            </button>
          </div>
          {/* Certificate grid */}
          <div className="py-10 grid grid-cols-1 md:grid-cols-3 gap-10 rounded-lg">
            {renderCertificates()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certs;
