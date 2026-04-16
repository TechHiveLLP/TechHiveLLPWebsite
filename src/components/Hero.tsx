"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark-bg via-dark-bg to-dark-surface" />

        {/* Mesh gradient blobs */}
        <div
          className="absolute top-0 left-1/4 w-[800px] h-[600px] opacity-[0.07]"
          style={{
            background: "radial-gradient(ellipse at center, #60a5fa, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-[600px] h-[500px] opacity-[0.05]"
          style={{
            background: "radial-gradient(ellipse at center, #22d3ee, transparent 70%)",
            filter: "blur(80px)",
          }}
        />

        {/* Subtle top beam */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-[30vh] bg-gradient-to-b from-primary/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        {/* Small badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-text-muted font-medium">
            <span className="w-8 h-[1px] bg-text-muted" />
            Software Consulting & Products
            <span className="w-8 h-[1px] bg-text-muted" />
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.1] mb-6"
        >
          <span className="text-text-primary">We build software</span>
          <br />
          <span className="gradient-text-warm">that moves business forward</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="text-base md:text-lg text-text-secondary max-w-xl mx-auto mb-10 leading-relaxed"
        >
          TechHive delivers consulting, custom development, and product
          engineering for companies ready to transform.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group inline-flex items-center gap-2 px-6 py-3 bg-text-primary text-dark-bg font-medium text-sm rounded-lg transition-all duration-200 hover:bg-text-secondary cursor-pointer"
          >
            Start a Project
            <ArrowRight
              size={15}
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </a>
          <a
            href="#services"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#services")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 px-6 py-3 text-text-secondary font-medium text-sm rounded-lg border border-dark-border hover:border-text-muted hover:text-text-primary transition-all duration-200 cursor-pointer"
          >
            Explore Services
          </a>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={20} className="text-text-muted" />
        </motion.div>
      </motion.div>
    </section>
  );
}
