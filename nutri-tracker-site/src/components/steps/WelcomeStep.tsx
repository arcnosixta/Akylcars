import { NutriTrackerLogo } from "@/components/NutriTrackerLogo";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

interface WelcomeStepProps {
  onNext: () => void;
}

export function WelcomeStep({ onNext }: WelcomeStepProps) {
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [analyticsAccepted, setAnalyticsAccepted] = useState(false);

  const canProceed = privacyAccepted;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 text-center">
      <div className="max-w-md mx-auto space-y-8">
        <div className="space-y-4">
          <h1 className="text-2xl font-bold text-foreground">
            Добро пожаловать в
          </h1>
          
          <div className="flex flex-col items-center space-y-3">
            <NutriTrackerLogo className="h-20 w-20" />
            <div>
              <h2 className="text-3xl font-bold text-foreground">OpenNutriTracker</h2>
              <p className="text-muted-foreground">Версия 1.0.0</p>
            </div>
          </div>
        </div>

        <p className="text-foreground leading-relaxed">
          OpenNutriTracker — это бесплатный и открытый счётчик 
          калорий и нутриентов, который сохраняет вашу 
          конфиденциальность.
        </p>

        <p className="text-sm text-muted-foreground leading-relaxed">
          Для начала работы приложению потребуется некоторая 
          информация о вас, чтобы точнее рассчитать вашу дневную 
          норму калорий. Вся информация о вас хранится в 
          безопасности на вашем устройстве.
        </p>

        <div className="space-y-4 text-left">
          <div className="flex items-start space-x-3">
            <Checkbox
              id="privacy"
              checked={privacyAccepted}
              onCheckedChange={(checked) => setPrivacyAccepted(checked as boolean)}
              className="mt-1"
            />
            <label htmlFor="privacy" className="text-sm text-foreground leading-relaxed">
              Я прочитал(а) и принимаю политику конфиденциальности.{' '}
              <a href="#" className="text-accent underline">
                Политика конфиденциальности
              </a>
            </label>
          </div>

          <div className="flex items-start space-x-3">
            <Checkbox
              id="analytics"
              checked={analyticsAccepted}
              onCheckedChange={(checked) => setAnalyticsAccepted(checked as boolean)}
              className="mt-1"
            />
            <label htmlFor="analytics" className="text-sm text-foreground leading-relaxed">
              Поддержите разработку, предоставив анонимные данные 
              об использовании
            </label>
          </div>
        </div>

        <Button
          onClick={onNext}
          disabled={!canProceed}
          className="w-full py-6 text-lg font-medium bg-primary hover:bg-primary/90"
        >
          Старт
        </Button>
      </div>
    </div>
  );
}