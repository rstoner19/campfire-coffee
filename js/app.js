function calculations(coffeShop){
  var shopHeading = document.createElement('h1');
  shopHeading.textContent = coffeShop.name;
  document.body.appendChild(shopHeading);

  for(var i=0; i < coffeShop.hours.length; i++){
    coffeShop.custHr = coffeShop.customers(coffeShop.minCust, coffeShop.maxCust);
    coffeShop.totCups = (coffeShop.custHr * coffeShop.cups).toFixed(1);
    coffeShop.beansForCups = (coffeShop.totCups / 20).toFixed(1);
    coffeShop.beansToGo = (coffeShop.pounds * coffeShop.custHr).toFixed(1);
    coffeShop.beans = (Number(coffeShop.beansForCups) + Number(coffeShop.beansToGo)).toFixed(2);
    // Outputs data to html
    var coffeeDataEl = document.createElement('p');
    coffeeDataEl.textContent = coffeShop.hours[i] + ": " + coffeShop.beans + ' lbs [' + coffeShop.custHr + ' customers, ' + coffeShop.totCups + ' cups (' + coffeShop.beansForCups + '), ' + coffeShop.beansToGo + 'lbs to-go';
    document.body.appendChild(coffeeDataEl);
  }
}
// Pike Place
var pikePlace = {
  name: 'Pike Place',
  minCust: 14,
  maxCust: 55,
  hours: ['6:00am','7:00am','8:00am','9:00am','10:00am','11:00am','12:00pm','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm','8:00pm'],
  cups: 1.2,
  pounds: 3.7,
  customers: function(min, max) {
  return Math.floor(Math.random() * (max-min + 1) + min).toFixed(2);
  }
};
calculations(pikePlace);
// for(var i=0; i < pikePlace.hours.length; i++){
//   pikePlace.custHr = pikePlace.customers(pikePlace.minCust, pikePlace.maxCust);
//   pikePlace.totCups = (pikePlace.custHr * pikePlace.cups).toFixed(1);
//   pikePlace.beansForCups = (pikePlace.totCups / 20).toFixed(1);
//   pikePlace.beansToGo = (pikePlace.pounds * pikePlace.custHr).toFixed(1);
//   pikePlace.beans = (Number(pikePlace.beansForCups) + Number(pikePlace.beansToGo)).toFixed(2);
//   // Outputs data to html
//   var pikePlaceEl = document.createElement('p');
//   pikePlaceEl.textContent = pikePlace.hours[i] + ": " + pikePlace.beans + ' lbs [' + pikePlace.custHr + ' customers, ' + pikePlace.totCups + ' cups (' + pikePlace.beansForCups + '), ' + pikePlace.beansToGo + 'lbs to-go';
//   document.body.appendChild(pikePlaceEl);
// }

// Capitol Hill
var capHill = {
  name: 'Capitol Hill',
  minCust: 32,
  maxCust: 38,
  hours: ['6:00am','7:00am','8:00am','9:00am','10:00am','11:00am','12:00pm','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm','8:00pm'],
  cups: 3.2,
  pounds: .4,
  customers: function(min, max) {
  return Math.floor(Math.random() * (max-min + 1) + min).toFixed(2);
  }
};

//
// var capHillHead = document.createElement('h1');
// capHillHead.textContent = 'Capitol Hill';
// document.body.appendChild(capHillHead);
// function calculation(test){
// for(var i=0; i < test.hours.length; i++){
//   test.custHr = test.customers(test.minCust, test.maxCust);
//   test.totCups = (test.custHr * test.cups).toFixed(1);
//   test.beansForCups = (test.totCups / 20).toFixed(1);
//   test.beansToGo = (test.pounds * test.custHr).toFixed(1);
//   test.beans = (Number(test.beansForCups) + Number(test.beansToGo)).toFixed(2);
//   // Outputs data to html
//   var capHillEl = document.createElement('p');
//   capHillEl.textContent = capHill.hours[i] + ": " + capHill.beans + ' lbs [' + capHill.custHr + ' customers, ' + capHill.totCups + ' cups (' + capHill.beansForCups + '), ' + capHill.beansToGo + 'lbs to-go';
//   document.body.appendChild(capHillEl);
// }}

calculations(capHill);


// Assignment
// var pike = {
//   min-cust-per-hr: 14,
//   max-cust-per-hr: 33,
//   avgCust: 1.2,
//   avgLbs: 3.1,
//   // need method to calculate hourly customer and beans sold
//   // need another property for hourly bean totals
// }

// then need to render to display, throw it onto the screen
