import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { configurations } from './config/environment';

@Module({
  imports:[MongooseModule.forRootAsync({
    useFactory: async () => ({
      uri: `mongodb://${configurations.MONGO_USER}:${configurations.MONGO_PASSWORD}/${configurations.MONGO_DB_NAME}`
    })
  })],
  controllers: [],
  providers: [],
})
export class AppModule {}
