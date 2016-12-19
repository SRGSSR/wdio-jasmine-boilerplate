var merge = require('deepmerge');
var wdioConf = require('./wdio.conf.js');

delete wdioConf.config.user;
delete wdioConf.config.key;
delete wdioConf.config.services;
delete wdioConf.config.capabilities;

exports.config = merge(wdioConf.config, {
    baseUrl: 'https://www.google.com',
    services: ['selenium-standalone'],
    capabilities: [{
        maxInstances: 1,
        browserName: 'chrome'
    }],
});