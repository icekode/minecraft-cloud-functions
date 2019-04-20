var Compute = require('@google-cloud/compute');
var compute = new Compute();
var instanceZone = 'us-east4-a'; //TODO Build instanceZone into RES String
var instanceName = 'mcp-server'; //TODO build instanceName into RES String

/**
 * Google compute function that handles the stopping of a VM instance
 * @param req
 * @param res
 */
exports.stopInstance = function stopInstance(req, res) {
    var zone = compute.zone(instanceZone);
    var vm = zone.vm(instanceName);

    vm.stop(function(err, operation, apiResponse) {
        console.log('instance stop successfully');
    });
    res.status(200).send('Success stop instance');
};

/**
 * Google computer function that handles the starting of a VM instance
 * @param req
 * @param res
 */
exports.startInstance = function startInstance(req, res) {
    var zone = compute.zone(instanceZone);
    var vm = zone.vm(instanceName);

    vm.start(function(err, operation, apiResponse) {
        console.log('instance start successfully');
    });

    res.status(200).send('Success start instance');
};
