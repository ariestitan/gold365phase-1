"use client";

import { useEffect, useRef, ReactNode } from "react";

interface PolicySection {
  title: string;
  content: ReactNode;
}

export default function PolicySections({ sections }: { sections: PolicySection[] }) {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {sections.map((section, index) => (
        <div
          key={index}
          className="policy-section"
          ref={(el) => { sectionRefs.current[index] = el; }}
        >
          <h2>{section.title}</h2>
          {section.content}
        </div>
      ))}
    </>
  );
}
