// Error cuando la entrada no es un arreglo
export class InvalidGradesListError extends Error {
  constructor() {
    super('Lista de notas inválida');
    this.name = 'InvalidGradesListError';
  }
}

// Error cuando hay menos de 3 notas
export class MinimumGradesError extends Error {
  constructor() {
    super('Mínimo 3 notas');
    this.name = 'MinimumGradesError';
  }
}

// Error cuando una nota no es un número válido
export class InvalidGradeError extends Error {
  constructor() {
    super('Nota inválida');
    this.name = 'InvalidGradeError';
  }
}

// Error cuando una nota está fuera del rango permitido (0 a 5)
export class GradeOutOfRangeError extends Error {
  constructor() {
    super('Nota fuera de rango');
    this.name = 'GradeOutOfRangeError';
  }
}