/**
* @author Evan Maddicks
* @version 1.0.0
* @date 2025-11-20
* @fileoverview this program calculates the price of a car based on your choices
*/

//Feature prices
let price = 25000;
let total = price;

let floormat = 500;
let navigationsystem = 1000;
let heatedseat = 500;
let warranty = 2500;

//base price
console.log("Base Price                              " + price.toFixed(2));

//mats
let answer1 = prompt("Do you want floor mats? (yes/no): ");
if (answer1 && answer1.toLowerCase() === "yes") {
  console.log("Floor mats                              " + floormat.toFixed(2));
  total += floormat;
}

//Navigation system
let answer2 = prompt("Do you want a navigation system? (yes/no): ");
if (answer2 && answer2.toLowerCase() === "yes") {
  console.log("Navigation system                        " + navigationsystem.toFixed(2));
  total += navigationsystem;
}

//Heated leather seats
let answer3 = prompt("Do you want heated leather seats? (yes/no): ");
if (answer3 && answer3.toLowerCase() === "yes") {
  console.log("Heated leather seats                     " + heatedseat.toFixed(2));
  total += heatedseat;
}

//Warrenty
let answer4 = prompt("Do you want the 5-year extended warranty? (yes/no): ");
if (answer4 && answer4.toLowerCase() === "yes") {
  console.log("5-Year extended warranty                 " + warranty.toFixed(2));
  total += warranty;
}

//Tax + Final cost
let tax = total * 0.13;
console.log("13% Taxes                               " + tax.toFixed(2));

let finalCost = total + tax;
console.log("Final cost of car                       " + finalCost.toFixed(2));
