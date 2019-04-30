module.exports = function () {

    this.Given(/^I am on the Redfin search site for Eugene, OR$/, function() {
        return helpers.loadPage(page.homeSearchEugene.url);
    });

    this.When(/^I click the Apply Filters button$/, function() {
        return page.homeSearchEugene.clickApplyFilters();
    });

    this.Then(/^I have entered a max price of "([^"]*)"$/, function(price) {
        return page.homeSearchEugene.setMaxPrice(price);
    });

    this.Then(/^I have expanded the options filter$/, function() {
        return page.homeSearchEugene.expandOptionsFilter();
    });

    this.Then(/^I have entered a min bedrooms value of "([^"]*)"$/, function(beds) {
        return page.homeSearchEugene.setMinBeds(beds);
    });

    this.Then(/^I have entered a min baths value of "([^"]*)"$/, function(baths) {
        return page.homeSearchEugene.setMinBaths(baths);
    });

    this.Then(/^I see homes less than or equal to "([^"]*)"$/, function(price) {
        return page.homeSearchEugene.verifyPrice(price);
    });

    this.Then(/^The homes have at least "([^"]*)" bedrooms$/, function(bedrooms) {
        return page.homeSearchEugene.verifyBeds(bedrooms);
    });

    this.Then(/^The homes have at least "([^"]*)" bathrooms$/, function(bathrooms) {
        return page.homeSearchEugene.verifyBaths(bathrooms);
    });
};
