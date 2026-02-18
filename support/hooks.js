const { Before, After, setWorldConstructor } = require('@cucumber/cucumber');
const { CustomWorld } = require('../fixtures/custom.fixture');

setWorldConstructor(CustomWorld);

Before(async function () {
    await this.init();
});

After(async function () {
    await this.apiContext.dispose();
});
