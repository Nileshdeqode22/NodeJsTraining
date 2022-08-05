const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server.js'); 
const express=require('express');
const { expect } = chai;
chai.use(chaiHttp);




//test all function in nodejs_day6
 describe('Register', () => {
  it('should create a new user', (done) => {
    chai
      .request(server)
      .post('/users/register')
      .send({
        userName: 'John',
        email: '@gmail.com',
        password: '12345'
      })
      .end((err, res) => {
        expect(res.status).to.equal(201);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('message');
        expect(res.body.message).to.equal('User created successfully');
        done();
      }
      ).timeout(5000);
  }).timeout(5000);
}).timeout(5000);

  describe('Login', () => {
    it('should login a user', (done) => {
      chai
        .request(server)
        .post('/users/login')
        .send({
          email: '@gmail.com',
          password: '12345'
        })

        .end((err, res) => {
          expect(res.status).to.equal(201);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('message');
          expect(res.body.message).to.equal('User logged in successfully');
          done();
        }).timeout(5000);
    }).timeout(5000);
  }
  ).timeout(5000);
  describe('Logout', () => {
    it('should logout a user', (done) => {
      chai
        .request(server)
        .get('/users/logout')
        .end((err, res) => {
          expect(res.status).to.equal(201);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('message');
          expect(res.body.message).to.equal('User logged out successfully');
          done();
        }).timeout(5000);
    }).timeout(5000);
  }
  ).timeout(5000);
  describe('Get all users', () => {
    it('should get all users', (done) => {
      chai
        .request(server)
        .get('/api/v1/users')
        .end((err, res) => {
          expect(res.status).to.equal(201);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('message');
          expect(res.body.message).to.equal('Users retrieved successfully');
          done();
        }).timeout(5000);
    }).timeout(5000);
  }
  ).timeout(5000);
    