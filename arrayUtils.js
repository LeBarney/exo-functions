const biggest = (array) => 
{
  var bigger=array[0];
  array.forEach(element => {
    if(element > bigger){
      bigger = element;
    }
  });
  return bigger;
}

const sortAscend = (array) => 
{
  return array.sort(function(a, b) {
    return a - b;
  });
}

const makeUnique = (array) => {
  let arraySorted = sortAscend(array);
  let arrayFini = [arraySorted[0]];
  for (let i = 1; i < arraySorted.length; i ++){
    if(arraySorted[i] !== arraySorted[i-1]){
      arrayFini.push(arraySorted[i]);
    }
  }   
  return arrayFini;
}

console.log(makeUnique([1, 1, 1, 2, 2, 4, 7, 8, 6, 0])) // pour tester la 
