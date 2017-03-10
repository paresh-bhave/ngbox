define([
	'js/app.constants',
	'angular-mocks'
	], function(constants, mocks) {

  
  describe('App Constants', function() {
    var V;

    beforeEach(angular.mock.module('ngbox'));

    beforeEach(inject(function(VERSION) {
      V = VERSION;
    }));

    it('App version should be 0.1:', function(){
      expect(V).toBe(0.1);
    });

  });


});