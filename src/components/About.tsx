import { Code2, Cpu, Zap } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
          About Me
        </h2>
        <div className="section-divider mx-auto mb-12 w-24" />

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="glass-card rounded-2xl p-8 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-4 text-primary">Who I Am</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I'm an AI & Automation Engineer with over a year of hands-on experience in building intelligent solutions that drive business growth. Currently pursuing BS Artificial Intelligence at Bahria University Karachi, I combine academic knowledge with real-world expertise.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My passion lies in leveraging cutting-edge AI technologies to solve complex problems, from developing conversational AI agents to building full-stack applications with seamless automation.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-8 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-4 text-primary">What I Do</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I specialize in creating end-to-end AI solutions including customer care assistants, image generation systems, voice agents, and enterprise automation platforms. My expertise spans from requirement analysis and dialog design to NLU modeling and backend integration.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With 50+ delivered projects on Fiverr and Upwork, I've helped businesses automate workflows, enhance customer experiences, and leverage AI for competitive advantage.
            </p>
          </div>
        </div>

        {/* Key Highlights */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="glass-card rounded-2xl p-6 text-center transition-all duration-300 hover:scale-105">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-4">
              <Code2 className="w-8 h-8 text-primary" />
            </div>
            <h4 className="text-xl font-bold mb-2">Full-Stack Development</h4>
            <p className="text-muted-foreground text-sm">
              React, Next.js, Node.js, FastAPI, and modern web technologies
            </p>
          </div>

          <div className="glass-card rounded-2xl p-6 text-center transition-all duration-300 hover:scale-105">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-4">
              <Cpu className="w-8 h-8 text-primary" />
            </div>
            <h4 className="text-xl font-bold mb-2">AI & Machine Learning</h4>
            <p className="text-muted-foreground text-sm">
              NLP, LLMs, Computer Vision, Dialogflow, and Generative AI
            </p>
          </div>

          <div className="glass-card rounded-2xl p-6 text-center transition-all duration-300 hover:scale-105">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-4">
              <Zap className="w-8 h-8 text-primary" />
            </div>
            <h4 className="text-xl font-bold mb-2">Automation & Integration</h4>
            <p className="text-muted-foreground text-sm">
              N8N, Zapier, API development, and workflow automation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
