import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { UserData } from "@/types/calculator";

interface HeightWeightStepProps {
  userData: UserData;
  onUpdate: (data: Partial<UserData>) => void;
  onNext: () => void;
}

export function HeightWeightStep({ userData, onUpdate, onNext }: HeightWeightStepProps) {
  const canProceed = userData.height > 0 && userData.weight > 0;

  return (
    <div className="flex flex-col min-h-screen p-6">
      <div className="flex-1 max-w-md mx-auto space-y-8 pt-16">
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-2">рост</h2>
            <p className="text-muted-foreground mb-6">Какой у вас текущий рост?</p>
            
            <div className="space-y-4">
              <Input
                type="number"
                value={userData.height || ''}
                onChange={(e) => onUpdate({ height: parseFloat(e.target.value) || 0 })}
                className="w-full py-6 text-lg bg-option-bg border-border focus:border-accent"
                placeholder="180"
              />
              
              <div className="flex gap-2">
                <Button
                  variant={userData.heightUnit === 'cm' ? 'default' : 'outline'}
                  onClick={() => onUpdate({ heightUnit: 'cm' })}
                  className="flex-1 py-3"
                >
                  см
                </Button>
                <Button
                  variant={userData.heightUnit === 'ft' ? 'default' : 'outline'}
                  onClick={() => onUpdate({ heightUnit: 'ft' })}
                  className="flex-1 py-3"
                >
                  ft
                </Button>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-2">вес</h2>
            <p className="text-muted-foreground mb-6">Какой у вас текущий вес?</p>
            
            <div className="space-y-4">
              <Input
                type="number"
                value={userData.weight || ''}
                onChange={(e) => onUpdate({ weight: parseFloat(e.target.value) || 0 })}
                className="w-full py-6 text-lg bg-option-bg border-border focus:border-accent"
                placeholder="60"
              />
              
              <div className="flex gap-2">
                <Button
                  variant={userData.weightUnit === 'kg' ? 'default' : 'outline'}
                  onClick={() => onUpdate({ weightUnit: 'kg' })}
                  className="flex-1 py-3"
                >
                  кг
                </Button>
                <Button
                  variant={userData.weightUnit === 'lbs' ? 'default' : 'outline'}
                  onClick={() => onUpdate({ weightUnit: 'lbs' })}
                  className="flex-1 py-3"
                >
                  lbs
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Button
        onClick={onNext}
        disabled={!canProceed}
        className="w-full py-6 text-lg font-medium bg-primary hover:bg-primary/90"
      >
        Далее
      </Button>
    </div>
  );
}