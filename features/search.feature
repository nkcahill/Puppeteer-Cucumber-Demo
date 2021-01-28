Feature: Search for Sauce Demo

    This feature verifies user can navigate to SauceDemo from Google via Lucky button

    Scenario: Verify Search

        Given I open a Google Chrome Browser
        When I enter "Sauce Demo" in the search field
        And I click the Lucky button
        Then the "Swag Labs" page is displayed
