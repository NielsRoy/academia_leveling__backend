import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { CommonModule } from './common/common.module';
import { TeachersModule } from './teachers/teachers.module';
import { StudentsModule } from './students/students.module';
import { CoursesModule } from './courses/courses.module';
import { SeedModule } from './seed/seed.module';

@Module({
  imports: [
    ConfigModule.forRoot(),

    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: false,
      introspection: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
    TypeOrmModule.forRoot({
      ssl: process.env.STATE === 'prod',  //? Esta linea y la de abajo son para despliegueAdd commentMore actions
      extra: {
        ssl: process.env.STATE === 'prod'
          ? { rejectUnauthorized: false }
          : null,
      },
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +(process.env.DB_PORT ?? 8000),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      synchronize: true,  //! Esto en produccion deberia ser false
      autoLoadEntities: true,
      //namingStrategy: new SnakeNamingStrategy(), //? para que las columnas se nombren con snake_case //? Instalando npm install typeorm-naming-strategies      
    }),
    AuthModule,
    UsersModule,
    CommonModule,
    TeachersModule,
    StudentsModule,
    CoursesModule,
    SeedModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
