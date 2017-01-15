angular.
  module('phoneCat').
  component('phoneDetail', {
    templateUrl: 'phone-detail/phone-detail.html',
    controller: ['$http', '$routeParams',
      function PhoneDetailController($http, $routeParams) {
        var self = this;
        self.setImage = function setImage(imageUrl) {
          self.mainImageUrl = imageUrl;
        };
        self.dblClick = function(image){
          console.log("It's doubleclick on " + image)
        }
        $http.get('phones/'+ $routeParams.phoneId +'.json').then(function(res){
            self.phone = res.data;
            self.setImage(self.phone.images[0]);
        })
      }
    ]
  }); 