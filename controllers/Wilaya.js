'use strict';

var utils = require('../utils/writer.js');
var Wilaya = require('../service/WilayaService');

module.exports.getAdjacentWilaya = function getAdjacentWilaya (req, res, next, mattricule) {
  Wilaya.getAdjacentWilaya(mattricule)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getBaladiyaForDaira = function getBaladiyaForDaira (req, res, next, mattricule, code, bcode) {
  Wilaya.getBaladiyaForDaira(mattricule, code, bcode)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getBaladiyatsForDaira = function getBaladiyatsForDaira (req, res, next, mattricule, code) {
  Wilaya.getBaladiyatsForDaira(mattricule, code)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getBaladyiaForWilaya = function getBaladyiaForWilaya (req, res, next, mattricule, code) {
  Wilaya.getBaladyiaForWilaya(mattricule, code)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getBaladyiatsForWilaya = function getBaladyiatsForWilaya (req, res, next, mattricule) {
  Wilaya.getBaladyiatsForWilaya(mattricule)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getDairaForWilaya = function getDairaForWilaya (req, res, next, mattricule, code) {
  Wilaya.getDairaForWilaya(mattricule, code)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getDairatsForWilaya = function getDairatsForWilaya (req, res, next, mattricule) {
  Wilaya.getDairatsForWilaya(mattricule)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getPhoneCodeForWilaya = function getPhoneCodeForWilaya (req, res, next, mattricule, phoneCodeId) {
  Wilaya.getPhoneCodeForWilaya(mattricule, phoneCodeId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getPhoneCodesForWilaya = function getPhoneCodesForWilaya (req, res, next, mattricule) {
  Wilaya.getPhoneCodesForWilaya(mattricule)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getWilayaById = function getWilayaById (req, res, next, mattricule) {
  Wilaya.getWilayaById(mattricule)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getWilayas = function getWilayas (req, res, next) {
  Wilaya.getWilayas()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getZipCodesForWilaya = function getZipCodesForWilaya (req, res, next, mattricule) {
  Wilaya.getZipCodesForWilaya(mattricule)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
