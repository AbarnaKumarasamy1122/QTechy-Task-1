import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiDiscord } from "react-icons/si";

const Footer = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-indigo-100 blur-3xl opacity-60" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-violet-100 blur-3xl opacity-60" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 md:pt-10 md:pb-20">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Mode UI
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400 text-xl">
            Mode UI is a comprehensive design system that empowers designers and{" "}
            <br />
            developers to create cohesive and visually stunning user interfaces
            across various <br />
            platforms and devices
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-center md:text-left">
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Features
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Figma design system
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  iOS kit
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Android kit
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Wireframe
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Templates
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Landing pages
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Comp library
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Privacy policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Disclaimer
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Affiliate programme
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Help centre
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Raise ticket
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Report
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Refund
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex justify-center space-x-6">
          <a href="#" aria-label="GitHub">
            <FaGithub className="h-6 w-6 hover:text-gray-500" />
          </a>
          <a href="#" aria-label="LinkedIn">
            <FaLinkedin className="h-6 w-6 hover:text-blue-600" />
          </a>
          <a href="#" aria-label="Discord">
            <SiDiscord className="h-6 w-6 hover:text-indigo-500" />
          </a>
        </div>
        <p className="mt-10 text-center text-gray-500 dark:text-gray-400 text-sm">
          © 2023 Mode UI Inc. All Rights Reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;
