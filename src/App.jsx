import React, { useState } from 'react';

export default function Resume() {
  // We now have two separate states for our two popup modals
  const [showCerts, setShowCerts] = useState(false);
  const [showProjects, setShowProjects] = useState(false);

  const colors = {
    pageBackground: '#768A96', 
    cardBackground: '#FFFFFF', 
    dark: '#29353C',       
    primary: '#44576D',    
    secondary: '#768A96',  
    border: '#AAC7D8',     
    surface: '#DFEBF6'     
  };

  const cvData = {
    name: "JANRYL JAY T. CANAWAY",
    contact: [
      "Rodriguez, Rizal",
      "09766799750",
      "canaway.janryljayt@gmail.com"
    ],
    links: [
      { label: "LinkedIn", url: "https://linkedin.com/in/janryl-jay-canaway" },
      { label: "GitHub", url: "https://github.com/yanrylj" }
    ],
    summary: "Dedicated Computer Engineer with hands-on experience in embedded systems, computer vision, and loT development. Proven ability to design and integrate hardware and Al models to solve real-world problems, from precision agriculture to automated monitoring systems.",
    experience: [
      {
        role: "Tap Media Ventures Corp - Network Operations Centre",
        date: "June 2025-August 2025",
        bullets: [
          "Monitored and operated continuous channel broadcasting systems across 11 active networks, ensuring 99.9% uptime and seamless media transmission for daily programming.",
          "Collaborated with cross-functional technical teams to rapidly troubleshoot and resolve real-time feed interruptions, reducing average broadcast downtime.",
          "Managed and audited detailed daily broadcast schedules and operational logs.",
          "Streamlined technical reporting processes and improved workflow efficiency for the media operations team."
        ]
      },
      {
        role: "Freelance Embedded Systems Developer",
        date: "January 2022 - Present",
        bullets: [
          "Architected and programmed end-to-end embedded and industrial control systems, utilizing microcontrollers, System-on-Chip (SoC) devices, and FPGA technologies to translate diverse client requirements into fully functional prototypes.",
          "Integrated advanced computer vision and machine learning models into localized hardware environments, automating complex tasks and enabling real-time data processing.",
          "Maintained strict version control for firmware releases and hardware schematics via GitHub, producing clear technical documentation to facilitate transparent code reviews for clients."
        ]
      }
    ],
    featuredProjects: [
      {
        title: "Custom Network Video Recorder (NVR)",
        date: "November 2025",
        description: "Configured a dedicated Debian-based NVR server leveraging FFmpeg to capture, manage, and automate storage for continuous RTSP camera streams."
      },
      {
        title: "Multispectral Camera for Crop Monitoring (Thesis)",
        date: "February 2026",
        description: "Developed a dual-sensor (NIR and RGB) imaging system using a Raspberry Pi to calculate vegetation indices (NDVI/GNDVI) for real-time agricultural health analysis."
      },
      {
        title: "Braille-to-Speech System",
        date: "March 2026",
        description: "Implemented an assistive device utilizing an ESP32-CAM and Roboflow OCR to translate physical Braille characters into real-time audio feedback."
      }
    ],
    
    // NEW: Categorized Additional Projects
    otherProjects: [
      {
        category: "Machine Learning & Computer Vision",
        items: [
          { title: "Fruit-Detection-Model", description: "A simple Fruit Detection for low-end devices." },
          { title: "Cat-and-Dog-Model", description: "A model that classifies images of cats and dogs. Built using Python and TensorFlow/Keras." },
          { title: "Face-and-Age-Detection", description: "A computer vision project focused on detecting faces and estimating age." }
        ]
      },
      {
        category: "Hardware & Robotics",
        items: [
          { title: "ESP32-Balancing-Robot", description: "ESP32 balancing robot that uses an MPU6050 sensor and a PID controller to maintain a vertical position." },
          { title: "Line-Following-Robot", description: "An Arduino-powered line-following robot using IR sensors to detect track paths and DC motors for navigation." },
          { title: "Arduino-Persistence-Of-Vison-POV", description: "Arduino POV display that creates moving letters using LEDs and motion." },
          { title: "ESP32-ECG-Monitor-OLED-Display", description: "A hardware setup utilizing an ESP32 to read electrocardiogram (ECG) data and output the readings to an OLED screen." },
          { title: "7-Segment-Display-Digital-Clock", description: "A digital clock built using a standard 7-segment hardware display." }
        ]
      }
    ],
    
    education: {
      degree: "Bachelor's Degree in Computer Engineering",
      school: "Colegio de Montalban, Rodriguez, Rizal",
      date: "2022-2026"
    },
    skills: {
      software: [
        "Embedded systems design", "Circuit design", "Cloud integration", 
        "Linux server administration", "Linux systems", "Edge Computing", 
        "Machine Learning Deployment"
      ],
      domain: [
        "Software-hardware integration", "Server configuration", "Automated sorting systems", 
        "Rapid prototyping", "Broadcast Systems Monitoring", "Technical Troubleshooting", 
        "Quality Control"
      ]
    },
    
    // UPDATED: Your actual certificates mapped from the uploaded images
    certifications: [
      { title: "Getting Started", issuer: "AWS Training & Certification", date: "May 20, 2026" },
      { title: "Exploring Artificial Intelligence Use Cases and Applications", issuer: "AWS Training & Certification", date: "May 20, 2026" },
      { title: "Getting into the Serverless Mindset", issuer: "AWS Training & Certification", date: "May 20, 2026" },
      { title: "Machine Learning Terminology and Process", issuer: "AWS Training & Certification", date: "May 20, 2026" },
      { title: "Building a Generative AI-Ready Organization", issuer: "AWS Training & Certification", date: "May 20, 2026" },
      { title: "AWS Database Migration Service (AWS DMS) Getting Started", issuer: "AWS Training & Certification", date: "May 20, 2026" },
      { title: "AWS Cloud Development Kit (CDK) Getting Started", issuer: "AWS Training & Certification", date: "May 20, 2026" },
      { title: "AWS Simple Queue Service (SQS) Getting Started", issuer: "AWS Training & Certification", date: "May 20, 2026" },
      { title: "Amazon SageMaker AI Getting Started", issuer: "AWS Training & Certification", date: "May 19, 2026" },
      { title: "Responsible Artificial Intelligence Practices", issuer: "AWS Training & Certification", date: "May 19, 2026" },
      { title: "Fundamentals of Generative AI", issuer: "AWS Training & Certification", date: "May 09, 2026" },
      { title: "Crypto and Blockchain 101", issuer: "DICT", date: "May 26, 2026" },
      { title: "Getting Started with UI/UX Design: From Zero to Your First Figma Project", issuer: "DICT", date: "May 20, 2026" },
      { title: "Online Trends and Netiquette", issuer: "John Paul College", date: "May 18, 2026" },
      { title: "Your Feed, Your Responsibility: Understanding the Risks and Ethics of AI", issuer: "John Paul College", date: "May 18, 2026" },
      { title: "A.I.R.P.S. (AI-POWERED REPORTS, PRESENTATIONS, AND SYSTEMS)", issuer: "John Paul College", date: "May 17, 2026" },
      { title: "Introduction to CSS", issuer: "TESDA", date: "May 15, 2026" },
      { title: "Mastering the Basics: Number Systems and Conversion Techniques", issuer: "Colegio de Montalban", date: "Nov 16, 2024" },
      { title: "Data Science and Machine Learning", issuer: "Colegio de Montalban", date: "Nov 9, 2024" },
      { title: "Introduction to Applied Cybersecurity and Digital Forensics", issuer: "Colegio de Montalban", date: "Oct 30, 2024" },
      { title: "Facilitator: Shaping a Safer Tomorrow", issuer: "Colegio de Montalban", date: "June 2, 2025" },
      { title: "General Cleaning Support", issuer: "Colegio de Montalban", date: "March 25, 2024" },
      { title: "Hour of Code Campaign", issuer: "AI Ready ASEAN / Break The Fake", date: "Aug 2, 2025" },
      { title: "Capture the Flag Preliminary Round", issuer: "Trend Micro", date: "Aug 22, 2025" },
      { title: "Programming Languages JAVA: C/C++ / C#", issuer: "Cebu IT-BPM Organization", date: "Oct 21, 2022" }
    ]
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-8 font-sans relative" style={{ backgroundColor: colors.pageBackground, color: colors.dark }}>
      <div className="max-w-4xl mx-auto shadow-2xl rounded-lg overflow-hidden" style={{ backgroundColor: colors.cardBackground }}>
        
        <header className="p-8 border-b-4" style={{ borderColor: colors.border, backgroundColor: colors.surface }}>
          <h1 className="text-4xl font-bold tracking-tight mb-2 uppercase">{cvData.name}</h1>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium" style={{ color: colors.primary }}>
            {cvData.contact.map((item, idx) => <span key={idx}>{item}</span>)}
          </div>
          <div className="flex flex-wrap gap-x-6 mt-3 text-sm font-bold">
            {cvData.links.map((link, idx) => (
              <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer" className="hover:underline transition-all" style={{ color: colors.secondary }}>
                {link.label}
              </a>
            ))}
          </div>
        </header>

        <div className="p-8 space-y-10">
          <section>
            <h2 className="text-xl font-semibold mb-3 uppercase tracking-wide" style={{ color: colors.primary }}>Summary</h2>
            <p className="leading-relaxed text-sm" style={{ color: colors.dark }}>{cvData.summary}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 uppercase tracking-wide border-b pb-2" style={{ color: colors.primary, borderColor: colors.border }}>Work Experience</h2>
            <div className="space-y-6">
              {cvData.experience.map((job, idx) => (
                <div key={idx}>
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="font-bold text-base" style={{ color: colors.dark }}>{job.role}</h3>
                    <span className="text-sm font-medium" style={{ color: colors.secondary }}>{job.date}</span>
                  </div>
                  <ul className="list-disc list-outside ml-5 space-y-1 text-sm" style={{ color: colors.dark }}>
                    {job.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="leading-relaxed">{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 uppercase tracking-wide border-b pb-2" style={{ color: colors.primary, borderColor: colors.border }}>Featured Projects</h2>
            <div className="space-y-5">
              {cvData.featuredProjects.map((project, idx) => (
                <div key={idx}>
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="font-bold text-base" style={{ color: colors.dark }}>{project.title}</h3>
                    <span className="text-sm font-medium" style={{ color: colors.secondary }}>{project.date}</span>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: colors.dark }}>{project.description}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <section>
              <h2 className="text-xl font-semibold mb-4 uppercase tracking-wide border-b pb-2" style={{ color: colors.primary, borderColor: colors.border }}>Education</h2>
              <div>
                <h3 className="font-bold text-base" style={{ color: colors.dark }}>{cvData.education.degree}</h3>
                <p className="text-sm mt-1" style={{ color: colors.primary }}>{cvData.education.school}</p>
                <p className="text-sm mt-1" style={{ color: colors.secondary }}>{cvData.education.date}</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 uppercase tracking-wide border-b pb-2" style={{ color: colors.primary, borderColor: colors.border }}>Skills</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-sm mb-2" style={{ color: colors.dark }}>Software & Systems</h3>
                  <div className="flex flex-wrap gap-2">
                    {cvData.skills.software.map((skill, idx) => (
                      <span key={idx} className="px-2 py-1 text-xs font-medium rounded" style={{ backgroundColor: colors.surface, color: colors.primary }}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-sm mb-2" style={{ color: colors.dark }}>Domain Expertise</h3>
                  <div className="flex flex-wrap gap-2">
                    {cvData.skills.domain.map((skill, idx) => (
                      <span key={idx} className="px-2 py-1 text-xs font-medium rounded" style={{ backgroundColor: colors.surface, color: colors.primary }}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* TWO BUTTONS: Projects and Certifications */}
          <div className="pt-6 pb-2 flex flex-col sm:flex-row justify-center gap-4 border-t border-dashed" style={{ borderColor: colors.border }}>
            <button 
              onClick={() => setShowProjects(true)}
              className="px-6 py-2 rounded font-bold shadow-sm hover:opacity-90 transition-opacity border-2"
              style={{ borderColor: colors.primary, color: colors.primary, backgroundColor: colors.cardBackground }}
            >
              View All Projects
            </button>
            <button 
              onClick={() => setShowCerts(true)}
              className="px-6 py-2 rounded font-bold shadow-sm hover:opacity-90 transition-opacity"
              style={{ backgroundColor: colors.primary, color: colors.cardBackground }}
            >
              View Certifications
            </button>
          </div>
        </div>
      </div>

      {/* PROJECTS MODAL */}
      {showProjects && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="max-w-3xl w-full rounded-lg shadow-xl p-8 relative max-h-[90vh] overflow-y-auto" style={{ backgroundColor: colors.cardBackground }}>
            <button onClick={() => setShowProjects(false)} className="absolute top-4 right-5 text-3xl font-bold hover:opacity-70" style={{ color: colors.primary }}>&times;</button>
            
            <h2 className="text-2xl font-bold mb-6 uppercase tracking-wide border-b pb-3" style={{ color: colors.primary, borderColor: colors.border }}>
              Project Portfolio
            </h2>
            
            <div className="space-y-8">
              {cvData.otherProjects.map((category, idx) => (
                <div key={idx}>
                  <h3 className="text-lg font-bold mb-4 uppercase tracking-wider" style={{ color: colors.secondary }}>{category.category}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {category.items.map((project, pIdx) => (
                      <div key={pIdx} className="p-4 rounded border" style={{ borderColor: colors.surface, backgroundColor: '#f9fbfd' }}>
                        <h4 className="font-bold text-sm mb-2" style={{ color: colors.dark }}>{project.title}</h4>
                        <p className="text-xs leading-relaxed" style={{ color: colors.primary }}>{project.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <button onClick={() => setShowProjects(false)} className="px-6 py-2 rounded text-sm font-semibold hover:opacity-90 transition-opacity" style={{ backgroundColor: colors.secondary, color: colors.cardBackground }}>Close</button>
            </div>
          </div>
        </div>
      )}

      {/* CERTIFICATIONS MODAL */}
      {showCerts && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="max-w-2xl w-full rounded-lg shadow-xl p-8 relative max-h-[90vh] overflow-y-auto" style={{ backgroundColor: colors.cardBackground }}>
            <button onClick={() => setShowCerts(false)} className="absolute top-4 right-5 text-3xl font-bold hover:opacity-70" style={{ color: colors.primary }}>&times;</button>
            
            <h2 className="text-2xl font-bold mb-6 uppercase tracking-wide border-b pb-3" style={{ color: colors.primary, borderColor: colors.border }}>
              Certifications & Licenses
            </h2>
            
            <div className="space-y-5">
              {cvData.certifications.map((cert, idx) => (
                <div key={idx} className="pb-4 border-b last:border-b-0 last:pb-0" style={{ borderColor: colors.surface }}>
                  <h3 className="font-bold text-lg leading-tight" style={{ color: colors.dark }}>{cert.title}</h3>
                  <div className="flex justify-between items-center text-sm mt-2">
                    <span className="font-medium" style={{ color: colors.primary }}>{cert.issuer}</span>
                    <span className="whitespace-nowrap ml-2" style={{ color: colors.secondary }}>{cert.date}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <button onClick={() => setShowCerts(false)} className="px-6 py-2 rounded text-sm font-semibold hover:opacity-90 transition-opacity" style={{ backgroundColor: colors.secondary, color: colors.cardBackground }}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}