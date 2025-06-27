"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  // Sidebar content as a separate component for reuse
  const SidebarContent = (
    <div className="flex flex-col items-center text-center">
      {/* Profile Image */}
      <div className="w-24 h-24 rounded-full bg-white p-1 ring-2 ring-gray-100 overflow-hidden mb-4 mt-12 lg:mt-0 mx-auto">
        <Image
          src="/mee.png"
          alt="Profile"
          width={96}
          height={96}
          className="rounded-full object-cover"
          priority
        />
      </div>

      {/* Title */}
      <h2 className="text-lg font-medium text-gray-900">Front-End Developer</h2>

      {/* Status Pills */}
      <div className="flex gap-1.5 my-4">
        <span className="px-3 py-1 text-xs bg-blue-500 text-white rounded-full">Available</span>
        <span className="px-3 py-1 text-xs bg-gray-100 text-gray-800 rounded-full">Freelance</span>
      </div>

      {/* Location */}
      <p className="text-sm text-gray-600 mb-6">San Fernando La Union Philippines</p>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 w-full mb-8">
        <div className="text-center">
          <span className="block text-2xl font-bold text-[#FFA500]">22</span>
          <span className="text-sm text-gray-600">Age</span>
        </div>
        <div className="text-center">
          <span className="block text-2xl font-bold text-[#FFA500]">4</span>
          <span className="text-sm text-gray-600">Projects</span>
        </div>
      </div>

      {/* Programming */} {/* <-- MODIFIED & MOVED */}
      <div className="w-full mb-8 bg-white rounded-xl p-6 shadow-sm">
        <h3 className="text-left text-sm font-semibold mb-4 text-gray-900">Programming</h3>
        <div className="space-y-4">
          <AnimatedSkillBar skill="HTML" percentage={90} />
          <AnimatedSkillBar skill="CSS" percentage={85} />
          <AnimatedSkillBar skill="JS" percentage={80} />
          <AnimatedSkillBar skill="NextJS" percentage={90} />
          <AnimatedSkillBar skill="Tailwind CSS" percentage={90} />
           <AnimatedSkillBar skill="Laravel" percentage={70} />
        </div>
      </div>

      {/* Technical Skills */} {/* <-- MODIFIED & MOVED */}
      <div className="w-full mb-8 bg-white rounded-xl p-6 shadow-sm">
        <h3 className="text-left text-sm font-semibold mb-4 text-gray-900">Technical Skills</h3>
        <div className="space-y-3">
          {[
            { icon: "📸", skills: "Photography" },
            { icon: "🎨", skills: "Photo Edit" },
            { icon: "🎵", skills: "Sound System" }
          ].map((item, index) => (
            <motion.div
              key={item.skills}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors bg-white/80 p-2 rounded-lg"
            >
              <span className="w-5 h-5 flex items-center justify-center bg-[#FFA500]/10 rounded">
                {item.icon}
              </span>
              <span>{item.skills}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Languages */} {/* <-- MODIFIED & MOVED */}
      <div className="w-full mb-8 bg-white rounded-xl p-6 shadow-sm">
        <h3 className="text-left text-sm font-semibold mb-4 text-gray-900">Languages</h3>
        <div className="space-y-4">
          <AnimatedSkillBar skill="Tagalog" percentage={100} />
          <AnimatedSkillBar skill="English" percentage={90} />
          <AnimatedSkillBar skill="Ilocano" percentage={10} />
        </div>
      </div>

      {/* Download CV button */}
      <motion.a
        href="/HendrickResume.pdf"
        download="HendrickResume.pdf"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full bg-[#FFA500] text-white py-3 rounded-lg font-medium 
                   hover:shadow-lg transition-all flex items-center justify-center gap-2"
      >
        <span>DOWNLOAD CV</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.a>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <motion.aside
        initial={{ x: -300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="hidden lg:block w-full lg:w-[300px] min-h-screen bg-white/95 backdrop-blur-lg border-r border-gray-100 
                   p-8 lg:fixed relative shadow-md overflow-y-auto scrollbar-hide"
        style={{ maxHeight: '100vh' }}
      >
        {SidebarContent}
      </motion.aside>

      {/* Mobile Burger Button */}
      <button
        className="fixed top-6 left-6 z-[100] lg:hidden flex flex-col gap-1.5 w-10 h-10 items-center justify-center bg-white/90 rounded-full shadow-md border border-gray-200"
        onClick={() => setOpen(true)}
        aria-label="Open sidebar"
      >
        <span className="block w-6 h-0.5 bg-[#FFA500] rounded transition-all" />
        <span className="block w-6 h-0.5 bg-[#FFA500] rounded transition-all" />
        <span className="block w-6 h-0.5 bg-[#FFA500] rounded transition-all" />
      </button>

      {/* Mobile Sidebar Drawer */}
      <AnimatePresence>
        {open && (
          <motion.aside
            initial={{ x: -320, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -320, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed top-0 left-0 z-[200] w-[85vw] max-w-xs h-screen bg-white/95 backdrop-blur-lg border-r border-gray-100 p-6 shadow-2xl overflow-y-auto scrollbar-hide lg:hidden"
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-[#FFA500] text-2xl"
              onClick={() => setOpen(false)}
              aria-label="Close sidebar"
            >
              ×
            </button>
            {SidebarContent}
          </motion.aside>
        )}
      </AnimatePresence>
      {/* Overlay when sidebar is open */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[150] bg-black/30 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

// AnimatedSkillBar component (can be moved to its own file if reused)
function AnimatedSkillBar({ skill, percentage, delay = 0 }: { skill: string; percentage: number; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
      className="group"
    >
      <div className="flex justify-between text-xs md:text-sm mb-1">
        <span className="text-gray-700 font-medium">{skill}</span>
        <span className="text-gray-500">{percentage}%</span>
      </div>
      <div className="h-1.5 md:h-2 bg-gray-100 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, delay: delay + 0.3, ease: "easeOut" }}
          className="h-full bg-[#FFA500] rounded-full group-hover:brightness-110 transition-all"
        />
      </div>
    </motion.div>
  );
}