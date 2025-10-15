import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Smartphone, Apple, PlayCircle, Star, Users, Zap } from "lucide-react";

const Download = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary-soft text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Smartphone className="w-4 h-4" />
            Начните сегодня
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Скачайте <span className="bg-gradient-primary bg-clip-text text-transparent">AIVIA</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Присоединяйтесь к миллионам пользователей, которые уже делают более умный выбор еды с помощью ИИ-аналитики питания AIVIA.
          </p>
        </div>

        {/* Download Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          <Card className="border-0 shadow-medium hover:shadow-strong transition-all duration-300 hover:-translate-y-1 bg-gradient-soft">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-glow rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Apple className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-3">iOS приложение</h3>
              <p className="text-muted-foreground mb-6">
                Доступно в App Store для iPhone и iPad
              </p>
              <Button variant="hero" size="lg" className="w-full">
                Скачать для iOS
              </Button>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-medium hover:shadow-strong transition-all duration-300 hover:-translate-y-1 bg-gradient-soft">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-success to-primary-glow rounded-2xl flex items-center justify-center mx-auto mb-6">
                <PlayCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-3">Android приложение</h3>
              <p className="text-muted-foreground mb-6">
                Скачайте в Google Play для Android устройств
              </p>
              <Button variant="success" size="lg" className="w-full">
                Скачать для Android
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center mb-3">
              <Star className="w-6 h-6 text-warning fill-warning" />
              <Star className="w-6 h-6 text-warning fill-warning" />
              <Star className="w-6 h-6 text-warning fill-warning" />
              <Star className="w-6 h-6 text-warning fill-warning" />
              <Star className="w-6 h-6 text-warning fill-warning" />
            </div>
            <div className="text-2xl font-bold text-primary">4.9</div>
            <div className="text-sm text-muted-foreground">Рейтинг App Store</div>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center mb-3">
              <Users className="w-8 h-8 text-info" />
            </div>
            <div className="text-2xl font-bold text-primary">500K+</div>
            <div className="text-sm text-muted-foreground">Активных пользователей</div>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center mb-3">
              <Zap className="w-8 h-8 text-success" />
            </div>
            <div className="text-2xl font-bold text-primary">1M+</div>
            <div className="text-sm text-muted-foreground">Блюд отсканировано</div>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center mb-3">
              <Smartphone className="w-8 h-8 text-primary" />
            </div>
            <div className="text-2xl font-bold text-primary">98%</div>
            <div className="text-sm text-muted-foreground">Точность</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;