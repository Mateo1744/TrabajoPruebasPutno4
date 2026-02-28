import { GradeEvaluator } from '../src/gradeEvaluator';
import { InvalidGradesListError, InvalidGradeError } from '../src/errors';

describe('GradeEvaluator - Punto 4', () => {

  test('Error si se reciben menos de 3 notas', () => {
    // Arrange: crear evaluador
    const evaluator = new GradeEvaluator();

    // Act & Assert: debe lanzar error por mínimo 3 notas
    expect(() => evaluator.evaluate([4, 5]))
      .toThrow('Mínimo 3 notas');
  });

  test('Error si hay una nota fuera de rango (<0 o >5)', () => {
    // Arrange
    const evaluator = new GradeEvaluator();

    // Act & Assert: notas inválidas por rango
    expect(() => evaluator.evaluate([4, -1, 3]))
      .toThrow('Nota fuera de rango');

    expect(() => evaluator.evaluate([4, 6, 3]))
      .toThrow('Nota fuera de rango');
  });

  test('Elimina la nota más baja antes de calcular el promedio', () => {
    // Arrange: lista con nota baja 2
    const evaluator = new GradeEvaluator();
    const grades = [5, 2, 4];

    // Act
    const result = evaluator.evaluate(grades);

    // Assert: verifica nota eliminada y promedio correcto
    expect(result.removedGrade).toBe(2);
    expect(result.usedGrades).toEqual([4, 5]);
    expect(result.average).toBe(4.5);
  });

  test('Retorna APROBADO si promedio >= 3.5', () => {
    // Arrange
    const evaluator = new GradeEvaluator();
    const grades = [3.5, 3.5, 3.5];

    // Act
    const result = evaluator.evaluate(grades);

    // Assert
    expect(result.average).toBe(3.5);
    expect(result.status).toBe('APROBADO');
  });

  test('Retorna REPROBADO si promedio < 3.5', () => {
    // Arrange
    const evaluator = new GradeEvaluator();
    const grades = [3, 3, 3.4];

    // Act
    const result = evaluator.evaluate(grades);

    // Assert
    expect(result.status).toBe('REPROBADO');
  });

  // test('Caso borde: promedio exactamente 3.5 debe aprobar', () => {
  //   // Arrange
  //   const evaluator = new GradeEvaluator();
  //   const grades = [2, 3.5, 3.5, 3.5];

  //   // Act
  //   const result = evaluator.evaluate(grades);

  //   // Assert
  //   expect(result.average).toBe(3.5);
  //   expect(result.status).toBe('APROBADO');
  // });

  test('Lanza error si el input NO es un arreglo', () => {
    // Arrange
    const evaluator = new GradeEvaluator();

    // Act & Assert
    expect(() => evaluator.evaluate('hola' as any))
      .toThrow(InvalidGradesListError);
  });

  test('Lanza error si alguna nota NO es número (string)', () => {
    // Arrange
    const evaluator = new GradeEvaluator();

    // Act & Assert
    expect(() => evaluator.evaluate([4, '3' as any, 2]))
      .toThrow(InvalidGradeError);
  });

});