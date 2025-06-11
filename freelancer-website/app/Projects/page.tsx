"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Swaros Constructions Limited",
    description: "A clean and professional WordPress website built to showcase the company’s projects and services.",
    link: "https://swarosconstructions.co.ke",
  },
  {
    title: "Digital Bridge Solutions",
    description: "An innovative website for a digital agency, focused on lead generation and service clarity.",
    link: "https://digitalbridgesolutions.com",
  },
];

export default function ProjectsPage() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
          Projects I've Built
        </h1>
        <p className="mt-4 text-muted-foreground text-lg">
          A showcase of some of the exciting work I’ve done with WordPress and design.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group"
          >
            <Card className="rounded-2xl shadow-md hover:shadow-purple-500/30 transition-all duration-300 border border-purple-100 group-hover:scale-[1.02]">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-2 group-hover:text-purple-600 transition-colors">
                  {project.title}
                </h2>
                <p className="text-sm text-muted-foreground">{project.description}</p>
              </CardContent>
            </Card>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
