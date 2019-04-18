var http = require('http');
var Compute = require('@google-cloud/compute');
var compute = new Compute();

exports.startInstance = function startInstance(req, res) {
    var zone = compute.zone('instance zone here');
    var vm = zone.vm('instance name here');

    vm.start(function(err, operation, apiResponse) {
        console.log('instance start successfully');
    });

    res.status(200).send('Success start instance');
};
