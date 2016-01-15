
var storeData = [['Customers','Cups','Beans for Cups','Beans for Bags','Lbs for Coffee']];
var columnData = ['Store']
var tableHeader = ['Hours','Customers','Cups','Beans for Cups','Beans for Bags','Lbs for Coffee'];
var count = 1;
var hours = ['6:00am','7:00am','8:00am','9:00am','10:00am','11:00am','12:00pm','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm','8:00pm'];
function coffeeShops(name,minCust,maxCust,cups,pounds){
  this.storeName = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.cups = cups;
  this.pounds = pounds;
  this.hourlyCust = [];
  this.hourlyCups = [];
  this.hourlyBeans = [];
  this.dailyCust = 0;
  this.dailyCups = 0;
  this.dailyBeans = [];
  this.dailyBeansCups = [];
  this.totalBeans = 0;
  this.dailyCupsBeans = 0;
  this.dailyBagBeans = 0;
  this.totals = [];
  this.customers = function(){
    for (var i = 0; i < hours.length; i++){
      this.hourlyCust.push(Math.floor(Math.random() * (this.maxCust-this.minCust + 1) + this.minCust).toFixed(0))
    }
  }
  this.generateHourlyCups = function(){
    for(var i = 0; i < hours.length; i++){
      var hourCups = Number((this.hourlyCust[i] * this.cups).toFixed(2));
      this.hourlyCups.push(hourCups);
      this.dailyCups += hourCups;
      this.dailyBeansCups[i] =+ Number((hourCups / 20).toFixed(2));
      this.totalBeans += hourCups/20;
    }
  }
  this.generateHourlyBeans = function(){
    for (var i = 0; i < hours.length; i++){
      var beans = Number((this.hourlyCust[i] * this.pounds).toFixed(2));
      this.hourlyBeans.push(beans);
      this.dailyBeans[i] = beans;
      this.totalBeans += beans;
      this.dailyBagBeans += beans;
    }
  }

  this.render = function(){
    this.customers();
    this.generateHourlyCups();
    this.generateHourlyBeans();
    var sectEl = document.getElementById('test');
    var headEl = document.createElement('h3');
    headEl.textContent = this.storeName;
    sectEl.appendChild(headEl);
    var tblEl = document.createElement('table');
    var trEl = document.createElement('tr');
    for(var i=0; i  < tableHeader.length; i++){
      var thEl = document.createElement('th');
      thEl.textContent = tableHeader[i];
      trEl.appendChild(thEl);
    }
    tblEl.appendChild(trEl);
    for(var i = 0; i < hours.length; i++){
      var trEl = document.createElement('tr');
      var tdEl = document.createElement('th');
      tdEl.textContent = hours[i];
      trEl.appendChild(tdEl);
      tdEl = document.createElement('td');
      tdEl.textContent = this.hourlyCust[i];
      trEl.appendChild(tdEl);
      tdEl = document.createElement('td');
      tdEl.textContent = this.hourlyCups[i];
      trEl.appendChild(tdEl);
      tdEl = document.createElement('td');
      tdEl.textContent = this.dailyBeansCups[i] +' lbs';
      trEl.appendChild(tdEl);
      tdEl = document.createElement('td');
      tdEl.textContent = this.hourlyBeans[i] + ' lbs';
      trEl.appendChild(tdEl);
      tdEl = document.createElement('td');
      tdEl.textContent = Number((this.dailyBeansCups[i] + this.hourlyBeans[i]).toFixed(2)) + ' lbs';
      trEl.appendChild(tdEl);
      tblEl.appendChild(trEl);
      this.dailyCust += Number(this.hourlyCust[i]);
      this.dailyCupsBeans += Number(this.dailyBeansCups[i]);
    }
    this.totals = [this.dailyCust, this.dailyCups.toFixed(2), this.dailyCupsBeans.toFixed(2), this.dailyBagBeans.toFixed(2), this.totalBeans.toFixed(2)]
    trEl = document.createElement('tr')
    tdEl = document.createElement('th');
    tdEl.textContent = 'Total';
    trEl.appendChild(tdEl);
    for(var i=0; i < this.totals.length; i++){
      tdEl = document.createElement('th');
      tdEl.textContent = this.totals[i];
      columnData[count] = this.storeName;
      storeData[count]= this.totals;
      trEl.appendChild(tdEl);
    }
    count ++;
    tblEl.appendChild(trEl);
    sectEl.appendChild(tblEl);
    }
  this.render();
}
var pikePlace = new coffeeShops('Pike Place',14,55,1.2,3.7);
var capHill = new coffeeShops('Capitol Hill',32,48,3.2,.4);
var seaLibrary = new coffeeShops('Seattle Public Library',49,75,2.6,.2);
var southLU = new coffeeShops('South Lake Union',35,88,1.3,3.7);
var seaTac = new coffeeShops('Sea-Tac Airport',68,124,1.1,2.7);
var webSite = new coffeeShops('Website Sales',3,6,0,6.7);
totalsTable(storeData,columnData);

function handleDataSubmit (){
  event.preventDefault();
  if (!event.target.locName.value || !event.target.minimum.value || !event.target.maximum.value || !event.target.cupsSold.value || !event.target.poundsSold.value){
    return alert('All fields must be filled out.');
  }
  var shopName = event.target.locName.value;
  var minimum = Number(event.target.minimum.value);
  var maximum = Number(event.target.maximum.value);
  var cupsSold = event.target.cupsSold.value;
  var poundsSold = event.target.poundsSold.value;

var shopNameHolder = new coffeeShops(shopName,minimum,maximum,cupsSold,poundsSold);
var valueOfEl = document.getElementById('temptotal');
var containerEl = valueOfEl.parentNode;
containerEl.removeChild(valueOfEl);
totalsTable(storeData,columnData);
}


var comments = document.getElementById('comments');
var chatForm = document.getElementById('newForm');

chatForm.addEventListener('submit', handleDataSubmit);



function totalsTable(tableData,column){
  var sectEl = document.getElementById('total');
  var tblEl = document.createElement('table');
  tblEl.setAttribute("id", "temptotal");
  for(var i=0; i < column.length; i++){
    var trEl = document.createElement('tr');
    tdEl = document.createElement('th');
    tdEl.textContent = column[i];
    trEl.appendChild(tdEl);
    for(var j=0; j < tableData[i].length; j++){
      if(i === 0){
        tdEl = document.createElement('th');
        tdEl.textContent = tableData[i][j];
        trEl.appendChild(tdEl);
        tblEl.appendChild(trEl);
        } else{
        tdEl = document.createElement('td');
        tdEl.textContent = tableData[i][j];
        trEl.appendChild(tdEl);
        tblEl.appendChild(trEl);
      }
    }
  }
  sectEl.appendChild(tblEl);
}
