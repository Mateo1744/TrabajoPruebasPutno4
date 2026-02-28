import {
  InvalidGradesListError,
  MinimumGradesError,
  InvalidGradeError,
  GradeOutOfRangeError
} from './errors';

// Posibles estados finales
export type AcademicStatus = 'APROBADO' | 'REPROBADO';

// Resultado que retorna la evaluación
export type EvaluationResult = {
  average: number;        // Promedio final
  status: AcademicStatus; // Estado final
  usedGrades: number[];   // Notas usadas para calcular promedio
  removedGrade: number;   // Nota eliminada (la más baja)
};

export class GradeEvaluator {

  evaluate(grades: number[]): EvaluationResult {

    // Debe ser un arreglo
    if (!Array.isArray(grades)) {
      throw new InvalidGradesListError();
    }

    // Mínimo 3 notas
    if (grades.length < 3) {
      throw new MinimumGradesError();
    }

    // Validar cada nota
    for (const g of grades) {

      // Debe ser número válido
      if (typeof g !== 'number' || Number.isNaN(g)) {
        throw new InvalidGradeError();
      }

      // Debe estar entre 0 y 5
      if (g < 0 || g > 5) {
        throw new GradeOutOfRangeError();
      }
    }

    // Ordenar de menor a mayor
    const sorted = [...grades].sort((a, b) => a - b);

    // Eliminar la nota más baja
    const removedGrade = sorted[0]!;
    const usedGrades = sorted.slice(1);

    // Calcular promedio
    const sum = usedGrades.reduce((acc, n) => acc + n, 0);
    const average = Math.round((sum / usedGrades.length) * 100) / 100;

    // Determinar estado final
    const status: AcademicStatus =
      average >= 3.5 ? 'APROBADO' : 'REPROBADO';

    return { average, status, usedGrades, removedGrade };
  }
}