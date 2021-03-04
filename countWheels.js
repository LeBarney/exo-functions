const countWheels = (nb_monocycle,nb_moto,nb_voiture,nb_limousine) => {
  let pneusMoto = nb_moto * 2;
  let pneusVoiture = nb_voiture * 4;
  let pneusLimo = nb_limousine * 6;
  let sommepneus = nb_monocycle + pneusMoto + pneusVoiture + pneusLimo ;
  return sommepneus;
}

console.log(countWheels(7,8,23,3));