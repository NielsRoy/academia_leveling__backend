import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('Bootstrap');

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      //forbidNonWhitelisted: true,
    })
  )

  const PORT = process.env.PORT ?? 3000;
  await app.listen( PORT );
  
  logger.log(`App running on port ${PORT}`);

  logger.log(`Check the app on http://localhost:${PORT}/graphql`);
}
bootstrap();
