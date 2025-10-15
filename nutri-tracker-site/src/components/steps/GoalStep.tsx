import { OptionButton } from "@/components/OptionButton";
import { Button } from "@/components/ui/button";
import { UserData } from "@/types/calculator";

interface GoalStepProps {
  userData: UserData;
  onUpdate: (data: Partial<UserData>) => void;
  onNext: () => void;
}

export function GoalStep({ userData, onUpdate, onNext }: GoalStepProps) {
  const canProceed = userData.goal;

  return (
    <div className="flex flex-col min-h-screen p-6">
      <div className="flex-1 max-w-md mx-auto space-y-8 pt-16">
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-2">Цель</h2>
            <p className="text-muted-foreground mb-6">Какова ваша текущая цель по весу?</p>
            
            <div className="space-y-3">
              <OptionButton
                selected={userData.goal === 'lose'}
                onClick={() => onUpdate({ goal: 'lose' })}
              >
                Похудеть
              </OptionButton>
              <OptionButton
                selected={userData.goal === 'maintain'}
                onClick={() => onUpdate({ goal: 'maintain' })}
              >
                Поддерживать вес
              </OptionButton>
              <OptionButton
                selected={userData.goal === 'gain'}
                onClick={() => onUpdate({ goal: 'gain' })}
              >
                Набрать вес
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