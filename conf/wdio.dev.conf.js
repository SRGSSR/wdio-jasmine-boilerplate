var merge = require('deepmerge');
var wdioConf = require('./wdio.conf.js');

exports.config = merge(wdioConf.config, {
    baseUrl: 'https://www.google.com',
    services: ['selenium-standalone'],
    capabilities: [{
        maxInstances: 1,
        browserName: 'chrome'
    }],
});