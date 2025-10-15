export function NutriTrackerLogo({ className = "h-16 w-16" }: { className?: string }) {
  return (
    <div className={`${className} relative flex items-center justify-center`}>
      <div className="relative">
        {/* Outer ring */}
        <div className="h-16 w-16 rounded-full border-4 border-accent/30"></div>
        
        {/* Inner highlighted arc */}
        <div className="absolute inset-0 h-16 w-16 rounded-full border-4 border-transparent border-t-accent border-r-accent rotate-45"></div>
        
        {/* Center icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-8 w-1 bg-accent rounded-full"></div>
        </div>
      </div>
    </div>
  );
}