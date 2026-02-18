
Feature: Open Library Authors
    @smoke
    Scenario Outline: Validate the open library author resource OL1A
        Given I set the open library author endpoint "<endpoint>" ready
        When I send a GET request to the open library author resource "<resource>"
        Then the response status code should be "<statusCode>"
        Then the response body should contain "<key>" as one of the keys
        Then the "<key>" key should have "<value>"

        Examples:
            | endpoint | resource | statusCode | key             | value                      |
            | authors  | OL1A     | 200        | personal_name   | Sachi Rautroy              |
            | authors  | OL1A     | 200        | alternate_names | Yugashrashta Sachi Routray |

