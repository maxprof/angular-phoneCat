angular.
  module('core.phones').
  factory('Phones', ['$resource',
    function($resource) {
      return $resource('phones/phones.json', {}, {
        get: {
          method: 'GET',
          isArray: true
        }
      });
    }
  ]);