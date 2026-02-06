//! Start by creating the variables for the data recorded
// Original data
const day1TempF = 32;
const day2TempC = 25;
const day3TempF = 70;
const day4TempC = 18;
const day5TempF = 80;
const day6TempC = 15;
const day7TempF = 72;
const day8TempC = 28;
const day9TempF = 68;
const day10TempC = 20;
const day11TempF = 75;
const day12TempC = 23;
const day13TempF = 82;
const day14TempC = 30;
const day15TempF = 65;
const day16TempC = 22;
const day17TempF = 77;
const day18TempC = 26;
const day19TempF = 78;
const day20TempC = 24;
const day21TempF = 73;
const day22TempC = 21;
const day23TempF = 79;
const day24TempC = 27;
const day25TempF = 71;
const day26TempC = 19;
const day27TempF = 74;
const day28TempC = 17;
const day29TempF = 76;
const day30TempC = 29;

// F → C: (tempInFahrenheit - 32) * 5 / 9
// C → F: (tempInCelsius * 9 / 5) + 32

//* Then work on the conversion of the temperature from Celsius to Fahrenheit (or viceversa)

const day1C  = (day1TempF - 32) * 5 / 9;
const day2C  = day2TempC;
const day3C  = (day3TempF - 32) * 5 / 9;
const day4C  = day4TempC;
const day5C  = (day5TempF - 32) * 5 / 9;
const day6C  = day6TempC;
const day7C  = (day7TempF - 32) * 5 / 9;
const day8C  = day8TempC;
const day9C  = (day9TempF - 32) * 5 / 9;
const day10C = day10TempC;
const day11C = (day11TempF - 32) * 5 / 9;
const day12C = day12TempC;
const day13C = (day13TempF - 32) * 5 / 9;
const day14C = day14TempC;
const day15C = (day15TempF - 32) * 5 / 9;
const day16C = day16TempC;
const day17C = (day17TempF - 32) * 5 / 9;
const day18C = day18TempC;
const day19C = (day19TempF - 32) * 5 / 9;
const day20C = day20TempC;
const day21C = (day21TempF - 32) * 5 / 9;
const day22C = day22TempC;
const day23C = (day23TempF - 32) * 5 / 9;
const day24C = day24TempC;
const day25C = (day25TempF - 32) * 5 / 9;
const day26C = day26TempC;
const day27C = (day27TempF - 32) * 5 / 9;
const day28C = day28TempC;
const day29C = (day29TempF - 32) * 5 / 9;
const day30C = day30TempC;

const day1F  = day1TempF;
const day2F  = (day2TempC * 9 / 5) + 32;
const day3F  = day3TempF;
const day4F  = (day4TempC * 9 / 5) + 32;
const day5F  = day5TempF;
const day6F  = (day6TempC * 9 / 5) + 32;
const day7F  = day7TempF;
const day8F  = (day8TempC * 9 / 5) + 32;
const day9F  = day9TempF;
const day10F = (day10TempC * 9 / 5) + 32;
const day11F = day11TempF;
const day12F = (day12TempC * 9 / 5) + 32;
const day13F = day13TempF;
const day14F = (day14TempC * 9 / 5) + 32;
const day15F = day15TempF;
const day16F = (day16TempC * 9 / 5) + 32;
const day17F = day17TempF;
const day18F = (day18TempC * 9 / 5) + 32;
const day19F = day19TempF;
const day20F = (day20TempC * 9 / 5) + 32;
const day21F = day21TempF;
const day22F = (day22TempC * 9 / 5) + 32;
const day23F = day23TempF;
const day24F = (day24TempC * 9 / 5) + 32;
const day25F = day25TempF;
const day26F = (day26TempC * 9 / 5) + 32;
const day27F = day27TempF;
const day28F = (day28TempC * 9 / 5) + 32;
const day29F = day29TempF;
const day30F = (day30TempC * 9 / 5) + 32;


//! Start the calculation of the total temperatures
let tot_temperature_in_fahrenheit = day1F + day2F + day3F + day4F + day5F + day6F + day7F + day8F + day9F + day10F + day11F + day12F + day13F + day14F + day15F + day16F + day17F + day18F + day19F + day20F + day21F + day22F + day23F + day24F + day25F + day26F + day27F + day28F + day29F + day30F


//* Then apply the conversion to calculate the total in the other unit of measurement
let tot_temperature_in_celsius = day1C + day2C + day3C + day4C + day5C + day6C + day7C + day8C + day9C + day10C + day11C + day12C + day13C + day14C + day15C + day16C + day17C + day18C + day19C + day20C + day21C + day22C + day23C + day24C + day25C + day26C + day27C + day28C + day29C + day30C

//! Start the calculation of the average temperatures
let avg_temperature_in_fahrenheit = tot_temperature_in_fahrenheit / 30
let avg_temperature_in_celsius = tot_temperature_in_celsius / 30

//! Console.log the results for your own inspection if you'd like
console.log(tot_temperature_in_fahrenheit, tot_temperature_in_celsius, avg_temperature_in_fahrenheit, avg_temperature_in_celsius)

//! After creating the four variables mentioned above, uncomment the following lines
//* This way you can export them to the test file, this is essential for the tests to work

module.exports = {
    tot_temperature_in_fahrenheit,
    tot_temperature_in_celsius,
    avg_temperature_in_fahrenheit,
    avg_temperature_in_celsius
};
