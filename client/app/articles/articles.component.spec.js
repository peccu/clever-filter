'use strict';

describe('Component: ArticlesComponent', function() {
  // load the controller's module
  beforeEach(module('cleverFilterApp.articles'));

  var ArticlesComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    ArticlesComponent = $componentController('articles', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
