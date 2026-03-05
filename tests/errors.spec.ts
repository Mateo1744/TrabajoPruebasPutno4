import {
  InvalidGradesListError,
  MinimumGradesError,
  InvalidGradeError,
  GradeOutOfRangeError
} from '../src/errors';

describe('errors.ts coverage', () => {

  test('InvalidGradesListError', () => {
    // Arrange: crear instancia del error
    const err = new InvalidGradesListError();

    // Assert: verificar nombre y mensaje
    expect(err.name).toBe('InvalidGradesListError');
    expect(err.message).toBe('Lista de notas inválida');
  });

  test('MinimumGradesError', () => {
    // Arrange
    const err = new MinimumGradesError();

    // Assert
    expect(err.name).toBe('MinimumGradesError');
    expect(err.message).toBe('Mínimo 3 notas');
  });

  test('InvalidGradeError', () => {
    // Arrange
    const err = new InvalidGradeError();

    // Assert
    expect(err.name).toBe('InvalidGradeError');
    expect(err.message).toBe('Nota inválida');
  });

  test('GradeOutOfRangeError', () => {
    // Arrange
    const err = new GradeOutOfRangeError();

    // Assert
    expect(err.name).toBe('GradeOutOfRangeError');
    expect(err.message).toBe('Nota fuera de rango');
  });

});