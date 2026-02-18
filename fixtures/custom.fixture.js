const { request } = require('@playwright/test');

class CustomWorld {
    async init() {
        this.apiContext = await request.newContext({
        baseURL: "https://openlibrary.org"
    });
}
}

module.exports = { CustomWorld };
