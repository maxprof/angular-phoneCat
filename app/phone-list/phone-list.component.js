angular
    .module('phoneList')
    .component('phoneList', {
        templateUrl: 'phone-list/phone-list.html',
        controller: ['$http', function PhoneListController($http) {
            var self = this;
            self.orderProp = "age";
            $http.get('phones/phones.json').then(function(res){
                self.phones = res.data;
            })

            // self.phones = [
            //             {
            //                 "age": 0, 
            //                 "id": "motorola-xoom-with-wi-fi", 
            //                 "imageUrl": "img/phones/motorola-xoom-with-wi-fi.0.jpg", 
            //                 "name": "Motorola XOOM\u2122 with Wi-Fi", 
            //                 "snippet": "The Next, Next Generation\r\n\r\nExperience the future with Motorola XOOM with Wi-Fi, the world's first tablet powered by Android 3.0 (Honeycomb)."
            //             }, 
            //             {
            //                 "age": 1, 
            //                 "id": "motorola-xoom", 
            //                 "imageUrl": "img/phones/motorola-xoom.0.jpg", 
            //                 "name": "MOTOROLA XOOM\u2122", 
            //                 "snippet": "The Next, Next Generation\n\nExperience the future with MOTOROLA XOOM, the world's first tablet powered by Android 3.0 (Honeycomb)."
            //             }, 
            //             {
            //                 "age": 2, 
            //                 "carrier": "AT&T", 
            //                 "id": "motorola-atrix-4g", 
            //                 "imageUrl": "img/phones/motorola-atrix-4g.0.jpg", 
            //                 "name": "MOTOROLA ATRIX\u2122 4G", 
            //                 "snippet": "MOTOROLA ATRIX 4G the world's most powerful smartphone."
            //             }
            //         ];

            // Phones.get({}, function(phones) {
            //    self.phones = phones;
            //    console.log(phones.length);
            // });
        }
    ]
}); 