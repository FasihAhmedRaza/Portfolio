import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    category: "AI/ML Technologies",
    skills: ["Machine Learning", "NLP", "Dialogflow", "LLMs", "Generative AI", "RAG", "PyTorch", "TensorFlow", "Hugging Face", "OpenAI"]
  },
  {
    category: "Programming Languages",
    skills: ["Python", "JavaScript", "TypeScript", "C++", "HTML/CSS"]
  },
  {
    category: "Web Frameworks",
    skills: ["React.js", "Next.js", "Node.js", "Express.js", "FastAPI", "Flask", "Tailwind CSS"]
  },
  {
    category: "Databases",
    skills: ["MongoDB", "MySQL", "Firebase", "Supabase", "Pinecone", "Google Sheets API"]
  },
  {
    category: "Cloud & DevOps",
    skills: ["GCP", "AWS", "Git", "Vercel", "Streamlit", "Render", "Railway", "Heroku", "Docker"]
  },
  {
    category: "Automation Tools",
    skills: ["N8N", "Zapier", "Flowise", "Alexa Skills Kit", "Voice AI", "Eleven Labs", "Twilio"]
  },
  {
    category: "Soft Skills",
    skills: ["Problem-Solving", "Analytical Thinking", "Client Communication", "Project Management", "Team Leadership", "Time Management"]
  }
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
          Skills & Expertise
        </h2>
        <div className="section-divider mx-auto mb-12 w-24" />

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-6 transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-4 text-primary flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full" />
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <Badge
                    key={i}
                    variant="secondary"
                    className="bg-secondary/50 hover:bg-primary/20 border border-primary/30 text-foreground transition-all duration-300 hover:scale-105 hover:border-primary/50"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
