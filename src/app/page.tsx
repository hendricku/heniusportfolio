"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';


function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ 
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0.5
      }}
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-[#FFA500] text-white shadow-lg
                 hover:bg-[#FFA500]/90 transition-all duration-300"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </motion.button>
  );
}

export default function Home() {
  return (
    // Add grid-bg class and keep the white background for content
    <div className="grid-bg flex flex-col lg:flex-row relative z-10">
      {/* Left Sidebar - Keep white background */}
      <motion.aside
        initial={{ x: -300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full lg:w-[300px] min-h-screen bg-white/95 backdrop-blur-lg border-r border-gray-100 
                   p-8 lg:fixed relative shadow-md overflow-y-auto scrollbar-hide"
        style={{ maxHeight: '100vh' }}
      >
        <div className="flex flex-col items-center text-center">
          {/* Profile Image */}
          <div className="w-24 h-24 rounded-full bg-white p-1 ring-2 ring-gray-100 overflow-hidden mb-4">
            <Image
              src="/me.png"
              alt="Profile"
              width={96}
              height={96}
              className="rounded-full object-cover"
            />
          </div>

          {/* Title */}
          <h2 className="text-lg font-medium text-gray-900">Front-End Developer</h2>

          {/* Status Pills */}
          <div className="flex gap-1.5 my-4">
            <span className="px-3 py-1 text-xs bg-[#FFA500] text-white rounded-full">PHP</span>
            <span className="px-3 py-1 text-xs bg-blue-500 text-white rounded-full">Available</span>
            <span className="px-3 py-1 text-xs bg-gray-100 text-gray-800 rounded-full">Freelance</span>
          </div>

          {/* Location */}
          <p className="text-sm text-gray-600 mb-6">San Fernando La Union  Philippines</p>

          {/* Stats with updated styling */}
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

          {/* Languages section */}
          <div className="w-full mb-8">
            <h3 className="text-left text-sm font-semibold mb-4">Languages</h3>
            <div className="space-y-4">
              <AnimatedSkillBar skill="Tagalog" percentage={100} />
              <AnimatedSkillBar skill="English" percentage={90} />
              <AnimatedSkillBar skill="Ilocano" percentage={10} />
            </div>
          </div>

          {/* Skills section */}
          <div className="w-full mb-8">
            <h3 className="text-left text-sm font-semibold mb-4">Skills</h3>
            <div className="space-y-4">
              <AnimatedSkillBar skill="HTML" percentage={90} />
              <AnimatedSkillBar skill="CSS" percentage={85} />
              <AnimatedSkillBar skill="JS" percentage={80} />
              <AnimatedSkillBar skill="NextJS" percentage={90} /> 
            </div>
          </div>

          {/* Extra Skills section with icons */}
          <div className="w-full mb-8">
            <h3 className="text-left text-sm font-semibold mb-4">Extra Skills</h3>
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
                  className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <span className="w-5 h-5 flex items-center justify-center bg-[#FFA500]/10 rounded">
                    {item.icon}
                  </span>
                  <span>{item.skills}</span>
                </motion.div>
              ))}
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
      </motion.aside>

      {/* Main Content - Keep white background for cards and sections */}
      <main className="w-full lg:ml-[300px] p-4 md:p-8 lg:p-12 xl:p-16 2xl:p-24">
        <section className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="flex-1 text-center lg:text-left"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-4">
                I&apos;m Hendrick Paul
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="block mt-2"
                >
                  Llamas Castro
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="block mt-2"
                >
                  <span className="text-[#FFA500]">Front-end</span> Developer
                </motion.span>
              </h1>
              <motion.p
                className="text-base md:text-lg text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                A skilled frontend developer with a passion for crafting intuitive user interfaces. 
                Focused on creating responsive, accessible, and high-performance web applications 
                using modern technologies.
              </motion.p>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#FFA500] text-white px-8 md:px-10 py-3 md:py-4 rounded-full font-medium hover:shadow-lg transition-all"
              >
                HIRE ME
              </motion.button>
            </motion.div>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl"
            >
              <div className="absolute -inset-4 bg-[#FFA500]/10 rounded-2xl blur-2xl" />
              <Image
                src="/me.png"
                alt="Profile"
                width={600}
                height={700}
                className="rounded-2xl relative z-10 shadow-2xl w-full h-auto"
              />
            </motion.div>
          </div>
        </section>

        {/* My Services Section - Added section */}
        <section className="max-w-7xl mx-auto mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-xl p-8 shadow-sm"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">My Services</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Offering a range of digital services from web development to multimedia solutions. 
                Each service is delivered with attention to detail and commitment to quality.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: "💻",
                  title: "Web Development",
                  description: "Blog, E-Commerce, Custom Websites",
                },
                {
                  icon: "🎨",
                  title: "UI/UX Design",
                  description: "Website Design, Interface Layout",
                },
                {
                  icon: "🎤",
                  title: "Sound System",
                  description: "Sound System Operation",
                },
                {
                  icon: "📸",
                  title: "Photography",
                  description: "Landscape, Portrait, Event Photography",
                }
              ].map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 * index }}
                  className="bg-white dark:bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all group"
                >
                  <div className="w-12 h-12 bg-[#FFA500]/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <span className="text-2xl">{service.icon}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Education and Work History Section - Added section */}
        <section className="max-w-7xl mx-auto mt-20">
          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900">Education History</h2>
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="space-y-12">
                {[
                  {
                    level: "Tertiary",
                    school: "Lorma Colleges",
                    degree: "Bachelor of Science in Information Technology",
                    date: "2021-2025"
                  },
                  {
                    level: "Secondary",
                    school: "Lorma Special Science High-School",
                    extraInfo: "Lorma Colleges Senior High",
                    date: "2015-2021"
                  },
                  {
                    level: "Primary",
                    school: "Vineyard Foundational Learning Center",
                    extraInfo: "Lorma Grade-School",
                    date: "2008-2015"
                  }
                ].map((edu, index) => (
                  <motion.div
                    key={edu.level}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 * index }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-12 border-b border-gray-100 last:border-0 last:pb-0"
                  >
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{edu.level}</h3>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="px-3 py-1 text-xs bg-[#FFA500] text-white rounded-full">
                          {edu.date}
                        </span>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">{edu.school}</h4>
                      {edu.degree && (
                        <p className="text-gray-600 text-sm mb-2">{edu.degree}</p>
                      )}
                      {edu.extraInfo && (
                        <p className="text-gray-600 text-sm">{edu.extraInfo}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Work History Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900">Work Experience</h2>
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="space-y-12">
                {[
                  {
                    title: "FREELANCING",
                    date: "MARCH 2024 to present",
                    description: "Working as a freelance web developer, creating and maintaining websites for various clients."
                  },
                  {
                    title: "LORMA COLLEGES",
                    date: "JANUARY - FEBRUARY 2025",
                    description: "Internship program focusing on web development and IT infrastructure management."
                  },
                  {
                    title: "DEPARTMENT OF SCIENCE AND TECHNOLOGY",
                    date: "FEBRUARY - MAY 2025",
                    description: "Internship position working on technology-focused projects and research initiatives."
                  }
                ].map((work, index) => (
                  <motion.div
                    key={work.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 * index }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-12 border-b border-gray-100 last:border-0 last:pb-0"
                  >
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{work.title}</h3>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="px-3 py-1 text-xs bg-[#FFA500] text-white rounded-full">
                          {work.date}
                        </span>
                      </div>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm leading-relaxed">{work.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* Portfolio Section - Added section */}
        <section className="max-w-7xl mx-auto mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-xl p-8 shadow-sm"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Portfolio</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Showcasing selected projects that demonstrate my technical skills and creative 
                approach to solving real-world challenges through web development.
              </p>
            </div>

            {/* Portfolio Categories */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {["All Categories", "UI Design", "Web Development", "Full Stack", "Frontend"].map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 text-sm rounded-full transition-all
                    ${category === "All Categories" 
                      ? "bg-[#FFA500] text-white" 
                      : "text-gray-600 hover:bg-gray-100"}`}

                >
                  {category}
                </button>
              ))}
            </div>

            {/* Portfolio Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Jialu Global",
                  category: "Frontend Development", // Changed from Web Templates
                  image: "/project1.png",
                  link: "https://jialugloball.vercel.app",
                  description: "Custom-built church website for Jesus is Alive Church homebase. Featuring modern design, responsive layout, and optimized performance.",
                  techStack: ["Next.js", "Tailwind CSS"]
                },
                {
                  title: "Fomo Frog",
                  category: "Frontend Development", // Changed from Web Templates
                  image: "/project2.png",
                  link: "https://www.memelounge.xyz",
                  description: "Custom cryptocurrency platform with modern UI components and interactive features.",
                  techStack: ["Next.js", "Tailwind CSS"]
                },
                {
                  title: "DOST Portal",
                  category: "Full Stack Development", // Updated category
                  image: "/dost.png",
                  link: "#",
                  description: "In-progress portal development for DOST with focus on user interface and functionality.",
                  techStack: ["HTML", "CSS", "JavaScript"],
                  status: "in-progress"
                }
              ].map((project, index) => (
                project.status === "in-progress" ? (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 * index }}
                    className="group relative bg-white rounded-xl overflow-hidden shadow-sm cursor-not-allowed transition-all"
                  >
                    <div className="aspect-w-16 aspect-h-12 overflow-hidden relative">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={600}
                        height={450}
                        className={`object-cover ${project.status !== "in-progress" ? "group-hover:scale-105" : "opacity-75"} 
                                   transition-transform duration-300`}
                      />
                      {project.status === "in-progress" && (
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                          <span className="px-3 py-1 bg-yellow-500 text-white text-xs rounded-full flex items-center gap-2">
                            <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                            </svg>
                            In Progress
                          </span>
                        </div>
                      )}
                      {project.status !== "in-progress" && (
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-4">
                          <span className="text-white font-medium mb-2">View Project</span>
                          <p className="text-white/80 text-sm text-center mb-2">{project.description}</p>
                          <div className="flex flex-wrap gap-2 justify-center">
                            {project.techStack.map((tech) => (
                              <span key={tech} className="px-2 py-1 bg-white/20 rounded-full text-xs text-white">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-gray-900">{project.title}</h3>
                        {project.status === "in-progress" && (
                          <span className="text-xs text-yellow-600 bg-yellow-50 px-2 py-1 rounded-full">
                            In Development
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-600">{project.category}</p>
                    </div>
                  </motion.div>
                ) : (
                  <motion.a
                    key={project.title}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 * index }}
                    className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all"
                  >
                    <div className="aspect-w-16 aspect-h-12 overflow-hidden relative">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={600}
                        height={450}
                        className={`object-cover ${project.status !== "in-progress" ? "group-hover:scale-105" : "opacity-75"} 
                                   transition-transform duration-300`}
                      />
                      {project.status === "in-progress" && (
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                          <span className="px-3 py-1 bg-yellow-500 text-white text-xs rounded-full flex items-center gap-2">
                            <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                            </svg>
                            In Progress
                          </span>
                        </div>
                      )}
                      {project.status !== "in-progress" && (
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-4">
                          <span className="text-white font-medium mb-2">View Project</span>
                          <p className="text-white/80 text-sm text-center mb-2">{project.description}</p>
                          <div className="flex flex-wrap gap-2 justify-center">
                            {project.techStack.map((tech) => (
                              <span key={tech} className="px-2 py-1 bg-white/20 rounded-full text-xs text-white">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-gray-900">{project.title}</h3>
                        {project.status === "in-progress" && (
                          <span className="text-xs text-yellow-600 bg-yellow-50 px-2 py-1 rounded-full">
                            In Development
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-600">{project.category}</p>
                    </div>
                  </motion.a>
                )
              ))}
            </div>
          </motion.div>
        </section>

        {/* Add Contact section */}
        <Contact />
        
        {/* Add Footer */}
        <Footer />
        
        <ScrollToTop />
      </main>
    </div>
  );
}

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
