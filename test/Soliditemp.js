const Soliditemp = artifacts.require('Soliditemp');

contract('Soliditemp', function ([_, addr1]) {
    describe('Soliditemp', async function () {
        it('should be ok', async function () {
            this.token = await Soliditemp.new();
        });
    });
});
