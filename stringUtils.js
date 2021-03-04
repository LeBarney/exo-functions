const reverseStr = (stringToReverse) =>
{
  return stringToReverse.split('').reverse().join(''); 
}

const isPalindrome = (stringToTest) =>
{
  return (reverseStr(stringToTest) === stringToTest);
}

console.log(isPalindrome("tutut"))