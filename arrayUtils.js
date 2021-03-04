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

// console.log(biggest([99, 100, 101, 0])) pour tester la fonction
