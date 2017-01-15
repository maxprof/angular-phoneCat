angular.
  module('phoneCat').
  component('phoneDetail', {
    templateUrl: 'phone-detail/phone-detail.html',
    controller: ['Phone','$routeParams',
      function PhoneDetailController(Phone, $routeParams) {
        var self = this;
        
        self.setImage = function setImage(imageUrl) {
          self.mainImageUrl = imageUrl;
        };

        self.dblClick = function(image){
          console.log("It's doubleclick on " + image)
        }

        // $http.get('phones/'+ $routeParams.phoneId +'.json').then(function(res){
        //     self.phone = res.data;
        //     self.setImage(self.phone.images[0]);
        // })

        self.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
          self.setImage(phone.images[0]);
        });
      }
    ]
  }); 