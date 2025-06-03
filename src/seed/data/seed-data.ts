import { SignUpStudentInput } from '../../auth/dto/inputs/sign-up-student.input';

export const SEED_COURSES = [
  {
    title: '5to. Primaria',
  },
  {
    title: '6to. Primaria',
  }
];

export const SEED_SUBJECTS_5 = [
  {
    code: 'MAT500',
    name: 'matemáticas 5to'
  },
  {
    code: 'CSNT500',
    name: 'ciencias naturales 5to'
  },
  {
    code: 'LEN500',
    name: 'lenguaje 5to'
  },
  {
    code: 'CSS500',
    name: 'ciencias sociales 5to'
  },
];

export const SEED_SUBJECTS_6 = [
  {
    code: 'MAT600',
    name: 'matemáticas 6to'
  },
  {
    code: 'CSN600',
    name: 'ciencias naturales 6to'
  },
  {
    code: 'LEN600',
    name: 'lenguaje 6to'
  },
  {
    code: 'CSS600',
    name: 'ciencias sociales 6to'
  },
]

export const SEED_MATH600_TOPICS = [
  {
    name: 'numeros enteros',
  },
  {
    name: 'adicion y sustraccion de numeros enteros',
  },
  {
    name: 'los angulos',
  },
  {
    name: 'construccion de angulos',
  },
  {
    name: 'los poligonos',
  },
  {
    name: 'los triangulos',
  },
  {
    name: 'el area',
  },
  {
    name: 'el volumen',
  },
  {
    name: 'multiplicacion y division de numeros enteros',
  },
  {
    name: 'operaciones combinadas',
  },
  {
    name: 'razones y proporciones',
  },
  {
    name: 'regla de tres directa e inversa',
  },
  {
    name: 'tanto por ciento - porcentaje',
  },
  {
    name: 'Sistema internacional de medidas no convencionales del contexto y las NyPIOs',
  },
  {
    name: 'Potenciacion',
  },
  {
    name: 'Calculo de la raiz y sus propiedades',
  },
  {
    name: 'Tablas de frecuencia con datos agrupados',
  },
]

export const SEED_LESSONS = [
  {
    title: 'geometria',
    xpReward: 50
  }
]

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


