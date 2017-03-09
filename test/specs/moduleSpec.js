define([
	'app/module',
	'angular-mocks'
	], function(app, mock) {

	describe('ngbox', function() {
      it('should be defined', inject(function() {
        expect(app).not.toBeNull();
      }));

    });
});