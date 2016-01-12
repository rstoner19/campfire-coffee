'use strict';
var hours = ['6:00am','7:00am','8:00am','9:00am','10:00am','11:00am','12:00pm','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm','8:00pm'];

function coffeeShops(name, minCust,maxCust,cups, pounds){
  this.storeName = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.cups = cups;
  this.pounds = pounds;
  this.hourlyCust = [];
  this.hourlyCups = [];
  this.hourlyBeans = [];
  this.dailyCups = 0;
  this.dailyBeans = [];
  this.dailyBeansCups = [];
  this.totalBeans = 0;
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
    }
  }

  this.render = function(){
    this.customers();
    this.generateHourlyCups();
    this.generateHourlyBeans();
    var trEl = document.createElement('tr');
    tdEl = document.createElement('th');
    tdEl.textContent = this.storeName;
    trEl.appendChild(tdEl);
    for(var i = 0; i < hours.length; i++){
      var tdEl = document.createElement('td');
      tdEl.textContent = Number((this.dailyBeansCups[i]+this.dailyBeans[i]).toFixed(2));
      trEl.appendChild(tdEl);
    }

    tdEl = document.createElement('td');
    tdEl.textContent = this.totalBeans.toFixed(1);
    trEl.appendChild(tdEl);
    tblEl.appendChild(trEl);
    }
  this.render();
}
var sectEl = document.getElementById('test');
var tblEl = document.createElement('table');
var trEl = document.createElement('tr');
var thEl = document.createElement('th');
thEl.textContent = "Stores";
trEl.appendChild(thEl);
for(var i = 0; i < hours.length; i++){
  var tdEl = document.createElement('th');
  tdEl.textContent = hours[i];
  trEl.appendChild(tdEl);
}

tdEl = document.createElement('th');
tdEl.textContent = 'Total';
trEl.appendChild(tdEl);
tblEl.appendChild(trEl);

var pikePlace = new coffeeShops('Pike Place',14,55,1.2,3.7);
var capHill = new coffeeShops('Capitol Hill',32,48,3.2,.4);
var seaLibrary = new coffeeShops('Seattle Public Library',49,75,2.6,.2);
var southLU = new coffeeShops('South Lake Union',35,88,1.3,3.7);
var seaTac = new coffeeShops('Sea-Tac Airport',68,124,1.1,2.7);
var webSite = new coffeeShops('Website Sales',3,6,0,6.7);


sectEl.appendChild(tblEl);
