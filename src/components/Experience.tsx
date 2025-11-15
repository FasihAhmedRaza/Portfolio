import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "AI Engineer",
    company: "Ice Butcher",
    location: "Remote",
    period: "Dec 2024 - Aug 2025",
    description: [
      "Developed AI solutions including customer-care assistant, image generation system, SVG/CNC code generator, and lead-generation bot",
      "Utilized Comfy UI for image-related workflows and integrated API-based automation within Flask applications"
    ]
  },
  {
    title: "Software Engineer Intern",
    company: "TPL Insurance",
    location: "Karachi, Pakistan",
    period: "Sep 2024 - Nov 2024",
    description: [
      "Built dynamic React form systems integrated with Google Sheets, email, and SMS services",
      "Developed Shell/PSO pump registration management platform and initiated React Native app with camera features"
    ]
  },
  {
    title: "AI Chatbot Developer",
    company: "Fiverr & Upwork",
    location: "Remote",
    period: "Jun 2022 - Present",
    description: [
      "Delivered 50+ intelligent AI solutions, including Alexa Skills and enterprise automation systems",
      "Managed complete lifecycle: requirement analysis, dialog design, NLU modeling, backend integration, and testing",
      "Specialized in N8N, Zapier, Dialogflow CX/ES, Flowise, Python, and LLM-driven automation workflows"
    ]
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-gradient-to-b from-background to-card/20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
          Experience
        </h2>
        <div className="section-divider mx-auto mb-12 w-24" />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 -ml-2 bg-primary rounded-full border-4 border-background shadow-lg" 
                  style={{ boxShadow: "var(--shadow-neon)" }}
                />

                {/* Content */}
                <div className={`flex-1 ml-16 md:ml-0 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div className="glass-card rounded-2xl p-6 transition-all duration-300 hover:scale-105">
                    <div className="flex items-start gap-3 mb-3">
                      <Briefcase className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-primary mb-1">{exp.title}</h3>
                        <p className="text-lg font-semibold text-foreground">{exp.company}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                      <span className="mx-2">•</span>
                      <span>{exp.location}</span>
                    </div>

                    <ul className="space-y-2 text-muted-foreground">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-primary mt-1">▹</span>
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
