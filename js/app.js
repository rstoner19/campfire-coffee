// Calculates avg customers, cups, and beans needed
function calculations(coffeShop){
  var shopHeading = document.createElement('h1');
  shopHeading.textContent = coffeShop.name;
  document.body.appendChild(shopHeading);
  var shopList = document.createElement('ul');
  document.body.appendChild(shopList);
  for(var i=0; i < coffeShop.hours.length; i++){
    coffeShop.custHr = coffeShop.customers(coffeShop.minCust, coffeShop.maxCust);
    coffeShop.totCups = (coffeShop.custHr * coffeShop.cups).toFixed(1);
    coffeShop.beansForCups = (coffeShop.totCups / 20).toFixed(1);
    coffeShop.beansToGo = (coffeShop.pounds * coffeShop.custHr).toFixed(1);
    coffeShop.beans = (Number(coffeShop.beansForCups) + Number(coffeShop.beansToGo)).toFixed(2);
    // Outputs data to html
    var coffeeDataEl = document.createElement('li');
    coffeeDataEl.textContent = coffeShop.hours[i] + ": " + coffeShop.beans + ' lbs [' + coffeShop.custHr + ' customers, ' + coffeShop.totCups + ' cups (' + coffeShop.beansForCups + '), ' + coffeShop.beansToGo + 'lbs to-go';
    document.body.appendChild(coffeeDataEl);
  }
  shopList = document.createElement('ul');
  document.body.appendChild(shopList);
}
// Pike Place
var pikePlace = {
  name: 'Pike Place',
  minCust: 14,
  maxCust: 55,
  hours: ['6:00am','7:00am','8:00am','9:00am','10:00am','11:00am','12:00pm','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm','8:00pm'],
  cups: 1.2,
  pounds: 3.7,
  customers: function(min,max) {
  return Math.floor(Math.random() * (max-min + 1) + min).toFixed(2);
  }
};
calculations(pikePlace);

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
calculations(capHill);

// Seattle Public Library
var seaLibrary = {
  name: 'Seattle Public Library',
  minCust: 49,
  maxCust: 75,
  hours: ['6:00am','7:00am','8:00am','9:00am','10:00am','11:00am','12:00pm','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm','8:00pm'],
  cups: 2.6,
  pounds: .2,
  customers: function(min, max) {
  return Math.floor(Math.random() * (max-min + 1) + min).toFixed(2);
  }
};
calculations(seaLibrary);

// South Lake Union
var slu = {
  name: 'South Lake Union',
  minCust: 35,
  maxCust: 88,
  hours: ['6:00am','7:00am','8:00am','9:00am','10:00am','11:00am','12:00pm','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm','8:00pm'],
  cups: 1.3,
  pounds: 3.7,
  customers: function(min, max) {
  return Math.floor(Math.random() * (max-min + 1) + min).toFixed(2);
  }
};
calculations(slu);

// Sea-Tac
var seaAirport = {
  name: 'Sea-Tac Aiport',
  minCust: 68,
  maxCust: 124,
  hours: ['6:00am','7:00am','8:00am','9:00am','10:00am','11:00am','12:00pm','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm','8:00pm'],
  cups: 1.1,
  pounds: 2.7,
  customers: function(min, max) {
  return Math.floor(Math.random() * (max-min + 1) + min).toFixed(2);
  }
};
calculations(seaAirport);

// Website Sales
var websiteSales = {
  name: 'Website Sales',
  minCust: 3,
  maxCust: 6,
  hours: ['6:00am','7:00am','8:00am','9:00am','10:00am','11:00am','12:00pm','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm','8:00pm'],
  cups: 0,
  pounds: 6.7,
  customers: function(min, max) {
  return Math.floor(Math.random() * (max-min + 1) + min).toFixed(2);
  }
};
calculations(websiteSales);
