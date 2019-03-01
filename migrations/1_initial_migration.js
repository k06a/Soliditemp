const Migrations = artifacts.require('./Migrations.sol');
const Soliditemp = artifacts.require('./Soliditemp.sol');

module.exports = function (deployer) {
    deployer.deploy(Migrations);
    deployer.deploy(Soliditemp);
};
