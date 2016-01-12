function coffeeShops(name, minCust,maxCust,cups, pounds){
  hours=['6:00am','7:00am','8:00am','9:00am','10:00am','11:00am','12:00pm','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm','8:00pm'];
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
    var shopHeading = document.createElement('h1');
    shopHeading.textContent = this.storeName;
    document.body.appendChild(shopHeading);
    var shopList = document.createElement('ul');
    document.body.appendChild(shopList);
    var totalBeans =0;
    for(var i=0; i < hours.length; i++){
      var coffeeDataEl = document.createElement('li');
      coffeeDataEl.textContent = hours[i] + ": " + this.dailyBeans[i] + ' lbs [' + this.hourlyCust[i] + ' customers, ' + this.hourlyCups[i] + ' cups (' + this.dailyBeansCups[i]+ '), ' + this.hourlyBeans[i] + 'lbs to-go' +' Total: ' + Number(this.totalBeans.toFixed(2));
      document.body.appendChild(coffeeDataEl);
    }
  }
  this.render();
}

var capHill = new coffeeShops('Capitol Hill',32,38,3.2,.4);
