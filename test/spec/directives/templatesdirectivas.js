'use strict';

describe('Directive: templatesDirectivas', function () {

  // load the directive's module
  beforeEach(module('axelWebAngularApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<templates-directivas></templates-directivas>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the templatesDirectivas directive');
  }));
});
