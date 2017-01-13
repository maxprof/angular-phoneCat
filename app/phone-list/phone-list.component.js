angular
    .module('phoneCat')
    .component('phoneList', {
        templateUrl: 'phone-list/phone-list.html',
        controller: function PhoneListController() {
            this.phones = [
            {
                name: 'Nexus S',
                snippet: 'Fast just got faster with Nexus S.',
                age: 2
            }, {
                name: 'Motorola XOOM™ with Wi-Fi',
                snippet: 'The Next, Next Generation tablet.',
                age: 1
            }, {
                name: 'MOTOROLA XOOM™',
                snippet: 'The Next, Next Generation tablet.',
                age: 3
                }
            ];

            this.orderProp = "name";
        }
});