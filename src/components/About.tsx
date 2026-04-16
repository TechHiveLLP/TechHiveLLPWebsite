"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Target, Eye, Award } from "lucide-react";

function CountUp({ end, suffix = "" }: { end: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    if (end === "∞" || end === "24/7") {
      setDisplay(end);
      return;
    }
    const numericEnd = parseInt(end.replace(/\D/g, ""));
    if (isNaN(numericEnd)) {
      setDisplay(end);
      return;
    }
    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const eased = 1 - Math.pow(1 - step / steps, 3);
      setDisplay(Math.round(eased * numericEnd).toString());
      if (step >= steps) {
        clearInterval(timer);
        setDisplay(end);
      }
    }, stepTime);
    return () => clearInterval(timer);
  }, [inView, end]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

const stats = [
  { value: "2025", label: "Founded" },
  { value: "100", label: "Client Satisfaction", suffix: "%" },
  { value: "24/7", label: "Support" },
  { value: "∞", label: "Possibilities" },
];

const pillars = [
  {
    icon: Target,
    title: "Our Mission",
    text: "To empower businesses through innovative technology solutions, expert consulting, and cutting-edge software products. We build lasting partnerships and deliver real business value.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    text: "To be the software firm that businesses trust for their digital transformation. A hive of innovation where ideas flourish and technology solves real-world problems.",
  },
  {
    icon: Award,
    title: "Why TechHive?",
    text: "We combine deep technical expertise with business acumen — delivering solutions that are technically sound and strategically aligned with your goals.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 relative">
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <p className="text-xs tracking-widest uppercase text-text-muted font-medium mb-3">
            About Us
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-text-primary max-w-lg leading-tight">
            A forward-thinking software firm built on{" "}
            <span className="gradient-text-warm">excellence</span>
          </h2>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-dark-border rounded-xl overflow-hidden mb-20"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-dark-surface p-6 md:p-8 text-center"
            >
              <span className="text-3xl md:text-4xl font-semibold text-text-primary block mb-1">
                <CountUp end={stat.value} suffix={stat.suffix} />
              </span>
              <span className="text-text-muted text-xs tracking-wider uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Pillars */}
        <div className="grid md:grid-cols-3 gap-px bg-dark-border rounded-xl overflow-hidden">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-dark-surface p-8 md:p-10 group"
            >
              <pillar.icon className="w-5 h-5 text-primary mb-5" strokeWidth={1.5} />
              <h3 className="text-base font-semibold text-text-primary mb-3">
                {pillar.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {pillar.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
