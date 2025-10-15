import { OptionButton } from "@/components/OptionButton";
import { Button } from "@/components/ui/button";
import { UserData } from "@/types/calculator";

interface ActivityStepProps {
  userData: UserData;
  onUpdate: (data: Partial<UserData>) => void;
  onNext: () => void;
}

export function ActivityStep({ userData, onUpdate, onNext }: ActivityStepProps) {
  const canProceed = userData.activityLevel;

  return (
    <div className="flex flex-col min-h-screen p-6">
      <div className="flex-1 max-w-md mx-auto space-y-8 pt-16">
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-2">Активность</h2>
            <p className="text-muted-foreground mb-6">Насколько вы активны? (без тренировок)</p>
            
            <div className="space-y-3">
              <OptionButton
                selected={userData.activityLevel === 'sedentary'}
                onClick={() => onUpdate({ activityLevel: 'sedentary' })}
                showInfo
              >
                Малоподвижный
              </OptionButton>
              <OptionButton
                selected={userData.activityLevel === 'light'}
                onClick={() => onUpdate({ activityLevel: 'light' })}
                showInfo
              >
                Низкая активность
              </OptionButton>
              <OptionButton
                selected={userData.activityLevel === 'moderate'}
                onClick={() => onUpdate({ activityLevel: 'moderate' })}
                showInfo
              >
                Активный
              </OptionButton>
              <OptionButton
                selected={userData.activityLevel === 'very-active'}
                onClick={() => onUpdate({ activityLevel: 'very-active' })}
                showInfo
              >
                Очень активный
              </OptionButton>
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