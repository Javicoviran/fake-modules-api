import { Controller, Get, Post, UnauthorizedException } from '@nestjs/common';
import { LoginUser } from './models/login-user.model';
import { UserDto } from './models/user.dto';
import { ModuleDto } from './models/module.dto';
import { FAKEMODULES } from './utils/fake-data';

@Controller('coreapi')
export class CoreapiController {
  @Get('config')
  getConfig() {
    return 'es';
  }

  @Post('wlogin')
  login(loginUser: LoginUser) {
    try {
      if (!loginUser) throw UnauthorizedException;
      if (loginUser.email !== 'qwerty@mail.com') throw UnauthorizedException;
      if (loginUser.password !== '123456') throw UnauthorizedException;
    } catch (error) {
      throw error;
    }
  }

  @Post('wlogout')
  logout() {
    try {
      return 'OK';
    } catch (error) {
      throw error;
    }
  }

  @Get('profile')
  getProfile(): UserDto {
    try {
      return {
        fullname: 'Full Name',
        roles: ['admin'],
      };
    } catch (error) {
      throw error;
    }
  }
  @Get('modules')
  getModules(): ModuleDto[] {
    try {
      return FAKEMODULES;
    } catch (error) {
      throw error;
    }
  }
}
