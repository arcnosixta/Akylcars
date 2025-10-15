import { UserData, CalorieResult } from '@/types/calculator';

const ACTIVITY_MULTIPLIERS = {
  'sedentary': 1.2,
  'light': 1.375,
  'moderate': 1.55,
  'active': 1.725,
  'very-active': 1.9
};

const GOAL_ADJUSTMENTS = {
  'lose': -500,
  'maintain': 0,
  'gain': 300
};

export function calculateCalories(userData: UserData): CalorieResult {
  const { gender, birthDate, height, weight, activityLevel, goal, heightUnit, weightUnit } = userData;
  
  // Convert to metric if needed
  const heightCm = heightUnit === 'ft' ? height * 30.48 : height;
  const weightKg = weightUnit === 'lbs' ? weight * 0.453592 : weight;
  
  // Calculate age
  const today = new Date();
  const birth = new Date(birthDate);
  const age = today.getFullYear() - birth.getFullYear();
  
  // Mifflin-St Jeor Equation
  let bmr: number;
  if (gender === 'male') {
    bmr = 10 * weightKg + 6.25 * heightCm - 5 * age + 5;
  } else {
    bmr = 10 * weightKg + 6.25 * heightCm - 5 * age - 161;
  }
  
  // Apply activity multiplier
  const tdee = bmr * ACTIVITY_MULTIPLIERS[activityLevel!];
  
  // Apply goal adjustment
  const calories = Math.round(tdee + GOAL_ADJUSTMENTS[goal!]);
  
  // Calculate macros (40% carbs, 30% protein, 30% fat)
  const carbsCalories = calories * 0.4;
  const proteinCalories = calories * 0.3;
  const fatsCalories = calories * 0.3;
  
  return {
    calories,
    carbs: Math.round(carbsCalories / 4), // 4 calories per gram
    protein: Math.round(proteinCalories / 4), // 4 calories per gram
    fats: Math.round(fatsCalories / 9) // 9 calories per gram
  };
}