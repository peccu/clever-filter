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
          name: 'New Training',
          info: 'This is the brand new training!!!'
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
      newTraining.name.should.equal('New Training');
      newTraining.info.should.equal('This is the brand new training!!!');
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
      training.name.should.equal('New Training');
      training.info.should.equal('This is the brand new training!!!');
    });
  });

  describe('PUT /api/trainings/:id', function() {
    var updatedTraining;

    beforeEach(function(done) {
      request(app)
        .put(`/api/trainings/${newTraining._id}`)
        .send({
          name: 'Updated Training',
          info: 'This is the updated training!!!'
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
      updatedTraining.name.should.equal('New Training');
      updatedTraining.info.should.equal('This is the brand new training!!!');
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

          training.name.should.equal('Updated Training');
          training.info.should.equal('This is the updated training!!!');

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
          { op: 'replace', path: '/name', value: 'Patched Training' },
          { op: 'replace', path: '/info', value: 'This is the patched training!!!' }
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
      patchedTraining.name.should.equal('Patched Training');
      patchedTraining.info.should.equal('This is the patched training!!!');
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
