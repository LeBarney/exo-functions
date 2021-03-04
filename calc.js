const add = (nb1,nb2) => {
  let somme = nb1 + nb2;
  return somme;
}

const sub = (nb1,nb2) => {
  let reste = nb1 - nb2;
  return reste;
}

const mul = (nb1,nb2) => {
  let resultat = nb1 * nb2;
  return resultat;
}

const div = (nb1,nb2) => {
  let quotient = nb1 / nb2;
  return quotient;
}

const calc = (symbol,nb1,nb2) => {
  if (symbol === '+'){
    return add(nb1,nb2);
  }
  if (symbol === '-'){
    return sub(nb1,nb2);
  }
  if (symbol === '*'){
    return mul(nb1,nb2);
  }
  if (symbol === '/'){
    return div(nb1,nb2);
  }
}


console.log(calc('*',2,4));