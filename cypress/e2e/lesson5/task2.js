export class Task2 {
  static checkGradeWithSwitchCase(averageGrade) {
    let gradeCategory;

    switch (true) {
      case (averageGrade < 60):
        gradeCategory = "Незадовільно";
        break;
      case (averageGrade >= 60 && averageGrade < 70):
        gradeCategory = "Задовільно";
        break;
      case (averageGrade >= 70 && averageGrade < 80):
        gradeCategory = "Добре";
        break;
      case (averageGrade >= 80 && averageGrade < 100):
        gradeCategory = "Дуже добре";
        break;
      case (averageGrade === 100):
        gradeCategory = "Відмінно";
        break;
      default:
        gradeCategory = "Оцінка поза межами допустимого діапазону.";
    }

    console.log(gradeCategory);
  }
}
