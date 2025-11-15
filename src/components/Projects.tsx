import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Virtual Try-On AI Application",
    category: "Computer Vision Application",
    description: "Developed advanced solution using CNN architecture and IR painting for realistic garment overlay. Implemented deep learning models for feature extraction and real-time pose estimation fitting.",
    tech: ["CNN", "Computer Vision", "Deep Learning", "Python"],
    highlights: ["Real-time Processing", "High Accuracy", "Enhanced UX"]
  },
  {
    title: "Appointment Schedule Agent",
    category: "AI-Powered Scheduling System",
    description: "Developed Dialogflow CX-powered intelligent scheduling agent deployed on Heroku cloud platform. Integrated real-time Google Sheets/Calendar synchronization for automated booking validation.",
    tech: ["Dialogflow CX", "FastAPI", "Heroku", "Google Sheets API"],
    highlights: ["Automated Booking", "Real-time Sync", "Webhook Integration"]
  },
  {
    title: "AI Voice Agent",
    category: "Conversational AI Application",
    description: "Engineered comprehensive voice interaction system using n8n, Eleven Labs, OpenAI, and vector memory. Implemented real-time voice-based event booking with natural language processing.",
    tech: ["n8n", "Eleven Labs", "OpenAI", "Voice AI"],
    highlights: ["Voice Recognition", "NLP", "Event Booking"]
  },
  {
    title: "Lead Generation Agent",
    category: "Data Automation Pipeline",
    description: "Developed automated n8n pipeline querying Google Maps API with advanced ZIP code and category filtering. Implemented sophisticated data filtering and deduplication algorithms.",
    tech: ["n8n", "Google Maps API", "Data Processing", "Automation"],
    highlights: ["Automated Pipeline", "Smart Filtering", "High Quality Leads"]
  },
  {
    title: "Salvage Data Recovery Agent",
    category: "AI Customer Support Agent",
    description: "Developed Dialogflow agent integrated with Google Generative AI for dynamic FAQ handling. Added case tracking via database lookups and CRM-based order management.",
    tech: ["Dialogflow", "Google AI", "FastAPI", "Database"],
    highlights: ["Dynamic FAQ", "Case Tracking", "CRM Integration"]
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-b from-card/20 to-background">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
          Featured Projects
        </h2>
        <div className="section-divider mx-auto mb-12 w-24" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-6 transition-all duration-300 hover:scale-105 flex flex-col"
            >
              <div className="mb-4">
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold mt-2 mb-3">{project.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="mt-auto space-y-4">
                <div>
                  <h4 className="text-xs font-semibold text-primary mb-2">Key Highlights</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.highlights.map((highlight, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/30"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-semibold text-primary mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 rounded-full bg-secondary/50 text-foreground border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
