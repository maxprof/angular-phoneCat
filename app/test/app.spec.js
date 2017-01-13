describe('phoneList', function() {

  beforeEach(module('phoneCat'));

  describe('PhoneListController', function(){
    it('Should create 3 phones', inject(function($componentController){
      var ctrl = $componentController('phoneList');
      expect(ctrl.phones.length).toBe(3);
    }));
  })
});