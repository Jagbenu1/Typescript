const carMakers: string[] = ['ford', 'toyota', 'chevy'];
const dates: Date[] = [new Date(), new Date()];

const carsByMake: string[][] = [['F150'], ['Corolla'], ['Camaro']];

//typescript helps with Inference when extracting values
//in arrays
const car = carMakers[0];
const myCar = carMakers.pop();

//typescript prevents incompatible values
carMakers.push(200);

//typescript helps with 'map', 'reduce'
carMakers.map((car: string): string => {
  return car.toLowerCase();
});

//Flexible types
const importantDates: (Date | string)[] = [new Date(), '2030-10-10'];
importantDates.push('2030-19-10');
importantDates.push(new Date());
