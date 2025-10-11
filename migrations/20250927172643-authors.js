'use strict';

var dbm;
var type;
var seed;
var fs = require('fs');
var path = require('path');
var Promise;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
  Promise = options.Promise;
};

exports.up = function(db) {
  var migrationPath = path.join(__dirname, 'sqls', '20250927172643-authors-up.sql');
  var seedPath = path.join(__dirname, 'sqls', '20250927172643-authors-seed.sql');

  // Run migration first
  return new Promise(function(resolve, reject) {
    fs.readFile(migrationPath, {encoding: 'utf-8'}, function(err, migrationSql) {
      if (err) return reject(err);
      resolve(migrationSql);
    });
  })
  .then(function(migrationSql) {
    return db.runSql(migrationSql);
  })
  // Then run seed
  .then(function() {
    return new Promise(function(resolve, reject) {
      fs.readFile(seedPath, {encoding: 'utf-8'}, function(err, seedSql) {
        if (err) return reject(err);
        resolve(seedSql);
      });
    });
  })
  .then(function(seedSql) {
    return db.runSql(seedSql);
  });
};

exports.down = function(db) {
  var filePath = path.join(__dirname, 'sqls', '20250927172643-authors-down.sql');
  return new Promise( function( resolve, reject ) {
    fs.readFile(filePath, {encoding: 'utf-8'}, function(err,data){
      if (err) return reject(err);
      console.log('received data: ' + data);

      resolve(data);
    });
  })
  .then(function(data) {
    return db.runSql(data);
  });
};

exports._meta = {
  "version": 1
};
