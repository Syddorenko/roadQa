// 4.1 task
let radius = 5;
let circleArea = Math.PI * Math.pow(radius, 2);

circleArea = circleArea.toFixed(2);
console.log(`Circle area (radius = ${radius}): ${circleArea} square units`);

// 4.2 task
let length = 10;
let width = 4;
let rectangleArea = length * width;

rectangleArea = rectangleArea.toFixed(2);
console.log(`Rectangle area (length = ${length}, width = ${width}): ${rectangleArea} square units`);

//4.3 task (radius from task 4.1)
radius = 3;
let height = 7;
let cylinderVolume = Math.PI * Math.pow(radius, 2) * height;

cylinderVolume = cylinderVolume.toFixed(2);
console.log(`Cylinder volume (radius = ${radius}, height = ${height}): ${cylinderVolume} cubic units`);

