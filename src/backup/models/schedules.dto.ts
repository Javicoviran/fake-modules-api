import { DaysOfTheWeek } from '../../utils/enums';

// daily-form.dto.ts
export class DailyFormDto {
  name: string;
  type: 'daily';
  enabled: boolean;
  reccursEvery: number;
  dailyFrecuency: DailyFrecuency | string;
  summary: string;
}

// weekly-form.dto.ts
export class WeeklyFormDto {
  name: string;
  type: 'weekly';
  enabled: boolean;
  reccursEvery: number;
  day: DaysOfTheWeek[];
  dailyFrecuency: DailyFrecuency | string;
  summary: string;
}

// once-form.dto.ts
export class OnceFormDto {
  name: string;
  type: 'once';
  enabled: boolean;
  date: Date;
  summary: string;
}

// monthly-form.dto.ts
export class MonthlyFormDto {
  name: string;
  type: 'monthly';
  enabled: boolean;
  occurs: MonthlyOccurrence | MonthlyRecurrence;
  dailyFrecuency: DailyFrecuency | string;
  summary: string;
}

export interface DailyFrecuency {
  frecuency: number;
  time: 'hours' | 'minutes' | 'seconds';
  startingAt: string;
  endingAt: string;
}

export interface MonthlyOccurrence {
  monthlyOccurrence: {
    day: number;
    every: number;
  };
}

export interface MonthlyRecurrence {
  monthlyRecurrence: {
    dayOcurrence: {
      position: number;
      day: DaysOfTheWeek;
    };
    every: number;
  };
}
