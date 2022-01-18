import { CommandInteraction } from 'discord.js'
import { Discord, Slash } from 'discordx'

@Discord()
export class Ping {

  @Slash("ping")
  private ping(command: CommandInteraction) {
    command.reply(`Pong! ${command.user}`)
  }
}
