export const jwtConstants = {
  secret: process.env.JWT_SECRET??'secret', //toDO настроить env
  expiresIn: '60m',
};