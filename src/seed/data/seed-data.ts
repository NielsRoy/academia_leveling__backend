import { Role } from 'src/auth/enum/role.enum';

export const SEED_COURSES = [
  {
    id: 1,
    title: '5to. Primaria',
  },
  {
    id: 2,
    title: '6to. Primaria',
  }
];

export const SEED_SUBJECTS = [
  {
    id: 1,
    code: 'MAT500',
    name: 'matemáticas 5to',
    course: { id: 1 },
  },
  {
    id: 2,
    code: 'CSNT500',
    name: 'ciencias naturales 5to',
    course: { id: 1 },
  },
  {
    id: 3,
    code: 'LEN500',
    name: 'lenguaje 5to',
    course: { id: 1 },
  },
  {
    id: 4,
    code: 'CSS500',
    name: 'ciencias sociales 5to',
    course: { id: 1 },
  },
  {
    id: 5,
    code: 'MAT600',
    name: 'matemáticas 6to',
    course: { id: 2 },
  },
  {
    id: 6,
    code: 'CSN600',
    name: 'ciencias naturales 6to',
    course: { id: 2 },
  },
  {
    id: 7,
    code: 'LEN600',
    name: 'lenguaje 6to',
    course: { id: 2 },
  },
  {
    id: 8,
    code: 'CSS600',
    name: 'ciencias sociales 6to',
    course: { id: 2 },
  },
];

export const SEED_TOPICS = [
  {
    id: 1,
    name: 'numeros enteros',
    xpReward: 10,
    subject: { id: 5 }
  },
  {
    id: 2,
    name: 'adicion y sustraccion de numeros enteros',
    xpReward: 10,
    subject: { id: 5 }
  },
  {
    id: 3,
    name: 'los angulos',
    xpReward: 10,
    subject: { id: 5 }
  },
  {
    id: 4,
    name: 'construccion de angulos',
    xpReward: 10,
    subject: { id: 5 }
  },
  {
    id: 5,
    name: 'los poligonos',
    xpReward: 10,
    subject: { id: 5 }
  },
  {
    id: 6,
    name: 'los triangulos',
    xpReward: 10,
    subject: { id: 5 }
  },
  {
    id: 7,
    name: 'el area',
    xpReward: 10,
    subject: { id: 5 }
  },
  {
    id: 8,
    name: 'el volumen',
    xpReward: 10,
    subject: { id: 5 }
  },
  {
    id: 9,
    name: 'multiplicacion y division de numeros enteros',
    xpReward: 10,
    subject: { id: 5 }
  },
  {
    id: 10,
    name: 'operaciones combinadas',
    xpReward: 10,
    subject: { id: 5 }
  },
  {
    id: 11,
    name: 'razones y proporciones',
    xpReward: 10,
    subject: { id: 5 }
  },
  {
    id: 12,
    name: 'regla de tres directa e inversa',
    xpReward: 10,
    subject: { id: 5 }
  },
  {
    id: 13,
    name: 'tanto por ciento - porcentaje',
    xpReward: 10,
    subject: { id: 5 }
  },
  {
    id: 14,
    name: 'Sistema internacional de medidas no convencionales del contexto y las NyPIOs',
    xpReward: 10,
    subject: { id: 5 }
  },
  {
    id: 15,
    name: 'Potenciacion',
    xpReward: 10,
    subject: { id: 5 }
  },
  {
    id: 16,
    name: 'Calculo de la raiz y sus propiedades',
    xpReward: 10,
    subject: { id: 5 }
  },
  {
    id: 17,
    name: 'Tablas de frecuencia con datos agrupados',
    xpReward: 10,
    subject: { id: 5 }
  },
]

export const SEED_USERS = [
  {
    "id": 1,
    "firstName": "ana",
    "lastName": "gomez",
    "email": "ana1@student.com",
    "password": "$2b$10$rcehSMlnCKzOhCVpatC7CORjNuPTOCyUJpXaDcEA/yxdJO1wn8kGy",
    "role": Role.STUDENT,
  },
  {
    "id": 2,
    "firstName": "mario",
    "lastName": "ramirez",
    "email": "mario2@student.com",
    "password": "$2b$10$rcehSMlnCKzOhCVpatC7CORjNuPTOCyUJpXaDcEA/yxdJO1wn8kGy",
    "role": Role.STUDENT,
  },
  {
    "id": 3,
    "firstName": "lucia",
    "lastName": "fernandez",
    "email": "lucia3@student.com",
    "password": "$2b$10$rcehSMlnCKzOhCVpatC7CORjNuPTOCyUJpXaDcEA/yxdJO1wn8kGy",
    "role": Role.STUDENT,
  },
  {
    "id": 4,
    "firstName": "carlos",
    "lastName": "lopez",
    "email": "carlos4@student.com",
    "password": "$2b$10$rcehSMlnCKzOhCVpatC7CORjNuPTOCyUJpXaDcEA/yxdJO1wn8kGy",
    "role": Role.STUDENT,
  },
  {
    "id": 5,
    "firstName": "sofia",
    "lastName": "martinez",
    "email": "sofia5@student.com",
    "password": "$2b$10$rcehSMlnCKzOhCVpatC7CORjNuPTOCyUJpXaDcEA/yxdJO1wn8kGy",
    "role": Role.STUDENT,
  },
  {
    "id": 6,
    "firstName": "juan",
    "lastName": "perez",
    "email": "juan6@student.com",
    "password": "$2b$10$rcehSMlnCKzOhCVpatC7CORjNuPTOCyUJpXaDcEA/yxdJO1wn8kGy",
    "role": Role.STUDENT,
  },
  {
    "id": 7,
    "firstName": "valeria",
    "lastName": "sanchez",
    "email": "valeria7@student.com",
    "password": "$2b$10$rcehSMlnCKzOhCVpatC7CORjNuPTOCyUJpXaDcEA/yxdJO1wn8kGy",
    "role": Role.STUDENT,
  },
  {
    "id": 8,
    "firstName": "luis",
    "lastName": "diaz",
    "email": "luis8@student.com",
    "password": "$2b$10$rcehSMlnCKzOhCVpatC7CORjNuPTOCyUJpXaDcEA/yxdJO1wn8kGy",
    "role": Role.STUDENT,
  },
  {
    "id": 9,
    "firstName": "camila",
    "lastName": "torres",
    "email": "camila9@student.com",
    "password": "$2b$10$rcehSMlnCKzOhCVpatC7CORjNuPTOCyUJpXaDcEA/yxdJO1wn8kGy",
    "role": Role.STUDENT,
  },
  {
    "id": 10,
    "firstName": "pedro",
    "lastName": "garcia",
    "email": "pedro10@student.com",
    "password": "$2b$10$rcehSMlnCKzOhCVpatC7CORjNuPTOCyUJpXaDcEA/yxdJO1wn8kGy",
    "role": Role.STUDENT,
  },
  {
    "id": 11,
    "firstName": "daniela",
    "lastName": "rodriguez",
    "email": "daniela11@student.com",
    "password": "$2b$10$rcehSMlnCKzOhCVpatC7CORjNuPTOCyUJpXaDcEA/yxdJO1wn8kGy",
    "role": Role.STUDENT,
  },
  {
    "id": 12,
    "firstName": "jorge",
    "lastName": "morales",
    "email": "jorge12@student.com",
    "password": "$2b$10$rcehSMlnCKzOhCVpatC7CORjNuPTOCyUJpXaDcEA/yxdJO1wn8kGy",
    "role": Role.STUDENT,
  },
  {
    "id": 13,
    "firstName": "paula",
    "lastName": "vargas",
    "email": "paula13@student.com",
    "password": "$2b$10$rcehSMlnCKzOhCVpatC7CORjNuPTOCyUJpXaDcEA/yxdJO1wn8kGy",
    "role": Role.STUDENT,
  },
  {
    "id": 14,
    "firstName": "andres",
    "lastName": "castillo",
    "email": "andres14@student.com",
    "password": "$2b$10$rcehSMlnCKzOhCVpatC7CORjNuPTOCyUJpXaDcEA/yxdJO1wn8kGy",
    "role": Role.STUDENT,
  },
  {
    "id": 15,
    "firstName": "fernanda",
    "lastName": "ortega",
    "email": "fernanda15@student.com",
    "password": "$2b$10$rcehSMlnCKzOhCVpatC7CORjNuPTOCyUJpXaDcEA/yxdJO1wn8kGy",
    "role": Role.STUDENT,
  },
  {
    "id": 16,
    "firstName": "diego",
    "lastName": "jimenez",
    "email": "diego16@student.com",
    "password": "$2b$10$rcehSMlnCKzOhCVpatC7CORjNuPTOCyUJpXaDcEA/yxdJO1wn8kGy",
    "role": Role.STUDENT,
  },
  {
    "id": 17,
    "firstName": "mariana",
    "lastName": "silva",
    "email": "mariana17@student.com",
    "password": "$2b$10$rcehSMlnCKzOhCVpatC7CORjNuPTOCyUJpXaDcEA/yxdJO1wn8kGy",
    "role": Role.STUDENT,
  },
  {
    "id": 18,
    "firstName": "miguel",
    "lastName": "rojas",
    "email": "miguel18@student.com",
    "password": "$2b$10$rcehSMlnCKzOhCVpatC7CORjNuPTOCyUJpXaDcEA/yxdJO1wn8kGy",
    "role": Role.STUDENT,
  },
  {
    "id": 19,
    "firstName": "antonella",
    "lastName": "cruz",
    "email": "antonella19@student.com",
    "password": "$2b$10$rcehSMlnCKzOhCVpatC7CORjNuPTOCyUJpXaDcEA/yxdJO1wn8kGy",
    "role": Role.STUDENT,
  },
  {
    "id": 20,
    "firstName": "david",
    "lastName": "herrera",
    "email": "david20@student.com",
    "password": "$2b$10$rcehSMlnCKzOhCVpatC7CORjNuPTOCyUJpXaDcEA/yxdJO1wn8kGy",
    "role": Role.STUDENT,
  },
  {
    "id": 21,
    "firstName": "isabela",
    "lastName": "aguilar",
    "email": "isabela21@student.com",
    "password": "$2b$10$rcehSMlnCKzOhCVpatC7CORjNuPTOCyUJpXaDcEA/yxdJO1wn8kGy",
    "role": Role.STUDENT,
  },
  {
    "id": 22,
    "firstName": "mateo",
    "lastName": "paredes",
    "email": "mateo22@student.com",
    "password": "$2b$10$rcehSMlnCKzOhCVpatC7CORjNuPTOCyUJpXaDcEA/yxdJO1wn8kGy",
    "role": Role.STUDENT,
  },
  {
    "id": 23,
    "firstName": "julieta",
    "lastName": "flores",
    "email": "julieta23@student.com",
    "password": "$2b$10$rcehSMlnCKzOhCVpatC7CORjNuPTOCyUJpXaDcEA/yxdJO1wn8kGy",
    "role": Role.STUDENT,
  },
  {
    "id": 24,
    "firstName": "santiago",
    "lastName": "navarro",
    "email": "santiago24@student.com",
    "password": "$2b$10$rcehSMlnCKzOhCVpatC7CORjNuPTOCyUJpXaDcEA/yxdJO1wn8kGy",
    "role": Role.STUDENT,
  },
  {
    "id": 25,
    "firstName": "renata",
    "lastName": "reyes",
    "email": "renata25@student.com",
    "password": "$2b$10$rcehSMlnCKzOhCVpatC7CORjNuPTOCyUJpXaDcEA/yxdJO1wn8kGy",
    "role": Role.STUDENT,
  },
  {
    "id": 26,
    "firstName": "emilio",
    "lastName": "chavez",
    "email": "emilio26@student.com",
    "password": "$2b$10$rcehSMlnCKzOhCVpatC7CORjNuPTOCyUJpXaDcEA/yxdJO1wn8kGy",
    "role": Role.STUDENT,
  },
  {
    "id": 27,
    "firstName": "regina",
    "lastName": "mendoza",
    "email": "regina27@student.com",
    "password": "$2b$10$rcehSMlnCKzOhCVpatC7CORjNuPTOCyUJpXaDcEA/yxdJO1wn8kGy",
    "role": Role.STUDENT,
  },
  {
    "id": 28,
    "firstName": "tomas",
    "lastName": "cabrera",
    "email": "tomas28@student.com",
    "password": "$2b$10$rcehSMlnCKzOhCVpatC7CORjNuPTOCyUJpXaDcEA/yxdJO1wn8kGy",
    "role": Role.STUDENT,
  },
  {
    "id": 29,
    "firstName": "abril",
    "lastName": "maldonado",
    "email": "abril29@student.com",
    "password": "$2b$10$rcehSMlnCKzOhCVpatC7CORjNuPTOCyUJpXaDcEA/yxdJO1wn8kGy",
    "role": Role.STUDENT,
  },
  {
    "id": 30,
    "firstName": "sebastian",
    "lastName": "ramos",
    "email": "sebastian30@student.com",
    "password": "$2b$10$rcehSMlnCKzOhCVpatC7CORjNuPTOCyUJpXaDcEA/yxdJO1wn8kGy",
    "role": Role.STUDENT,
  },
  {
    "id": 31,
    "firstName": "victoria",
    "lastName": "salazar",
    "email": "victoria31@student.com",
    "password": "$2b$10$rcehSMlnCKzOhCVpatC7CORjNuPTOCyUJpXaDcEA/yxdJO1wn8kGy",
    "role": Role.STUDENT,
  },
  {
    "id": 32,
    "firstName": "ricardo",
    "lastName": "ruiz",
    "email": "ricardo32@student.com",
    "password": "$2b$10$rcehSMlnCKzOhCVpatC7CORjNuPTOCyUJpXaDcEA/yxdJO1wn8kGy",
    "role": Role.STUDENT,
  },
  {
    "id": 33,
    "firstName": "angela",
    "lastName": "guerra",
    "email": "angela33@student.com",
    "password": "$2b$10$rcehSMlnCKzOhCVpatC7CORjNuPTOCyUJpXaDcEA/yxdJO1wn8kGy",
    "role": Role.STUDENT,
  },
  {
    "id": 34,
    "firstName": "roberto",
    "lastName": "pe\u00f1a",
    "email": "roberto34@student.com",
    "password": "$2b$10$rcehSMlnCKzOhCVpatC7CORjNuPTOCyUJpXaDcEA/yxdJO1wn8kGy",
    "role": Role.STUDENT,
  },
  {
    "id": 35,
    "firstName": "patricia",
    "lastName": "delgado",
    "email": "patricia35@student.com",
    "password": "$2b$10$rcehSMlnCKzOhCVpatC7CORjNuPTOCyUJpXaDcEA/yxdJO1wn8kGy",
    "role": Role.STUDENT,
  },
  {
    "id": 36,
    "firstName": "felipe",
    "lastName": "acosta",
    "email": "felipe36@student.com",
    "password": "$2b$10$rcehSMlnCKzOhCVpatC7CORjNuPTOCyUJpXaDcEA/yxdJO1wn8kGy",
    "role": Role.STUDENT,
  },
  {
    "id": 37,
    "firstName": "marta",
    "lastName": "ibarra",
    "email": "marta37@student.com",
    "password": "$2b$10$rcehSMlnCKzOhCVpatC7CORjNuPTOCyUJpXaDcEA/yxdJO1wn8kGy",
    "role": Role.STUDENT,
  },
  {
    "id": 38,
    "firstName": "raul",
    "lastName": "campos",
    "email": "raul38@student.com",
    "password": "$2b$10$rcehSMlnCKzOhCVpatC7CORjNuPTOCyUJpXaDcEA/yxdJO1wn8kGy",
    "role": Role.STUDENT,
  },
  {
    "id": 39,
    "firstName": "rocio",
    "lastName": "vera",
    "email": "rocio39@student.com",
    "password": "$2b$10$rcehSMlnCKzOhCVpatC7CORjNuPTOCyUJpXaDcEA/yxdJO1wn8kGy",
    "role": Role.STUDENT,
  },
  {
    "id": 40,
    "firstName": "oscar",
    "lastName": "fuentes",
    "email": "oscar40@student.com",
    "password": "$2b$10$rcehSMlnCKzOhCVpatC7CORjNuPTOCyUJpXaDcEA/yxdJO1wn8kGy",
    "role": Role.STUDENT,
  },
  {
    "id": 41,
    "firstName": "laura",
    "lastName": "cordero",
    "email": "laura41@student.com",
    "password": "$2b$10$rcehSMlnCKzOhCVpatC7CORjNuPTOCyUJpXaDcEA/yxdJO1wn8kGy",
    "role": Role.STUDENT,
  },
  {
    "id": 42,
    "firstName": "alberto",
    "lastName": "rosales",
    "email": "alberto42@student.com",
    "password": "$2b$10$rcehSMlnCKzOhCVpatC7CORjNuPTOCyUJpXaDcEA/yxdJO1wn8kGy",
    "role": Role.STUDENT,
  },
  {
    "id": 43,
    "firstName": "claudia",
    "lastName": "palacios",
    "email": "claudia43@student.com",
    "password": "$2b$10$rcehSMlnCKzOhCVpatC7CORjNuPTOCyUJpXaDcEA/yxdJO1wn8kGy",
    "role": Role.STUDENT,
  },
  {
    "id": 44,
    "firstName": "gabriel",
    "lastName": "escobar",
    "email": "gabriel44@student.com",
    "password": "$2b$10$rcehSMlnCKzOhCVpatC7CORjNuPTOCyUJpXaDcEA/yxdJO1wn8kGy",
    "role": Role.STUDENT,
  },
  {
    "id": 45,
    "firstName": "adriana",
    "lastName": "carrillo",
    "email": "adriana45@student.com",
    "password": "$2b$10$rcehSMlnCKzOhCVpatC7CORjNuPTOCyUJpXaDcEA/yxdJO1wn8kGy",
    "role": Role.STUDENT,
  },
  {
    "id": 46,
    "firstName": "francisco",
    "lastName": "tapia",
    "email": "francisco46@student.com",
    "password": "$2b$10$rcehSMlnCKzOhCVpatC7CORjNuPTOCyUJpXaDcEA/yxdJO1wn8kGy",
    "role": Role.STUDENT,
  },
  {
    "id": 47,
    "firstName": "silvana",
    "lastName": "aguirre",
    "email": "silvana47@student.com",
    "password": "$2b$10$rcehSMlnCKzOhCVpatC7CORjNuPTOCyUJpXaDcEA/yxdJO1wn8kGy",
    "role": Role.STUDENT,
  },
  {
    "id": 48,
    "firstName": "enrique",
    "lastName": "bravo",
    "email": "enrique48@student.com",
    "password": "$2b$10$rcehSMlnCKzOhCVpatC7CORjNuPTOCyUJpXaDcEA/yxdJO1wn8kGy",
    "role": Role.STUDENT,
  },
  {
    "id": 49,
    "firstName": "noelia",
    "lastName": "valencia",
    "email": "noelia49@student.com",
    "password": "$2b$10$rcehSMlnCKzOhCVpatC7CORjNuPTOCyUJpXaDcEA/yxdJO1wn8kGy",
    "role": Role.STUDENT,
  },
  {
    "id": 50,
    "firstName": "jaime",
    "lastName": "espinoza",
    "email": "jaime50@student.com",
    "password": "$2b$10$rcehSMlnCKzOhCVpatC7CORjNuPTOCyUJpXaDcEA/yxdJO1wn8kGy",
    "role": Role.STUDENT,
  },
  {
    "id": 51,
    "firstName": "graciela",
    "lastName": "montoya",
    "email": "graciela51@student.com",
    "password": "$2b$10$rcehSMlnCKzOhCVpatC7CORjNuPTOCyUJpXaDcEA/yxdJO1wn8kGy",
    "role": Role.STUDENT,
  },
  {
    "id": 52,
    "firstName": "hector",
    "lastName": "villanueva",
    "email": "hector52@student.com",
    "password": "$2b$10$rcehSMlnCKzOhCVpatC7CORjNuPTOCyUJpXaDcEA/yxdJO1wn8kGy",
    "role": Role.STUDENT,
  },
  {
    "id": 53,
    "firstName": "alicia",
    "lastName": "bermudez",
    "email": "alicia53@student.com",
    "password": "$2b$10$rcehSMlnCKzOhCVpatC7CORjNuPTOCyUJpXaDcEA/yxdJO1wn8kGy",
    "role": Role.STUDENT,
  },
  {
    "id": 54,
    "firstName": "bruno",
    "lastName": "zamora",
    "email": "bruno54@student.com",
    "password": "$2b$10$rcehSMlnCKzOhCVpatC7CORjNuPTOCyUJpXaDcEA/yxdJO1wn8kGy",
    "role": Role.STUDENT,
  },
  {
    "id": 55,
    "firstName": "carmen",
    "lastName": "calderon",
    "email": "carmen55@student.com",
    "password": "$2b$10$rcehSMlnCKzOhCVpatC7CORjNuPTOCyUJpXaDcEA/yxdJO1wn8kGy",
    "role": Role.STUDENT,
  },
  {
    "id": 56,
    "firstName": "ivan",
    "lastName": "figueroa",
    "email": "ivan56@student.com",
    "password": "$2b$10$rcehSMlnCKzOhCVpatC7CORjNuPTOCyUJpXaDcEA/yxdJO1wn8kGy",
    "role": Role.STUDENT,
  },
  {
    "id": 57,
    "firstName": "josefina",
    "lastName": "meza",
    "email": "josefina57@student.com",
    "password": "$2b$10$rcehSMlnCKzOhCVpatC7CORjNuPTOCyUJpXaDcEA/yxdJO1wn8kGy",
    "role": Role.STUDENT,
  },
  {
    "id": 58,
    "firstName": "nicolas",
    "lastName": "arce",
    "email": "nicolas58@student.com",
    "password": "$2b$10$rcehSMlnCKzOhCVpatC7CORjNuPTOCyUJpXaDcEA/yxdJO1wn8kGy",
    "role": Role.STUDENT,
  },
  {
    "id": 59,
    "firstName": "elena",
    "lastName": "ayala",
    "email": "elena59@student.com",
    "password": "$2b$10$rcehSMlnCKzOhCVpatC7CORjNuPTOCyUJpXaDcEA/yxdJO1wn8kGy",
    "role": Role.STUDENT,
  },
  {
    "id": 60,
    "firstName": "agustin",
    "lastName": "cornejo",
    "email": "agustin60@student.com",
    "password": "$2b$10$rcehSMlnCKzOhCVpatC7CORjNuPTOCyUJpXaDcEA/yxdJO1wn8kGy",
    "role": Role.STUDENT,
  },
  {
    "id": 61,
    "firstName": "beatriz",
    "lastName": "leiva",
    "email": "beatriz61@student.com",
    "password": "$2b$10$rcehSMlnCKzOhCVpatC7CORjNuPTOCyUJpXaDcEA/yxdJO1wn8kGy",
    "role": Role.STUDENT,
  },
  {
    "id": 62,
    "firstName": "manuel",
    "lastName": "mora",
    "email": "manuel62@student.com",
    "password": "$2b$10$rcehSMlnCKzOhCVpatC7CORjNuPTOCyUJpXaDcEA/yxdJO1wn8kGy",
    "role": Role.STUDENT,
  },
  {
    "id": 63,
    "firstName": "lorena",
    "lastName": "saavedra",
    "email": "lorena63@student.com",
    "password": "$2b$10$rcehSMlnCKzOhCVpatC7CORjNuPTOCyUJpXaDcEA/yxdJO1wn8kGy",
    "role": Role.STUDENT,
  },
  {
    "id": 64,
    "firstName": "maximiliano",
    "lastName": "solorzano",
    "email": "maximiliano64@student.com",
    "password": "$2b$10$rcehSMlnCKzOhCVpatC7CORjNuPTOCyUJpXaDcEA/yxdJO1wn8kGy",
    "role": Role.STUDENT,
  },
  {
    "id": 65,
    "firstName": "natalia",
    "lastName": "soto",
    "email": "natalia65@student.com",
    "password": "$2b$10$rcehSMlnCKzOhCVpatC7CORjNuPTOCyUJpXaDcEA/yxdJO1wn8kGy",
    "role": Role.STUDENT,
  },
  {
    "id": 66,
    "firstName": "cristian",
    "lastName": "velasquez",
    "email": "cristian66@student.com",
    "password": "$2b$10$rcehSMlnCKzOhCVpatC7CORjNuPTOCyUJpXaDcEA/yxdJO1wn8kGy",
    "role": Role.STUDENT,
  },
  {
    "id": 67,
    "firstName": "bianca",
    "lastName": "zuniga",
    "email": "bianca67@student.com",
    "password": "$2b$10$rcehSMlnCKzOhCVpatC7CORjNuPTOCyUJpXaDcEA/yxdJO1wn8kGy",
    "role": Role.STUDENT,
  },
  {
    "id": 68,
    "firstName": "guillermo",
    "lastName": "avila",
    "email": "guillermo68@student.com",
    "password": "$2b$10$rcehSMlnCKzOhCVpatC7CORjNuPTOCyUJpXaDcEA/yxdJO1wn8kGy",
    "role": Role.STUDENT,
  },
  {
    "id": 69,
    "firstName": "florencia",
    "lastName": "barrios",
    "email": "florencia69@student.com",
    "password": "$2b$10$rcehSMlnCKzOhCVpatC7CORjNuPTOCyUJpXaDcEA/yxdJO1wn8kGy",
    "role": Role.STUDENT,
  },
  {
    "id": 70,
    "firstName": "eduardo",
    "lastName": "caballero",
    "email": "eduardo70@student.com",
    "password": "$2b$10$rcehSMlnCKzOhCVpatC7CORjNuPTOCyUJpXaDcEA/yxdJO1wn8kGy",
    "role": Role.STUDENT,
  },
  {
    "id": 71,
    "firstName": "carla",
    "lastName": "camacho",
    "email": "carla71@student.com",
    "password": "$2b$10$rcehSMlnCKzOhCVpatC7CORjNuPTOCyUJpXaDcEA/yxdJO1wn8kGy",
    "role": Role.STUDENT,
  },
  {
    "id": 72,
    "firstName": "benjamin",
    "lastName": "cano",
    "email": "benjamin72@student.com",
    "password": "$2b$10$rcehSMlnCKzOhCVpatC7CORjNuPTOCyUJpXaDcEA/yxdJO1wn8kGy",
    "role": Role.STUDENT,
  },
  {
    "id": 73,
    "firstName": "juliana",
    "lastName": "cardenas",
    "email": "juliana73@student.com",
    "password": "$2b$10$rcehSMlnCKzOhCVpatC7CORjNuPTOCyUJpXaDcEA/yxdJO1wn8kGy",
    "role": Role.STUDENT,
  },
  {
    "id": 74,
    "firstName": "axel",
    "lastName": "carrera",
    "email": "axel74@student.com",
    "password": "$2b$10$rcehSMlnCKzOhCVpatC7CORjNuPTOCyUJpXaDcEA/yxdJO1wn8kGy",
    "role": Role.STUDENT,
  },
  {
    "id": 75,
    "firstName": "milagros",
    "lastName": "castro",
    "email": "milagros75@student.com",
    "password": "$2b$10$rcehSMlnCKzOhCVpatC7CORjNuPTOCyUJpXaDcEA/yxdJO1wn8kGy",
    "role": Role.STUDENT,
  },
  {
    "id": 76,
    "firstName": "esteban",
    "lastName": "cuevas",
    "email": "esteban76@student.com",
    "password": "$2b$10$rcehSMlnCKzOhCVpatC7CORjNuPTOCyUJpXaDcEA/yxdJO1wn8kGy",
    "role": Role.STUDENT,
  },
  {
    "id": 77,
    "firstName": "pilar",
    "lastName": "fajardo",
    "email": "pilar77@student.com",
    "password": "$2b$10$rcehSMlnCKzOhCVpatC7CORjNuPTOCyUJpXaDcEA/yxdJO1wn8kGy",
    "role": Role.STUDENT,
  },
  {
    "id": 78,
    "firstName": "fabian",
    "lastName": "franco",
    "email": "fabian78@student.com",
    "password": "$2b$10$rcehSMlnCKzOhCVpatC7CORjNuPTOCyUJpXaDcEA/yxdJO1wn8kGy",
    "role": Role.STUDENT,
  },
  {
    "id": 79,
    "firstName": "celeste",
    "lastName": "galvez",
    "email": "celeste79@student.com",
    "password": "$2b$10$rcehSMlnCKzOhCVpatC7CORjNuPTOCyUJpXaDcEA/yxdJO1wn8kGy",
    "role": Role.STUDENT,
  },
  {
    "id": 80,
    "firstName": "dario",
    "lastName": "giron",
    "email": "dario80@student.com",
    "password": "$2b$10$rcehSMlnCKzOhCVpatC7CORjNuPTOCyUJpXaDcEA/yxdJO1wn8kGy",
    "role": Role.STUDENT,
  },
  {
    "id": 81,
    "firstName": "tamara",
    "lastName": "guzman",
    "email": "tamara81@student.com",
    "password": "$2b$10$rcehSMlnCKzOhCVpatC7CORjNuPTOCyUJpXaDcEA/yxdJO1wn8kGy",
    "role": Role.STUDENT,
  },
  {
    "id": 82,
    "firstName": "victor",
    "lastName": "huerta",
    "email": "victor82@student.com",
    "password": "$2b$10$rcehSMlnCKzOhCVpatC7CORjNuPTOCyUJpXaDcEA/yxdJO1wn8kGy",
    "role": Role.STUDENT,
  },
  {
    "id": 83,
    "firstName": "daniel",
    "lastName": "lara",
    "email": "daniel83@student.com",
    "password": "$2b$10$rcehSMlnCKzOhCVpatC7CORjNuPTOCyUJpXaDcEA/yxdJO1wn8kGy",
    "role": Role.STUDENT,
  },
  {
    "id": 84,
    "firstName": "veronica",
    "lastName": "linares",
    "email": "veronica84@student.com",
    "password": "$2b$10$rcehSMlnCKzOhCVpatC7CORjNuPTOCyUJpXaDcEA/yxdJO1wn8kGy",
    "role": Role.STUDENT,
  },
  {
    "id": 85,
    "firstName": "leonardo",
    "lastName": "lucero",
    "email": "leonardo85@student.com",
    "password": "$2b$10$rcehSMlnCKzOhCVpatC7CORjNuPTOCyUJpXaDcEA/yxdJO1wn8kGy",
    "role": Role.STUDENT,
  },
  {
    "id": 86,
    "firstName": "gloria",
    "lastName": "maga\u00f1a",
    "email": "gloria86@student.com",
    "password": "$2b$10$rcehSMlnCKzOhCVpatC7CORjNuPTOCyUJpXaDcEA/yxdJO1wn8kGy",
    "role": Role.STUDENT,
  },
  {
    "id": 87,
    "firstName": "alejandro",
    "lastName": "montes",
    "email": "alejandro87@student.com",
    "password": "$2b$10$rcehSMlnCKzOhCVpatC7CORjNuPTOCyUJpXaDcEA/yxdJO1wn8kGy",
    "role": Role.STUDENT,
  },
  {
    "id": 88,
    "firstName": "mirta",
    "lastName": "nieto",
    "email": "mirta88@student.com",
    "password": "$2b$10$rcehSMlnCKzOhCVpatC7CORjNuPTOCyUJpXaDcEA/yxdJO1wn8kGy",
    "role": Role.STUDENT,
  },
  {
    "id": 89,
    "firstName": "kevin",
    "lastName": "olivares",
    "email": "kevin89@student.com",
    "password": "$2b$10$rcehSMlnCKzOhCVpatC7CORjNuPTOCyUJpXaDcEA/yxdJO1wn8kGy",
    "role": Role.STUDENT,
  },
  {
    "id": 90,
    "firstName": "teresa",
    "lastName": "padilla",
    "email": "teresa90@student.com",
    "password": "$2b$10$rcehSMlnCKzOhCVpatC7CORjNuPTOCyUJpXaDcEA/yxdJO1wn8kGy",
    "role": Role.STUDENT,
  },
  {
    "id": 91,
    "firstName": "brenda",
    "lastName": "paz",
    "email": "brenda91@student.com",
    "password": "$2b$10$rcehSMlnCKzOhCVpatC7CORjNuPTOCyUJpXaDcEA/yxdJO1wn8kGy",
    "role": Role.STUDENT,
  },
  {
    "id": 92,
    "firstName": "martin",
    "lastName": "ponce",
    "email": "martin92@student.com",
    "password": "$2b$10$rcehSMlnCKzOhCVpatC7CORjNuPTOCyUJpXaDcEA/yxdJO1wn8kGy",
    "role": Role.STUDENT,
  },
  {
    "id": 93,
    "firstName": "romina",
    "lastName": "portillo",
    "email": "romina93@student.com",
    "password": "$2b$10$rcehSMlnCKzOhCVpatC7CORjNuPTOCyUJpXaDcEA/yxdJO1wn8kGy",
    "role": Role.STUDENT,
  },
  {
    "id": 94,
    "firstName": "emmanuel",
    "lastName": "quintero",
    "email": "emmanuel94@student.com",
    "password": "$2b$10$rcehSMlnCKzOhCVpatC7CORjNuPTOCyUJpXaDcEA/yxdJO1wn8kGy",
    "role": Role.STUDENT,
  },
  {
    "id": 95,
    "firstName": "lourdes",
    "lastName": "reynoso",
    "email": "lourdes95@student.com",
    "password": "$2b$10$rcehSMlnCKzOhCVpatC7CORjNuPTOCyUJpXaDcEA/yxdJO1wn8kGy",
    "role": Role.STUDENT,
  },
  {
    "id": 96,
    "firstName": "facundo",
    "lastName": "segura",
    "email": "facundo96@student.com",
    "password": "$2b$10$rcehSMlnCKzOhCVpatC7CORjNuPTOCyUJpXaDcEA/yxdJO1wn8kGy",
    "role": Role.STUDENT,
  },
  {
    "id": 97,
    "firstName": "melina",
    "lastName": "serrano",
    "email": "melina97@student.com",
    "password": "$2b$10$rcehSMlnCKzOhCVpatC7CORjNuPTOCyUJpXaDcEA/yxdJO1wn8kGy",
    "role": Role.STUDENT,
  },
  {
    "id": 98,
    "firstName": "leandro",
    "lastName": "suarez",
    "email": "leandro98@student.com",
    "password": "$2b$10$rcehSMlnCKzOhCVpatC7CORjNuPTOCyUJpXaDcEA/yxdJO1wn8kGy",
    "role": Role.STUDENT,
  },
  {
    "id": 99,
    "firstName": "jose",
    "lastName": "toledo",
    "email": "jose99@student.com",
    "password": "$2b$10$rcehSMlnCKzOhCVpatC7CORjNuPTOCyUJpXaDcEA/yxdJO1wn8kGy",
    "role": Role.STUDENT,
  },
  {
    "id": 100,
    "firstName": "norma",
    "lastName": "trujillo",
    "email": "norma100@student.com",
    "password": "$2b$10$rcehSMlnCKzOhCVpatC7CORjNuPTOCyUJpXaDcEA/yxdJO1wn8kGy",
    "role": Role.STUDENT,
  },
  {
    "id": 101,
    "firstName": "roberto",
    "lastName": "gomez",
    "email": "roberto101@student.com",
    "password": "$2b$10$rcehSMlnCKzOhCVpatC7CORjNuPTOCyUJpXaDcEA/yxdJO1wn8kGy",
    "role": Role.TEACHER,
  },
  {
    "id": 102,
    "firstName": "yessenia",
    "lastName": "lopez",
    "email": "yessenia102@student.com",
    "password": "$2b$10$rcehSMlnCKzOhCVpatC7CORjNuPTOCyUJpXaDcEA/yxdJO1wn8kGy",
    "role": Role.TEACHER,
  },
  {
    "id": 103,
    "firstName": "leandro",
    "lastName": "vargas",
    "email": "leandro103@student.com",
    "password": "$2b$10$rcehSMlnCKzOhCVpatC7CORjNuPTOCyUJpXaDcEA/yxdJO1wn8kGy",
    "role": Role.TEACHER,
  },
  {
    "id": 104,
    "firstName": "amanda",
    "lastName": "toledo",
    "email": "amanda104@student.com",
    "password": "$2b$10$rcehSMlnCKzOhCVpatC7CORjNuPTOCyUJpXaDcEA/yxdJO1wn8kGy",
    "role": Role.TEACHER,
  },
];

export const SEED_STUDENTS = [
  {
    "id": 1,
    "classroom": { "id": 1 },
    "user": {
      "id": 1
    }
  },
  {
    "id": 2,
    "classroom": { "id": 1 },
    "user": {
      "id": 2
    }
  },
  {
    "id": 3,
    "classroom": { "id": 1 },
    "user": {
      "id": 3
    }
  },
  {
    "id": 4,
    "classroom": { "id": 1 },
    "user": {
      "id": 4
    }
  },
  {
    "id": 5,
    "classroom": { "id": 1 },
    "user": {
      "id": 5
    }
  },
  {
    "id": 6,
    "classroom": { "id": 1 },
    "user": {
      "id": 6
    }
  },
  {
    "id": 7,
    "classroom": { "id": 1 },
    "user": {
      "id": 7
    }
  },
  {
    "id": 8,
    "classroom": { "id": 1 },
    "user": {
      "id": 8
    }
  },
  {
    "id": 9,
    "classroom": { "id": 1 },
    "user": {
      "id": 9
    }
  },
  {
    "id": 10,
    "classroom": { "id": 1 },
    "user": {
      "id": 10
    }
  },
  {
    "id": 11,
    "classroom": { "id": 1 },
    "user": {
      "id": 11
    }
  },
  {
    "id": 12,
    "classroom": { "id": 1 },
    "user": {
      "id": 12
    }
  },
  {
    "id": 13,
    "classroom": { "id": 1 },
    "user": {
      "id": 13
    }
  },
  {
    "id": 14,
    "classroom": { "id": 1 },
    "user": {
      "id": 14
    }
  },
  {
    "id": 15,
    "classroom": { "id": 1 },
    "user": {
      "id": 15
    }
  },
  {
    "id": 16,
    "classroom": { "id": 1 },
    "user": {
      "id": 16
    }
  },
  {
    "id": 17,
    "classroom": { "id": 1 },
    "user": {
      "id": 17
    }
  },
  {
    "id": 18,
    "classroom": { "id": 1 },
    "user": {
      "id": 18
    }
  },
  {
    "id": 19,
    "classroom": { "id": 1 },
    "user": {
      "id": 19
    }
  },
  {
    "id": 20,
    "classroom": { "id": 1 },
    "user": {
      "id": 20
    }
  },
  {
    "id": 21,
    "classroom": { "id": 1 },
    "user": {
      "id": 21
    }
  },
  {
    "id": 22,
    "classroom": { "id": 1 },
    "user": {
      "id": 22
    }
  },
  {
    "id": 23,
    "classroom": { "id": 1 },
    "user": {
      "id": 23
    }
  },
  {
    "id": 24,
    "classroom": { "id": 1 },
    "user": {
      "id": 24
    }
  },
  {
    "id": 25,
    "classroom": { "id": 1 },
    "user": {
      "id": 25
    }
  },
  {
    "id": 26,
    "classroom": { "id": 2 },
    "user": {
      "id": 26
    }
  },
  {
    "id": 27,
    "classroom": { "id": 2 },
    "user": {
      "id": 27
    }
  },
  {
    "id": 28,
    "classroom": { "id": 2 },
    "user": {
      "id": 28
    }
  },
  {
    "id": 29,
    "classroom": { "id": 2 },
    "user": {
      "id": 29
    }
  },
  {
    "id": 30,
    "classroom": { "id": 2 },
    "user": {
      "id": 30
    }
  },
  {
    "id": 31,
    "classroom": { "id": 2 },
    "user": {
      "id": 31
    }
  },
  {
    "id": 32,
    "classroom": { "id": 2 },
    "user": {
      "id": 32
    }
  },
  {
    "id": 33,
    "classroom": { "id": 2 },
    "user": {
      "id": 33
    }
  },
  {
    "id": 34,
    "classroom": { "id": 2 },
    "user": {
      "id": 34
    }
  },
  {
    "id": 35,
    "classroom": { "id": 2 },
    "user": {
      "id": 35
    }
  },
  {
    "id": 36,
    "classroom": { "id": 2 },
    "user": {
      "id": 36
    }
  },
  {
    "id": 37,
    "classroom": { "id": 2 },
    "user": {
      "id": 37
    }
  },
  {
    "id": 38,
    "classroom": { "id": 2 },
    "user": {
      "id": 38
    }
  },
  {
    "id": 39,
    "classroom": { "id": 2 },
    "user": {
      "id": 39
    }
  },
  {
    "id": 40,
    "classroom": { "id": 2 },
    "user": {
      "id": 40
    }
  },
  {
    "id": 41,
    "classroom": { "id": 2 },
    "user": {
      "id": 41
    }
  },
  {
    "id": 42,
    "classroom": { "id": 2 },
    "user": {
      "id": 42
    }
  },
  {
    "id": 43,
    "classroom": { "id": 2 },
    "user": {
      "id": 43
    }
  },
  {
    "id": 44,
    "classroom": { "id": 2 },
    "user": {
      "id": 44
    }
  },
  {
    "id": 45,
    "classroom": { "id": 2 },
    "user": {
      "id": 45
    }
  },
  {
    "id": 46,
    "classroom": { "id": 2 },
    "user": {
      "id": 46
    }
  },
  {
    "id": 47,
    "classroom": { "id": 2 },
    "user": {
      "id": 47
    }
  },
  {
    "id": 48,
    "classroom": { "id": 2 },
    "user": {
      "id": 48
    }
  },
  {
    "id": 49,
    "classroom": { "id": 2 },
    "user": {
      "id": 49
    }
  },
  {
    "id": 50,
    "classroom": { "id": 2 },
    "user": {
      "id": 50
    }
  },
  {
    "id": 51,
    "classroom": { "id": 3 },
    "user": {
      "id": 51
    }
  },
  {
    "id": 52,
    "classroom": { "id": 3 },
    "user": {
      "id": 52
    }
  },
  {
    "id": 53,
    "classroom": { "id": 3 },
    "user": {
      "id": 53
    }
  },
  {
    "id": 54,
    "classroom": { "id": 3 },
    "user": {
      "id": 54
    }
  },
  {
    "id": 55,
    "classroom": { "id": 3 },
    "user": {
      "id": 55
    }
  },
  {
    "id": 56,
    "classroom": { "id": 3 },
    "user": {
      "id": 56
    }
  },
  {
    "id": 57,
    "classroom": { "id": 3 },
    "user": {
      "id": 57
    }
  },
  {
    "id": 58,
    "classroom": { "id": 3 },
    "user": {
      "id": 58
    }
  },
  {
    "id": 59,
    "classroom": { "id": 3 },
    "user": {
      "id": 59
    }
  },
  {
    "id": 60,
    "classroom": { "id": 3 },
    "user": {
      "id": 60
    }
  },
  {
    "id": 61,
    "classroom": { "id": 3 },
    "user": {
      "id": 61
    }
  },
  {
    "id": 62,
    "classroom": { "id": 3 },
    "user": {
      "id": 62
    }
  },
  {
    "id": 63,
    "classroom": { "id": 3 },
    "user": {
      "id": 63
    }
  },
  {
    "id": 64,
    "classroom": { "id": 3 },
    "user": {
      "id": 64
    }
  },
  {
    "id": 65,
    "classroom": { "id": 3 },
    "user": {
      "id": 65
    }
  },
  {
    "id": 66,
    "classroom": { "id": 3 },
    "user": {
      "id": 66
    }
  },
  {
    "id": 67,
    "classroom": { "id": 3 },
    "user": {
      "id": 67
    }
  },
  {
    "id": 68,
    "classroom": { "id": 3 },
    "user": {
      "id": 68
    }
  },
  {
    "id": 69,
    "classroom": { "id": 3 },
    "user": {
      "id": 69
    }
  },
  {
    "id": 70,
    "classroom": { "id": 3 },
    "user": {
      "id": 70
    }
  },
  {
    "id": 71,
    "classroom": { "id": 3 },
    "user": {
      "id": 71
    }
  },
  {
    "id": 72,
    "classroom": { "id": 3 },
    "user": {
      "id": 72
    }
  },
  {
    "id": 73,
    "classroom": { "id": 3 },
    "user": {
      "id": 73
    }
  },
  {
    "id": 74,
    "classroom": { "id": 3 },
    "user": {
      "id": 74
    }
  },
  {
    "id": 75,
    "classroom": { "id": 3 },
    "user": {
      "id": 75
    }
  },
  {
    "id": 76,
    "classroom": { "id": 4 },
    "user": {
      "id": 76
    }
  },
  {
    "id": 77,
    "classroom": { "id": 4 },
    "user": {
      "id": 77
    }
  },
  {
    "id": 78,
    "classroom": { "id": 4 },
    "user": {
      "id": 78
    }
  },
  {
    "id": 79,
    "classroom": { "id": 4 },
    "user": {
      "id": 79
    }
  },
  {
    "id": 80,
    "classroom": { "id": 4 },
    "user": {
      "id": 80
    }
  },
  {
    "id": 81,
    "classroom": { "id": 4 },
    "user": {
      "id": 81
    }
  },
  {
    "id": 82,
    "classroom": { "id": 4 },
    "user": {
      "id": 82
    }
  },
  {
    "id": 83,
    "classroom": { "id": 4 },
    "user": {
      "id": 83
    }
  },
  {
    "id": 84,
    "classroom": { "id": 4 },
    "user": {
      "id": 84
    }
  },
  {
    "id": 85,
    "classroom": { "id": 4 },
    "user": {
      "id": 85
    }
  },
  {
    "id": 86,
    "classroom": { "id": 4 },
    "user": {
      "id": 86
    }
  },
  {
    "id": 87,
    "classroom": { "id": 4 },
    "user": {
      "id": 87
    }
  },
  {
    "id": 88,
    "classroom": { "id": 4 },
    "user": {
      "id": 88
    }
  },
  {
    "id": 89,
    "classroom": { "id": 4 },
    "user": {
      "id": 89
    }
  },
  {
    "id": 90,
    "classroom": { "id": 4 },
    "user": {
      "id": 90
    }
  },
  {
    "id": 91,
    "classroom": { "id": 4 },
    "user": {
      "id": 91
    }
  },
  {
    "id": 92,
    "classroom": { "id": 4 },
    "user": {
      "id": 92
    }
  },
  {
    "id": 93,
    "classroom": { "id": 4 },
    "user": {
      "id": 93
    }
  },
  {
    "id": 94,
    "classroom": { "id": 4 },
    "user": {
      "id": 94
    }
  },
  {
    "id": 95,
    "classroom": { "id": 4 },
    "user": {
      "id": 95
    }
  },
  {
    "id": 96,
    "classroom": { "id": 4 },
    "user": {
      "id": 96
    }
  },
  {
    "id": 97,
    "classroom": { "id": 4 },
    "user": {
      "id": 97
    }
  },
  {
    "id": 98,
    "classroom": { "id": 4 },
    "user": {
      "id": 98
    }
  },
  {
    "id": 99,
    "classroom": { "id": 4 },
    "user": {
      "id": 99
    }
  },
  {
    "id": 100,
    "classroom": { "id": 4 },
    "user": {
      "id": 100
    }
  }
];

export const SEED_TEACHERS = [
  {
    "id": 1,
    "cellphone": 67788442,
    "classroom": { "id": 1 },
    "user": {
      "id": 101
    }
  },
  {
    "id": 2,
    "cellphone": 67788443,
    "classroom": { "id": 1 },
    "user": {
      "id": 102
    }
  },
  {
    "id": 3,
    "cellphone": 67788445,
    "classroom": { "id": 1 },
    "user": {
      "id": 103
    }
  },
  {
    "id": 4,
    "cellphone": 67788446,
    "classroom": { "id": 1 },
    "user": {
      "id": 104
    }
  },
];

export const SEED_CLASSROOMS = [
  {
    id: 1,
    name: '6to B - Los Angeles',
    teacher: { id: 1 },
    course: { id: 2 },
  },
  {
    id: 2,
    name: '6to A - Los Angeles',
    teacher: { id: 2 },
    course: { id: 2 },
  },
  {
    id: 3,
    name: '5to A - Los Angeles',
    teacher: { id: 3 },
    course: { id: 1 },
  },
  {
    id: 4,
    name: '5to B - Los Angeles',
    teacher: { id: 4 },
    course: { id: 1 },
  },
];

export const SEED_SDE = [
  {
    started_at: "2025-05-03 09:54:33",
    finished_at: "2025-05-03 09:55:03",
    errors: 0,
    student: { id: 1 },
    exercise: { id: 1 },
  },
  {
    started_at: "2025-05-03 09:55:06",
    finished_at: "2025-05-03 09:55:58",
    errors: 1,
    student: { id: 1 },
    exercise: { id: 2 },
  },
  {
    started_at: "2025-05-03 09:56:05",
    finished_at: "2025-05-03 09:57:02",
    errors: 0,
    student: { id: 1 },
    exercise: { id: 3 },
  },
  {
    started_at: "2025-05-03 09:57:04",
    finished_at: "2025-05-03 09:58:33",
    errors: 0,
    student: { id: 1 },
    exercise: { id: 4 },
  },
  {
    started_at: "2025-05-03 09:58:40",
    finished_at: "2025-05-03 09:59:50",
    errors: 1,
    student: { id: 1 },
    exercise: { id: 5 },
  },
  {
    started_at: "2025-05-03 09:59:55",
    finished_at: "2025-05-03 10:01:05",
    errors: 1,
    student: { id: 1 },
    exercise: { id: 6 },
  },
  {
    started_at: "2025-05-03 10:01:09",
    finished_at: "2025-05-03 10:02:10",
    errors: 0,
    student: { id: 1 },
    exercise: { id: 7 },
  },
  {
    started_at: "2025-05-03 10:02:15",
    finished_at: "2025-05-03 10:03:36",
    errors: 1,
    student: { id: 1 },
    exercise: { id: 8 },
  },
  {
    started_at: "2025-05-03 10:03:41",
    finished_at: "2025-05-03 10:04:24",
    errors: 1,
    student: { id: 1 },
    exercise: { id: 9 },
  },
  {
    started_at: "2025-05-03 10:04:26",
    finished_at: "2025-05-03 10:05:37",
    errors: 1,
    student: { id: 1 },
    exercise: { id: 10 },
  },
  {
    started_at: "2025-05-17 16:05:33",
    finished_at: "2025-05-17 16:06:03",
    errors: 0,
    student: { id: 1 },
    exercise: { id: 1 },
  },
  {
    started_at: "2025-05-17 16:06:07",
    finished_at: "2025-05-17 16:07:01",
    errors: 1,
    student: { id: 1 },
    exercise: { id: 2 },
  },
  {
    started_at: "2025-05-17 16:07:05",
    finished_at: "2025-05-17 16:07:57",
    errors: 0,
    student: { id: 1 },
    exercise: { id: 3 },
  },
  {
    started_at: "2025-05-17 16:08:01",
    finished_at: "2025-05-17 16:09:03",
    errors: 0,
    student: { id: 1 },
    exercise: { id: 4 },
  },
  {
    started_at: "2025-05-17 16:09:07",
    finished_at: "2025-05-17 16:10:29",
    errors: 1,
    student: { id: 1 },
    exercise: { id: 5 },
  },
  {
    started_at: "2025-05-17 16:10:33",
    finished_at: "2025-05-17 16:11:58",
    errors: 0,
    student: { id: 1 },
    exercise: { id: 6 },
  },
  {
    started_at: "2025-05-17 16:12:02",
    finished_at: "2025-05-17 16:13:15",
    errors: 0,
    student: { id: 1 },
    exercise: { id: 7 },
  },
  {
    started_at: "2025-05-17 16:13:17",
    finished_at: "2025-05-17 16:14:48",
    errors: 1,
    student: { id: 1 },
    exercise: { id: 8 },
  },
  {
    started_at: "2025-05-17 16:14:52",
    finished_at: "2025-05-17 16:15:49",
    errors: 0,
    student: { id: 1 },
    exercise: { id: 9 },
  },
  {
    started_at: "2025-05-17 16:15:51",
    finished_at: "2025-05-17 16:17:01",
    errors: 1,
    student: { id: 1 },
    exercise: { id: 10 },
  },
  {
    "started_at": "2025-05-26 16:13:52",
    "finished_at": "2025-05-26 16:14:03",
    "errors": 1,
    "student": {
      "id": 2
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-26 21:47:25",
    "finished_at": "2025-05-26 21:48:35",
    "errors": 1,
    "student": {
      "id": 2
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-26 11:36:06",
    "finished_at": "2025-05-26 11:38:18",
    "errors": 1,
    "student": {
      "id": 2
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-26 19:06:54",
    "finished_at": "2025-05-26 19:09:49",
    "errors": 1,
    "student": {
      "id": 2
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-26 21:38:16",
    "finished_at": "2025-05-26 21:39:35",
    "errors": 1,
    "student": {
      "id": 2
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-26 20:54:38",
    "finished_at": "2025-05-26 20:55:15",
    "errors": 0,
    "student": {
      "id": 2
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-26 15:53:29",
    "finished_at": "2025-05-26 15:55:11",
    "errors": 0,
    "student": {
      "id": 2
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-26 09:41:15",
    "finished_at": "2025-05-26 09:42:16",
    "errors": 0,
    "student": {
      "id": 2
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-26 14:03:34",
    "finished_at": "2025-05-26 14:04:21",
    "errors": 1,
    "student": {
      "id": 2
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-26 20:15:15",
    "finished_at": "2025-05-26 20:17:21",
    "errors": 0,
    "student": {
      "id": 2
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-19 12:56:17",
    "finished_at": "2025-05-19 12:58:00",
    "errors": 0,
    "student": {
      "id": 2
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-19 18:47:07",
    "finished_at": "2025-05-19 18:50:00",
    "errors": 1,
    "student": {
      "id": 2
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-19 11:44:14",
    "finished_at": "2025-05-19 11:44:56",
    "errors": 1,
    "student": {
      "id": 2
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-19 15:15:41",
    "finished_at": "2025-05-19 15:16:13",
    "errors": 0,
    "student": {
      "id": 2
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-19 16:15:15",
    "finished_at": "2025-05-19 16:15:52",
    "errors": 1,
    "student": {
      "id": 2
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-19 10:45:13",
    "finished_at": "2025-05-19 10:47:46",
    "errors": 1,
    "student": {
      "id": 2
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-19 16:03:28",
    "finished_at": "2025-05-19 16:06:15",
    "errors": 0,
    "student": {
      "id": 2
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-19 12:31:47",
    "finished_at": "2025-05-19 12:32:41",
    "errors": 1,
    "student": {
      "id": 2
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-19 17:52:55",
    "finished_at": "2025-05-19 17:53:27",
    "errors": 1,
    "student": {
      "id": 2
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-19 15:18:28",
    "finished_at": "2025-05-19 15:20:51",
    "errors": 1,
    "student": {
      "id": 2
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-04 16:43:15",
    "finished_at": "2025-05-04 16:43:28",
    "errors": 0,
    "student": {
      "id": 3
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-04 19:08:33",
    "finished_at": "2025-05-04 19:11:25",
    "errors": 0,
    "student": {
      "id": 3
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-04 10:35:57",
    "finished_at": "2025-05-04 10:36:13",
    "errors": 0,
    "student": {
      "id": 3
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-04 13:27:25",
    "finished_at": "2025-05-04 13:27:54",
    "errors": 0,
    "student": {
      "id": 3
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-04 13:08:09",
    "finished_at": "2025-05-04 13:10:08",
    "errors": 1,
    "student": {
      "id": 3
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-04 21:44:34",
    "finished_at": "2025-05-04 21:46:31",
    "errors": 1,
    "student": {
      "id": 3
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-04 08:12:59",
    "finished_at": "2025-05-04 08:13:28",
    "errors": 1,
    "student": {
      "id": 3
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-04 13:00:24",
    "finished_at": "2025-05-04 13:03:13",
    "errors": 0,
    "student": {
      "id": 3
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-04 20:16:22",
    "finished_at": "2025-05-04 20:18:34",
    "errors": 1,
    "student": {
      "id": 3
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-04 18:50:50",
    "finished_at": "2025-05-04 18:52:28",
    "errors": 1,
    "student": {
      "id": 3
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-20 21:21:03",
    "finished_at": "2025-05-20 21:22:33",
    "errors": 0,
    "student": {
      "id": 3
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-20 15:56:37",
    "finished_at": "2025-05-20 15:59:03",
    "errors": 1,
    "student": {
      "id": 3
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-20 16:00:51",
    "finished_at": "2025-05-20 16:02:54",
    "errors": 1,
    "student": {
      "id": 3
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-20 13:59:44",
    "finished_at": "2025-05-20 14:01:18",
    "errors": 0,
    "student": {
      "id": 3
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-20 09:42:05",
    "finished_at": "2025-05-20 09:43:26",
    "errors": 0,
    "student": {
      "id": 3
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-20 19:07:58",
    "finished_at": "2025-05-20 19:09:20",
    "errors": 0,
    "student": {
      "id": 3
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-20 10:28:44",
    "finished_at": "2025-05-20 10:29:47",
    "errors": 0,
    "student": {
      "id": 3
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-20 16:50:51",
    "finished_at": "2025-05-20 16:51:01",
    "errors": 1,
    "student": {
      "id": 3
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-20 08:40:16",
    "finished_at": "2025-05-20 08:41:31",
    "errors": 0,
    "student": {
      "id": 3
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-20 12:31:58",
    "finished_at": "2025-05-20 12:33:47",
    "errors": 0,
    "student": {
      "id": 3
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-05 19:05:59",
    "finished_at": "2025-05-05 19:07:34",
    "errors": 0,
    "student": {
      "id": 4
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-05 08:27:06",
    "finished_at": "2025-05-05 08:29:06",
    "errors": 1,
    "student": {
      "id": 4
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-05 18:07:30",
    "finished_at": "2025-05-05 18:07:48",
    "errors": 0,
    "student": {
      "id": 4
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-05 12:34:36",
    "finished_at": "2025-05-05 12:36:09",
    "errors": 0,
    "student": {
      "id": 4
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-05 20:20:30",
    "finished_at": "2025-05-05 20:22:28",
    "errors": 0,
    "student": {
      "id": 4
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-05 14:06:47",
    "finished_at": "2025-05-05 14:09:31",
    "errors": 1,
    "student": {
      "id": 4
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-05 13:47:04",
    "finished_at": "2025-05-05 13:47:32",
    "errors": 0,
    "student": {
      "id": 4
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-05 14:52:12",
    "finished_at": "2025-05-05 14:54:12",
    "errors": 0,
    "student": {
      "id": 4
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-05 14:26:17",
    "finished_at": "2025-05-05 14:26:28",
    "errors": 0,
    "student": {
      "id": 4
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-05 09:51:53",
    "finished_at": "2025-05-05 09:52:24",
    "errors": 1,
    "student": {
      "id": 4
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-11 18:23:18",
    "finished_at": "2025-05-11 18:25:12",
    "errors": 0,
    "student": {
      "id": 4
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-11 21:43:39",
    "finished_at": "2025-05-11 21:46:06",
    "errors": 1,
    "student": {
      "id": 4
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-11 19:30:27",
    "finished_at": "2025-05-11 19:33:06",
    "errors": 1,
    "student": {
      "id": 4
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-11 21:28:07",
    "finished_at": "2025-05-11 21:30:58",
    "errors": 0,
    "student": {
      "id": 4
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-11 20:23:42",
    "finished_at": "2025-05-11 20:24:34",
    "errors": 1,
    "student": {
      "id": 4
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-11 08:08:02",
    "finished_at": "2025-05-11 08:08:48",
    "errors": 1,
    "student": {
      "id": 4
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-11 11:53:21",
    "finished_at": "2025-05-11 11:54:43",
    "errors": 1,
    "student": {
      "id": 4
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-11 08:39:23",
    "finished_at": "2025-05-11 08:40:53",
    "errors": 1,
    "student": {
      "id": 4
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-11 21:41:42",
    "finished_at": "2025-05-11 21:44:05",
    "errors": 1,
    "student": {
      "id": 4
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-11 09:13:03",
    "finished_at": "2025-05-11 09:13:27",
    "errors": 1,
    "student": {
      "id": 4
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-29 15:53:58",
    "finished_at": "2025-05-29 15:55:38",
    "errors": 1,
    "student": {
      "id": 5
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-29 18:42:53",
    "finished_at": "2025-05-29 18:44:01",
    "errors": 0,
    "student": {
      "id": 5
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-29 19:20:16",
    "finished_at": "2025-05-29 19:20:45",
    "errors": 0,
    "student": {
      "id": 5
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-29 20:36:23",
    "finished_at": "2025-05-29 20:36:54",
    "errors": 0,
    "student": {
      "id": 5
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-29 14:07:32",
    "finished_at": "2025-05-29 14:08:48",
    "errors": 1,
    "student": {
      "id": 5
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-29 13:01:11",
    "finished_at": "2025-05-29 13:02:59",
    "errors": 0,
    "student": {
      "id": 5
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-29 11:49:40",
    "finished_at": "2025-05-29 11:49:58",
    "errors": 0,
    "student": {
      "id": 5
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-29 13:47:02",
    "finished_at": "2025-05-29 13:49:00",
    "errors": 1,
    "student": {
      "id": 5
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-29 09:57:34",
    "finished_at": "2025-05-29 09:59:30",
    "errors": 1,
    "student": {
      "id": 5
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-29 21:00:22",
    "finished_at": "2025-05-29 21:01:53",
    "errors": 0,
    "student": {
      "id": 5
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-22 15:25:25",
    "finished_at": "2025-05-22 15:25:55",
    "errors": 0,
    "student": {
      "id": 5
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-22 19:57:24",
    "finished_at": "2025-05-22 19:59:09",
    "errors": 1,
    "student": {
      "id": 5
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-22 20:13:46",
    "finished_at": "2025-05-22 20:14:51",
    "errors": 1,
    "student": {
      "id": 5
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-22 15:48:26",
    "finished_at": "2025-05-22 15:51:26",
    "errors": 0,
    "student": {
      "id": 5
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-22 10:20:33",
    "finished_at": "2025-05-22 10:21:16",
    "errors": 1,
    "student": {
      "id": 5
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-22 19:40:22",
    "finished_at": "2025-05-22 19:41:39",
    "errors": 1,
    "student": {
      "id": 5
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-22 19:25:02",
    "finished_at": "2025-05-22 19:26:57",
    "errors": 0,
    "student": {
      "id": 5
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-22 15:41:17",
    "finished_at": "2025-05-22 15:43:29",
    "errors": 1,
    "student": {
      "id": 5
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-22 20:49:16",
    "finished_at": "2025-05-22 20:51:07",
    "errors": 1,
    "student": {
      "id": 5
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-22 09:42:49",
    "finished_at": "2025-05-22 09:44:49",
    "errors": 0,
    "student": {
      "id": 5
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-09 09:20:45",
    "finished_at": "2025-05-09 09:23:08",
    "errors": 0,
    "student": {
      "id": 6
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-09 12:46:49",
    "finished_at": "2025-05-09 12:48:18",
    "errors": 1,
    "student": {
      "id": 6
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-09 09:17:53",
    "finished_at": "2025-05-09 09:20:40",
    "errors": 0,
    "student": {
      "id": 6
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-09 17:21:25",
    "finished_at": "2025-05-09 17:24:09",
    "errors": 1,
    "student": {
      "id": 6
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-09 10:46:26",
    "finished_at": "2025-05-09 10:47:07",
    "errors": 1,
    "student": {
      "id": 6
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-09 08:17:05",
    "finished_at": "2025-05-09 08:17:19",
    "errors": 0,
    "student": {
      "id": 6
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-09 16:05:36",
    "finished_at": "2025-05-09 16:06:26",
    "errors": 1,
    "student": {
      "id": 6
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-09 21:05:04",
    "finished_at": "2025-05-09 21:06:02",
    "errors": 0,
    "student": {
      "id": 6
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-09 08:13:17",
    "finished_at": "2025-05-09 08:15:48",
    "errors": 1,
    "student": {
      "id": 6
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-09 21:39:41",
    "finished_at": "2025-05-09 21:41:56",
    "errors": 1,
    "student": {
      "id": 6
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-29 10:29:26",
    "finished_at": "2025-05-29 10:30:22",
    "errors": 1,
    "student": {
      "id": 6
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-29 18:14:13",
    "finished_at": "2025-05-29 18:15:37",
    "errors": 0,
    "student": {
      "id": 6
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-29 11:14:47",
    "finished_at": "2025-05-29 11:16:23",
    "errors": 0,
    "student": {
      "id": 6
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-29 15:56:02",
    "finished_at": "2025-05-29 15:57:44",
    "errors": 1,
    "student": {
      "id": 6
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-29 09:54:47",
    "finished_at": "2025-05-29 09:54:57",
    "errors": 1,
    "student": {
      "id": 6
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-29 21:41:38",
    "finished_at": "2025-05-29 21:44:37",
    "errors": 1,
    "student": {
      "id": 6
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-29 17:12:53",
    "finished_at": "2025-05-29 17:14:46",
    "errors": 1,
    "student": {
      "id": 6
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-29 12:54:14",
    "finished_at": "2025-05-29 12:54:32",
    "errors": 0,
    "student": {
      "id": 6
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-29 18:28:59",
    "finished_at": "2025-05-29 18:30:18",
    "errors": 0,
    "student": {
      "id": 6
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-29 21:23:09",
    "finished_at": "2025-05-29 21:25:13",
    "errors": 1,
    "student": {
      "id": 6
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-02 14:42:17",
    "finished_at": "2025-05-02 14:42:54",
    "errors": 1,
    "student": {
      "id": 7
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-02 10:00:04",
    "finished_at": "2025-05-02 10:01:49",
    "errors": 1,
    "student": {
      "id": 7
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-02 13:51:08",
    "finished_at": "2025-05-02 13:51:37",
    "errors": 0,
    "student": {
      "id": 7
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-02 08:45:35",
    "finished_at": "2025-05-02 08:47:40",
    "errors": 0,
    "student": {
      "id": 7
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-02 08:01:53",
    "finished_at": "2025-05-02 08:04:37",
    "errors": 0,
    "student": {
      "id": 7
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-02 17:45:16",
    "finished_at": "2025-05-02 17:47:01",
    "errors": 0,
    "student": {
      "id": 7
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-02 14:14:24",
    "finished_at": "2025-05-02 14:16:34",
    "errors": 0,
    "student": {
      "id": 7
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-02 08:20:46",
    "finished_at": "2025-05-02 08:22:37",
    "errors": 0,
    "student": {
      "id": 7
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-02 10:53:36",
    "finished_at": "2025-05-02 10:56:01",
    "errors": 0,
    "student": {
      "id": 7
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-02 15:28:18",
    "finished_at": "2025-05-02 15:29:25",
    "errors": 1,
    "student": {
      "id": 7
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-26 17:35:14",
    "finished_at": "2025-05-26 17:37:41",
    "errors": 1,
    "student": {
      "id": 7
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-26 12:18:22",
    "finished_at": "2025-05-26 12:18:36",
    "errors": 1,
    "student": {
      "id": 7
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-26 15:17:34",
    "finished_at": "2025-05-26 15:18:43",
    "errors": 1,
    "student": {
      "id": 7
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-26 20:03:24",
    "finished_at": "2025-05-26 20:06:14",
    "errors": 1,
    "student": {
      "id": 7
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-26 19:26:25",
    "finished_at": "2025-05-26 19:28:43",
    "errors": 1,
    "student": {
      "id": 7
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-26 09:01:11",
    "finished_at": "2025-05-26 09:03:33",
    "errors": 1,
    "student": {
      "id": 7
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-26 12:53:26",
    "finished_at": "2025-05-26 12:54:35",
    "errors": 1,
    "student": {
      "id": 7
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-26 08:39:15",
    "finished_at": "2025-05-26 08:41:33",
    "errors": 1,
    "student": {
      "id": 7
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-26 08:56:56",
    "finished_at": "2025-05-26 08:58:32",
    "errors": 1,
    "student": {
      "id": 7
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-26 20:28:50",
    "finished_at": "2025-05-26 20:31:12",
    "errors": 0,
    "student": {
      "id": 7
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-29 11:12:02",
    "finished_at": "2025-05-29 11:13:57",
    "errors": 0,
    "student": {
      "id": 8
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-29 18:09:34",
    "finished_at": "2025-05-29 18:11:33",
    "errors": 1,
    "student": {
      "id": 8
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-29 15:50:59",
    "finished_at": "2025-05-29 15:51:59",
    "errors": 0,
    "student": {
      "id": 8
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-29 12:52:00",
    "finished_at": "2025-05-29 12:52:38",
    "errors": 1,
    "student": {
      "id": 8
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-29 18:40:44",
    "finished_at": "2025-05-29 18:41:07",
    "errors": 0,
    "student": {
      "id": 8
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-29 20:37:33",
    "finished_at": "2025-05-29 20:40:11",
    "errors": 0,
    "student": {
      "id": 8
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-29 21:16:14",
    "finished_at": "2025-05-29 21:19:14",
    "errors": 1,
    "student": {
      "id": 8
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-29 12:25:50",
    "finished_at": "2025-05-29 12:28:30",
    "errors": 1,
    "student": {
      "id": 8
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-29 16:50:24",
    "finished_at": "2025-05-29 16:51:52",
    "errors": 0,
    "student": {
      "id": 8
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-29 16:01:40",
    "finished_at": "2025-05-29 16:02:00",
    "errors": 1,
    "student": {
      "id": 8
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-25 20:41:22",
    "finished_at": "2025-05-25 20:41:46",
    "errors": 0,
    "student": {
      "id": 8
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-25 13:29:02",
    "finished_at": "2025-05-25 13:31:41",
    "errors": 0,
    "student": {
      "id": 8
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-25 11:06:25",
    "finished_at": "2025-05-25 11:07:23",
    "errors": 0,
    "student": {
      "id": 8
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-25 19:42:38",
    "finished_at": "2025-05-25 19:44:50",
    "errors": 1,
    "student": {
      "id": 8
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-25 08:40:41",
    "finished_at": "2025-05-25 08:43:41",
    "errors": 0,
    "student": {
      "id": 8
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-25 21:13:29",
    "finished_at": "2025-05-25 21:16:23",
    "errors": 0,
    "student": {
      "id": 8
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-25 16:42:51",
    "finished_at": "2025-05-25 16:43:21",
    "errors": 1,
    "student": {
      "id": 8
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-25 11:35:17",
    "finished_at": "2025-05-25 11:37:20",
    "errors": 0,
    "student": {
      "id": 8
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-25 17:48:26",
    "finished_at": "2025-05-25 17:49:36",
    "errors": 0,
    "student": {
      "id": 8
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-25 20:14:00",
    "finished_at": "2025-05-25 20:14:58",
    "errors": 0,
    "student": {
      "id": 8
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-03 08:45:09",
    "finished_at": "2025-05-03 08:47:33",
    "errors": 1,
    "student": {
      "id": 9
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-03 16:48:56",
    "finished_at": "2025-05-03 16:51:55",
    "errors": 1,
    "student": {
      "id": 9
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-03 14:39:56",
    "finished_at": "2025-05-03 14:42:14",
    "errors": 1,
    "student": {
      "id": 9
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-03 21:49:20",
    "finished_at": "2025-05-03 21:52:06",
    "errors": 1,
    "student": {
      "id": 9
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-03 18:54:52",
    "finished_at": "2025-05-03 18:57:29",
    "errors": 1,
    "student": {
      "id": 9
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-03 14:16:52",
    "finished_at": "2025-05-03 14:18:33",
    "errors": 1,
    "student": {
      "id": 9
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-03 11:55:45",
    "finished_at": "2025-05-03 11:58:00",
    "errors": 0,
    "student": {
      "id": 9
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-03 14:05:55",
    "finished_at": "2025-05-03 14:08:22",
    "errors": 1,
    "student": {
      "id": 9
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-03 16:27:49",
    "finished_at": "2025-05-03 16:28:18",
    "errors": 1,
    "student": {
      "id": 9
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-03 11:03:45",
    "finished_at": "2025-05-03 11:04:00",
    "errors": 1,
    "student": {
      "id": 9
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-07 10:34:11",
    "finished_at": "2025-05-07 10:35:48",
    "errors": 0,
    "student": {
      "id": 9
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-07 14:46:04",
    "finished_at": "2025-05-07 14:48:22",
    "errors": 1,
    "student": {
      "id": 9
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-07 11:21:05",
    "finished_at": "2025-05-07 11:22:04",
    "errors": 1,
    "student": {
      "id": 9
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-07 12:31:16",
    "finished_at": "2025-05-07 12:32:02",
    "errors": 1,
    "student": {
      "id": 9
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-07 16:37:51",
    "finished_at": "2025-05-07 16:40:47",
    "errors": 1,
    "student": {
      "id": 9
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-07 12:38:14",
    "finished_at": "2025-05-07 12:40:01",
    "errors": 0,
    "student": {
      "id": 9
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-07 08:57:09",
    "finished_at": "2025-05-07 08:58:31",
    "errors": 1,
    "student": {
      "id": 9
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-07 13:23:04",
    "finished_at": "2025-05-07 13:25:58",
    "errors": 1,
    "student": {
      "id": 9
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-07 11:04:07",
    "finished_at": "2025-05-07 11:06:48",
    "errors": 0,
    "student": {
      "id": 9
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-07 09:53:56",
    "finished_at": "2025-05-07 09:56:11",
    "errors": 0,
    "student": {
      "id": 9
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-03 08:08:05",
    "finished_at": "2025-05-03 08:08:38",
    "errors": 1,
    "student": {
      "id": 10
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-03 20:43:47",
    "finished_at": "2025-05-03 20:45:40",
    "errors": 1,
    "student": {
      "id": 10
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-03 17:18:09",
    "finished_at": "2025-05-03 17:18:22",
    "errors": 0,
    "student": {
      "id": 10
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-03 17:38:36",
    "finished_at": "2025-05-03 17:39:42",
    "errors": 1,
    "student": {
      "id": 10
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-03 21:50:34",
    "finished_at": "2025-05-03 21:53:27",
    "errors": 0,
    "student": {
      "id": 10
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-03 10:12:14",
    "finished_at": "2025-05-03 10:13:52",
    "errors": 1,
    "student": {
      "id": 10
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-03 19:37:04",
    "finished_at": "2025-05-03 19:38:06",
    "errors": 0,
    "student": {
      "id": 10
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-03 15:29:05",
    "finished_at": "2025-05-03 15:29:20",
    "errors": 1,
    "student": {
      "id": 10
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-03 09:47:41",
    "finished_at": "2025-05-03 09:49:58",
    "errors": 0,
    "student": {
      "id": 10
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-03 16:11:47",
    "finished_at": "2025-05-03 16:12:35",
    "errors": 1,
    "student": {
      "id": 10
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-02 10:32:15",
    "finished_at": "2025-05-02 10:34:09",
    "errors": 1,
    "student": {
      "id": 10
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-02 18:05:02",
    "finished_at": "2025-05-02 18:07:22",
    "errors": 1,
    "student": {
      "id": 10
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-02 19:10:54",
    "finished_at": "2025-05-02 19:13:46",
    "errors": 0,
    "student": {
      "id": 10
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-02 14:12:59",
    "finished_at": "2025-05-02 14:14:55",
    "errors": 0,
    "student": {
      "id": 10
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-02 10:48:44",
    "finished_at": "2025-05-02 10:50:04",
    "errors": 1,
    "student": {
      "id": 10
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-02 14:33:57",
    "finished_at": "2025-05-02 14:34:41",
    "errors": 0,
    "student": {
      "id": 10
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-02 20:54:05",
    "finished_at": "2025-05-02 20:57:05",
    "errors": 0,
    "student": {
      "id": 10
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-02 08:10:14",
    "finished_at": "2025-05-02 08:12:12",
    "errors": 1,
    "student": {
      "id": 10
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-02 16:05:21",
    "finished_at": "2025-05-02 16:08:21",
    "errors": 1,
    "student": {
      "id": 10
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-02 13:38:44",
    "finished_at": "2025-05-02 13:39:44",
    "errors": 0,
    "student": {
      "id": 10
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-04 18:40:40",
    "finished_at": "2025-05-04 18:43:39",
    "errors": 0,
    "student": {
      "id": 11
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-04 21:15:35",
    "finished_at": "2025-05-04 21:16:17",
    "errors": 1,
    "student": {
      "id": 11
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-04 11:35:25",
    "finished_at": "2025-05-04 11:37:49",
    "errors": 0,
    "student": {
      "id": 11
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-04 10:59:48",
    "finished_at": "2025-05-04 11:00:58",
    "errors": 0,
    "student": {
      "id": 11
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-04 15:21:33",
    "finished_at": "2025-05-04 15:24:01",
    "errors": 0,
    "student": {
      "id": 11
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-04 14:48:26",
    "finished_at": "2025-05-04 14:49:08",
    "errors": 1,
    "student": {
      "id": 11
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-04 19:10:17",
    "finished_at": "2025-05-04 19:11:51",
    "errors": 1,
    "student": {
      "id": 11
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-04 10:04:30",
    "finished_at": "2025-05-04 10:07:01",
    "errors": 0,
    "student": {
      "id": 11
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-04 13:33:06",
    "finished_at": "2025-05-04 13:34:42",
    "errors": 1,
    "student": {
      "id": 11
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-04 12:00:02",
    "finished_at": "2025-05-04 12:02:09",
    "errors": 0,
    "student": {
      "id": 11
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-18 13:57:08",
    "finished_at": "2025-05-18 13:59:45",
    "errors": 1,
    "student": {
      "id": 11
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-18 19:15:15",
    "finished_at": "2025-05-18 19:17:28",
    "errors": 0,
    "student": {
      "id": 11
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-18 16:08:48",
    "finished_at": "2025-05-18 16:09:42",
    "errors": 0,
    "student": {
      "id": 11
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-18 16:50:28",
    "finished_at": "2025-05-18 16:52:32",
    "errors": 1,
    "student": {
      "id": 11
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-18 10:35:15",
    "finished_at": "2025-05-18 10:37:27",
    "errors": 0,
    "student": {
      "id": 11
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-18 08:15:03",
    "finished_at": "2025-05-18 08:16:32",
    "errors": 0,
    "student": {
      "id": 11
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-18 21:12:19",
    "finished_at": "2025-05-18 21:14:17",
    "errors": 0,
    "student": {
      "id": 11
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-18 21:06:49",
    "finished_at": "2025-05-18 21:07:29",
    "errors": 0,
    "student": {
      "id": 11
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-18 21:50:00",
    "finished_at": "2025-05-18 21:50:16",
    "errors": 0,
    "student": {
      "id": 11
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-18 11:08:08",
    "finished_at": "2025-05-18 11:11:00",
    "errors": 1,
    "student": {
      "id": 11
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-23 20:12:45",
    "finished_at": "2025-05-23 20:14:40",
    "errors": 1,
    "student": {
      "id": 12
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-23 20:15:00",
    "finished_at": "2025-05-23 20:16:57",
    "errors": 1,
    "student": {
      "id": 12
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-23 20:18:18",
    "finished_at": "2025-05-23 20:20:23",
    "errors": 0,
    "student": {
      "id": 12
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-23 13:46:21",
    "finished_at": "2025-05-23 13:47:02",
    "errors": 0,
    "student": {
      "id": 12
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-23 15:14:34",
    "finished_at": "2025-05-23 15:16:37",
    "errors": 0,
    "student": {
      "id": 12
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-23 12:38:01",
    "finished_at": "2025-05-23 12:38:46",
    "errors": 1,
    "student": {
      "id": 12
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-23 08:18:17",
    "finished_at": "2025-05-23 08:20:10",
    "errors": 1,
    "student": {
      "id": 12
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-23 10:58:38",
    "finished_at": "2025-05-23 10:58:58",
    "errors": 0,
    "student": {
      "id": 12
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-23 15:11:00",
    "finished_at": "2025-05-23 15:12:29",
    "errors": 0,
    "student": {
      "id": 12
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-23 15:42:50",
    "finished_at": "2025-05-23 15:45:31",
    "errors": 1,
    "student": {
      "id": 12
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-27 13:53:38",
    "finished_at": "2025-05-27 13:54:13",
    "errors": 1,
    "student": {
      "id": 12
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-27 18:55:05",
    "finished_at": "2025-05-27 18:56:45",
    "errors": 1,
    "student": {
      "id": 12
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-27 13:45:02",
    "finished_at": "2025-05-27 13:47:21",
    "errors": 1,
    "student": {
      "id": 12
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-27 12:27:34",
    "finished_at": "2025-05-27 12:29:10",
    "errors": 1,
    "student": {
      "id": 12
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-27 08:13:18",
    "finished_at": "2025-05-27 08:13:30",
    "errors": 1,
    "student": {
      "id": 12
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-27 21:36:38",
    "finished_at": "2025-05-27 21:38:04",
    "errors": 1,
    "student": {
      "id": 12
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-27 16:40:20",
    "finished_at": "2025-05-27 16:42:18",
    "errors": 0,
    "student": {
      "id": 12
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-27 08:35:30",
    "finished_at": "2025-05-27 08:38:27",
    "errors": 0,
    "student": {
      "id": 12
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-27 09:48:59",
    "finished_at": "2025-05-27 09:49:53",
    "errors": 0,
    "student": {
      "id": 12
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-27 13:54:57",
    "finished_at": "2025-05-27 13:55:38",
    "errors": 0,
    "student": {
      "id": 12
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-10 11:34:06",
    "finished_at": "2025-05-10 11:35:21",
    "errors": 0,
    "student": {
      "id": 13
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-10 13:43:38",
    "finished_at": "2025-05-10 13:45:39",
    "errors": 0,
    "student": {
      "id": 13
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-10 20:47:03",
    "finished_at": "2025-05-10 20:49:47",
    "errors": 0,
    "student": {
      "id": 13
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-10 15:02:59",
    "finished_at": "2025-05-10 15:03:44",
    "errors": 0,
    "student": {
      "id": 13
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-10 11:18:51",
    "finished_at": "2025-05-10 11:21:00",
    "errors": 1,
    "student": {
      "id": 13
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-10 08:46:17",
    "finished_at": "2025-05-10 08:47:26",
    "errors": 1,
    "student": {
      "id": 13
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-10 21:19:39",
    "finished_at": "2025-05-10 21:22:31",
    "errors": 1,
    "student": {
      "id": 13
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-10 17:50:47",
    "finished_at": "2025-05-10 17:53:39",
    "errors": 0,
    "student": {
      "id": 13
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-10 19:54:08",
    "finished_at": "2025-05-10 19:54:44",
    "errors": 1,
    "student": {
      "id": 13
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-10 18:34:20",
    "finished_at": "2025-05-10 18:34:30",
    "errors": 1,
    "student": {
      "id": 13
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-26 12:40:01",
    "finished_at": "2025-05-26 12:42:56",
    "errors": 1,
    "student": {
      "id": 13
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-26 19:40:12",
    "finished_at": "2025-05-26 19:41:00",
    "errors": 0,
    "student": {
      "id": 13
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-26 14:08:37",
    "finished_at": "2025-05-26 14:10:47",
    "errors": 1,
    "student": {
      "id": 13
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-26 21:25:34",
    "finished_at": "2025-05-26 21:27:04",
    "errors": 1,
    "student": {
      "id": 13
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-26 16:18:25",
    "finished_at": "2025-05-26 16:19:45",
    "errors": 1,
    "student": {
      "id": 13
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-26 10:30:09",
    "finished_at": "2025-05-26 10:31:31",
    "errors": 1,
    "student": {
      "id": 13
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-26 08:44:52",
    "finished_at": "2025-05-26 08:47:49",
    "errors": 0,
    "student": {
      "id": 13
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-26 15:47:39",
    "finished_at": "2025-05-26 15:50:10",
    "errors": 0,
    "student": {
      "id": 13
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-26 13:18:01",
    "finished_at": "2025-05-26 13:19:10",
    "errors": 1,
    "student": {
      "id": 13
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-26 09:36:01",
    "finished_at": "2025-05-26 09:37:07",
    "errors": 1,
    "student": {
      "id": 13
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-23 21:51:07",
    "finished_at": "2025-05-23 21:53:45",
    "errors": 0,
    "student": {
      "id": 14
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-23 10:30:47",
    "finished_at": "2025-05-23 10:33:37",
    "errors": 1,
    "student": {
      "id": 14
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-23 13:21:58",
    "finished_at": "2025-05-23 13:22:31",
    "errors": 0,
    "student": {
      "id": 14
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-23 09:43:11",
    "finished_at": "2025-05-23 09:43:22",
    "errors": 1,
    "student": {
      "id": 14
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-23 10:37:49",
    "finished_at": "2025-05-23 10:39:43",
    "errors": 1,
    "student": {
      "id": 14
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-23 15:55:54",
    "finished_at": "2025-05-23 15:58:22",
    "errors": 0,
    "student": {
      "id": 14
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-23 10:54:26",
    "finished_at": "2025-05-23 10:56:25",
    "errors": 0,
    "student": {
      "id": 14
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-23 08:04:31",
    "finished_at": "2025-05-23 08:04:56",
    "errors": 0,
    "student": {
      "id": 14
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-23 08:12:45",
    "finished_at": "2025-05-23 08:15:34",
    "errors": 1,
    "student": {
      "id": 14
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-23 17:45:37",
    "finished_at": "2025-05-23 17:48:06",
    "errors": 1,
    "student": {
      "id": 14
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-01 20:53:57",
    "finished_at": "2025-05-01 20:56:38",
    "errors": 1,
    "student": {
      "id": 14
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-01 18:00:12",
    "finished_at": "2025-05-01 18:02:06",
    "errors": 0,
    "student": {
      "id": 14
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-01 16:58:52",
    "finished_at": "2025-05-01 16:59:02",
    "errors": 0,
    "student": {
      "id": 14
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-01 12:09:22",
    "finished_at": "2025-05-01 12:10:38",
    "errors": 0,
    "student": {
      "id": 14
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-01 19:18:19",
    "finished_at": "2025-05-01 19:20:42",
    "errors": 1,
    "student": {
      "id": 14
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-01 15:19:57",
    "finished_at": "2025-05-01 15:22:37",
    "errors": 0,
    "student": {
      "id": 14
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-01 15:34:58",
    "finished_at": "2025-05-01 15:36:32",
    "errors": 1,
    "student": {
      "id": 14
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-01 10:50:55",
    "finished_at": "2025-05-01 10:51:21",
    "errors": 1,
    "student": {
      "id": 14
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-01 12:10:23",
    "finished_at": "2025-05-01 12:12:42",
    "errors": 0,
    "student": {
      "id": 14
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-01 16:54:09",
    "finished_at": "2025-05-01 16:56:55",
    "errors": 0,
    "student": {
      "id": 14
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-04 16:57:06",
    "finished_at": "2025-05-04 16:59:12",
    "errors": 1,
    "student": {
      "id": 15
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-04 11:08:36",
    "finished_at": "2025-05-04 11:10:48",
    "errors": 0,
    "student": {
      "id": 15
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-04 17:57:49",
    "finished_at": "2025-05-04 17:59:08",
    "errors": 1,
    "student": {
      "id": 15
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-04 08:39:22",
    "finished_at": "2025-05-04 08:41:08",
    "errors": 0,
    "student": {
      "id": 15
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-04 13:21:44",
    "finished_at": "2025-05-04 13:22:34",
    "errors": 1,
    "student": {
      "id": 15
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-04 08:57:34",
    "finished_at": "2025-05-04 08:58:12",
    "errors": 0,
    "student": {
      "id": 15
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-04 21:23:18",
    "finished_at": "2025-05-04 21:25:17",
    "errors": 1,
    "student": {
      "id": 15
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-04 12:25:25",
    "finished_at": "2025-05-04 12:27:33",
    "errors": 0,
    "student": {
      "id": 15
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-04 19:10:08",
    "finished_at": "2025-05-04 19:10:38",
    "errors": 0,
    "student": {
      "id": 15
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-04 13:18:19",
    "finished_at": "2025-05-04 13:18:39",
    "errors": 1,
    "student": {
      "id": 15
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-09 10:57:27",
    "finished_at": "2025-05-09 10:58:30",
    "errors": 0,
    "student": {
      "id": 15
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-09 09:15:01",
    "finished_at": "2025-05-09 09:16:54",
    "errors": 0,
    "student": {
      "id": 15
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-09 19:23:50",
    "finished_at": "2025-05-09 19:26:15",
    "errors": 1,
    "student": {
      "id": 15
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-09 21:01:47",
    "finished_at": "2025-05-09 21:03:04",
    "errors": 0,
    "student": {
      "id": 15
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-09 10:03:57",
    "finished_at": "2025-05-09 10:04:08",
    "errors": 0,
    "student": {
      "id": 15
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-09 12:15:54",
    "finished_at": "2025-05-09 12:18:38",
    "errors": 0,
    "student": {
      "id": 15
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-09 19:16:06",
    "finished_at": "2025-05-09 19:16:57",
    "errors": 0,
    "student": {
      "id": 15
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-09 11:32:56",
    "finished_at": "2025-05-09 11:34:44",
    "errors": 0,
    "student": {
      "id": 15
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-09 16:14:47",
    "finished_at": "2025-05-09 16:16:44",
    "errors": 0,
    "student": {
      "id": 15
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-09 10:25:01",
    "finished_at": "2025-05-09 10:25:29",
    "errors": 1,
    "student": {
      "id": 15
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-24 21:47:38",
    "finished_at": "2025-05-24 21:49:58",
    "errors": 0,
    "student": {
      "id": 16
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-24 08:41:24",
    "finished_at": "2025-05-24 08:42:55",
    "errors": 1,
    "student": {
      "id": 16
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-24 13:49:38",
    "finished_at": "2025-05-24 13:50:15",
    "errors": 0,
    "student": {
      "id": 16
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-24 18:00:38",
    "finished_at": "2025-05-24 18:03:16",
    "errors": 1,
    "student": {
      "id": 16
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-24 21:44:33",
    "finished_at": "2025-05-24 21:46:27",
    "errors": 1,
    "student": {
      "id": 16
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-24 08:23:11",
    "finished_at": "2025-05-24 08:23:37",
    "errors": 1,
    "student": {
      "id": 16
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-24 10:14:03",
    "finished_at": "2025-05-24 10:14:17",
    "errors": 1,
    "student": {
      "id": 16
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-24 12:58:43",
    "finished_at": "2025-05-24 12:59:43",
    "errors": 1,
    "student": {
      "id": 16
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-24 19:40:12",
    "finished_at": "2025-05-24 19:41:36",
    "errors": 1,
    "student": {
      "id": 16
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-24 18:46:34",
    "finished_at": "2025-05-24 18:49:06",
    "errors": 0,
    "student": {
      "id": 16
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-12 19:20:15",
    "finished_at": "2025-05-12 19:21:09",
    "errors": 0,
    "student": {
      "id": 16
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-12 15:21:23",
    "finished_at": "2025-05-12 15:21:54",
    "errors": 0,
    "student": {
      "id": 16
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-12 14:41:04",
    "finished_at": "2025-05-12 14:43:50",
    "errors": 0,
    "student": {
      "id": 16
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-12 11:12:05",
    "finished_at": "2025-05-12 11:14:36",
    "errors": 0,
    "student": {
      "id": 16
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-12 19:04:36",
    "finished_at": "2025-05-12 19:05:29",
    "errors": 0,
    "student": {
      "id": 16
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-12 09:44:24",
    "finished_at": "2025-05-12 09:45:14",
    "errors": 0,
    "student": {
      "id": 16
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-12 09:26:19",
    "finished_at": "2025-05-12 09:27:00",
    "errors": 1,
    "student": {
      "id": 16
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-12 08:02:49",
    "finished_at": "2025-05-12 08:03:12",
    "errors": 1,
    "student": {
      "id": 16
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-12 21:53:46",
    "finished_at": "2025-05-12 21:53:56",
    "errors": 0,
    "student": {
      "id": 16
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-12 12:17:21",
    "finished_at": "2025-05-12 12:20:10",
    "errors": 0,
    "student": {
      "id": 16
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-17 13:42:25",
    "finished_at": "2025-05-17 13:44:35",
    "errors": 1,
    "student": {
      "id": 17
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-17 15:13:25",
    "finished_at": "2025-05-17 15:15:29",
    "errors": 0,
    "student": {
      "id": 17
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-17 15:16:36",
    "finished_at": "2025-05-17 15:17:58",
    "errors": 0,
    "student": {
      "id": 17
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-17 13:25:04",
    "finished_at": "2025-05-17 13:26:07",
    "errors": 1,
    "student": {
      "id": 17
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-17 12:56:22",
    "finished_at": "2025-05-17 12:59:01",
    "errors": 1,
    "student": {
      "id": 17
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-17 19:49:37",
    "finished_at": "2025-05-17 19:50:47",
    "errors": 1,
    "student": {
      "id": 17
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-17 11:46:32",
    "finished_at": "2025-05-17 11:47:00",
    "errors": 0,
    "student": {
      "id": 17
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-17 10:39:35",
    "finished_at": "2025-05-17 10:42:18",
    "errors": 0,
    "student": {
      "id": 17
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-17 18:51:23",
    "finished_at": "2025-05-17 18:54:23",
    "errors": 0,
    "student": {
      "id": 17
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-17 16:40:54",
    "finished_at": "2025-05-17 16:42:46",
    "errors": 0,
    "student": {
      "id": 17
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-05 14:40:32",
    "finished_at": "2025-05-05 14:41:49",
    "errors": 0,
    "student": {
      "id": 17
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-05 15:54:23",
    "finished_at": "2025-05-05 15:55:48",
    "errors": 0,
    "student": {
      "id": 17
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-05 21:51:13",
    "finished_at": "2025-05-05 21:51:26",
    "errors": 0,
    "student": {
      "id": 17
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-05 18:13:26",
    "finished_at": "2025-05-05 18:15:05",
    "errors": 0,
    "student": {
      "id": 17
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-05 20:08:24",
    "finished_at": "2025-05-05 20:10:58",
    "errors": 0,
    "student": {
      "id": 17
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-05 17:34:07",
    "finished_at": "2025-05-05 17:36:44",
    "errors": 0,
    "student": {
      "id": 17
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-05 19:40:38",
    "finished_at": "2025-05-05 19:42:32",
    "errors": 0,
    "student": {
      "id": 17
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-05 19:01:04",
    "finished_at": "2025-05-05 19:03:53",
    "errors": 1,
    "student": {
      "id": 17
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-05 21:04:34",
    "finished_at": "2025-05-05 21:06:59",
    "errors": 0,
    "student": {
      "id": 17
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-05 14:22:11",
    "finished_at": "2025-05-05 14:24:46",
    "errors": 1,
    "student": {
      "id": 17
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-09 14:56:11",
    "finished_at": "2025-05-09 14:56:48",
    "errors": 0,
    "student": {
      "id": 18
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-09 11:00:59",
    "finished_at": "2025-05-09 11:03:13",
    "errors": 0,
    "student": {
      "id": 18
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-09 16:35:16",
    "finished_at": "2025-05-09 16:36:08",
    "errors": 0,
    "student": {
      "id": 18
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-09 14:23:18",
    "finished_at": "2025-05-09 14:25:00",
    "errors": 0,
    "student": {
      "id": 18
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-09 14:55:15",
    "finished_at": "2025-05-09 14:56:25",
    "errors": 1,
    "student": {
      "id": 18
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-09 21:50:09",
    "finished_at": "2025-05-09 21:51:42",
    "errors": 1,
    "student": {
      "id": 18
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-09 09:04:22",
    "finished_at": "2025-05-09 09:05:25",
    "errors": 0,
    "student": {
      "id": 18
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-09 16:32:34",
    "finished_at": "2025-05-09 16:35:10",
    "errors": 1,
    "student": {
      "id": 18
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-09 21:22:38",
    "finished_at": "2025-05-09 21:23:48",
    "errors": 0,
    "student": {
      "id": 18
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-09 10:54:35",
    "finished_at": "2025-05-09 10:56:31",
    "errors": 1,
    "student": {
      "id": 18
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-01 12:19:29",
    "finished_at": "2025-05-01 12:19:53",
    "errors": 0,
    "student": {
      "id": 18
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-01 18:28:26",
    "finished_at": "2025-05-01 18:30:20",
    "errors": 1,
    "student": {
      "id": 18
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-01 13:00:36",
    "finished_at": "2025-05-01 13:02:23",
    "errors": 0,
    "student": {
      "id": 18
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-01 10:35:03",
    "finished_at": "2025-05-01 10:37:13",
    "errors": 0,
    "student": {
      "id": 18
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-01 19:35:37",
    "finished_at": "2025-05-01 19:36:27",
    "errors": 1,
    "student": {
      "id": 18
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-01 21:36:11",
    "finished_at": "2025-05-01 21:39:10",
    "errors": 1,
    "student": {
      "id": 18
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-01 21:36:33",
    "finished_at": "2025-05-01 21:38:28",
    "errors": 1,
    "student": {
      "id": 18
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-01 19:12:36",
    "finished_at": "2025-05-01 19:15:36",
    "errors": 1,
    "student": {
      "id": 18
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-01 16:36:27",
    "finished_at": "2025-05-01 16:37:07",
    "errors": 1,
    "student": {
      "id": 18
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-01 18:01:54",
    "finished_at": "2025-05-01 18:02:16",
    "errors": 0,
    "student": {
      "id": 18
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-18 17:55:02",
    "finished_at": "2025-05-18 17:57:27",
    "errors": 1,
    "student": {
      "id": 19
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-18 09:15:34",
    "finished_at": "2025-05-18 09:16:20",
    "errors": 0,
    "student": {
      "id": 19
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-18 20:41:02",
    "finished_at": "2025-05-18 20:42:47",
    "errors": 0,
    "student": {
      "id": 19
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-18 09:30:24",
    "finished_at": "2025-05-18 09:33:09",
    "errors": 1,
    "student": {
      "id": 19
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-18 18:58:46",
    "finished_at": "2025-05-18 19:00:08",
    "errors": 0,
    "student": {
      "id": 19
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-18 12:57:40",
    "finished_at": "2025-05-18 12:59:01",
    "errors": 1,
    "student": {
      "id": 19
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-18 09:11:57",
    "finished_at": "2025-05-18 09:14:08",
    "errors": 0,
    "student": {
      "id": 19
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-18 17:44:06",
    "finished_at": "2025-05-18 17:45:14",
    "errors": 0,
    "student": {
      "id": 19
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-18 08:02:59",
    "finished_at": "2025-05-18 08:05:42",
    "errors": 1,
    "student": {
      "id": 19
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-18 17:00:48",
    "finished_at": "2025-05-18 17:01:46",
    "errors": 1,
    "student": {
      "id": 19
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-05 13:39:23",
    "finished_at": "2025-05-05 13:42:16",
    "errors": 0,
    "student": {
      "id": 19
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-05 09:47:46",
    "finished_at": "2025-05-05 09:50:04",
    "errors": 0,
    "student": {
      "id": 19
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-05 18:15:33",
    "finished_at": "2025-05-05 18:18:24",
    "errors": 1,
    "student": {
      "id": 19
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-05 08:58:50",
    "finished_at": "2025-05-05 08:59:56",
    "errors": 1,
    "student": {
      "id": 19
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-05 21:59:00",
    "finished_at": "2025-05-05 22:00:52",
    "errors": 1,
    "student": {
      "id": 19
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-05 15:18:21",
    "finished_at": "2025-05-05 15:21:12",
    "errors": 0,
    "student": {
      "id": 19
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-05 10:21:31",
    "finished_at": "2025-05-05 10:23:20",
    "errors": 1,
    "student": {
      "id": 19
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-05 14:13:31",
    "finished_at": "2025-05-05 14:13:43",
    "errors": 0,
    "student": {
      "id": 19
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-05 18:13:15",
    "finished_at": "2025-05-05 18:15:41",
    "errors": 0,
    "student": {
      "id": 19
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-05 10:58:10",
    "finished_at": "2025-05-05 11:00:18",
    "errors": 0,
    "student": {
      "id": 19
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-27 12:02:53",
    "finished_at": "2025-05-27 12:03:21",
    "errors": 1,
    "student": {
      "id": 20
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-27 15:47:36",
    "finished_at": "2025-05-27 15:48:29",
    "errors": 1,
    "student": {
      "id": 20
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-27 13:17:31",
    "finished_at": "2025-05-27 13:17:46",
    "errors": 0,
    "student": {
      "id": 20
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-27 09:52:10",
    "finished_at": "2025-05-27 09:53:23",
    "errors": 1,
    "student": {
      "id": 20
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-27 19:04:06",
    "finished_at": "2025-05-27 19:05:14",
    "errors": 1,
    "student": {
      "id": 20
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-27 08:56:12",
    "finished_at": "2025-05-27 08:57:19",
    "errors": 0,
    "student": {
      "id": 20
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-27 16:30:50",
    "finished_at": "2025-05-27 16:32:36",
    "errors": 0,
    "student": {
      "id": 20
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-27 10:59:24",
    "finished_at": "2025-05-27 11:02:24",
    "errors": 1,
    "student": {
      "id": 20
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-27 13:20:52",
    "finished_at": "2025-05-27 13:23:28",
    "errors": 1,
    "student": {
      "id": 20
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-27 10:54:59",
    "finished_at": "2025-05-27 10:56:42",
    "errors": 1,
    "student": {
      "id": 20
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-25 08:24:23",
    "finished_at": "2025-05-25 08:25:18",
    "errors": 1,
    "student": {
      "id": 20
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-25 12:07:14",
    "finished_at": "2025-05-25 12:07:40",
    "errors": 1,
    "student": {
      "id": 20
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-25 11:29:41",
    "finished_at": "2025-05-25 11:32:09",
    "errors": 1,
    "student": {
      "id": 20
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-25 18:00:39",
    "finished_at": "2025-05-25 18:01:04",
    "errors": 0,
    "student": {
      "id": 20
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-25 15:42:27",
    "finished_at": "2025-05-25 15:43:26",
    "errors": 0,
    "student": {
      "id": 20
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-25 12:01:07",
    "finished_at": "2025-05-25 12:03:57",
    "errors": 0,
    "student": {
      "id": 20
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-25 20:01:07",
    "finished_at": "2025-05-25 20:03:43",
    "errors": 0,
    "student": {
      "id": 20
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-25 18:27:35",
    "finished_at": "2025-05-25 18:29:03",
    "errors": 1,
    "student": {
      "id": 20
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-25 12:00:06",
    "finished_at": "2025-05-25 12:02:43",
    "errors": 1,
    "student": {
      "id": 20
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-25 14:54:29",
    "finished_at": "2025-05-25 14:55:08",
    "errors": 0,
    "student": {
      "id": 20
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-11 13:26:26",
    "finished_at": "2025-05-11 13:28:38",
    "errors": 1,
    "student": {
      "id": 21
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-11 13:11:53",
    "finished_at": "2025-05-11 13:13:13",
    "errors": 1,
    "student": {
      "id": 21
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-11 10:01:51",
    "finished_at": "2025-05-11 10:03:25",
    "errors": 0,
    "student": {
      "id": 21
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-11 16:07:02",
    "finished_at": "2025-05-11 16:09:00",
    "errors": 0,
    "student": {
      "id": 21
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-11 17:13:17",
    "finished_at": "2025-05-11 17:13:41",
    "errors": 0,
    "student": {
      "id": 21
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-11 18:09:56",
    "finished_at": "2025-05-11 18:12:53",
    "errors": 0,
    "student": {
      "id": 21
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-11 12:53:39",
    "finished_at": "2025-05-11 12:55:49",
    "errors": 0,
    "student": {
      "id": 21
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-11 11:20:36",
    "finished_at": "2025-05-11 11:22:07",
    "errors": 0,
    "student": {
      "id": 21
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-11 20:40:40",
    "finished_at": "2025-05-11 20:41:31",
    "errors": 1,
    "student": {
      "id": 21
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-11 20:46:15",
    "finished_at": "2025-05-11 20:47:44",
    "errors": 0,
    "student": {
      "id": 21
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-28 13:43:22",
    "finished_at": "2025-05-28 13:45:13",
    "errors": 0,
    "student": {
      "id": 21
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-28 09:47:18",
    "finished_at": "2025-05-28 09:49:31",
    "errors": 0,
    "student": {
      "id": 21
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-28 18:21:31",
    "finished_at": "2025-05-28 18:23:26",
    "errors": 1,
    "student": {
      "id": 21
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-28 10:52:07",
    "finished_at": "2025-05-28 10:53:01",
    "errors": 1,
    "student": {
      "id": 21
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-28 17:19:20",
    "finished_at": "2025-05-28 17:21:23",
    "errors": 1,
    "student": {
      "id": 21
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-28 11:46:21",
    "finished_at": "2025-05-28 11:49:01",
    "errors": 1,
    "student": {
      "id": 21
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-28 20:40:38",
    "finished_at": "2025-05-28 20:42:29",
    "errors": 1,
    "student": {
      "id": 21
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-28 11:53:36",
    "finished_at": "2025-05-28 11:55:15",
    "errors": 1,
    "student": {
      "id": 21
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-28 11:56:26",
    "finished_at": "2025-05-28 11:56:36",
    "errors": 0,
    "student": {
      "id": 21
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-28 20:42:39",
    "finished_at": "2025-05-28 20:44:51",
    "errors": 0,
    "student": {
      "id": 21
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-29 13:35:51",
    "finished_at": "2025-05-29 13:36:57",
    "errors": 0,
    "student": {
      "id": 22
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-29 17:25:08",
    "finished_at": "2025-05-29 17:25:31",
    "errors": 0,
    "student": {
      "id": 22
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-29 11:28:23",
    "finished_at": "2025-05-29 11:30:44",
    "errors": 1,
    "student": {
      "id": 22
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-29 12:41:21",
    "finished_at": "2025-05-29 12:43:33",
    "errors": 1,
    "student": {
      "id": 22
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-29 08:20:03",
    "finished_at": "2025-05-29 08:20:32",
    "errors": 1,
    "student": {
      "id": 22
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-29 12:05:09",
    "finished_at": "2025-05-29 12:06:38",
    "errors": 1,
    "student": {
      "id": 22
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-29 08:06:23",
    "finished_at": "2025-05-29 08:08:18",
    "errors": 0,
    "student": {
      "id": 22
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-29 14:18:05",
    "finished_at": "2025-05-29 14:20:34",
    "errors": 0,
    "student": {
      "id": 22
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-29 21:33:05",
    "finished_at": "2025-05-29 21:33:40",
    "errors": 0,
    "student": {
      "id": 22
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-29 10:02:00",
    "finished_at": "2025-05-29 10:03:40",
    "errors": 0,
    "student": {
      "id": 22
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-21 11:17:51",
    "finished_at": "2025-05-21 11:19:12",
    "errors": 0,
    "student": {
      "id": 22
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-21 09:01:24",
    "finished_at": "2025-05-21 09:02:51",
    "errors": 1,
    "student": {
      "id": 22
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-21 11:31:54",
    "finished_at": "2025-05-21 11:32:05",
    "errors": 1,
    "student": {
      "id": 22
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-21 11:45:50",
    "finished_at": "2025-05-21 11:46:14",
    "errors": 1,
    "student": {
      "id": 22
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-21 09:21:38",
    "finished_at": "2025-05-21 09:23:27",
    "errors": 0,
    "student": {
      "id": 22
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-21 11:28:27",
    "finished_at": "2025-05-21 11:30:59",
    "errors": 1,
    "student": {
      "id": 22
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-21 11:04:14",
    "finished_at": "2025-05-21 11:04:28",
    "errors": 0,
    "student": {
      "id": 22
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-21 18:11:44",
    "finished_at": "2025-05-21 18:12:43",
    "errors": 0,
    "student": {
      "id": 22
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-21 08:53:16",
    "finished_at": "2025-05-21 08:54:44",
    "errors": 1,
    "student": {
      "id": 22
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-21 15:02:34",
    "finished_at": "2025-05-21 15:03:32",
    "errors": 0,
    "student": {
      "id": 22
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-13 19:52:34",
    "finished_at": "2025-05-13 19:53:07",
    "errors": 0,
    "student": {
      "id": 23
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-13 13:21:34",
    "finished_at": "2025-05-13 13:22:35",
    "errors": 0,
    "student": {
      "id": 23
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-13 09:05:22",
    "finished_at": "2025-05-13 09:07:41",
    "errors": 1,
    "student": {
      "id": 23
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-13 08:05:26",
    "finished_at": "2025-05-13 08:07:16",
    "errors": 1,
    "student": {
      "id": 23
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-13 10:54:12",
    "finished_at": "2025-05-13 10:55:42",
    "errors": 1,
    "student": {
      "id": 23
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-13 11:53:37",
    "finished_at": "2025-05-13 11:55:31",
    "errors": 0,
    "student": {
      "id": 23
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-13 08:08:14",
    "finished_at": "2025-05-13 08:11:01",
    "errors": 0,
    "student": {
      "id": 23
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-13 20:38:58",
    "finished_at": "2025-05-13 20:39:17",
    "errors": 0,
    "student": {
      "id": 23
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-13 17:22:57",
    "finished_at": "2025-05-13 17:23:49",
    "errors": 0,
    "student": {
      "id": 23
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-13 11:19:38",
    "finished_at": "2025-05-13 11:22:00",
    "errors": 0,
    "student": {
      "id": 23
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-27 19:09:20",
    "finished_at": "2025-05-27 19:10:59",
    "errors": 0,
    "student": {
      "id": 23
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-27 17:33:51",
    "finished_at": "2025-05-27 17:35:56",
    "errors": 0,
    "student": {
      "id": 23
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-27 20:45:23",
    "finished_at": "2025-05-27 20:47:03",
    "errors": 1,
    "student": {
      "id": 23
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-27 15:05:23",
    "finished_at": "2025-05-27 15:07:25",
    "errors": 0,
    "student": {
      "id": 23
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-27 13:13:47",
    "finished_at": "2025-05-27 13:15:34",
    "errors": 1,
    "student": {
      "id": 23
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-27 13:43:08",
    "finished_at": "2025-05-27 13:45:33",
    "errors": 0,
    "student": {
      "id": 23
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-27 09:30:44",
    "finished_at": "2025-05-27 09:32:09",
    "errors": 0,
    "student": {
      "id": 23
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-27 09:58:21",
    "finished_at": "2025-05-27 10:01:00",
    "errors": 0,
    "student": {
      "id": 23
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-27 12:37:51",
    "finished_at": "2025-05-27 12:40:13",
    "errors": 1,
    "student": {
      "id": 23
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-27 14:39:50",
    "finished_at": "2025-05-27 14:42:45",
    "errors": 1,
    "student": {
      "id": 23
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-01 18:23:04",
    "finished_at": "2025-05-01 18:24:42",
    "errors": 1,
    "student": {
      "id": 24
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-01 12:33:29",
    "finished_at": "2025-05-01 12:34:09",
    "errors": 0,
    "student": {
      "id": 24
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-01 13:35:33",
    "finished_at": "2025-05-01 13:36:44",
    "errors": 1,
    "student": {
      "id": 24
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-01 08:47:01",
    "finished_at": "2025-05-01 08:47:42",
    "errors": 1,
    "student": {
      "id": 24
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-01 12:43:49",
    "finished_at": "2025-05-01 12:46:32",
    "errors": 1,
    "student": {
      "id": 24
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-01 21:42:47",
    "finished_at": "2025-05-01 21:44:41",
    "errors": 1,
    "student": {
      "id": 24
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-01 20:32:11",
    "finished_at": "2025-05-01 20:33:34",
    "errors": 1,
    "student": {
      "id": 24
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-01 15:00:25",
    "finished_at": "2025-05-01 15:02:15",
    "errors": 1,
    "student": {
      "id": 24
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-01 10:38:47",
    "finished_at": "2025-05-01 10:40:19",
    "errors": 0,
    "student": {
      "id": 24
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-01 09:48:07",
    "finished_at": "2025-05-01 09:50:05",
    "errors": 0,
    "student": {
      "id": 24
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-29 08:23:08",
    "finished_at": "2025-05-29 08:25:14",
    "errors": 1,
    "student": {
      "id": 24
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-29 17:12:58",
    "finished_at": "2025-05-29 17:15:40",
    "errors": 0,
    "student": {
      "id": 24
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-29 12:20:40",
    "finished_at": "2025-05-29 12:22:42",
    "errors": 1,
    "student": {
      "id": 24
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-29 16:54:31",
    "finished_at": "2025-05-29 16:54:42",
    "errors": 0,
    "student": {
      "id": 24
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-29 14:05:52",
    "finished_at": "2025-05-29 14:06:31",
    "errors": 1,
    "student": {
      "id": 24
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-29 18:42:07",
    "finished_at": "2025-05-29 18:44:22",
    "errors": 0,
    "student": {
      "id": 24
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-29 18:38:33",
    "finished_at": "2025-05-29 18:38:57",
    "errors": 1,
    "student": {
      "id": 24
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-29 20:29:34",
    "finished_at": "2025-05-29 20:31:45",
    "errors": 1,
    "student": {
      "id": 24
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-29 08:59:38",
    "finished_at": "2025-05-29 09:01:19",
    "errors": 0,
    "student": {
      "id": 24
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-29 15:02:37",
    "finished_at": "2025-05-29 15:03:58",
    "errors": 0,
    "student": {
      "id": 24
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-28 09:56:11",
    "finished_at": "2025-05-28 09:58:46",
    "errors": 1,
    "student": {
      "id": 25
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-28 20:56:31",
    "finished_at": "2025-05-28 20:57:42",
    "errors": 1,
    "student": {
      "id": 25
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-28 16:38:11",
    "finished_at": "2025-05-28 16:38:48",
    "errors": 1,
    "student": {
      "id": 25
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-28 18:43:07",
    "finished_at": "2025-05-28 18:45:39",
    "errors": 0,
    "student": {
      "id": 25
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-28 14:44:49",
    "finished_at": "2025-05-28 14:46:01",
    "errors": 0,
    "student": {
      "id": 25
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-28 08:55:53",
    "finished_at": "2025-05-28 08:57:34",
    "errors": 1,
    "student": {
      "id": 25
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-28 08:09:33",
    "finished_at": "2025-05-28 08:12:05",
    "errors": 1,
    "student": {
      "id": 25
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-28 12:55:20",
    "finished_at": "2025-05-28 12:57:42",
    "errors": 0,
    "student": {
      "id": 25
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-28 15:35:18",
    "finished_at": "2025-05-28 15:37:06",
    "errors": 0,
    "student": {
      "id": 25
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-28 11:55:46",
    "finished_at": "2025-05-28 11:58:42",
    "errors": 1,
    "student": {
      "id": 25
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-15 13:18:37",
    "finished_at": "2025-05-15 13:20:37",
    "errors": 1,
    "student": {
      "id": 25
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-15 15:23:25",
    "finished_at": "2025-05-15 15:25:58",
    "errors": 0,
    "student": {
      "id": 25
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-15 12:29:46",
    "finished_at": "2025-05-15 12:32:01",
    "errors": 0,
    "student": {
      "id": 25
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-15 19:35:09",
    "finished_at": "2025-05-15 19:35:22",
    "errors": 0,
    "student": {
      "id": 25
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-15 13:23:35",
    "finished_at": "2025-05-15 13:24:20",
    "errors": 1,
    "student": {
      "id": 25
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-15 15:09:56",
    "finished_at": "2025-05-15 15:10:59",
    "errors": 1,
    "student": {
      "id": 25
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-15 21:23:47",
    "finished_at": "2025-05-15 21:25:07",
    "errors": 0,
    "student": {
      "id": 25
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-15 14:33:03",
    "finished_at": "2025-05-15 14:33:43",
    "errors": 0,
    "student": {
      "id": 25
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-15 17:55:16",
    "finished_at": "2025-05-15 17:56:31",
    "errors": 1,
    "student": {
      "id": 25
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-15 09:30:53",
    "finished_at": "2025-05-15 09:31:59",
    "errors": 0,
    "student": {
      "id": 25
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-25 13:48:47",
    "finished_at": "2025-05-25 13:50:15",
    "errors": 1,
    "student": {
      "id": 26
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-25 14:56:48",
    "finished_at": "2025-05-25 14:58:05",
    "errors": 1,
    "student": {
      "id": 26
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-25 20:05:32",
    "finished_at": "2025-05-25 20:07:41",
    "errors": 1,
    "student": {
      "id": 26
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-25 08:52:01",
    "finished_at": "2025-05-25 08:53:43",
    "errors": 1,
    "student": {
      "id": 26
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-25 08:07:14",
    "finished_at": "2025-05-25 08:08:13",
    "errors": 1,
    "student": {
      "id": 26
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-25 18:24:01",
    "finished_at": "2025-05-25 18:24:31",
    "errors": 1,
    "student": {
      "id": 26
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-25 10:20:29",
    "finished_at": "2025-05-25 10:21:11",
    "errors": 1,
    "student": {
      "id": 26
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-25 12:16:26",
    "finished_at": "2025-05-25 12:17:56",
    "errors": 1,
    "student": {
      "id": 26
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-25 17:47:06",
    "finished_at": "2025-05-25 17:47:27",
    "errors": 1,
    "student": {
      "id": 26
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-25 21:23:31",
    "finished_at": "2025-05-25 21:26:22",
    "errors": 1,
    "student": {
      "id": 26
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-29 15:23:52",
    "finished_at": "2025-05-29 15:25:24",
    "errors": 1,
    "student": {
      "id": 26
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-29 17:51:32",
    "finished_at": "2025-05-29 17:52:13",
    "errors": 1,
    "student": {
      "id": 26
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-29 12:24:21",
    "finished_at": "2025-05-29 12:25:24",
    "errors": 0,
    "student": {
      "id": 26
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-29 18:37:53",
    "finished_at": "2025-05-29 18:38:51",
    "errors": 1,
    "student": {
      "id": 26
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-29 17:45:22",
    "finished_at": "2025-05-29 17:48:11",
    "errors": 1,
    "student": {
      "id": 26
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-29 11:07:59",
    "finished_at": "2025-05-29 11:08:56",
    "errors": 0,
    "student": {
      "id": 26
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-29 18:18:07",
    "finished_at": "2025-05-29 18:18:20",
    "errors": 0,
    "student": {
      "id": 26
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-29 18:27:02",
    "finished_at": "2025-05-29 18:27:45",
    "errors": 0,
    "student": {
      "id": 26
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-29 16:03:13",
    "finished_at": "2025-05-29 16:04:05",
    "errors": 0,
    "student": {
      "id": 26
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-29 14:09:07",
    "finished_at": "2025-05-29 14:10:29",
    "errors": 1,
    "student": {
      "id": 26
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-06 18:13:50",
    "finished_at": "2025-05-06 18:15:03",
    "errors": 0,
    "student": {
      "id": 27
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-06 09:54:55",
    "finished_at": "2025-05-06 09:56:57",
    "errors": 0,
    "student": {
      "id": 27
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-06 18:03:47",
    "finished_at": "2025-05-06 18:06:02",
    "errors": 1,
    "student": {
      "id": 27
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-06 10:03:39",
    "finished_at": "2025-05-06 10:04:12",
    "errors": 1,
    "student": {
      "id": 27
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-06 14:56:27",
    "finished_at": "2025-05-06 14:59:18",
    "errors": 1,
    "student": {
      "id": 27
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-06 14:43:55",
    "finished_at": "2025-05-06 14:44:48",
    "errors": 0,
    "student": {
      "id": 27
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-06 10:53:56",
    "finished_at": "2025-05-06 10:56:33",
    "errors": 0,
    "student": {
      "id": 27
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-06 11:17:20",
    "finished_at": "2025-05-06 11:18:36",
    "errors": 0,
    "student": {
      "id": 27
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-06 09:27:09",
    "finished_at": "2025-05-06 09:29:04",
    "errors": 0,
    "student": {
      "id": 27
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-06 15:50:33",
    "finished_at": "2025-05-06 15:53:03",
    "errors": 1,
    "student": {
      "id": 27
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-17 09:17:26",
    "finished_at": "2025-05-17 09:20:18",
    "errors": 1,
    "student": {
      "id": 27
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-17 21:17:11",
    "finished_at": "2025-05-17 21:18:23",
    "errors": 1,
    "student": {
      "id": 27
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-17 21:44:09",
    "finished_at": "2025-05-17 21:47:04",
    "errors": 0,
    "student": {
      "id": 27
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-17 09:32:05",
    "finished_at": "2025-05-17 09:33:39",
    "errors": 0,
    "student": {
      "id": 27
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-17 18:14:32",
    "finished_at": "2025-05-17 18:15:06",
    "errors": 1,
    "student": {
      "id": 27
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-17 20:28:06",
    "finished_at": "2025-05-17 20:28:43",
    "errors": 1,
    "student": {
      "id": 27
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-17 20:35:18",
    "finished_at": "2025-05-17 20:37:54",
    "errors": 0,
    "student": {
      "id": 27
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-17 11:32:57",
    "finished_at": "2025-05-17 11:34:08",
    "errors": 1,
    "student": {
      "id": 27
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-17 14:22:32",
    "finished_at": "2025-05-17 14:24:14",
    "errors": 1,
    "student": {
      "id": 27
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-17 15:33:20",
    "finished_at": "2025-05-17 15:33:51",
    "errors": 0,
    "student": {
      "id": 27
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-15 16:56:01",
    "finished_at": "2025-05-15 16:57:51",
    "errors": 1,
    "student": {
      "id": 28
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-15 20:00:38",
    "finished_at": "2025-05-15 20:03:27",
    "errors": 0,
    "student": {
      "id": 28
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-15 20:21:11",
    "finished_at": "2025-05-15 20:24:11",
    "errors": 0,
    "student": {
      "id": 28
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-15 17:35:31",
    "finished_at": "2025-05-15 17:37:46",
    "errors": 1,
    "student": {
      "id": 28
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-15 14:53:07",
    "finished_at": "2025-05-15 14:53:30",
    "errors": 1,
    "student": {
      "id": 28
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-15 20:21:00",
    "finished_at": "2025-05-15 20:22:45",
    "errors": 0,
    "student": {
      "id": 28
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-15 12:38:50",
    "finished_at": "2025-05-15 12:39:48",
    "errors": 0,
    "student": {
      "id": 28
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-15 16:17:40",
    "finished_at": "2025-05-15 16:19:45",
    "errors": 1,
    "student": {
      "id": 28
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-15 20:30:24",
    "finished_at": "2025-05-15 20:31:02",
    "errors": 1,
    "student": {
      "id": 28
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-15 21:48:09",
    "finished_at": "2025-05-15 21:48:29",
    "errors": 0,
    "student": {
      "id": 28
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-27 16:53:43",
    "finished_at": "2025-05-27 16:55:59",
    "errors": 0,
    "student": {
      "id": 28
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-27 18:19:55",
    "finished_at": "2025-05-27 18:22:03",
    "errors": 1,
    "student": {
      "id": 28
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-27 15:24:07",
    "finished_at": "2025-05-27 15:25:19",
    "errors": 1,
    "student": {
      "id": 28
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-27 12:04:23",
    "finished_at": "2025-05-27 12:05:06",
    "errors": 1,
    "student": {
      "id": 28
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-27 19:37:55",
    "finished_at": "2025-05-27 19:39:31",
    "errors": 1,
    "student": {
      "id": 28
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-27 15:15:56",
    "finished_at": "2025-05-27 15:17:24",
    "errors": 1,
    "student": {
      "id": 28
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-27 18:05:32",
    "finished_at": "2025-05-27 18:08:09",
    "errors": 1,
    "student": {
      "id": 28
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-27 08:29:03",
    "finished_at": "2025-05-27 08:31:38",
    "errors": 0,
    "student": {
      "id": 28
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-27 09:07:46",
    "finished_at": "2025-05-27 09:08:21",
    "errors": 1,
    "student": {
      "id": 28
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-27 12:53:33",
    "finished_at": "2025-05-27 12:54:27",
    "errors": 1,
    "student": {
      "id": 28
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-03 10:29:13",
    "finished_at": "2025-05-03 10:31:05",
    "errors": 1,
    "student": {
      "id": 29
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-03 19:45:21",
    "finished_at": "2025-05-03 19:47:09",
    "errors": 0,
    "student": {
      "id": 29
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-03 21:46:20",
    "finished_at": "2025-05-03 21:47:27",
    "errors": 0,
    "student": {
      "id": 29
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-03 09:24:48",
    "finished_at": "2025-05-03 09:25:47",
    "errors": 1,
    "student": {
      "id": 29
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-03 15:45:46",
    "finished_at": "2025-05-03 15:46:38",
    "errors": 0,
    "student": {
      "id": 29
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-03 16:11:16",
    "finished_at": "2025-05-03 16:13:59",
    "errors": 1,
    "student": {
      "id": 29
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-03 20:55:36",
    "finished_at": "2025-05-03 20:56:47",
    "errors": 0,
    "student": {
      "id": 29
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-03 15:36:36",
    "finished_at": "2025-05-03 15:37:08",
    "errors": 0,
    "student": {
      "id": 29
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-03 20:29:51",
    "finished_at": "2025-05-03 20:30:39",
    "errors": 1,
    "student": {
      "id": 29
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-03 18:41:33",
    "finished_at": "2025-05-03 18:43:06",
    "errors": 1,
    "student": {
      "id": 29
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-16 10:08:11",
    "finished_at": "2025-05-16 10:09:16",
    "errors": 0,
    "student": {
      "id": 29
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-16 18:47:25",
    "finished_at": "2025-05-16 18:49:31",
    "errors": 1,
    "student": {
      "id": 29
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-16 15:03:49",
    "finished_at": "2025-05-16 15:04:21",
    "errors": 1,
    "student": {
      "id": 29
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-16 17:59:38",
    "finished_at": "2025-05-16 18:01:55",
    "errors": 1,
    "student": {
      "id": 29
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-16 17:58:39",
    "finished_at": "2025-05-16 18:01:24",
    "errors": 1,
    "student": {
      "id": 29
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-16 08:57:20",
    "finished_at": "2025-05-16 08:58:57",
    "errors": 0,
    "student": {
      "id": 29
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-16 09:32:36",
    "finished_at": "2025-05-16 09:34:11",
    "errors": 0,
    "student": {
      "id": 29
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-16 13:21:32",
    "finished_at": "2025-05-16 13:21:58",
    "errors": 0,
    "student": {
      "id": 29
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-16 10:56:55",
    "finished_at": "2025-05-16 10:57:05",
    "errors": 0,
    "student": {
      "id": 29
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-16 13:24:04",
    "finished_at": "2025-05-16 13:26:57",
    "errors": 0,
    "student": {
      "id": 29
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-20 16:36:42",
    "finished_at": "2025-05-20 16:37:09",
    "errors": 1,
    "student": {
      "id": 30
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-20 20:25:12",
    "finished_at": "2025-05-20 20:26:21",
    "errors": 0,
    "student": {
      "id": 30
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-20 13:26:32",
    "finished_at": "2025-05-20 13:27:36",
    "errors": 0,
    "student": {
      "id": 30
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-20 09:12:45",
    "finished_at": "2025-05-20 09:13:31",
    "errors": 1,
    "student": {
      "id": 30
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-20 13:37:21",
    "finished_at": "2025-05-20 13:37:44",
    "errors": 0,
    "student": {
      "id": 30
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-20 14:50:40",
    "finished_at": "2025-05-20 14:51:08",
    "errors": 1,
    "student": {
      "id": 30
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-20 11:57:37",
    "finished_at": "2025-05-20 11:59:02",
    "errors": 0,
    "student": {
      "id": 30
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-20 17:41:24",
    "finished_at": "2025-05-20 17:43:22",
    "errors": 0,
    "student": {
      "id": 30
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-20 20:27:49",
    "finished_at": "2025-05-20 20:29:56",
    "errors": 1,
    "student": {
      "id": 30
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-20 08:15:40",
    "finished_at": "2025-05-20 08:16:55",
    "errors": 0,
    "student": {
      "id": 30
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-26 18:09:15",
    "finished_at": "2025-05-26 18:11:59",
    "errors": 0,
    "student": {
      "id": 30
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-26 20:18:03",
    "finished_at": "2025-05-26 20:18:52",
    "errors": 1,
    "student": {
      "id": 30
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-26 13:23:52",
    "finished_at": "2025-05-26 13:25:01",
    "errors": 1,
    "student": {
      "id": 30
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-26 18:56:16",
    "finished_at": "2025-05-26 18:59:01",
    "errors": 0,
    "student": {
      "id": 30
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-26 12:18:20",
    "finished_at": "2025-05-26 12:20:14",
    "errors": 1,
    "student": {
      "id": 30
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-26 17:34:22",
    "finished_at": "2025-05-26 17:34:34",
    "errors": 1,
    "student": {
      "id": 30
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-26 10:49:34",
    "finished_at": "2025-05-26 10:52:34",
    "errors": 1,
    "student": {
      "id": 30
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-26 14:46:57",
    "finished_at": "2025-05-26 14:48:43",
    "errors": 1,
    "student": {
      "id": 30
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-26 10:06:06",
    "finished_at": "2025-05-26 10:08:21",
    "errors": 0,
    "student": {
      "id": 30
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-26 18:55:16",
    "finished_at": "2025-05-26 18:57:02",
    "errors": 0,
    "student": {
      "id": 30
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-30 11:14:40",
    "finished_at": "2025-05-30 11:15:32",
    "errors": 1,
    "student": {
      "id": 31
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-30 08:39:59",
    "finished_at": "2025-05-30 08:41:12",
    "errors": 1,
    "student": {
      "id": 31
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-30 17:26:20",
    "finished_at": "2025-05-30 17:29:19",
    "errors": 1,
    "student": {
      "id": 31
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-30 20:06:49",
    "finished_at": "2025-05-30 20:08:14",
    "errors": 1,
    "student": {
      "id": 31
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-30 20:49:29",
    "finished_at": "2025-05-30 20:51:26",
    "errors": 0,
    "student": {
      "id": 31
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-30 09:35:40",
    "finished_at": "2025-05-30 09:35:58",
    "errors": 1,
    "student": {
      "id": 31
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-30 17:53:37",
    "finished_at": "2025-05-30 17:54:42",
    "errors": 1,
    "student": {
      "id": 31
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-30 21:26:55",
    "finished_at": "2025-05-30 21:29:53",
    "errors": 1,
    "student": {
      "id": 31
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-30 10:57:32",
    "finished_at": "2025-05-30 11:00:10",
    "errors": 0,
    "student": {
      "id": 31
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-30 09:13:35",
    "finished_at": "2025-05-30 09:16:12",
    "errors": 1,
    "student": {
      "id": 31
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-01 21:12:49",
    "finished_at": "2025-05-01 21:14:04",
    "errors": 1,
    "student": {
      "id": 31
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-01 17:15:51",
    "finished_at": "2025-05-01 17:17:29",
    "errors": 1,
    "student": {
      "id": 31
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-01 11:26:51",
    "finished_at": "2025-05-01 11:29:02",
    "errors": 0,
    "student": {
      "id": 31
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-01 08:41:18",
    "finished_at": "2025-05-01 08:43:01",
    "errors": 0,
    "student": {
      "id": 31
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-01 13:34:35",
    "finished_at": "2025-05-01 13:34:51",
    "errors": 0,
    "student": {
      "id": 31
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-01 17:06:08",
    "finished_at": "2025-05-01 17:09:07",
    "errors": 1,
    "student": {
      "id": 31
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-01 12:35:01",
    "finished_at": "2025-05-01 12:36:23",
    "errors": 1,
    "student": {
      "id": 31
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-01 13:11:09",
    "finished_at": "2025-05-01 13:13:00",
    "errors": 0,
    "student": {
      "id": 31
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-01 15:35:19",
    "finished_at": "2025-05-01 15:36:24",
    "errors": 1,
    "student": {
      "id": 31
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-01 21:06:22",
    "finished_at": "2025-05-01 21:08:54",
    "errors": 1,
    "student": {
      "id": 31
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-25 17:51:37",
    "finished_at": "2025-05-25 17:53:52",
    "errors": 1,
    "student": {
      "id": 32
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-25 20:17:07",
    "finished_at": "2025-05-25 20:17:27",
    "errors": 1,
    "student": {
      "id": 32
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-25 15:13:31",
    "finished_at": "2025-05-25 15:13:51",
    "errors": 0,
    "student": {
      "id": 32
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-25 17:10:15",
    "finished_at": "2025-05-25 17:11:22",
    "errors": 0,
    "student": {
      "id": 32
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-25 14:49:03",
    "finished_at": "2025-05-25 14:50:10",
    "errors": 1,
    "student": {
      "id": 32
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-25 16:01:59",
    "finished_at": "2025-05-25 16:04:23",
    "errors": 0,
    "student": {
      "id": 32
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-25 10:29:55",
    "finished_at": "2025-05-25 10:32:30",
    "errors": 0,
    "student": {
      "id": 32
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-25 17:45:25",
    "finished_at": "2025-05-25 17:46:51",
    "errors": 0,
    "student": {
      "id": 32
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-25 13:14:14",
    "finished_at": "2025-05-25 13:16:36",
    "errors": 1,
    "student": {
      "id": 32
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-25 10:19:42",
    "finished_at": "2025-05-25 10:20:57",
    "errors": 1,
    "student": {
      "id": 32
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-09 16:43:03",
    "finished_at": "2025-05-09 16:44:57",
    "errors": 1,
    "student": {
      "id": 32
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-09 15:06:27",
    "finished_at": "2025-05-09 15:09:01",
    "errors": 0,
    "student": {
      "id": 32
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-09 14:51:33",
    "finished_at": "2025-05-09 14:51:48",
    "errors": 1,
    "student": {
      "id": 32
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-09 19:37:43",
    "finished_at": "2025-05-09 19:38:46",
    "errors": 0,
    "student": {
      "id": 32
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-09 21:02:30",
    "finished_at": "2025-05-09 21:05:25",
    "errors": 1,
    "student": {
      "id": 32
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-09 14:12:44",
    "finished_at": "2025-05-09 14:14:43",
    "errors": 1,
    "student": {
      "id": 32
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-09 09:18:22",
    "finished_at": "2025-05-09 09:18:33",
    "errors": 0,
    "student": {
      "id": 32
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-09 10:36:00",
    "finished_at": "2025-05-09 10:37:45",
    "errors": 0,
    "student": {
      "id": 32
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-09 13:47:14",
    "finished_at": "2025-05-09 13:49:32",
    "errors": 0,
    "student": {
      "id": 32
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-09 11:20:40",
    "finished_at": "2025-05-09 11:21:39",
    "errors": 0,
    "student": {
      "id": 32
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-05 08:44:36",
    "finished_at": "2025-05-05 08:45:55",
    "errors": 1,
    "student": {
      "id": 33
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-05 16:13:35",
    "finished_at": "2025-05-05 16:15:46",
    "errors": 1,
    "student": {
      "id": 33
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-05 12:51:34",
    "finished_at": "2025-05-05 12:51:54",
    "errors": 0,
    "student": {
      "id": 33
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-05 14:49:28",
    "finished_at": "2025-05-05 14:51:33",
    "errors": 1,
    "student": {
      "id": 33
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-05 16:30:10",
    "finished_at": "2025-05-05 16:32:57",
    "errors": 1,
    "student": {
      "id": 33
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-05 13:50:18",
    "finished_at": "2025-05-05 13:52:09",
    "errors": 0,
    "student": {
      "id": 33
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-05 19:08:43",
    "finished_at": "2025-05-05 19:09:49",
    "errors": 1,
    "student": {
      "id": 33
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-05 10:44:40",
    "finished_at": "2025-05-05 10:45:01",
    "errors": 1,
    "student": {
      "id": 33
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-05 12:09:53",
    "finished_at": "2025-05-05 12:10:34",
    "errors": 0,
    "student": {
      "id": 33
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-05 09:13:20",
    "finished_at": "2025-05-05 09:13:43",
    "errors": 0,
    "student": {
      "id": 33
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-02 21:41:41",
    "finished_at": "2025-05-02 21:42:14",
    "errors": 0,
    "student": {
      "id": 33
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-02 18:44:44",
    "finished_at": "2025-05-02 18:45:27",
    "errors": 0,
    "student": {
      "id": 33
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-02 09:57:20",
    "finished_at": "2025-05-02 09:59:08",
    "errors": 1,
    "student": {
      "id": 33
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-02 13:17:28",
    "finished_at": "2025-05-02 13:18:01",
    "errors": 1,
    "student": {
      "id": 33
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-02 13:07:20",
    "finished_at": "2025-05-02 13:08:55",
    "errors": 0,
    "student": {
      "id": 33
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-02 20:47:41",
    "finished_at": "2025-05-02 20:48:55",
    "errors": 0,
    "student": {
      "id": 33
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-02 15:46:32",
    "finished_at": "2025-05-02 15:47:23",
    "errors": 0,
    "student": {
      "id": 33
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-02 21:47:34",
    "finished_at": "2025-05-02 21:48:54",
    "errors": 1,
    "student": {
      "id": 33
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-02 09:00:42",
    "finished_at": "2025-05-02 09:01:52",
    "errors": 0,
    "student": {
      "id": 33
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-02 09:51:19",
    "finished_at": "2025-05-02 09:54:14",
    "errors": 1,
    "student": {
      "id": 33
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-19 14:02:37",
    "finished_at": "2025-05-19 14:04:18",
    "errors": 0,
    "student": {
      "id": 34
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-19 15:53:26",
    "finished_at": "2025-05-19 15:53:52",
    "errors": 0,
    "student": {
      "id": 34
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-19 17:40:27",
    "finished_at": "2025-05-19 17:42:40",
    "errors": 1,
    "student": {
      "id": 34
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-19 10:29:04",
    "finished_at": "2025-05-19 10:30:11",
    "errors": 0,
    "student": {
      "id": 34
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-19 14:40:12",
    "finished_at": "2025-05-19 14:40:30",
    "errors": 0,
    "student": {
      "id": 34
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-19 18:21:08",
    "finished_at": "2025-05-19 18:24:00",
    "errors": 0,
    "student": {
      "id": 34
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-19 20:07:44",
    "finished_at": "2025-05-19 20:10:03",
    "errors": 1,
    "student": {
      "id": 34
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-19 08:03:10",
    "finished_at": "2025-05-19 08:05:09",
    "errors": 0,
    "student": {
      "id": 34
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-19 21:15:00",
    "finished_at": "2025-05-19 21:17:41",
    "errors": 0,
    "student": {
      "id": 34
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-19 12:44:01",
    "finished_at": "2025-05-19 12:45:46",
    "errors": 0,
    "student": {
      "id": 34
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-07 20:12:59",
    "finished_at": "2025-05-07 20:14:12",
    "errors": 1,
    "student": {
      "id": 34
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-07 20:13:48",
    "finished_at": "2025-05-07 20:16:09",
    "errors": 0,
    "student": {
      "id": 34
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-07 08:59:15",
    "finished_at": "2025-05-07 09:01:36",
    "errors": 0,
    "student": {
      "id": 34
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-07 13:17:44",
    "finished_at": "2025-05-07 13:19:01",
    "errors": 0,
    "student": {
      "id": 34
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-07 17:10:59",
    "finished_at": "2025-05-07 17:12:19",
    "errors": 0,
    "student": {
      "id": 34
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-07 21:01:34",
    "finished_at": "2025-05-07 21:02:50",
    "errors": 1,
    "student": {
      "id": 34
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-07 20:52:42",
    "finished_at": "2025-05-07 20:54:08",
    "errors": 1,
    "student": {
      "id": 34
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-07 08:22:05",
    "finished_at": "2025-05-07 08:23:12",
    "errors": 0,
    "student": {
      "id": 34
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-07 18:38:51",
    "finished_at": "2025-05-07 18:39:17",
    "errors": 1,
    "student": {
      "id": 34
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-07 09:44:19",
    "finished_at": "2025-05-07 09:47:00",
    "errors": 1,
    "student": {
      "id": 34
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-07 21:04:19",
    "finished_at": "2025-05-07 21:05:26",
    "errors": 1,
    "student": {
      "id": 35
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-07 12:40:21",
    "finished_at": "2025-05-07 12:42:33",
    "errors": 0,
    "student": {
      "id": 35
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-07 16:24:59",
    "finished_at": "2025-05-07 16:25:53",
    "errors": 0,
    "student": {
      "id": 35
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-07 19:52:23",
    "finished_at": "2025-05-07 19:54:30",
    "errors": 0,
    "student": {
      "id": 35
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-07 15:25:22",
    "finished_at": "2025-05-07 15:26:50",
    "errors": 0,
    "student": {
      "id": 35
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-07 13:51:13",
    "finished_at": "2025-05-07 13:53:29",
    "errors": 0,
    "student": {
      "id": 35
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-07 09:26:10",
    "finished_at": "2025-05-07 09:28:20",
    "errors": 1,
    "student": {
      "id": 35
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-07 11:58:47",
    "finished_at": "2025-05-07 12:00:21",
    "errors": 0,
    "student": {
      "id": 35
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-07 11:20:46",
    "finished_at": "2025-05-07 11:22:06",
    "errors": 1,
    "student": {
      "id": 35
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-07 10:07:11",
    "finished_at": "2025-05-07 10:09:44",
    "errors": 1,
    "student": {
      "id": 35
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-06 16:10:54",
    "finished_at": "2025-05-06 16:11:29",
    "errors": 0,
    "student": {
      "id": 35
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-06 12:39:25",
    "finished_at": "2025-05-06 12:41:20",
    "errors": 0,
    "student": {
      "id": 35
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-06 08:16:40",
    "finished_at": "2025-05-06 08:18:58",
    "errors": 0,
    "student": {
      "id": 35
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-06 21:46:35",
    "finished_at": "2025-05-06 21:47:31",
    "errors": 0,
    "student": {
      "id": 35
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-06 17:30:36",
    "finished_at": "2025-05-06 17:33:32",
    "errors": 0,
    "student": {
      "id": 35
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-06 17:12:57",
    "finished_at": "2025-05-06 17:15:23",
    "errors": 0,
    "student": {
      "id": 35
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-06 10:35:20",
    "finished_at": "2025-05-06 10:36:36",
    "errors": 1,
    "student": {
      "id": 35
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-06 21:29:52",
    "finished_at": "2025-05-06 21:31:30",
    "errors": 0,
    "student": {
      "id": 35
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-06 12:54:36",
    "finished_at": "2025-05-06 12:55:40",
    "errors": 0,
    "student": {
      "id": 35
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-06 18:58:11",
    "finished_at": "2025-05-06 18:58:48",
    "errors": 0,
    "student": {
      "id": 35
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-23 15:31:43",
    "finished_at": "2025-05-23 15:33:53",
    "errors": 0,
    "student": {
      "id": 36
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-23 19:36:37",
    "finished_at": "2025-05-23 19:36:48",
    "errors": 1,
    "student": {
      "id": 36
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-23 16:28:27",
    "finished_at": "2025-05-23 16:30:18",
    "errors": 1,
    "student": {
      "id": 36
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-23 14:13:23",
    "finished_at": "2025-05-23 14:16:05",
    "errors": 0,
    "student": {
      "id": 36
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-23 13:03:26",
    "finished_at": "2025-05-23 13:05:19",
    "errors": 0,
    "student": {
      "id": 36
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-23 21:53:02",
    "finished_at": "2025-05-23 21:53:34",
    "errors": 0,
    "student": {
      "id": 36
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-23 20:37:34",
    "finished_at": "2025-05-23 20:39:56",
    "errors": 1,
    "student": {
      "id": 36
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-23 16:01:55",
    "finished_at": "2025-05-23 16:02:27",
    "errors": 1,
    "student": {
      "id": 36
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-23 13:12:26",
    "finished_at": "2025-05-23 13:13:52",
    "errors": 1,
    "student": {
      "id": 36
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-23 08:09:18",
    "finished_at": "2025-05-23 08:11:52",
    "errors": 1,
    "student": {
      "id": 36
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-22 15:26:55",
    "finished_at": "2025-05-22 15:28:47",
    "errors": 0,
    "student": {
      "id": 36
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-22 08:55:45",
    "finished_at": "2025-05-22 08:58:37",
    "errors": 1,
    "student": {
      "id": 36
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-22 09:58:56",
    "finished_at": "2025-05-22 10:00:15",
    "errors": 0,
    "student": {
      "id": 36
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-22 13:44:17",
    "finished_at": "2025-05-22 13:44:43",
    "errors": 0,
    "student": {
      "id": 36
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-22 18:35:15",
    "finished_at": "2025-05-22 18:36:23",
    "errors": 0,
    "student": {
      "id": 36
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-22 10:39:34",
    "finished_at": "2025-05-22 10:41:37",
    "errors": 0,
    "student": {
      "id": 36
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-22 20:00:30",
    "finished_at": "2025-05-22 20:00:41",
    "errors": 0,
    "student": {
      "id": 36
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-22 12:00:11",
    "finished_at": "2025-05-22 12:02:49",
    "errors": 0,
    "student": {
      "id": 36
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-22 21:24:34",
    "finished_at": "2025-05-22 21:25:42",
    "errors": 1,
    "student": {
      "id": 36
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-22 21:16:45",
    "finished_at": "2025-05-22 21:19:17",
    "errors": 0,
    "student": {
      "id": 36
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-06 15:54:02",
    "finished_at": "2025-05-06 15:55:46",
    "errors": 1,
    "student": {
      "id": 37
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-06 09:55:33",
    "finished_at": "2025-05-06 09:55:53",
    "errors": 1,
    "student": {
      "id": 37
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-06 10:43:21",
    "finished_at": "2025-05-06 10:44:07",
    "errors": 1,
    "student": {
      "id": 37
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-06 17:34:02",
    "finished_at": "2025-05-06 17:35:35",
    "errors": 1,
    "student": {
      "id": 37
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-06 12:56:41",
    "finished_at": "2025-05-06 12:57:05",
    "errors": 1,
    "student": {
      "id": 37
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-06 10:02:21",
    "finished_at": "2025-05-06 10:02:34",
    "errors": 1,
    "student": {
      "id": 37
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-06 10:18:19",
    "finished_at": "2025-05-06 10:20:51",
    "errors": 1,
    "student": {
      "id": 37
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-06 14:52:32",
    "finished_at": "2025-05-06 14:54:19",
    "errors": 1,
    "student": {
      "id": 37
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-06 18:51:04",
    "finished_at": "2025-05-06 18:52:41",
    "errors": 0,
    "student": {
      "id": 37
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-06 08:44:31",
    "finished_at": "2025-05-06 08:45:30",
    "errors": 1,
    "student": {
      "id": 37
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-23 12:02:55",
    "finished_at": "2025-05-23 12:04:39",
    "errors": 1,
    "student": {
      "id": 37
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-23 17:15:33",
    "finished_at": "2025-05-23 17:18:12",
    "errors": 1,
    "student": {
      "id": 37
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-23 20:22:29",
    "finished_at": "2025-05-23 20:23:17",
    "errors": 0,
    "student": {
      "id": 37
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-23 15:08:48",
    "finished_at": "2025-05-23 15:09:42",
    "errors": 1,
    "student": {
      "id": 37
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-23 10:55:31",
    "finished_at": "2025-05-23 10:55:54",
    "errors": 0,
    "student": {
      "id": 37
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-23 14:49:10",
    "finished_at": "2025-05-23 14:50:15",
    "errors": 1,
    "student": {
      "id": 37
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-23 19:14:28",
    "finished_at": "2025-05-23 19:15:59",
    "errors": 1,
    "student": {
      "id": 37
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-23 14:37:18",
    "finished_at": "2025-05-23 14:38:49",
    "errors": 1,
    "student": {
      "id": 37
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-23 20:24:10",
    "finished_at": "2025-05-23 20:25:40",
    "errors": 0,
    "student": {
      "id": 37
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-23 10:08:02",
    "finished_at": "2025-05-23 10:08:16",
    "errors": 0,
    "student": {
      "id": 37
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-09 10:01:05",
    "finished_at": "2025-05-09 10:03:29",
    "errors": 0,
    "student": {
      "id": 38
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-09 15:35:06",
    "finished_at": "2025-05-09 15:35:37",
    "errors": 1,
    "student": {
      "id": 38
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-09 20:38:38",
    "finished_at": "2025-05-09 20:39:07",
    "errors": 1,
    "student": {
      "id": 38
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-09 19:50:41",
    "finished_at": "2025-05-09 19:51:16",
    "errors": 1,
    "student": {
      "id": 38
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-09 21:01:56",
    "finished_at": "2025-05-09 21:03:39",
    "errors": 0,
    "student": {
      "id": 38
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-09 16:28:59",
    "finished_at": "2025-05-09 16:29:14",
    "errors": 1,
    "student": {
      "id": 38
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-09 09:31:43",
    "finished_at": "2025-05-09 09:34:02",
    "errors": 0,
    "student": {
      "id": 38
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-09 09:54:04",
    "finished_at": "2025-05-09 09:56:04",
    "errors": 1,
    "student": {
      "id": 38
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-09 17:37:43",
    "finished_at": "2025-05-09 17:40:42",
    "errors": 0,
    "student": {
      "id": 38
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-09 18:45:07",
    "finished_at": "2025-05-09 18:47:15",
    "errors": 0,
    "student": {
      "id": 38
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-02 20:03:21",
    "finished_at": "2025-05-02 20:04:40",
    "errors": 1,
    "student": {
      "id": 38
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-02 14:55:34",
    "finished_at": "2025-05-02 14:56:55",
    "errors": 0,
    "student": {
      "id": 38
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-02 08:22:25",
    "finished_at": "2025-05-02 08:25:01",
    "errors": 0,
    "student": {
      "id": 38
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-02 21:14:07",
    "finished_at": "2025-05-02 21:14:20",
    "errors": 0,
    "student": {
      "id": 38
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-02 09:07:59",
    "finished_at": "2025-05-02 09:09:40",
    "errors": 1,
    "student": {
      "id": 38
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-02 20:11:41",
    "finished_at": "2025-05-02 20:13:07",
    "errors": 0,
    "student": {
      "id": 38
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-02 16:41:58",
    "finished_at": "2025-05-02 16:44:22",
    "errors": 0,
    "student": {
      "id": 38
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-02 20:38:40",
    "finished_at": "2025-05-02 20:40:04",
    "errors": 0,
    "student": {
      "id": 38
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-02 08:39:56",
    "finished_at": "2025-05-02 08:42:22",
    "errors": 1,
    "student": {
      "id": 38
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-02 12:29:08",
    "finished_at": "2025-05-02 12:29:49",
    "errors": 1,
    "student": {
      "id": 38
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-11 12:26:59",
    "finished_at": "2025-05-11 12:29:29",
    "errors": 1,
    "student": {
      "id": 39
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-11 14:20:00",
    "finished_at": "2025-05-11 14:20:25",
    "errors": 1,
    "student": {
      "id": 39
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-11 18:17:40",
    "finished_at": "2025-05-11 18:19:13",
    "errors": 0,
    "student": {
      "id": 39
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-11 21:15:53",
    "finished_at": "2025-05-11 21:16:35",
    "errors": 0,
    "student": {
      "id": 39
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-11 08:33:30",
    "finished_at": "2025-05-11 08:35:08",
    "errors": 1,
    "student": {
      "id": 39
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-11 20:18:22",
    "finished_at": "2025-05-11 20:18:40",
    "errors": 0,
    "student": {
      "id": 39
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-11 21:13:59",
    "finished_at": "2025-05-11 21:15:14",
    "errors": 1,
    "student": {
      "id": 39
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-11 21:50:23",
    "finished_at": "2025-05-11 21:53:00",
    "errors": 0,
    "student": {
      "id": 39
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-11 14:10:38",
    "finished_at": "2025-05-11 14:11:14",
    "errors": 0,
    "student": {
      "id": 39
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-11 11:09:23",
    "finished_at": "2025-05-11 11:11:17",
    "errors": 0,
    "student": {
      "id": 39
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-09 17:48:28",
    "finished_at": "2025-05-09 17:49:26",
    "errors": 0,
    "student": {
      "id": 39
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-09 15:43:45",
    "finished_at": "2025-05-09 15:46:11",
    "errors": 0,
    "student": {
      "id": 39
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-09 10:46:28",
    "finished_at": "2025-05-09 10:48:03",
    "errors": 1,
    "student": {
      "id": 39
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-09 11:59:00",
    "finished_at": "2025-05-09 12:00:26",
    "errors": 1,
    "student": {
      "id": 39
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-09 16:18:40",
    "finished_at": "2025-05-09 16:20:13",
    "errors": 0,
    "student": {
      "id": 39
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-09 19:34:27",
    "finished_at": "2025-05-09 19:36:41",
    "errors": 1,
    "student": {
      "id": 39
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-09 10:47:16",
    "finished_at": "2025-05-09 10:49:17",
    "errors": 1,
    "student": {
      "id": 39
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-09 09:15:36",
    "finished_at": "2025-05-09 09:17:23",
    "errors": 1,
    "student": {
      "id": 39
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-09 11:33:50",
    "finished_at": "2025-05-09 11:35:05",
    "errors": 1,
    "student": {
      "id": 39
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-09 16:13:13",
    "finished_at": "2025-05-09 16:14:10",
    "errors": 0,
    "student": {
      "id": 39
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-04 11:28:44",
    "finished_at": "2025-05-04 11:30:55",
    "errors": 1,
    "student": {
      "id": 40
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-04 08:12:40",
    "finished_at": "2025-05-04 08:14:38",
    "errors": 0,
    "student": {
      "id": 40
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-04 09:10:23",
    "finished_at": "2025-05-04 09:11:47",
    "errors": 1,
    "student": {
      "id": 40
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-04 16:31:44",
    "finished_at": "2025-05-04 16:34:39",
    "errors": 1,
    "student": {
      "id": 40
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-04 18:42:30",
    "finished_at": "2025-05-04 18:45:26",
    "errors": 1,
    "student": {
      "id": 40
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-04 17:35:06",
    "finished_at": "2025-05-04 17:37:52",
    "errors": 1,
    "student": {
      "id": 40
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-04 20:41:34",
    "finished_at": "2025-05-04 20:43:26",
    "errors": 1,
    "student": {
      "id": 40
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-04 18:13:03",
    "finished_at": "2025-05-04 18:13:14",
    "errors": 0,
    "student": {
      "id": 40
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-04 20:35:45",
    "finished_at": "2025-05-04 20:36:45",
    "errors": 0,
    "student": {
      "id": 40
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-04 08:12:09",
    "finished_at": "2025-05-04 08:12:39",
    "errors": 0,
    "student": {
      "id": 40
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-27 17:24:19",
    "finished_at": "2025-05-27 17:25:49",
    "errors": 1,
    "student": {
      "id": 40
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-27 12:40:46",
    "finished_at": "2025-05-27 12:41:58",
    "errors": 0,
    "student": {
      "id": 40
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-27 08:08:18",
    "finished_at": "2025-05-27 08:10:48",
    "errors": 1,
    "student": {
      "id": 40
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-27 14:37:00",
    "finished_at": "2025-05-27 14:38:21",
    "errors": 0,
    "student": {
      "id": 40
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-27 20:25:05",
    "finished_at": "2025-05-27 20:26:31",
    "errors": 1,
    "student": {
      "id": 40
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-27 14:35:15",
    "finished_at": "2025-05-27 14:35:27",
    "errors": 1,
    "student": {
      "id": 40
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-27 21:56:48",
    "finished_at": "2025-05-27 21:58:11",
    "errors": 0,
    "student": {
      "id": 40
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-27 15:16:38",
    "finished_at": "2025-05-27 15:18:11",
    "errors": 1,
    "student": {
      "id": 40
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-27 20:20:02",
    "finished_at": "2025-05-27 20:21:41",
    "errors": 0,
    "student": {
      "id": 40
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-27 09:30:48",
    "finished_at": "2025-05-27 09:31:07",
    "errors": 0,
    "student": {
      "id": 40
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-01 11:20:04",
    "finished_at": "2025-05-01 11:22:54",
    "errors": 1,
    "student": {
      "id": 41
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-01 14:50:50",
    "finished_at": "2025-05-01 14:53:39",
    "errors": 0,
    "student": {
      "id": 41
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-01 14:24:00",
    "finished_at": "2025-05-01 14:24:36",
    "errors": 0,
    "student": {
      "id": 41
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-01 10:43:55",
    "finished_at": "2025-05-01 10:45:47",
    "errors": 1,
    "student": {
      "id": 41
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-01 12:22:39",
    "finished_at": "2025-05-01 12:25:24",
    "errors": 0,
    "student": {
      "id": 41
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-01 14:44:26",
    "finished_at": "2025-05-01 14:44:46",
    "errors": 0,
    "student": {
      "id": 41
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-01 21:05:05",
    "finished_at": "2025-05-01 21:06:12",
    "errors": 0,
    "student": {
      "id": 41
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-01 14:19:48",
    "finished_at": "2025-05-01 14:20:19",
    "errors": 1,
    "student": {
      "id": 41
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-01 21:42:56",
    "finished_at": "2025-05-01 21:43:42",
    "errors": 0,
    "student": {
      "id": 41
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-01 17:57:34",
    "finished_at": "2025-05-01 18:00:12",
    "errors": 0,
    "student": {
      "id": 41
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-24 12:47:02",
    "finished_at": "2025-05-24 12:49:47",
    "errors": 1,
    "student": {
      "id": 41
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-24 08:02:10",
    "finished_at": "2025-05-24 08:05:08",
    "errors": 1,
    "student": {
      "id": 41
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-24 14:13:16",
    "finished_at": "2025-05-24 14:15:14",
    "errors": 0,
    "student": {
      "id": 41
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-24 18:44:37",
    "finished_at": "2025-05-24 18:46:44",
    "errors": 0,
    "student": {
      "id": 41
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-24 19:15:41",
    "finished_at": "2025-05-24 19:17:23",
    "errors": 1,
    "student": {
      "id": 41
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-24 08:17:03",
    "finished_at": "2025-05-24 08:18:26",
    "errors": 1,
    "student": {
      "id": 41
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-24 20:04:42",
    "finished_at": "2025-05-24 20:05:39",
    "errors": 0,
    "student": {
      "id": 41
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-24 10:09:34",
    "finished_at": "2025-05-24 10:11:34",
    "errors": 0,
    "student": {
      "id": 41
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-24 08:22:03",
    "finished_at": "2025-05-24 08:24:19",
    "errors": 0,
    "student": {
      "id": 41
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-24 18:15:34",
    "finished_at": "2025-05-24 18:17:47",
    "errors": 1,
    "student": {
      "id": 41
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-02 17:24:22",
    "finished_at": "2025-05-02 17:25:58",
    "errors": 1,
    "student": {
      "id": 42
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-02 13:50:17",
    "finished_at": "2025-05-02 13:50:38",
    "errors": 0,
    "student": {
      "id": 42
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-02 11:12:38",
    "finished_at": "2025-05-02 11:15:03",
    "errors": 1,
    "student": {
      "id": 42
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-02 13:15:03",
    "finished_at": "2025-05-02 13:17:21",
    "errors": 1,
    "student": {
      "id": 42
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-02 18:55:14",
    "finished_at": "2025-05-02 18:56:51",
    "errors": 0,
    "student": {
      "id": 42
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-02 16:01:01",
    "finished_at": "2025-05-02 16:03:26",
    "errors": 0,
    "student": {
      "id": 42
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-02 18:31:31",
    "finished_at": "2025-05-02 18:32:10",
    "errors": 1,
    "student": {
      "id": 42
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-02 15:46:43",
    "finished_at": "2025-05-02 15:48:40",
    "errors": 1,
    "student": {
      "id": 42
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-02 18:34:09",
    "finished_at": "2025-05-02 18:36:44",
    "errors": 0,
    "student": {
      "id": 42
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-02 12:17:05",
    "finished_at": "2025-05-02 12:19:00",
    "errors": 1,
    "student": {
      "id": 42
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-29 14:35:21",
    "finished_at": "2025-05-29 14:38:12",
    "errors": 0,
    "student": {
      "id": 42
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-29 19:27:19",
    "finished_at": "2025-05-29 19:28:40",
    "errors": 0,
    "student": {
      "id": 42
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-29 11:43:20",
    "finished_at": "2025-05-29 11:43:35",
    "errors": 0,
    "student": {
      "id": 42
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-29 16:17:03",
    "finished_at": "2025-05-29 16:19:42",
    "errors": 0,
    "student": {
      "id": 42
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-29 09:32:13",
    "finished_at": "2025-05-29 09:32:30",
    "errors": 1,
    "student": {
      "id": 42
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-29 10:37:09",
    "finished_at": "2025-05-29 10:38:19",
    "errors": 1,
    "student": {
      "id": 42
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-29 09:06:02",
    "finished_at": "2025-05-29 09:07:18",
    "errors": 0,
    "student": {
      "id": 42
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-29 20:54:41",
    "finished_at": "2025-05-29 20:56:14",
    "errors": 0,
    "student": {
      "id": 42
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-29 18:34:43",
    "finished_at": "2025-05-29 18:36:28",
    "errors": 1,
    "student": {
      "id": 42
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-29 21:34:20",
    "finished_at": "2025-05-29 21:36:46",
    "errors": 1,
    "student": {
      "id": 42
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-03 21:20:53",
    "finished_at": "2025-05-03 21:21:42",
    "errors": 1,
    "student": {
      "id": 43
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-03 18:58:42",
    "finished_at": "2025-05-03 19:01:40",
    "errors": 1,
    "student": {
      "id": 43
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-03 11:43:15",
    "finished_at": "2025-05-03 11:45:05",
    "errors": 0,
    "student": {
      "id": 43
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-03 17:43:42",
    "finished_at": "2025-05-03 17:46:19",
    "errors": 1,
    "student": {
      "id": 43
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-03 08:17:36",
    "finished_at": "2025-05-03 08:18:37",
    "errors": 0,
    "student": {
      "id": 43
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-03 21:23:46",
    "finished_at": "2025-05-03 21:25:51",
    "errors": 1,
    "student": {
      "id": 43
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-03 18:59:11",
    "finished_at": "2025-05-03 19:01:49",
    "errors": 0,
    "student": {
      "id": 43
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-03 14:01:40",
    "finished_at": "2025-05-03 14:01:52",
    "errors": 0,
    "student": {
      "id": 43
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-03 09:07:46",
    "finished_at": "2025-05-03 09:08:03",
    "errors": 1,
    "student": {
      "id": 43
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-03 21:20:20",
    "finished_at": "2025-05-03 21:22:21",
    "errors": 1,
    "student": {
      "id": 43
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-17 18:15:24",
    "finished_at": "2025-05-17 18:16:17",
    "errors": 0,
    "student": {
      "id": 43
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-17 13:28:16",
    "finished_at": "2025-05-17 13:28:40",
    "errors": 0,
    "student": {
      "id": 43
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-17 11:31:03",
    "finished_at": "2025-05-17 11:32:53",
    "errors": 0,
    "student": {
      "id": 43
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-17 19:58:51",
    "finished_at": "2025-05-17 20:01:09",
    "errors": 1,
    "student": {
      "id": 43
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-17 18:26:15",
    "finished_at": "2025-05-17 18:26:41",
    "errors": 1,
    "student": {
      "id": 43
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-17 19:36:44",
    "finished_at": "2025-05-17 19:39:28",
    "errors": 0,
    "student": {
      "id": 43
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-17 11:38:19",
    "finished_at": "2025-05-17 11:38:33",
    "errors": 1,
    "student": {
      "id": 43
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-17 16:51:23",
    "finished_at": "2025-05-17 16:54:20",
    "errors": 1,
    "student": {
      "id": 43
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-17 14:32:55",
    "finished_at": "2025-05-17 14:34:01",
    "errors": 0,
    "student": {
      "id": 43
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-17 16:29:36",
    "finished_at": "2025-05-17 16:31:22",
    "errors": 0,
    "student": {
      "id": 43
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-11 09:24:47",
    "finished_at": "2025-05-11 09:25:57",
    "errors": 1,
    "student": {
      "id": 44
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-11 12:02:14",
    "finished_at": "2025-05-11 12:05:10",
    "errors": 0,
    "student": {
      "id": 44
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-11 11:13:23",
    "finished_at": "2025-05-11 11:14:33",
    "errors": 0,
    "student": {
      "id": 44
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-11 15:09:01",
    "finished_at": "2025-05-11 15:11:12",
    "errors": 1,
    "student": {
      "id": 44
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-11 08:16:37",
    "finished_at": "2025-05-11 08:18:33",
    "errors": 1,
    "student": {
      "id": 44
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-11 14:31:52",
    "finished_at": "2025-05-11 14:34:45",
    "errors": 0,
    "student": {
      "id": 44
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-11 17:04:20",
    "finished_at": "2025-05-11 17:07:04",
    "errors": 0,
    "student": {
      "id": 44
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-11 19:06:30",
    "finished_at": "2025-05-11 19:09:00",
    "errors": 1,
    "student": {
      "id": 44
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-11 14:12:06",
    "finished_at": "2025-05-11 14:13:11",
    "errors": 0,
    "student": {
      "id": 44
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-11 16:10:27",
    "finished_at": "2025-05-11 16:12:37",
    "errors": 1,
    "student": {
      "id": 44
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-12 08:12:50",
    "finished_at": "2025-05-12 08:13:43",
    "errors": 1,
    "student": {
      "id": 44
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-12 10:29:49",
    "finished_at": "2025-05-12 10:32:13",
    "errors": 0,
    "student": {
      "id": 44
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-12 21:39:38",
    "finished_at": "2025-05-12 21:40:54",
    "errors": 1,
    "student": {
      "id": 44
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-12 14:50:31",
    "finished_at": "2025-05-12 14:51:11",
    "errors": 0,
    "student": {
      "id": 44
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-12 10:29:51",
    "finished_at": "2025-05-12 10:31:15",
    "errors": 0,
    "student": {
      "id": 44
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-12 10:04:33",
    "finished_at": "2025-05-12 10:04:51",
    "errors": 0,
    "student": {
      "id": 44
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-12 16:20:36",
    "finished_at": "2025-05-12 16:22:35",
    "errors": 1,
    "student": {
      "id": 44
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-12 20:15:10",
    "finished_at": "2025-05-12 20:17:18",
    "errors": 0,
    "student": {
      "id": 44
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-12 14:57:03",
    "finished_at": "2025-05-12 14:58:24",
    "errors": 1,
    "student": {
      "id": 44
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-12 12:29:34",
    "finished_at": "2025-05-12 12:30:27",
    "errors": 0,
    "student": {
      "id": 44
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-07 12:16:14",
    "finished_at": "2025-05-07 12:16:25",
    "errors": 1,
    "student": {
      "id": 45
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-07 09:55:00",
    "finished_at": "2025-05-07 09:55:39",
    "errors": 0,
    "student": {
      "id": 45
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-07 08:33:52",
    "finished_at": "2025-05-07 08:34:45",
    "errors": 1,
    "student": {
      "id": 45
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-07 09:52:17",
    "finished_at": "2025-05-07 09:53:02",
    "errors": 1,
    "student": {
      "id": 45
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-07 16:47:23",
    "finished_at": "2025-05-07 16:49:33",
    "errors": 1,
    "student": {
      "id": 45
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-07 12:40:17",
    "finished_at": "2025-05-07 12:40:32",
    "errors": 0,
    "student": {
      "id": 45
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-07 15:04:21",
    "finished_at": "2025-05-07 15:07:10",
    "errors": 0,
    "student": {
      "id": 45
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-07 14:33:49",
    "finished_at": "2025-05-07 14:36:41",
    "errors": 1,
    "student": {
      "id": 45
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-07 10:12:19",
    "finished_at": "2025-05-07 10:14:53",
    "errors": 0,
    "student": {
      "id": 45
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-07 12:56:53",
    "finished_at": "2025-05-07 12:59:22",
    "errors": 1,
    "student": {
      "id": 45
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-21 16:01:06",
    "finished_at": "2025-05-21 16:02:33",
    "errors": 0,
    "student": {
      "id": 45
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-21 08:36:27",
    "finished_at": "2025-05-21 08:36:37",
    "errors": 0,
    "student": {
      "id": 45
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-21 12:12:31",
    "finished_at": "2025-05-21 12:15:08",
    "errors": 1,
    "student": {
      "id": 45
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-21 09:05:25",
    "finished_at": "2025-05-21 09:07:30",
    "errors": 0,
    "student": {
      "id": 45
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-21 16:50:11",
    "finished_at": "2025-05-21 16:52:13",
    "errors": 1,
    "student": {
      "id": 45
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-21 13:38:37",
    "finished_at": "2025-05-21 13:40:55",
    "errors": 1,
    "student": {
      "id": 45
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-21 15:58:04",
    "finished_at": "2025-05-21 15:58:30",
    "errors": 0,
    "student": {
      "id": 45
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-21 12:12:19",
    "finished_at": "2025-05-21 12:13:57",
    "errors": 1,
    "student": {
      "id": 45
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-21 17:43:23",
    "finished_at": "2025-05-21 17:45:19",
    "errors": 1,
    "student": {
      "id": 45
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-21 14:37:35",
    "finished_at": "2025-05-21 14:39:56",
    "errors": 1,
    "student": {
      "id": 45
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-14 18:36:06",
    "finished_at": "2025-05-14 18:38:55",
    "errors": 0,
    "student": {
      "id": 46
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-14 17:52:49",
    "finished_at": "2025-05-14 17:54:35",
    "errors": 0,
    "student": {
      "id": 46
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-14 10:37:43",
    "finished_at": "2025-05-14 10:39:46",
    "errors": 0,
    "student": {
      "id": 46
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-14 21:28:01",
    "finished_at": "2025-05-14 21:30:17",
    "errors": 0,
    "student": {
      "id": 46
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-14 20:50:39",
    "finished_at": "2025-05-14 20:51:05",
    "errors": 1,
    "student": {
      "id": 46
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-14 16:15:14",
    "finished_at": "2025-05-14 16:17:14",
    "errors": 1,
    "student": {
      "id": 46
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-14 20:45:47",
    "finished_at": "2025-05-14 20:47:24",
    "errors": 0,
    "student": {
      "id": 46
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-14 18:55:27",
    "finished_at": "2025-05-14 18:56:19",
    "errors": 1,
    "student": {
      "id": 46
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-14 21:23:45",
    "finished_at": "2025-05-14 21:23:59",
    "errors": 1,
    "student": {
      "id": 46
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-14 16:13:39",
    "finished_at": "2025-05-14 16:14:47",
    "errors": 1,
    "student": {
      "id": 46
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-07 13:30:26",
    "finished_at": "2025-05-07 13:32:10",
    "errors": 1,
    "student": {
      "id": 46
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-07 13:23:01",
    "finished_at": "2025-05-07 13:24:49",
    "errors": 1,
    "student": {
      "id": 46
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-07 15:35:27",
    "finished_at": "2025-05-07 15:38:26",
    "errors": 0,
    "student": {
      "id": 46
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-07 18:45:00",
    "finished_at": "2025-05-07 18:46:08",
    "errors": 1,
    "student": {
      "id": 46
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-07 21:09:42",
    "finished_at": "2025-05-07 21:10:01",
    "errors": 1,
    "student": {
      "id": 46
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-07 21:04:59",
    "finished_at": "2025-05-07 21:05:11",
    "errors": 0,
    "student": {
      "id": 46
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-07 15:41:33",
    "finished_at": "2025-05-07 15:44:22",
    "errors": 0,
    "student": {
      "id": 46
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-07 11:15:06",
    "finished_at": "2025-05-07 11:17:20",
    "errors": 1,
    "student": {
      "id": 46
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-07 11:45:08",
    "finished_at": "2025-05-07 11:45:48",
    "errors": 1,
    "student": {
      "id": 46
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-07 21:41:46",
    "finished_at": "2025-05-07 21:43:25",
    "errors": 1,
    "student": {
      "id": 46
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-28 15:12:40",
    "finished_at": "2025-05-28 15:15:17",
    "errors": 1,
    "student": {
      "id": 47
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-28 17:10:20",
    "finished_at": "2025-05-28 17:12:28",
    "errors": 1,
    "student": {
      "id": 47
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-28 14:04:09",
    "finished_at": "2025-05-28 14:06:03",
    "errors": 1,
    "student": {
      "id": 47
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-28 15:57:56",
    "finished_at": "2025-05-28 15:58:17",
    "errors": 1,
    "student": {
      "id": 47
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-28 20:54:03",
    "finished_at": "2025-05-28 20:54:42",
    "errors": 0,
    "student": {
      "id": 47
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-28 15:22:12",
    "finished_at": "2025-05-28 15:24:14",
    "errors": 1,
    "student": {
      "id": 47
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-28 18:20:05",
    "finished_at": "2025-05-28 18:20:26",
    "errors": 1,
    "student": {
      "id": 47
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-28 20:38:33",
    "finished_at": "2025-05-28 20:41:18",
    "errors": 0,
    "student": {
      "id": 47
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-28 18:09:20",
    "finished_at": "2025-05-28 18:10:56",
    "errors": 0,
    "student": {
      "id": 47
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-28 20:23:25",
    "finished_at": "2025-05-28 20:25:38",
    "errors": 0,
    "student": {
      "id": 47
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-14 20:44:59",
    "finished_at": "2025-05-14 20:45:09",
    "errors": 1,
    "student": {
      "id": 47
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-14 16:53:48",
    "finished_at": "2025-05-14 16:56:21",
    "errors": 1,
    "student": {
      "id": 47
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-14 20:59:35",
    "finished_at": "2025-05-14 21:02:26",
    "errors": 0,
    "student": {
      "id": 47
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-14 17:46:21",
    "finished_at": "2025-05-14 17:48:41",
    "errors": 1,
    "student": {
      "id": 47
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-14 12:50:26",
    "finished_at": "2025-05-14 12:51:22",
    "errors": 1,
    "student": {
      "id": 47
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-14 17:48:30",
    "finished_at": "2025-05-14 17:50:08",
    "errors": 0,
    "student": {
      "id": 47
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-14 12:48:43",
    "finished_at": "2025-05-14 12:49:10",
    "errors": 1,
    "student": {
      "id": 47
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-14 19:20:56",
    "finished_at": "2025-05-14 19:22:17",
    "errors": 0,
    "student": {
      "id": 47
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-14 10:06:45",
    "finished_at": "2025-05-14 10:07:48",
    "errors": 0,
    "student": {
      "id": 47
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-14 16:48:52",
    "finished_at": "2025-05-14 16:51:29",
    "errors": 1,
    "student": {
      "id": 47
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-24 10:40:56",
    "finished_at": "2025-05-24 10:41:14",
    "errors": 1,
    "student": {
      "id": 48
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-24 14:22:27",
    "finished_at": "2025-05-24 14:25:15",
    "errors": 0,
    "student": {
      "id": 48
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-24 09:47:07",
    "finished_at": "2025-05-24 09:50:05",
    "errors": 0,
    "student": {
      "id": 48
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-24 12:25:09",
    "finished_at": "2025-05-24 12:25:19",
    "errors": 1,
    "student": {
      "id": 48
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-24 20:42:49",
    "finished_at": "2025-05-24 20:45:43",
    "errors": 0,
    "student": {
      "id": 48
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-24 16:27:36",
    "finished_at": "2025-05-24 16:29:41",
    "errors": 0,
    "student": {
      "id": 48
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-24 18:23:30",
    "finished_at": "2025-05-24 18:24:22",
    "errors": 1,
    "student": {
      "id": 48
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-24 11:38:21",
    "finished_at": "2025-05-24 11:38:44",
    "errors": 1,
    "student": {
      "id": 48
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-24 20:51:58",
    "finished_at": "2025-05-24 20:54:05",
    "errors": 0,
    "student": {
      "id": 48
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-24 11:54:56",
    "finished_at": "2025-05-24 11:55:16",
    "errors": 0,
    "student": {
      "id": 48
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-25 08:38:07",
    "finished_at": "2025-05-25 08:39:55",
    "errors": 0,
    "student": {
      "id": 48
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-25 18:20:20",
    "finished_at": "2025-05-25 18:21:57",
    "errors": 1,
    "student": {
      "id": 48
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-25 18:27:55",
    "finished_at": "2025-05-25 18:29:34",
    "errors": 1,
    "student": {
      "id": 48
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-25 17:07:08",
    "finished_at": "2025-05-25 17:07:21",
    "errors": 1,
    "student": {
      "id": 48
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-25 14:07:04",
    "finished_at": "2025-05-25 14:08:12",
    "errors": 1,
    "student": {
      "id": 48
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-25 12:24:21",
    "finished_at": "2025-05-25 12:25:13",
    "errors": 1,
    "student": {
      "id": 48
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-25 17:03:10",
    "finished_at": "2025-05-25 17:05:36",
    "errors": 0,
    "student": {
      "id": 48
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-25 21:17:26",
    "finished_at": "2025-05-25 21:18:49",
    "errors": 1,
    "student": {
      "id": 48
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-25 08:57:12",
    "finished_at": "2025-05-25 08:57:42",
    "errors": 1,
    "student": {
      "id": 48
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-25 12:29:30",
    "finished_at": "2025-05-25 12:30:53",
    "errors": 1,
    "student": {
      "id": 48
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-29 16:48:50",
    "finished_at": "2025-05-29 16:50:43",
    "errors": 1,
    "student": {
      "id": 49
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-29 10:49:00",
    "finished_at": "2025-05-29 10:51:25",
    "errors": 0,
    "student": {
      "id": 49
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-29 15:51:34",
    "finished_at": "2025-05-29 15:53:20",
    "errors": 1,
    "student": {
      "id": 49
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-29 12:53:10",
    "finished_at": "2025-05-29 12:53:52",
    "errors": 0,
    "student": {
      "id": 49
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-29 16:53:40",
    "finished_at": "2025-05-29 16:56:30",
    "errors": 0,
    "student": {
      "id": 49
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-29 14:26:34",
    "finished_at": "2025-05-29 14:28:44",
    "errors": 1,
    "student": {
      "id": 49
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-29 11:52:19",
    "finished_at": "2025-05-29 11:54:29",
    "errors": 0,
    "student": {
      "id": 49
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-29 17:03:56",
    "finished_at": "2025-05-29 17:04:39",
    "errors": 1,
    "student": {
      "id": 49
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-29 09:53:00",
    "finished_at": "2025-05-29 09:53:43",
    "errors": 0,
    "student": {
      "id": 49
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-29 15:18:10",
    "finished_at": "2025-05-29 15:19:34",
    "errors": 0,
    "student": {
      "id": 49
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-21 17:24:51",
    "finished_at": "2025-05-21 17:25:58",
    "errors": 0,
    "student": {
      "id": 49
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-21 11:04:37",
    "finished_at": "2025-05-21 11:07:15",
    "errors": 0,
    "student": {
      "id": 49
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-21 09:07:48",
    "finished_at": "2025-05-21 09:10:02",
    "errors": 1,
    "student": {
      "id": 49
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-21 13:32:02",
    "finished_at": "2025-05-21 13:34:53",
    "errors": 1,
    "student": {
      "id": 49
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-21 10:52:53",
    "finished_at": "2025-05-21 10:54:27",
    "errors": 1,
    "student": {
      "id": 49
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-21 18:38:48",
    "finished_at": "2025-05-21 18:39:58",
    "errors": 1,
    "student": {
      "id": 49
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-21 12:13:49",
    "finished_at": "2025-05-21 12:16:21",
    "errors": 0,
    "student": {
      "id": 49
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-21 13:01:46",
    "finished_at": "2025-05-21 13:02:11",
    "errors": 0,
    "student": {
      "id": 49
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-21 18:53:34",
    "finished_at": "2025-05-21 18:54:36",
    "errors": 0,
    "student": {
      "id": 49
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-21 11:47:41",
    "finished_at": "2025-05-21 11:48:01",
    "errors": 0,
    "student": {
      "id": 49
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-03 11:52:25",
    "finished_at": "2025-05-03 11:52:43",
    "errors": 0,
    "student": {
      "id": 50
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-03 08:42:49",
    "finished_at": "2025-05-03 08:43:04",
    "errors": 0,
    "student": {
      "id": 50
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-03 20:04:00",
    "finished_at": "2025-05-03 20:06:59",
    "errors": 1,
    "student": {
      "id": 50
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-03 21:29:25",
    "finished_at": "2025-05-03 21:30:27",
    "errors": 0,
    "student": {
      "id": 50
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-03 19:37:15",
    "finished_at": "2025-05-03 19:39:23",
    "errors": 0,
    "student": {
      "id": 50
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-03 17:13:47",
    "finished_at": "2025-05-03 17:14:30",
    "errors": 0,
    "student": {
      "id": 50
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-03 10:35:24",
    "finished_at": "2025-05-03 10:36:30",
    "errors": 0,
    "student": {
      "id": 50
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-03 08:25:51",
    "finished_at": "2025-05-03 08:27:31",
    "errors": 1,
    "student": {
      "id": 50
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-03 09:47:09",
    "finished_at": "2025-05-03 09:48:21",
    "errors": 0,
    "student": {
      "id": 50
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-03 21:50:31",
    "finished_at": "2025-05-03 21:52:50",
    "errors": 1,
    "student": {
      "id": 50
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-15 13:19:28",
    "finished_at": "2025-05-15 13:19:44",
    "errors": 1,
    "student": {
      "id": 50
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-15 14:14:15",
    "finished_at": "2025-05-15 14:16:20",
    "errors": 0,
    "student": {
      "id": 50
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-15 08:53:58",
    "finished_at": "2025-05-15 08:55:36",
    "errors": 1,
    "student": {
      "id": 50
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-15 08:06:44",
    "finished_at": "2025-05-15 08:08:08",
    "errors": 1,
    "student": {
      "id": 50
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-15 14:27:51",
    "finished_at": "2025-05-15 14:28:07",
    "errors": 0,
    "student": {
      "id": 50
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-15 10:06:51",
    "finished_at": "2025-05-15 10:08:05",
    "errors": 0,
    "student": {
      "id": 50
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-15 21:14:32",
    "finished_at": "2025-05-15 21:15:11",
    "errors": 0,
    "student": {
      "id": 50
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-15 11:08:40",
    "finished_at": "2025-05-15 11:10:09",
    "errors": 1,
    "student": {
      "id": 50
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-15 19:35:52",
    "finished_at": "2025-05-15 19:37:19",
    "errors": 0,
    "student": {
      "id": 50
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-15 12:22:12",
    "finished_at": "2025-05-15 12:22:27",
    "errors": 1,
    "student": {
      "id": 50
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-01 15:56:53",
    "finished_at": "2025-05-01 15:57:46",
    "errors": 1,
    "student": {
      "id": 51
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-01 12:26:04",
    "finished_at": "2025-05-01 12:28:20",
    "errors": 0,
    "student": {
      "id": 51
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-01 19:33:09",
    "finished_at": "2025-05-01 19:34:44",
    "errors": 0,
    "student": {
      "id": 51
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-01 13:12:35",
    "finished_at": "2025-05-01 13:13:24",
    "errors": 1,
    "student": {
      "id": 51
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-01 08:53:53",
    "finished_at": "2025-05-01 08:56:02",
    "errors": 0,
    "student": {
      "id": 51
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-01 09:46:59",
    "finished_at": "2025-05-01 09:49:31",
    "errors": 0,
    "student": {
      "id": 51
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-01 14:43:33",
    "finished_at": "2025-05-01 14:43:56",
    "errors": 0,
    "student": {
      "id": 51
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-01 13:18:12",
    "finished_at": "2025-05-01 13:19:04",
    "errors": 1,
    "student": {
      "id": 51
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-01 08:44:17",
    "finished_at": "2025-05-01 08:45:01",
    "errors": 1,
    "student": {
      "id": 51
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-01 15:33:09",
    "finished_at": "2025-05-01 15:35:18",
    "errors": 1,
    "student": {
      "id": 51
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-11 13:31:50",
    "finished_at": "2025-05-11 13:32:27",
    "errors": 1,
    "student": {
      "id": 51
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-11 16:52:42",
    "finished_at": "2025-05-11 16:54:38",
    "errors": 1,
    "student": {
      "id": 51
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-11 09:24:16",
    "finished_at": "2025-05-11 09:25:41",
    "errors": 1,
    "student": {
      "id": 51
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-11 17:08:20",
    "finished_at": "2025-05-11 17:08:42",
    "errors": 1,
    "student": {
      "id": 51
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-11 20:16:14",
    "finished_at": "2025-05-11 20:18:30",
    "errors": 0,
    "student": {
      "id": 51
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-11 20:43:33",
    "finished_at": "2025-05-11 20:44:49",
    "errors": 1,
    "student": {
      "id": 51
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-11 09:37:58",
    "finished_at": "2025-05-11 09:39:29",
    "errors": 0,
    "student": {
      "id": 51
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-11 15:53:57",
    "finished_at": "2025-05-11 15:54:51",
    "errors": 1,
    "student": {
      "id": 51
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-11 12:23:45",
    "finished_at": "2025-05-11 12:25:25",
    "errors": 1,
    "student": {
      "id": 51
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-11 12:15:06",
    "finished_at": "2025-05-11 12:17:51",
    "errors": 1,
    "student": {
      "id": 51
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-19 20:17:34",
    "finished_at": "2025-05-19 20:19:31",
    "errors": 0,
    "student": {
      "id": 52
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-19 11:02:46",
    "finished_at": "2025-05-19 11:03:32",
    "errors": 1,
    "student": {
      "id": 52
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-19 11:22:19",
    "finished_at": "2025-05-19 11:23:33",
    "errors": 1,
    "student": {
      "id": 52
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-19 17:31:49",
    "finished_at": "2025-05-19 17:33:04",
    "errors": 1,
    "student": {
      "id": 52
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-19 21:19:56",
    "finished_at": "2025-05-19 21:22:27",
    "errors": 1,
    "student": {
      "id": 52
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-19 12:03:42",
    "finished_at": "2025-05-19 12:05:52",
    "errors": 0,
    "student": {
      "id": 52
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-19 09:49:13",
    "finished_at": "2025-05-19 09:50:46",
    "errors": 0,
    "student": {
      "id": 52
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-19 15:11:55",
    "finished_at": "2025-05-19 15:13:26",
    "errors": 0,
    "student": {
      "id": 52
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-19 09:58:10",
    "finished_at": "2025-05-19 09:59:15",
    "errors": 0,
    "student": {
      "id": 52
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-19 12:47:36",
    "finished_at": "2025-05-19 12:49:45",
    "errors": 0,
    "student": {
      "id": 52
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-23 17:29:21",
    "finished_at": "2025-05-23 17:31:41",
    "errors": 1,
    "student": {
      "id": 52
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-23 13:32:11",
    "finished_at": "2025-05-23 13:35:08",
    "errors": 0,
    "student": {
      "id": 52
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-23 14:36:45",
    "finished_at": "2025-05-23 14:38:37",
    "errors": 1,
    "student": {
      "id": 52
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-23 16:00:00",
    "finished_at": "2025-05-23 16:01:01",
    "errors": 0,
    "student": {
      "id": 52
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-23 14:29:29",
    "finished_at": "2025-05-23 14:32:08",
    "errors": 0,
    "student": {
      "id": 52
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-23 10:16:04",
    "finished_at": "2025-05-23 10:19:00",
    "errors": 0,
    "student": {
      "id": 52
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-23 13:18:55",
    "finished_at": "2025-05-23 13:21:47",
    "errors": 0,
    "student": {
      "id": 52
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-23 08:37:39",
    "finished_at": "2025-05-23 08:38:53",
    "errors": 1,
    "student": {
      "id": 52
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-23 13:23:37",
    "finished_at": "2025-05-23 13:25:59",
    "errors": 0,
    "student": {
      "id": 52
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-23 08:48:03",
    "finished_at": "2025-05-23 08:50:44",
    "errors": 1,
    "student": {
      "id": 52
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-10 08:11:08",
    "finished_at": "2025-05-10 08:13:07",
    "errors": 0,
    "student": {
      "id": 53
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-10 17:10:59",
    "finished_at": "2025-05-10 17:13:44",
    "errors": 1,
    "student": {
      "id": 53
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-10 16:47:26",
    "finished_at": "2025-05-10 16:48:45",
    "errors": 0,
    "student": {
      "id": 53
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-10 17:45:58",
    "finished_at": "2025-05-10 17:48:57",
    "errors": 1,
    "student": {
      "id": 53
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-10 11:06:22",
    "finished_at": "2025-05-10 11:08:38",
    "errors": 1,
    "student": {
      "id": 53
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-10 10:48:42",
    "finished_at": "2025-05-10 10:49:25",
    "errors": 0,
    "student": {
      "id": 53
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-10 21:18:53",
    "finished_at": "2025-05-10 21:19:30",
    "errors": 0,
    "student": {
      "id": 53
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-10 17:22:49",
    "finished_at": "2025-05-10 17:24:14",
    "errors": 1,
    "student": {
      "id": 53
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-10 14:01:26",
    "finished_at": "2025-05-10 14:02:08",
    "errors": 0,
    "student": {
      "id": 53
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-10 10:53:42",
    "finished_at": "2025-05-10 10:56:32",
    "errors": 1,
    "student": {
      "id": 53
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-10 15:05:33",
    "finished_at": "2025-05-10 15:05:46",
    "errors": 1,
    "student": {
      "id": 53
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-10 20:35:13",
    "finished_at": "2025-05-10 20:35:37",
    "errors": 0,
    "student": {
      "id": 53
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-10 11:09:30",
    "finished_at": "2025-05-10 11:12:16",
    "errors": 1,
    "student": {
      "id": 53
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-10 15:19:29",
    "finished_at": "2025-05-10 15:20:04",
    "errors": 1,
    "student": {
      "id": 53
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-10 09:48:39",
    "finished_at": "2025-05-10 09:50:27",
    "errors": 0,
    "student": {
      "id": 53
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-10 13:28:23",
    "finished_at": "2025-05-10 13:29:58",
    "errors": 0,
    "student": {
      "id": 53
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-10 20:09:52",
    "finished_at": "2025-05-10 20:10:49",
    "errors": 1,
    "student": {
      "id": 53
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-10 09:33:40",
    "finished_at": "2025-05-10 09:34:32",
    "errors": 0,
    "student": {
      "id": 53
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-10 09:23:26",
    "finished_at": "2025-05-10 09:24:02",
    "errors": 1,
    "student": {
      "id": 53
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-10 20:52:25",
    "finished_at": "2025-05-10 20:53:56",
    "errors": 1,
    "student": {
      "id": 53
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-30 19:14:05",
    "finished_at": "2025-05-30 19:14:59",
    "errors": 0,
    "student": {
      "id": 54
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-30 09:19:45",
    "finished_at": "2025-05-30 09:19:59",
    "errors": 0,
    "student": {
      "id": 54
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-30 11:49:12",
    "finished_at": "2025-05-30 11:51:39",
    "errors": 0,
    "student": {
      "id": 54
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-30 20:36:58",
    "finished_at": "2025-05-30 20:38:39",
    "errors": 1,
    "student": {
      "id": 54
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-30 19:30:26",
    "finished_at": "2025-05-30 19:32:09",
    "errors": 1,
    "student": {
      "id": 54
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-30 10:21:07",
    "finished_at": "2025-05-30 10:21:47",
    "errors": 0,
    "student": {
      "id": 54
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-30 18:43:56",
    "finished_at": "2025-05-30 18:44:34",
    "errors": 0,
    "student": {
      "id": 54
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-30 16:03:28",
    "finished_at": "2025-05-30 16:04:39",
    "errors": 1,
    "student": {
      "id": 54
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-30 14:55:33",
    "finished_at": "2025-05-30 14:55:53",
    "errors": 1,
    "student": {
      "id": 54
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-30 19:36:29",
    "finished_at": "2025-05-30 19:36:46",
    "errors": 0,
    "student": {
      "id": 54
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-16 13:51:38",
    "finished_at": "2025-05-16 13:54:34",
    "errors": 0,
    "student": {
      "id": 54
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-16 17:07:41",
    "finished_at": "2025-05-16 17:08:19",
    "errors": 1,
    "student": {
      "id": 54
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-16 08:07:27",
    "finished_at": "2025-05-16 08:09:19",
    "errors": 1,
    "student": {
      "id": 54
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-16 09:43:03",
    "finished_at": "2025-05-16 09:45:09",
    "errors": 0,
    "student": {
      "id": 54
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-16 20:58:14",
    "finished_at": "2025-05-16 21:00:21",
    "errors": 0,
    "student": {
      "id": 54
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-16 20:02:09",
    "finished_at": "2025-05-16 20:04:47",
    "errors": 1,
    "student": {
      "id": 54
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-16 08:32:26",
    "finished_at": "2025-05-16 08:35:25",
    "errors": 1,
    "student": {
      "id": 54
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-16 17:43:57",
    "finished_at": "2025-05-16 17:45:24",
    "errors": 0,
    "student": {
      "id": 54
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-16 13:06:25",
    "finished_at": "2025-05-16 13:07:32",
    "errors": 1,
    "student": {
      "id": 54
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-16 15:33:27",
    "finished_at": "2025-05-16 15:36:20",
    "errors": 0,
    "student": {
      "id": 54
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-08 20:08:53",
    "finished_at": "2025-05-08 20:09:42",
    "errors": 0,
    "student": {
      "id": 55
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-08 17:53:24",
    "finished_at": "2025-05-08 17:53:45",
    "errors": 1,
    "student": {
      "id": 55
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-08 18:31:53",
    "finished_at": "2025-05-08 18:32:56",
    "errors": 0,
    "student": {
      "id": 55
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-08 14:51:13",
    "finished_at": "2025-05-08 14:52:34",
    "errors": 0,
    "student": {
      "id": 55
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-08 21:25:35",
    "finished_at": "2025-05-08 21:27:56",
    "errors": 0,
    "student": {
      "id": 55
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-08 21:04:36",
    "finished_at": "2025-05-08 21:06:44",
    "errors": 1,
    "student": {
      "id": 55
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-08 21:10:23",
    "finished_at": "2025-05-08 21:12:32",
    "errors": 1,
    "student": {
      "id": 55
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-08 08:25:08",
    "finished_at": "2025-05-08 08:26:13",
    "errors": 1,
    "student": {
      "id": 55
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-08 17:46:41",
    "finished_at": "2025-05-08 17:48:43",
    "errors": 1,
    "student": {
      "id": 55
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-08 12:39:25",
    "finished_at": "2025-05-08 12:42:23",
    "errors": 1,
    "student": {
      "id": 55
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-27 17:20:55",
    "finished_at": "2025-05-27 17:21:22",
    "errors": 1,
    "student": {
      "id": 55
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-27 16:16:02",
    "finished_at": "2025-05-27 16:18:07",
    "errors": 1,
    "student": {
      "id": 55
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-27 10:08:16",
    "finished_at": "2025-05-27 10:09:30",
    "errors": 1,
    "student": {
      "id": 55
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-27 09:17:09",
    "finished_at": "2025-05-27 09:17:52",
    "errors": 1,
    "student": {
      "id": 55
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-27 12:23:37",
    "finished_at": "2025-05-27 12:25:53",
    "errors": 1,
    "student": {
      "id": 55
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-27 10:14:47",
    "finished_at": "2025-05-27 10:17:19",
    "errors": 0,
    "student": {
      "id": 55
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-27 12:23:09",
    "finished_at": "2025-05-27 12:23:31",
    "errors": 1,
    "student": {
      "id": 55
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-27 12:06:05",
    "finished_at": "2025-05-27 12:06:33",
    "errors": 1,
    "student": {
      "id": 55
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-27 11:05:47",
    "finished_at": "2025-05-27 11:07:31",
    "errors": 0,
    "student": {
      "id": 55
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-27 11:05:38",
    "finished_at": "2025-05-27 11:08:12",
    "errors": 0,
    "student": {
      "id": 55
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-05 10:00:19",
    "finished_at": "2025-05-05 10:00:31",
    "errors": 1,
    "student": {
      "id": 56
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-05 21:52:43",
    "finished_at": "2025-05-05 21:54:51",
    "errors": 0,
    "student": {
      "id": 56
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-05 15:04:45",
    "finished_at": "2025-05-05 15:04:58",
    "errors": 0,
    "student": {
      "id": 56
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-05 15:30:54",
    "finished_at": "2025-05-05 15:31:33",
    "errors": 1,
    "student": {
      "id": 56
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-05 20:49:50",
    "finished_at": "2025-05-05 20:50:40",
    "errors": 1,
    "student": {
      "id": 56
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-05 08:44:23",
    "finished_at": "2025-05-05 08:47:09",
    "errors": 0,
    "student": {
      "id": 56
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-05 10:46:56",
    "finished_at": "2025-05-05 10:48:22",
    "errors": 1,
    "student": {
      "id": 56
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-05 17:52:18",
    "finished_at": "2025-05-05 17:54:22",
    "errors": 1,
    "student": {
      "id": 56
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-05 20:56:47",
    "finished_at": "2025-05-05 20:57:19",
    "errors": 1,
    "student": {
      "id": 56
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-05 18:44:22",
    "finished_at": "2025-05-05 18:45:18",
    "errors": 1,
    "student": {
      "id": 56
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-26 11:26:16",
    "finished_at": "2025-05-26 11:27:15",
    "errors": 1,
    "student": {
      "id": 56
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-26 21:41:37",
    "finished_at": "2025-05-26 21:43:34",
    "errors": 1,
    "student": {
      "id": 56
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-26 16:31:49",
    "finished_at": "2025-05-26 16:33:02",
    "errors": 1,
    "student": {
      "id": 56
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-26 13:37:17",
    "finished_at": "2025-05-26 13:38:48",
    "errors": 1,
    "student": {
      "id": 56
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-26 09:58:22",
    "finished_at": "2025-05-26 09:58:35",
    "errors": 1,
    "student": {
      "id": 56
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-26 12:08:55",
    "finished_at": "2025-05-26 12:11:48",
    "errors": 0,
    "student": {
      "id": 56
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-26 11:01:24",
    "finished_at": "2025-05-26 11:01:41",
    "errors": 1,
    "student": {
      "id": 56
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-26 08:14:30",
    "finished_at": "2025-05-26 08:15:43",
    "errors": 0,
    "student": {
      "id": 56
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-26 10:57:40",
    "finished_at": "2025-05-26 11:00:03",
    "errors": 0,
    "student": {
      "id": 56
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-26 09:11:35",
    "finished_at": "2025-05-26 09:11:47",
    "errors": 1,
    "student": {
      "id": 56
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-27 18:12:25",
    "finished_at": "2025-05-27 18:13:52",
    "errors": 1,
    "student": {
      "id": 57
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-27 16:37:25",
    "finished_at": "2025-05-27 16:40:23",
    "errors": 1,
    "student": {
      "id": 57
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-27 14:40:29",
    "finished_at": "2025-05-27 14:40:58",
    "errors": 1,
    "student": {
      "id": 57
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-27 15:01:40",
    "finished_at": "2025-05-27 15:02:25",
    "errors": 0,
    "student": {
      "id": 57
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-27 14:28:53",
    "finished_at": "2025-05-27 14:31:03",
    "errors": 1,
    "student": {
      "id": 57
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-27 18:56:58",
    "finished_at": "2025-05-27 18:57:57",
    "errors": 1,
    "student": {
      "id": 57
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-27 14:07:53",
    "finished_at": "2025-05-27 14:10:45",
    "errors": 0,
    "student": {
      "id": 57
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-27 14:22:17",
    "finished_at": "2025-05-27 14:23:30",
    "errors": 1,
    "student": {
      "id": 57
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-27 08:32:06",
    "finished_at": "2025-05-27 08:33:57",
    "errors": 1,
    "student": {
      "id": 57
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-27 12:22:17",
    "finished_at": "2025-05-27 12:24:43",
    "errors": 0,
    "student": {
      "id": 57
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-24 18:39:59",
    "finished_at": "2025-05-24 18:42:46",
    "errors": 0,
    "student": {
      "id": 57
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-24 20:27:32",
    "finished_at": "2025-05-24 20:29:02",
    "errors": 1,
    "student": {
      "id": 57
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-24 13:11:32",
    "finished_at": "2025-05-24 13:14:05",
    "errors": 1,
    "student": {
      "id": 57
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-24 11:20:37",
    "finished_at": "2025-05-24 11:21:36",
    "errors": 1,
    "student": {
      "id": 57
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-24 16:18:00",
    "finished_at": "2025-05-24 16:20:22",
    "errors": 0,
    "student": {
      "id": 57
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-24 21:43:36",
    "finished_at": "2025-05-24 21:45:44",
    "errors": 0,
    "student": {
      "id": 57
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-24 20:14:06",
    "finished_at": "2025-05-24 20:16:25",
    "errors": 1,
    "student": {
      "id": 57
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-24 15:55:38",
    "finished_at": "2025-05-24 15:57:49",
    "errors": 0,
    "student": {
      "id": 57
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-24 14:22:23",
    "finished_at": "2025-05-24 14:23:01",
    "errors": 0,
    "student": {
      "id": 57
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-24 16:41:14",
    "finished_at": "2025-05-24 16:43:21",
    "errors": 1,
    "student": {
      "id": 57
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-12 11:00:46",
    "finished_at": "2025-05-12 11:01:19",
    "errors": 1,
    "student": {
      "id": 58
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-12 09:36:37",
    "finished_at": "2025-05-12 09:37:25",
    "errors": 0,
    "student": {
      "id": 58
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-12 11:37:14",
    "finished_at": "2025-05-12 11:39:00",
    "errors": 1,
    "student": {
      "id": 58
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-12 20:56:41",
    "finished_at": "2025-05-12 20:57:53",
    "errors": 0,
    "student": {
      "id": 58
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-12 11:02:18",
    "finished_at": "2025-05-12 11:02:53",
    "errors": 0,
    "student": {
      "id": 58
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-12 08:36:30",
    "finished_at": "2025-05-12 08:37:51",
    "errors": 1,
    "student": {
      "id": 58
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-12 12:43:44",
    "finished_at": "2025-05-12 12:45:30",
    "errors": 0,
    "student": {
      "id": 58
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-12 09:04:28",
    "finished_at": "2025-05-12 09:06:36",
    "errors": 0,
    "student": {
      "id": 58
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-12 15:23:45",
    "finished_at": "2025-05-12 15:24:30",
    "errors": 0,
    "student": {
      "id": 58
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-12 13:18:47",
    "finished_at": "2025-05-12 13:20:54",
    "errors": 0,
    "student": {
      "id": 58
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-21 10:59:37",
    "finished_at": "2025-05-21 11:00:57",
    "errors": 0,
    "student": {
      "id": 58
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-21 13:25:30",
    "finished_at": "2025-05-21 13:25:46",
    "errors": 1,
    "student": {
      "id": 58
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-21 19:48:59",
    "finished_at": "2025-05-21 19:51:55",
    "errors": 0,
    "student": {
      "id": 58
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-21 15:58:43",
    "finished_at": "2025-05-21 15:59:02",
    "errors": 0,
    "student": {
      "id": 58
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-21 12:23:55",
    "finished_at": "2025-05-21 12:25:10",
    "errors": 1,
    "student": {
      "id": 58
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-21 16:27:38",
    "finished_at": "2025-05-21 16:29:34",
    "errors": 1,
    "student": {
      "id": 58
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-21 14:44:23",
    "finished_at": "2025-05-21 14:46:58",
    "errors": 0,
    "student": {
      "id": 58
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-21 20:12:21",
    "finished_at": "2025-05-21 20:13:16",
    "errors": 1,
    "student": {
      "id": 58
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-21 16:05:08",
    "finished_at": "2025-05-21 16:08:02",
    "errors": 1,
    "student": {
      "id": 58
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-21 21:12:01",
    "finished_at": "2025-05-21 21:12:29",
    "errors": 1,
    "student": {
      "id": 58
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-16 16:03:26",
    "finished_at": "2025-05-16 16:04:30",
    "errors": 1,
    "student": {
      "id": 59
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-16 18:37:09",
    "finished_at": "2025-05-16 18:37:58",
    "errors": 0,
    "student": {
      "id": 59
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-16 19:22:26",
    "finished_at": "2025-05-16 19:24:09",
    "errors": 1,
    "student": {
      "id": 59
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-16 16:21:16",
    "finished_at": "2025-05-16 16:22:37",
    "errors": 1,
    "student": {
      "id": 59
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-16 19:52:29",
    "finished_at": "2025-05-16 19:54:05",
    "errors": 0,
    "student": {
      "id": 59
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-16 16:08:07",
    "finished_at": "2025-05-16 16:10:33",
    "errors": 1,
    "student": {
      "id": 59
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-16 19:52:43",
    "finished_at": "2025-05-16 19:53:33",
    "errors": 0,
    "student": {
      "id": 59
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-16 17:34:00",
    "finished_at": "2025-05-16 17:34:14",
    "errors": 1,
    "student": {
      "id": 59
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-16 19:23:44",
    "finished_at": "2025-05-16 19:25:02",
    "errors": 0,
    "student": {
      "id": 59
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-16 09:45:58",
    "finished_at": "2025-05-16 09:48:06",
    "errors": 1,
    "student": {
      "id": 59
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-02 17:47:13",
    "finished_at": "2025-05-02 17:49:00",
    "errors": 1,
    "student": {
      "id": 59
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-02 12:26:44",
    "finished_at": "2025-05-02 12:28:49",
    "errors": 0,
    "student": {
      "id": 59
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-02 10:05:50",
    "finished_at": "2025-05-02 10:06:00",
    "errors": 1,
    "student": {
      "id": 59
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-02 11:49:11",
    "finished_at": "2025-05-02 11:50:33",
    "errors": 0,
    "student": {
      "id": 59
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-02 17:19:44",
    "finished_at": "2025-05-02 17:21:51",
    "errors": 1,
    "student": {
      "id": 59
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-02 16:01:32",
    "finished_at": "2025-05-02 16:03:44",
    "errors": 0,
    "student": {
      "id": 59
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-02 16:20:18",
    "finished_at": "2025-05-02 16:20:41",
    "errors": 1,
    "student": {
      "id": 59
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-02 10:14:28",
    "finished_at": "2025-05-02 10:15:43",
    "errors": 0,
    "student": {
      "id": 59
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-02 21:12:46",
    "finished_at": "2025-05-02 21:15:17",
    "errors": 1,
    "student": {
      "id": 59
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-02 08:57:55",
    "finished_at": "2025-05-02 09:00:21",
    "errors": 0,
    "student": {
      "id": 59
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-03 13:50:02",
    "finished_at": "2025-05-03 13:50:36",
    "errors": 1,
    "student": {
      "id": 60
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-03 15:20:48",
    "finished_at": "2025-05-03 15:23:37",
    "errors": 1,
    "student": {
      "id": 60
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-03 10:03:01",
    "finished_at": "2025-05-03 10:05:28",
    "errors": 0,
    "student": {
      "id": 60
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-03 12:19:07",
    "finished_at": "2025-05-03 12:20:36",
    "errors": 1,
    "student": {
      "id": 60
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-03 15:08:05",
    "finished_at": "2025-05-03 15:11:05",
    "errors": 0,
    "student": {
      "id": 60
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-03 19:31:10",
    "finished_at": "2025-05-03 19:33:57",
    "errors": 0,
    "student": {
      "id": 60
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-03 19:38:46",
    "finished_at": "2025-05-03 19:39:12",
    "errors": 1,
    "student": {
      "id": 60
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-03 08:21:23",
    "finished_at": "2025-05-03 08:23:59",
    "errors": 0,
    "student": {
      "id": 60
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-03 16:40:33",
    "finished_at": "2025-05-03 16:43:23",
    "errors": 0,
    "student": {
      "id": 60
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-03 10:15:00",
    "finished_at": "2025-05-03 10:17:31",
    "errors": 0,
    "student": {
      "id": 60
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-05 21:38:52",
    "finished_at": "2025-05-05 21:40:24",
    "errors": 1,
    "student": {
      "id": 60
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-05 20:50:47",
    "finished_at": "2025-05-05 20:53:43",
    "errors": 0,
    "student": {
      "id": 60
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-05 21:19:50",
    "finished_at": "2025-05-05 21:20:43",
    "errors": 1,
    "student": {
      "id": 60
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-05 21:41:09",
    "finished_at": "2025-05-05 21:41:35",
    "errors": 1,
    "student": {
      "id": 60
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-05 21:41:11",
    "finished_at": "2025-05-05 21:43:54",
    "errors": 0,
    "student": {
      "id": 60
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-05 21:15:17",
    "finished_at": "2025-05-05 21:16:21",
    "errors": 1,
    "student": {
      "id": 60
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-05 19:38:07",
    "finished_at": "2025-05-05 19:38:47",
    "errors": 1,
    "student": {
      "id": 60
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-05 13:40:28",
    "finished_at": "2025-05-05 13:42:32",
    "errors": 0,
    "student": {
      "id": 60
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-05 17:08:25",
    "finished_at": "2025-05-05 17:10:59",
    "errors": 1,
    "student": {
      "id": 60
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-05 21:32:08",
    "finished_at": "2025-05-05 21:32:52",
    "errors": 1,
    "student": {
      "id": 60
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-13 18:39:51",
    "finished_at": "2025-05-13 18:41:21",
    "errors": 0,
    "student": {
      "id": 61
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-13 15:56:46",
    "finished_at": "2025-05-13 15:59:04",
    "errors": 0,
    "student": {
      "id": 61
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-13 12:03:30",
    "finished_at": "2025-05-13 12:04:31",
    "errors": 0,
    "student": {
      "id": 61
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-13 09:40:54",
    "finished_at": "2025-05-13 09:42:45",
    "errors": 1,
    "student": {
      "id": 61
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-13 14:27:28",
    "finished_at": "2025-05-13 14:27:52",
    "errors": 1,
    "student": {
      "id": 61
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-13 15:19:04",
    "finished_at": "2025-05-13 15:20:12",
    "errors": 0,
    "student": {
      "id": 61
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-13 17:48:26",
    "finished_at": "2025-05-13 17:49:00",
    "errors": 0,
    "student": {
      "id": 61
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-13 09:57:42",
    "finished_at": "2025-05-13 09:59:51",
    "errors": 0,
    "student": {
      "id": 61
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-13 13:27:51",
    "finished_at": "2025-05-13 13:28:11",
    "errors": 0,
    "student": {
      "id": 61
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-13 12:20:03",
    "finished_at": "2025-05-13 12:21:43",
    "errors": 1,
    "student": {
      "id": 61
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-13 08:58:56",
    "finished_at": "2025-05-13 09:01:37",
    "errors": 1,
    "student": {
      "id": 61
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-13 20:44:30",
    "finished_at": "2025-05-13 20:45:34",
    "errors": 0,
    "student": {
      "id": 61
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-13 11:07:38",
    "finished_at": "2025-05-13 11:08:20",
    "errors": 0,
    "student": {
      "id": 61
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-13 08:46:42",
    "finished_at": "2025-05-13 08:47:57",
    "errors": 0,
    "student": {
      "id": 61
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-13 21:57:15",
    "finished_at": "2025-05-13 21:57:39",
    "errors": 0,
    "student": {
      "id": 61
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-13 16:38:10",
    "finished_at": "2025-05-13 16:40:36",
    "errors": 0,
    "student": {
      "id": 61
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-13 10:17:00",
    "finished_at": "2025-05-13 10:17:27",
    "errors": 1,
    "student": {
      "id": 61
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-13 08:11:38",
    "finished_at": "2025-05-13 08:14:29",
    "errors": 0,
    "student": {
      "id": 61
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-13 18:52:45",
    "finished_at": "2025-05-13 18:53:04",
    "errors": 1,
    "student": {
      "id": 61
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-13 12:10:35",
    "finished_at": "2025-05-13 12:12:51",
    "errors": 1,
    "student": {
      "id": 61
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-11 13:12:50",
    "finished_at": "2025-05-11 13:15:49",
    "errors": 0,
    "student": {
      "id": 62
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-11 19:35:11",
    "finished_at": "2025-05-11 19:37:17",
    "errors": 1,
    "student": {
      "id": 62
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-11 10:23:10",
    "finished_at": "2025-05-11 10:24:14",
    "errors": 1,
    "student": {
      "id": 62
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-11 09:43:10",
    "finished_at": "2025-05-11 09:44:46",
    "errors": 0,
    "student": {
      "id": 62
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-11 11:28:45",
    "finished_at": "2025-05-11 11:29:31",
    "errors": 0,
    "student": {
      "id": 62
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-11 14:18:51",
    "finished_at": "2025-05-11 14:21:44",
    "errors": 0,
    "student": {
      "id": 62
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-11 21:36:05",
    "finished_at": "2025-05-11 21:39:05",
    "errors": 0,
    "student": {
      "id": 62
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-11 16:41:35",
    "finished_at": "2025-05-11 16:42:34",
    "errors": 1,
    "student": {
      "id": 62
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-11 17:12:08",
    "finished_at": "2025-05-11 17:12:40",
    "errors": 1,
    "student": {
      "id": 62
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-11 12:20:23",
    "finished_at": "2025-05-11 12:21:45",
    "errors": 1,
    "student": {
      "id": 62
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-07 11:59:01",
    "finished_at": "2025-05-07 12:00:48",
    "errors": 1,
    "student": {
      "id": 62
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-07 16:40:29",
    "finished_at": "2025-05-07 16:42:26",
    "errors": 0,
    "student": {
      "id": 62
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-07 13:31:53",
    "finished_at": "2025-05-07 13:34:17",
    "errors": 0,
    "student": {
      "id": 62
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-07 11:23:29",
    "finished_at": "2025-05-07 11:25:59",
    "errors": 0,
    "student": {
      "id": 62
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-07 14:30:18",
    "finished_at": "2025-05-07 14:32:38",
    "errors": 1,
    "student": {
      "id": 62
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-07 14:49:24",
    "finished_at": "2025-05-07 14:49:40",
    "errors": 1,
    "student": {
      "id": 62
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-07 11:05:44",
    "finished_at": "2025-05-07 11:08:26",
    "errors": 0,
    "student": {
      "id": 62
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-07 18:57:35",
    "finished_at": "2025-05-07 18:58:29",
    "errors": 0,
    "student": {
      "id": 62
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-07 08:35:14",
    "finished_at": "2025-05-07 08:37:15",
    "errors": 0,
    "student": {
      "id": 62
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-07 16:52:56",
    "finished_at": "2025-05-07 16:53:36",
    "errors": 0,
    "student": {
      "id": 62
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-19 19:07:33",
    "finished_at": "2025-05-19 19:09:38",
    "errors": 1,
    "student": {
      "id": 63
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-19 10:14:50",
    "finished_at": "2025-05-19 10:15:45",
    "errors": 0,
    "student": {
      "id": 63
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-19 08:18:15",
    "finished_at": "2025-05-19 08:20:46",
    "errors": 0,
    "student": {
      "id": 63
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-19 17:44:53",
    "finished_at": "2025-05-19 17:47:53",
    "errors": 0,
    "student": {
      "id": 63
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-19 21:43:30",
    "finished_at": "2025-05-19 21:44:33",
    "errors": 1,
    "student": {
      "id": 63
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-19 21:53:24",
    "finished_at": "2025-05-19 21:54:13",
    "errors": 1,
    "student": {
      "id": 63
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-19 17:35:28",
    "finished_at": "2025-05-19 17:35:39",
    "errors": 1,
    "student": {
      "id": 63
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-19 18:12:30",
    "finished_at": "2025-05-19 18:13:47",
    "errors": 1,
    "student": {
      "id": 63
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-19 20:07:38",
    "finished_at": "2025-05-19 20:09:39",
    "errors": 1,
    "student": {
      "id": 63
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-19 11:29:44",
    "finished_at": "2025-05-19 11:31:24",
    "errors": 1,
    "student": {
      "id": 63
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-17 20:02:49",
    "finished_at": "2025-05-17 20:03:58",
    "errors": 0,
    "student": {
      "id": 63
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-17 11:56:21",
    "finished_at": "2025-05-17 11:57:07",
    "errors": 1,
    "student": {
      "id": 63
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-17 13:35:58",
    "finished_at": "2025-05-17 13:37:58",
    "errors": 1,
    "student": {
      "id": 63
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-17 21:25:55",
    "finished_at": "2025-05-17 21:27:04",
    "errors": 0,
    "student": {
      "id": 63
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-17 13:45:02",
    "finished_at": "2025-05-17 13:46:29",
    "errors": 0,
    "student": {
      "id": 63
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-17 11:38:36",
    "finished_at": "2025-05-17 11:41:02",
    "errors": 1,
    "student": {
      "id": 63
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-17 09:20:57",
    "finished_at": "2025-05-17 09:21:16",
    "errors": 0,
    "student": {
      "id": 63
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-17 12:29:22",
    "finished_at": "2025-05-17 12:31:18",
    "errors": 1,
    "student": {
      "id": 63
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-17 16:13:15",
    "finished_at": "2025-05-17 16:14:12",
    "errors": 0,
    "student": {
      "id": 63
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-17 17:41:04",
    "finished_at": "2025-05-17 17:42:34",
    "errors": 1,
    "student": {
      "id": 63
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-18 20:29:51",
    "finished_at": "2025-05-18 20:31:05",
    "errors": 1,
    "student": {
      "id": 64
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-18 21:24:03",
    "finished_at": "2025-05-18 21:24:55",
    "errors": 1,
    "student": {
      "id": 64
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-18 17:51:04",
    "finished_at": "2025-05-18 17:52:55",
    "errors": 0,
    "student": {
      "id": 64
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-18 17:55:46",
    "finished_at": "2025-05-18 17:57:49",
    "errors": 1,
    "student": {
      "id": 64
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-18 16:51:36",
    "finished_at": "2025-05-18 16:53:41",
    "errors": 1,
    "student": {
      "id": 64
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-18 17:29:32",
    "finished_at": "2025-05-18 17:31:55",
    "errors": 0,
    "student": {
      "id": 64
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-18 15:36:50",
    "finished_at": "2025-05-18 15:39:13",
    "errors": 1,
    "student": {
      "id": 64
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-18 12:05:38",
    "finished_at": "2025-05-18 12:08:12",
    "errors": 1,
    "student": {
      "id": 64
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-18 12:14:41",
    "finished_at": "2025-05-18 12:16:12",
    "errors": 1,
    "student": {
      "id": 64
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-18 15:47:38",
    "finished_at": "2025-05-18 15:48:08",
    "errors": 0,
    "student": {
      "id": 64
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-06 15:16:31",
    "finished_at": "2025-05-06 15:18:10",
    "errors": 0,
    "student": {
      "id": 64
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-06 21:02:36",
    "finished_at": "2025-05-06 21:03:57",
    "errors": 0,
    "student": {
      "id": 64
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-06 09:05:45",
    "finished_at": "2025-05-06 09:07:27",
    "errors": 0,
    "student": {
      "id": 64
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-06 08:55:59",
    "finished_at": "2025-05-06 08:56:47",
    "errors": 1,
    "student": {
      "id": 64
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-06 12:25:24",
    "finished_at": "2025-05-06 12:27:18",
    "errors": 1,
    "student": {
      "id": 64
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-06 11:42:08",
    "finished_at": "2025-05-06 11:45:06",
    "errors": 0,
    "student": {
      "id": 64
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-06 19:13:59",
    "finished_at": "2025-05-06 19:16:08",
    "errors": 1,
    "student": {
      "id": 64
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-06 15:35:07",
    "finished_at": "2025-05-06 15:35:21",
    "errors": 0,
    "student": {
      "id": 64
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-06 13:00:28",
    "finished_at": "2025-05-06 13:02:42",
    "errors": 1,
    "student": {
      "id": 64
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-06 11:38:37",
    "finished_at": "2025-05-06 11:40:33",
    "errors": 1,
    "student": {
      "id": 64
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-04 10:14:11",
    "finished_at": "2025-05-04 10:16:48",
    "errors": 0,
    "student": {
      "id": 65
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-04 21:23:07",
    "finished_at": "2025-05-04 21:23:55",
    "errors": 1,
    "student": {
      "id": 65
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-04 09:45:09",
    "finished_at": "2025-05-04 09:47:07",
    "errors": 0,
    "student": {
      "id": 65
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-04 18:37:24",
    "finished_at": "2025-05-04 18:40:00",
    "errors": 0,
    "student": {
      "id": 65
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-04 19:50:49",
    "finished_at": "2025-05-04 19:51:47",
    "errors": 1,
    "student": {
      "id": 65
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-04 12:52:26",
    "finished_at": "2025-05-04 12:52:43",
    "errors": 0,
    "student": {
      "id": 65
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-04 08:58:08",
    "finished_at": "2025-05-04 08:58:54",
    "errors": 0,
    "student": {
      "id": 65
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-04 11:07:04",
    "finished_at": "2025-05-04 11:09:12",
    "errors": 1,
    "student": {
      "id": 65
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-04 09:40:49",
    "finished_at": "2025-05-04 09:41:34",
    "errors": 0,
    "student": {
      "id": 65
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-04 19:51:48",
    "finished_at": "2025-05-04 19:53:04",
    "errors": 1,
    "student": {
      "id": 65
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-30 17:38:27",
    "finished_at": "2025-05-30 17:39:40",
    "errors": 0,
    "student": {
      "id": 65
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-30 16:44:04",
    "finished_at": "2025-05-30 16:47:03",
    "errors": 0,
    "student": {
      "id": 65
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-30 15:02:55",
    "finished_at": "2025-05-30 15:03:18",
    "errors": 0,
    "student": {
      "id": 65
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-30 21:44:30",
    "finished_at": "2025-05-30 21:47:03",
    "errors": 1,
    "student": {
      "id": 65
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-30 20:50:22",
    "finished_at": "2025-05-30 20:51:57",
    "errors": 1,
    "student": {
      "id": 65
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-30 11:16:40",
    "finished_at": "2025-05-30 11:17:38",
    "errors": 0,
    "student": {
      "id": 65
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-30 08:24:03",
    "finished_at": "2025-05-30 08:25:57",
    "errors": 0,
    "student": {
      "id": 65
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-30 08:04:50",
    "finished_at": "2025-05-30 08:06:17",
    "errors": 1,
    "student": {
      "id": 65
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-30 18:29:16",
    "finished_at": "2025-05-30 18:31:29",
    "errors": 0,
    "student": {
      "id": 65
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-30 21:38:15",
    "finished_at": "2025-05-30 21:38:25",
    "errors": 1,
    "student": {
      "id": 65
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-27 19:05:20",
    "finished_at": "2025-05-27 19:07:33",
    "errors": 0,
    "student": {
      "id": 66
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-27 20:06:42",
    "finished_at": "2025-05-27 20:08:26",
    "errors": 0,
    "student": {
      "id": 66
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-27 08:12:08",
    "finished_at": "2025-05-27 08:15:06",
    "errors": 0,
    "student": {
      "id": 66
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-27 08:23:53",
    "finished_at": "2025-05-27 08:24:15",
    "errors": 0,
    "student": {
      "id": 66
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-27 16:45:03",
    "finished_at": "2025-05-27 16:47:43",
    "errors": 1,
    "student": {
      "id": 66
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-27 11:46:02",
    "finished_at": "2025-05-27 11:46:56",
    "errors": 0,
    "student": {
      "id": 66
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-27 09:01:53",
    "finished_at": "2025-05-27 09:03:01",
    "errors": 1,
    "student": {
      "id": 66
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-27 17:42:44",
    "finished_at": "2025-05-27 17:44:17",
    "errors": 1,
    "student": {
      "id": 66
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-27 20:50:31",
    "finished_at": "2025-05-27 20:51:49",
    "errors": 1,
    "student": {
      "id": 66
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-27 18:51:35",
    "finished_at": "2025-05-27 18:54:01",
    "errors": 0,
    "student": {
      "id": 66
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-09 19:45:06",
    "finished_at": "2025-05-09 19:45:39",
    "errors": 0,
    "student": {
      "id": 66
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-09 21:53:10",
    "finished_at": "2025-05-09 21:55:19",
    "errors": 0,
    "student": {
      "id": 66
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-09 08:20:39",
    "finished_at": "2025-05-09 08:21:39",
    "errors": 0,
    "student": {
      "id": 66
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-09 19:06:55",
    "finished_at": "2025-05-09 19:09:15",
    "errors": 1,
    "student": {
      "id": 66
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-09 16:57:58",
    "finished_at": "2025-05-09 17:00:48",
    "errors": 1,
    "student": {
      "id": 66
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-09 19:26:54",
    "finished_at": "2025-05-09 19:28:58",
    "errors": 1,
    "student": {
      "id": 66
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-09 17:09:22",
    "finished_at": "2025-05-09 17:11:21",
    "errors": 1,
    "student": {
      "id": 66
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-09 13:21:40",
    "finished_at": "2025-05-09 13:22:29",
    "errors": 1,
    "student": {
      "id": 66
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-09 18:22:23",
    "finished_at": "2025-05-09 18:23:51",
    "errors": 0,
    "student": {
      "id": 66
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-09 16:03:26",
    "finished_at": "2025-05-09 16:05:52",
    "errors": 0,
    "student": {
      "id": 66
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-21 09:21:34",
    "finished_at": "2025-05-21 09:22:52",
    "errors": 1,
    "student": {
      "id": 67
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-21 12:15:36",
    "finished_at": "2025-05-21 12:16:02",
    "errors": 1,
    "student": {
      "id": 67
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-21 21:01:45",
    "finished_at": "2025-05-21 21:04:16",
    "errors": 0,
    "student": {
      "id": 67
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-21 13:51:13",
    "finished_at": "2025-05-21 13:53:42",
    "errors": 0,
    "student": {
      "id": 67
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-21 12:22:37",
    "finished_at": "2025-05-21 12:23:00",
    "errors": 0,
    "student": {
      "id": 67
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-21 16:36:05",
    "finished_at": "2025-05-21 16:36:32",
    "errors": 0,
    "student": {
      "id": 67
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-21 10:25:03",
    "finished_at": "2025-05-21 10:26:05",
    "errors": 1,
    "student": {
      "id": 67
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-21 16:45:12",
    "finished_at": "2025-05-21 16:47:06",
    "errors": 0,
    "student": {
      "id": 67
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-21 16:27:57",
    "finished_at": "2025-05-21 16:30:25",
    "errors": 0,
    "student": {
      "id": 67
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-21 19:21:14",
    "finished_at": "2025-05-21 19:22:58",
    "errors": 0,
    "student": {
      "id": 67
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-25 14:39:37",
    "finished_at": "2025-05-25 14:40:30",
    "errors": 0,
    "student": {
      "id": 67
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-25 16:00:42",
    "finished_at": "2025-05-25 16:01:55",
    "errors": 1,
    "student": {
      "id": 67
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-25 08:22:41",
    "finished_at": "2025-05-25 08:23:49",
    "errors": 1,
    "student": {
      "id": 67
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-25 12:18:07",
    "finished_at": "2025-05-25 12:20:20",
    "errors": 0,
    "student": {
      "id": 67
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-25 17:36:47",
    "finished_at": "2025-05-25 17:39:17",
    "errors": 1,
    "student": {
      "id": 67
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-25 08:04:39",
    "finished_at": "2025-05-25 08:04:56",
    "errors": 0,
    "student": {
      "id": 67
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-25 14:48:16",
    "finished_at": "2025-05-25 14:50:01",
    "errors": 0,
    "student": {
      "id": 67
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-25 21:33:11",
    "finished_at": "2025-05-25 21:33:35",
    "errors": 0,
    "student": {
      "id": 67
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-25 13:05:23",
    "finished_at": "2025-05-25 13:05:38",
    "errors": 0,
    "student": {
      "id": 67
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-25 09:56:41",
    "finished_at": "2025-05-25 09:59:22",
    "errors": 1,
    "student": {
      "id": 67
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-21 12:56:23",
    "finished_at": "2025-05-21 12:58:07",
    "errors": 1,
    "student": {
      "id": 68
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-21 16:51:11",
    "finished_at": "2025-05-21 16:52:46",
    "errors": 1,
    "student": {
      "id": 68
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-21 18:49:05",
    "finished_at": "2025-05-21 18:49:21",
    "errors": 1,
    "student": {
      "id": 68
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-21 20:36:28",
    "finished_at": "2025-05-21 20:38:40",
    "errors": 1,
    "student": {
      "id": 68
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-21 08:37:10",
    "finished_at": "2025-05-21 08:38:06",
    "errors": 1,
    "student": {
      "id": 68
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-21 20:21:17",
    "finished_at": "2025-05-21 20:22:25",
    "errors": 0,
    "student": {
      "id": 68
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-21 11:21:23",
    "finished_at": "2025-05-21 11:23:06",
    "errors": 0,
    "student": {
      "id": 68
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-21 14:49:45",
    "finished_at": "2025-05-21 14:50:58",
    "errors": 0,
    "student": {
      "id": 68
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-21 09:59:09",
    "finished_at": "2025-05-21 10:01:10",
    "errors": 1,
    "student": {
      "id": 68
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-21 09:46:49",
    "finished_at": "2025-05-21 09:47:41",
    "errors": 0,
    "student": {
      "id": 68
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-29 17:47:10",
    "finished_at": "2025-05-29 17:47:30",
    "errors": 1,
    "student": {
      "id": 68
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-29 19:09:40",
    "finished_at": "2025-05-29 19:10:09",
    "errors": 1,
    "student": {
      "id": 68
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-29 11:05:43",
    "finished_at": "2025-05-29 11:07:41",
    "errors": 1,
    "student": {
      "id": 68
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-29 16:32:35",
    "finished_at": "2025-05-29 16:33:43",
    "errors": 1,
    "student": {
      "id": 68
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-29 16:35:02",
    "finished_at": "2025-05-29 16:36:24",
    "errors": 1,
    "student": {
      "id": 68
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-29 20:18:54",
    "finished_at": "2025-05-29 20:20:19",
    "errors": 0,
    "student": {
      "id": 68
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-29 12:38:30",
    "finished_at": "2025-05-29 12:39:20",
    "errors": 1,
    "student": {
      "id": 68
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-29 17:17:49",
    "finished_at": "2025-05-29 17:19:08",
    "errors": 1,
    "student": {
      "id": 68
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-29 17:08:39",
    "finished_at": "2025-05-29 17:11:28",
    "errors": 1,
    "student": {
      "id": 68
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-29 14:15:57",
    "finished_at": "2025-05-29 14:16:59",
    "errors": 1,
    "student": {
      "id": 68
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-10 09:46:06",
    "finished_at": "2025-05-10 09:47:20",
    "errors": 1,
    "student": {
      "id": 69
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-10 13:16:26",
    "finished_at": "2025-05-10 13:17:20",
    "errors": 0,
    "student": {
      "id": 69
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-10 15:59:27",
    "finished_at": "2025-05-10 15:59:58",
    "errors": 1,
    "student": {
      "id": 69
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-10 08:37:23",
    "finished_at": "2025-05-10 08:39:30",
    "errors": 0,
    "student": {
      "id": 69
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-10 20:43:27",
    "finished_at": "2025-05-10 20:46:18",
    "errors": 0,
    "student": {
      "id": 69
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-10 16:29:00",
    "finished_at": "2025-05-10 16:30:53",
    "errors": 0,
    "student": {
      "id": 69
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-10 19:36:07",
    "finished_at": "2025-05-10 19:36:53",
    "errors": 1,
    "student": {
      "id": 69
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-10 13:03:18",
    "finished_at": "2025-05-10 13:04:38",
    "errors": 0,
    "student": {
      "id": 69
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-10 20:01:35",
    "finished_at": "2025-05-10 20:02:08",
    "errors": 1,
    "student": {
      "id": 69
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-10 09:15:38",
    "finished_at": "2025-05-10 09:16:39",
    "errors": 0,
    "student": {
      "id": 69
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-18 15:40:40",
    "finished_at": "2025-05-18 15:42:45",
    "errors": 0,
    "student": {
      "id": 69
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-18 18:03:37",
    "finished_at": "2025-05-18 18:04:35",
    "errors": 0,
    "student": {
      "id": 69
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-18 14:27:39",
    "finished_at": "2025-05-18 14:28:11",
    "errors": 0,
    "student": {
      "id": 69
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-18 13:58:35",
    "finished_at": "2025-05-18 14:01:33",
    "errors": 0,
    "student": {
      "id": 69
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-18 08:35:08",
    "finished_at": "2025-05-18 08:37:36",
    "errors": 0,
    "student": {
      "id": 69
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-18 11:12:30",
    "finished_at": "2025-05-18 11:13:03",
    "errors": 1,
    "student": {
      "id": 69
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-18 17:37:15",
    "finished_at": "2025-05-18 17:40:00",
    "errors": 1,
    "student": {
      "id": 69
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-18 13:34:40",
    "finished_at": "2025-05-18 13:36:24",
    "errors": 0,
    "student": {
      "id": 69
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-18 17:52:19",
    "finished_at": "2025-05-18 17:52:30",
    "errors": 1,
    "student": {
      "id": 69
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-18 13:36:32",
    "finished_at": "2025-05-18 13:38:46",
    "errors": 1,
    "student": {
      "id": 69
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-28 16:22:49",
    "finished_at": "2025-05-28 16:23:43",
    "errors": 0,
    "student": {
      "id": 70
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-28 19:44:12",
    "finished_at": "2025-05-28 19:45:40",
    "errors": 0,
    "student": {
      "id": 70
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-28 09:22:45",
    "finished_at": "2025-05-28 09:24:28",
    "errors": 1,
    "student": {
      "id": 70
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-28 18:53:14",
    "finished_at": "2025-05-28 18:56:07",
    "errors": 0,
    "student": {
      "id": 70
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-28 11:48:45",
    "finished_at": "2025-05-28 11:50:46",
    "errors": 1,
    "student": {
      "id": 70
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-28 21:25:22",
    "finished_at": "2025-05-28 21:25:48",
    "errors": 1,
    "student": {
      "id": 70
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-28 16:32:20",
    "finished_at": "2025-05-28 16:34:13",
    "errors": 0,
    "student": {
      "id": 70
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-28 13:48:50",
    "finished_at": "2025-05-28 13:51:22",
    "errors": 0,
    "student": {
      "id": 70
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-28 10:55:58",
    "finished_at": "2025-05-28 10:57:55",
    "errors": 0,
    "student": {
      "id": 70
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-28 17:15:59",
    "finished_at": "2025-05-28 17:18:35",
    "errors": 1,
    "student": {
      "id": 70
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-29 16:28:48",
    "finished_at": "2025-05-29 16:30:32",
    "errors": 1,
    "student": {
      "id": 70
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-29 20:09:20",
    "finished_at": "2025-05-29 20:11:45",
    "errors": 0,
    "student": {
      "id": 70
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-29 17:36:45",
    "finished_at": "2025-05-29 17:39:17",
    "errors": 0,
    "student": {
      "id": 70
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-29 11:38:24",
    "finished_at": "2025-05-29 11:39:22",
    "errors": 1,
    "student": {
      "id": 70
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-29 15:41:19",
    "finished_at": "2025-05-29 15:42:31",
    "errors": 0,
    "student": {
      "id": 70
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-29 14:56:02",
    "finished_at": "2025-05-29 14:57:11",
    "errors": 1,
    "student": {
      "id": 70
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-29 12:08:01",
    "finished_at": "2025-05-29 12:10:01",
    "errors": 1,
    "student": {
      "id": 70
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-29 08:28:29",
    "finished_at": "2025-05-29 08:29:54",
    "errors": 0,
    "student": {
      "id": 70
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-29 08:04:15",
    "finished_at": "2025-05-29 08:05:11",
    "errors": 0,
    "student": {
      "id": 70
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-29 11:28:44",
    "finished_at": "2025-05-29 11:29:00",
    "errors": 0,
    "student": {
      "id": 70
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-07 17:23:36",
    "finished_at": "2025-05-07 17:23:59",
    "errors": 0,
    "student": {
      "id": 71
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-07 20:10:27",
    "finished_at": "2025-05-07 20:13:10",
    "errors": 1,
    "student": {
      "id": 71
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-07 18:49:37",
    "finished_at": "2025-05-07 18:51:39",
    "errors": 0,
    "student": {
      "id": 71
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-07 14:14:13",
    "finished_at": "2025-05-07 14:15:42",
    "errors": 1,
    "student": {
      "id": 71
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-07 17:11:49",
    "finished_at": "2025-05-07 17:14:36",
    "errors": 0,
    "student": {
      "id": 71
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-07 10:50:00",
    "finished_at": "2025-05-07 10:51:19",
    "errors": 1,
    "student": {
      "id": 71
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-07 09:52:56",
    "finished_at": "2025-05-07 09:55:06",
    "errors": 1,
    "student": {
      "id": 71
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-07 12:06:54",
    "finished_at": "2025-05-07 12:08:26",
    "errors": 0,
    "student": {
      "id": 71
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-07 17:15:37",
    "finished_at": "2025-05-07 17:16:18",
    "errors": 0,
    "student": {
      "id": 71
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-07 17:17:53",
    "finished_at": "2025-05-07 17:20:26",
    "errors": 0,
    "student": {
      "id": 71
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-20 08:38:55",
    "finished_at": "2025-05-20 08:39:49",
    "errors": 0,
    "student": {
      "id": 71
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-20 18:58:27",
    "finished_at": "2025-05-20 18:59:52",
    "errors": 0,
    "student": {
      "id": 71
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-20 12:40:52",
    "finished_at": "2025-05-20 12:43:44",
    "errors": 0,
    "student": {
      "id": 71
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-20 12:03:35",
    "finished_at": "2025-05-20 12:04:06",
    "errors": 0,
    "student": {
      "id": 71
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-20 14:59:30",
    "finished_at": "2025-05-20 15:00:24",
    "errors": 1,
    "student": {
      "id": 71
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-20 10:18:51",
    "finished_at": "2025-05-20 10:21:00",
    "errors": 0,
    "student": {
      "id": 71
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-20 21:27:35",
    "finished_at": "2025-05-20 21:29:59",
    "errors": 1,
    "student": {
      "id": 71
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-20 16:32:39",
    "finished_at": "2025-05-20 16:34:53",
    "errors": 0,
    "student": {
      "id": 71
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-20 12:10:05",
    "finished_at": "2025-05-20 12:12:56",
    "errors": 1,
    "student": {
      "id": 71
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-20 14:06:42",
    "finished_at": "2025-05-20 14:09:30",
    "errors": 1,
    "student": {
      "id": 71
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-25 12:59:47",
    "finished_at": "2025-05-25 13:01:26",
    "errors": 0,
    "student": {
      "id": 72
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-25 09:41:40",
    "finished_at": "2025-05-25 09:43:44",
    "errors": 1,
    "student": {
      "id": 72
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-25 21:06:07",
    "finished_at": "2025-05-25 21:06:24",
    "errors": 0,
    "student": {
      "id": 72
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-25 17:40:30",
    "finished_at": "2025-05-25 17:43:22",
    "errors": 1,
    "student": {
      "id": 72
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-25 19:43:05",
    "finished_at": "2025-05-25 19:44:56",
    "errors": 1,
    "student": {
      "id": 72
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-25 16:13:26",
    "finished_at": "2025-05-25 16:14:39",
    "errors": 0,
    "student": {
      "id": 72
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-25 18:45:45",
    "finished_at": "2025-05-25 18:47:40",
    "errors": 0,
    "student": {
      "id": 72
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-25 20:23:26",
    "finished_at": "2025-05-25 20:26:06",
    "errors": 1,
    "student": {
      "id": 72
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-25 16:50:12",
    "finished_at": "2025-05-25 16:51:38",
    "errors": 1,
    "student": {
      "id": 72
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-25 14:08:33",
    "finished_at": "2025-05-25 14:10:39",
    "errors": 0,
    "student": {
      "id": 72
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-25 10:59:28",
    "finished_at": "2025-05-25 11:02:08",
    "errors": 1,
    "student": {
      "id": 72
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-25 21:30:04",
    "finished_at": "2025-05-25 21:30:20",
    "errors": 1,
    "student": {
      "id": 72
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-25 09:27:00",
    "finished_at": "2025-05-25 09:28:45",
    "errors": 0,
    "student": {
      "id": 72
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-25 14:22:31",
    "finished_at": "2025-05-25 14:24:13",
    "errors": 0,
    "student": {
      "id": 72
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-25 12:25:57",
    "finished_at": "2025-05-25 12:26:30",
    "errors": 0,
    "student": {
      "id": 72
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-25 16:15:41",
    "finished_at": "2025-05-25 16:16:53",
    "errors": 0,
    "student": {
      "id": 72
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-25 12:39:14",
    "finished_at": "2025-05-25 12:41:12",
    "errors": 0,
    "student": {
      "id": 72
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-25 15:18:15",
    "finished_at": "2025-05-25 15:18:56",
    "errors": 0,
    "student": {
      "id": 72
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-25 15:55:48",
    "finished_at": "2025-05-25 15:57:56",
    "errors": 0,
    "student": {
      "id": 72
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-25 10:36:48",
    "finished_at": "2025-05-25 10:39:17",
    "errors": 1,
    "student": {
      "id": 72
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-14 12:27:36",
    "finished_at": "2025-05-14 12:30:18",
    "errors": 1,
    "student": {
      "id": 73
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-14 16:12:08",
    "finished_at": "2025-05-14 16:14:46",
    "errors": 0,
    "student": {
      "id": 73
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-14 08:03:52",
    "finished_at": "2025-05-14 08:05:43",
    "errors": 1,
    "student": {
      "id": 73
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-14 20:51:01",
    "finished_at": "2025-05-14 20:51:42",
    "errors": 0,
    "student": {
      "id": 73
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-14 15:42:14",
    "finished_at": "2025-05-14 15:44:47",
    "errors": 1,
    "student": {
      "id": 73
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-14 12:08:04",
    "finished_at": "2025-05-14 12:10:28",
    "errors": 1,
    "student": {
      "id": 73
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-14 13:27:46",
    "finished_at": "2025-05-14 13:30:45",
    "errors": 0,
    "student": {
      "id": 73
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-14 19:03:25",
    "finished_at": "2025-05-14 19:06:00",
    "errors": 1,
    "student": {
      "id": 73
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-14 11:04:18",
    "finished_at": "2025-05-14 11:05:07",
    "errors": 1,
    "student": {
      "id": 73
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-14 08:46:17",
    "finished_at": "2025-05-14 08:47:18",
    "errors": 1,
    "student": {
      "id": 73
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-04 15:49:59",
    "finished_at": "2025-05-04 15:52:28",
    "errors": 1,
    "student": {
      "id": 73
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-04 15:40:00",
    "finished_at": "2025-05-04 15:40:58",
    "errors": 0,
    "student": {
      "id": 73
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-04 11:01:32",
    "finished_at": "2025-05-04 11:04:10",
    "errors": 0,
    "student": {
      "id": 73
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-04 10:52:13",
    "finished_at": "2025-05-04 10:54:49",
    "errors": 1,
    "student": {
      "id": 73
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-04 17:29:08",
    "finished_at": "2025-05-04 17:30:19",
    "errors": 1,
    "student": {
      "id": 73
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-04 20:47:35",
    "finished_at": "2025-05-04 20:49:48",
    "errors": 1,
    "student": {
      "id": 73
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-04 13:50:03",
    "finished_at": "2025-05-04 13:50:17",
    "errors": 1,
    "student": {
      "id": 73
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-04 20:12:18",
    "finished_at": "2025-05-04 20:14:27",
    "errors": 0,
    "student": {
      "id": 73
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-04 21:30:22",
    "finished_at": "2025-05-04 21:30:37",
    "errors": 0,
    "student": {
      "id": 73
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-04 13:09:23",
    "finished_at": "2025-05-04 13:10:12",
    "errors": 0,
    "student": {
      "id": 73
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-14 13:28:11",
    "finished_at": "2025-05-14 13:29:21",
    "errors": 0,
    "student": {
      "id": 74
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-14 13:26:12",
    "finished_at": "2025-05-14 13:26:33",
    "errors": 1,
    "student": {
      "id": 74
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-14 10:59:47",
    "finished_at": "2025-05-14 11:00:12",
    "errors": 0,
    "student": {
      "id": 74
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-14 18:15:03",
    "finished_at": "2025-05-14 18:16:21",
    "errors": 1,
    "student": {
      "id": 74
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-14 16:25:14",
    "finished_at": "2025-05-14 16:27:14",
    "errors": 0,
    "student": {
      "id": 74
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-14 08:18:56",
    "finished_at": "2025-05-14 08:20:26",
    "errors": 0,
    "student": {
      "id": 74
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-14 09:39:20",
    "finished_at": "2025-05-14 09:40:55",
    "errors": 0,
    "student": {
      "id": 74
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-14 09:59:54",
    "finished_at": "2025-05-14 10:02:27",
    "errors": 1,
    "student": {
      "id": 74
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-14 17:08:50",
    "finished_at": "2025-05-14 17:10:26",
    "errors": 1,
    "student": {
      "id": 74
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-14 16:33:22",
    "finished_at": "2025-05-14 16:35:12",
    "errors": 1,
    "student": {
      "id": 74
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-26 17:34:09",
    "finished_at": "2025-05-26 17:37:02",
    "errors": 0,
    "student": {
      "id": 74
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-26 20:15:58",
    "finished_at": "2025-05-26 20:17:41",
    "errors": 0,
    "student": {
      "id": 74
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-26 20:24:46",
    "finished_at": "2025-05-26 20:26:40",
    "errors": 1,
    "student": {
      "id": 74
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-26 17:55:21",
    "finished_at": "2025-05-26 17:57:36",
    "errors": 0,
    "student": {
      "id": 74
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-26 12:03:00",
    "finished_at": "2025-05-26 12:05:50",
    "errors": 1,
    "student": {
      "id": 74
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-26 20:42:03",
    "finished_at": "2025-05-26 20:44:17",
    "errors": 0,
    "student": {
      "id": 74
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-26 12:06:29",
    "finished_at": "2025-05-26 12:06:40",
    "errors": 1,
    "student": {
      "id": 74
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-26 11:55:23",
    "finished_at": "2025-05-26 11:56:37",
    "errors": 1,
    "student": {
      "id": 74
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-26 10:53:13",
    "finished_at": "2025-05-26 10:55:47",
    "errors": 1,
    "student": {
      "id": 74
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-26 12:12:42",
    "finished_at": "2025-05-26 12:13:41",
    "errors": 1,
    "student": {
      "id": 74
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-21 16:40:56",
    "finished_at": "2025-05-21 16:42:25",
    "errors": 1,
    "student": {
      "id": 75
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-21 13:46:06",
    "finished_at": "2025-05-21 13:48:56",
    "errors": 0,
    "student": {
      "id": 75
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-21 20:41:51",
    "finished_at": "2025-05-21 20:42:05",
    "errors": 0,
    "student": {
      "id": 75
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-21 19:26:03",
    "finished_at": "2025-05-21 19:28:31",
    "errors": 0,
    "student": {
      "id": 75
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-21 09:58:11",
    "finished_at": "2025-05-21 09:59:43",
    "errors": 1,
    "student": {
      "id": 75
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-21 12:07:35",
    "finished_at": "2025-05-21 12:09:29",
    "errors": 0,
    "student": {
      "id": 75
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-21 16:34:12",
    "finished_at": "2025-05-21 16:36:35",
    "errors": 0,
    "student": {
      "id": 75
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-21 08:36:41",
    "finished_at": "2025-05-21 08:37:43",
    "errors": 1,
    "student": {
      "id": 75
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-21 17:19:27",
    "finished_at": "2025-05-21 17:20:16",
    "errors": 0,
    "student": {
      "id": 75
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-21 20:54:02",
    "finished_at": "2025-05-21 20:55:36",
    "errors": 0,
    "student": {
      "id": 75
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-27 21:23:59",
    "finished_at": "2025-05-27 21:25:52",
    "errors": 0,
    "student": {
      "id": 75
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-27 08:41:44",
    "finished_at": "2025-05-27 08:44:20",
    "errors": 0,
    "student": {
      "id": 75
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-27 19:24:42",
    "finished_at": "2025-05-27 19:26:31",
    "errors": 1,
    "student": {
      "id": 75
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-27 20:31:46",
    "finished_at": "2025-05-27 20:32:30",
    "errors": 1,
    "student": {
      "id": 75
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-27 16:52:12",
    "finished_at": "2025-05-27 16:54:24",
    "errors": 0,
    "student": {
      "id": 75
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-27 09:12:37",
    "finished_at": "2025-05-27 09:15:10",
    "errors": 0,
    "student": {
      "id": 75
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-27 13:51:22",
    "finished_at": "2025-05-27 13:52:32",
    "errors": 1,
    "student": {
      "id": 75
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-27 21:48:36",
    "finished_at": "2025-05-27 21:50:38",
    "errors": 0,
    "student": {
      "id": 75
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-27 19:07:06",
    "finished_at": "2025-05-27 19:09:17",
    "errors": 1,
    "student": {
      "id": 75
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-27 21:35:19",
    "finished_at": "2025-05-27 21:36:24",
    "errors": 0,
    "student": {
      "id": 75
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-17 21:40:34",
    "finished_at": "2025-05-17 21:43:14",
    "errors": 0,
    "student": {
      "id": 76
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-17 20:28:13",
    "finished_at": "2025-05-17 20:29:38",
    "errors": 0,
    "student": {
      "id": 76
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-17 18:19:23",
    "finished_at": "2025-05-17 18:22:22",
    "errors": 1,
    "student": {
      "id": 76
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-17 09:05:39",
    "finished_at": "2025-05-17 09:06:49",
    "errors": 0,
    "student": {
      "id": 76
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-17 09:52:13",
    "finished_at": "2025-05-17 09:52:56",
    "errors": 1,
    "student": {
      "id": 76
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-17 20:22:06",
    "finished_at": "2025-05-17 20:23:00",
    "errors": 0,
    "student": {
      "id": 76
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-17 19:02:57",
    "finished_at": "2025-05-17 19:04:49",
    "errors": 0,
    "student": {
      "id": 76
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-17 14:09:14",
    "finished_at": "2025-05-17 14:10:42",
    "errors": 0,
    "student": {
      "id": 76
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-17 08:06:31",
    "finished_at": "2025-05-17 08:08:05",
    "errors": 1,
    "student": {
      "id": 76
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-17 16:12:52",
    "finished_at": "2025-05-17 16:14:08",
    "errors": 0,
    "student": {
      "id": 76
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-21 17:51:46",
    "finished_at": "2025-05-21 17:52:16",
    "errors": 1,
    "student": {
      "id": 76
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-21 20:07:20",
    "finished_at": "2025-05-21 20:09:17",
    "errors": 1,
    "student": {
      "id": 76
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-21 15:48:39",
    "finished_at": "2025-05-21 15:51:07",
    "errors": 1,
    "student": {
      "id": 76
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-21 08:08:25",
    "finished_at": "2025-05-21 08:09:42",
    "errors": 0,
    "student": {
      "id": 76
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-21 12:12:46",
    "finished_at": "2025-05-21 12:14:06",
    "errors": 1,
    "student": {
      "id": 76
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-21 11:46:41",
    "finished_at": "2025-05-21 11:48:39",
    "errors": 0,
    "student": {
      "id": 76
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-21 19:52:34",
    "finished_at": "2025-05-21 19:54:38",
    "errors": 1,
    "student": {
      "id": 76
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-21 09:17:03",
    "finished_at": "2025-05-21 09:19:46",
    "errors": 0,
    "student": {
      "id": 76
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-21 20:55:05",
    "finished_at": "2025-05-21 20:55:41",
    "errors": 0,
    "student": {
      "id": 76
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-21 08:45:13",
    "finished_at": "2025-05-21 08:47:43",
    "errors": 1,
    "student": {
      "id": 76
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-12 08:34:48",
    "finished_at": "2025-05-12 08:36:22",
    "errors": 1,
    "student": {
      "id": 77
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-12 14:07:44",
    "finished_at": "2025-05-12 14:10:41",
    "errors": 0,
    "student": {
      "id": 77
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-12 08:27:20",
    "finished_at": "2025-05-12 08:27:50",
    "errors": 0,
    "student": {
      "id": 77
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-12 18:11:40",
    "finished_at": "2025-05-12 18:12:09",
    "errors": 0,
    "student": {
      "id": 77
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-12 21:38:09",
    "finished_at": "2025-05-12 21:40:18",
    "errors": 1,
    "student": {
      "id": 77
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-12 17:43:53",
    "finished_at": "2025-05-12 17:46:01",
    "errors": 0,
    "student": {
      "id": 77
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-12 10:08:04",
    "finished_at": "2025-05-12 10:09:10",
    "errors": 1,
    "student": {
      "id": 77
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-12 18:08:39",
    "finished_at": "2025-05-12 18:09:57",
    "errors": 1,
    "student": {
      "id": 77
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-12 18:09:10",
    "finished_at": "2025-05-12 18:09:21",
    "errors": 0,
    "student": {
      "id": 77
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-12 12:34:03",
    "finished_at": "2025-05-12 12:36:43",
    "errors": 0,
    "student": {
      "id": 77
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-14 13:24:41",
    "finished_at": "2025-05-14 13:27:04",
    "errors": 1,
    "student": {
      "id": 77
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-14 17:45:18",
    "finished_at": "2025-05-14 17:48:17",
    "errors": 0,
    "student": {
      "id": 77
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-14 09:51:26",
    "finished_at": "2025-05-14 09:53:55",
    "errors": 1,
    "student": {
      "id": 77
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-14 13:03:32",
    "finished_at": "2025-05-14 13:04:31",
    "errors": 0,
    "student": {
      "id": 77
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-14 08:18:16",
    "finished_at": "2025-05-14 08:19:43",
    "errors": 1,
    "student": {
      "id": 77
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-14 10:30:50",
    "finished_at": "2025-05-14 10:33:23",
    "errors": 0,
    "student": {
      "id": 77
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-14 12:18:13",
    "finished_at": "2025-05-14 12:18:34",
    "errors": 0,
    "student": {
      "id": 77
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-14 19:25:09",
    "finished_at": "2025-05-14 19:28:02",
    "errors": 1,
    "student": {
      "id": 77
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-14 09:20:55",
    "finished_at": "2025-05-14 09:23:27",
    "errors": 1,
    "student": {
      "id": 77
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-14 20:10:31",
    "finished_at": "2025-05-14 20:12:19",
    "errors": 1,
    "student": {
      "id": 77
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-27 21:47:13",
    "finished_at": "2025-05-27 21:50:03",
    "errors": 0,
    "student": {
      "id": 78
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-27 16:32:18",
    "finished_at": "2025-05-27 16:35:15",
    "errors": 0,
    "student": {
      "id": 78
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-27 12:58:57",
    "finished_at": "2025-05-27 13:00:45",
    "errors": 0,
    "student": {
      "id": 78
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-27 20:02:26",
    "finished_at": "2025-05-27 20:04:59",
    "errors": 0,
    "student": {
      "id": 78
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-27 20:15:40",
    "finished_at": "2025-05-27 20:18:27",
    "errors": 1,
    "student": {
      "id": 78
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-27 16:29:35",
    "finished_at": "2025-05-27 16:32:34",
    "errors": 0,
    "student": {
      "id": 78
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-27 08:54:33",
    "finished_at": "2025-05-27 08:56:27",
    "errors": 0,
    "student": {
      "id": 78
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-27 11:53:43",
    "finished_at": "2025-05-27 11:54:29",
    "errors": 1,
    "student": {
      "id": 78
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-27 13:00:35",
    "finished_at": "2025-05-27 13:02:06",
    "errors": 1,
    "student": {
      "id": 78
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-27 12:03:57",
    "finished_at": "2025-05-27 12:04:28",
    "errors": 0,
    "student": {
      "id": 78
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-19 08:37:37",
    "finished_at": "2025-05-19 08:38:40",
    "errors": 0,
    "student": {
      "id": 78
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-19 08:15:09",
    "finished_at": "2025-05-19 08:16:08",
    "errors": 1,
    "student": {
      "id": 78
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-19 16:50:21",
    "finished_at": "2025-05-19 16:51:30",
    "errors": 1,
    "student": {
      "id": 78
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-19 10:03:07",
    "finished_at": "2025-05-19 10:05:35",
    "errors": 1,
    "student": {
      "id": 78
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-19 21:03:48",
    "finished_at": "2025-05-19 21:05:46",
    "errors": 0,
    "student": {
      "id": 78
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-19 10:52:52",
    "finished_at": "2025-05-19 10:55:37",
    "errors": 0,
    "student": {
      "id": 78
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-19 16:34:05",
    "finished_at": "2025-05-19 16:34:39",
    "errors": 1,
    "student": {
      "id": 78
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-19 19:40:09",
    "finished_at": "2025-05-19 19:41:37",
    "errors": 0,
    "student": {
      "id": 78
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-19 14:43:51",
    "finished_at": "2025-05-19 14:45:07",
    "errors": 1,
    "student": {
      "id": 78
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-19 14:33:05",
    "finished_at": "2025-05-19 14:35:46",
    "errors": 0,
    "student": {
      "id": 78
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-29 15:15:35",
    "finished_at": "2025-05-29 15:17:23",
    "errors": 0,
    "student": {
      "id": 79
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-29 15:07:56",
    "finished_at": "2025-05-29 15:08:17",
    "errors": 0,
    "student": {
      "id": 79
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-29 12:43:35",
    "finished_at": "2025-05-29 12:46:33",
    "errors": 1,
    "student": {
      "id": 79
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-29 10:34:04",
    "finished_at": "2025-05-29 10:34:32",
    "errors": 0,
    "student": {
      "id": 79
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-29 08:31:42",
    "finished_at": "2025-05-29 08:32:19",
    "errors": 0,
    "student": {
      "id": 79
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-29 11:24:59",
    "finished_at": "2025-05-29 11:27:44",
    "errors": 1,
    "student": {
      "id": 79
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-29 16:25:53",
    "finished_at": "2025-05-29 16:27:40",
    "errors": 0,
    "student": {
      "id": 79
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-29 08:17:44",
    "finished_at": "2025-05-29 08:20:12",
    "errors": 1,
    "student": {
      "id": 79
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-29 12:25:51",
    "finished_at": "2025-05-29 12:27:59",
    "errors": 0,
    "student": {
      "id": 79
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-29 14:20:37",
    "finished_at": "2025-05-29 14:22:30",
    "errors": 1,
    "student": {
      "id": 79
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-10 15:28:31",
    "finished_at": "2025-05-10 15:31:11",
    "errors": 0,
    "student": {
      "id": 79
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-10 09:01:10",
    "finished_at": "2025-05-10 09:03:57",
    "errors": 1,
    "student": {
      "id": 79
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-10 09:19:00",
    "finished_at": "2025-05-10 09:20:57",
    "errors": 0,
    "student": {
      "id": 79
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-10 14:04:45",
    "finished_at": "2025-05-10 14:06:12",
    "errors": 0,
    "student": {
      "id": 79
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-10 08:24:07",
    "finished_at": "2025-05-10 08:25:56",
    "errors": 1,
    "student": {
      "id": 79
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-10 17:44:58",
    "finished_at": "2025-05-10 17:47:23",
    "errors": 0,
    "student": {
      "id": 79
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-10 08:46:28",
    "finished_at": "2025-05-10 08:47:56",
    "errors": 1,
    "student": {
      "id": 79
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-10 14:22:04",
    "finished_at": "2025-05-10 14:22:25",
    "errors": 1,
    "student": {
      "id": 79
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-10 14:42:10",
    "finished_at": "2025-05-10 14:43:46",
    "errors": 1,
    "student": {
      "id": 79
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-10 21:11:27",
    "finished_at": "2025-05-10 21:12:42",
    "errors": 1,
    "student": {
      "id": 79
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-22 18:19:40",
    "finished_at": "2025-05-22 18:22:22",
    "errors": 0,
    "student": {
      "id": 80
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-22 12:22:06",
    "finished_at": "2025-05-22 12:23:56",
    "errors": 0,
    "student": {
      "id": 80
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-22 19:27:49",
    "finished_at": "2025-05-22 19:30:27",
    "errors": 0,
    "student": {
      "id": 80
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-22 13:31:48",
    "finished_at": "2025-05-22 13:32:03",
    "errors": 0,
    "student": {
      "id": 80
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-22 17:14:00",
    "finished_at": "2025-05-22 17:16:47",
    "errors": 1,
    "student": {
      "id": 80
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-22 17:05:40",
    "finished_at": "2025-05-22 17:08:01",
    "errors": 1,
    "student": {
      "id": 80
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-22 10:28:01",
    "finished_at": "2025-05-22 10:29:39",
    "errors": 0,
    "student": {
      "id": 80
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-22 12:03:12",
    "finished_at": "2025-05-22 12:04:29",
    "errors": 1,
    "student": {
      "id": 80
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-22 09:24:40",
    "finished_at": "2025-05-22 09:25:47",
    "errors": 1,
    "student": {
      "id": 80
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-22 16:55:30",
    "finished_at": "2025-05-22 16:56:24",
    "errors": 0,
    "student": {
      "id": 80
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-13 18:07:54",
    "finished_at": "2025-05-13 18:09:33",
    "errors": 0,
    "student": {
      "id": 80
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-13 17:51:11",
    "finished_at": "2025-05-13 17:52:21",
    "errors": 0,
    "student": {
      "id": 80
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-13 10:12:11",
    "finished_at": "2025-05-13 10:14:05",
    "errors": 0,
    "student": {
      "id": 80
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-13 10:12:47",
    "finished_at": "2025-05-13 10:13:11",
    "errors": 1,
    "student": {
      "id": 80
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-13 15:45:06",
    "finished_at": "2025-05-13 15:47:45",
    "errors": 1,
    "student": {
      "id": 80
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-13 19:44:04",
    "finished_at": "2025-05-13 19:44:47",
    "errors": 0,
    "student": {
      "id": 80
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-13 19:15:37",
    "finished_at": "2025-05-13 19:16:41",
    "errors": 0,
    "student": {
      "id": 80
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-13 11:02:27",
    "finished_at": "2025-05-13 11:02:50",
    "errors": 0,
    "student": {
      "id": 80
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-13 18:43:32",
    "finished_at": "2025-05-13 18:45:12",
    "errors": 1,
    "student": {
      "id": 80
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-13 13:13:09",
    "finished_at": "2025-05-13 13:15:19",
    "errors": 0,
    "student": {
      "id": 80
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-22 17:29:31",
    "finished_at": "2025-05-22 17:30:25",
    "errors": 0,
    "student": {
      "id": 81
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-22 09:43:17",
    "finished_at": "2025-05-22 09:43:28",
    "errors": 1,
    "student": {
      "id": 81
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-22 08:13:50",
    "finished_at": "2025-05-22 08:15:29",
    "errors": 1,
    "student": {
      "id": 81
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-22 16:55:54",
    "finished_at": "2025-05-22 16:58:20",
    "errors": 1,
    "student": {
      "id": 81
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-22 20:34:03",
    "finished_at": "2025-05-22 20:34:45",
    "errors": 1,
    "student": {
      "id": 81
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-22 09:54:30",
    "finished_at": "2025-05-22 09:54:40",
    "errors": 0,
    "student": {
      "id": 81
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-22 12:09:13",
    "finished_at": "2025-05-22 12:09:39",
    "errors": 0,
    "student": {
      "id": 81
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-22 11:22:47",
    "finished_at": "2025-05-22 11:24:07",
    "errors": 0,
    "student": {
      "id": 81
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-22 18:47:30",
    "finished_at": "2025-05-22 18:49:19",
    "errors": 1,
    "student": {
      "id": 81
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-22 09:16:32",
    "finished_at": "2025-05-22 09:17:48",
    "errors": 0,
    "student": {
      "id": 81
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-30 14:30:54",
    "finished_at": "2025-05-30 14:33:00",
    "errors": 1,
    "student": {
      "id": 81
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-30 11:29:47",
    "finished_at": "2025-05-30 11:32:15",
    "errors": 1,
    "student": {
      "id": 81
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-30 19:20:50",
    "finished_at": "2025-05-30 19:22:54",
    "errors": 1,
    "student": {
      "id": 81
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-30 14:32:33",
    "finished_at": "2025-05-30 14:33:20",
    "errors": 0,
    "student": {
      "id": 81
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-30 08:15:40",
    "finished_at": "2025-05-30 08:15:59",
    "errors": 0,
    "student": {
      "id": 81
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-30 09:37:06",
    "finished_at": "2025-05-30 09:40:04",
    "errors": 0,
    "student": {
      "id": 81
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-30 16:49:11",
    "finished_at": "2025-05-30 16:49:37",
    "errors": 1,
    "student": {
      "id": 81
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-30 10:45:30",
    "finished_at": "2025-05-30 10:47:34",
    "errors": 1,
    "student": {
      "id": 81
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-30 13:54:16",
    "finished_at": "2025-05-30 13:56:06",
    "errors": 0,
    "student": {
      "id": 81
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-30 10:53:44",
    "finished_at": "2025-05-30 10:54:49",
    "errors": 0,
    "student": {
      "id": 81
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-14 20:10:28",
    "finished_at": "2025-05-14 20:11:35",
    "errors": 0,
    "student": {
      "id": 82
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-14 20:07:23",
    "finished_at": "2025-05-14 20:08:48",
    "errors": 1,
    "student": {
      "id": 82
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-14 17:13:31",
    "finished_at": "2025-05-14 17:14:58",
    "errors": 0,
    "student": {
      "id": 82
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-14 11:26:57",
    "finished_at": "2025-05-14 11:28:36",
    "errors": 0,
    "student": {
      "id": 82
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-14 10:40:44",
    "finished_at": "2025-05-14 10:43:42",
    "errors": 0,
    "student": {
      "id": 82
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-14 12:13:40",
    "finished_at": "2025-05-14 12:14:57",
    "errors": 0,
    "student": {
      "id": 82
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-14 13:24:55",
    "finished_at": "2025-05-14 13:25:20",
    "errors": 0,
    "student": {
      "id": 82
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-14 21:29:40",
    "finished_at": "2025-05-14 21:32:11",
    "errors": 0,
    "student": {
      "id": 82
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-14 10:42:12",
    "finished_at": "2025-05-14 10:43:46",
    "errors": 0,
    "student": {
      "id": 82
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-14 12:23:48",
    "finished_at": "2025-05-14 12:24:20",
    "errors": 1,
    "student": {
      "id": 82
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-18 12:35:20",
    "finished_at": "2025-05-18 12:37:17",
    "errors": 0,
    "student": {
      "id": 82
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-18 19:01:25",
    "finished_at": "2025-05-18 19:02:17",
    "errors": 1,
    "student": {
      "id": 82
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-18 09:15:26",
    "finished_at": "2025-05-18 09:18:25",
    "errors": 1,
    "student": {
      "id": 82
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-18 14:20:11",
    "finished_at": "2025-05-18 14:22:16",
    "errors": 1,
    "student": {
      "id": 82
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-18 12:54:35",
    "finished_at": "2025-05-18 12:54:58",
    "errors": 0,
    "student": {
      "id": 82
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-18 17:39:14",
    "finished_at": "2025-05-18 17:40:57",
    "errors": 0,
    "student": {
      "id": 82
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-18 09:46:56",
    "finished_at": "2025-05-18 09:47:24",
    "errors": 1,
    "student": {
      "id": 82
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-18 14:23:07",
    "finished_at": "2025-05-18 14:24:51",
    "errors": 0,
    "student": {
      "id": 82
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-18 12:47:52",
    "finished_at": "2025-05-18 12:49:15",
    "errors": 0,
    "student": {
      "id": 82
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-18 21:55:51",
    "finished_at": "2025-05-18 21:57:00",
    "errors": 0,
    "student": {
      "id": 82
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-01 12:04:02",
    "finished_at": "2025-05-01 12:04:32",
    "errors": 0,
    "student": {
      "id": 83
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-01 11:13:41",
    "finished_at": "2025-05-01 11:16:03",
    "errors": 1,
    "student": {
      "id": 83
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-01 14:42:14",
    "finished_at": "2025-05-01 14:43:29",
    "errors": 0,
    "student": {
      "id": 83
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-01 13:35:06",
    "finished_at": "2025-05-01 13:36:00",
    "errors": 0,
    "student": {
      "id": 83
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-01 18:07:24",
    "finished_at": "2025-05-01 18:09:16",
    "errors": 1,
    "student": {
      "id": 83
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-01 16:19:00",
    "finished_at": "2025-05-01 16:20:45",
    "errors": 1,
    "student": {
      "id": 83
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-01 13:12:47",
    "finished_at": "2025-05-01 13:13:45",
    "errors": 0,
    "student": {
      "id": 83
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-01 10:37:22",
    "finished_at": "2025-05-01 10:37:33",
    "errors": 0,
    "student": {
      "id": 83
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-01 14:03:56",
    "finished_at": "2025-05-01 14:06:20",
    "errors": 0,
    "student": {
      "id": 83
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-01 21:56:57",
    "finished_at": "2025-05-01 21:57:47",
    "errors": 0,
    "student": {
      "id": 83
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-18 14:53:00",
    "finished_at": "2025-05-18 14:55:31",
    "errors": 1,
    "student": {
      "id": 83
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-18 13:09:02",
    "finished_at": "2025-05-18 13:10:26",
    "errors": 0,
    "student": {
      "id": 83
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-18 08:37:58",
    "finished_at": "2025-05-18 08:38:36",
    "errors": 0,
    "student": {
      "id": 83
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-18 19:28:18",
    "finished_at": "2025-05-18 19:30:23",
    "errors": 0,
    "student": {
      "id": 83
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-18 15:38:37",
    "finished_at": "2025-05-18 15:40:11",
    "errors": 1,
    "student": {
      "id": 83
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-18 12:11:05",
    "finished_at": "2025-05-18 12:13:46",
    "errors": 1,
    "student": {
      "id": 83
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-18 19:18:45",
    "finished_at": "2025-05-18 19:21:05",
    "errors": 0,
    "student": {
      "id": 83
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-18 12:42:38",
    "finished_at": "2025-05-18 12:43:34",
    "errors": 1,
    "student": {
      "id": 83
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-18 14:52:17",
    "finished_at": "2025-05-18 14:53:33",
    "errors": 0,
    "student": {
      "id": 83
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-18 10:05:24",
    "finished_at": "2025-05-18 10:06:26",
    "errors": 0,
    "student": {
      "id": 83
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-22 09:08:19",
    "finished_at": "2025-05-22 09:09:10",
    "errors": 1,
    "student": {
      "id": 84
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-22 09:54:49",
    "finished_at": "2025-05-22 09:55:49",
    "errors": 0,
    "student": {
      "id": 84
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-22 15:07:13",
    "finished_at": "2025-05-22 15:07:24",
    "errors": 1,
    "student": {
      "id": 84
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-22 11:53:32",
    "finished_at": "2025-05-22 11:55:58",
    "errors": 0,
    "student": {
      "id": 84
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-22 13:34:28",
    "finished_at": "2025-05-22 13:37:15",
    "errors": 1,
    "student": {
      "id": 84
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-22 08:06:48",
    "finished_at": "2025-05-22 08:08:15",
    "errors": 0,
    "student": {
      "id": 84
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-22 16:45:52",
    "finished_at": "2025-05-22 16:46:16",
    "errors": 0,
    "student": {
      "id": 84
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-22 19:17:54",
    "finished_at": "2025-05-22 19:20:38",
    "errors": 1,
    "student": {
      "id": 84
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-22 20:19:25",
    "finished_at": "2025-05-22 20:20:44",
    "errors": 0,
    "student": {
      "id": 84
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-22 12:18:16",
    "finished_at": "2025-05-22 12:19:24",
    "errors": 0,
    "student": {
      "id": 84
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-27 17:32:21",
    "finished_at": "2025-05-27 17:32:47",
    "errors": 0,
    "student": {
      "id": 84
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-27 13:50:03",
    "finished_at": "2025-05-27 13:50:33",
    "errors": 0,
    "student": {
      "id": 84
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-27 14:17:30",
    "finished_at": "2025-05-27 14:18:26",
    "errors": 1,
    "student": {
      "id": 84
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-27 10:06:42",
    "finished_at": "2025-05-27 10:09:13",
    "errors": 0,
    "student": {
      "id": 84
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-27 21:30:14",
    "finished_at": "2025-05-27 21:30:54",
    "errors": 0,
    "student": {
      "id": 84
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-27 14:18:00",
    "finished_at": "2025-05-27 14:20:47",
    "errors": 0,
    "student": {
      "id": 84
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-27 20:17:53",
    "finished_at": "2025-05-27 20:18:17",
    "errors": 1,
    "student": {
      "id": 84
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-27 13:36:31",
    "finished_at": "2025-05-27 13:37:33",
    "errors": 0,
    "student": {
      "id": 84
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-27 18:54:32",
    "finished_at": "2025-05-27 18:55:15",
    "errors": 0,
    "student": {
      "id": 84
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-27 15:53:44",
    "finished_at": "2025-05-27 15:54:09",
    "errors": 0,
    "student": {
      "id": 84
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-24 12:32:50",
    "finished_at": "2025-05-24 12:33:36",
    "errors": 1,
    "student": {
      "id": 85
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-24 16:44:35",
    "finished_at": "2025-05-24 16:44:51",
    "errors": 0,
    "student": {
      "id": 85
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-24 18:58:58",
    "finished_at": "2025-05-24 19:01:42",
    "errors": 1,
    "student": {
      "id": 85
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-24 15:31:31",
    "finished_at": "2025-05-24 15:33:05",
    "errors": 0,
    "student": {
      "id": 85
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-24 21:09:04",
    "finished_at": "2025-05-24 21:10:50",
    "errors": 1,
    "student": {
      "id": 85
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-24 21:09:38",
    "finished_at": "2025-05-24 21:12:20",
    "errors": 0,
    "student": {
      "id": 85
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-24 09:41:29",
    "finished_at": "2025-05-24 09:43:24",
    "errors": 0,
    "student": {
      "id": 85
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-24 18:05:14",
    "finished_at": "2025-05-24 18:07:29",
    "errors": 1,
    "student": {
      "id": 85
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-24 08:12:44",
    "finished_at": "2025-05-24 08:14:53",
    "errors": 0,
    "student": {
      "id": 85
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-24 13:43:55",
    "finished_at": "2025-05-24 13:45:10",
    "errors": 0,
    "student": {
      "id": 85
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-06 11:21:49",
    "finished_at": "2025-05-06 11:22:59",
    "errors": 0,
    "student": {
      "id": 85
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-06 16:36:04",
    "finished_at": "2025-05-06 16:37:24",
    "errors": 1,
    "student": {
      "id": 85
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-06 08:45:33",
    "finished_at": "2025-05-06 08:48:32",
    "errors": 0,
    "student": {
      "id": 85
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-06 20:01:30",
    "finished_at": "2025-05-06 20:02:07",
    "errors": 1,
    "student": {
      "id": 85
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-06 19:41:23",
    "finished_at": "2025-05-06 19:41:34",
    "errors": 0,
    "student": {
      "id": 85
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-06 14:43:53",
    "finished_at": "2025-05-06 14:45:19",
    "errors": 0,
    "student": {
      "id": 85
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-06 16:38:49",
    "finished_at": "2025-05-06 16:39:51",
    "errors": 1,
    "student": {
      "id": 85
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-06 15:22:55",
    "finished_at": "2025-05-06 15:25:39",
    "errors": 1,
    "student": {
      "id": 85
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-06 13:47:05",
    "finished_at": "2025-05-06 13:47:23",
    "errors": 0,
    "student": {
      "id": 85
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-06 19:14:18",
    "finished_at": "2025-05-06 19:14:48",
    "errors": 0,
    "student": {
      "id": 85
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-10 10:38:24",
    "finished_at": "2025-05-10 10:40:26",
    "errors": 1,
    "student": {
      "id": 86
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-10 20:52:26",
    "finished_at": "2025-05-10 20:54:20",
    "errors": 0,
    "student": {
      "id": 86
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-10 18:16:35",
    "finished_at": "2025-05-10 18:18:04",
    "errors": 0,
    "student": {
      "id": 86
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-10 09:05:38",
    "finished_at": "2025-05-10 09:07:39",
    "errors": 0,
    "student": {
      "id": 86
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-10 11:56:10",
    "finished_at": "2025-05-10 11:57:42",
    "errors": 1,
    "student": {
      "id": 86
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-10 14:45:28",
    "finished_at": "2025-05-10 14:48:02",
    "errors": 1,
    "student": {
      "id": 86
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-10 17:53:16",
    "finished_at": "2025-05-10 17:55:03",
    "errors": 1,
    "student": {
      "id": 86
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-10 18:31:57",
    "finished_at": "2025-05-10 18:33:49",
    "errors": 0,
    "student": {
      "id": 86
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-10 19:34:48",
    "finished_at": "2025-05-10 19:37:13",
    "errors": 1,
    "student": {
      "id": 86
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-10 17:06:42",
    "finished_at": "2025-05-10 17:07:57",
    "errors": 0,
    "student": {
      "id": 86
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-13 08:58:57",
    "finished_at": "2025-05-13 09:01:50",
    "errors": 1,
    "student": {
      "id": 86
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-13 17:35:27",
    "finished_at": "2025-05-13 17:37:10",
    "errors": 0,
    "student": {
      "id": 86
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-13 17:53:15",
    "finished_at": "2025-05-13 17:53:47",
    "errors": 1,
    "student": {
      "id": 86
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-13 13:02:22",
    "finished_at": "2025-05-13 13:04:55",
    "errors": 0,
    "student": {
      "id": 86
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-13 16:36:31",
    "finished_at": "2025-05-13 16:37:58",
    "errors": 0,
    "student": {
      "id": 86
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-13 11:34:52",
    "finished_at": "2025-05-13 11:37:08",
    "errors": 0,
    "student": {
      "id": 86
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-13 16:09:31",
    "finished_at": "2025-05-13 16:11:29",
    "errors": 1,
    "student": {
      "id": 86
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-13 08:33:55",
    "finished_at": "2025-05-13 08:35:56",
    "errors": 1,
    "student": {
      "id": 86
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-13 12:51:37",
    "finished_at": "2025-05-13 12:52:36",
    "errors": 1,
    "student": {
      "id": 86
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-13 08:45:10",
    "finished_at": "2025-05-13 08:46:55",
    "errors": 1,
    "student": {
      "id": 86
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-24 21:50:00",
    "finished_at": "2025-05-24 21:50:48",
    "errors": 0,
    "student": {
      "id": 87
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-24 16:58:48",
    "finished_at": "2025-05-24 16:59:45",
    "errors": 1,
    "student": {
      "id": 87
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-24 14:58:00",
    "finished_at": "2025-05-24 14:59:36",
    "errors": 0,
    "student": {
      "id": 87
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-24 16:12:46",
    "finished_at": "2025-05-24 16:13:57",
    "errors": 1,
    "student": {
      "id": 87
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-24 10:10:55",
    "finished_at": "2025-05-24 10:13:55",
    "errors": 1,
    "student": {
      "id": 87
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-24 11:09:06",
    "finished_at": "2025-05-24 11:10:27",
    "errors": 1,
    "student": {
      "id": 87
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-24 08:42:57",
    "finished_at": "2025-05-24 08:45:22",
    "errors": 1,
    "student": {
      "id": 87
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-24 14:18:53",
    "finished_at": "2025-05-24 14:19:33",
    "errors": 0,
    "student": {
      "id": 87
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-24 08:28:20",
    "finished_at": "2025-05-24 08:29:27",
    "errors": 1,
    "student": {
      "id": 87
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-24 09:29:30",
    "finished_at": "2025-05-24 09:31:23",
    "errors": 1,
    "student": {
      "id": 87
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-15 18:08:13",
    "finished_at": "2025-05-15 18:08:41",
    "errors": 1,
    "student": {
      "id": 87
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-15 13:21:06",
    "finished_at": "2025-05-15 13:23:53",
    "errors": 0,
    "student": {
      "id": 87
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-15 15:36:28",
    "finished_at": "2025-05-15 15:37:32",
    "errors": 1,
    "student": {
      "id": 87
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-15 08:35:44",
    "finished_at": "2025-05-15 08:38:14",
    "errors": 1,
    "student": {
      "id": 87
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-15 11:27:34",
    "finished_at": "2025-05-15 11:27:48",
    "errors": 1,
    "student": {
      "id": 87
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-15 13:31:38",
    "finished_at": "2025-05-15 13:32:58",
    "errors": 1,
    "student": {
      "id": 87
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-15 16:49:30",
    "finished_at": "2025-05-15 16:50:44",
    "errors": 0,
    "student": {
      "id": 87
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-15 20:56:34",
    "finished_at": "2025-05-15 20:57:46",
    "errors": 1,
    "student": {
      "id": 87
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-15 19:49:36",
    "finished_at": "2025-05-15 19:51:26",
    "errors": 1,
    "student": {
      "id": 87
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-15 12:07:31",
    "finished_at": "2025-05-15 12:09:11",
    "errors": 0,
    "student": {
      "id": 87
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-23 08:41:27",
    "finished_at": "2025-05-23 08:42:21",
    "errors": 1,
    "student": {
      "id": 88
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-23 21:25:53",
    "finished_at": "2025-05-23 21:26:31",
    "errors": 1,
    "student": {
      "id": 88
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-23 19:54:41",
    "finished_at": "2025-05-23 19:57:41",
    "errors": 0,
    "student": {
      "id": 88
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-23 11:12:45",
    "finished_at": "2025-05-23 11:13:22",
    "errors": 1,
    "student": {
      "id": 88
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-23 19:25:13",
    "finished_at": "2025-05-23 19:27:13",
    "errors": 1,
    "student": {
      "id": 88
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-23 19:40:12",
    "finished_at": "2025-05-23 19:42:56",
    "errors": 1,
    "student": {
      "id": 88
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-23 11:28:27",
    "finished_at": "2025-05-23 11:29:06",
    "errors": 0,
    "student": {
      "id": 88
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-23 21:17:23",
    "finished_at": "2025-05-23 21:18:47",
    "errors": 1,
    "student": {
      "id": 88
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-23 10:22:44",
    "finished_at": "2025-05-23 10:23:10",
    "errors": 0,
    "student": {
      "id": 88
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-23 19:38:53",
    "finished_at": "2025-05-23 19:41:07",
    "errors": 0,
    "student": {
      "id": 88
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-13 17:19:59",
    "finished_at": "2025-05-13 17:20:38",
    "errors": 1,
    "student": {
      "id": 88
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-13 08:42:03",
    "finished_at": "2025-05-13 08:42:19",
    "errors": 1,
    "student": {
      "id": 88
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-13 08:02:38",
    "finished_at": "2025-05-13 08:02:59",
    "errors": 1,
    "student": {
      "id": 88
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-13 15:23:54",
    "finished_at": "2025-05-13 15:24:52",
    "errors": 1,
    "student": {
      "id": 88
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-13 16:28:18",
    "finished_at": "2025-05-13 16:29:59",
    "errors": 1,
    "student": {
      "id": 88
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-13 08:42:46",
    "finished_at": "2025-05-13 08:45:33",
    "errors": 0,
    "student": {
      "id": 88
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-13 14:04:43",
    "finished_at": "2025-05-13 14:05:25",
    "errors": 0,
    "student": {
      "id": 88
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-13 17:01:35",
    "finished_at": "2025-05-13 17:04:03",
    "errors": 1,
    "student": {
      "id": 88
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-13 17:25:57",
    "finished_at": "2025-05-13 17:27:39",
    "errors": 0,
    "student": {
      "id": 88
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-13 18:19:08",
    "finished_at": "2025-05-13 18:20:55",
    "errors": 0,
    "student": {
      "id": 88
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-11 11:21:26",
    "finished_at": "2025-05-11 11:22:41",
    "errors": 0,
    "student": {
      "id": 89
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-11 14:39:37",
    "finished_at": "2025-05-11 14:41:11",
    "errors": 0,
    "student": {
      "id": 89
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-11 09:06:28",
    "finished_at": "2025-05-11 09:08:29",
    "errors": 0,
    "student": {
      "id": 89
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-11 17:22:05",
    "finished_at": "2025-05-11 17:25:01",
    "errors": 0,
    "student": {
      "id": 89
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-11 09:57:03",
    "finished_at": "2025-05-11 09:59:52",
    "errors": 1,
    "student": {
      "id": 89
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-11 13:29:08",
    "finished_at": "2025-05-11 13:29:37",
    "errors": 1,
    "student": {
      "id": 89
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-11 08:52:55",
    "finished_at": "2025-05-11 08:53:37",
    "errors": 0,
    "student": {
      "id": 89
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-11 12:33:32",
    "finished_at": "2025-05-11 12:34:43",
    "errors": 1,
    "student": {
      "id": 89
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-11 19:03:58",
    "finished_at": "2025-05-11 19:06:52",
    "errors": 0,
    "student": {
      "id": 89
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-11 16:21:44",
    "finished_at": "2025-05-11 16:23:39",
    "errors": 1,
    "student": {
      "id": 89
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-14 12:54:44",
    "finished_at": "2025-05-14 12:56:28",
    "errors": 0,
    "student": {
      "id": 89
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-14 15:25:51",
    "finished_at": "2025-05-14 15:27:31",
    "errors": 0,
    "student": {
      "id": 89
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-14 19:05:12",
    "finished_at": "2025-05-14 19:07:42",
    "errors": 1,
    "student": {
      "id": 89
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-14 15:44:59",
    "finished_at": "2025-05-14 15:46:10",
    "errors": 0,
    "student": {
      "id": 89
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-14 18:51:04",
    "finished_at": "2025-05-14 18:51:23",
    "errors": 0,
    "student": {
      "id": 89
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-14 11:33:22",
    "finished_at": "2025-05-14 11:34:30",
    "errors": 1,
    "student": {
      "id": 89
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-14 16:49:32",
    "finished_at": "2025-05-14 16:51:03",
    "errors": 0,
    "student": {
      "id": 89
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-14 14:24:13",
    "finished_at": "2025-05-14 14:25:35",
    "errors": 1,
    "student": {
      "id": 89
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-14 16:51:37",
    "finished_at": "2025-05-14 16:53:16",
    "errors": 0,
    "student": {
      "id": 89
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-14 17:51:16",
    "finished_at": "2025-05-14 17:52:05",
    "errors": 0,
    "student": {
      "id": 89
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-27 13:22:43",
    "finished_at": "2025-05-27 13:23:23",
    "errors": 0,
    "student": {
      "id": 90
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-27 19:04:17",
    "finished_at": "2025-05-27 19:05:01",
    "errors": 1,
    "student": {
      "id": 90
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-27 15:31:23",
    "finished_at": "2025-05-27 15:32:46",
    "errors": 0,
    "student": {
      "id": 90
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-27 08:33:46",
    "finished_at": "2025-05-27 08:36:15",
    "errors": 1,
    "student": {
      "id": 90
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-27 14:47:17",
    "finished_at": "2025-05-27 14:49:35",
    "errors": 0,
    "student": {
      "id": 90
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-27 14:04:19",
    "finished_at": "2025-05-27 14:07:13",
    "errors": 0,
    "student": {
      "id": 90
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-27 15:23:26",
    "finished_at": "2025-05-27 15:24:37",
    "errors": 1,
    "student": {
      "id": 90
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-27 19:44:52",
    "finished_at": "2025-05-27 19:46:28",
    "errors": 0,
    "student": {
      "id": 90
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-27 19:09:00",
    "finished_at": "2025-05-27 19:10:29",
    "errors": 1,
    "student": {
      "id": 90
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-27 17:28:24",
    "finished_at": "2025-05-27 17:28:49",
    "errors": 1,
    "student": {
      "id": 90
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-31 16:35:06",
    "finished_at": "2025-05-31 16:37:27",
    "errors": 1,
    "student": {
      "id": 90
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-31 13:41:31",
    "finished_at": "2025-05-31 13:44:16",
    "errors": 0,
    "student": {
      "id": 90
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-31 19:24:26",
    "finished_at": "2025-05-31 19:25:27",
    "errors": 0,
    "student": {
      "id": 90
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-31 10:03:21",
    "finished_at": "2025-05-31 10:05:40",
    "errors": 1,
    "student": {
      "id": 90
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-31 18:24:39",
    "finished_at": "2025-05-31 18:26:23",
    "errors": 1,
    "student": {
      "id": 90
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-31 13:53:48",
    "finished_at": "2025-05-31 13:54:42",
    "errors": 1,
    "student": {
      "id": 90
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-31 16:38:19",
    "finished_at": "2025-05-31 16:38:44",
    "errors": 1,
    "student": {
      "id": 90
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-31 20:42:08",
    "finished_at": "2025-05-31 20:42:23",
    "errors": 1,
    "student": {
      "id": 90
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-31 15:45:05",
    "finished_at": "2025-05-31 15:47:54",
    "errors": 0,
    "student": {
      "id": 90
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-31 09:40:54",
    "finished_at": "2025-05-31 09:41:45",
    "errors": 0,
    "student": {
      "id": 90
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-30 21:07:02",
    "finished_at": "2025-05-30 21:07:41",
    "errors": 0,
    "student": {
      "id": 91
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-30 19:08:03",
    "finished_at": "2025-05-30 19:08:54",
    "errors": 0,
    "student": {
      "id": 91
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-30 14:00:06",
    "finished_at": "2025-05-30 14:03:05",
    "errors": 0,
    "student": {
      "id": 91
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-30 21:16:39",
    "finished_at": "2025-05-30 21:19:36",
    "errors": 1,
    "student": {
      "id": 91
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-30 08:40:38",
    "finished_at": "2025-05-30 08:41:22",
    "errors": 1,
    "student": {
      "id": 91
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-30 08:00:45",
    "finished_at": "2025-05-30 08:03:26",
    "errors": 1,
    "student": {
      "id": 91
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-30 13:35:51",
    "finished_at": "2025-05-30 13:38:51",
    "errors": 0,
    "student": {
      "id": 91
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-30 11:02:50",
    "finished_at": "2025-05-30 11:03:16",
    "errors": 1,
    "student": {
      "id": 91
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-30 17:11:11",
    "finished_at": "2025-05-30 17:13:13",
    "errors": 0,
    "student": {
      "id": 91
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-30 17:01:43",
    "finished_at": "2025-05-30 17:04:40",
    "errors": 0,
    "student": {
      "id": 91
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-18 09:41:32",
    "finished_at": "2025-05-18 09:42:52",
    "errors": 1,
    "student": {
      "id": 91
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-18 20:17:35",
    "finished_at": "2025-05-18 20:17:57",
    "errors": 1,
    "student": {
      "id": 91
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-18 16:57:12",
    "finished_at": "2025-05-18 16:58:10",
    "errors": 1,
    "student": {
      "id": 91
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-18 21:01:09",
    "finished_at": "2025-05-18 21:02:17",
    "errors": 0,
    "student": {
      "id": 91
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-18 17:27:46",
    "finished_at": "2025-05-18 17:28:52",
    "errors": 0,
    "student": {
      "id": 91
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-18 19:57:26",
    "finished_at": "2025-05-18 19:59:57",
    "errors": 0,
    "student": {
      "id": 91
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-18 19:10:33",
    "finished_at": "2025-05-18 19:11:09",
    "errors": 0,
    "student": {
      "id": 91
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-18 19:28:05",
    "finished_at": "2025-05-18 19:28:24",
    "errors": 1,
    "student": {
      "id": 91
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-18 19:44:16",
    "finished_at": "2025-05-18 19:44:34",
    "errors": 1,
    "student": {
      "id": 91
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-18 19:32:16",
    "finished_at": "2025-05-18 19:35:02",
    "errors": 0,
    "student": {
      "id": 91
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-19 17:44:48",
    "finished_at": "2025-05-19 17:45:33",
    "errors": 0,
    "student": {
      "id": 92
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-19 10:25:38",
    "finished_at": "2025-05-19 10:27:04",
    "errors": 1,
    "student": {
      "id": 92
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-19 17:32:35",
    "finished_at": "2025-05-19 17:35:01",
    "errors": 0,
    "student": {
      "id": 92
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-19 16:15:46",
    "finished_at": "2025-05-19 16:16:12",
    "errors": 0,
    "student": {
      "id": 92
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-19 08:29:06",
    "finished_at": "2025-05-19 08:29:16",
    "errors": 1,
    "student": {
      "id": 92
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-19 13:27:49",
    "finished_at": "2025-05-19 13:30:07",
    "errors": 0,
    "student": {
      "id": 92
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-19 15:28:21",
    "finished_at": "2025-05-19 15:28:45",
    "errors": 0,
    "student": {
      "id": 92
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-19 19:29:36",
    "finished_at": "2025-05-19 19:30:16",
    "errors": 1,
    "student": {
      "id": 92
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-19 17:22:29",
    "finished_at": "2025-05-19 17:24:30",
    "errors": 0,
    "student": {
      "id": 92
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-19 14:16:25",
    "finished_at": "2025-05-19 14:17:24",
    "errors": 1,
    "student": {
      "id": 92
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-02 17:09:34",
    "finished_at": "2025-05-02 17:12:01",
    "errors": 1,
    "student": {
      "id": 92
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-02 19:00:18",
    "finished_at": "2025-05-02 19:02:55",
    "errors": 0,
    "student": {
      "id": 92
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-02 16:29:23",
    "finished_at": "2025-05-02 16:31:43",
    "errors": 0,
    "student": {
      "id": 92
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-02 12:11:31",
    "finished_at": "2025-05-02 12:12:00",
    "errors": 0,
    "student": {
      "id": 92
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-02 13:57:53",
    "finished_at": "2025-05-02 13:59:19",
    "errors": 0,
    "student": {
      "id": 92
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-02 14:57:13",
    "finished_at": "2025-05-02 14:57:42",
    "errors": 1,
    "student": {
      "id": 92
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-02 16:58:07",
    "finished_at": "2025-05-02 16:59:49",
    "errors": 1,
    "student": {
      "id": 92
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-02 19:52:22",
    "finished_at": "2025-05-02 19:54:42",
    "errors": 0,
    "student": {
      "id": 92
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-02 11:34:18",
    "finished_at": "2025-05-02 11:35:40",
    "errors": 1,
    "student": {
      "id": 92
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-02 09:06:40",
    "finished_at": "2025-05-02 09:06:50",
    "errors": 0,
    "student": {
      "id": 92
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-13 09:24:20",
    "finished_at": "2025-05-13 09:26:59",
    "errors": 1,
    "student": {
      "id": 93
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-13 16:38:17",
    "finished_at": "2025-05-13 16:39:08",
    "errors": 0,
    "student": {
      "id": 93
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-13 13:13:27",
    "finished_at": "2025-05-13 13:15:49",
    "errors": 1,
    "student": {
      "id": 93
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-13 09:04:07",
    "finished_at": "2025-05-13 09:06:35",
    "errors": 0,
    "student": {
      "id": 93
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-13 19:57:41",
    "finished_at": "2025-05-13 19:59:06",
    "errors": 0,
    "student": {
      "id": 93
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-13 16:57:04",
    "finished_at": "2025-05-13 16:59:53",
    "errors": 0,
    "student": {
      "id": 93
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-13 08:35:38",
    "finished_at": "2025-05-13 08:36:38",
    "errors": 1,
    "student": {
      "id": 93
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-13 21:49:55",
    "finished_at": "2025-05-13 21:51:23",
    "errors": 0,
    "student": {
      "id": 93
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-13 11:09:57",
    "finished_at": "2025-05-13 11:10:59",
    "errors": 1,
    "student": {
      "id": 93
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-13 16:14:53",
    "finished_at": "2025-05-13 16:16:26",
    "errors": 0,
    "student": {
      "id": 93
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-08 11:26:36",
    "finished_at": "2025-05-08 11:27:41",
    "errors": 0,
    "student": {
      "id": 93
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-08 15:52:35",
    "finished_at": "2025-05-08 15:52:52",
    "errors": 1,
    "student": {
      "id": 93
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-08 16:03:49",
    "finished_at": "2025-05-08 16:05:46",
    "errors": 1,
    "student": {
      "id": 93
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-08 13:15:44",
    "finished_at": "2025-05-08 13:16:04",
    "errors": 1,
    "student": {
      "id": 93
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-08 11:20:37",
    "finished_at": "2025-05-08 11:21:09",
    "errors": 0,
    "student": {
      "id": 93
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-08 12:00:33",
    "finished_at": "2025-05-08 12:01:34",
    "errors": 1,
    "student": {
      "id": 93
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-08 19:30:47",
    "finished_at": "2025-05-08 19:33:19",
    "errors": 1,
    "student": {
      "id": 93
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-08 08:10:57",
    "finished_at": "2025-05-08 08:13:57",
    "errors": 1,
    "student": {
      "id": 93
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-08 13:30:53",
    "finished_at": "2025-05-08 13:33:52",
    "errors": 1,
    "student": {
      "id": 93
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-08 13:59:10",
    "finished_at": "2025-05-08 14:00:37",
    "errors": 1,
    "student": {
      "id": 93
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-23 12:24:29",
    "finished_at": "2025-05-23 12:26:44",
    "errors": 0,
    "student": {
      "id": 94
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-23 10:33:58",
    "finished_at": "2025-05-23 10:35:12",
    "errors": 1,
    "student": {
      "id": 94
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-23 13:06:25",
    "finished_at": "2025-05-23 13:09:03",
    "errors": 0,
    "student": {
      "id": 94
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-23 21:09:49",
    "finished_at": "2025-05-23 21:10:01",
    "errors": 1,
    "student": {
      "id": 94
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-23 12:34:25",
    "finished_at": "2025-05-23 12:36:05",
    "errors": 0,
    "student": {
      "id": 94
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-23 19:13:14",
    "finished_at": "2025-05-23 19:15:49",
    "errors": 0,
    "student": {
      "id": 94
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-23 13:43:23",
    "finished_at": "2025-05-23 13:43:44",
    "errors": 1,
    "student": {
      "id": 94
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-23 10:44:17",
    "finished_at": "2025-05-23 10:46:57",
    "errors": 1,
    "student": {
      "id": 94
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-23 17:50:26",
    "finished_at": "2025-05-23 17:51:29",
    "errors": 0,
    "student": {
      "id": 94
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-23 14:41:15",
    "finished_at": "2025-05-23 14:42:34",
    "errors": 1,
    "student": {
      "id": 94
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-26 18:30:34",
    "finished_at": "2025-05-26 18:31:30",
    "errors": 1,
    "student": {
      "id": 94
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-26 16:44:04",
    "finished_at": "2025-05-26 16:46:22",
    "errors": 1,
    "student": {
      "id": 94
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-26 17:55:08",
    "finished_at": "2025-05-26 17:57:52",
    "errors": 0,
    "student": {
      "id": 94
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-26 08:28:43",
    "finished_at": "2025-05-26 08:28:55",
    "errors": 1,
    "student": {
      "id": 94
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-26 13:47:43",
    "finished_at": "2025-05-26 13:49:16",
    "errors": 1,
    "student": {
      "id": 94
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-26 16:06:42",
    "finished_at": "2025-05-26 16:07:34",
    "errors": 0,
    "student": {
      "id": 94
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-26 19:49:03",
    "finished_at": "2025-05-26 19:50:45",
    "errors": 1,
    "student": {
      "id": 94
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-26 08:05:29",
    "finished_at": "2025-05-26 08:07:58",
    "errors": 0,
    "student": {
      "id": 94
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-26 19:37:23",
    "finished_at": "2025-05-26 19:39:33",
    "errors": 0,
    "student": {
      "id": 94
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-26 11:48:50",
    "finished_at": "2025-05-26 11:50:46",
    "errors": 1,
    "student": {
      "id": 94
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-20 19:46:44",
    "finished_at": "2025-05-20 19:49:06",
    "errors": 0,
    "student": {
      "id": 95
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-20 21:37:52",
    "finished_at": "2025-05-20 21:39:09",
    "errors": 0,
    "student": {
      "id": 95
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-20 18:15:17",
    "finished_at": "2025-05-20 18:17:43",
    "errors": 1,
    "student": {
      "id": 95
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-20 19:01:08",
    "finished_at": "2025-05-20 19:02:32",
    "errors": 1,
    "student": {
      "id": 95
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-20 14:07:17",
    "finished_at": "2025-05-20 14:10:17",
    "errors": 0,
    "student": {
      "id": 95
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-20 11:12:06",
    "finished_at": "2025-05-20 11:13:22",
    "errors": 0,
    "student": {
      "id": 95
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-20 11:12:46",
    "finished_at": "2025-05-20 11:13:41",
    "errors": 1,
    "student": {
      "id": 95
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-20 17:16:38",
    "finished_at": "2025-05-20 17:18:12",
    "errors": 0,
    "student": {
      "id": 95
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-20 15:01:25",
    "finished_at": "2025-05-20 15:02:09",
    "errors": 0,
    "student": {
      "id": 95
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-20 10:27:09",
    "finished_at": "2025-05-20 10:28:42",
    "errors": 0,
    "student": {
      "id": 95
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-01 19:17:35",
    "finished_at": "2025-05-01 19:19:04",
    "errors": 1,
    "student": {
      "id": 95
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-01 21:55:40",
    "finished_at": "2025-05-01 21:58:15",
    "errors": 0,
    "student": {
      "id": 95
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-01 09:06:52",
    "finished_at": "2025-05-01 09:08:15",
    "errors": 1,
    "student": {
      "id": 95
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-01 16:49:46",
    "finished_at": "2025-05-01 16:50:46",
    "errors": 0,
    "student": {
      "id": 95
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-01 18:55:22",
    "finished_at": "2025-05-01 18:55:52",
    "errors": 1,
    "student": {
      "id": 95
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-01 17:06:15",
    "finished_at": "2025-05-01 17:08:38",
    "errors": 1,
    "student": {
      "id": 95
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-01 19:12:50",
    "finished_at": "2025-05-01 19:14:29",
    "errors": 0,
    "student": {
      "id": 95
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-01 18:08:55",
    "finished_at": "2025-05-01 18:10:53",
    "errors": 1,
    "student": {
      "id": 95
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-01 14:18:41",
    "finished_at": "2025-05-01 14:20:22",
    "errors": 1,
    "student": {
      "id": 95
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-01 15:38:52",
    "finished_at": "2025-05-01 15:41:00",
    "errors": 0,
    "student": {
      "id": 95
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-19 21:59:57",
    "finished_at": "2025-05-19 22:00:44",
    "errors": 1,
    "student": {
      "id": 96
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-19 18:29:52",
    "finished_at": "2025-05-19 18:32:31",
    "errors": 1,
    "student": {
      "id": 96
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-19 12:10:35",
    "finished_at": "2025-05-19 12:10:48",
    "errors": 0,
    "student": {
      "id": 96
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-19 09:48:38",
    "finished_at": "2025-05-19 09:50:11",
    "errors": 1,
    "student": {
      "id": 96
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-19 20:21:59",
    "finished_at": "2025-05-19 20:23:21",
    "errors": 1,
    "student": {
      "id": 96
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-19 09:50:08",
    "finished_at": "2025-05-19 09:51:45",
    "errors": 0,
    "student": {
      "id": 96
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-19 11:25:21",
    "finished_at": "2025-05-19 11:27:17",
    "errors": 1,
    "student": {
      "id": 96
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-19 11:48:13",
    "finished_at": "2025-05-19 11:49:36",
    "errors": 1,
    "student": {
      "id": 96
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-19 19:49:17",
    "finished_at": "2025-05-19 19:50:09",
    "errors": 1,
    "student": {
      "id": 96
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-19 19:18:55",
    "finished_at": "2025-05-19 19:19:24",
    "errors": 1,
    "student": {
      "id": 96
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-22 10:17:08",
    "finished_at": "2025-05-22 10:19:53",
    "errors": 1,
    "student": {
      "id": 96
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-22 10:33:21",
    "finished_at": "2025-05-22 10:34:54",
    "errors": 1,
    "student": {
      "id": 96
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-22 15:51:33",
    "finished_at": "2025-05-22 15:53:29",
    "errors": 0,
    "student": {
      "id": 96
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-22 15:13:42",
    "finished_at": "2025-05-22 15:16:20",
    "errors": 0,
    "student": {
      "id": 96
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-22 13:02:48",
    "finished_at": "2025-05-22 13:05:21",
    "errors": 1,
    "student": {
      "id": 96
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-22 20:21:11",
    "finished_at": "2025-05-22 20:22:18",
    "errors": 0,
    "student": {
      "id": 96
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-22 16:56:00",
    "finished_at": "2025-05-22 16:56:37",
    "errors": 0,
    "student": {
      "id": 96
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-22 11:35:29",
    "finished_at": "2025-05-22 11:37:27",
    "errors": 1,
    "student": {
      "id": 96
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-22 18:06:27",
    "finished_at": "2025-05-22 18:07:30",
    "errors": 0,
    "student": {
      "id": 96
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-22 18:31:05",
    "finished_at": "2025-05-22 18:33:23",
    "errors": 1,
    "student": {
      "id": 96
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-01 13:39:44",
    "finished_at": "2025-05-01 13:41:42",
    "errors": 0,
    "student": {
      "id": 97
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-01 10:39:50",
    "finished_at": "2025-05-01 10:42:00",
    "errors": 1,
    "student": {
      "id": 97
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-01 12:33:18",
    "finished_at": "2025-05-01 12:34:11",
    "errors": 0,
    "student": {
      "id": 97
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-01 21:01:04",
    "finished_at": "2025-05-01 21:01:31",
    "errors": 0,
    "student": {
      "id": 97
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-01 15:46:00",
    "finished_at": "2025-05-01 15:47:05",
    "errors": 1,
    "student": {
      "id": 97
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-01 10:27:50",
    "finished_at": "2025-05-01 10:29:31",
    "errors": 1,
    "student": {
      "id": 97
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-01 15:38:25",
    "finished_at": "2025-05-01 15:40:50",
    "errors": 1,
    "student": {
      "id": 97
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-01 11:19:22",
    "finished_at": "2025-05-01 11:21:48",
    "errors": 0,
    "student": {
      "id": 97
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-01 15:23:16",
    "finished_at": "2025-05-01 15:24:46",
    "errors": 0,
    "student": {
      "id": 97
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-01 21:37:16",
    "finished_at": "2025-05-01 21:38:54",
    "errors": 1,
    "student": {
      "id": 97
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-08 17:45:40",
    "finished_at": "2025-05-08 17:48:04",
    "errors": 0,
    "student": {
      "id": 97
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-08 12:18:31",
    "finished_at": "2025-05-08 12:19:07",
    "errors": 0,
    "student": {
      "id": 97
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-08 16:03:10",
    "finished_at": "2025-05-08 16:05:43",
    "errors": 1,
    "student": {
      "id": 97
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-08 16:12:58",
    "finished_at": "2025-05-08 16:15:57",
    "errors": 1,
    "student": {
      "id": 97
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-08 16:27:27",
    "finished_at": "2025-05-08 16:27:54",
    "errors": 1,
    "student": {
      "id": 97
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-08 15:44:05",
    "finished_at": "2025-05-08 15:44:25",
    "errors": 0,
    "student": {
      "id": 97
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-08 17:33:03",
    "finished_at": "2025-05-08 17:33:55",
    "errors": 1,
    "student": {
      "id": 97
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-08 18:52:14",
    "finished_at": "2025-05-08 18:53:58",
    "errors": 0,
    "student": {
      "id": 97
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-08 17:13:48",
    "finished_at": "2025-05-08 17:16:27",
    "errors": 1,
    "student": {
      "id": 97
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-08 12:44:53",
    "finished_at": "2025-05-08 12:46:07",
    "errors": 1,
    "student": {
      "id": 97
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-20 19:11:35",
    "finished_at": "2025-05-20 19:12:52",
    "errors": 0,
    "student": {
      "id": 98
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-20 10:56:13",
    "finished_at": "2025-05-20 10:59:09",
    "errors": 1,
    "student": {
      "id": 98
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-20 16:41:03",
    "finished_at": "2025-05-20 16:43:57",
    "errors": 1,
    "student": {
      "id": 98
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-20 16:16:13",
    "finished_at": "2025-05-20 16:19:03",
    "errors": 0,
    "student": {
      "id": 98
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-20 13:59:12",
    "finished_at": "2025-05-20 14:00:46",
    "errors": 0,
    "student": {
      "id": 98
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-20 08:23:55",
    "finished_at": "2025-05-20 08:24:51",
    "errors": 1,
    "student": {
      "id": 98
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-20 11:28:24",
    "finished_at": "2025-05-20 11:30:25",
    "errors": 0,
    "student": {
      "id": 98
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-20 15:38:48",
    "finished_at": "2025-05-20 15:41:33",
    "errors": 0,
    "student": {
      "id": 98
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-20 16:47:36",
    "finished_at": "2025-05-20 16:47:58",
    "errors": 1,
    "student": {
      "id": 98
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-20 12:43:50",
    "finished_at": "2025-05-20 12:44:13",
    "errors": 1,
    "student": {
      "id": 98
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-08 11:20:23",
    "finished_at": "2025-05-08 11:22:59",
    "errors": 0,
    "student": {
      "id": 98
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-08 14:22:55",
    "finished_at": "2025-05-08 14:24:39",
    "errors": 1,
    "student": {
      "id": 98
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-08 21:55:19",
    "finished_at": "2025-05-08 21:57:12",
    "errors": 0,
    "student": {
      "id": 98
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-08 20:36:36",
    "finished_at": "2025-05-08 20:38:29",
    "errors": 1,
    "student": {
      "id": 98
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-08 15:52:26",
    "finished_at": "2025-05-08 15:53:55",
    "errors": 0,
    "student": {
      "id": 98
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-08 17:40:38",
    "finished_at": "2025-05-08 17:43:12",
    "errors": 1,
    "student": {
      "id": 98
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-08 19:09:44",
    "finished_at": "2025-05-08 19:11:06",
    "errors": 0,
    "student": {
      "id": 98
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-08 17:05:29",
    "finished_at": "2025-05-08 17:05:47",
    "errors": 0,
    "student": {
      "id": 98
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-08 18:28:17",
    "finished_at": "2025-05-08 18:29:38",
    "errors": 1,
    "student": {
      "id": 98
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-08 20:21:28",
    "finished_at": "2025-05-08 20:23:24",
    "errors": 0,
    "student": {
      "id": 98
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-26 19:39:22",
    "finished_at": "2025-05-26 19:40:03",
    "errors": 1,
    "student": {
      "id": 99
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-26 08:25:16",
    "finished_at": "2025-05-26 08:27:43",
    "errors": 0,
    "student": {
      "id": 99
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-26 15:49:30",
    "finished_at": "2025-05-26 15:50:56",
    "errors": 1,
    "student": {
      "id": 99
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-26 13:30:22",
    "finished_at": "2025-05-26 13:32:03",
    "errors": 0,
    "student": {
      "id": 99
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-26 18:48:19",
    "finished_at": "2025-05-26 18:51:03",
    "errors": 0,
    "student": {
      "id": 99
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-26 13:28:17",
    "finished_at": "2025-05-26 13:31:01",
    "errors": 1,
    "student": {
      "id": 99
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-26 10:47:07",
    "finished_at": "2025-05-26 10:49:03",
    "errors": 0,
    "student": {
      "id": 99
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-26 16:04:42",
    "finished_at": "2025-05-26 16:05:34",
    "errors": 1,
    "student": {
      "id": 99
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-26 15:58:10",
    "finished_at": "2025-05-26 16:00:24",
    "errors": 0,
    "student": {
      "id": 99
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-26 11:14:13",
    "finished_at": "2025-05-26 11:16:58",
    "errors": 0,
    "student": {
      "id": 99
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-20 16:20:36",
    "finished_at": "2025-05-20 16:22:10",
    "errors": 1,
    "student": {
      "id": 99
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-20 09:18:46",
    "finished_at": "2025-05-20 09:20:23",
    "errors": 1,
    "student": {
      "id": 99
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-20 21:31:38",
    "finished_at": "2025-05-20 21:32:26",
    "errors": 1,
    "student": {
      "id": 99
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-20 19:36:59",
    "finished_at": "2025-05-20 19:39:45",
    "errors": 0,
    "student": {
      "id": 99
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-20 19:07:11",
    "finished_at": "2025-05-20 19:08:08",
    "errors": 1,
    "student": {
      "id": 99
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-20 18:10:55",
    "finished_at": "2025-05-20 18:11:43",
    "errors": 0,
    "student": {
      "id": 99
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-20 19:34:47",
    "finished_at": "2025-05-20 19:36:05",
    "errors": 1,
    "student": {
      "id": 99
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-20 19:07:25",
    "finished_at": "2025-05-20 19:08:07",
    "errors": 1,
    "student": {
      "id": 99
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-20 20:51:39",
    "finished_at": "2025-05-20 20:52:27",
    "errors": 1,
    "student": {
      "id": 99
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-20 08:32:36",
    "finished_at": "2025-05-20 08:33:52",
    "errors": 1,
    "student": {
      "id": 99
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-14 11:48:30",
    "finished_at": "2025-05-14 11:51:16",
    "errors": 1,
    "student": {
      "id": 100
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-14 18:55:45",
    "finished_at": "2025-05-14 18:56:22",
    "errors": 0,
    "student": {
      "id": 100
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-14 20:04:21",
    "finished_at": "2025-05-14 20:06:57",
    "errors": 0,
    "student": {
      "id": 100
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-14 17:53:07",
    "finished_at": "2025-05-14 17:54:10",
    "errors": 1,
    "student": {
      "id": 100
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-14 18:12:00",
    "finished_at": "2025-05-14 18:12:11",
    "errors": 1,
    "student": {
      "id": 100
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-14 13:04:38",
    "finished_at": "2025-05-14 13:05:15",
    "errors": 1,
    "student": {
      "id": 100
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-14 12:46:39",
    "finished_at": "2025-05-14 12:49:07",
    "errors": 0,
    "student": {
      "id": 100
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-14 14:35:09",
    "finished_at": "2025-05-14 14:37:09",
    "errors": 0,
    "student": {
      "id": 100
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-14 13:14:50",
    "finished_at": "2025-05-14 13:16:51",
    "errors": 1,
    "student": {
      "id": 100
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-14 21:55:22",
    "finished_at": "2025-05-14 21:56:13",
    "errors": 0,
    "student": {
      "id": 100
    },
    "exercise": {
      "id": 10
    }
  },
  {
    "started_at": "2025-05-03 21:21:31",
    "finished_at": "2025-05-03 21:21:41",
    "errors": 1,
    "student": {
      "id": 100
    },
    "exercise": {
      "id": 1
    }
  },
  {
    "started_at": "2025-05-03 18:24:30",
    "finished_at": "2025-05-03 18:25:51",
    "errors": 0,
    "student": {
      "id": 100
    },
    "exercise": {
      "id": 2
    }
  },
  {
    "started_at": "2025-05-03 12:30:54",
    "finished_at": "2025-05-03 12:33:20",
    "errors": 0,
    "student": {
      "id": 100
    },
    "exercise": {
      "id": 3
    }
  },
  {
    "started_at": "2025-05-03 17:34:37",
    "finished_at": "2025-05-03 17:37:35",
    "errors": 0,
    "student": {
      "id": 100
    },
    "exercise": {
      "id": 4
    }
  },
  {
    "started_at": "2025-05-03 16:29:46",
    "finished_at": "2025-05-03 16:31:15",
    "errors": 0,
    "student": {
      "id": 100
    },
    "exercise": {
      "id": 5
    }
  },
  {
    "started_at": "2025-05-03 15:33:53",
    "finished_at": "2025-05-03 15:35:49",
    "errors": 0,
    "student": {
      "id": 100
    },
    "exercise": {
      "id": 6
    }
  },
  {
    "started_at": "2025-05-03 18:00:38",
    "finished_at": "2025-05-03 18:00:59",
    "errors": 1,
    "student": {
      "id": 100
    },
    "exercise": {
      "id": 7
    }
  },
  {
    "started_at": "2025-05-03 09:18:10",
    "finished_at": "2025-05-03 09:20:32",
    "errors": 0,
    "student": {
      "id": 100
    },
    "exercise": {
      "id": 8
    }
  },
  {
    "started_at": "2025-05-03 13:07:42",
    "finished_at": "2025-05-03 13:10:40",
    "errors": 1,
    "student": {
      "id": 100
    },
    "exercise": {
      "id": 9
    }
  },
  {
    "started_at": "2025-05-03 16:23:57",
    "finished_at": "2025-05-03 16:26:04",
    "errors": 1,
    "student": {
      "id": 100
    },
    "exercise": {
      "id": 10
    }
  }
];

export const SEED_ACHIEVEMENTS = [
  {
    name: 'Primer logro',
    description: 'Logro por completar la primera lección'
  },
  {
    name: 'Segundo logro',
    description: 'Logro por completar la segunda lección'
  },
  {
    name: 'Tercer logro',
    description: 'Logro por completar la tercera lección'
  }
];





