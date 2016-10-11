(function () {
'use strict';

angular.module('Data')
.component('itemsList', {
  templateUrl: 'src/items.html',
  bindings: {
    items: '<'
  }});

})();