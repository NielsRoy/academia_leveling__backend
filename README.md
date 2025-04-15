<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>


# Cursos gamificados backend

## Features

- typeorm postgres
- database in docker container
- jwt authentication
- roles authorization

## Installation

1. Copy the ```.env.template``` file and rename it to ```.env```

2. Install dependencies:
```
npm install
```

3. Create the database container:
```
docker-compose up -d
```

4. Run the app in development mode:
```
npm run start:dev
```

5. Go to ```http://localhost:3000/graphql```
