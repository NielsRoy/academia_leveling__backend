import { Role } from 'src/auth/enum/role.enum';
import { SignUpStudentInput } from '../../auth/dto/inputs/sign-up-student.input';

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

export const SEED_LESSONS = [
  {
    id: 1,
    title: '¿Qué son los números enteros?',
    content: "Los números enteros son un conjunto numérico que incluye los números negativos, el cero y los números positivos. Se representan con la letra 'Z' y no tienen parte decimal ni fraccionaria. Por ejemplo: ..., -3, -2, -1, 0, 1, 2, 3, ...",
    topic: { id: 1 },
  },
  {
    id: 2,
    title: "La recta numérica",
    content: "Aprende a ubicar números enteros en la recta numérica.",
    topic: { id: 1 },
  },
  {
    id: 3,
    title: "Aplicaciones prácticas",
    content: "Descubre cómo usar los números enteros en la vida real.",
    topic: { id: 1 },
  }
]

export const SEED_EXERCISES = [
  {
    id: 1,
    severity: 'easy',
    question: 'Selecciona todos los números enteros de la siguiente lista:',
    type: 1,
    coins: 10,
    lesson: { id: 1 },
  },
  {
    id: 2,
    severity: 'medium',
    question: 'Ordena estos números enteros de menor a mayor:',
    type: 2,
    coins: 15,
    lesson: { id: 1 },
  },
  {
    id: 3,
    severity: 'medium',
    question: '¿Cuál de estos enunciados es correcto sobre los números enteros?',
    type: 1,
    coins: 12,
    lesson: { id: 1 },
  }
]

export const SEED_EXERCISES_OPTIONS = [
  {
    id: 1,
    text: "-5",
    is_correct: true,
    index: 0,
    exercise: { id: 1 },
  },
  {
    id: 2,
    text: "3.14",
    is_correct: false,
    index: 0,
    exercise: { id: 1 },
  },
  {
    id: 3,
    text: "0",
    is_correct: true,
    index: 0,
    exercise: { id: 1 },
  },
  {
    id: 4,
    text: "10",
    is_correct: true,
    index: 0,
    exercise: { id: 1 },
  },
  {
    id: 5,
    text: "-2.5",
    is_correct: false,
    index: 0,
    exercise: { id: 1 },
  },
  {
    id: 6,
    text: "½",
    is_correct: false,
    index: 0,
    exercise: { id: 1 },
  },
  {
    id: 7,
    text: "-8",
    is_correct: true,
    index: 0,
    exercise: { id: 1 },
  },
  {
    id: 8,
    text: "√2",
    is_correct: false,
    index: 0,
    exercise: { id: 1 },
  },
  {
    id: 9,
    text: "6",
    is_correct: true,
    index: 0,
    exercise: { id: 1 },
  },
  {
    id: 10,
    text: "-7",
    is_correct: true,
    index: 1,
    exercise: { id: 2 },
  },
  {
    id: 11,
    text: "-3",
    is_correct: true,
    index: 2,
    exercise: { id: 2 },
  },
  {
    id: 12,
    text: "0",
    is_correct: true,
    index: 3,
    exercise: { id: 2 },
  },
  {
    id: 13,
    text: "5",
    is_correct: true,
    index: 4,
    exercise: { id: 2 },
  },
  {
    id: 14,
    text: "10",
    is_correct: true,
    index: 5,
    exercise: { id: 2 },
  },
  {
    id: 15,
    text: "Los números enteros incluyen decimales",
    is_correct: false,
    index: 0,
    exercise: { id: 3 },
  },
  {
    id: 16,
    text: "El cero es un número entero",
    is_correct: true,
    index: 0,
    exercise: { id: 3 },
  },
  {
    id: 17,
    text: "Los números negativos no son enteros",
    is_correct: false,
    index: 0,
    exercise: { id: 3 },
  },
  {
    id: 18,
    text: "Solo los números positivos son enteros",
    is_correct: false,
    index: 0,
    exercise: { id: 3 },
  }
];

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





