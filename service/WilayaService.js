'use strict';
const leblad = require('@dzcode-io/leblad');

/**
 * Find adjacent wilaya of a given wialya
 * Returns a adjacent wilaya of a given wialya
 *
 * mattricule Long ID of wilaya to return
 * returns wilayats
 **/
exports.getAdjacentWilaya = function(mattricule) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = leblad.getAdjacentWilayas(mattricule)
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


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
 * Find a specifique  baladiya by code for a given wilaya
 * Find a specifique  baladiya by code for a given wilaya
 *
 * mattricule Long ID of wilaya to return
 * code Long ID of baladiya to return
 * returns baladiya
 **/
exports.getBaladyiaForWilaya = function(mattricule,code) {
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
 * Find baladiyats for a given wilaya
 * Find baladiyats for a given wilaya id
 *
 * mattricule Long ID of wilaya to return
 * returns baladiyats
 **/
exports.getBaladyiatsForWilaya = function(mattricule) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = leblad.getBaladyiatsForWilaya(mattricule)
    console.log(leblad.getBaladyiatsForWilaya(mattricule))
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

    var dairats = leblad.getDairatsForWilaya(mattricule)
    dairats.forEach((daira)=>{
        delete daira.baladyiats
    })
    examples['application/json'] = dairats
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Find phone codes for a given wilaya
 * Find  phone code for a given wilaya id and a given phone id
 *
 * mattricule Long ID of wilaya to return
 * phoneCodeId Long ID of the phone code to return
 * returns phoneCode
 **/
exports.getPhoneCodeForWilaya = function(mattricule,phoneCodeId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] =leblad.getPhoneCodeForWilaya(mattricule)
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Find phone codes for a given wilaya
 * Find  phone codes for a given wilaya id
 *
 * mattricule Long ID of wilaya to return
 * returns phoneCodes
 **/
exports.getPhoneCodesForWilaya = function(mattricule) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = leblad.getPhoneCodesForWilaya(mattricule)
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Find wilaya by ID
 * Returns a single wilaya
 *
 * mattricule Long ID of wilaya to return
 * returns wilaya
 **/
exports.getWilayaById = function(mattricule) {
  return new Promise(function(resolve, reject) {
    var examples = {};

    var wilaya = leblad.getWilayaByCode(mattricule)
    console.log("aych bl3ch b l id ")
    console.log(wilaya)
    delete wilaya.dairats
    examples['application/json'] = wilaya

    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get all wilayas
 * Returns all wilayas
 *
 * returns wilayats
 **/
exports.getWilayas = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};

    var wilayats = leblad.getWilayaList()
    wilayats.forEach(wilaya => {
        delete wilaya.dairats
    });

    examples['application/json'] = wilayats
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Find zip codes for a given wilaya
 * Find  zip code for a given wilaya id
 *
 * mattricule Long ID of wilaya to return
 * returns zipCodes
 **/
exports.getZipCodesForWilaya = function(mattricule) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] =  leblad.getZipCodesForWilaya(mattricule)
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

