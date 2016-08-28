'use strict';

describe('Component: articleAction', function() {
  // load the component's module
  beforeEach(module('cleverFilterApp.article-action'));

  var articleActionComponent;

  // Initialize the component and a mock scope
  beforeEach(inject(function($componentController) {
    articleActionComponent = $componentController('articleAction', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
