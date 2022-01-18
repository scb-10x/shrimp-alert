import { Controller, Get } from '@nestjs/common'

@Controller()
export class AppController {
  constructor() {}

  @Get()
  heartbeat(): boolean {
    return true
  }
}
