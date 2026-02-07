"use client";

import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

export default function ProjectCard({ title, desc, slug }) {
  return (
    <Link href={`/projects/${slug}`} className="group block relative h-full">
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl" />
      
      <div className="glass-premium h-full p-8 rounded-3xl flex flex-col justify-between group-hover:bg-surface/80 group-hover:scale-[1.02] transition-all duration-500 border border-white/5 hover:border-white/15">
        <div>
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-2xl font-bold text-white group-hover:text-primary-light transition-colors line-clamp-2">
              {title}
            </h3>
            <div className="p-2 rounded-full bg-white/5 group-hover:bg-primary/20 transition-colors">
              <ArrowUpRightIcon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </div>
          </div>
          <p className="text-gray-400 leading-relaxed mb-6 line-clamp-3">
            {desc}
          </p>
        </div>
        
        <div className="flex items-center text-sm font-medium text-primary-light group-hover:text-white transition-colors gap-2">
          Read Case Study
          <span className="h-px w-8 bg-current opacity-50 group-hover:w-16 transition-all duration-500" />
        </div>
      </div>
    </Link>
  );
}
