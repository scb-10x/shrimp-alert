import { Module, ValidationPipe } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { APP_PIPE } from '@nestjs/core'
import { ScheduleModule } from '@nestjs/schedule'
// import { TypeOrmModule } from '@nestjs/typeorm'
import { config } from './configs/config'
import { dbConfig } from './configs/database'
import { AppController } from './app.controller'
import { DiscordModule } from './modules/discord/discord.module'
// import { IndexerModule } from './modules/indexer/indexer.module'
// import { TerraModule } from './modules/terra/terra.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      ignoreEnvFile: false,
      load: [config, dbConfig],
      isGlobal: true,
    }),
    // TypeOrmModule.forRootAsync({
    //   imports: [ConfigModule],
    //   inject: [ConfigService],
    //   useFactory: async (configService: ConfigService) => ({
    //     type: 'postgres',
    //     host: configService.get<string>('database.host'),
    //     port: configService.get<number>('database.port'),
    //     username: configService.get('database.username'),
    //     password: configService.get('database.password'),
    //     database: configService.get('database.name'),
    //     entities: [__dirname + '/entities/*.entity{.ts,.js}'],
    //     timezone: 'utc',
    //     synchronize: configService.get<boolean>('database.synchronize'),
    //     bigNumberStrings: false,
    //     logging: false,
    //     extra: {
    //       charset: 'utf8mb4_unicode_ci',
    //     },
    //   }),
    // }),
    ScheduleModule.forRoot(),
    DiscordModule,
    // IndexerModule,
    // TerraModule,
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_PIPE,
      useFactory: () =>
        new ValidationPipe({
          transform: true,
          forbidUnknownValues: false,
          whitelist: false,
        }),
    },
  ],
})
export class AppModule {}
