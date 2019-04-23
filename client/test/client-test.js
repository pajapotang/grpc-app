var request = require('supertest');
var app= require('../client-express');

describe('GET /', function() {
    it('respond param', function(done) {
        request(app).get('/test').expect('Hello test', done);
    })
})