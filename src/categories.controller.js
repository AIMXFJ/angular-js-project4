(function() {
  'use strict';

  angular.module('Data')
  .controller('CategoriesComponentController', CategoriesComponentController);

  CategoriesComponentController.$inject = ['items'];
  function CategoriesComponentController(items) {
  	var catCtrl = this;
  	console.log("Hey2");
    this.items = items;
    console.log(this.items);
  };
  
})();