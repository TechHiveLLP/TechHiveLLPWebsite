"use client";

import { motion } from "framer-motion";
import {
  ExternalLink,
  Calculator,
  FileText,
  Users,
  MapPin,
  Sparkles,
  Clock,
} from "lucide-react";

const products = [
  {
    tag: "Live Product",
    name: "FSIMetrics",
    description:
      "Professional construction feasibility calculator built for Indian builders and developers. Analyze FSI, costs, revenue, and profitability — all in one place.",
    features: [
      { icon: Calculator, label: "8+ Calculator Types" },
      { icon: FileText, label: "PDF Reports" },
      { icon: Users, label: "Team Collaboration" },
      { icon: MapPin, label: "City-Specific Rules" },
    ],
    link: "https://www.fsimetrics.com",
    linkLabel: "Visit FSIMetrics",
    isLive: true,
  },
  {
    tag: "Coming Soon",
    name: "RadiantAI",
    description:
      "AI-powered practice management for modern clinics. Streamline appointments, patient records, and clinical workflows with intelligent automation.",
    features: [
      { icon: Sparkles, label: "AI-Powered Insights" },
      { icon: Users, label: "Patient Management" },
      { icon: Clock, label: "Smart Scheduling" },
      { icon: FileText, label: "Digital Records" },
    ],
    link: null,
    linkLabel: "Coming Soon",
    isLive: false,
  },
];

export default function Products() {
  return (
    <section id="products" className="py-24 md:py-32 px-6 relative">
      <div className="absolute top-0 left-0 right-0 section-divider" />

      {/* Subtle bg accent */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] opacity-[0.03]"
        style={{
          background: "radial-gradient(ellipse at center, #60a5fa, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-xs tracking-widest uppercase text-text-muted font-medium mb-3">
            Our Products
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-text-primary max-w-md leading-tight">
            Software that{" "}
            <span className="gradient-text-warm">solves real problems</span>
          </h2>
        </motion.div>

        {/* Products */}
        <div className="grid md:grid-cols-2 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-xl bg-dark-surface border border-dark-border p-8 md:p-10 hover:border-primary/20 transition-all duration-300 relative overflow-hidden"
            >
              {/* Subtle hover glow */}
              <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: "radial-gradient(circle, rgba(96,165,250,0.06), transparent 70%)",
                }}
              />

              <div className="relative">
                {/* Tag */}
                <span
                  className={`inline-block text-[11px] tracking-wider uppercase font-medium mb-5 ${
                    product.isLive
                      ? "text-accent"
                      : "text-text-muted"
                  }`}
                >
                  {product.tag}
                </span>

                {/* Name */}
                <h3 className="text-2xl font-semibold text-text-primary mb-3">
                  {product.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-text-secondary leading-relaxed mb-8">
                  {product.description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-x-4 gap-y-3 mb-8">
                  {product.features.map((feature) => (
                    <div
                      key={feature.label}
                      className="flex items-center gap-2.5 text-[13px] text-text-muted"
                    >
                      <feature.icon
                        className="w-3.5 h-3.5 text-primary shrink-0"
                        strokeWidth={1.5}
                      />
                      <span>{feature.label}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                {product.isLive ? (
                  <a
                    href={product.link!}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-light transition-colors cursor-pointer"
                  >
                    {product.linkLabel}
                    <ExternalLink size={14} />
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 text-sm text-text-muted">
                    <Sparkles size={14} />
                    {product.linkLabel}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
