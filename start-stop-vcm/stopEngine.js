var Compute = require('@google-cloud/compute');
var compute = Compute();
exports.stopInstance = function stopInstance(req, res) {
    var zone = compute.zone('instance zone here');
    var vm = zone.vm('instance name here');
    vm.stop(function(err, operation, apiResponse) {
        console.log('instance stop successfully');
    });
    res.status(200).send('Success stop instance');
};
