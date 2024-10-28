
const car1 = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020,
};

const car2 = {
  brand: "Honda",
  model: "Civic",
  year: 2019,
};

const combinedCars = {
  car1: { ...car1 },
  car2: { ...car2 },
};

console.log("Об'єднаний об'єкт автомобілів:", combinedCars);
