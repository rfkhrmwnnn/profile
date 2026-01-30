"use client";

import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

export default function ProjectCard({ title, desc, slug }) {
  return (
    <Link href={`/projects/${slug}`} className="group block relative h-full">
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm" />
      
      <div className="glass-card h-full p-8 rounded-2xl flex flex-col justify-between group-hover:bg-surface/80 transition-all duration-300">
        <div>
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-2xl font-bold text-white group-hover:text-primary-light transition-colors">
              {title}
            </h3>
            <ArrowUpRightIcon className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </div>
          <p className="text-gray-400 leading-relaxed mb-6">
            {desc}
          </p>
        </div>
        
        <div className="flex items-center text-sm font-medium text-primary-light">
          Read Case Study
        </div>
      </div>
    </Link>
  );
}
