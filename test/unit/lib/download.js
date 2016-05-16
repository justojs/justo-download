//imports
const assert = require("assert");
const file = require("justo-assert-fs").file;
const Dir = require("justo-fs").Dir;
const justo = require("justo");
const suite = justo.suite;
const test = justo.test;
const init = justo.init;
const fin = justo.fin;
const download = require("../../../dist/es5/nodejs/justo-download/lib/download").default;
//suite
suite("#download()", function() {
  var DATA, DATA_DIR;

  init("*", function() {
    DATA_DIR = Dir.createTmpDir();
    DATA = DATA_DIR.path;
  });

  fin("*", function() {
    DATA_DIR.remove();
  });

  test("download(src, dst)", function(done) {
    assert(download("http://google.es/index.html", DATA, function() {
      file(DATA, "index.html").must.exist();
      done();
    }) === undefined);
  });

  test("download(src, dst) - Unknown URL", function(done) {
    assert(download("http://google.es/unknown.html", DATA, function() {
      file(DATA, "unknown.html").must.not.exist();
      done();
    }) === undefined);
  });
})();
