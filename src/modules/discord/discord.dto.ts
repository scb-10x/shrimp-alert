export class DiscordPayload {
  content?: string
  embeds?: DiscordEmbed[]
  username?: string
  avatar_url?: string
}

export class DiscordEmbed {
  title?: string
  description?: string
  color?: number
  fields?: DiscordField[]
  footer?: { text: string }
}

export class DiscordField {
  name?: string
  value?: string
  inline?: boolean
}
