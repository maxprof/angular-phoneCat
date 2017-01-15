angular
    .module('phoneCat')
    .component('phoneList', {
        templateUrl: 'phone-list/phone-list.html',
        controller: ['Phones', function PhoneListController(Phones) {
            var self = this;
            self.orderProp = "name";
            // $http.get('phones/phones.json').then(function(res){
            //     self.phones = res.data;
            // })

            Phones.get({}, function(phones) {
                console.log(phones);
               self.phones = phones;
            });
        }
        ]
});