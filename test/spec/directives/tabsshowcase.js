'use strict';

describe('Directive: tabsShowcase', function () {

  // load the directive's module
  beforeEach(module('axelWebAngularApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<tabs-showcase></tabs-showcase>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the tabsShowcase directive');
  }));
});
