'use strict';

var utils = require('../utils/writer.js');
var Baladiya = require('../service/BaladiyaService');

module.exports.getBaladiyaForDaira = function getBaladiyaForDaira (req, res, next, mattricule, code, bcode) {
  Baladiya.getBaladiyaForDaira(mattricule, code, bcode)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getBaladiyatsForDaira = function getBaladiyatsForDaira (req, res, next, mattricule, code) {
  Baladiya.getBaladiyatsForDaira(mattricule, code)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getBaladyiaForWilaya = function getBaladyiaForWilaya (req, res, next, mattricule, code) {
  Baladiya.getBaladyiaForWilaya(mattricule, code)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getBaladyiatsForWilaya = function getBaladyiatsForWilaya (req, res, next, mattricule) {
  Baladiya.getBaladyiatsForWilaya(mattricule)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
