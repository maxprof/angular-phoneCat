angular
    .module('phoneCat')
    .component('phoneList', {
        templateUrl: 'phone-list/phone-list.html',
        controller: ['$http', function PhoneListController($http) {
            var self = this;
            self.orderProp = "name";
            $http.get('phones/phones.json').then(function(res){
                self.phones = res.data;
            })
        }
        ]
});