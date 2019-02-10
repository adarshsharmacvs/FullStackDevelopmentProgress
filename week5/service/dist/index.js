"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

let connector = (() => {
  var _ref = _asyncToGenerator(function* () {
    try {
      // Use connect method to connect to the Server
      return yield yield _mongodb2.default.connect(url);
    } catch (err) {
      console.log(err.stack);
    }
  });

  return function connector() {
    return _ref.apply(this, arguments);
  };
})();

let findActor = (() => {
  var _ref2 = _asyncToGenerator(function* (db, query) {
    try {
      let r = yield db.collection("actors").find(query).toArray();
      console.log(r);
      return r;
    } catch (err) {
      return err;
    }
  });

  return function findActor(_x, _x2) {
    return _ref2.apply(this, arguments);
  };
})();

let updateActorByName = (() => {
  var _ref3 = _asyncToGenerator(function* (db, query) {
    const { firstName, lastName } = query;
    try {
      return yield db.collection("actors").update({ firstName: firstName, lastName: lastName }, { $set: query }).toArray();
    } catch (err) {
      return err;
    }
  });

  return function updateActorByName(_x3, _x4) {
    return _ref3.apply(this, arguments);
  };
})();

let insertActor = (() => {
  var _ref4 = _asyncToGenerator(function* (db, query) {
    console.log("inserting an actor");
    try {
      return yield db.collection("actors").insert(query);
    } catch (err) {
      return err;
    }
  });

  return function insertActor(_x5, _x6) {
    return _ref4.apply(this, arguments);
  };
})();

let deleteActorByName = (() => {
  var _ref5 = _asyncToGenerator(function* (db, query) {
    const { firstName, lastName } = query;
    try {
      return yield db.collection("actors").remove({ firstName: firstName, lastName: lastName });
    } catch (err) {
      return err;
    }
  });

  return function deleteActorByName(_x7, _x8) {
    return _ref5.apply(this, arguments);
  };
})();

/**
 * Handler functions
 */

let getHandler = (() => {
  var _ref6 = _asyncToGenerator(function* (request) {
    const js = yield (0, _micro.json)(request);
    console.log(js);
    const client = yield connector();
    const db = client.db(DBName);
    return yield findActor(db, js);
  });

  return function getHandler(_x9) {
    return _ref6.apply(this, arguments);
  };
})();

let postHandler = (() => {
  var _ref7 = _asyncToGenerator(function* (request) {
    const js = yield (0, _micro.json)(request);
    console.log(js);
    const client = yield connector();
    const db = client.db(DBName);
    return yield insertActor(db, js);
  });

  return function postHandler(_x10) {
    return _ref7.apply(this, arguments);
  };
})();

let putHandler = (() => {
  var _ref8 = _asyncToGenerator(function* (request) {
    const js = yield (0, _micro.json)(request);
    const client = yield connector();
    const db = client.db(DBName);
    return yield updateActorByName(db, js);
  });

  return function putHandler(_x11) {
    return _ref8.apply(this, arguments);
  };
})();

let deleteHandler = (() => {
  var _ref9 = _asyncToGenerator(function* (request) {
    const js = yield (0, _micro.json)(request);
    const client = yield connector();
    const db = client.db(DBName);
    return yield deleteActorByName(db, js);
  });

  return function deleteHandler(_x12) {
    return _ref9.apply(this, arguments);
  };
})();

var _requestPromise = require("request-promise");

var _requestPromise2 = _interopRequireDefault(_requestPromise);

var _mongodb = require("mongodb");

var _mongodb2 = _interopRequireDefault(_mongodb);

var _micro = require("micro");

var _micro2 = _interopRequireDefault(_micro);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/*
Note:
The URL used to connect to mongo here expects to use the docker network to resolve
what application to connect to. The connection will not be made unless this app is
run in a docker container, built from the included dockerfile

*/

const DBName = "entertainment";
const url = `mongodb://192.168.99.100:27017/${DBName}`;

exports.default = (() => {
  var _ref10 = _asyncToGenerator(function* (request, response) {
    try {
      switch (request.method) {
        case "GET":
          console.log("a get call was made");
          return yield getHandler(request);
        case "POST":
          console.log("a post call was made");
          return yield postHandler(request);
        case "PUT":
          console.log("a put call was made");
          return yield putHandler(request);
        case "DELETE":
          console.log("a delete call was made");
          return yield deleteHandler(request);
        default:
          (0, _micro.send)(response, 405, "Invalid");
          break;
      }
    } catch (error) {
      throw error;
    }
  });

  return function (_x13, _x14) {
    return _ref10.apply(this, arguments);
  };
})();