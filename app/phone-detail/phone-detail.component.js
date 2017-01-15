angular.
  module('phoneCat').
  component('phoneDetail', {
    templateUrl: 'phone-detail/phone-detail.html',
    controller: ['$http', '$routeParams',
      function PhoneDetailController($http, $routeParams) {
        // this.phoneId = $routeParams.phoneId;
        var self = this;
        $http.get('phones/'+ $routeParams.phoneId +'.json').then(function(res){
            self.phone = res.data;
        })
      }
    ]
  }); 