
Feature: Make Hotel Booking
  As a Booking Agent
  I want to make / delete bookings on the online portal
  So that there is a record of guests list

Background:

  Given I am on the hotel Booking page

    Scenario Outline: Save booking - Happy Path

      When I add booking details with <fName>,<sName>,<deposit>,<depositPaid>,<checkin> and <checkout>
      Then Save the booking and verify the same

      Examples:
      |fName|sName      |deposit          |depositPaid  |checkin      |checkout   |
      |Joe  |Adams      |0                |True         |2018-10-01   |2018-10-01 |
      |Delete  |Pickle  |10.99            |False        |2028-02-29   |2018-10-01 |
      |Adam  |Sandler   |99999999999.99   |False        |2058-02-29   |2088-10-01 |


    Scenario Outline: Save Booking - Invalid Inputs

      When I add booking details with <fName>,<sName>,<deposit>,<depositPaid>,<checkin> and <checkout>
      Then Save the booking and verify the same

      Examples:
        |fName|sName      |deposit          |depositPaid  |checkin      |checkout   |
        |Joe  |Adams      |0                |True         |2000-10-01   |2000-10-01 |
        |Sam  |Pickle     |10.99            |False        |2028-02-29   |2018-10-01 |
        |Adam  |Sandler   |99999999999.99   |True         |1900-02-29   |2088-10-01 |
        |Mark  |Hu        |00.00            |False        |2019-02-29   |2018-10-01 |


    Scenario: Delete First Booking on portal
      Then I am able to delete the bookings


