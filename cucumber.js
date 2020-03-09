var moment = require('moment');
var mkdirp = require('mkdirp');
//var banner = `${process.env.SMOKETEST_BANNER}`;
var banner = 'TheBay'

mkdirp(`reports/${banner}`, function (err) {
    if (err) console.error(err)
});
var cucumberFileConfig = `json:reports/${banner}/${banner}_cucumber_${moment().format('YYYY_MM_DD_hh_mm_ss')}.json`;
//var stepDefinitionsConfig = `bm/${banner}/step-definitions`;
var stepDefinitionsConfig = `sfcc/${banner}/step-definitions`;

let common = [
    '--require cucumber.conf.js',
    '--require', stepDefinitionsConfig,
    '--format node_modules/cucumber-pretty',
    '--format', cucumberFileConfig
  ].join(' ');
  
  module.exports = {
    default: common
  };