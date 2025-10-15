export interface UserData {
  gender: 'male' | 'female' | null;
  birthDate: string;
  activityLevel: 'sedentary' | 'light' | 'moderate' | 'active' | 'very-active' | null;
  goal: 'lose' | 'maintain' | 'gain' | null;
  height: number;
  weight: number;
  heightUnit: 'cm' | 'ft';
  weightUnit: 'kg' | 'lbs';
}

export interface CalorieResult {
  calories: number;
  carbs: number;
  fats: number;
  protein: number;
}

export type Step = 'welcome' | 'gender-age' | 'height-weight' | 'activity' | 'goal' | 'results';