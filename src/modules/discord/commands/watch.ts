import { CommandInteraction } from 'discord.js'
import { Discord, Slash, SlashOption, SlashChoice } from 'discordx'

interface WatchlistItem {
  chain: string,
  network: string,
  address: string,
  discord_server_id: string,
  discord_channel_id: string,
}

@Discord()
export class Watch {
  watchlist: WatchlistItem[] = [

  ]

  @Slash("watch", { description: "Watches an address on a network" })
  private watch(
    // Chain
    @SlashChoice("Terra", "terra")
    @SlashOption("chain", { description: "terra" })
    chain: string,

    // Network
    @SlashChoice("Mainnet", "mainnet")
    @SlashChoice("Testnet", "testnet")
    @SlashOption("network", { description: "mainnet" })
    network: string,

    // Address
    @SlashOption("address", { description: "terra1..." })
    address: string,

    // Interaction
    interaction: CommandInteraction
  ) {
    interaction.reply(`Watching ${chain} ${network} for ${address}`)
  }

  @Slash("list", { description: "Output the list of watched addresses" })
  private text(interaction: CommandInteraction) {
    const text = this.watchlist.reduce((accum: string, item: WatchlistItem): string => {
      return accum + `  - ${item.chain} ${item.network} ${item.address}\n`
    }, "This channel is watching:\n")

    interaction.reply(text)
  }

  @Slash("unwatch", { description: "Stop watching an address" })
  private unwatch(
    @SlashOption("chain", { description: "terra" }) chain: string,
    @SlashOption("network", { description: "mainnet" }) network: string,
    @SlashOption("address", { description: "terra1..." }) address: string,
    interaction: CommandInteraction
  ) {
    interaction.reply(`Unwatching ${chain} ${network} for ${address}`)
  }
}
