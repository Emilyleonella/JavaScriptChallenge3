/*
MEDIUM: Write a function that would allow you to do this:
var sharePizza = cutPizzaSlices(8);
console.log(sharePizza(2));                                                                                                                                                                    
   prints "Each person gets 4.00 slices of pizza"
console.log(sharePizza(3)); 
  prints "Each person gets 2.67 slices of pizza"
*/

function cutPizzaSlices(slices) {
  var totalSlices = slices;
  return function sharePizza(numPeople) {
    return (
      ` Each person gets ` + (totalSlices / numPeople).toFixed(2) + ` slices`
    );
  };
}
let sharePizza = cutPizzaSlices(10);

console.log(sharePizza(2));
