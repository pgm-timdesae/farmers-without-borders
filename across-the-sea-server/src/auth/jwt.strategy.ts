import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";

// Validation happens in the constructor
// async validate is just returning decoded jwt back
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'mysecretphrase'
    })
  }

  async validate(payload: any) {
    // const user = await this.usersService.getById(payload.sub);
    // return {...user}
    return {
      id: payload.sub,
      email: payload.email,
    }
  }
}