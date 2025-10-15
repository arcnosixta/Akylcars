import { Button } from "@/components/ui/button";
import { ArrowRight, Camera, Brain, Zap } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-soft overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-primary-soft text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Zap className="w-4 h-4" />
              ИИ-питание
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Знакомьтесь с <span className="bg-gradient-primary bg-clip-text text-transparent">AIVIA</span>
              <br />
              Ваш умный помощник по питанию
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0">
              Просто сделайте фото вашего блюда и мгновенно узнайте калории, пищевую ценность и персонализированные рекомендации от продвинутого ИИ.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" className="px-8">
                <Camera className="w-5 h-5" />
                Попробовать AIVIA
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="px-8">
                <Brain className="w-5 h-5" />
                Узнать больше
              </Button>
            </div>
            
            <div className="flex items-center gap-8 mt-12 justify-center lg:justify-start">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">1M+</div>
                <div className="text-sm text-muted-foreground">Блюд проанализировано</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Точность</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">500K+</div>
                <div className="text-sm text-muted-foreground">Довольных пользователей</div>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={heroImage} 
                alt="AIVIA App Interface" 
                className="w-full max-w-lg mx-auto rounded-2xl shadow-strong"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute top-1/4 -right-8 w-32 h-32 bg-gradient-primary rounded-full blur-3xl opacity-20"></div>
            <div className="absolute bottom-1/4 -left-8 w-24 h-24 bg-info rounded-full blur-2xl opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;