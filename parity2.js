var isOdd = function(number){
   return number%2 !== 0;
}
var isEven = function(number){
  return !isOdd (number);
}

isOdd(5)