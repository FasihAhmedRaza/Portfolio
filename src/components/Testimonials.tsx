import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    text: "Working with Fasih Ahmed was an absolute pleasure from start to finish. He is a true professional, highly knowledgeable, intelligent and extremely polite and helpful. Fasih will work with you until everything works perfectly, paying attention to every detail until you are satisfied with the work. I cannot recommend this developer enough.",
    rating: 5
  },
  {
    text: "I'm beyond impressed with the Alexa skill delivered. The quality of work, professionalism, and attention to detail were outstanding from start to finish. The final product is intuitive and functional and exceeds all expectations. The seller was responsive, understood my needs perfectly, and suggested thoughtful improvements.",
    rating: 5
  },
  {
    text: "I had an incredible experience collaborating with Fasih whose talent and dedication left me absolutely thrilled. The results of our Moksha Liberation Alexa Skill project exceeded my expectations, showcasing his impressive skills and creativity in every detail. I'm genuinely amazed by the seamless functionality and innovation he brought to the table!",
    rating: 5
  },
  {
    text: "I requested a very unique Alexa skill that I wasn't even sure was possible, but Fasih went above and beyond to make it a reality, and was able to fix issues as they came up. His response time is quick, and he maintains a great level of professionalism. The man knows his stuff, and I would be happy to hire him again for future coding projects.",
    rating: 5
  },
  {
    text: "Fasih Ahmed's work on our Alexa development project was nothing short of perfection. The professionalism, attention to detail, and bug-free delivery blew us away. Working with Fasih was a breeze too; his politeness, timely delivery, and deep understanding of our needs made the process smooth and enjoyable. Highly recommend!",
    rating: 5
  },
  {
    text: "Developer went above and beyond and developed an awesome webpage. Looks great. We will recommend hiring him in the future again.",
    rating: 5
  },
  {
    text: "Very good attitude. Polite. And hard working. Willing to please. Will be back for more web development.",
    rating: 5
  },
  {
    text: "This is my second time working with Mr. Ahmed and I will definitely be using his services again. He always responds to messages promptly and will not rest until your project is completed to your liking.",
    rating: 5
  }
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
          Client Testimonials
        </h2>
        <div className="section-divider mx-auto mb-12 w-24" />

        <div className="relative">
          <div className="glass-card rounded-2xl p-8 md:p-12 transition-all duration-300">
            <Quote className="w-12 h-12 text-primary/30 mb-6" />
            
            <div className="mb-6">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              
              <p className="text-lg md:text-xl text-foreground leading-relaxed italic">
                "{testimonials[currentIndex].text}"
              </p>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              <Button
                variant="ghost"
                size="icon"
                onClick={goToPrevious}
                className="hover:bg-primary/10 hover:text-primary transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setIsAutoPlaying(false);
                      setCurrentIndex(index);
                    }}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "bg-primary w-8"
                        : "bg-primary/30 hover:bg-primary/50"
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="ghost"
                size="icon"
                onClick={goToNext}
                className="hover:bg-primary/10 hover:text-primary transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
            </div>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-6">
            {currentIndex + 1} of {testimonials.length} reviews
          </p>
        </div>
      </div>
    </section>
  );
};
