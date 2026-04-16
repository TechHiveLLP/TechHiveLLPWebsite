"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, Clock, ArrowUpRight } from "lucide-react";

const contactItems = [
  {
    icon: MapPin,
    title: "Office",
    lines: ["Ahmedabad, Gujarat", "India"],
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["techhivellp@gmail.com"],
    link: "mailto:techhivellp@gmail.com",
  },
  {
    icon: Clock,
    title: "Hours",
    lines: ["Mon – Fri: 9 AM – 6 PM", "Sat: 10 AM – 4 PM"],
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 px-6 relative">
      <div className="absolute top-0 left-0 right-0 section-divider" />

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
            Contact
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-text-primary max-w-md leading-tight">
            Let&apos;s start a{" "}
            <span className="gradient-text-warm">conversation</span>
          </h2>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-px bg-dark-border rounded-xl overflow-hidden mb-16">
          {contactItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-dark-surface p-8"
            >
              <item.icon
                className="w-5 h-5 text-primary mb-5"
                strokeWidth={1.5}
              />
              <h3 className="text-sm font-medium text-text-primary mb-2">
                {item.title}
              </h3>
              {item.lines.map((line) =>
                item.link ? (
                  <a
                    key={line}
                    href={item.link}
                    className="block text-sm text-text-muted hover:text-primary transition-colors"
                  >
                    {line}
                  </a>
                ) : (
                  <p key={line} className="text-sm text-text-muted">
                    {line}
                  </p>
                )
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="rounded-xl bg-dark-surface border border-dark-border p-10 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
        >
          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-text-primary mb-2">
              Ready to build something great?
            </h3>
            <p className="text-sm text-text-secondary max-w-md">
              Drop us an email with your project details. Our team typically
              responds within 24 hours.
            </p>
          </div>
          <a
            href="mailto:techhivellp@gmail.com"
            className="group inline-flex items-center gap-2 px-6 py-3 bg-text-primary text-dark-bg font-medium text-sm rounded-lg hover:bg-white transition-colors shrink-0 cursor-pointer"
          >
            Send an Email
            <ArrowUpRight
              size={14}
              className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
