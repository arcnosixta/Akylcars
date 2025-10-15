import { useState } from "react";
import { ProgressIndicator } from "@/components/ProgressIndicator";
import { WelcomeStep } from "@/components/steps/WelcomeStep";
import { GenderAgeStep } from "@/components/steps/GenderAgeStep";
import { HeightWeightStep } from "@/components/steps/HeightWeightStep";
import { ActivityStep } from "@/components/steps/ActivityStep";
import { GoalStep } from "@/components/steps/GoalStep";
import { ResultsStep } from "@/components/steps/ResultsStep";
import { UserData, Step } from "@/types/calculator";
import { calculateCalories } from "@/utils/calorieCalculator";
import { ChevronLeftIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [currentStep, setCurrentStep] = useState<Step>('welcome');
  const [userData, setUserData] = useState<UserData>({
    gender: null,
    birthDate: '',
    activityLevel: null,
    goal: null,
    height: 0,
    weight: 0,
    heightUnit: 'cm',
    weightUnit: 'kg'
  });
  
  const { toast } = useToast();

  const steps: Step[] = ['welcome', 'gender-age', 'height-weight', 'activity', 'goal', 'results'];
  const currentStepIndex = steps.indexOf(currentStep);

  const handleNext = () => {
    const nextIndex = currentStepIndex + 1;
    if (nextIndex < steps.length) {
      setCurrentStep(steps[nextIndex]);
    }
  };

  const handleBack = () => {
    const prevIndex = currentStepIndex - 1;
    if (prevIndex >= 0) {
      setCurrentStep(steps[prevIndex]);
    }
  };

  const updateUserData = (data: Partial<UserData>) => {
    setUserData(prev => ({ ...prev, ...data }));
  };

  const handleOpenApp = () => {
    const results = calculateCalories(userData);
    
    // Create deep link to mobile app with calculated data
    const appData = {
      calories: results.calories,
      carbs: results.carbs,
      fats: results.fats,
      protein: results.protein,
      userData: userData
    };
    
    // For demonstration - in reality this would be a deep link to your mobile app
    const deepLink = `opennutritracker://calculator?data=${encodeURIComponent(JSON.stringify(appData))}`;
    
    // Try to open the mobile app
    window.location.href = deepLink;
    
    // Fallback - show toast message
    setTimeout(() => {
      toast({
        title: "Переход в приложение",
        description: "Если приложение не открылось автоматически, пожалуйста, откройте OpenNutriTracker вручную.",
      });
    }, 1000);
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 'welcome':
        return <WelcomeStep onNext={handleNext} />;
      case 'gender-age':
        return (
          <GenderAgeStep
            userData={userData}
            onUpdate={updateUserData}
            onNext={handleNext}
          />
        );
      case 'height-weight':
        return (
          <HeightWeightStep
            userData={userData}
            onUpdate={updateUserData}
            onNext={handleNext}
          />
        );
      case 'activity':
        return (
          <ActivityStep
            userData={userData}
            onUpdate={updateUserData}
            onNext={handleNext}
          />
        );
      case 'goal':
        return (
          <GoalStep
            userData={userData}
            onUpdate={updateUserData}
            onNext={handleNext}
          />
        );
      case 'results':
        const results = calculateCalories(userData);
        return <ResultsStep results={results} onOpenApp={handleOpenApp} />;
      default:
        return null;
    }
  };

  const showNavigation = currentStep !== 'welcome' && currentStep !== 'results';

  return (
    <div className="min-h-screen bg-background text-foreground">
      {showNavigation && (
        <div className="flex items-center justify-between p-6">
          <Button
            variant="ghost"
            onClick={handleBack}
            className="p-2"
          >
            <ChevronLeftIcon className="h-6 w-6" />
          </Button>
          
          <ProgressIndicator
            currentStep={currentStepIndex}
            totalSteps={steps.length}
          />
          
          <div className="w-10" /> {/* Spacer */}
        </div>
      )}
      
      {renderCurrentStep()}
    </div>
  );
};

export default Index;
