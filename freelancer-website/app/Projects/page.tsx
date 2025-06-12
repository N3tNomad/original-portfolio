"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const projects = [
  {
    title: "Swaros Constructions Limited",
    description:
      "A clean and professional WordPress website built to showcase the company’s projects and services.",
    link: "https://swarosconstructions.co.ke",
    image: "/images/swaros.png",
    tags: ["WordPress", "Construction", "UI/UX"],
  },
  {
    title: "Tropical Ice cream Poster",
    description:
      "An eye-catching ice cream poster for product advertising that has a lasting impression.",
    image: "/images/ice cream poster1.png",
    tags: ["Adobe Photoshop", "Adobe Illustrator", "Graphic Design"],
  },
];

export default function ProjectsPage() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
          Projects I've Built
        </h1>
        <p className="mt-4 text-muted-foreground text-lg">
          A showcase of some of the exciting work I’ve done with WordPress and design.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group cursor-pointer"
          >
            <Card
              onClick={() => setLightboxImage(project.image)}
              className="overflow-hidden rounded-2xl shadow-md hover:shadow-purple-500/30 transition-all duration-300 border border-purple-100 group-hover:scale-[1.02]"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
              </div>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-2 group-hover:text-purple-600 transition-colors">
                  {project.title}
                </h2>
                <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Card className="h-full flex items-center justify-center p-6 text-center border-dashed border-2 border-purple-300 rounded-2xl">
            <p className="text-muted-foreground text-lg italic">
              More projects coming soon...
            </p>
          </Card>
        </motion.div>
      </div>

      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setLightboxImage(null)}
        >
          <div className="relative max-w-3xl w-full mx-4">
            <Image
              src={lightboxImage}
              alt="Full view"
              width={1000}
              height={600}
              className="rounded-xl shadow-2xl mx-auto object-contain max-h-[90vh] ring-4 ring-purple-400/50"
            />
            <button
              className="absolute top-4 right-4 bg-white text-black px-2 py-1 rounded hover:bg-gray-200"
              onClick={() => setLightboxImage(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
