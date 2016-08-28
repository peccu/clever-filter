'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var trainingCtrlStub = {
  index: 'trainingCtrl.index',
  show: 'trainingCtrl.show',
  create: 'trainingCtrl.create',
  upsert: 'trainingCtrl.upsert',
  patch: 'trainingCtrl.patch',
  destroy: 'trainingCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var trainingIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './training.controller': trainingCtrlStub
});

describe('Training API Router:', function() {
  it('should return an express router instance', function() {
    trainingIndex.should.equal(routerStub);
  });

  describe('GET /api/trainings', function() {
    it('should route to training.controller.index', function() {
      routerStub.get
        .withArgs('/', 'trainingCtrl.index')
        .should.have.been.calledOnce;
    });
  });

  describe('GET /api/trainings/:id', function() {
    it('should route to training.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'trainingCtrl.show')
        .should.have.been.calledOnce;
    });
  });

  describe('POST /api/trainings', function() {
    it('should route to training.controller.create', function() {
      routerStub.post
        .withArgs('/', 'trainingCtrl.create')
        .should.have.been.calledOnce;
    });
  });

  describe('PUT /api/trainings/:id', function() {
    it('should route to training.controller.upsert', function() {
      routerStub.put
        .withArgs('/:id', 'trainingCtrl.upsert')
        .should.have.been.calledOnce;
    });
  });

  describe('PATCH /api/trainings/:id', function() {
    it('should route to training.controller.patch', function() {
      routerStub.patch
        .withArgs('/:id', 'trainingCtrl.patch')
        .should.have.been.calledOnce;
    });
  });

  describe('DELETE /api/trainings/:id', function() {
    it('should route to training.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'trainingCtrl.destroy')
        .should.have.been.calledOnce;
    });
  });
});
