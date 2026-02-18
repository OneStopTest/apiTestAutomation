const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

Given('I set the open library author endpoint {string} ready', async function (authors) {
    this.authorEndpoint = `/${authors}`;
});

When('I send a GET request to the open library author resource {string}', async function (resourceId) {
    let format = ".json";
    let resource = `${resourceId}${format}`;
    console.log("RESOURCE = " + resource);
    this.response = await this.apiContext.get(`${this.authorEndpoint}/${resource}`);
});

Then('the response status code should be {string}', async function (statusCodeString) {
    let statusCode = parseInt(statusCodeString);
    expect(this.response.status()).toBe(statusCode)
});

Then('the response body should contain {string} as one of the keys', async function (key) {
    this.data = await this.response.json();
    expect(this.data).toHaveProperty(key);
});

Then('the {string} key should have {string}', async function (key, value) {
    this.data = await this.response.json();
    let responseBody=this.data[key]
    console.log("BODY" +responseBody);
    if(Array.isArray(responseBody))
    {
        expect(this.data[key]).toContain(value);
    }
    else{
        expect(this.data).toHaveProperty(key, value);
    }

});
