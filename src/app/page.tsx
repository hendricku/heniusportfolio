"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import gsap from "gsap";
import Sidebar from "@/components/Sidebar";

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
  // GSAP animation for seminars & awards
  const seminarsRef = useRef<HTMLDivElement>(null);
  const awardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (seminarsRef.current) {
      gsap.fromTo(
        seminarsRef.current.querySelectorAll(".seminar-item"),
        { opacity: 0, x: -40 },
        { opacity: 1, x: 0, stagger: 0.15, duration: 0.7, ease: "power2.out" }
      );
    }
    if (awardsRef.current) {
      gsap.fromTo(
        awardsRef.current.querySelectorAll(".award-item"),
        { opacity: 0, x: 40 },
        { opacity: 1, x: 0, stagger: 0.15, duration: 0.7, ease: "power2.out", delay: 0.5 }
      );
    }
  }, []);

  // Add this state for filtering
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  // Project data
  const projects = [
    {
      title: "Jialu Global",
      category: "Frontend Development",
      image: "/project1.png",
      link: "https://jialugloball.vercel.app",
      description: "Custom-built church website for Jesus is Alive Church homebase. Featuring modern design, responsive layout, and optimized performance.",
      techStack: ["Next.js", "Tailwind CSS"]
    },
    {
      title: "Fomo Frog",
      category: "Frontend Development",
      image: "/project2.png",
      link: "https://www.memelounge.xyz",
      description: "Custom cryptocurrency platform with modern UI components and interactive features.",
      techStack: ["Next.js", "Tailwind CSS ","PostCss"]
    },
    {
      title: "DOST Portal",
      category: "Full Stack Development",
      image: "/dost.png",
      link: "#",
      description: "In-progress portal development for DOST with focus on user interface and functionality.",
      techStack: ["Laravel", "PHP", "MySQL", "Tailwind CSS"],
      status: "in-progress"
    },
    {
      title: "FiLO",
      category: "Full Stack Development",
      image: "/filo.png",
      link: "#",
      description: "It's A System for Disbursement of Financial Assistance to Local Government Units Dost Region 1 -- For Financial Assistance and for budgeting monitoring.",
      techStack: ["Laravel", "PHP", "MySQL", "Tailwind CSS"],
      status: "in-progress"
    }
  ];

  // Filter logic
  const filteredProjects = projects.filter(project => {
    if (selectedCategory === "All Categories") return true;
    if (selectedCategory === "Front End") return project.category === "Frontend Development";
    if (selectedCategory === "Full Stack") return project.category === "Full Stack Development";
    return false;
  });

  return (
    <div className="grid-bg flex flex-col lg:flex-row relative z-10">
      {/* Sidebar as a component */}
      <Sidebar />

      {/* Main Content */}
      <main className="w-full lg:ml-[300px] p-4 md:p-8 lg:p-12 xl:p-16 2xl:p-24">
        <section className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="flex-1 text-center lg:text-left"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-4 leading-tight">
                I&apos;m Hendrick Paul<br />
                Llamas Castro<br />
                <span className="text-[#FFA500]">Front-end</span><br />
                Developer
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
                <a href="mailto:hendrickcastro017.com">HIRE ME</a>
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
                src="/mee.png"
                alt="Profile"
                width={600}
                height={700}
                className="rounded-2xl relative z-10 shadow-2xl w-full h-auto"
              />
            </motion.div>
          </div>
        </section>

        {/* Massive Fresh Graduate Banner */}
        <section className="max-w-7xl mx-auto mt-20 flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "backOut" }}
            className="w-full"
          >
            <h1
              className="text-center text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#FFA500] drop-shadow-lg uppercase"
              style={{
                letterSpacing: "0.05em",
                lineHeight: 1.1,
              }}
            >
              Fresh Graduate<br />
              <span className="text-gray-900 block mt-2 text-2xl md:text-4xl font-bold tracking-wide">
                Batch 2024–2025 &middot; Lorma Colleges
              </span>
            </h1>
          </motion.div>
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

            {/* Services Grid */}
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
                  description: "Portrait, Product Photography",
                }
              ].map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 * index }}
                  className="service-card p-6 rounded-xl shadow-sm hover:shadow-lg"
                >
                  <span className="text-4xl mb-4 block">{service.icon}</span>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
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
                      <h3 className="text-lg font-semibold text-gray-900">{edu.level}</h3>
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="inline-flex items-center px-3 py-1 text-xs font-semibold bg-[#FFA500] text-white rounded-full shadow-sm">
                          {edu.date}
                        </span>
                        {edu.level === "Tertiary" && (
                          <span className="inline-flex items-center px-3 py-1 text-xs font-semibold bg-green-500 text-white rounded-full shadow-sm">
                            <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                            Graduated
                          </span>
                        )}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">{edu.school}</h4>
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

        {/* Seminars and Awards Section - Added section */}
        <section className="max-w-7xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Seminars Attended */}
          <motion.div
            ref={seminarsRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-xl p-8 shadow-sm"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#FFA500] flex items-center gap-2">
              <span>🎓</span> Seminars Attended
            </h2>
            <ul className="space-y-3 list-disc list-inside">
              <li className="seminar-item text-gray-700 flex items-start gap-2">
                <span className="text-[#FFA500] mt-1">•</span>
                <span>Hackathon Seminar in Banko Central San Fernando La Union | 2017</span>
              </li>
              <li className="seminar-item text-gray-700 flex items-start gap-2">
                <span className="text-[#FFA500] mt-1">•</span>
                <span>Y4IT Summit Seminar | 2024</span>
              </li>
              <li className="seminar-item text-gray-700 flex items-start gap-2">
                <span className="text-[#FFA500] mt-1">•</span>
                <span>National Conference on Computing Education and Business (NCCEB) | 2024</span>
              </li>
              <li className="seminar-item text-gray-700 flex items-start gap-2">
                <span className="text-[#FFA500] mt-1">•</span>
                <span>The Tech Talk Seminar | 2023</span>
              </li>
              <li className="seminar-item text-gray-700 flex items-start gap-2">
                <span className="text-[#FFA500] mt-1">•</span>
                <span>AI 101: BETTER UNDERSTANDING OF ARTIFICIAL INTELLIGENCE</span>
              </li>
              <li className="seminar-item text-gray-700 flex items-start gap-2">
                <span className="text-[#FFA500] mt-1">•</span>
                <span>Pytalks (2022) Webinar</span>
              </li>
              <li className="seminar-item text-gray-700 flex items-start gap-2">
                <span className="text-[#FFA500] mt-1">•</span>
                <span>Events Management System and Mobile App Webinar</span>
              </li>
            </ul>
          </motion.div>

          {/* Awards/Recognitions */}
          <motion.div
            ref={awardsRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-xl p-8 shadow-sm"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#FFA500] flex items-center gap-2">
              <span>🏆</span> Awards & Recognitions
            </h2>
            <ul className="space-y-3 list-disc list-inside">
              <li className="award-item text-gray-700 flex items-start gap-2">
                <span className="text-[#FFA500] mt-1">★</span>
                <span>Recognition of CCSE SBO Officer 2022-2023</span>
              </li>
              <li className="award-item text-gray-700 flex items-start gap-2">
                <span className="text-[#FFA500] mt-1">★</span>
                <span>Recognition of CCSE SBO Officer 2023-2024</span>
              </li>
              <li className="award-item text-gray-700 flex items-start gap-2">
                <span className="text-[#FFA500] mt-1">★</span>
                <span>Dean&apos;s List AY 2021-2022 2nd Semester</span>
              </li>
              <li className="award-item text-gray-700 flex items-start gap-2">
                <span className="text-[#FFA500] mt-1">★</span>
                <span>Dean&apos;s List AY 2022-2023 1st Semester</span>
              </li>
              <li className="award-item text-gray-700 flex items-start gap-2">
                <span className="text-[#FFA500] mt-1">★</span>
                <span>Dean&apos;s List AY 2023-2024 2nd Semester</span>
              </li>
              <li className="award-item text-gray-700 flex items-start gap-2">
                <span className="text-[#FFA500] mt-1">★</span>
                <span>Robotics 2nd Place</span>
              </li>
              <li className="award-item text-gray-700 flex items-start gap-2">
                <span className="text-[#FFA500] mt-1">★</span>
                <span>Click Creative Photography Club President -2025</span>
              </li>
              <li className="award-item text-gray-700 flex items-start gap-2">
                <span className="text-[#FFA500] mt-1">★</span>
                <span>Overall Head at the Global Conference on Robotics and Artificial Intelligence Technologies</span>
              </li>
              <li className="award-item text-gray-700 flex items-start gap-2">
                <span className="text-[#FFA500] mt-1">★</span>
                <span>First Place Research Presentation National Conference on Computing Education and Business (NCCEB) | 2024</span>
              </li>
            </ul>
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
              {["All Categories", "Front End", "Full Stack"].map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 text-sm rounded-full transition-all
                    ${selectedCategory === category 
                      ? "bg-[#FFA500] text-white" 
                      : "text-gray-600 hover:bg-gray-100"}`}

                >
                  {category}
                </button>
              ))}
            </div>

            {/* Portfolio Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) =>
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
                        className={`object-cover opacity-75 transition-transform duration-300`}
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <span className="px-3 py-1 bg-yellow-500 text-white text-xs rounded-full flex items-center gap-2">
                          <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                          </svg>
                          In Progress
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-gray-900">{project.title}</h3>
                        <span className="text-xs text-yellow-600 bg-yellow-50 px-2 py-1 rounded-full">
                          In Development
                        </span>
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
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
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
                    </div>
                    <div className="p-4">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-gray-900">{project.title}</h3>
                      </div>
                      <p className="text-sm text-gray-600">{project.category}</p>
                    </div>
                  </motion.a>
                )
              )}
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
