angular.
  module('phoneCat').
  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      // $locationProvider.hashPrefix('!');
      $routeProvider.
        when('/phones', {
          template: '<phone-list></phone-list>'
        }).
        when('/phones/id:phoneId', {
          template: '<phone-detail></phone-detail>'
        }).
        otherwise('/phones');
    }
  ]);