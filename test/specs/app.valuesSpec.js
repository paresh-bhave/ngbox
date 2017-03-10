define([
  'js/app.values',
  'angular-mocks'
], function (values, mocks) {


  describe('App Values', function () {
    var AuthorInfo;

    beforeEach(angular.mock.module('ngbox'));

    beforeEach(inject(function (Author) {
      AuthorInfo = Author;
    }));

    it('Type of Author should be object', function () {
      expect(typeof (AuthorInfo)).toBe("object");
    });
    it('Author should have following values', function () {
      expect(AuthorInfo).toEqual({
        name: 'John Doe',
        description: 'Lorem ipsum dolor sit amet'
      });
    });

  });

});