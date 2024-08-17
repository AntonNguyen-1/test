import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { getSequelizeConfig } from './sequelize.config';

@Module({
  imports: [
    ConfigModule,
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) =>
        getSequelizeConfig(configService),
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}
