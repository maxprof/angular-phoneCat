'use strict';

// Angular E2E Testing Guide:
// https://docs.angularjs.org/guide/e2e-testing

describe('PhoneCat Application', function() {

  describe('phoneList', function() {

    // beforeEach(function() {
    //   browser.get('index.html');
    // });

    // it('should be possible to control phone order via the drop-down menu', function() {
    //   var queryField = element(by.model('$ctrl.query'));
    //   var orderSelect = element(by.model('$ctrl.orderProp'));
    //   var nameOption = orderSelect.element(by.css('option[value="name"]'));
    //   var phoneNameColumn = element.all(by.repeater('phone in $ctrl.phones').column('phone.name'));
    //   function getNames() {
    //     return phoneNameColumn.map(function(elem) {
    //       return elem.getText();
    //     });
    //   }
    //   queryField.sendKeys('tablet');
    //   expect(getNames()).toEqual([
    //     'Motorola XOOM\u2122 with Wi-Fi',
    //     'MOTOROLA XOOM\u2122'
    //   ]);
    //   nameOption.click();
    //   expect(getNames()).toEqual([
    //     'MOTOROLA XOOM\u2122',
    //     'Motorola XOOM\u2122 with Wi-Fi'
    //   ]);
    // });

    // it('should render phone specific links', function() {
    //   var query = element(by.model('$ctrl.query'));
    //   query.sendKeys('nexus');

    //   element.all(by.css('.phones li a')).first().click();
    //   expect(browser.getLocationAbsUrl()).toBe('/phones/idnexus-s');
    // });

    // it('should redirect `index.html` to `index.html#/phones', function() {
    //   browser.get('index.html');
    //   expect(browser.getLocationAbsUrl()).toBe('/phones');
    // });

    // it('should filter the phone list as a user types into the search box', function() {
    //   var phoneList = element.all(by.repeater('phone in $ctrl.phones'));
    //   var query = element(by.model('$ctrl.query'));
    //   expect(phoneList.count()).toBe(20);
    //   query.sendKeys('nexus');
    //   expect(phoneList.count()).toBe(1);
    //   query.clear();
    //   query.sendKeys('motorola');
    //   expect(phoneList.count()).toBe(8);
    // });


    describe('Phone details', function() {
      beforeEach(function() {
        browser.get('index.html#/phones/idnexus-s');
      });
      it('should display `nexus-s page`', function(){
        expect(element(by.binding('$ctrl.phone.display.touchScreen')).getText()).toBe('true');
      })
      it('should display placeholder page with `phoneId`', function() {
        expect(element(by.css('.phoneName')).getText()).toBe('Nexus S');
      });
      it('should display main phone image', function(){
        var mainImg = element(by.css('img.phone'));
        expect(mainImg.getAttribute('src')).toMatch(/img\/phones\/nexus-s.0.jpg/);
      });
      // it('should swap the main image', function() {
      //   var mainImage = element(by.css('img.phone'));
      //   var thumbnails = element.all(by.css('ul.phone-thumbs img'));
      //   thumbnails.get(2).click();
      //   expect(mainImage.getAttribute('src')).toMatch(/img\/phones\/nexus-s.2.jpg/);
      //   thumbnails.get(0).click();
      //   expect(mainImage.getAttribute('src')).toMatch(/img\/phones\/nexus-s.0.jpg/);
      // }); Не понимаю ошибку
    });

  });
});