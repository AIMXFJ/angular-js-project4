(function() {
  'use strict';

  angular.module('Data')
  .controller('ItemsController', ItemsController);

  ItemsController.$inject = ['items'];
  function ItemsController(items) {
    var catItems = this;
    catItems.menuItems = items.data.menu_items;
    catItems.name = items.data.name;
  };

})();