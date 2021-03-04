const isOdd = (number) =>
{
   return number%2 !== 0;
}
const isEven = (number) =>
{
  return !isOdd (number);
}

isOdd(5)