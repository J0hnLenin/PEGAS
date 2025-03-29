import { SetMetadata } from '@nestjs/common';
//toDo тут как раз таки расширить его
export const Permission = (permission: string) => SetMetadata('permission', permission);