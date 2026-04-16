"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Cog,
  Cloud,
  Smartphone,
  BrainCircuit,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: Briefcase,
    title: "IT Consulting",
    description:
      "Expert guidance on technology strategy, digital transformation, and IT infrastructure. Our consultants help you make informed, high-impact decisions.",
  },
  {
    icon: Cog,
    title: "Custom Software",
    description:
      "Bespoke solutions built from the ground up to match your unique requirements — using modern technologies and agile methodologies.",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description:
      "Seamless cloud migration, architecture design, and management. Leverage cloud computing for scalability and operational efficiency.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description:
      "Native and cross-platform applications that deliver exceptional user experiences on iOS and Android.",
  },
  {
    icon: BrainCircuit,
    title: "AI & Machine Learning",
    description:
      "Harness artificial intelligence to automate processes, extract insights, and build intelligent products.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 px-6 relative">
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-xs tracking-widest uppercase text-text-muted font-medium mb-3">
            What We Do
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-text-primary max-w-md leading-tight">
            Comprehensive{" "}
            <span className="gradient-text-warm">technology solutions</span>
          </h2>
        </motion.div>

        {/* Services list */}
        <div className="space-y-px">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group flex items-start gap-6 md:gap-10 py-8 md:py-10 border-t border-dark-border hover:bg-white/[0.01] transition-colors duration-300 px-2 -mx-2 rounded-lg cursor-default"
            >
              {/* Number */}
              <span className="text-xs text-text-muted font-mono pt-1 shrink-0 w-6">
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Icon */}
              <div className="shrink-0 w-10 h-10 rounded-lg bg-dark-card border border-dark-border flex items-center justify-center group-hover:border-primary/30 transition-colors duration-300">
                <service.icon className="w-4.5 h-4.5 text-text-muted group-hover:text-primary transition-colors duration-300" strokeWidth={1.5} />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1.5">
                  <h3 className="text-base font-semibold text-text-primary">
                    {service.title}
                  </h3>
                  <ArrowUpRight size={14} className="text-text-muted opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <p className="text-sm text-text-secondary leading-relaxed max-w-lg">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-dark-border" />
        </div>
      </div>
    </section>
  );
}
