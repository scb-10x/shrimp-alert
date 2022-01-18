import { CommandInteraction } from 'discord.js'
import { Discord, Slash } from 'discordx'
import dayjs from 'dayjs'

import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'

dayjs.extend(utc)
dayjs.extend(timezone)

@Discord()
export class Ping {

  @Slash("status")
  private status(command: CommandInteraction) {
    command.reply(`Last checked: ${dayjs().format()}`)
  }
}
