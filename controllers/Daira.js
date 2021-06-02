'use strict';

var utils = require('../utils/writer.js');
var Daira = require('../service/DairaService');

module.exports.getBaladiyaForDaira = function getBaladiyaForDaira (req, res, next, mattricule, code, bcode) {
  Daira.getBaladiyaForDaira(mattricule, code, bcode)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getBaladiyatsForDaira = function getBaladiyatsForDaira (req, res, next, mattricule, code) {
  Daira.getBaladiyatsForDaira(mattricule, code)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getDairaForWilaya = function getDairaForWilaya (req, res, next, mattricule, code) {
  Daira.getDairaForWilaya(mattricule, code)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getDairatsForWilaya = function getDairatsForWilaya (req, res, next, mattricule) {
  Daira.getDairatsForWilaya(mattricule)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
