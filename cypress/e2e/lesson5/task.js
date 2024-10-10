import {student} from '../../helpers/StudentData.js';

export class Task {

  static checkGradeWithIfElse(averageGrade) {
    if (averageGrade < 60) {
      console.log(`Оцінка ${student.name} Незадовільно`);
    } else if (averageGrade >= 60 && averageGrade <= 70) {
      console.log(`Оцінка ${student.name} Задовільно`);
    } else if (averageGrade >= 71 && averageGrade <= 80) {
      console.log(`Оцінка ${student.name} Добре`);
    } else if (averageGrade >= 81 && averageGrade <= 100) {
      console.log(`Оцінка ${student.name} Дуже добре`);
    } else {
      console.log("Відмінно");
    }
  }
}