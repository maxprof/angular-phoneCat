describe('PhoneListController', function() {

  beforeEach(module('phoneCat'));

  it('should create model with 3 phones', inject(function($controller) {
    var scope = {};
    var ctrl = $controller('PhoneListController', {$scope: scope});
    expect(scope.phones.length).toBe(3);
    expect(scope.name).toBe("Max");
  }));

});