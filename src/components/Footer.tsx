import { Button } from "@/components/ui/button";
import { Brain, Mail, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-hero text-white py-16">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                <Brain className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold">AIVIA</h3>
            </div>
            <p className="text-white/80 mb-6 max-w-md">
              Ваш умный помощник по питанию на основе продвинутого ИИ. Делайте лучший выбор в питании с мгновенным анализом еды и персональными рекомендациями.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Features */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Возможности</h4>
            <ul className="space-y-3 text-white/80">
              <li><a href="#" className="hover:text-white transition-colors">Распознавание еды</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Подсчет калорий</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Анализ здоровья</a></li>
              <li><a href="#" className="hover:text-white transition-colors">ИИ-бот питания</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Компания</h4>
            <ul className="space-y-3 text-white/80">
              <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Условия использования</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            © 2024 AIVIA. Все права защищены.
          </p>
          <p className="text-white/60 text-sm">
            Создано с помощью ИИ-науки о питании
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;