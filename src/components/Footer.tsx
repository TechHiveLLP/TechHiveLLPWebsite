"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="border-t border-dark-border">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2.5"
          >
            <svg
              className="w-7 h-7"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient
                  id="footerLogoGrad"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#60a5fa" />
                  <stop offset="100%" stopColor="#22d3ee" />
                </linearGradient>
              </defs>
              <polygon
                points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5"
                fill="url(#footerLogoGrad)"
                stroke="#22d3ee"
                strokeWidth="2"
              />
              <polygon
                points="50,25 70,37.5 70,62.5 50,75 30,62.5 30,37.5"
                fill="none"
                stroke="#020617"
                strokeWidth="2"
              />
              <line x1="50" y1="25" x2="50" y2="40" stroke="#020617" strokeWidth="2" />
              <line x1="50" y1="60" x2="50" y2="75" stroke="#020617" strokeWidth="2" />
              <circle cx="50" cy="50" r="5" fill="#020617" />
            </svg>
            <span className="text-sm font-semibold text-text-primary">TechHive</span>
          </motion.div>

          {/* Copyright */}
          <p className="text-text-muted text-xs">
            &copy; {new Date().getFullYear()} TechHive LLP. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
