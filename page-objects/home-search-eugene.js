module.exports = {

    url: 'https://www.redfin.com/city/6142/OR/Eugene',

    elements: {
        maxPriceInput: by.css('.maxPrice span.input'),
        filterExpando: by.css('button.wideSidepaneFilterButton'),
        minBedsInput: by.css('.minBeds > span.input'),
        minBathsInput: by.css('.optional.baths > span.input'),
        minBathsStepUp: by.css('.optional.baths > span.input > span.step-up'),
        applyFiltersButton: by.css('button.applyButton'),
        pagesText: by.css('.pageText')
    },

    expandOptionsFilter: function() {
        var filter = page.homeSearchEugene.elements.filterExpando;
        return driver.findElement(filter).click();
    },

    setMaxPrice: function(maxPrice) {
        var userPrice = page.homeSearchEugene.elements.maxPriceInput;
        return driver.findElement(userPrice).click().then(function() {
            return driver.findElement(by.xpath('//div[@class="option"]/span[contains(text(),"' + maxPrice + '")]')).click();
        });
    },

    setMinBeds: function(numBeds) {
        var minBeds = page.homeSearchEugene.elements.minBedsInput;
        return driver.findElement(minBeds).click().then(function() {
            return driver.findElement(by.xpath('//div[@class="option"]/span[contains(text(),"' + numBeds + '")]')).click();
        });
    },

    setMinBaths: function(numBaths) {
        var minBaths = page.homeSearchEugene.elements.minBathsInput;
        return driver.findElement(minBaths).click().then(function() {
            return driver.findElement(by.xpath('//div[@class="option"]/span[contains(text(),"' + numBaths + '")]')).click();
        });
    },

    clickApplyFilters: function() {
        var button = page.homeSearchEugene.elements.applyFiltersButton;
        return driver.findElement(button).click();
    },

    verifyPrice: function(price) {
        return driver.wait(until.elementLocated(by.xpath('//span[contains(@class, "wideSidepaneFilterCount") and text() = "3"]')), 30000).then(function() {
            return driver.findElements(by.xpath('//div[contains(@class, "HomeCardContainer")]/div[contains(@class, "MapHomeCardReact")]'))
                .then(function(cards) {
                    cards.forEach(function() {
                        driver.findElement(by.xpath('//span[contains(@class, "homecardV2Price")]')).getAttribute('innerHTML').then(function(s) {
                            var num = parseInt(s.replace(/[$,]/g, ''), 10);
                            expect(num).to.be.at.most(price);
                        });
                    });
                });
        });

    },

    verifyBeds: function(bedrooms) {
        return driver.wait(until.elementLocated(by.xpath('//span[contains(@class, "wideSidepaneFilterCount") and text() = "3"]')), 30000).then(function() {
            return driver.findElements(by.xpath('//div[contains(@class, "HomeCardContainer")]/div[contains(@class, "MapHomeCardReact")]'))
                .then(function(cards) {
                    cards.forEach(function() {
                        driver.findElement(by.xpath('//div[contains(@class, "stats") and contains(text(),"Beds")]')).getAttribute('innerHTML').then(function(bds) {
                            var num = parseInt(bds.replace(/beds/gi, ''), 10);
                            expect(num).to.be.at.least(bedrooms);
                        });
                    });
                });
        });

    },

    verifyBaths: function(bathrooms) {
        return driver.wait(until.elementLocated(by.xpath('//span[contains(@class, "wideSidepaneFilterCount") and text() = "3"]')), 30000).then(function() {
            return driver.findElements(by.xpath('//div[contains(@class, "HomeCardContainer")]/div[contains(@class, "MapHomeCardReact")]'))
                .then(function(cards) {
                    cards.forEach(function() {
                        driver.findElement(by.xpath('//div[contains(@class, "stats") and contains(text(),"Baths")]')).getAttribute('innerHTML').then(function(bths) {
                            var num = parseInt(bths.replace(/baths/gi, ''), 10);
                            expect(num).to.be.at.least(bathrooms);
                        });
                    });
                });
        });
    }
};
