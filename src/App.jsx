import React, { useState } from 'react';

export default function Resume() {
  const [showCerts, setShowCerts] = useState(false);

  // Updated color mapping for better contrast
  const colors = {
    pageBackground: '#768A96', // Deep Greyish-Blue for the outer page
    cardBackground: '#FFFFFF', // Pure white for the CV document
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
    projects: [
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
    certifications: [
      { title: "Placeholder: Embedded Systems Certification", issuer: "Cisco Networking Academy", date: "2024" },
      { title: "Placeholder: Machine Learning Fundamentals", issuer: "Coursera", date: "2023" },
      { title: "Placeholder: AWS Cloud Practitioner", issuer: "Amazon Web Services", date: "2025" }
    ]
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-8 font-sans relative" style={{ backgroundColor: colors.pageBackground, color: colors.dark }}>
      
      {/* Main CV Container - Now pure white with a stronger shadow */}
      <div className="max-w-4xl mx-auto shadow-2xl rounded-lg overflow-hidden" style={{ backgroundColor: colors.cardBackground }}>
        
        {/* Header Section */}
        <header className="p-8 border-b-4" style={{ borderColor: colors.border, backgroundColor: colors.surface }}>
          <h1 className="text-4xl font-bold tracking-tight mb-2 uppercase">{cvData.name}</h1>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium" style={{ color: colors.primary }}>
            {cvData.contact.map((item, idx) => <span key={idx}>{item}</span>)}
          </div>
          
          {/* Clickable Links - Icon Removed */}
          <div className="flex flex-wrap gap-x-6 mt-3 text-sm font-bold">
            {cvData.links.map((link, idx) => (
              <a 
                key={idx} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:underline transition-all"
                style={{ color: colors.secondary }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </header>

        <div className="p-8 space-y-10">
          {/* Summary Section */}
          <section>
            <h2 className="text-xl font-semibold mb-3 uppercase tracking-wide" style={{ color: colors.primary }}>Summary</h2>
            <p className="leading-relaxed text-sm" style={{ color: colors.dark }}>{cvData.summary}</p>
          </section>

          {/* Experience Section */}
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

          {/* Projects Section */}
          <section>
            <h2 className="text-xl font-semibold mb-4 uppercase tracking-wide border-b pb-2" style={{ color: colors.primary, borderColor: colors.border }}>Projects</h2>
            <div className="space-y-5">
              {cvData.projects.map((project, idx) => (
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

          {/* Education & Skills Grid */}
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

          {/* Button to open Certifications Modal */}
          <div className="pt-6 pb-2 text-center border-t border-dashed" style={{ borderColor: colors.border }}>
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

      {/* Certifications Modal Overlay */}
      {showCerts && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div 
            className="max-w-2xl w-full rounded-lg shadow-xl p-8 relative max-h-[90vh] overflow-y-auto" 
            style={{ backgroundColor: colors.cardBackground }}
          >
            {/* Close Button */}
            <button 
              onClick={() => setShowCerts(false)} 
              className="absolute top-4 right-5 text-3xl font-bold hover:opacity-70"
              style={{ color: colors.primary }}
            >
              &times;
            </button>
            
            <h2 className="text-2xl font-bold mb-6 uppercase tracking-wide border-b pb-3" style={{ color: colors.primary, borderColor: colors.border }}>
              Certifications & Licenses
            </h2>
            
            <div className="space-y-5">
              {cvData.certifications.map((cert, idx) => (
                <div key={idx} className="pb-4 border-b last:border-b-0 last:pb-0" style={{ borderColor: colors.surface }}>
                  <h3 className="font-bold text-lg" style={{ color: colors.dark }}>{cert.title}</h3>
                  <div className="flex justify-between items-center text-sm mt-1">
                    <span className="font-medium" style={{ color: colors.primary }}>{cert.issuer}</span>
                    <span style={{ color: colors.secondary }}>{cert.date}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <button 
                onClick={() => setShowCerts(false)}
                className="px-6 py-2 rounded text-sm font-semibold hover:opacity-90 transition-opacity"
                style={{ backgroundColor: colors.secondary, color: colors.cardBackground }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}