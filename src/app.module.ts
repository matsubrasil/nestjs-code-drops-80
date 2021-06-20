import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://user_api:user_api@mtcluster0.xhxoi.mongodb.net/nestApiTotalZero',
    ),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
