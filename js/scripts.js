/* 
Gallons to litres
Litres to Gallons

ounces to quarts
quarts to gallon
*/

function teaspoonsToTablespoons(number){
  return number /= 3;
}
function tablespoonsToTeaspoons(number){
  return number *= 3;
}
function tablespoonsToCups(number){
  return number / 16;
}
function cupsToTablespoons(number){
  return number * 16;
}
function cupsToPints(number){
  return number /= 2;
}
function pintsToCups(number){
  return number *= 2;
}
function cupsToQuarts(number){
  return number /= 4;
}
function quartsToCups(number){
  return number *= 4;
}
function pintsToQuarts(number){
  return number /= 2;
}
function quartsToPints(number){
  return number *= 2;
}
function cupsToFluidOunces{
  return number *= 8;
}
function fluidOuncesToCups{
  return number /= 8;
}

const number = prompt("Enter Number");
alert(tablespoonsToCups(number));
