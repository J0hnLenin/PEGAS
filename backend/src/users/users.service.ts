import {Injectable, NotFoundException, OnModuleInit} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import {PATH_METADATA} from "@nestjs/common/constants";
import {DiscoveryService, MetadataScanner} from "@nestjs/core";
import {Permission} from "./entities/permission.entity";
import {CreateUserDto} from "./dto/createUser.dto";

@Injectable()
export class UsersService implements OnModuleInit{
  constructor(
    private readonly discoveryService: DiscoveryService,
    private readonly metadataScanner: MetadataScanner,
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
    @InjectRepository(Permission)
    private readonly permissionRepository: Repository<Permission>,

  ) {}


  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const user = this.usersRepository.create(createUserDto);
    return this.usersRepository.save(user);

  }


  onModuleInit() {
      this.discoverEndpoints().then(() => {});
    }

    async discoverEndpoints() {
      const controllers = this.discoveryService.getControllers();
      for (const controller of controllers) {
        const prototype = Object.getPrototypeOf(controller.instance);
        const methodNames = this.metadataScanner.getAllMethodNames(prototype);

        for (const methodName of methodNames) {
          const routePath = Reflect.getMetadata(PATH_METADATA, controller.instance[methodName]);
          const requestMethod = Reflect.getMetadata('permission', controller.instance[methodName]);

          if (routePath && requestMethod) {
            const controllerPath = Reflect.getMetadata(PATH_METADATA, controller.instance.constructor);
            const fullPath = `${controllerPath}${routePath}`;
            const permissionName = `${fullPath}:${requestMethod}`;

            let permission = await this.permissionRepository.findOne({
              where: {name: permissionName},
            });
            if (!permission) {
              permission = this.permissionRepository.create({
                name: permissionName
              });
              await this.permissionRepository.save(permission);

            }
          }
        }
      }
    }

}

