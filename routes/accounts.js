/*
* routes/accounts.js
*/
'use strict';
const express = require('express'),
      bodyParser = require('body-parser'),
      app = express(),
      bodyParserJSON = app.use(bodyParser.urlencoded({extended : true}));
      app.use(bodyParser.json());

const router = express.Router();
const controller = require('../controllers/accounts');

router.get('/', controller.isAuthenticated, (req, res) => {
  controller.getAll(req,res);
});

router.get('/account/:account', controller.isAuthenticated, (req, res) => {
  controller.getOne(req,res);
});

router.post('/', bodyParserJSON, (req, res) => {
  controller.isAuthenticated(req, res,()=>{
    controller.createAccount(req,res);
  });
});


router.put('/', bodyParserJSON, (req, res, next) => {
  controller.isAuthenticated(req, res,()=>{
    controller.updateAccount(req,res,next);
  });
});

router.delete('/:id',bodyParserJSON, (req,res) => {
  controller.isAuthenticated(req, res,()=>{
    controller.deleteAccount(req,res);
  });
});

module.exports = router;
