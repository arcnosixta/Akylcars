import { Button } from "@/components/ui/button";
import { Camera, Zap, CheckCircle } from "lucide-react";
import personScanning from "@/assets/person-scanning.jpg";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: Camera,
      title: "Сделайте фото",
      description: "Просто сфотографируйте ваше блюдо с помощью камеры смартфона."
    },
    {
      number: "02", 
      icon: Zap,
      title: "ИИ-анализ",
      description: "Наш продвинутый ИИ мгновенно определяет и анализирует каждый компонент вашей еды."
    },
    {
      number: "03",
      icon: CheckCircle,
      title: "Получите результат",
      description: "Получайте подробную информацию о питательности и персональные рекомендации для здоровья."
    }
  ];

  return (
    <section className="py-24 bg-gradient-soft">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white/80 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Zap className="w-4 h-4" />
              Простой процесс
            </div>
            
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Как работает <span className="bg-gradient-primary bg-clip-text text-transparent">AIVIA</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-12">
              Получение пищевых рекомендаций никогда не было проще. Всего три простых шага, чтобы изменить понимание вашей еды.
            </p>

            {/* Steps */}
            <div className="space-y-8 mb-12">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center relative">
                      <step.icon className="w-7 h-7 text-white" />
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center text-sm font-bold text-primary shadow-medium">
                        {step.number}
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button variant="hero" size="lg" className="px-8">
              <Camera className="w-5 h-5" />
              Начать сканирование
            </Button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-strong">
              <img 
                src={personScanning} 
                alt="Person using AIVIA app" 
                className="w-full h-[600px] object-cover"
              />
            </div>
            {/* Decorative gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl"></div>
            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-hero rounded-full blur-3xl opacity-30"></div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-success rounded-full blur-2xl opacity-40"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;