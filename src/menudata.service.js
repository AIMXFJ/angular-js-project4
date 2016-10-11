(function () {
'use strict';

angular.module('Data')
.service('MenuDataService',MenuDataServiceController);

MenuDataServiceController.$inject = ['$http'];
function MenuDataServiceController($http) {
	var service = this;
        
    return service;
        
    service.getAllCategories = function () {
        return $http({
            method: "GET",
            url: ("https://davids-restaurant.herokuapp.com/categories.json")
        }); 
    };
        
    service.getItemsForCategory = function(categoryShortName) {
        return $http({
            url: 'https://davids-restaurant.herokuapp.com/menu_items.json', 
            params: {
                category: categoryShortName
            }
        });
	};
}

})();