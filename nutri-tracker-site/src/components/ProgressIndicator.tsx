import { cn } from "@/lib/utils";

interface ProgressIndicatorProps {
  currentStep: number;
  totalSteps: number;
  className?: string;
}

export function ProgressIndicator({ 
  currentStep, 
  totalSteps, 
  className 
}: ProgressIndicatorProps) {
  return (
    <div className={cn("flex items-center justify-center gap-2", className)}>
      {Array.from({ length: totalSteps }, (_, index) => (
        <div
          key={index}
          className={cn(
            "h-2 w-2 rounded-full transition-colors duration-200",
            index < currentStep 
              ? "bg-progress-dot-active" 
              : "bg-progress-dot"
          )}
        />
      ))}
    </div>
  );
}