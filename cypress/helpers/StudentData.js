export const student = {
  name: "Artem Sydorenko",
  age: 24,
  averageGrade: getRandomGrade(),
  multiplicationNumber: 7 ,
};

function getRandomGrade() {
  return Math.floor(Math.random() * (100 - 60 + 1)) + 60;
}