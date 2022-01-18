import { dirname, importx, resolve } from '@discordx/importer'
import { HttpService } from '@nestjs/axios'
import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

import color from 'color'
import dayjs from 'dayjs'
import path from 'path'
import fs from 'fs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'

import { Client } from 'discordx'
import { Intents, Interaction, Message } from 'discord.js'
import { lastValueFrom } from 'rxjs'

import './commands/ping'
import './commands/status'
import './commands/watch'

dayjs.extend(utc)
dayjs.extend(timezone)

const Color = {
  INFO: color('#259fff').rgbNumber(),
  ERROR: color('#ff4d4d').rgbNumber(),
  WARNING: color('#ff9b4d').rgbNumber(),
  SUCCESS: color('#5fff58').rgbNumber(),
}

@Injectable()
export class DiscordService {
  constructor(
    private readonly configService: ConfigService,
    private readonly httpService: HttpService,
  ) {
    const discordBotToken = configService.get<string>('DISCORD_BOT_TOKEN')

    const client = new Client({
      botId: "test",
      intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
      botGuilds: configService.get<string>('APP_ENV') == 'local' ? [configService.get<string>('DISCORD_DEV_SERVER_ID')] : undefined,
    })

    client.once("ready", async () => {
      await client.initApplicationCommands({
        guild: { log: true },
        global: { log: true },
      })

      await client.initApplicationPermissions()

      console.log("Bot started");
    })

    client.on("interactionCreate", (interaction: Interaction) => {
      client.executeInteraction(interaction);
    })

    client.login(discordBotToken)
  }
