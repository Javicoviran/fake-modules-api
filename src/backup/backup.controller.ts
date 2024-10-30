import { Body, Controller, Get, Post } from '@nestjs/common';
import { BackupService } from './backup.service';
import {
  DailyFormDto,
  WeeklyFormDto,
  OnceFormDto,
  MonthlyFormDto,
} from './models/schedules.dto';

@Controller('backup')
export class BackupController {
  constructor(private backupService: BackupService) {}

  @Get()
  getSchedules(): (
    | DailyFormDto
    | WeeklyFormDto
    | OnceFormDto
    | MonthlyFormDto
  )[] {
    try {
      return this.backupService.schedules;
    } catch (error) {
      throw error;
    }
  }

  @Post()
  postSchedule(
    @Body()
    schedule: DailyFormDto | WeeklyFormDto | OnceFormDto | MonthlyFormDto,
  ): void {
    try {
      console.log(schedule);
    } catch (error) {
      throw error;
    }
  }
}
