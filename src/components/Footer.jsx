import React from 'react';
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
        <p className="py-4">Lorem, Ipsum dolor sit amet consectetur adipiscing elit.</p>
        <div className="flex space-x-4">
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaTwitterSquare size={30} />
          <FaGithubSquare size={30} />
          <FaDribbbleSquare size={30} />
        </div>
      </div>

      <div>
        <h6 className="font-semibold">Solutions</h6>
        <ul>
          <li className="py-2 text-sm">Analytics</li>
          <li className="py-2 text-sm">Marketing</li>
          <li className="py-2 text-sm">Commerce</li>
          <li className="py-2 text-sm">Insight</li>
        </ul>
      </div>

      <div>
        <h6 className="font-semibold">Support</h6>
        <ul>
          <li className="py-2 text-sm">Pricing</li>
          <li className="py-2 text-sm">Documentation</li>
          <li className="py-2 text-sm">Guides</li>
          <li className="py-2 text-sm">API Status</li>
        </ul>
      </div>

      <div>
        <h6 className="font-semibold">Company</h6>
        <ul>
          <li className="py-2 text-sm">About</li>
          <li className="py-2 text-sm">Blog</li>
          <li className="py-2 text-sm">Jobs</li>
          <li className="py-2 text-sm">Press</li>
          <li className="py-2 text-sm">Careers</li>
        </ul>
      </div>

      <div>
        <h6 className="font-semibold">Legal</h6>
        <ul>
          <li className="py-2 text-sm">Claim</li>
          <li className="py-2 text-sm">Policy</li>
          <li className="py-2 text-sm">Terms</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
