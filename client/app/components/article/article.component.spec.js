'use strict';

describe('Component: article', function() {
  // load the component's module
  beforeEach(module('cleverFilterApp.article'));

  var articleComponent;

  // Initialize the component and a mock scope
  beforeEach(inject(function($componentController) {
    articleComponent = $componentController('article', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
