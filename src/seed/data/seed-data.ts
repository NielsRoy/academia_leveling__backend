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
    topic: { id: 1 }
  }, 
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

export const SEED_STUDENTS: SignUpStudentInput[] = [
  {
    email: 'student1@gmail.com',
    password: '123456',
    firstName: 'student',
    lastName: 'one',
  },
]

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


