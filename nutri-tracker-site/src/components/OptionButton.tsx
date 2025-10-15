import { cn } from "@/lib/utils";
import { CheckIcon, InfoIcon } from "lucide-react";

interface OptionButtonProps {
  children: React.ReactNode;
  selected?: boolean;
  onClick: () => void;
  showInfo?: boolean;
  onInfoClick?: () => void;
  className?: string;
}

export function OptionButton({
  children,
  selected = false,
  onClick,
  showInfo = false,
  onInfoClick,
  className
}: OptionButtonProps) {
  return (
    <div className="relative">
      <button
        onClick={onClick}
        className={cn(
          "w-full px-6 py-4 rounded-lg border-2 text-left transition-all duration-200 font-medium",
          selected
            ? "bg-option-bg-selected text-option-text-selected border-option-bg-selected"
            : "bg-option-bg text-option-text border-border hover:border-accent/50",
          className
        )}
      >
        <div className="flex items-center justify-between">
          <span>{children}</span>
          {selected && <CheckIcon className="h-5 w-5" />}
        </div>
      </button>
      {showInfo && (
        <button
          onClick={onInfoClick}
          className="absolute -right-2 top-1/2 -translate-y-1/2 p-2 text-info-icon hover:text-accent transition-colors"
        >
          <InfoIcon className="h-5 w-5" />
        </button>
      )}
    </div>
  );
}