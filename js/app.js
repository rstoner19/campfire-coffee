
var pikePlace = {
  minCust: 14,
  maxCust: 55,
  hours: ['6:00am','7:00am','8:00am','9:00am','10:00am','11:00am','12:00pm','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm','8:00pm'],
  cups: 1.2,
  pounds: 3.7,
  customers: function(min, max) {
  return Math.floor(Math.random() * (max-min + 1) + min).toFixed(2);
  }
};

var pikePlaceHead = document.createElement('h1');
pikePlaceHead.textContent = 'Pike Place';
document.body.appendChild(pikePlaceHead);
for(var i=0; i < pikePlace.hours.length; i++){
  pikePlace.custHr = pikePlace.customers(pikePlace.minCust, pikePlace.maxCust);
  pikePlace.totCups = (pikePlace.custHr * pikePlace.cups).toFixed(1);
  pikePlace.beansForCups = (pikePlace.totCups / 20).toFixed(1);
  pikePlace.beansToGo = (pikePlace.pounds * pikePlace.custHr).toFixed(1);
  pikePlace.beans = (Number(pikePlace.beansForCups) + Number(pikePlace.beansToGo)).toFixed(2);
  // Outputs data to html
  var pikePlaceEl = document.createElement('p');
  pikePlaceEl.textContent = pikePlace.hours[i] + ": " + pikePlace.beans + ' lbs [' + pikePlace.custHr + ' customers, ' + pikePlace.totCups + ' cups (' + pikePlace.beansForCups + '), ' + pikePlace.beansToGo + 'lbs to-go';
  document.body.appendChild(pikePlaceEl);
}

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
