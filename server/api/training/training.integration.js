'use strict';

var app = require('../..');
import request from 'supertest';

var newTraining;

describe('Training API:', function() {
  describe('GET /api/trainings', function() {
    var trainings;

    beforeEach(function(done) {
      request(app)
        .get('/api/trainings')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          trainings = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      trainings.should.be.instanceOf(Array);
    });
  });

  describe('POST /api/trainings', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/trainings')
        .send({
          articleId: '123',
          userId: '456',
          isLike: true
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          newTraining = res.body;
          done();
        });
    });

    it('should respond with the newly created training', function() {
      newTraining.articleId.should.equal('123');
      newTraining.userId.should.equal('456');
      newTraining.isLike.should.equal(true);
    });
  });

  describe('GET /api/trainings/:id', function() {
    var training;

    beforeEach(function(done) {
      request(app)
        .get(`/api/trainings/${newTraining._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          training = res.body;
          done();
        });
    });

    afterEach(function() {
      training = {};
    });

    it('should respond with the requested training', function() {
      training.articleId.should.equal('123');
      training.userId.should.equal('456');
      training.isLike.should.equal(true);
    });
  });

  describe('PUT /api/trainings/:id', function() {
    var updatedTraining;

    beforeEach(function(done) {
      request(app)
        .put(`/api/trainings/${newTraining._id}`)
        .send({
          articleId: '12321',
          userId: '45654',
          isLike: false
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          updatedTraining = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedTraining = {};
    });

    it('should respond with the original training', function() {
      updatedTraining.articleId.should.equal('123');
      updatedTraining.userId.should.equal('456');
      updatedTraining.isLike.should.equal(true);
    });

    it('should respond with the updated training on a subsequent GET', function(done) {
      request(app)
        .get(`/api/trainings/${newTraining._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          let training = res.body;

          training.articleId.should.equal('12321');
          training.userId.should.equal('45654');
          training.isLike.should.equal(false);

          done();
        });
    });
  });

  describe('PATCH /api/trainings/:id', function() {
    var patchedTraining;

    beforeEach(function(done) {
      request(app)
        .patch(`/api/trainings/${newTraining._id}`)
        .send([
          { op: 'replace', path: '/articleId', value: '11111' },
          { op: 'replace', path: '/userId', value: '44444' },
          { op: 'replace', path: '/isLike', value: true }
        ])
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          patchedTraining = res.body;
          done();
        });
    });

    afterEach(function() {
      patchedTraining = {};
    });

    it('should respond with the patched training', function() {
      patchedTraining.articleId.should.equal('11111');
      patchedTraining.userId.should.equal('44444');
      patchedTraining.isLike.should.equal(true);
    });
  });

  describe('DELETE /api/trainings/:id', function() {
    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete(`/api/trainings/${newTraining._id}`)
        .expect(204)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when training does not exist', function(done) {
      request(app)
        .delete(`/api/trainings/${newTraining._id}`)
        .expect(404)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });
  });
});
