"use client";

import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

export interface JobCardProps {
  companyLogo: React.ReactNode;
  companyName: string;
  jobTitle: string;
  salary: string;
  tags: string[];
  postedDate: string;
  variant?: "pink" | "yellow" | "blue" | "purple";
  className?: string;
  onClick?: () => void;
}

const variantClasses = {
  pink: "border-t-pink-500",
  yellow: "border-t-yellow-500",
  blue: "border-t-blue-500",
  purple: "border-t-purple-500",
};

export const AnimatedJobCard = ({
  companyLogo,
  companyName,
  jobTitle,
  salary,
  tags,
  postedDate,
  variant = "purple",
  className,
  onClick,
}: JobCardProps) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const cardRef = React.useRef<HTMLDivElement>(null);

  const onMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    mouseX.set(event.clientX - left - width / 2);
    mouseY.set(event.clientY - top - height / 2);
  };

  const onMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const rotateX = useTransform(mouseY, [-150, 150], [10, -10]);
  const rotateY = useTransform(mouseX, [-150, 150], [-10, 10]);
  const springConfig = { stiffness: 300, damping: 20, mass: 0.5 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);

  return (
    <motion.div
      layout
      onClick={onClick}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      ref={cardRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ rotateX: springRotateX, rotateY: springRotateY, transformStyle: "preserve-3d" }}
      className={cn(
        "relative w-full min-w-0 transform-gpu overflow-hidden rounded-xl border-t-4 bg-white/70 p-5 shadow-md backdrop-blur-xl transition-shadow duration-300 hover:shadow-2xl dark:bg-zinc-950/75 sm:p-6",
        variantClasses[variant],
        onClick && "cursor-pointer",
        className
      )}
      aria-label={`${jobTitle}: ${companyName}`}
      tabIndex={onClick ? 0 : undefined}
    >
      <div style={{ transform: "translateZ(20px)" }} className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-amber-400/10 text-amber-500">
            {companyLogo}
          </div>
          <span className="text-xs font-semibold tracking-[0.14em] text-black/50 dark:text-white/55">
            {companyName}
          </span>
        </div>
        <div>
          <h3 className="text-lg font-bold leading-snug text-black dark:text-white sm:text-xl">{jobTitle}</h3>
          <p className="mt-2 text-sm leading-relaxed text-black/65 dark:text-white/70">{salary}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="rounded-full border border-amber-400/20 bg-amber-400/10 px-2.5 py-1 text-xs font-medium text-amber-600 dark:text-amber-300">
              {tag}
            </span>
          ))}
        </div>
        <div className="border-t border-black/10 pt-3 text-right text-xs text-black/45 dark:border-white/10 dark:text-white/45">
          {postedDate}
        </div>
      </div>
    </motion.div>
  );
};

export default AnimatedJobCard;
