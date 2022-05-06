import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from '../users/users.module';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';
// JWT GETS CREATED HERE, SEE jwt.strategy.ts for verifying JWT
@Module({
  imports: [UsersModule, PassportModule, JwtModule.register({
    secret: 'mysecretphrase',
    signOptions: { expiresIn: '60s' },
  })],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
