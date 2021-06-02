'use strict';


/**
 * Find a baladiya for a   for a given wilaya and daira
 * Find a baladiya for a   for a given wilaya and daira
 *
 * mattricule Long ID of wilaya to return
 * code Long ID of daira to return
 * bcode Long ID of baladiya to return
 * returns baladiya
 **/
exports.getBaladiyaForDaira = function(mattricule,code,bcode) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "code" : 0,
  "name_ar" : "name_ar",
  "name" : "name",
  "name_en" : "name_en"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * get all  baladiya for a   for a given wilaya and daira
 * Get all  baladiya for a   for a given wilaya and daira
 *
 * mattricule Long ID of wilaya to return
 * code Long ID of daira to return
 * returns baladiyats
 **/
exports.getBaladiyatsForDaira = function(mattricule,code) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "code" : 5,
  "name_ar" : "name_ar",
  "name" : "name",
  "name_en" : "name_en"
}, {
  "code" : 5,
  "name_ar" : "name_ar",
  "name" : "name",
  "name_en" : "name_en"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Find a daira by code for a given wilaya
 * Find a daira by code for a given wilaya id
 *
 * mattricule Long ID of wilaya to return
 * code Long ID of code to return
 * returns daira
 **/
exports.getDairaForWilaya = function(mattricule,code) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "code" : 0,
  "name_ar" : "name_ar",
  "name" : "name",
  "baladiyats" : [ {
    "code" : 5,
    "name_ar" : "name_ar",
    "name" : "name",
    "name_en" : "name_en"
  }, {
    "code" : 5,
    "name_ar" : "name_ar",
    "name" : "name",
    "name_en" : "name_en"
  } ],
  "name_en" : "name_en"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Find dairats for a given wilaya
 * Find  dairats for a given wilaya id
 *
 * mattricule Long ID of wilaya to return
 * returns dairats
 **/
exports.getDairatsForWilaya = function(mattricule) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "code" : 0,
  "name_ar" : "name_ar",
  "name" : "name",
  "baladiyats" : [ {
    "code" : 6,
    "name_ar" : "name_ar",
    "name" : "name",
    "name_en" : "name_en"
  }, {
    "code" : 6,
    "name_ar" : "name_ar",
    "name" : "name",
    "name_en" : "name_en"
  } ],
  "name_en" : "name_en"
}, {
  "code" : 0,
  "name_ar" : "name_ar",
  "name" : "name",
  "baladiyats" : [ {
    "code" : 6,
    "name_ar" : "name_ar",
    "name" : "name",
    "name_en" : "name_en"
  }, {
    "code" : 6,
    "name_ar" : "name_ar",
    "name" : "name",
    "name_en" : "name_en"
  } ],
  "name_en" : "name_en"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

