import { Injectable } from '@nestjs/common';
import {
  DailyFormDto,
  WeeklyFormDto,
  OnceFormDto,
  MonthlyFormDto,
} from './models/schedules.dto';
import { DaysOfTheWeek } from '../utils/enums';

@Injectable()
export class BackupService {
  public schedules: (
    | DailyFormDto
    | WeeklyFormDto
    | OnceFormDto
    | MonthlyFormDto
  )[] = [
    {
      name: 'Daily Task',
      type: 'daily',
      enabled: true,
      reccursEvery: 1,
      dailyFrecuency: {
        frecuency: 2,
        time: 'hours',
        startingAt: '08:00',
        endingAt: '18:00',
      },
      summary: 'Task scheduled to run daily every 2 hours',
    },
    {
      name: 'Weekly Meeting',
      type: 'weekly',
      enabled: true,
      reccursEvery: 1,
      day: [DaysOfTheWeek.Monday, DaysOfTheWeek.Wednesday],
      dailyFrecuency: '09:00',
      summary: 'Meeting scheduled every Monday and Wednesday at 9 AM',
    },
    {
      name: 'One-time Event',
      type: 'once',
      enabled: false,
      date: new Date('2024-11-15T10:00:00'),
      summary: 'A one-time event on November 15, 2024',
    },
    {
      name: 'Monthly Report',
      type: 'monthly',
      enabled: true,
      occurs: {
        monthlyOccurrence: {
          day: 1,
          every: 1,
        },
      },
      dailyFrecuency: {
        frecuency: 1,
        time: 'hours',
        startingAt: '09:00',
        endingAt: '17:00',
      },
      summary: 'Monthly report generation on the 1st of every month',
    },
    {
      name: 'Quarterly Review',
      type: 'monthly',
      enabled: true,
      occurs: {
        monthlyRecurrence: {
          dayOcurrence: {
            position: 3,
            day: DaysOfTheWeek.Friday,
          },
          every: 3,
        },
      },
      dailyFrecuency: '14:00',
      summary: 'Review scheduled on the 3rd Friday every 3 months at 2 PM',
    },
  ];
}
