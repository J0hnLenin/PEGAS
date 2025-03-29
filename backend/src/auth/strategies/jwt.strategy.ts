import { Injectable, UnauthorizedException } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { jwtConstants } from './constants';
import { User } from '../../users/entities/user.entity';
import {UsersService} from "../../users/users.service";
import { Repository } from 'typeorm';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
      private readonly usersService: UsersService,
      @InjectRepository(User)
      private userRepository: Repository<User>
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret!!,
    });
  }

  async validate(payload: any): Promise<any> {
      const userId: string = payload.sub;

     const user = await this.userRepository.findOne({ where : { id: userId } });

      if (!user) {
        throw new UnauthorizedException();
      }


      const { password, ...result } = user;

      return result;
    }
}