import { Button } from "@/components/ui/button";
import { CalorieResult } from "@/types/calculator";

interface ResultsStepProps {
  results: CalorieResult;
  onOpenApp: () => void;
}

export function ResultsStep({ results, onOpenApp }: ResultsStepProps) {
  return (
    <div className="flex flex-col min-h-screen p-6">
      <div className="flex-1 max-w-md mx-auto space-y-8 pt-16">
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">Обзор</h2>
            
            <div className="text-center space-y-6">
              <div>
                <p className="text-muted-foreground mb-2">Ваша цель по калориям:</p>
                <div className="text-6xl font-bold text-accent mb-2">
                  {results.calories}
                </div>
                <p className="text-muted-foreground">ккал в день</p>
              </div>

              <div className="space-y-4">
                <p className="text-muted-foreground text-left">Ваши цели по макронутриентам:</p>
                
                <div className="space-y-3">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-foreground">{results.carbs} g</div>
                    <p className="text-muted-foreground">углеводы</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-3xl font-bold text-foreground">{results.fats} g</div>
                    <p className="text-muted-foreground">жиры</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-3xl font-bold text-foreground">{results.protein} g</div>
                    <p className="text-muted-foreground">белки</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Button
        onClick={onOpenApp}
        className="w-full py-6 text-lg font-medium bg-primary hover:bg-primary/90"
      >
        Открыть в приложении
      </Button>
    </div>
  );
}