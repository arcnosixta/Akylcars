import { OptionButton } from "@/components/OptionButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { UserData } from "@/types/calculator";

interface GenderAgeStepProps {
  userData: UserData;
  onUpdate: (data: Partial<UserData>) => void;
  onNext: () => void;
}

export function GenderAgeStep({ userData, onUpdate, onNext }: GenderAgeStepProps) {
  const canProceed = userData.gender && userData.birthDate;

  return (
    <div className="flex flex-col min-h-screen p-6">
      <div className="flex-1 max-w-md mx-auto space-y-8 pt-16">
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-2">Пол</h2>
            <p className="text-muted-foreground mb-6">Ваш пол?</p>
            
            <div className="space-y-3">
              <OptionButton
                selected={userData.gender === 'male'}
                onClick={() => onUpdate({ gender: 'male' })}
              >
                ♂ Мужской
              </OptionButton>
              <OptionButton
                selected={userData.gender === 'female'}
                onClick={() => onUpdate({ gender: 'female' })}
              >
                ♀ Женский
              </OptionButton>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-2">возраст</h2>
            <p className="text-muted-foreground mb-6">Когда у вас день рождения?</p>
            
            <div className="relative">
              <Input
                type="date"
                value={userData.birthDate}
                onChange={(e) => onUpdate({ birthDate: e.target.value })}
                className="w-full py-6 text-lg bg-option-bg border-border focus:border-accent"
                placeholder="2007-03-12"
              />
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