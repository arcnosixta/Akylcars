import { Card, CardContent } from "@/components/ui/card";
import { Camera, Brain, Zap, MessageSquare, BarChart3, Shield } from "lucide-react";
import foodVariety from "@/assets/food-variety.jpg";

const Features = () => {
  const features = [
    {
      icon: Camera,
      title: "Умное распознавание фото",
      description: "Продвинутый ИИ мгновенно определяет продукты с одного фото с точностью 98%.",
      gradient: "from-primary to-primary-glow"
    },
    {
      icon: BarChart3,
      title: "Мгновенный подсчет калорий",
      description: "Получайте точную информацию о калориях и макронутриентах за секунды.",
      gradient: "from-info to-primary"
    },
    {
      icon: Shield,
      title: "Анализ здоровья",
      description: "Узнайте, поддерживает ли ваш выбор еды цели здоровья с персональными рекомендациями.",
      gradient: "from-success to-primary-glow"
    },
    {
      icon: MessageSquare,
      title: "ИИ-бот по питанию",
      description: "Общайтесь с личным помощником по питанию для планирования рациона и диетических советов.",
      gradient: "from-warning to-info"
    },
    {
      icon: Zap,
      title: "Молниеносная скорость",
      description: "Результаты менее чем за 3 секунды. Никого ожидания, только мгновенная пищевая аналитика.",
      gradient: "from-primary-glow to-success"
    },
    {
      icon: Brain,
      title: "Персональные рекомендации",
      description: "ИИ изучает ваши предпочтения и предоставляет индивидуальные рекомендации со временем.",
      gradient: "from-info to-warning"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary-soft text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            Мощные возможности
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Все что нужно для
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">Умного питания</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            AIVIA объединяет передовые ИИ-технологии с наукой о питании, чтобы дать вам беспрецедентное понимание ваших пищевых выборов.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 bg-gradient-soft">
              <CardContent className="p-8">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-6`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Feature Image */}
        <div className="relative rounded-3xl overflow-hidden shadow-strong">
          <img 
            src={foodVariety} 
            alt="Variety of healthy foods" 
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-glow/80 flex items-center justify-center">
            <div className="text-center text-white">
              <h3 className="text-3xl font-bold mb-4">Распознает любую еду</h3>
              <p className="text-xl opacity-90 max-w-2xl">
                От уличной еды до изысканных блюд, ИИ AIVIA распознает тысячи блюд и ингредиентов с невероятной точностью.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;