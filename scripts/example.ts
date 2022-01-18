import { NestFactory } from '@nestjs/core'
import { getConnectionToken } from '@nestjs/typeorm'
import { AppModule } from 'src/app.module'
import { Connection } from 'typeorm'

const run = async () => {
  const app = await NestFactory.createApplicationContext(AppModule)
  const database = app.get<Connection>(getConnectionToken())
  // const notExistRepository = database.getRepository<EntityClassName>(EntityClassName)
}

run()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
