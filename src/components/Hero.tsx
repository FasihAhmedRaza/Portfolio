import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.png";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card opacity-90" />
      <div 
        className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow"
        style={{ animationDelay: "0s" }}
      />
      <div 
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-blue/20 rounded-full blur-3xl animate-pulse-slow"
        style={{ animationDelay: "2s" }}
      />

      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Profile Photo with neon glow */}
          <div className="relative inline-block animate-float">
            <div className="absolute inset-0 bg-primary rounded-full blur-2xl opacity-50" />
            <img
              src={profilePhoto}
              alt="Fasih Ahmed Raza"
              className="relative w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-primary/50 shadow-2xl mx-auto"
              style={{ boxShadow: "var(--shadow-neon)" }}
            />
          </div>

          {/* Name with gradient text */}
          <div className="space-y-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <h1 className="text-5xl md:text-7xl font-bold gradient-text">
              Fasih Ahmed Raza
            </h1>
            <p className="text-2xl md:text-3xl text-primary font-semibold neon-text">
              AI & Automation Engineer
            </p>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Transforming ideas into intelligent solutions with 1+ years of experience in AI, automation, and full-stack development
            </p>
          </div>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Button
              onClick={() => scrollToSection("contact")}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg transition-all duration-300"
              style={{ boxShadow: "var(--shadow-neon)" }}
            >
              Get In Touch
            </Button>
            <Button
              onClick={() => scrollToSection("projects")}
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary/10 font-semibold px-8 py-6 text-lg transition-all duration-300"
            >
              View Projects
            </Button>
          </div>

          {/* Scroll indicator */}
          <div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
            onClick={() => scrollToSection("about")}
          >
            <ArrowDown className="w-6 h-6 text-primary" />
          </div>
        </div>
      </div>
    </section>
  );
};
