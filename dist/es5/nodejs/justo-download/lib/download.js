"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = 









download;var _download = require("download");var _download2 = _interopRequireDefault(_download);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function download(src, dst, done) {
  new _download2.default().get(src, dst).run(done);}