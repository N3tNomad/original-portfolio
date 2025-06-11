// app/projects/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Eric Mbugua",
  description: "Explore a showcase of my creative and technical projects.",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen px-4 py-8 bg-background text-foreground">
      {children}
    </main>
  );
}
