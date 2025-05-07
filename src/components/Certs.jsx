import React, { useState } from 'react';
import { csx, csp, css, csw, jhu, fes, bes, f1, f2, f3, f4, f5, f6, f7, b1, b2, b3, b4, b5, b6, b7, s1, s2, s3, iv, ve, ib_be, ib_js, ud, dc, cc, p1, p2, p3, hks, hkse } from '../assets/certs';
import Certificate from './Certificate';

const Certs = () => {
  const [activeCategory, setActiveCategory] = useState('cs50');

  // Certificate arrays
  const cs50Certs = [
    { image: csx, url: 'https://cs50.harvard.edu/certificates/9d966695-a4b6-4154-9952-52e4d2efa692', altText: 'CS50x Certificate' },
    { image: css, url: 'https://cs50.harvard.edu/certificates/a06a26e2-64e9-438a-8666-977af8d062ed', altText: 'CS50S Certificate' },
    { image: csp, url: 'https://cs50.harvard.edu/certificates/7226859c-c657-4563-b9c8-99f4873114f6', altText: 'CS50P Certificate' },
    { image: csw, url: 'https://cs50.harvard.edu/certificates/bad7e1c0-84e5-40f5-a565-77ed246e9490', altText: 'CS50W Certificate' },
  ];

  const webCerts = [
    { image: fes, url: 'https://www.coursera.org/account/accomplishments/specialization/certificate/N1KVLB2O64O2', altText: 'Meta Front-End Specialization Certificate' },
    { image: bes, url: 'https://www.coursera.org/account/accomplishments/specialization/certificate/W74F1I8L92RQ', altText: 'Meta Back-End Specialization Certificate' },

    { image: f1, url: 'https://www.coursera.org/account/accomplishments/certificate/MMU2WMZEKWOA', altText: 'Meta Front-End Intro Certificate' },
    { image: f2, url: 'https://www.coursera.org/account/accomplishments/certificate/LO2FMY48V1BX', altText: 'Meta JavaScript Certificate' },
    { image: f3, url: 'https://www.coursera.org/account/accomplishments/certificate/0RAM91AXMKNF', altText: 'Meta HTML CSS Depth Certificate' },
    { image: f4, url: 'https://www.coursera.org/account/accomplishments/certificate/SFY4SH8WP7J0', altText: 'Meta React Basics Certificate' },
    { image: f5, url: 'https://www.coursera.org/account/accomplishments/certificate/Z5OHBQ707WJW', altText: 'Meta React Advanced Certificate' },
    { image: f6, url: 'https://www.coursera.org/account/accomplishments/certificate/QNQLDDB6CYAT', altText: 'Meta UX UI Certificate' },
    { image: f7, url: 'https://www.coursera.org/account/accomplishments/certificate/MGPD0EVNC2FY', altText: 'Meta Front-End Capstone Certificate' },

    { image: b1, url: 'https://www.coursera.org/account/accomplishments/certificate/ACCBKW4XQTWK', altText: 'Meta Back-End Intro Certificate' },
    { image: b2, url: 'https://www.coursera.org/account/accomplishments/certificate/76NFVZC1XF3E', altText: 'Meta Python Certificate' },
    { image: b3, url: 'https://www.coursera.org/account/accomplishments/certificate/QVJ03ZPZPJWJ', altText: 'Meta Intro to Databases Certificate' },
    { image: b4, url: 'https://www.coursera.org/account/accomplishments/certificate/K638QW9RHVZT', altText: 'Meta Django Certificate' },
    { image: b5, url: 'https://www.coursera.org/account/accomplishments/certificate/KEFAZVT628EP', altText: 'Meta API Certificate' },
    { image: b6, url: 'https://www.coursera.org/account/accomplishments/certificate/T5QTGTRCRD35', altText: 'Meta Full Stack Certificate' },
    { image: b7, url: 'https://www.coursera.org/account/accomplishments/certificate/QDB61GFOAD5W', altText: 'Meta Back-End Capstone Certificate' },

    { image: iv, url: 'https://www.coursera.org/account/accomplishments/certificate/74FG463109SB', altText: 'Meta Coding Interview Certificate' },
    { image: ve, url: 'https://www.coursera.org/account/accomplishments/certificate/4NSF48QD3FIS', altText: 'Meta Version Control Certificate' },

    { image: ib_js, url: 'https://www.coursera.org/account/accomplishments/certificate/YFSJZECZWFAG', altText: 'IBM Javascript Essentials Certificate' },
    { image: ib_be, url: 'https://www.coursera.org/account/accomplishments/certificate/S7O0PT89GJNY', altText: 'IBM Back-End Apps with Node & Express Certificate' },

    { image: jhu, url: 'https://www.coursera.org/account/accomplishments/certificate/8DILH4N0ABM6', altText: 'JHU Web Dev Certificate' },
  ];

  const otherCerts = [
    { image: cc, url: 'https://codecombat.com/certificates/6533825122ab2d0031d4ba79', altText: 'CodeCombat Certificate' },
    { image: p1, url: 'https://www.coursera.org/account/accomplishments/certificate/NTMXA8WACBNQ', altText: 'UOM Python Intro Certificate' },
    { image: p2, url: 'https://www.coursera.org/account/accomplishments/certificate/Z47RD2HY9PYR', altText: 'UOM Python Data Certificate' },
    { image: p3, url: 'https://www.coursera.org/account/accomplishments/certificate/MTNK7QQL6XA3', altText: 'UOM Python Web Data Certificate' },
    { image: hks, url: 'https://www.coursera.org/account/accomplishments/certificate/YHEPBKM5P9UU', altText: 'HKU Scratch Certificate' },
    { image: hkse, url: 'https://www.coursera.org/account/accomplishments/certificate/GTPPJ35GF7JI', altText: 'HKU Software Engineer Certificate' },
    { image: dc, url: 'https://www.coursera.org/account/accomplishments/certificate/4NSF48QD3FIS', altText: 'Cisco Digital Content Creation Certificate' },
    { image: ud, url: 'https://www.coursera.org/account/accomplishments/certificate/4NSF48QD3FIS', altText: 'Cisco Using Devices Certificate' },
  ];

  const aiCerts = [
    { image: s1, url: 'https://www.coursera.org/account/accomplishments/certificate/RCW3SNB46E1N', altText: 'Scrimba Learn to Code with AI Certificate' },
    { image: s2, url: 'https://www.coursera.org/account/accomplishments/certificate/F304YJ6YFM2X', altText: 'Scrimba Web Dev with AI Certificate' },
    { image: s3, url: 'https://www.coursera.org/account/accomplishments/certificate/ZDSBCX0EHPNG', altText: 'Scrimba AI Engineering Intro Certificate' },
  ];

  // Render certificates based on active category
  const renderCertificates = () => {
    let certificates = [];
    if (activeCategory === 'cs50') {
      certificates = cs50Certs;
    } else if (activeCategory === 'web') {
      certificates = webCerts;
    } else if (activeCategory === 'ai') {
      certificates = aiCerts;
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
      <div className="container mx-auto">
        <h2 className="font-bold mb-6">Certificates (36)</h2>
        {/* Buttons to switch categories */}
        <div className="flex space-x-4 mb-6 justify-center">
          <button
            className={`px-4 py-2 rounded ${activeCategory === 'cs50' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
            onClick={() => setActiveCategory('cs50')}
          >
            Harvard's CS50
          </button>
          <button
            className={`px-4 py-2 rounded ${activeCategory === 'web' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
            onClick={() => setActiveCategory('web')}
          >
            Website Development
          </button>
          <button
            className={`px-4 py-2 rounded inline ${activeCategory === 'ai' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
            onClick={() => setActiveCategory('ai')}
          >
            AI
          </button>
          <button
            className={`px-4 py-2 rounded ${activeCategory === 'other' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
            onClick={() => setActiveCategory('other')}
          >
            Others
          </button>
        </div>
        {/* Certificate grid */}
        <div className="py-10 grid grid-cols-1 md:grid-cols-3 gap-10">
          {renderCertificates()}
        </div>
      </div>
    </section>
  );
};

export default Certs;
