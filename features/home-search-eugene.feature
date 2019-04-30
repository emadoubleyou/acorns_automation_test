Feature: Perform a home search
  As a buyer, I want to search real estate sites for homes

  @redfin
  Scenario: 3 bedroom, 2 bathrooms under $300k in Eugene
    Given I am on the Redfin search site for Eugene, OR
    And I have expanded the options filter
    And I have entered a max price of "$300k"
    And I have entered a min bedrooms value of "3"
    And I have entered a min baths value of "2+"
    When I click the Apply Filters button
    Then I see homes less than or equal to "300000"
    And The homes have at least "3" bedrooms
    And The homes have at least "2" bathrooms