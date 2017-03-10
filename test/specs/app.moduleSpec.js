define([
	'js/app.module',
	'angular-mocks'
	], function(app, mock) {

	describe('App', function() {
      
      it('should be defined', inject(function() {
        expect(app).toBeDefined();
      }));

      it('name should be CrossOver', inject(function() {
        expect(app.name).toBe('ngbox');
      }));

      it('should require', inject(function(){
      	expect(app.requires).toEqual(["ngMaterial","ui.router"]);
      }));
      
    });

});